const MAX_PAGE_SIZE = 50;
const MAX_AUDIT_LIMIT = 50;
const ALLOWED_PLANS = new Set(['free', 'pro']);

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
      'User-Agent': 'GratuitPourLesDevs-Users-Admin',
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

function normalizePlan(value) {
  const plan = String(value ?? '').trim().toLowerCase();
  return ALLOWED_PLANS.has(plan) ? plan : null;
}

function normalizePage(value) {
  return Math.max(1, Number.parseInt(String(value ?? '1'), 10) || 1);
}

function normalizeLimit(value) {
  return Math.min(MAX_PAGE_SIZE, Math.max(5, Number.parseInt(String(value ?? '20'), 10) || 20));
}

function normalizeQuery(value) {
  return String(value ?? '').trim().slice(0, 120);
}

function accountLabel(row) {
  return String(row?.display_name || row?.email || row?.github_login || row?.id || 'Utilisateur').slice(0, 160);
}

function parseProviders(value) {
  return [...new Set(String(value || '').split(',').map((item) => item.trim()).filter(Boolean))].sort();
}

function userRecord(row) {
  const limits = { follows: 5, savedSearches: 3, watchedSearches: 1, savedComparisons: 3, stacks: 1 };
  const usage = {
    favorites: Number(row.favorites_count || 0),
    follows: Number(row.follows_count || 0),
    savedSearches: Number(row.searches_count || 0),
    watchedSearches: Number(row.watched_count || 0),
    savedComparisons: Number(row.comparisons_count || 0),
    stacks: Number(row.stacks_count || 0),
    searchWatchEvents: Number(row.watch_events_count || 0),
  };
  const plan = normalizePlan(row.plan) || 'free';
  const overFreeLimits = plan === 'free' && (
    usage.follows > limits.follows ||
    usage.savedSearches > limits.savedSearches ||
    usage.watchedSearches > limits.watchedSearches ||
    usage.savedComparisons > limits.savedComparisons ||
    usage.stacks > limits.stacks
  );
  return {
    id: String(row.id),
    accountLabel: accountLabel(row),
    login: row.github_login ? String(row.github_login) : null,
    displayName: row.display_name ? String(row.display_name) : null,
    avatarUrl: row.avatar_url ? String(row.avatar_url) : null,
    email: row.email ? String(row.email) : null,
    emailVerified: Boolean(row.email_verified),
    plan,
    digestEnabled: Boolean(row.digest_enabled),
    createdAt: Number(row.created_at || 0) * 1000,
    updatedAt: Number(row.updated_at || 0) * 1000,
    lastLoginAt: Number(row.last_login_at || 0) * 1000,
    providers: parseProviders(row.providers),
    activeSessions: Number(row.active_sessions || 0),
    proInterestClicks: Number(row.pro_interest_clicks || 0),
    usage,
    overFreeLimits,
  };
}

function auditRecord(row) {
  return {
    id: Number(row.id),
    adminLogin: String(row.admin_login),
    targetUserId: String(row.target_user_id),
    targetAccountLabel: row.target_account_label ? String(row.target_account_label) : null,
    actionType: String(row.action_type),
    oldValue: row.old_value,
    newValue: row.new_value,
    createdAt: Number(row.created_at || 0) * 1000,
  };
}

function auditStatement(env, adminLogin, user, actionType, oldValue, newValue, now) {
  return env.COMPARISONS_DB.prepare(`INSERT INTO admin_user_actions
    (admin_login, target_user_id, target_account_label, action_type, old_value, new_value, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?)`)
    .bind(
      adminLogin,
      String(user.id),
      accountLabel(user),
      actionType,
      oldValue == null ? null : String(oldValue),
      newValue == null ? null : String(newValue),
      now,
    );
}

async function dashboardData(request, env) {
  const url = new URL(request.url);
  const page = normalizePage(url.searchParams.get('page'));
  const limit = normalizeLimit(url.searchParams.get('limit'));
  const query = normalizeQuery(url.searchParams.get('q'));
  const requestedPlan = String(url.searchParams.get('plan') || '').toLowerCase();
  const plan = ALLOWED_PLANS.has(requestedPlan) ? requestedPlan : '';
  const now = Math.floor(Date.now() / 1000);
  const weekAgo = now - 7 * 86400;
  const monthAgo = now - 30 * 86400;
  const offset = (page - 1) * limit;
  const like = `%${query.toLowerCase()}%`;
  const queryClause = query
    ? `AND (LOWER(COALESCE(u.display_name, '')) LIKE ? OR LOWER(COALESCE(u.github_login, '')) LIKE ? OR LOWER(COALESCE(u.email, '')) LIKE ? OR LOWER(u.id) LIKE ?)`
    : '';
  const planClause = plan ? 'AND u.plan = ?' : '';
  const filterBindings = [];
  if (query) filterBindings.push(like, like, like, like);
  if (plan) filterBindings.push(plan);

  const userSelect = `
    SELECT u.id, u.github_login, u.display_name, u.avatar_url, u.email, u.email_verified,
      u.plan, u.digest_enabled, u.created_at, u.updated_at, u.last_login_at,
      (SELECT GROUP_CONCAT(ai.provider) FROM account_identities ai WHERE ai.user_id = u.id) AS providers,
      (SELECT COUNT(*) FROM account_sessions s WHERE s.user_id = u.id AND s.expires_at > ?) AS active_sessions,
      (SELECT COUNT(*) FROM user_favorites f WHERE f.user_id = u.id) AS favorites_count,
      (SELECT COUNT(*) FROM user_follows f WHERE f.user_id = u.id) AS follows_count,
      (SELECT COUNT(*) FROM saved_searches ss WHERE ss.user_id = u.id) AS searches_count,
      (SELECT COUNT(*) FROM saved_searches ss WHERE ss.user_id = u.id AND ss.watch_enabled = 1) AS watched_count,
      (SELECT COUNT(*) FROM saved_comparisons sc WHERE sc.user_id = u.id) AS comparisons_count,
      (SELECT COUNT(*) FROM user_stacks st WHERE st.user_id = u.id) AS stacks_count,
      (SELECT COUNT(*) FROM search_watch_events swe WHERE swe.user_id = u.id) AS watch_events_count,
      COALESCE((SELECT pi.clicks FROM pro_interest pi WHERE pi.user_id = u.id), 0) AS pro_interest_clicks
    FROM users u
    WHERE 1 = 1 ${queryClause} ${planClause}
    ORDER BY u.last_login_at DESC, u.created_at DESC, u.id ASC
    LIMIT ? OFFSET ?`;

  const [stats, identityStats, sessionStats, interestStats, filteredCount, usersResult, auditResult] = await Promise.all([
    env.COMPARISONS_DB.prepare(`SELECT COUNT(*) AS total,
      SUM(CASE WHEN plan = 'free' THEN 1 ELSE 0 END) AS free_users,
      SUM(CASE WHEN plan = 'pro' THEN 1 ELSE 0 END) AS pro_users,
      SUM(CASE WHEN email_verified = 1 THEN 1 ELSE 0 END) AS verified_emails,
      SUM(CASE WHEN digest_enabled = 1 THEN 1 ELSE 0 END) AS digest_enabled,
      SUM(CASE WHEN created_at >= ? THEN 1 ELSE 0 END) AS new_7d,
      SUM(CASE WHEN created_at >= ? THEN 1 ELSE 0 END) AS new_30d,
      SUM(CASE WHEN last_login_at >= ? THEN 1 ELSE 0 END) AS active_7d,
      SUM(CASE WHEN last_login_at >= ? THEN 1 ELSE 0 END) AS active_30d
      FROM users`).bind(weekAgo, monthAgo, weekAgo, monthAgo).first(),
    env.COMPARISONS_DB.prepare(`SELECT provider, COUNT(DISTINCT user_id) AS users, COUNT(*) AS identities
      FROM account_identities GROUP BY provider ORDER BY users DESC, provider ASC`).all(),
    env.COMPARISONS_DB.prepare(`SELECT COUNT(*) AS active_sessions, COUNT(DISTINCT user_id) AS users_with_sessions
      FROM account_sessions WHERE expires_at > ?`).bind(now).first(),
    env.COMPARISONS_DB.prepare(`SELECT COUNT(*) AS interested_users, COALESCE(SUM(clicks), 0) AS clicks FROM pro_interest`).first(),
    env.COMPARISONS_DB.prepare(`SELECT COUNT(*) AS total FROM users u WHERE 1 = 1 ${queryClause} ${planClause}`).bind(...filterBindings).first(),
    env.COMPARISONS_DB.prepare(userSelect).bind(now, ...filterBindings, limit, offset).all(),
    env.COMPARISONS_DB.prepare(`SELECT id, admin_login, target_user_id, target_account_label, action_type, old_value, new_value, created_at
      FROM admin_user_actions ORDER BY id DESC LIMIT ?`).bind(MAX_AUDIT_LIMIT).all(),
  ]);

  const total = Number(stats?.total || 0);
  const filteredTotal = Number(filteredCount?.total || 0);
  return {
    schemaVersion: 1,
    generatedAt: Date.now(),
    stats: {
      total,
      free: Number(stats?.free_users || 0),
      pro: Number(stats?.pro_users || 0),
      verifiedEmails: Number(stats?.verified_emails || 0),
      verifiedEmailPercent: total ? Math.round((Number(stats?.verified_emails || 0) / total) * 1000) / 10 : 0,
      digestEnabled: Number(stats?.digest_enabled || 0),
      new7d: Number(stats?.new_7d || 0),
      new30d: Number(stats?.new_30d || 0),
      active7d: Number(stats?.active_7d || 0),
      active30d: Number(stats?.active_30d || 0),
      activeSessions: Number(sessionStats?.active_sessions || 0),
      usersWithSessions: Number(sessionStats?.users_with_sessions || 0),
      proInterestedUsers: Number(interestStats?.interested_users || 0),
      proInterestClicks: Number(interestStats?.clicks || 0),
      identitiesByProvider: Object.fromEntries((identityStats.results || []).map((row) => [String(row.provider), {
        users: Number(row.users || 0), identities: Number(row.identities || 0),
      }])),
    },
    filters: { query, plan },
    pagination: {
      page,
      limit,
      total: filteredTotal,
      pages: Math.max(1, Math.ceil(filteredTotal / limit)),
    },
    users: (usersResult.results || []).map(userRecord),
    recentAdminActions: (auditResult.results || []).map(auditRecord),
  };
}

async function targetUser(env, userId) {
  return env.COMPARISONS_DB.prepare('SELECT id, github_login, display_name, email, plan FROM users WHERE id = ?').bind(userId).first();
}

async function changePlan(request, env, adminLogin) {
  const payload = await request.json().catch(() => null);
  const userId = String(payload?.userId || '').trim();
  const plan = normalizePlan(payload?.plan);
  if (!userId || !plan) return json({ error: 'Utilisateur ou plan invalide.' }, 400, corsHeaders(request, env));
  const user = await targetUser(env, userId);
  if (!user) return json({ error: 'Utilisateur introuvable.' }, 404, corsHeaders(request, env));
  const previous = normalizePlan(user.plan) || 'free';
  if (previous === plan) return json({ ok: true, unchanged: true, userId, plan }, 200, corsHeaders(request, env));
  const now = Math.floor(Date.now() / 1000);
  await env.COMPARISONS_DB.batch([
    env.COMPARISONS_DB.prepare('UPDATE users SET plan = ?, updated_at = ? WHERE id = ?').bind(plan, now, userId),
    auditStatement(env, adminLogin, user, 'PLAN_CHANGED', previous, plan, now),
  ]);
  return json({ ok: true, userId, previousPlan: previous, plan, changedBy: adminLogin }, 200, corsHeaders(request, env));
}

async function revokeSessions(request, env, adminLogin) {
  const payload = await request.json().catch(() => null);
  const userId = String(payload?.userId || '').trim();
  if (!userId) return json({ error: 'Utilisateur invalide.' }, 400, corsHeaders(request, env));
  const user = await targetUser(env, userId);
  if (!user) return json({ error: 'Utilisateur introuvable.' }, 404, corsHeaders(request, env));
  const before = await env.COMPARISONS_DB.prepare('SELECT COUNT(*) AS total FROM account_sessions WHERE user_id = ?').bind(userId).first();
  const revoked = Number(before?.total || 0);
  const now = Math.floor(Date.now() / 1000);
  await env.COMPARISONS_DB.batch([
    env.COMPARISONS_DB.prepare('DELETE FROM account_sessions WHERE user_id = ?').bind(userId),
    auditStatement(env, adminLogin, user, 'SESSIONS_REVOKED', revoked, 0, now),
  ]);
  return json({ ok: true, userId, revoked, changedBy: adminLogin }, 200, corsHeaders(request, env));
}

async function handleUsersAdminRequest(request, env, fetchImpl = fetch) {
  const url = new URL(request.url);
  if (!url.pathname.startsWith('/api/users/admin')) return null;
  const headers = corsHeaders(request, env);
  if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers });
  if (allowedOrigin(request, env) === false) return json({ error: 'Origin not allowed' }, 403, headers);
  if (!env.COMPARISONS_DB) return json({ error: 'Account database is not configured' }, 503, headers);

  const adminLogin = await authorizeAdmin(request, env, fetchImpl);
  if (!adminLogin) return json({ error: 'Unauthorized' }, 401, headers);

  if (url.pathname === '/api/users/admin/dashboard' && request.method === 'GET') {
    return json({ ...(await dashboardData(request, env)), adminLogin }, 200, headers);
  }
  if (url.pathname === '/api/users/admin/plan' && request.method === 'POST') {
    return changePlan(request, env, adminLogin);
  }
  if (url.pathname === '/api/users/admin/sessions/revoke' && request.method === 'POST') {
    return revokeSessions(request, env, adminLogin);
  }
  return json({ error: 'Not found' }, 404, headers);
}

export {
  MAX_PAGE_SIZE,
  handleUsersAdminRequest,
  normalizeLimit,
  normalizePage,
  normalizePlan,
  normalizeQuery,
  userRecord,
};
