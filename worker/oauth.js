const GITHUB_AUTHORIZE_URL = 'https://github.com/login/oauth/authorize';
const GITHUB_TOKEN_URL = 'https://github.com/login/oauth/access_token';
const GITHUB_USER_URL = 'https://api.github.com/user';
const COOKIE_NAME = 'gpld_oauth';
const MAX_AGE_SECONDS = 600;

const encoder = new TextEncoder();
let offerIndexCache = { expiresAt: 0, ids: new Set() };

function base64url(value) {
  const bytes = typeof value === 'string' ? encoder.encode(value) : value;
  let binary = '';
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}

function fromBase64url(value) {
  const padded = value.replace(/-/g, '+').replace(/_/g, '/') + '='.repeat((4 - value.length % 4) % 4);
  const binary = atob(padded);
  return new Uint8Array([...binary].map((character) => character.charCodeAt(0)));
}

function randomString(size = 32) {
  const bytes = new Uint8Array(size);
  crypto.getRandomValues(bytes);
  return base64url(bytes);
}

async function sha256(value) {
  return new Uint8Array(await crypto.subtle.digest('SHA-256', encoder.encode(value)));
}

async function hmac(value, secret) {
  const key = await crypto.subtle.importKey('raw', encoder.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  return base64url(new Uint8Array(await crypto.subtle.sign('HMAC', key, encoder.encode(value))));
}

function constantTimeEqual(left, right) {
  const a = encoder.encode(left);
  const b = encoder.encode(right);
  if (a.length !== b.length) return false;
  let result = 0;
  for (let index = 0; index < a.length; index += 1) result |= a[index] ^ b[index];
  return result === 0;
}

async function createSession(payload, secret) {
  const body = base64url(JSON.stringify(payload));
  return `${body}.${await hmac(body, secret)}`;
}

async function readSession(cookieValue, secret) {
  if (!cookieValue) return null;
  const [body, signature, ...rest] = cookieValue.split('.');
  if (!body || !signature || rest.length || !constantTimeEqual(signature, await hmac(body, secret))) return null;
  try {
    return JSON.parse(new TextDecoder().decode(fromBase64url(body)));
  } catch {
    return null;
  }
}

function getCookie(request, name) {
  const cookies = request.headers.get('Cookie') ?? '';
  for (const part of cookies.split(';')) {
    const [key, ...value] = part.trim().split('=');
    if (key === name) return value.join('=');
  }
  return null;
}

function securityHeaders() {
  return {
    'Cache-Control': 'no-store, max-age=0',
    'Referrer-Policy': 'no-referrer',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
  };
}

function json(data, status = 200, headers = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...securityHeaders(), 'Content-Type': 'application/json; charset=utf-8', ...headers },
  });
}

function allowedApiOrigin(request, env) {
  const origin = request.headers.get('Origin');
  if (!origin) return null;
  if (origin === env.ALLOWED_ORIGIN || /^http:\/\/(127\.0\.0\.1|localhost)(:\d+)?$/.test(origin)) return origin;
  return false;
}

function allowedPopupOrigin(origin, env) {
  if (!origin) return env.ALLOWED_ORIGIN;
  if (origin === env.ALLOWED_ORIGIN || /^http:\/\/(127\.0\.0\.1|localhost)(:\d+)?$/.test(origin)) return origin;
  return null;
}

function apiHeaders(request, env) {
  const origin = allowedApiOrigin(request, env);
  return origin ? {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
    Vary: 'Origin',
  } : {};
}

function canonicalOfferIds(value) {
  if (!Array.isArray(value)) return null;
  const ids = [...new Set(value.map((id) => String(id).trim()).filter((id) => /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id)))].sort();
  return ids.length >= 2 && ids.length <= 4 && ids.length === value.length ? ids : null;
}

async function sha256Hex(value) {
  const digest = new Uint8Array(await crypto.subtle.digest('SHA-256', encoder.encode(value)));
  return [...digest].map((byte) => byte.toString(16).padStart(2, '0')).join('');
}

async function apiFingerprint(request, env, eventType, eventWindow) {
  const ip = request.headers.get('CF-Connecting-IP') ?? 'unknown';
  const agent = request.headers.get('User-Agent') ?? 'unknown';
  return sha256Hex(`${env.ANALYTICS_SECRET}:${eventType}:${eventWindow}:${ip}:${agent}`);
}

async function validOfferIds(env, fetchImpl) {
  if (offerIndexCache.expiresAt > Date.now()) return offerIndexCache.ids;
  const response = await fetchImpl(new URL('/offres.json', env.ALLOWED_ORIGIN), { headers: { Accept: 'application/json' } });
  if (!response.ok) throw new Error('Offer index is unavailable');
  const payload = await response.json();
  const ids = new Set(Array.isArray(payload.offers) ? payload.offers.filter((id) => typeof id === 'string') : []);
  if (!ids.size) throw new Error('Offer index is empty');
  offerIndexCache = { expiresAt: Date.now() + 300_000, ids };
  return ids;
}

function comparisonRecord(row) {
  return {
    key: row.comparison_key,
    offerIds: String(row.offer_ids).split(',').filter(Boolean),
    createdAt: Number(row.created_at) * 1000,
    lastViewedAt: Number(row.last_viewed_at) * 1000,
    views: Number(row.view_count),
    helpful: Number(row.helpful_count),
    featured: Boolean(row.featured),
  };
}

async function listComparisons(request, env) {
  const url = new URL(request.url);
  const sort = url.searchParams.get('sort') === 'recent' ? 'recent' : 'popular';
  const requestedLimit = Math.min(20, Math.max(1, Number.parseInt(url.searchParams.get('limit') ?? '10', 10) || 10));
  const offset = Math.min(99, Math.max(0, Number.parseInt(url.searchParams.get('offset') ?? '0', 10) || 0));
  const limit = Math.min(requestedLimit, 100 - offset);
  const order = sort === 'recent'
    ? 'created_at DESC, comparison_key ASC'
    : 'view_count DESC, helpful_count DESC, featured DESC, last_viewed_at DESC, comparison_key ASC';
  const result = await env.COMPARISONS_DB.prepare(`SELECT * FROM comparisons ORDER BY ${order} LIMIT ? OFFSET ?`).bind(limit + 1, offset).all();
  const hasMore = result.results.length > limit && offset + limit < 100;
  return json({ items: result.results.slice(0, limit).map(comparisonRecord), limit, offset, hasMore }, 200, apiHeaders(request, env));
}

async function recordComparisonEvent(request, env, eventType, fetchImpl) {
  if (allowedApiOrigin(request, env) === false) return json({ error: 'Origin not allowed' }, 403, apiHeaders(request, env));
  const contentLength = Number(request.headers.get('Content-Length') ?? 0);
  if (contentLength > 2048) return json({ error: 'Payload too large' }, 413, apiHeaders(request, env));
  let payload;
  try { payload = await request.json(); } catch { return json({ error: 'Invalid JSON' }, 400, apiHeaders(request, env)); }
  const ids = canonicalOfferIds(payload.offers);
  if (!ids) return json({ error: 'Two to four valid and unique offers are required' }, 400, apiHeaders(request, env));
  const origin = allowedApiOrigin(request, env);
  if (!origin || !/^http:\/\/(127\.0\.0\.1|localhost)(:\d+)?$/.test(origin)) {
    try {
      const knownIds = await validOfferIds(env, fetchImpl);
      if (ids.some((id) => !knownIds.has(id))) return json({ error: 'Unknown offer' }, 400, apiHeaders(request, env));
    } catch {
      return json({ error: 'Offer validation is temporarily unavailable' }, 503, apiHeaders(request, env));
    }
  }

  const now = Math.floor(Date.now() / 1000);
  const key = ids.join(',');
  const eventWindow = eventType === 'view' ? String(Math.floor(now / 86400)) : 'all';
  const fingerprint = await apiFingerprint(request, env, eventType, eventWindow);
  const event = await env.COMPARISONS_DB.prepare(
    'INSERT OR IGNORE INTO comparison_events (comparison_key, event_type, event_window, fingerprint, created_at) VALUES (?, ?, ?, ?, ?)',
  ).bind(key, eventType, eventWindow, fingerprint, now).run();
  const recorded = Number(event.meta?.changes ?? 0) > 0;

  if (recorded) {
    const viewIncrement = eventType === 'view' ? 1 : 0;
    const helpfulIncrement = eventType === 'helpful' ? 1 : 0;
    await env.COMPARISONS_DB.prepare(`
      INSERT INTO comparisons (comparison_key, offer_ids, created_at, last_viewed_at, view_count, helpful_count, featured)
      VALUES (?, ?, ?, ?, ?, ?, 0)
      ON CONFLICT(comparison_key) DO UPDATE SET
        last_viewed_at = CASE WHEN ? = 1 THEN excluded.last_viewed_at ELSE comparisons.last_viewed_at END,
        view_count = comparisons.view_count + ?,
        helpful_count = comparisons.helpful_count + ?
    `).bind(key, key, now, now, viewIncrement, helpfulIncrement, viewIncrement, viewIncrement, helpfulIncrement).run();
    if (eventType === 'view') {
      await env.COMPARISONS_DB.prepare("DELETE FROM comparison_events WHERE event_type = 'view' AND created_at < ?").bind(now - 45 * 86400).run();
    }
  }

  const row = await env.COMPARISONS_DB.prepare('SELECT * FROM comparisons WHERE comparison_key = ?').bind(key).first();
  return json({ recorded, item: comparisonRecord(row) }, 200, apiHeaders(request, env));
}

async function handleComparisonsApi(request, env, fetchImpl) {
  const headers = apiHeaders(request, env);
  if (!env.COMPARISONS_DB || !env.ANALYTICS_SECRET) return json({ error: 'Comparisons API is not configured' }, 503, headers);
  if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers });
  const url = new URL(request.url);
  if (url.pathname === '/api/comparisons' && request.method === 'GET') return listComparisons(request, env);
  if (url.pathname === '/api/comparisons/view' && request.method === 'POST') return recordComparisonEvent(request, env, 'view', fetchImpl);
  if (url.pathname === '/api/comparisons/helpful' && request.method === 'POST') return recordComparisonEvent(request, env, 'helpful', fetchImpl);
  return json({ error: 'Not found' }, 404, headers);
}

function contentReference(type, key) {
  const normalizedType = String(type ?? '').trim();
  const normalizedKey = String(key ?? '').trim();
  if (!['guide', 'offer'].includes(normalizedType)) return null;
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(normalizedKey)) return null;
  return { type: normalizedType, key: normalizedKey };
}

function contentEngagementRecord(row, fallback) {
  return {
    type: row?.content_type ?? fallback.type,
    key: row?.content_key ?? fallback.key,
    views: Number(row?.view_count ?? 0),
    helpful: Number(row?.helpful_count ?? 0),
    lastViewedAt: Number(row?.last_viewed_at ?? 0) * 1000,
  };
}

async function listContentEngagement(request, env) {
  const rawItems = new URL(request.url).searchParams.get('items')?.split(',').filter(Boolean) ?? [];
  const references = [...new Map(rawItems.map((item) => {
    const separator = item.indexOf(':');
    const reference = separator > 0 ? contentReference(item.slice(0, separator), item.slice(separator + 1)) : null;
    return reference ? [`${reference.type}:${reference.key}`, reference] : [item, null];
  }).filter(([, reference]) => reference)).values()].slice(0, 50);
  if (!references.length) return json({ error: 'At least one valid content item is required' }, 400, apiHeaders(request, env));
  const clauses = references.map(() => '(content_type = ? AND content_key = ?)').join(' OR ');
  const bindings = references.flatMap(({ type, key }) => [type, key]);
  const result = await env.COMPARISONS_DB.prepare(`SELECT * FROM content_engagement WHERE ${clauses}`).bind(...bindings).all();
  const byKey = new Map(result.results.map((row) => [`${row.content_type}:${row.content_key}`, row]));
  return json({ items: references.map((reference) => contentEngagementRecord(byKey.get(`${reference.type}:${reference.key}`), reference)) }, 200, apiHeaders(request, env));
}

async function recordContentEngagement(request, env, eventType) {
  if (allowedApiOrigin(request, env) === false) return json({ error: 'Origin not allowed' }, 403, apiHeaders(request, env));
  if (Number(request.headers.get('Content-Length') ?? 0) > 2048) return json({ error: 'Payload too large' }, 413, apiHeaders(request, env));
  let payload;
  try { payload = await request.json(); } catch { return json({ error: 'Invalid JSON' }, 400, apiHeaders(request, env)); }
  const reference = contentReference(payload.type, payload.key);
  if (!reference) return json({ error: 'A valid content type and key are required' }, 400, apiHeaders(request, env));

  const now = Math.floor(Date.now() / 1000);
  const eventWindow = eventType === 'view' ? String(Math.floor(now / 86400)) : 'all';
  const fingerprint = await apiFingerprint(request, env, `content:${reference.type}:${reference.key}:${eventType}`, eventWindow);
  const event = await env.COMPARISONS_DB.prepare(
    'INSERT OR IGNORE INTO content_engagement_events (content_type, content_key, event_type, event_window, fingerprint, created_at) VALUES (?, ?, ?, ?, ?, ?)',
  ).bind(reference.type, reference.key, eventType, eventWindow, fingerprint, now).run();
  const recorded = Number(event.meta?.changes ?? 0) > 0;

  if (recorded) {
    const viewIncrement = eventType === 'view' ? 1 : 0;
    const helpfulIncrement = eventType === 'helpful' ? 1 : 0;
    await env.COMPARISONS_DB.prepare(`
      INSERT INTO content_engagement (content_type, content_key, view_count, helpful_count, last_viewed_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?)
      ON CONFLICT(content_type, content_key) DO UPDATE SET
        view_count = content_engagement.view_count + ?,
        helpful_count = content_engagement.helpful_count + ?,
        last_viewed_at = CASE WHEN ? = 1 THEN excluded.last_viewed_at ELSE content_engagement.last_viewed_at END,
        updated_at = excluded.updated_at
    `).bind(reference.type, reference.key, viewIncrement, helpfulIncrement, now, now, viewIncrement, helpfulIncrement, viewIncrement).run();
    if (eventType === 'view') {
      await env.COMPARISONS_DB.prepare("DELETE FROM content_engagement_events WHERE event_type = 'view' AND created_at < ?").bind(now - 45 * 86400).run();
    }
  }

  const row = await env.COMPARISONS_DB.prepare('SELECT * FROM content_engagement WHERE content_type = ? AND content_key = ?').bind(reference.type, reference.key).first();
  return json({ recorded, item: contentEngagementRecord(row, reference) }, 200, apiHeaders(request, env));
}

async function handleContentEngagementApi(request, env) {
  const headers = apiHeaders(request, env);
  if (!env.COMPARISONS_DB || !env.ANALYTICS_SECRET) return json({ error: 'Content engagement API is not configured' }, 503, headers);
  if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers });
  const url = new URL(request.url);
  if (url.pathname === '/api/content-engagement' && request.method === 'GET') return listContentEngagement(request, env);
  if (url.pathname === '/api/content-engagement/view' && request.method === 'POST') return recordContentEngagement(request, env, 'view');
  if (url.pathname === '/api/content-engagement/helpful' && request.method === 'POST') return recordContentEngagement(request, env, 'helpful');
  return json({ error: 'Not found' }, 404, headers);
}

function popupPage({ origin, status, payload }) {
  const nonce = randomString(18);
  const provider = 'github';
  const message = `authorization:${provider}:${status}:${JSON.stringify(payload)}`;
  const script = `
    const targetOrigin = ${JSON.stringify(origin)};
    const finalMessage = ${JSON.stringify(message)};
    if (!window.opener) {
      document.querySelector('p').textContent = 'Fenêtre d’administration introuvable. Fermez cette page et réessayez.';
    } else {
      const ready = 'authorizing:${provider}';
      const finish = (event) => {
        if (event.origin !== targetOrigin || event.source !== window.opener || event.data !== ready) return;
        window.removeEventListener('message', finish);
        window.opener.postMessage(finalMessage, targetOrigin);
      };
      window.addEventListener('message', finish);
      window.opener.postMessage(ready, targetOrigin);
    }
  `;
  return new Response(`<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>Connexion GitHub</title></head><body><p>Connexion à GitHub en cours…</p><script nonce="${nonce}">${script}</script></body></html>`, {
    headers: {
      ...securityHeaders(),
      'Content-Type': 'text/html; charset=utf-8',
      'Content-Security-Policy': `default-src 'none'; script-src 'nonce-${nonce}'; style-src 'none'; base-uri 'none'; frame-ancestors 'none'`,
      'Set-Cookie': `${COOKIE_NAME}=; Path=/callback; HttpOnly; Secure; SameSite=Lax; Max-Age=0`,
    },
  });
}

function errorPage(origin, message, status = 400) {
  const response = popupPage({ origin, status: 'error', payload: { message } });
  return new Response(response.body, { status, headers: response.headers });
}

function validateEnv(env) {
  const required = ['GITHUB_CLIENT_ID', 'GITHUB_CLIENT_SECRET', 'STATE_SECRET', 'ALLOWED_ORIGIN', 'ALLOWED_SITE_ID', 'ALLOWED_GITHUB_LOGINS'];
  return required.filter((key) => !env[key]);
}

async function startAuth(request, env) {
  const url = new URL(request.url);
  if (url.searchParams.get('provider') !== 'github') return json({ error: 'Unsupported provider' }, 400);
  if (url.searchParams.get('site_id') !== env.ALLOWED_SITE_ID) return json({ error: 'Unauthorized site' }, 403);
  const popupOrigin = allowedPopupOrigin(url.searchParams.get('origin'), env);
  if (!popupOrigin) return json({ error: 'Unauthorized origin' }, 403);

  const state = randomString();
  const verifier = randomString(48);
  const callback = `${url.origin}/callback`;
  const session = await createSession({ state, verifier, popupOrigin, createdAt: Date.now() }, env.STATE_SECRET);
  const destination = new URL(GITHUB_AUTHORIZE_URL);
  destination.searchParams.set('client_id', env.GITHUB_CLIENT_ID);
  destination.searchParams.set('redirect_uri', callback);
  destination.searchParams.set('scope', 'public_repo');
  destination.searchParams.set('state', state);
  destination.searchParams.set('code_challenge', base64url(await sha256(verifier)));
  destination.searchParams.set('code_challenge_method', 'S256');
  destination.searchParams.set('allow_signup', 'false');

  return new Response(null, {
    status: 302,
    headers: {
      ...securityHeaders(),
      Location: destination.toString(),
      'Set-Cookie': `${COOKIE_NAME}=${session}; Path=/callback; HttpOnly; Secure; SameSite=Lax; Max-Age=${MAX_AGE_SECONDS}`,
    },
  });
}

async function finishAuth(request, env, fetchImpl) {
  const url = new URL(request.url);
  const session = await readSession(getCookie(request, COOKIE_NAME), env.STATE_SECRET);
  if (!session || Date.now() - session.createdAt > MAX_AGE_SECONDS * 1000) return errorPage(env.ALLOWED_ORIGIN, 'Session OAuth expirée. Réessayez.', 401);
  const popupOrigin = allowedPopupOrigin(session.popupOrigin, env);
  if (!popupOrigin) return errorPage(env.ALLOWED_ORIGIN, 'Origine OAuth invalide.', 401);
  if (!url.searchParams.get('state') || url.searchParams.get('state') !== session.state) return errorPage(popupOrigin, 'État OAuth invalide.', 401);
  const code = url.searchParams.get('code');
  if (!code) return errorPage(popupOrigin, url.searchParams.get('error_description') ?? 'Autorisation GitHub refusée.');

  const tokenResponse = await fetchImpl(GITHUB_TOKEN_URL, {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json', 'User-Agent': 'GratuitPourLesDevs-Decap-OAuth' },
    body: JSON.stringify({ client_id: env.GITHUB_CLIENT_ID, client_secret: env.GITHUB_CLIENT_SECRET, code, redirect_uri: `${url.origin}/callback`, code_verifier: session.verifier }),
  });
  const tokenData = await tokenResponse.json();
  if (!tokenResponse.ok || !tokenData.access_token) return errorPage(popupOrigin, 'GitHub n’a pas délivré de jeton.', 502);

  const userResponse = await fetchImpl(GITHUB_USER_URL, {
    headers: { Accept: 'application/vnd.github+json', Authorization: `Bearer ${tokenData.access_token}`, 'User-Agent': 'GratuitPourLesDevs-Decap-OAuth', 'X-GitHub-Api-Version': '2022-11-28' },
  });
  const user = await userResponse.json();
  const allowed = env.ALLOWED_GITHUB_LOGINS.split(',').map((login) => login.trim().toLowerCase()).filter(Boolean);
  if (!userResponse.ok || !allowed.includes(String(user.login ?? '').toLowerCase())) return errorPage(popupOrigin, 'Ce compte GitHub n’est pas autorisé.', 403);

  return popupPage({ origin: popupOrigin, status: 'success', payload: { token: tokenData.access_token, provider: 'github' } });
}

export async function handleRequest(request, env, fetchImpl = fetch) {
  const url = new URL(request.url);
  if (url.pathname.startsWith('/api/comparisons')) return handleComparisonsApi(request, env, fetchImpl);
  if (url.pathname.startsWith('/api/content-engagement')) return handleContentEngagementApi(request, env);
  const missing = validateEnv(env);
  if (url.pathname === '/health') return json({ ok: missing.length === 0, configured: missing.length === 0 }, missing.length === 0 ? 200 : 503);
  if (missing.length) return json({ error: 'OAuth worker is not configured' }, 503);
  if (request.method !== 'GET') return json({ error: 'Method not allowed' }, 405);
  if (url.pathname === '/auth') return startAuth(request, env);
  if (url.pathname === '/callback') return finishAuth(request, env, fetchImpl);
  return json({ error: 'Not found' }, 404);
}

export default {
  fetch(request, env) {
    return handleRequest(request, env);
  },
};
