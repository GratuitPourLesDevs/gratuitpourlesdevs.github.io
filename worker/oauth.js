const GITHUB_AUTHORIZE_URL = 'https://github.com/login/oauth/authorize';
const GITHUB_TOKEN_URL = 'https://github.com/login/oauth/access_token';
const GITHUB_USER_URL = 'https://api.github.com/user';
const COOKIE_NAME = 'gpld_oauth';
const MAX_AGE_SECONDS = 600;

const encoder = new TextEncoder();

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

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...securityHeaders(), 'Content-Type': 'application/json; charset=utf-8' },
  });
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

  const state = randomString();
  const verifier = randomString(48);
  const callback = `${url.origin}/callback`;
  const session = await createSession({ state, verifier, createdAt: Date.now() }, env.STATE_SECRET);
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
  if (!url.searchParams.get('state') || url.searchParams.get('state') !== session.state) return errorPage(env.ALLOWED_ORIGIN, 'État OAuth invalide.', 401);
  const code = url.searchParams.get('code');
  if (!code) return errorPage(env.ALLOWED_ORIGIN, url.searchParams.get('error_description') ?? 'Autorisation GitHub refusée.');

  const tokenResponse = await fetchImpl(GITHUB_TOKEN_URL, {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json', 'User-Agent': 'GratuitPourLesDevs-Decap-OAuth' },
    body: JSON.stringify({ client_id: env.GITHUB_CLIENT_ID, client_secret: env.GITHUB_CLIENT_SECRET, code, redirect_uri: `${url.origin}/callback`, code_verifier: session.verifier }),
  });
  const tokenData = await tokenResponse.json();
  if (!tokenResponse.ok || !tokenData.access_token) return errorPage(env.ALLOWED_ORIGIN, 'GitHub n’a pas délivré de jeton.', 502);

  const userResponse = await fetchImpl(GITHUB_USER_URL, {
    headers: { Accept: 'application/vnd.github+json', Authorization: `Bearer ${tokenData.access_token}`, 'User-Agent': 'GratuitPourLesDevs-Decap-OAuth', 'X-GitHub-Api-Version': '2022-11-28' },
  });
  const user = await userResponse.json();
  const allowed = env.ALLOWED_GITHUB_LOGINS.split(',').map((login) => login.trim().toLowerCase()).filter(Boolean);
  if (!userResponse.ok || !allowed.includes(String(user.login ?? '').toLowerCase())) return errorPage(env.ALLOWED_ORIGIN, 'Ce compte GitHub n’est pas autorisé.', 403);

  return popupPage({ origin: env.ALLOWED_ORIGIN, status: 'success', payload: { token: tokenData.access_token, provider: 'github' } });
}

export async function handleRequest(request, env, fetchImpl = fetch) {
  const missing = validateEnv(env);
  const url = new URL(request.url);
  if (url.pathname === '/health') return json({ ok: missing.length === 0, configured: missing.length === 0 }, missing.length === 0 ? 200 : 503);
  if (missing.length) return json({ error: 'OAuth worker is not configured' }, 503);
  if (request.method !== 'GET') return json({ error: 'Method not allowed' }, 405);
  if (url.pathname === '/auth') return startAuth(request, env);
  if (url.pathname === '/callback') return finishAuth(request, env, fetchImpl);
  return json({ error: 'Not found' }, 404);
}

export default { fetch: handleRequest };
