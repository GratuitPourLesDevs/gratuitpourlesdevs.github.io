import { runFreeTierRadar } from './radar.js';

const RADAR_SCAN_CRON = '17 */6 * * *';
const RADAR_WEEKLY_CRON = '0 7 * * 1';
const MAX_RUNS_LIMIT = 100;
const MAX_EVENTS_LIMIT = 100;
let manualRunPromise = null;

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
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
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

async function authorizeAdmin(request, env, fetchImpl) {
  const match = (request.headers.get('Authorization') ?? '').match(/^Bearer\s+(.+)$/i);
  if (!match) return null;
  const response = await fetchImpl('https://api.github.com/user', {
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${match[1]}`,
      'User-Agent': 'GratuitPourLesDevs-Radar-Admin',
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });
  if (!response.ok) return null;
  const user = await response.json();
  const allowed = String(env.ALLOWED_GITHUB_LOGINS ?? '')
    .split(',')
    .map((login) => login.trim().toLowerCase())
    .filter(Boolean);
  return allowed.includes(String(user.login ?? '').toLowerCase()) ? String(user.login) : null;
}

function runRecord(row) {
  if (!row) return null;
  const startedAt = Number(row.started_at || 0) * 1000;
  const finishedAt = Number(row.finished_at || 0) * 1000;
  return {
    id: Number(row.id),
    startedAt,
    finishedAt,
    durationMs: Math.max(0, finishedAt - startedAt),
    status: String(row.status),
    offersSeen: Number(row.offers_seen || 0),
    baselinesCreated: Number(row.baselines_created || 0),
    offersChanged: Number(row.offers_changed || 0),
    eventsCreated: Number(row.events_created || 0),
    errorMessage: row.error_message ? String(row.error_message) : null,
  };
}

function eventRecord(row) {
  return {
    eventId: String(row.event_id),
    offerId: String(row.offer_id),
    detectedAt: Number(row.detected_at || 0) * 1000,
    occurredAt: Number(row.occurred_at || 0) * 1000,
    eventType: String(row.event_type),
    severity: String(row.severity),
    field: String(row.field),
    oldValue: row.old_value,
    newValue: row.new_value,
    sourceUrl: row.source_url ? String(row.source_url) : null,
    verified: Boolean(row.verified),
  };
}

function nextRadarScanAt(nowMs = Date.now()) {
  const now = new Date(nowMs);
  for (let dayOffset = 0; dayOffset <= 1; dayOffset += 1) {
    const year = now.getUTCFullYear();
    const month = now.getUTCMonth();
    const day = now.getUTCDate() + dayOffset;
    for (const hour of [0, 6, 12, 18]) {
      const candidate = Date.UTC(year, month, day, hour, 17, 0, 0);
      if (candidate > nowMs) return candidate;
    }
  }
  return Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 2, 0, 17, 0, 0);
}

function nextWeeklyDigestAt(nowMs = Date.now()) {
  const now = new Date(nowMs);
  const currentDay = now.getUTCDay();
  let daysUntilMonday = (8 - currentDay) % 7;
  let candidate = Date.UTC(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate() + daysUntilMonday,
    7, 0, 0, 0,
  );
  if (candidate <= nowMs) {
    daysUntilMonday += 7;
    candidate = Date.UTC(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      now.getUTCDate() + daysUntilMonday,
      7, 0, 0, 0,
    );
  }
  return candidate;
}

function healthStatus(lastRun, nowMs = Date.now()) {
  if (!lastRun) return { code: 'uninitialized', label: 'Non initialisé', detail: 'Aucun run enregistré.' };
  if (lastRun.status !== 'success') return { code: 'error', label: 'Erreur', detail: lastRun.errorMessage || 'Le dernier run a échoué.' };
  const ageMs = Math.max(0, nowMs - lastRun.finishedAt);
  if (ageMs > 8 * 60 * 60 * 1000) {
    return { code: 'stale', label: 'En retard', detail: 'Le dernier run réussi date de plus de 8 heures.' };
  }
  return { code: 'healthy', label: 'Opérationnel', detail: 'Le dernier run du radar a réussi.' };
}

async function dashboardData(request, env) {
  const url = new URL(request.url);
  const runsLimit = Math.min(Math.max(Number.parseInt(url.searchParams.get('runs') ?? '25', 10) || 25, 1), MAX_RUNS_LIMIT);
  const eventsLimit = Math.min(Math.max(Number.parseInt(url.searchParams.get('events') ?? '20', 10) || 20, 1), MAX_EVENTS_LIMIT);
  const now = Math.floor(Date.now() / 1000);
  const dayAgo = now - 86400;
  const weekAgo = now - 7 * 86400;

  const [runsResult, stateSummary, eventSummary, severityResult, typeResult, recentEventsResult] = await Promise.all([
    env.COMPARISONS_DB.prepare(`SELECT id, started_at, finished_at, status, offers_seen, baselines_created, offers_changed, events_created, error_message
      FROM offer_radar_runs ORDER BY id DESC LIMIT ?`).bind(runsLimit).all(),
    env.COMPARISONS_DB.prepare(`SELECT COUNT(*) AS tracked_states,
      SUM(CASE WHEN last_changed_at IS NOT NULL THEN 1 ELSE 0 END) AS states_changed,
      MIN(first_observed_at) AS first_observed_at,
      MAX(last_observed_at) AS last_observed_at,
      MAX(last_changed_at) AS last_changed_at
      FROM offer_radar_state`).first(),
    env.COMPARISONS_DB.prepare(`SELECT COUNT(*) AS total_events,
      COUNT(DISTINCT offer_id) AS offers_with_events,
      SUM(CASE WHEN detected_at >= ? THEN 1 ELSE 0 END) AS events_24h,
      SUM(CASE WHEN detected_at >= ? THEN 1 ELSE 0 END) AS events_7d,
      SUM(CASE WHEN severity = 'critical' THEN 1 ELSE 0 END) AS critical_events,
      SUM(CASE WHEN verified = 0 THEN 1 ELSE 0 END) AS unverified_events,
      MAX(detected_at) AS last_event_at
      FROM offer_change_events`).bind(dayAgo, weekAgo).first(),
    env.COMPARISONS_DB.prepare(`SELECT severity, COUNT(*) AS count
      FROM offer_change_events GROUP BY severity ORDER BY count DESC`).all(),
    env.COMPARISONS_DB.prepare(`SELECT event_type, COUNT(*) AS count
      FROM offer_change_events GROUP BY event_type ORDER BY count DESC, event_type ASC LIMIT 12`).all(),
    env.COMPARISONS_DB.prepare(`SELECT event_id, offer_id, occurred_at, detected_at, field, old_value, new_value, event_type, severity, source_url, verified
      FROM offer_change_events ORDER BY detected_at DESC, event_id DESC LIMIT ?`).bind(eventsLimit).all(),
  ]);

  const runs = (runsResult.results ?? []).map(runRecord);
  const lastRun = runs[0] ?? null;
  const trackedStates = Number(stateSummary?.tracked_states ?? 0);
  const catalogueOffers = Number(lastRun?.offersSeen ?? 0);
  const baselineCoverage = catalogueOffers > 0 ? Math.min(100, Math.round((trackedStates / catalogueOffers) * 10000) / 100) : 0;
  const nowMs = Date.now();

  return {
    schemaVersion: 1,
    generatedAt: nowMs,
    health: healthStatus(lastRun, nowMs),
    schedules: {
      timezone: 'UTC',
      scanCron: RADAR_SCAN_CRON,
      weeklyDigestCron: RADAR_WEEKLY_CRON,
      nextScanAt: nextRadarScanAt(nowMs),
      nextWeeklyDigestAt: nextWeeklyDigestAt(nowMs),
    },
    lastRun,
    baseline: {
      trackedStates,
      catalogueOffers,
      coveragePercent: baselineCoverage,
      statesChanged: Number(stateSummary?.states_changed ?? 0),
      firstObservedAt: stateSummary?.first_observed_at ? Number(stateSummary.first_observed_at) * 1000 : null,
      lastObservedAt: stateSummary?.last_observed_at ? Number(stateSummary.last_observed_at) * 1000 : null,
      lastChangedAt: stateSummary?.last_changed_at ? Number(stateSummary.last_changed_at) * 1000 : null,
    },
    events: {
      total: Number(eventSummary?.total_events ?? 0),
      offersWithEvents: Number(eventSummary?.offers_with_events ?? 0),
      last24h: Number(eventSummary?.events_24h ?? 0),
      last7d: Number(eventSummary?.events_7d ?? 0),
      critical: Number(eventSummary?.critical_events ?? 0),
      unverified: Number(eventSummary?.unverified_events ?? 0),
      lastEventAt: eventSummary?.last_event_at ? Number(eventSummary.last_event_at) * 1000 : null,
      bySeverity: Object.fromEntries((severityResult.results ?? []).map((row) => [String(row.severity), Number(row.count)])),
      topTypes: (typeResult.results ?? []).map((row) => ({ eventType: String(row.event_type), count: Number(row.count) })),
      recent: (recentEventsResult.results ?? []).map(eventRecord),
    },
    runs,
  };
}

async function runNow(request, env, fetchImpl, login) {
  if (manualRunPromise) return json({ error: 'Un lancement manuel est déjà en cours.' }, 409, corsHeaders(request, env));
  manualRunPromise = runFreeTierRadar(env, fetchImpl);
  try {
    const result = await manualRunPromise;
    return json({ ok: true, launchedBy: login, result }, 200, corsHeaders(request, env));
  } catch (error) {
    return json({ error: 'Le radar a échoué.', detail: String(error?.message ?? error).slice(0, 1000) }, 500, corsHeaders(request, env));
  } finally {
    manualRunPromise = null;
  }
}

async function handleRadarAdminRequest(request, env, fetchImpl = fetch) {
  const url = new URL(request.url);
  if (!url.pathname.startsWith('/api/radar/admin')) return null;
  const headers = corsHeaders(request, env);
  if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers });
  if (allowedOrigin(request, env) === false) return json({ error: 'Origin not allowed' }, 403, headers);
  if (!env.COMPARISONS_DB) return json({ error: 'Radar database is not configured' }, 503, headers);

  const login = await authorizeAdmin(request, env, fetchImpl);
  if (!login) return json({ error: 'Unauthorized' }, 401, headers);

  if (url.pathname === '/api/radar/admin/dashboard' && request.method === 'GET') {
    return json({ ...(await dashboardData(request, env)), adminLogin: login }, 200, headers);
  }
  if (url.pathname === '/api/radar/admin/run' && request.method === 'POST') {
    return runNow(request, env, fetchImpl, login);
  }
  return json({ error: 'Not found' }, 404, headers);
}

export {
  RADAR_SCAN_CRON,
  RADAR_WEEKLY_CRON,
  handleRadarAdminRequest,
  healthStatus,
  nextRadarScanAt,
  nextWeeklyDigestAt,
};
