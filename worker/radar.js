const RADAR_SCHEMA_VERSION = 1;
const SEVERITIES = new Set(['info', 'important', 'critical']);
const MAX_EVENTS_LIMIT = 100;

function securityHeaders() {
  return {
    'Cache-Control': 'no-store, max-age=0',
    'Referrer-Policy': 'no-referrer',
    'X-Content-Type-Options': 'nosniff',
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
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
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

function stableObject(value) {
  if (Array.isArray(value)) return value.map(stableObject);
  if (!value || typeof value !== 'object') return value;
  return Object.fromEntries(Object.keys(value).sort().map((key) => [key, stableObject(value[key])]));
}

function stableStringify(value) {
  return JSON.stringify(stableObject(value));
}

function stringArray(value) {
  return [...new Set((Array.isArray(value) ? value : []).map((item) => String(item).trim()).filter(Boolean))]
    .sort((a, b) => a.localeCompare(b));
}

function normalizeAlerts(value) {
  return (Array.isArray(value) ? value : [])
    .map((alert) => ({
      type: String(alert?.type ?? ''),
      level: String(alert?.level ?? alert?.niveau ?? ''),
      label: String(alert?.label ?? alert?.libelle ?? ''),
      detail: String(alert?.detail ?? ''),
    }))
    .sort((a, b) => stableStringify(a).localeCompare(stableStringify(b)));
}

function normalizeQuotas(value) {
  return (Array.isArray(value) ? value : [])
    .filter((quota) => quota && typeof quota === 'object' && quota.id)
    .map((quota) => ({
      id: String(quota.id),
      metric: String(quota.metric ?? ''),
      amount: typeof quota.amount === 'number' && Number.isFinite(quota.amount) ? quota.amount : null,
      unit: String(quota.unit ?? ''),
      period: String(quota.period ?? ''),
      scope: String(quota.scope ?? ''),
      reset: String(quota.reset ?? ''),
      overage: String(quota.overage ?? ''),
      kind: String(quota.kind ?? 'limit'),
      shared: Boolean(quota.shared),
    }))
    .sort((a, b) => a.id.localeCompare(b.id));
}

function normalizeRadarOffer(raw, id) {
  return {
    schemaVersion: RADAR_SCHEMA_VERSION,
    present: true,
    id: String(raw?.id ?? id),
    name: String(raw?.name ?? id),
    freeTier: String(raw?.freeTier ?? ''),
    cardRequired: Boolean(raw?.cardRequired),
    overageBilled: Boolean(raw?.overageBilled),
    permanent: Boolean(raw?.permanent),
    status: String(raw?.status ?? 'active'),
    sourceUrl: raw?.sourceUrl ? String(raw.sourceUrl) : null,
    verificationState: raw?.verificationState ? String(raw.verificationState) : null,
    verifiedAt: raw?.verifiedAt ? String(raw.verifiedAt) : null,
    latestChangeAt: raw?.latestChangeAt ? String(raw.latestChangeAt) : null,
    conditions: stringArray(raw?.conditions),
    restrictions: stringArray(raw?.restrictions),
    alerts: normalizeAlerts(raw?.alerts),
    quotas: normalizeQuotas(raw?.quotas),
  };
}

function missingSnapshot(id, previous = {}) {
  return {
    schemaVersion: RADAR_SCHEMA_VERSION,
    present: false,
    id: String(id),
    name: String(previous.name ?? id),
    freeTier: '',
    cardRequired: false,
    overageBilled: false,
    permanent: false,
    status: 'missing',
    sourceUrl: previous.sourceUrl ?? null,
    verificationState: null,
    verifiedAt: null,
    latestChangeAt: null,
    conditions: [],
    restrictions: [],
    alerts: [],
    quotas: [],
  };
}

function verifiedFrom(snapshot) {
  if (!snapshot?.present || snapshot.status === 'a_verifier') return false;
  return !['inconclusive', 'controle_requis'].includes(snapshot.verificationState);
}

function scalarValue(value) {
  if (value === null || value === undefined) return null;
  return typeof value === 'string' ? value : JSON.stringify(value);
}

function makeChange(field, oldValue, newValue, eventType, severity) {
  return { field, oldValue: scalarValue(oldValue), newValue: scalarValue(newValue), eventType, severity };
}

function quotaChanges(previousQuotas, currentQuotas) {
  const changes = [];
  const previous = new Map(previousQuotas.map((quota) => [quota.id, quota]));
  const current = new Map(currentQuotas.map((quota) => [quota.id, quota]));

  for (const id of [...new Set([...previous.keys(), ...current.keys()])].sort()) {
    const before = previous.get(id);
    const after = current.get(id);
    if (!before && after) {
      changes.push(makeChange(`quota.${id}`, null, after, 'QUOTA_ADDED', 'info'));
      continue;
    }
    if (before && !after) {
      changes.push(makeChange(`quota.${id}`, before, null, 'QUOTA_REMOVED', 'important'));
      continue;
    }
    if (!before || !after) continue;

    if (before.amount !== after.amount) {
      let eventType = 'QUOTA_CHANGED';
      let severity = 'important';
      if (typeof before.amount === 'number' && typeof after.amount === 'number' && before.unit === after.unit && before.period === after.period) {
        if (after.amount < before.amount) eventType = 'QUOTA_DECREASED';
        if (after.amount > before.amount) {
          eventType = 'QUOTA_INCREASED';
          severity = 'info';
        }
      }
      changes.push(makeChange(`quota.${id}.amount`, before.amount, after.amount, eventType, severity));
    }

    if (before.overage !== after.overage) {
      changes.push(makeChange(
        `quota.${id}.overage`,
        before.overage,
        after.overage,
        'QUOTA_OVERAGE_CHANGED',
        after.overage === 'billed' ? 'critical' : 'info',
      ));
    }

    const structuralKeys = ['metric', 'unit', 'period', 'scope', 'reset', 'kind', 'shared'];
    if (structuralKeys.some((key) => before[key] !== after[key])) {
      changes.push(makeChange(`quota.${id}`, before, after, 'QUOTA_CHANGED', 'important'));
    }
  }
  return changes;
}

function detectOfferChanges(previous, current) {
  if (!previous?.present && current?.present) {
    return [makeChange('status', 'missing', current.status, 'OFFER_RESTORED', 'important')];
  }
  if (previous?.present && !current?.present) {
    return [makeChange('status', previous.status, 'missing', 'OFFER_REMOVED_FROM_CATALOGUE', 'critical')];
  }
  if (!previous?.present || !current?.present) return [];

  const changes = [];
  if (previous.status !== current.status) {
    const eventType = current.status === 'obsolete'
      ? 'FREE_TIER_REMOVED'
      : previous.status === 'obsolete' && current.status === 'active'
        ? 'FREE_TIER_RESTORED'
        : 'STATUS_CHANGED';
    const severity = eventType === 'FREE_TIER_REMOVED'
      ? 'critical'
      : eventType === 'FREE_TIER_RESTORED' ? 'info' : 'important';
    changes.push(makeChange('status', previous.status, current.status, eventType, severity));
  }

  if (previous.cardRequired !== current.cardRequired) {
    changes.push(makeChange(
      'cardRequired', previous.cardRequired, current.cardRequired,
      'PAYMENT_REQUIREMENT_CHANGED', current.cardRequired ? 'critical' : 'info',
    ));
  }
  if (previous.overageBilled !== current.overageBilled) {
    changes.push(makeChange(
      'overageBilled', previous.overageBilled, current.overageBilled,
      'BILLING_RISK_CHANGED', current.overageBilled ? 'critical' : 'info',
    ));
  }
  if (previous.permanent !== current.permanent) {
    changes.push(makeChange(
      'permanent', previous.permanent, current.permanent,
      'PERMANENCE_CHANGED', current.permanent ? 'info' : 'critical',
    ));
  }
  if (previous.freeTier !== current.freeTier) {
    changes.push(makeChange('freeTier', previous.freeTier, current.freeTier, 'FREE_TIER_CHANGED', 'important'));
  }
  if (stableStringify(previous.conditions) !== stableStringify(current.conditions)) {
    changes.push(makeChange('conditions', previous.conditions, current.conditions, 'CONDITIONS_CHANGED', 'important'));
  }
  if (stableStringify(previous.restrictions) !== stableStringify(current.restrictions)) {
    changes.push(makeChange('restrictions', previous.restrictions, current.restrictions, 'RESTRICTIONS_CHANGED', 'important'));
  }
  if (stableStringify(previous.alerts) !== stableStringify(current.alerts)) {
    const critical = current.alerts.some((alert) => alert.level === 'critique');
    changes.push(makeChange('alerts', previous.alerts, current.alerts, 'ALERTS_CHANGED', critical ? 'critical' : 'important'));
  }
  changes.push(...quotaChanges(previous.quotas, current.quotas));
  return changes;
}

async function sha256Hex(value) {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, '0')).join('');
}

function occurredAtForChange(previous, current, detectedAt) {
  const currentTime = Date.parse(current?.latestChangeAt || '');
  const previousTime = Date.parse(previous?.latestChangeAt || '');
  if (Number.isFinite(currentTime) && currentTime > previousTime && currentTime <= detectedAt * 1000 + 86400_000) {
    return Math.floor(currentTime / 1000);
  }
  return detectedAt;
}

async function fetchRadarCatalogue(env, fetchImpl) {
  if (!env.ALLOWED_ORIGIN) throw new Error('ALLOWED_ORIGIN is not configured');
  const response = await fetchImpl(new URL('/radar.json', env.ALLOWED_ORIGIN), { headers: { Accept: 'application/json' } });
  if (!response.ok) throw new Error(`Offer radar source unavailable (${response.status})`);
  const payload = await response.json();
  if (Number(payload.radarSchemaVersion) !== RADAR_SCHEMA_VERSION || !payload.radarCatalogue || typeof payload.radarCatalogue !== 'object') {
    throw new Error('Offer radar schema is unavailable or incompatible');
  }
  return payload.radarCatalogue;
}

async function insertEvent(db, { offerId, change, previousState, previousHash, currentHash, previous, current, detectedAt }) {
  const fingerprint = await sha256Hex([
    offerId,
    previousHash,
    previousState.last_observed_at,
    currentHash,
    change.eventType,
    change.field,
  ].join('\u0000'));
  const eventId = `evt_${fingerprint.slice(0, 32)}`;
  const occurredAt = occurredAtForChange(previous, current, detectedAt);
  const result = await db.prepare(`
    INSERT OR IGNORE INTO offer_change_events (
      event_id, offer_id, occurred_at, detected_at, field, old_value, new_value,
      event_type, severity, source_url, verified, fingerprint, metadata_json
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).bind(
    eventId,
    offerId,
    occurredAt,
    detectedAt,
    change.field,
    change.oldValue,
    change.newValue,
    change.eventType,
    change.severity,
    current.sourceUrl ?? previous.sourceUrl ?? null,
    verifiedFrom(current) ? 1 : 0,
    fingerprint,
    JSON.stringify({ radarSchemaVersion: RADAR_SCHEMA_VERSION, previousHash, currentHash }),
  ).run();
  return Number(result.meta?.changes ?? 0);
}

async function insertState(db, offerId, snapshot, hash, now, changed = false) {
  const parsedVerifiedAt = Date.parse(snapshot.verifiedAt || '');
  const verifiedAt = Number.isFinite(parsedVerifiedAt) ? Math.floor(parsedVerifiedAt / 1000) : null;
  await db.prepare(`
    INSERT INTO offer_radar_state (
      offer_id, snapshot_hash, snapshot_json, first_observed_at, last_observed_at,
      last_changed_at, source_url, verified_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `).bind(
    offerId,
    hash,
    stableStringify(snapshot),
    now,
    now,
    changed ? now : null,
    snapshot.sourceUrl ?? null,
    verifiedAt,
  ).run();
}

async function updateState(db, offerId, snapshot, hash, now, changed) {
  const parsedVerifiedAt = Date.parse(snapshot.verifiedAt || '');
  const verifiedAt = Number.isFinite(parsedVerifiedAt) ? Math.floor(parsedVerifiedAt / 1000) : null;
  await db.prepare(`
    UPDATE offer_radar_state
    SET snapshot_hash = ?, snapshot_json = ?, last_observed_at = ?,
        last_changed_at = CASE WHEN ? = 1 THEN ? ELSE last_changed_at END,
        source_url = ?, verified_at = ?
    WHERE offer_id = ?
  `).bind(
    hash,
    stableStringify(snapshot),
    now,
    changed ? 1 : 0,
    now,
    snapshot.sourceUrl ?? null,
    verifiedAt,
    offerId,
  ).run();
}

async function recordRun(db, startedAt, status, stats, errorMessage = null) {
  const finishedAt = Math.floor(Date.now() / 1000);
  await db.prepare(`
    INSERT INTO offer_radar_runs (
      started_at, finished_at, status, offers_seen, baselines_created, offers_changed, events_created, error_message
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `).bind(
    startedAt,
    finishedAt,
    status,
    stats.offersSeen,
    stats.baselinesCreated,
    stats.offersChanged,
    stats.eventsCreated,
    errorMessage,
  ).run();
}

async function runFreeTierRadar(env, fetchImpl = fetch) {
  if (!env.COMPARISONS_DB) return { status: 'skipped', reason: 'database_unavailable' };
  const db = env.COMPARISONS_DB;
  const startedAt = Math.floor(Date.now() / 1000);
  const stats = { offersSeen: 0, baselinesCreated: 0, offersChanged: 0, eventsCreated: 0 };

  try {
    const catalogue = await fetchRadarCatalogue(env, fetchImpl);
    const currentById = new Map(Object.entries(catalogue).map(([id, raw]) => [id, normalizeRadarOffer(raw, id)]));
    stats.offersSeen = currentById.size;

    const [stateResult, successfulRun] = await Promise.all([
      db.prepare('SELECT offer_id, snapshot_hash, snapshot_json, last_observed_at FROM offer_radar_state').all(),
      db.prepare("SELECT 1 AS ok FROM offer_radar_runs WHERE status = 'success' ORDER BY id DESC LIMIT 1").first(),
    ]);
    const previousById = new Map((stateResult.results ?? []).map((row) => [row.offer_id, row]));
    const initialized = Boolean(successfulRun?.ok);
    const allIds = [...new Set([...currentById.keys(), ...previousById.keys()])].sort();

    for (const offerId of allIds) {
      const previousState = previousById.get(offerId) ?? null;
      let previous = null;
      if (previousState) {
        try { previous = JSON.parse(previousState.snapshot_json); } catch { previous = null; }
      }
      const current = currentById.get(offerId) ?? missingSnapshot(offerId, previous ?? {});
      const currentHash = await sha256Hex(stableStringify(current));

      // Tant qu'aucun scan complet n'a réussi, on (ré)établit uniquement la baseline.
      // Un premier scan interrompu ne peut donc pas provoquer de faux OFFER_ADDED au suivant.
      if (!initialized) {
        if (!previousState) await insertState(db, offerId, current, currentHash, startedAt);
        else if (!previous || previousState.snapshot_hash !== currentHash) {
          await updateState(db, offerId, current, currentHash, startedAt, false);
        }
        stats.baselinesCreated += 1;
        continue;
      }

      if (!previousState) {
        const syntheticPrevious = missingSnapshot(offerId);
        const syntheticHash = await sha256Hex(stableStringify(syntheticPrevious));
        const change = makeChange('status', null, current.status, 'OFFER_ADDED', 'info');
        stats.offersChanged += 1;
        stats.eventsCreated += await insertEvent(db, {
          offerId,
          change,
          previousState: { last_observed_at: startedAt - 1 },
          previousHash: syntheticHash,
          currentHash,
          previous: syntheticPrevious,
          current,
          detectedAt: startedAt,
        });
        await insertState(db, offerId, current, currentHash, startedAt, true);
        continue;
      }

      if (!previous) {
        await updateState(db, offerId, current, currentHash, startedAt, false);
        stats.baselinesCreated += 1;
        continue;
      }
      if (previousState.snapshot_hash === currentHash) continue;

      const changes = detectOfferChanges(previous, current);
      if (changes.length) {
        stats.offersChanged += 1;
        for (const change of changes) {
          stats.eventsCreated += await insertEvent(db, {
            offerId,
            change,
            previousState,
            previousHash: previousState.snapshot_hash,
            currentHash,
            previous,
            current,
            detectedAt: startedAt,
          });
        }
      }
      await updateState(db, offerId, current, currentHash, startedAt, changes.length > 0);
    }

    await recordRun(db, startedAt, 'success', stats);
    return { status: 'success', ...stats };
  } catch (error) {
    await recordRun(db, startedAt, 'error', stats, String(error?.message ?? error).slice(0, 1000)).catch(() => {});
    throw error;
  }
}

function parseSince(value) {
  if (!value) return null;
  if (/^\d+$/.test(value)) return Number(value);
  const time = Date.parse(value);
  return Number.isFinite(time) ? Math.floor(time / 1000) : null;
}

async function listEvents(request, env) {
  const url = new URL(request.url);
  const where = [];
  const bindings = [];
  const offerId = url.searchParams.get('offer_id');
  const severity = url.searchParams.get('severity');
  const eventType = url.searchParams.get('event_type');
  const sinceValue = url.searchParams.get('since');
  const since = parseSince(sinceValue);
  const limit = Math.min(Math.max(Number.parseInt(url.searchParams.get('limit') ?? '30', 10) || 30, 1), MAX_EVENTS_LIMIT);

  if (offerId) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(offerId)) {
      return json({ error: 'offer_id invalide' }, 400, corsHeaders(request, env));
    }
    where.push('offer_id = ?');
    bindings.push(offerId);
  }
  if (severity) {
    if (!SEVERITIES.has(severity)) return json({ error: 'severity invalide' }, 400, corsHeaders(request, env));
    where.push('severity = ?');
    bindings.push(severity);
  }
  if (eventType) {
    if (!/^[A-Z][A-Z0-9_]{2,63}$/.test(eventType)) return json({ error: 'event_type invalide' }, 400, corsHeaders(request, env));
    where.push('event_type = ?');
    bindings.push(eventType);
  }
  if (sinceValue && since === null) return json({ error: 'since invalide' }, 400, corsHeaders(request, env));
  if (since !== null) {
    where.push('detected_at >= ?');
    bindings.push(since);
  }

  const sql = `SELECT event_id, offer_id, occurred_at, detected_at, field, old_value, new_value, event_type, severity, source_url, verified
    FROM offer_change_events
    ${where.length ? `WHERE ${where.join(' AND ')}` : ''}
    ORDER BY detected_at DESC, event_id DESC
    LIMIT ?`;
  const result = await env.COMPARISONS_DB.prepare(sql).bind(...bindings, limit).all();
  return json({
    events: (result.results ?? []).map((row) => ({
      eventId: row.event_id,
      offerId: row.offer_id,
      occurredAt: Number(row.occurred_at) * 1000,
      detectedAt: Number(row.detected_at) * 1000,
      field: row.field,
      oldValue: row.old_value,
      newValue: row.new_value,
      eventType: row.event_type,
      severity: row.severity,
      sourceUrl: row.source_url || null,
      verified: Boolean(row.verified),
    })),
  }, 200, corsHeaders(request, env));
}

async function radarStatus(request, env) {
  const [lastRun, counts] = await Promise.all([
    env.COMPARISONS_DB.prepare('SELECT * FROM offer_radar_runs ORDER BY id DESC LIMIT 1').first(),
    env.COMPARISONS_DB.prepare(
      'SELECT COUNT(*) AS total_events, COUNT(DISTINCT offer_id) AS offers_with_events, MAX(detected_at) AS last_event_at FROM offer_change_events',
    ).first(),
  ]);
  return json({
    schemaVersion: RADAR_SCHEMA_VERSION,
    lastRun: lastRun ? {
      startedAt: Number(lastRun.started_at) * 1000,
      finishedAt: Number(lastRun.finished_at) * 1000,
      status: lastRun.status,
      offersSeen: Number(lastRun.offers_seen),
      baselinesCreated: Number(lastRun.baselines_created),
      offersChanged: Number(lastRun.offers_changed),
      eventsCreated: Number(lastRun.events_created),
    } : null,
    totals: {
      events: Number(counts?.total_events ?? 0),
      offersWithEvents: Number(counts?.offers_with_events ?? 0),
      lastEventAt: counts?.last_event_at ? Number(counts.last_event_at) * 1000 : null,
    },
  }, 200, corsHeaders(request, env));
}

async function handleRadarRequest(request, env) {
  const url = new URL(request.url);
  if (!url.pathname.startsWith('/api/radar')) return null;
  const headers = corsHeaders(request, env);
  if (allowedOrigin(request, env) === false) return json({ error: 'Origin not allowed' }, 403, headers);
  if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers });
  if (!env.COMPARISONS_DB) return json({ error: 'Radar database is not configured' }, 503, headers);
  if (url.pathname === '/api/radar/events' && request.method === 'GET') return listEvents(request, env);
  if (url.pathname === '/api/radar/status' && request.method === 'GET') return radarStatus(request, env);
  return json({ error: 'Not found' }, 404, headers);
}

export {
  RADAR_SCHEMA_VERSION,
  detectOfferChanges,
  handleRadarRequest,
  normalizeRadarOffer,
  runFreeTierRadar,
  stableStringify,
};
