import assert from 'node:assert/strict';
import test from 'node:test';
import { handleAccountRequest, FREE_LIMITS } from './account.js';

const env = {
  GITHUB_CLIENT_ID: 'client-id',
  GITHUB_CLIENT_SECRET: 'client-secret',
  STATE_SECRET: 'a-long-random-test-secret',
  ALLOWED_ORIGIN: 'https://gratuitpourlesdevs.fr',
  COMPARISONS_DB: {},
};

test('account router ignores unrelated routes', async () => {
  const response = await handleAccountRequest(new Request('https://oauth.example/health'), env);
  assert.equal(response, null);
});

test('account OAuth uses PKCE and user-only GitHub scopes', async () => {
  const response = await handleAccountRequest(new Request('https://oauth.example/account/auth?return_to=%2Fcompte%2F'), env);
  assert.equal(response.status, 302);
  const location = new URL(response.headers.get('location'));
  assert.equal(location.origin, 'https://github.com');
  assert.equal(location.searchParams.get('scope'), 'read:user user:email');
  assert.equal(location.searchParams.get('code_challenge_method'), 'S256');
  assert.ok(location.searchParams.get('state'));
  assert.ok(location.searchParams.get('code_challenge'));
  assert.doesNotMatch(location.searchParams.get('scope'), /repo/);
  assert.match(response.headers.get('set-cookie'), /HttpOnly; Secure; SameSite=Lax/);
});

test('account API exposes CORS preflight only to the site origin', async () => {
  const response = await handleAccountRequest(new Request('https://oauth.example/api/account/me', { method: 'OPTIONS', headers: { Origin: env.ALLOWED_ORIGIN } }), env);
  assert.equal(response.status, 204);
  assert.equal(response.headers.get('access-control-allow-origin'), env.ALLOWED_ORIGIN);
  assert.match(response.headers.get('access-control-allow-headers'), /Authorization/);
});

test('account API rejects requests without a GPLD session', async () => {
  const response = await handleAccountRequest(new Request('https://oauth.example/api/account/me', { headers: { Origin: env.ALLOWED_ORIGIN } }), env);
  assert.equal(response.status, 401);
  assert.deepEqual(await response.json(), { error: 'Authentication required', code: 'unauthorized' });
});

test('free launch limits stay explicit', () => {
  assert.deepEqual(FREE_LIMITS, { follows: 5, savedSearches: 3, savedComparisons: 3, stacks: 1 });
});
