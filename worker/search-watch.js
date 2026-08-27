const SEARCH_FILTER_SCHEMA_VERSION = 1;
const SEARCH_LIMITS = Object.freeze({ savedSearches: 3, watchedSearches: 1 });
const encoder = new TextEncoder();

const RESOURCES = new Set(['storage', 'bandwidth', 'requests', 'build_time', 'users']);
const PERIODS = new Set(['', 'day', 'week', 'month', 'year', 'total', 'lifetime', 'session', 'variable']);
const SCOPES = new Set(['', 'account', 'organization', 'project', 'user', 'service', 'repository', 'cluster', 'hub', 'namespace']);
const OVERAGES = new Set(['', 'billed', 'blocked', 'degraded', 'not-applicable', 'unknown']);
const WATCH_FREQUENCIES = new Set(['weekly', 'immediate']);
const COMPARABLE_KINDS = new Set(['limit', 'unlimited', 'unmetered']);

function securityHeaders() {
  return {
    'Cache-Control': 'no-store, max-age=0',
    'Referrer-Policy': 'no-referrer',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
  };
}

function allowedOrigin(request, env) {
  const origin = request.headers.get('Origin');
  if (!origin) return null;
  if (origin === env.ALLOWED_ORIGIN || /^http:\/\/(127\.0\.0\.1|localhost)(:\d+)?$/.test(origin)) return origin;
  return false;
}

function corsHeaders(request, env) {
  const origin = allowedOrigin(request, env);
  return origin ? {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Max-Age': '86400',
    Vary: 'Origin',
  } : {};
}

function json(data, status = 200, headers = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...securityHeaders(), 'Content-Type': 'application/json; charset=utf-8', ...headers },
  });
}

async function sha256Hex(value) {
  const digest = await crypto.subtle.digest('SHA-256', encoder.encode(value));
  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, '0')).join('');
}

function bearerToken(request) {
  const value = request.headers.get('Authorization') ?? '';
  return value.match(/^Bearer\s+(.+)$/i)?.[1]?.trim() || null;
}

async function authenticatedUser(request, env) {
  const token = bearerToken(request);
  if (!token || !env.COMPARISONS_DB) return null;
  const hash = await sha256Hex(token);
  const now = Math.floor(Date.now() / 1000);
  const row = await env.COMPARISONS_DB.prepare(`
    SELECT u.id, u.plan, u.github_login
    FROM account_sessions s
    JOIN users u ON u.id = s.user_id
    WHERE s.token_hash = ? AND s.expires_at > ?
  `).bind(hash, now).first();
  return row || null;
}

function stableObject(value) {
  if (Array.isArray(value)) return value.map(stableObject);
  if (!value || typeof value !== 'object') return value;
  return Object.fromEntries(Object.keys(value).sort().map((key) => [key, stableObject(value[key])]));
}

function stableStringify(value) {
  return JSON.stringify(stableObject(value));
}

function booleanFilter(value) {
  if (value === true || value === 'true') return true;
  if (value === false || value === 'false') return false;
  return null;
}

function normalizeExplorerFilters(value = {}, fallbackUrl = '/explorer/') {
  let params = new URLSearchParams();
  try { params = new URL(fallbackUrl, 'https://gpld.invalid').searchParams; } catch {}
  const read = (key, fallback = '') => value?.[key] ?? params.get(key) ?? fallback;
  const resource = String(read('resource', 'storage'));
  const period = String(read('period', 'month'));
  const scope = String(read('scope', 'account'));
  const overage = String(read('overage', ''));
  const rawMinimum = value?.minimumComparableValue;
  const minimumComparableValue = rawMinimum === null || rawMinimum === undefined || rawMinimum === ''
    ? null
    : Number(rawMinimum);
  return {
    schemaVersion: SEARCH_FILTER_SCHEMA_VERSION,
    resource: RESOURCES.has(resource) ? resource : 'storage',
    period: PERIODS.has(period) ? period : 'month',
    scope: SCOPES.has(scope) ? scope : 'account',
    overage: OVERAGES.has(overage) ? overage : '',
    cardRequired: booleanFilter(value?.cardRequired ?? value?.card ?? params.get('card')),
    permanent: booleanFilter(value?.permanent ?? params.get('permanent')),
    minimumComparableValue: Number.isFinite(minimumComparableValue) && minimumComparableValue >= 0 ? minimumComparableValue : null,
  };
}

function cleanExplorerUrl(value, env) {
  try {
    const url = new URL(String(value || '/explorer/'), env.ALLOWED_ORIGIN);
    if (url.origin !== env.ALLOWED_ORIGIN || url.pathname !== '/explorer/') return null;
    return `${url.pathname}${url.search}`.slice(0, 1200);
  } catch { return null; }
}

function cleanName(value) {
  const name = String(value ?? '').trim().replace(/\s+/g, ' ');
  return (name || 'Recherche Explorer').slice(0, 80);
}

function publicSearch(row) {
  let filters = {};
  try { filters = JSON.parse(row.filters_json || '{}'); } catch {}
  return {
    id: Number(row.id),
    name: row.name,
    url: row.url,
    filters: normalizeExplorerFilters(filters, row.url),
    watchEnabled: Boolean(row.watch_enabled),
    watchFrequency: row.watch_frequency || 'weekly',
    watchStartedAt: row.watch_started_at ? Number(row.watch_started_at) * 1000 : null,
    lastEvaluatedAt: row.last_evaluated_at ? Number(row.last_evaluated_at) * 1000 : null,
    createdAt: Number(row.created_at) * 1000,
  };
}

function freeLimit(request, env, feature, limit) {
  return json({ error: 'Limite du compte gratuit atteinte', code: 'free_limit', feature, limit, upgrade: 'pro' }, 409, corsHeaders(request, env));
}

async function countSearches(env, userId, watchedOnly = false, excludingId = null) {
  let sql = `SELECT COUNT(*) AS total FROM saved_searches WHERE user_id = ?${watchedOnly ? ' AND watch_enabled = 1' : ''}`;
  const bindings = [userId];
  if (excludingId) { sql += ' AND id != ?'; bindings.push(excludingId); }
  const row = await env.COMPARISONS_DB.prepare(sql).bind(...bindings).first();
  return Number(row?.total ?? 0);
}

async function fetchRadarCatalogue(env, fetchImpl) {
  const response = await fetchImpl(new URL('/radar.json', env.ALLOWED_ORIGIN), { headers: { Accept: 'application/json' } });
  if (!response.ok) throw new Error(`Radar catalogue unavailable (${response.status})`);
  const payload = await response.json();
  if (Number(payload?.radarSchemaVersion) !== 1 || !payload?.radarCatalogue || typeof payload.radarCatalogue !== 'object') {
    throw new Error('Radar catalogue schema is unavailable');
  }
  return payload.radarCatalogue;
}

function quotaComparableValue(quota) {
  if (typeof quota?.amount === 'number' && Number.isFinite(quota.amount)) return quota.amount;
  if (COMPARABLE_KINDS.has(String(quota?.kind || 'limit')) && ['unlimited', 'unmetered'].includes(String(quota?.kind))) return Number.POSITIVE_INFINITY;
  return null;
}

function offerMatchesFilters(offer, filters) {
  if (!offer || offer.status === 'obsolete') return false;
  if (filters.cardRequired !== null && Boolean(offer.cardRequired) !== filters.cardRequired) return false;
  if (filters.permanent !== null && Boolean(offer.permanent) !== filters.permanent) return false;
  return (Array.isArray(offer.quotas) ? offer.quotas : []).some((quota) => {
    if (String(quota.metric) !== filters.resource) return false;
    if (filters.period && String(quota.period) !== filters.period) return false;
    if (filters.scope && String(quota.scope) !== filters.scope) return false;
    if (filters.overage && String(quota.overage) !== filters.overage) return false;
    const comparable = quotaComparableValue(quota);
    if (comparable === null) return false;
    return filters.minimumComparableValue === null || comparable >= filters.minimumComparableValue;
  });
}

function matchingOfferIds(catalogue, filters) {
  return Object.entries(catalogue)
    .filter(([, offer]) => offerMatchesFilters(offer, filters))
    .map(([id]) => id)
    .sort();
}

async function listSearches(request, env, user) {
  const result = await env.COMPARISONS_DB.prepare(`
    SELECT id, name, url, filters_json, watch_enabled, watch_frequency, watch_started_at, last_evaluated_at, created_at
    FROM saved_searches WHERE user_id = ? ORDER BY created_at DESC
  `).bind(user.id).all();
  const searches = (result.results ?? []).map(publicSearch);
  return json({
    searches,
    limits: {
      savedSearches: user.plan === 'pro' ? null : SEARCH_LIMITS.savedSearches,
      watchedSearches: user.plan === 'pro' ? null : SEARCH_LIMITS.watchedSearches,
    },
    watchedCount: searches.filter((item) => item.watchEnabled).length,
  }, 200, corsHeaders(request, env));
}

async function createSearch(request, env, user) {
  const payload = await request.json().catch(() => null);
  const url = cleanExplorerUrl(payload?.url, env);
  if (!url) return json({ error: 'Recherche invalide' }, 400, corsHeaders(request, env));
  const filters = normalizeExplorerFilters(payload?.filters, url);
  const filtersJson = stableStringify(filters);
  const existing = await env.COMPARISONS_DB.prepare(`
    SELECT id, name, url, filters_json, watch_enabled, watch_frequency, watch_started_at, last_evaluated_at, created_at
    FROM saved_searches WHERE user_id = ? AND filters_json = ? ORDER BY id LIMIT 1
  `).bind(user.id, filtersJson).first();
  if (existing) return json({ search: publicSearch(existing), created: false }, 200, corsHeaders(request, env));
  if (user.plan !== 'pro' && await countSearches(env, user.id) >= SEARCH_LIMITS.savedSearches) {
    return freeLimit(request, env, 'savedSearches', SEARCH_LIMITS.savedSearches);
  }
  const now = Math.floor(Date.now() / 1000);
  const name = cleanName(payload?.name);
  const result = await env.COMPARISONS_DB.prepare(`
    INSERT INTO saved_searches (user_id, name, url, filters_json, watch_enabled, watch_frequency, created_at)
    VALUES (?, ?, ?, ?, 0, 'weekly', ?)
  `).bind(user.id, name, url, filtersJson, now).run();
  const id = Number(result.meta?.last_row_id);
  const row = await env.COMPARISONS_DB.prepare(`
    SELECT id, name, url, filters_json, watch_enabled, watch_frequency, watch_started_at, last_evaluated_at, created_at
    FROM saved_searches WHERE id = ? AND user_id = ?
  `).bind(id, user.id).first();
  return json({ search: publicSearch(row), created: true }, 201, corsHeaders(request, env));
}

async function deleteSearch(request, env, user) {
  const id = Number.parseInt(new URL(request.url).searchParams.get('id') ?? '', 10);
  if (!Number.isInteger(id) || id <= 0) return json({ error: 'Identifiant invalide' }, 400, corsHeaders(request, env));
  await env.COMPARISONS_DB.prepare('DELETE FROM search_watch_events WHERE user_id = ? AND saved_search_id = ?').bind(user.id, id).run();
  await env.COMPARISONS_DB.prepare('DELETE FROM saved_searches WHERE id = ? AND user_id = ?').bind(id, user.id).run();
  return json({ deleted: true }, 200, corsHeaders(request, env));
}

async function updateWatch(request, env, fetchImpl, user) {
  const payload = await request.json().catch(() => null);
  const id = Number.parseInt(String(payload?.id ?? ''), 10);
  if (!Number.isInteger(id) || id <= 0) return json({ error: 'Identifiant invalide' }, 400, corsHeaders(request, env));
  const row = await env.COMPARISONS_DB.prepare(`
    SELECT id, name, url, filters_json, watch_enabled, watch_frequency, watch_started_at, last_evaluated_at, created_at
    FROM saved_searches WHERE id = ? AND user_id = ?
  `).bind(id, user.id).first();
  if (!row) return json({ error: 'Recherche introuvable' }, 404, corsHeaders(request, env));
  const active = payload?.active !== false;
  if (!active) {
    await env.COMPARISONS_DB.prepare(`
      UPDATE saved_searches SET watch_enabled = 0, watch_frequency = 'weekly', watch_started_at = NULL,
        last_evaluated_at = NULL, last_match_offer_ids = NULL WHERE id = ? AND user_id = ?
    `).bind(id, user.id).run();
  } else {
    if (user.plan !== 'pro' && await countSearches(env, user.id, true, id) >= SEARCH_LIMITS.watchedSearches) {
      return freeLimit(request, env, 'watchedSearches', SEARCH_LIMITS.watchedSearches);
    }
    const requestedFrequency = WATCH_FREQUENCIES.has(payload?.frequency) ? payload.frequency : 'weekly';
    const frequency = user.plan === 'pro' ? requestedFrequency : 'weekly';
    let filters;
    try { filters = normalizeExplorerFilters(JSON.parse(row.filters_json || '{}'), row.url); }
    catch { filters = normalizeExplorerFilters({}, row.url); }
    const catalogue = await fetchRadarCatalogue(env, fetchImpl);
    const matches = matchingOfferIds(catalogue, filters);
    const now = Math.floor(Date.now() / 1000);
    await env.COMPARISONS_DB.prepare(`
      UPDATE saved_searches SET filters_json = ?, watch_enabled = 1, watch_frequency = ?, watch_started_at = ?,
        last_evaluated_at = ?, last_match_offer_ids = ? WHERE id = ? AND user_id = ?
    `).bind(stableStringify(filters), frequency, now, now, JSON.stringify(matches), id, user.id).run();
  }
  const updated = await env.COMPARISONS_DB.prepare(`
    SELECT id, name, url, filters_json, watch_enabled, watch_frequency, watch_started_at, last_evaluated_at, created_at
    FROM saved_searches WHERE id = ? AND user_id = ?
  `).bind(id, user.id).first();
  return json({ search: publicSearch(updated) }, 200, corsHeaders(request, env));
}

async function latestRadarEventForOffer(db, offerId, after, before) {
  return db.prepare(`
    SELECT event_id, offer_id, event_type, severity, field, old_value, new_value, detected_at
    FROM offer_change_events
    WHERE offer_id = ? AND detected_at > ? AND detected_at <= ?
    ORDER BY detected_at DESC, event_id DESC LIMIT 1
  `).bind(offerId, after || 0, before).first();
}

async function criticalRadarEvents(db, after, before) {
  const result = await db.prepare(`
    SELECT event_id, offer_id, event_type, severity, field, old_value, new_value, detected_at
    FROM offer_change_events
    WHERE severity = 'critical' AND verified = 1 AND detected_at > ? AND detected_at <= ?
    ORDER BY detected_at ASC, event_id ASC
  `).bind(after || 0, before).all();
  return result.results ?? [];
}

async function insertWatchEvent(db, search, offerId, eventType, previousMatches, currentMatches, now, radarOverride = null) {
  const radar = radarOverride ?? await latestRadarEventForOffer(db, offerId, Number(search.last_evaluated_at || 0), now);
  const fingerprint = await sha256Hex([
    search.id,
    offerId,
    eventType,
    radar?.event_id || '',
    search.last_evaluated_at || 0,
    JSON.stringify(previousMatches),
    JSON.stringify(currentMatches),
  ].join('\u0000'));
  const id = `swe_${fingerprint.slice(0, 32)}`;
  const result = await db.prepare(`
    INSERT OR IGNORE INTO search_watch_events (
      id, user_id, saved_search_id, offer_id, event_type, detected_at,
      radar_event_id, radar_event_type, severity, field, old_value, new_value, fingerprint, created_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).bind(
    id, search.user_id, Number(search.id), offerId, eventType, Number(radar?.detected_at || now),
    radar?.event_id ?? null, radar?.event_type ?? null, radar?.severity ?? null,
    radar?.field ?? null, radar?.old_value ?? null, radar?.new_value ?? null,
    fingerprint, now,
  ).run();
  return Number(result.meta?.changes ?? 0);
}

async function evaluateSearch(db, search, catalogue, now) {
  let filters;
  try { filters = normalizeExplorerFilters(JSON.parse(search.filters_json || '{}'), search.url); }
  catch { filters = normalizeExplorerFilters({}, search.url); }
  const currentMatches = matchingOfferIds(catalogue, filters);
  let previousMatches = null;
  try {
    const parsed = JSON.parse(search.last_match_offer_ids || 'null');
    if (Array.isArray(parsed)) previousMatches = parsed.map(String).sort();
  } catch {}
  if (previousMatches === null) {
    await db.prepare(`UPDATE saved_searches SET last_evaluated_at = ?, last_match_offer_ids = ? WHERE id = ?`)
      .bind(now, JSON.stringify(currentMatches), search.id).run();
    return { events: 0, baseline: true };
  }

  const previousSet = new Set(previousMatches);
  const currentSet = new Set(currentMatches);
  const added = currentMatches.filter((id) => !previousSet.has(id));
  const removed = previousMatches.filter((id) => !currentSet.has(id));
  const retained = new Set(currentMatches.filter((id) => previousSet.has(id)));
  let events = 0;

  for (const offerId of added) {
    events += await insertWatchEvent(db, search, offerId, 'MATCH_ADDED', previousMatches, currentMatches, now);
  }
  for (const offerId of removed) {
    events += await insertWatchEvent(db, search, offerId, 'MATCH_REMOVED', previousMatches, currentMatches, now);
  }

  // Une offre peut rester compatible avec la recherche tout en devenant nettement plus risquée.
  // Dans ce cas, on conserve le match mais on remonte le changement critique vérifié du radar.
  if (retained.size) {
    const criticalEvents = await criticalRadarEvents(db, Number(search.last_evaluated_at || 0), now);
    for (const radar of criticalEvents) {
      if (!retained.has(String(radar.offer_id))) continue;
      events += await insertWatchEvent(
        db,
        search,
        String(radar.offer_id),
        'MATCH_CRITICAL_CHANGED',
        previousMatches,
        currentMatches,
        now,
        radar,
      );
    }
  }

  await db.prepare(`UPDATE saved_searches SET last_evaluated_at = ?, last_match_offer_ids = ? WHERE id = ?`)
    .bind(now, JSON.stringify(currentMatches), search.id).run();
  return { events, baseline: false };
}

async function runSearchWatches(env, fetchImpl = fetch, { weekly = false } = {}) {
  if (!env.COMPARISONS_DB || !env.ALLOWED_ORIGIN) return { evaluated: 0, events: 0 };
  const db = env.COMPARISONS_DB;
  const condition = weekly ? '' : "AND s.watch_frequency = 'immediate' AND u.plan = 'pro'";
  const result = await db.prepare(`
    SELECT s.id, s.user_id, s.url, s.filters_json, s.last_evaluated_at, s.last_match_offer_ids, s.watch_frequency, u.plan
    FROM saved_searches s JOIN users u ON u.id = s.user_id
    WHERE s.watch_enabled = 1 ${condition}
    ORDER BY s.id
  `).all();
  const searches = result.results ?? [];
  if (!searches.length) return { evaluated: 0, events: 0 };
  const catalogue = await fetchRadarCatalogue(env, fetchImpl);
  const now = Math.floor(Date.now() / 1000);
  let events = 0;
  for (const search of searches) events += (await evaluateSearch(db, search, catalogue, now)).events;
  return { evaluated: searches.length, events };
}

async function listWatchEvents(request, env, user) {
  const url = new URL(request.url);
  const limit = Math.min(Math.max(Number.parseInt(url.searchParams.get('limit') || '20', 10) || 20, 1), 100);
  const result = await env.COMPARISONS_DB.prepare(`
    SELECT e.id, e.saved_search_id, e.offer_id, e.event_type, e.detected_at, e.radar_event_id,
      e.radar_event_type, e.severity, e.field, e.old_value, e.new_value, s.name AS search_name
    FROM search_watch_events e
    LEFT JOIN saved_searches s ON s.id = e.saved_search_id AND s.user_id = e.user_id
    WHERE e.user_id = ? ORDER BY e.detected_at DESC, e.id DESC LIMIT ?
  `).bind(user.id, limit).all();
  return json({ events: (result.results ?? []).map((row) => ({
    id: row.id,
    searchId: Number(row.saved_search_id),
    searchName: row.search_name || 'Recherche supprimée',
    offerId: row.offer_id,
    eventType: row.event_type,
    detectedAt: Number(row.detected_at) * 1000,
    radarEventId: row.radar_event_id || null,
    radarEventType: row.radar_event_type || null,
    severity: row.severity || null,
    field: row.field || null,
    oldValue: row.old_value,
    newValue: row.new_value,
  })) }, 200, corsHeaders(request, env));
}

async function handleSearchWatchRequest(request, env, fetchImpl = fetch) {
  const url = new URL(request.url);
  const handlesSearch = url.pathname === '/api/account/searches' || url.pathname === '/api/account/searches/watch';
  const handlesEvents = url.pathname === '/api/account/search-watch/events';
  if (!handlesSearch && !handlesEvents) return null;
  const headers = corsHeaders(request, env);
  if (allowedOrigin(request, env) === false) return json({ error: 'Origin not allowed' }, 403, headers);
  if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers });
  if (!env.COMPARISONS_DB) return json({ error: 'Account database is not configured' }, 503, headers);
  const user = await authenticatedUser(request, env);
  if (!user) return json({ error: 'Authentication required', code: 'unauthorized' }, 401, headers);

  if (url.pathname === '/api/account/searches' && request.method === 'GET') return listSearches(request, env, user);
  if (url.pathname === '/api/account/searches' && request.method === 'POST') return createSearch(request, env, user);
  if (url.pathname === '/api/account/searches' && request.method === 'DELETE') return deleteSearch(request, env, user);
  if (url.pathname === '/api/account/searches/watch' && request.method === 'PUT') return updateWatch(request, env, fetchImpl, user);
  if (url.pathname === '/api/account/search-watch/events' && request.method === 'GET') return listWatchEvents(request, env, user);
  return json({ error: 'Not found' }, 404, headers);
}

export {
  SEARCH_FILTER_SCHEMA_VERSION,
  SEARCH_LIMITS,
  handleSearchWatchRequest,
  matchingOfferIds,
  normalizeExplorerFilters,
  offerMatchesFilters,
  runSearchWatches,
  stableStringify,
};
