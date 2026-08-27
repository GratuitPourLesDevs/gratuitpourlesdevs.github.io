import {
  RADAR_SCAN_CRON,
  RADAR_WEEKLY_CRON,
  nextRadarScanAt,
  nextWeeklyDigestAt,
} from './radar-admin.js';
import { matchCountFromJson, runSearchWatches } from './search-watch.js';

const MAX_RUNS_LIMIT = 100;
const MAX_EVENTS_LIMIT = 100;
const MAX_WATCHES_LIMIT = 200;
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
      'User-Agent': 'GratuitPourLesDevs-Search-Watch-Admin',
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
    trigger: String(row.run_trigger),
    frequencyScope: String(row.frequency_scope),
    watchedSeen: Number(row.watched_seen || 0),
    searchesEvaluated: Number(row.searches_evaluated || 0),
    baselinesInitialized: Number(row.baselines_initialized || 0),
    eventsCreated: Number(row.events_created || 0),
    errorMessage: row.error_message ? String(row.error_message) : null,
  };
}

function watchRecord(row, nowSeconds) {
  const lastEvaluatedAt = row.last_evaluated_at ? Number(row.last_evaluated_at) * 1000 : null;
  const threshold = row.watch_frequency === 'immediate' ? 8 * 60 * 60 : 8 * 24 * 60 * 60;
  const stale = !row.last_evaluated_at || Number(row.last_evaluated_at) < nowSeconds - threshold;
  return {
    id: Number(row.id),
    userId: String(row.user_id),
    login: row.github_login ? String(row.github_login) : null,
    plan: String(row.plan || 'free'),
    name: String(row.name),
    url: String(row.url),
    frequency: String(row.watch_frequency || 'weekly'),
    watchStartedAt: row.watch_started_at ? Number(row.watch_started_at) * 1000 : null,
    lastEvaluatedAt,
    matchCount: matchCountFromJson(row.last_match_offer_ids),
    stale,
  };
}

function eventRecord(row) {
  return {
    id: String(row.id),
    searchId: Number(row.saved_search_id),
    searchName: row.search_name ? String(row.search_name) : 'Recherche supprimée',
    login: row.github_login ? String(row.github_login) : null,
    offerId: String(row.offer_id),
    eventType: String(row.event_type),
    detectedAt: Number(row.detected_at || 0) * 1000,
    severity: row.severity ? String(row.severity) : null,
    radarEventType: row.radar_event_type ? String(row.radar_event_type) : null,
    field: row.field ? String(row.field) : null,
  };
}

function healthStatus(lastRun, nowMs = Date.now()) {
  if (!lastRun) return { code: 'uninitialized', label: 'Non initialisé', detail: 'Aucune exécution Search Watch enregistrée.' };
  if (lastRun.status !== 'success') return { code: 'error', label: 'Erreur', detail: lastRun.errorMessage || 'La dernière évaluation a échoué.' };
  if (Math.max(0, nowMs - lastRun.finishedAt) > 8 * 60 * 60 * 1000) {
    return { code: 'stale', label: 'En retard', detail: 'Aucune exécution réussie depuis plus de 8 heures.' };
  }
  return { code: 'healthy', label: 'Opérationnel', detail: 'La dernière exécution Search Watch a réussi.' };
}

async function dashboardData(request, env) {
  const url = new URL(request.url);
  const runsLimit = Math.min(Math.max(Number.parseInt(url.searchParams.get('runs') ?? '30', 10) || 30, 1), MAX_RUNS_LIMIT);
  const eventsLimit = Math.min(Math.max(Number.parseInt(url.searchParams.get('events') ?? '30', 10) || 30, 1), MAX_EVENTS_LIMIT);
  const watchesLimit = Math.min(Math.max(Number.parseInt(url.searchParams.get('watches') ?? '100', 10) || 100, 1), MAX_WATCHES_LIMIT);
  const now = Math.floor(Date.now() / 1000);
  const dayAgo = now - 86400;
  const weekAgo = now - 7 * 86400;

  const [summary, planResult, eventSummary, eventTypes, runsResult, watchesResult, recentEventsResult] = await Promise.all([
    env.COMPARISONS_DB.prepare(`SELECT
      COUNT(*) AS saved_total,
      SUM(CASE WHEN watch_enabled = 1 THEN 1 ELSE 0 END) AS watched_total,
      COUNT(DISTINCT CASE WHEN watch_enabled = 1 THEN user_id END) AS watching_users,
      SUM(CASE WHEN watch_enabled = 1 AND watch_frequency = 'weekly' THEN 1 ELSE 0 END) AS weekly_total,
      SUM(CASE WHEN watch_enabled = 1 AND watch_frequency = 'immediate' THEN 1 ELSE 0 END) AS immediate_total,
      SUM(CASE WHEN watch_enabled = 1 AND (
        last_evaluated_at IS NULL OR
        (watch_frequency = 'immediate' AND last_evaluated_at < ?) OR
        (watch_frequency = 'weekly' AND last_evaluated_at < ?)
      ) THEN 1 ELSE 0 END) AS stale_total
      FROM saved_searches`).bind(now - 8 * 60 * 60, now - 8 * 24 * 60 * 60).first(),
    env.COMPARISONS_DB.prepare(`SELECT u.plan, COUNT(*) AS count
      FROM saved_searches s JOIN users u ON u.id = s.user_id
      WHERE s.watch_enabled = 1 GROUP BY u.plan ORDER BY count DESC`).all(),
    env.COMPARISONS_DB.prepare(`SELECT COUNT(*) AS total_events,
      SUM(CASE WHEN detected_at >= ? THEN 1 ELSE 0 END) AS events_24h,
      SUM(CASE WHEN detected_at >= ? THEN 1 ELSE 0 END) AS events_7d,
      SUM(CASE WHEN severity = 'critical' THEN 1 ELSE 0 END) AS critical_events,
      MAX(detected_at) AS last_event_at
      FROM search_watch_events`).bind(dayAgo, weekAgo).first(),
    env.COMPARISONS_DB.prepare(`SELECT event_type, COUNT(*) AS count
      FROM search_watch_events GROUP BY event_type ORDER BY count DESC, event_type ASC`).all(),
    env.COMPARISONS_DB.prepare(`SELECT id, started_at, finished_at, status, run_trigger, frequency_scope,
      watched_seen, searches_evaluated, baselines_initialized, events_created, error_message
      FROM search_watch_runs ORDER BY id DESC LIMIT ?`).bind(runsLimit).all(),
    env.COMPARISONS_DB.prepare(`SELECT s.id, s.user_id, s.name, s.url, s.watch_frequency, s.watch_started_at,
      s.last_evaluated_at, s.last_match_offer_ids, u.github_login, u.plan
      FROM saved_searches s JOIN users u ON u.id = s.user_id
      WHERE s.watch_enabled = 1
      ORDER BY CASE WHEN s.last_evaluated_at IS NULL THEN 0 ELSE 1 END, s.last_evaluated_at ASC, s.id ASC
      LIMIT ?`).bind(watchesLimit).all(),
    env.COMPARISONS_DB.prepare(`SELECT e.id, e.saved_search_id, e.offer_id, e.event_type, e.detected_at,
      e.radar_event_type, e.severity, e.field, s.name AS search_name, u.github_login
      FROM search_watch_events e
      LEFT JOIN saved_searches s ON s.id = e.saved_search_id AND s.user_id = e.user_id
      LEFT JOIN users u ON u.id = e.user_id
      ORDER BY e.detected_at DESC, e.id DESC LIMIT ?`).bind(eventsLimit).all(),
  ]);

  const runs = (runsResult.results ?? []).map(runRecord);
  const lastRun = runs[0] ?? null;
  const watches = (watchesResult.results ?? []).map((row) => watchRecord(row, now));
  const nowMs = Date.now();

  return {
    schemaVersion: 1,
    generatedAt: nowMs,
    health: healthStatus(lastRun, nowMs),
    schedules: {
      immediateCron: RADAR_SCAN_CRON,
      weeklyCron: RADAR_WEEKLY_CRON,
      nextImmediateAt: nextRadarScanAt(nowMs),
      nextWeeklyAt: nextWeeklyDigestAt(nowMs),
    },
    searches: {
      saved: Number(summary?.saved_total || 0),
      watched: Number(summary?.watched_total || 0),
      users: Number(summary?.watching_users || 0),
      weekly: Number(summary?.weekly_total || 0),
      immediate: Number(summary?.immediate_total || 0),
      stale: Number(summary?.stale_total || 0),
      byPlan: Object.fromEntries((planResult.results ?? []).map((row) => [String(row.plan || 'free'), Number(row.count || 0)])),
      active: watches,
    },
    events: {
      total: Number(eventSummary?.total_events || 0),
      last24h: Number(eventSummary?.events_24h || 0),
      last7d: Number(eventSummary?.events_7d || 0),
      critical: Number(eventSummary?.critical_events || 0),
      lastEventAt: eventSummary?.last_event_at ? Number(eventSummary.last_event_at) * 1000 : null,
      byType: Object.fromEntries((eventTypes.results ?? []).map((row) => [String(row.event_type), Number(row.count || 0)])),
      recent: (recentEventsResult.results ?? []).map(eventRecord),
    },
    lastRun,
    runs,
  };
}

async function runNow(request, env, fetchImpl, login) {
  if (manualRunPromise) return json({ error: 'Une évaluation manuelle est déjà en cours.' }, 409, corsHeaders(request, env));
  manualRunPromise = runSearchWatches(env, fetchImpl, { weekly: true, trigger: 'manual', frequencyScope: 'all' });
  try {
    const result = await manualRunPromise;
    return json({ ok: true, launchedBy: login, result }, 200, corsHeaders(request, env));
  } catch (error) {
    return json({ error: 'Search Watch a échoué.', detail: String(error?.message ?? error).slice(0, 1000) }, 500, corsHeaders(request, env));
  } finally {
    manualRunPromise = null;
  }
}

async function handleSearchWatchAdminRequest(request, env, fetchImpl = fetch) {
  const url = new URL(request.url);
  if (!url.pathname.startsWith('/api/search-watch/admin')) return null;
  const headers = corsHeaders(request, env);
  if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers });
  if (allowedOrigin(request, env) === false) return json({ error: 'Origin not allowed' }, 403, headers);
  if (!env.COMPARISONS_DB) return json({ error: 'Search Watch database is not configured' }, 503, headers);

  const login = await authorizeAdmin(request, env, fetchImpl);
  if (!login) return json({ error: 'Unauthorized' }, 401, headers);

  if (url.pathname === '/api/search-watch/admin/dashboard' && request.method === 'GET') {
    return json({ ...(await dashboardData(request, env)), adminLogin: login }, 200, headers);
  }
  if (url.pathname === '/api/search-watch/admin/run' && request.method === 'POST') {
    return runNow(request, env, fetchImpl, login);
  }
  return json({ error: 'Not found' }, 404, headers);
}

export {
  handleSearchWatchAdminRequest,
  healthStatus,
};
