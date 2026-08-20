const GITHUB_AUTHORIZE_URL = 'https://github.com/login/oauth/authorize';
const GITHUB_TOKEN_URL = 'https://github.com/login/oauth/access_token';
const GITHUB_USER_URL = 'https://api.github.com/user';
const GITHUB_EMAILS_URL = 'https://api.github.com/user/emails';
const USER_OAUTH_COOKIE = 'gpld_user_oauth';
const USER_OAUTH_MAX_AGE_SECONDS = 600;
const SESSION_MAX_AGE_SECONDS = 30 * 24 * 60 * 60;
const FREE_LIMITS = Object.freeze({ follows: 5, savedSearches: 3, savedComparisons: 3, stacks: 1 });
const encoder = new TextEncoder();
let offerCache = { expiresAt: 0, ids: new Set(), payload: null };

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

async function sha256Hex(value) {
  const digest = await sha256(value);
  return [...digest].map((byte) => byte.toString(16).padStart(2, '0')).join('');
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

async function createSignedState(payload, secret) {
  const body = base64url(JSON.stringify(payload));
  return `${body}.${await hmac(body, secret)}`;
}

async function readSignedState(cookieValue, secret) {
  if (!cookieValue) return null;
  const [body, signature, ...rest] = cookieValue.split('.');
  if (!body || !signature || rest.length || !constantTimeEqual(signature, await hmac(body, secret))) return null;
  try { return JSON.parse(new TextDecoder().decode(fromBase64url(body))); } catch { return null; }
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

function popupPage({ origin, status, payload }) {
  const nonce = randomString(18);
  const message = `gpld-account:${status}:${JSON.stringify(payload)}`;
  const script = `
    const targetOrigin = ${JSON.stringify(origin)};
    const finalMessage = ${JSON.stringify(message)};
    if (!window.opener) {
      document.querySelector('p').textContent = 'Fenêtre de connexion introuvable. Fermez cette page et réessayez.';
    } else {
      window.opener.postMessage(finalMessage, targetOrigin);
      window.close();
    }
  `;
  return new Response(`<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>Connexion GratuitPourLesDevs</title></head><body><p>Connexion à GratuitPourLesDevs en cours…</p><script nonce="${nonce}">${script}</script></body></html>`, {
    headers: {
      ...securityHeaders(),
      'Content-Type': 'text/html; charset=utf-8',
      'Content-Security-Policy': `default-src 'none'; script-src 'nonce-${nonce}'; style-src 'none'; base-uri 'none'; frame-ancestors 'none'`,
      'Set-Cookie': `${USER_OAUTH_COOKIE}=; Path=/callback; HttpOnly; Secure; SameSite=Lax; Max-Age=0`,
    },
  });
}

function accountErrorPage(env, message, status = 400) {
  const response = popupPage({ origin: env.ALLOWED_ORIGIN, status: 'error', payload: { message } });
  return new Response(response.body, { status, headers: response.headers });
}

function redirectResultPage({ env, session, status, payload }) {
  const destination = new URL(session.returnTo || '/compte/', env.ALLOWED_ORIGIN);
  const result = base64url(JSON.stringify({ status, ...payload, returnTo: session.returnTo || '/compte/' }));
  destination.hash = `gpld-account=${result}`;
  return new Response(null, {
    status: 302,
    headers: {
      ...securityHeaders(),
      Location: destination.toString(),
      'Set-Cookie': `${USER_OAUTH_COOKIE}=; Path=/callback; HttpOnly; Secure; SameSite=Lax; Max-Age=0`,
    },
  });
}

function accountResultPage(env, session, status, payload) {
  if (session?.flow === 'redirect') return redirectResultPage({ env, session, status, payload });
  return popupPage({ origin: env.ALLOWED_ORIGIN, status, payload });
}

function accountFlowErrorPage(env, session, message, status = 400) {
  if (session?.flow === 'redirect') return redirectResultPage({ env, session, status: 'error', payload: { message } });
  return accountErrorPage(env, message, status);
}

function safeReturnTo(value, env) {
  try {
    const url = new URL(value || '/compte/', env.ALLOWED_ORIGIN);
    return url.origin === env.ALLOWED_ORIGIN ? `${url.pathname}${url.search}${url.hash}` : '/compte/';
  } catch { return '/compte/'; }
}

async function fetchOfferPayload(env, fetchImpl) {
  if (offerCache.expiresAt > Date.now() && offerCache.payload) return offerCache.payload;
  const response = await fetchImpl(new URL('/offres.json', env.ALLOWED_ORIGIN), { headers: { Accept: 'application/json' } });
  if (!response.ok) throw new Error('Offer index is unavailable');
  const payload = await response.json();
  const ids = new Set(Array.isArray(payload.offers) ? payload.offers.filter((id) => typeof id === 'string') : []);
  if (!ids.size) throw new Error('Offer index is empty');
  offerCache = { expiresAt: Date.now() + 300_000, ids, payload };
  return payload;
}

async function validateOfferIds(env, fetchImpl, value, { min = 0, max = 50 } = {}) {
  if (!Array.isArray(value)) return null;
  const ids = [...new Set(value.map((id) => String(id).trim()).filter((id) => /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id)))];
  if (ids.length !== value.length || ids.length < min || ids.length > max) return null;
  await fetchOfferPayload(env, fetchImpl);
  if (ids.some((id) => !offerCache.ids.has(id))) return null;
  return ids;
}

function bearerToken(request) {
  const value = request.headers.get('Authorization') ?? '';
  const match = value.match(/^Bearer\s+(.+)$/i);
  return match?.[1]?.trim() || null;
}

async function authenticatedUser(request, env) {
  const token = bearerToken(request);
  if (!token || !env.COMPARISONS_DB) return null;
  const hash = await sha256Hex(token);
  const now = Math.floor(Date.now() / 1000);
  const row = await env.COMPARISONS_DB.prepare(`
    SELECT u.*, s.token_hash FROM account_sessions s
    JOIN users u ON u.id = s.user_id
    WHERE s.token_hash = ? AND s.expires_at > ?
  `).bind(hash, now).first();
  if (!row) return null;
  return { token, tokenHash: hash, row };
}

function publicUser(row) {
  return {
    id: row.id,
    login: row.github_login,
    name: row.display_name || row.github_login,
    avatarUrl: row.avatar_url || null,
    email: row.email || null,
    emailVerified: Boolean(row.email_verified),
    plan: row.plan || 'free',
    digestEnabled: Boolean(row.digest_enabled),
  };
}

async function startAccountAuth(request, env) {
  if (!env.GITHUB_CLIENT_ID || !env.GITHUB_CLIENT_SECRET || !env.STATE_SECRET || !env.ALLOWED_ORIGIN) return json({ error: 'Account OAuth is not configured' }, 503);
  const url = new URL(request.url);
  const state = randomString();
  const verifier = randomString(48);
  const callback = `${url.origin}/callback`;
  const session = await createSignedState({
    state,
    verifier,
    createdAt: Date.now(),
    returnTo: safeReturnTo(url.searchParams.get('return_to'), env),
    flow: url.searchParams.get('flow') === 'redirect' ? 'redirect' : 'popup',
  }, env.STATE_SECRET);
  const destination = new URL(GITHUB_AUTHORIZE_URL);
  destination.searchParams.set('client_id', env.GITHUB_CLIENT_ID);
  destination.searchParams.set('redirect_uri', callback);
  destination.searchParams.set('scope', 'read:user user:email');
  destination.searchParams.set('state', state);
  destination.searchParams.set('code_challenge', base64url(await sha256(verifier)));
  destination.searchParams.set('code_challenge_method', 'S256');
  return new Response(null, {
    status: 302,
    headers: {
      ...securityHeaders(),
      Location: destination.toString(),
      'Set-Cookie': `${USER_OAUTH_COOKIE}=${session}; Path=/callback; HttpOnly; Secure; SameSite=Lax; Max-Age=${USER_OAUTH_MAX_AGE_SECONDS}`,
    },
  });
}

async function finishAccountAuth(request, env, fetchImpl) {
  const url = new URL(request.url);
  const session = await readSignedState(getCookie(request, USER_OAUTH_COOKIE), env.STATE_SECRET);
  if (!session || Date.now() - session.createdAt > USER_OAUTH_MAX_AGE_SECONDS * 1000) return accountErrorPage(env, 'Session de connexion expirée. Réessayez.', 401);
  if (!url.searchParams.get('state') || url.searchParams.get('state') !== session.state) return accountFlowErrorPage(env, session, 'État OAuth invalide.', 401);
  const code = url.searchParams.get('code');
  if (!code) return accountFlowErrorPage(env, session, url.searchParams.get('error_description') ?? 'Connexion GitHub refusée.');
  if (!env.COMPARISONS_DB) return accountFlowErrorPage(env, session, 'Base des comptes non configurée.', 503);

  const tokenResponse = await fetchImpl(GITHUB_TOKEN_URL, {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json', 'User-Agent': 'GratuitPourLesDevs-Account-OAuth' },
    body: JSON.stringify({ client_id: env.GITHUB_CLIENT_ID, client_secret: env.GITHUB_CLIENT_SECRET, code, redirect_uri: `${url.origin}/callback`, code_verifier: session.verifier }),
  });
  const tokenData = await tokenResponse.json();
  if (!tokenResponse.ok || !tokenData.access_token) return accountFlowErrorPage(env, session, 'GitHub n’a pas délivré de jeton.', 502);

  const headers = { Accept: 'application/vnd.github+json', Authorization: `Bearer ${tokenData.access_token}`, 'User-Agent': 'GratuitPourLesDevs-Account-OAuth', 'X-GitHub-Api-Version': '2022-11-28' };
  const [userResponse, emailsResponse] = await Promise.all([
    fetchImpl(GITHUB_USER_URL, { headers }),
    fetchImpl(GITHUB_EMAILS_URL, { headers }),
  ]);
  const user = await userResponse.json();
  const emails = emailsResponse.ok ? await emailsResponse.json() : [];
  if (!userResponse.ok || !user.id || !user.login) return accountFlowErrorPage(env, session, 'Profil GitHub indisponible.', 502);
  const primaryEmail = Array.isArray(emails)
    ? emails.find((entry) => entry?.primary && entry?.verified) ?? emails.find((entry) => entry?.verified)
    : null;

  const now = Math.floor(Date.now() / 1000);
  const userId = `github:${user.id}`;
  await env.COMPARISONS_DB.prepare(`
    INSERT INTO users (id, github_id, github_login, display_name, avatar_url, email, email_verified, plan, digest_enabled, created_at, updated_at, last_login_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, 'free', 1, ?, ?, ?)
    ON CONFLICT(id) DO UPDATE SET
      github_login = excluded.github_login,
      display_name = excluded.display_name,
      avatar_url = excluded.avatar_url,
      email = COALESCE(excluded.email, users.email),
      email_verified = MAX(users.email_verified, excluded.email_verified),
      updated_at = excluded.updated_at,
      last_login_at = excluded.last_login_at
  `).bind(userId, Number(user.id), String(user.login), user.name ? String(user.name) : null, user.avatar_url ? String(user.avatar_url) : null, primaryEmail?.email ? String(primaryEmail.email) : null, primaryEmail?.verified ? 1 : 0, now, now, now).run();

  const sessionToken = randomString(40);
  const tokenHash = await sha256Hex(sessionToken);
  await env.COMPARISONS_DB.prepare('DELETE FROM account_sessions WHERE expires_at <= ?').bind(now).run();
  await env.COMPARISONS_DB.prepare('INSERT INTO account_sessions (token_hash, user_id, created_at, expires_at) VALUES (?, ?, ?, ?)').bind(tokenHash, userId, now, now + SESSION_MAX_AGE_SECONDS).run();
  const row = await env.COMPARISONS_DB.prepare('SELECT * FROM users WHERE id = ?').bind(userId).first();
  return accountResultPage(env, session, 'success', { token: sessionToken, user: publicUser(row), returnTo: session.returnTo || '/compte/' });
}

function freeLimit(request, env, feature, limit) {
  return json({ error: 'Limite du compte gratuit atteinte', code: 'free_limit', feature, limit, upgrade: 'pro' }, 409, corsHeaders(request, env));
}

async function countRows(env, table, userId) {
  const row = await env.COMPARISONS_DB.prepare(`SELECT COUNT(*) AS total FROM ${table} WHERE user_id = ?`).bind(userId).first();
  return Number(row?.total ?? 0);
}

async function handleFavoriteMutation(request, env, fetchImpl, user) {
  const payload = await request.json().catch(() => null);
  const ids = await validateOfferIds(env, fetchImpl, [payload?.offerId], { min: 1, max: 1 });
  if (!ids) return json({ error: 'Offre invalide' }, 400, corsHeaders(request, env));
  const offerId = ids[0];
  const active = payload?.active !== false;
  if (active) await env.COMPARISONS_DB.prepare('INSERT OR IGNORE INTO user_favorites (user_id, offer_id, created_at) VALUES (?, ?, ?)').bind(user.row.id, offerId, Math.floor(Date.now() / 1000)).run();
  else await env.COMPARISONS_DB.prepare('DELETE FROM user_favorites WHERE user_id = ? AND offer_id = ?').bind(user.row.id, offerId).run();
  return json({ offerId, active }, 200, corsHeaders(request, env));
}

async function handleFavoriteImport(request, env, fetchImpl, user) {
  const payload = await request.json().catch(() => null);
  const ids = await validateOfferIds(env, fetchImpl, payload?.offerIds ?? [], { min: 0, max: 200 });
  if (!ids) return json({ error: 'Liste de favoris invalide' }, 400, corsHeaders(request, env));
  const now = Math.floor(Date.now() / 1000);
  for (const id of ids) await env.COMPARISONS_DB.prepare('INSERT OR IGNORE INTO user_favorites (user_id, offer_id, created_at) VALUES (?, ?, ?)').bind(user.row.id, id, now).run();
  const result = await env.COMPARISONS_DB.prepare('SELECT offer_id FROM user_favorites WHERE user_id = ? ORDER BY created_at DESC').bind(user.row.id).all();
  return json({ offerIds: result.results.map((row) => row.offer_id) }, 200, corsHeaders(request, env));
}

async function handleFollowMutation(request, env, fetchImpl, user) {
  const payload = await request.json().catch(() => null);
  const ids = await validateOfferIds(env, fetchImpl, [payload?.offerId], { min: 1, max: 1 });
  if (!ids) return json({ error: 'Offre invalide' }, 400, corsHeaders(request, env));
  const offerId = ids[0];
  const active = payload?.active !== false;
  if (active) {
    const existing = await env.COMPARISONS_DB.prepare('SELECT 1 AS ok FROM user_follows WHERE user_id = ? AND offer_id = ?').bind(user.row.id, offerId).first();
    if (!existing && user.row.plan !== 'pro' && await countRows(env, 'user_follows', user.row.id) >= FREE_LIMITS.follows) return freeLimit(request, env, 'follows', FREE_LIMITS.follows);
    await env.COMPARISONS_DB.prepare('INSERT OR IGNORE INTO user_follows (user_id, offer_id, created_at) VALUES (?, ?, ?)').bind(user.row.id, offerId, Math.floor(Date.now() / 1000)).run();
  } else await env.COMPARISONS_DB.prepare('DELETE FROM user_follows WHERE user_id = ? AND offer_id = ?').bind(user.row.id, offerId).run();
  return json({ offerId, active }, 200, corsHeaders(request, env));
}

function cleanName(value, fallback) {
  const name = String(value ?? '').trim().replace(/\s+/g, ' ');
  return (name || fallback).slice(0, 80);
}

function cleanRelativeUrl(value, env, fallback = '/') {
  try {
    const url = new URL(String(value || fallback), env.ALLOWED_ORIGIN);
    if (url.origin !== env.ALLOWED_ORIGIN) return null;
    return `${url.pathname}${url.search}${url.hash}`.slice(0, 1200);
  } catch { return null; }
}

async function createSavedSearch(request, env, user) {
  if (user.row.plan !== 'pro' && await countRows(env, 'saved_searches', user.row.id) >= FREE_LIMITS.savedSearches) return freeLimit(request, env, 'savedSearches', FREE_LIMITS.savedSearches);
  const payload = await request.json().catch(() => null);
  const url = cleanRelativeUrl(payload?.url, env, '/explorer/');
  if (!url || !url.startsWith('/explorer/')) return json({ error: 'Recherche invalide' }, 400, corsHeaders(request, env));
  const name = cleanName(payload?.name, 'Recherche sauvegardée');
  const now = Math.floor(Date.now() / 1000);
  const result = await env.COMPARISONS_DB.prepare('INSERT INTO saved_searches (user_id, name, url, created_at) VALUES (?, ?, ?, ?)').bind(user.row.id, name, url, now).run();
  return json({ id: Number(result.meta?.last_row_id), name, url, createdAt: now * 1000 }, 201, corsHeaders(request, env));
}

async function createSavedComparison(request, env, fetchImpl, user) {
  if (user.row.plan !== 'pro' && await countRows(env, 'saved_comparisons', user.row.id) >= FREE_LIMITS.savedComparisons) return freeLimit(request, env, 'savedComparisons', FREE_LIMITS.savedComparisons);
  const payload = await request.json().catch(() => null);
  const offerIds = await validateOfferIds(env, fetchImpl, payload?.offerIds, { min: 2, max: 4 });
  if (!offerIds) return json({ error: 'Comparaison invalide' }, 400, corsHeaders(request, env));
  const name = cleanName(payload?.name, 'Comparaison sauvegardée');
  const url = `/?compare=${encodeURIComponent(offerIds.join(','))}`;
  const now = Math.floor(Date.now() / 1000);
  const result = await env.COMPARISONS_DB.prepare('INSERT INTO saved_comparisons (user_id, name, offer_ids, url, created_at) VALUES (?, ?, ?, ?, ?)').bind(user.row.id, name, offerIds.join(','), url, now).run();
  return json({ id: Number(result.meta?.last_row_id), name, offerIds, url, createdAt: now * 1000 }, 201, corsHeaders(request, env));
}

async function saveStack(request, env, fetchImpl, user) {
  const payload = await request.json().catch(() => null);
  const offerIds = await validateOfferIds(env, fetchImpl, payload?.offerIds ?? [], { min: 0, max: 20 });
  if (!offerIds) return json({ error: 'Stack invalide' }, 400, corsHeaders(request, env));
  const name = cleanName(payload?.name, 'Ma stack');
  const existing = await env.COMPARISONS_DB.prepare('SELECT id FROM user_stacks WHERE user_id = ? ORDER BY id LIMIT 1').bind(user.row.id).first();
  if (!existing && user.row.plan !== 'pro' && await countRows(env, 'user_stacks', user.row.id) >= FREE_LIMITS.stacks) return freeLimit(request, env, 'stacks', FREE_LIMITS.stacks);
  const now = Math.floor(Date.now() / 1000);
  if (existing) {
    await env.COMPARISONS_DB.prepare('UPDATE user_stacks SET name = ?, offer_ids = ?, updated_at = ? WHERE id = ? AND user_id = ?').bind(name, offerIds.join(','), now, existing.id, user.row.id).run();
    return json({ id: Number(existing.id), name, offerIds, updatedAt: now * 1000 }, 200, corsHeaders(request, env));
  }
  const result = await env.COMPARISONS_DB.prepare('INSERT INTO user_stacks (user_id, name, offer_ids, created_at, updated_at) VALUES (?, ?, ?, ?, ?)').bind(user.row.id, name, offerIds.join(','), now, now).run();
  return json({ id: Number(result.meta?.last_row_id), name, offerIds, updatedAt: now * 1000 }, 201, corsHeaders(request, env));
}

async function digestItemsForUser(env, fetchImpl, userId, days = 7) {
  const payload = await fetchOfferPayload(env, fetchImpl);
  const catalogue = payload.catalogue ?? {};
  const follows = await env.COMPARISONS_DB.prepare('SELECT offer_id FROM user_follows WHERE user_id = ?').bind(userId).all();
  const cutoff = Date.now() - days * 86400_000;
  return follows.results
    .map((row) => catalogue[row.offer_id])
    .filter(Boolean)
    .filter((offer) => Date.parse(offer.latestChangeAt || offer.verifiedAt || 0) >= cutoff)
    .sort((a, b) => Date.parse(b.latestChangeAt || b.verifiedAt || 0) - Date.parse(a.latestChangeAt || a.verifiedAt || 0));
}

async function dashboard(request, env, fetchImpl, user) {
  const [favorites, follows, searches, comparisons, stacks, digest] = await Promise.all([
    env.COMPARISONS_DB.prepare('SELECT offer_id FROM user_favorites WHERE user_id = ? ORDER BY created_at DESC').bind(user.row.id).all(),
    env.COMPARISONS_DB.prepare('SELECT offer_id FROM user_follows WHERE user_id = ? ORDER BY created_at DESC').bind(user.row.id).all(),
    env.COMPARISONS_DB.prepare('SELECT id, name, url, created_at FROM saved_searches WHERE user_id = ? ORDER BY created_at DESC').bind(user.row.id).all(),
    env.COMPARISONS_DB.prepare('SELECT id, name, offer_ids, url, created_at FROM saved_comparisons WHERE user_id = ? ORDER BY created_at DESC').bind(user.row.id).all(),
    env.COMPARISONS_DB.prepare('SELECT id, name, offer_ids, updated_at FROM user_stacks WHERE user_id = ? ORDER BY updated_at DESC').bind(user.row.id).all(),
    digestItemsForUser(env, fetchImpl, user.row.id),
  ]);
  return json({
    user: publicUser(user.row),
    limits: FREE_LIMITS,
    favorites: favorites.results.map((row) => row.offer_id),
    follows: follows.results.map((row) => row.offer_id),
    savedSearches: searches.results.map((row) => ({ id: Number(row.id), name: row.name, url: row.url, createdAt: Number(row.created_at) * 1000 })),
    savedComparisons: comparisons.results.map((row) => ({ id: Number(row.id), name: row.name, offerIds: String(row.offer_ids).split(',').filter(Boolean), url: row.url, createdAt: Number(row.created_at) * 1000 })),
    stack: stacks.results[0] ? { id: Number(stacks.results[0].id), name: stacks.results[0].name, offerIds: String(stacks.results[0].offer_ids).split(',').filter(Boolean), updatedAt: Number(stacks.results[0].updated_at) * 1000 } : null,
    digest,
  }, 200, corsHeaders(request, env));
}

async function updatePreferences(request, env, user) {
  const payload = await request.json().catch(() => null);
  const digestEnabled = payload?.digestEnabled === false ? 0 : 1;
  await env.COMPARISONS_DB.prepare('UPDATE users SET digest_enabled = ?, updated_at = ? WHERE id = ?').bind(digestEnabled, Math.floor(Date.now() / 1000), user.row.id).run();
  user.row.digest_enabled = digestEnabled;
  return json({ user: publicUser(user.row) }, 200, corsHeaders(request, env));
}

async function recordProInterest(request, env, user) {
  const now = Math.floor(Date.now() / 1000);
  await env.COMPARISONS_DB.prepare(`
    INSERT INTO pro_interest (user_id, clicks, first_clicked_at, last_clicked_at)
    VALUES (?, 1, ?, ?)
    ON CONFLICT(user_id) DO UPDATE SET clicks = pro_interest.clicks + 1, last_clicked_at = excluded.last_clicked_at
  `).bind(user.row.id, now, now).run();
  return json({ recorded: true }, 200, corsHeaders(request, env));
}

async function deleteResource(request, env, user, table) {
  const id = Number.parseInt(new URL(request.url).searchParams.get('id') ?? '', 10);
  if (!Number.isInteger(id) || id <= 0) return json({ error: 'Identifiant invalide' }, 400, corsHeaders(request, env));
  await env.COMPARISONS_DB.prepare(`DELETE FROM ${table} WHERE id = ? AND user_id = ?`).bind(id, user.row.id).run();
  return json({ deleted: true }, 200, corsHeaders(request, env));
}

export async function handleAccountRequest(request, env, fetchImpl = fetch) {
  const url = new URL(request.url);
  if (url.pathname === '/account/auth' && request.method === 'GET') return startAccountAuth(request, env);
  if (url.pathname === '/callback' && request.method === 'GET' && getCookie(request, USER_OAUTH_COOKIE)) return finishAccountAuth(request, env, fetchImpl);
  if (!url.pathname.startsWith('/api/account')) return null;
  const headers = corsHeaders(request, env);
  if (allowedOrigin(request, env) === false) return json({ error: 'Origin not allowed' }, 403, headers);
  if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers });
  if (!env.COMPARISONS_DB) return json({ error: 'Account database is not configured' }, 503, headers);
  const user = await authenticatedUser(request, env);
  if (!user) return json({ error: 'Authentication required', code: 'unauthorized' }, 401, headers);

  if (url.pathname === '/api/account/me' && request.method === 'GET') return json({ user: publicUser(user.row), limits: FREE_LIMITS }, 200, headers);
  if (url.pathname === '/api/account/favorites' && request.method === 'GET') { const result = await env.COMPARISONS_DB.prepare('SELECT offer_id FROM user_favorites WHERE user_id = ? ORDER BY created_at DESC').bind(user.row.id).all(); return json({ offerIds: result.results.map((row) => row.offer_id) }, 200, headers); }
  if (url.pathname === '/api/account/follows' && request.method === 'GET') { const result = await env.COMPARISONS_DB.prepare('SELECT offer_id FROM user_follows WHERE user_id = ? ORDER BY created_at DESC').bind(user.row.id).all(); return json({ offerIds: result.results.map((row) => row.offer_id), limit: user.row.plan === 'pro' ? null : FREE_LIMITS.follows }, 200, headers); }
  if (url.pathname === '/api/account/dashboard' && request.method === 'GET') return dashboard(request, env, fetchImpl, user);
  if (url.pathname === '/api/account/logout' && request.method === 'POST') {
    await env.COMPARISONS_DB.prepare('DELETE FROM account_sessions WHERE token_hash = ?').bind(user.tokenHash).run();
    return json({ loggedOut: true }, 200, headers);
  }
  if (url.pathname === '/api/account/favorites' && request.method === 'POST') return handleFavoriteMutation(request, env, fetchImpl, user);
  if (url.pathname === '/api/account/favorites/import' && request.method === 'POST') return handleFavoriteImport(request, env, fetchImpl, user);
  if (url.pathname === '/api/account/follows' && request.method === 'POST') return handleFollowMutation(request, env, fetchImpl, user);
  if (url.pathname === '/api/account/searches' && request.method === 'POST') return createSavedSearch(request, env, user);
  if (url.pathname === '/api/account/searches' && request.method === 'DELETE') return deleteResource(request, env, user, 'saved_searches');
  if (url.pathname === '/api/account/comparisons' && request.method === 'POST') return createSavedComparison(request, env, fetchImpl, user);
  if (url.pathname === '/api/account/comparisons' && request.method === 'DELETE') return deleteResource(request, env, user, 'saved_comparisons');
  if (url.pathname === '/api/account/stack' && request.method === 'PUT') return saveStack(request, env, fetchImpl, user);
  if (url.pathname === '/api/account/stack' && request.method === 'DELETE') {
    await env.COMPARISONS_DB.prepare('DELETE FROM user_stacks WHERE user_id = ?').bind(user.row.id).run();
    return json({ deleted: true }, 200, headers);
  }
  if (url.pathname === '/api/account/preferences' && request.method === 'POST') return updatePreferences(request, env, user);
  if (url.pathname === '/api/account/pro-interest' && request.method === 'POST') return recordProInterest(request, env, user);
  return json({ error: 'Not found' }, 404, headers);
}

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[character]));
}

async function sendDigestEmail(env, fetchImpl, user, items) {
  if (!env.RESEND_API_KEY || !env.DIGEST_FROM_EMAIL || !user.email || !items.length) return false;
  const list = items.map((item) => `<li><strong>${escapeHtml(item.name)}</strong> — ${escapeHtml(item.latestChangeTitle || 'Offre mise à jour')}<br><small>${escapeHtml(item.latestChangeSummary || '')}</small><br><a href="${env.ALLOWED_ORIGIN}/offres/${encodeURIComponent(item.id)}/">Voir la fiche</a></li>`).join('');
  const html = `<h1>Votre veille GratuitPourLesDevs</h1><p>${items.length} offre${items.length > 1 ? 's' : ''} suivie${items.length > 1 ? 's ont' : ' a'} changé cette semaine.</p><ul>${list}</ul><p><a href="${env.ALLOWED_ORIGIN}/compte/">Gérer votre veille</a></p>`;
  const response = await fetchImpl('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from: env.DIGEST_FROM_EMAIL, to: [user.email], subject: `GratuitPourLesDevs — ${items.length} changement${items.length > 1 ? 's' : ''} dans votre veille`, html }),
  });
  return response.ok;
}

export async function runWeeklyDigest(env, fetchImpl = fetch) {
  if (!env.COMPARISONS_DB) return { sent: 0, skipped: 0 };
  const users = await env.COMPARISONS_DB.prepare("SELECT * FROM users WHERE digest_enabled = 1 AND email_verified = 1 AND email IS NOT NULL").all();
  let sent = 0;
  let skipped = 0;
  for (const row of users.results) {
    const items = await digestItemsForUser(env, fetchImpl, row.id, 7);
    if (!items.length) { skipped += 1; continue; }
    if (await sendDigestEmail(env, fetchImpl, row, items)) sent += 1;
    else skipped += 1;
  }
  return { sent, skipped };
}

export { FREE_LIMITS };
