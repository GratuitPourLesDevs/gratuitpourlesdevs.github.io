import assert from 'node:assert/strict';
import test from 'node:test';
import worker, { handleRequest } from './oauth.js';

const env = {
  GITHUB_CLIENT_ID: 'client-id',
  GITHUB_CLIENT_SECRET: 'client-secret',
  STATE_SECRET: 'a-long-random-test-secret',
  ALLOWED_ORIGIN: 'https://gratuitpourlesdevs.fr',
  ALLOWED_SITE_ID: 'gratuitpourlesdevs.fr',
  ALLOWED_GITHUB_LOGINS: 'GratuitPourLesDevs',
};

test('health fails closed when secrets are missing', async () => {
  const response = await handleRequest(new Request('https://oauth.example/health'), {});
  assert.equal(response.status, 503);
  assert.deepEqual(await response.json(), { ok: false, configured: false });
});

test('auth rejects unknown sites', async () => {
  const response = await handleRequest(new Request('https://oauth.example/auth?provider=github&site_id=evil.example'), env);
  assert.equal(response.status, 403);
});

test('auth uses state, PKCE and the reduced public_repo scope', async () => {
  const response = await handleRequest(new Request('https://oauth.example/auth?provider=github&site_id=gratuitpourlesdevs.fr&scope=repo'), env);
  assert.equal(response.status, 302);
  const location = new URL(response.headers.get('location'));
  assert.equal(location.origin, 'https://github.com');
  assert.equal(location.searchParams.get('scope'), 'public_repo');
  assert.equal(location.searchParams.get('code_challenge_method'), 'S256');
  assert.ok(location.searchParams.get('state'));
  assert.ok(location.searchParams.get('code_challenge'));
  assert.match(response.headers.get('set-cookie'), /HttpOnly; Secure; SameSite=Lax/);
});

test('callback returns the exact Decap handshake for an allowed user', async () => {
  const start = await handleRequest(new Request('https://oauth.example/auth?provider=github&site_id=gratuitpourlesdevs.fr'), env);
  const redirect = new URL(start.headers.get('location'));
  const cookie = start.headers.get('set-cookie').split(';')[0];
  const calls = [];
  const fetchMock = async (url, options) => {
    calls.push({ url, options });
    if (url.includes('/access_token')) return Response.json({ access_token: 'secret-token', token_type: 'bearer', scope: 'public_repo' });
    return Response.json({ login: 'GratuitPourLesDevs' });
  };
  const callback = new Request(`https://oauth.example/callback?code=temporary-code&state=${redirect.searchParams.get('state')}`, { headers: { Cookie: cookie } });
  const response = await handleRequest(callback, env, fetchMock);
  const html = await response.text();
  assert.equal(response.status, 200);
  assert.match(html, /authorizing:github/);
  assert.match(html, /authorization:github:success:/);
  assert.match(html, /secret-token/);
  assert.match(response.headers.get('set-cookie'), /Path=\/callback/);
  assert.match(response.headers.get('set-cookie'), /Max-Age=0/);
  assert.equal(calls.length, 2);
  assert.match(calls[0].options.body, /code_verifier/);
});

test('Cloudflare execution context is not used as the outbound fetch function', async () => {
  const start = await worker.fetch(
    new Request('https://oauth.example/auth?provider=github&site_id=gratuitpourlesdevs.fr'),
    env,
    { waitUntil() {} },
  );
  const redirect = new URL(start.headers.get('location'));
  const cookie = start.headers.get('set-cookie').split(';')[0];
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async (url) => url.includes('/access_token')
    ? Response.json({ access_token: 'secret-token' })
    : Response.json({ login: 'GratuitPourLesDevs' });

  try {
    const callback = new Request(
      `https://oauth.example/callback?code=temporary-code&state=${redirect.searchParams.get('state')}`,
      { headers: { Cookie: cookie } },
    );
    const response = await worker.fetch(callback, env, { waitUntil() {} });
    assert.equal(response.status, 200);
    assert.match(await response.text(), /authorization:github:success:/);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test('callback rejects a modified state before contacting GitHub', async () => {
  const start = await handleRequest(new Request('https://oauth.example/auth?provider=github&site_id=gratuitpourlesdevs.fr'), env);
  const cookie = start.headers.get('set-cookie').split(';')[0];
  let called = false;
  const callback = new Request('https://oauth.example/callback?code=temporary-code&state=modified', { headers: { Cookie: cookie } });
  const response = await handleRequest(callback, env, async () => { called = true; return Response.json({}); });
  assert.equal(response.status, 401);
  assert.equal(called, false);
});

test('callback denies a GitHub account outside the allowlist', async () => {
  const start = await handleRequest(new Request('https://oauth.example/auth?provider=github&site_id=gratuitpourlesdevs.fr'), env);
  const redirect = new URL(start.headers.get('location'));
  const cookie = start.headers.get('set-cookie').split(';')[0];
  const fetchMock = async (url) => url.includes('/access_token') ? Response.json({ access_token: 'secret-token' }) : Response.json({ login: 'intruder' });
  const callback = new Request(`https://oauth.example/callback?code=temporary-code&state=${redirect.searchParams.get('state')}`, { headers: { Cookie: cookie } });
  const response = await handleRequest(callback, env, fetchMock);
  assert.equal(response.status, 403);
  assert.match(await response.text(), /authorization:github:error:/);
});
