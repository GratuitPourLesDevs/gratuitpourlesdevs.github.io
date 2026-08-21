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

test('account OAuth accepts the same-tab redirect flow', async () => {
  const response = await handleAccountRequest(new Request('https://oauth.example/account/auth?return_to=%2Fcompte%2F&flow=redirect'), env);
  assert.equal(response.status, 302);
  assert.equal(new URL(response.headers.get('location')).origin, 'https://github.com');
  assert.match(response.headers.get('set-cookie'), /HttpOnly; Secure; SameSite=Lax/);
});

test('same-tab OAuth returns the GPLD session in a fragment, not in the query string', async () => {
  const row = {
    id: 'github:42', github_login: 'octocat', display_name: 'The Octocat', avatar_url: null,
    email: 'octocat@example.com', email_verified: 1, plan: 'free', digest_enabled: 0,
  };
  const database = {
    prepare(sql) {
      return {
        bind() {
          return {
            async run() { return { success: true }; },
            async first() { return sql.includes('SELECT * FROM users') ? row : null; },
          };
        },
      };
    },
  };
  const redirectEnv = { ...env, COMPARISONS_DB: database };
  const start = await handleAccountRequest(new Request('https://oauth.example/account/auth?return_to=%2Fcompte%2F&flow=redirect'), redirectEnv);
  const authorize = new URL(start.headers.get('location'));
  const cookie = start.headers.get('set-cookie').split(';')[0];
  const fetchImpl = async (url) => {
    if (url === 'https://github.com/login/oauth/access_token') return Response.json({ access_token: 'github-access-token' });
    if (url === 'https://api.github.com/user') return Response.json({ id: 42, login: 'octocat', name: 'The Octocat' });
    if (url === 'https://api.github.com/user/emails') return Response.json([{ email: 'octocat@example.com', primary: true, verified: true }]);
    return new Response(null, { status: 404 });
  };
  const callback = await handleAccountRequest(new Request(`https://oauth.example/callback?code=temporary-code&state=${authorize.searchParams.get('state')}`, { headers: { Cookie: cookie } }), redirectEnv, fetchImpl);
  assert.equal(callback.status, 302);
  const destination = new URL(callback.headers.get('location'));
  assert.equal(destination.origin, env.ALLOWED_ORIGIN);
  assert.equal(destination.pathname, '/compte/');
  assert.equal(destination.search, '');
  assert.match(destination.hash, /^#gpld-account=/);
  const payload = JSON.parse(Buffer.from(destination.hash.slice('#gpld-account='.length), 'base64url').toString('utf8'));
  assert.equal(payload.status, 'success');
  assert.equal(payload.user.login, 'octocat');
  assert.ok(payload.token);
  assert.equal(payload.returnTo, '/compte/');
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
  assert.deepEqual(FREE_LIMITS, { follows: 5, savedSearches: 3, savedComparisons: 3, stacks: 1, stackOffers: 10 });
});

function accountDatabase(plan, updates = []) {
  return {
    prepare(sql) {
      return {
        bind(...values) {
          return {
            async first() {
              if (sql.includes('FROM account_sessions')) return { id: 'github:42', github_login: 'qa', display_name: 'QA', plan, digest_enabled: 0 };
              if (sql.includes('FROM user_stacks')) return { id: 1 };
              return null;
            },
            async run() { updates.push({ sql, values }); return { success: true }; },
          };
        },
      };
    },
  };
}

test('free accounts cannot save more than ten offers in their stack', async () => {
  const offerIds = Array.from({ length: 11 }, (_, index) => `offer-${index + 1}`);
  const response = await handleAccountRequest(new Request('https://oauth.example/api/account/stack', {
    method: 'PUT', headers: { Origin: env.ALLOWED_ORIGIN, Authorization: 'Bearer qa-session', 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Stack QA', offerIds }),
  }), { ...env, COMPARISONS_DB: accountDatabase('free') });
  assert.equal(response.status, 409);
  assert.deepEqual(await response.json(), { error: 'Limite du compte gratuit atteinte', code: 'free_limit', feature: 'stackOffers', limit: 10, upgrade: 'pro' });
});

test('Pro accounts can save more than ten offers in a stack', async () => {
  const offerIds = Array.from({ length: 11 }, (_, index) => `offer-${index + 1}`);
  const updates = [];
  const fetchImpl = async () => Response.json({ offers: offerIds, catalogue: {} });
  const response = await handleAccountRequest(new Request('https://oauth.example/api/account/stack', {
    method: 'PUT', headers: { Origin: env.ALLOWED_ORIGIN, Authorization: 'Bearer qa-session', 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Stack Pro', offerIds }),
  }), { ...env, COMPARISONS_DB: accountDatabase('pro', updates) }, fetchImpl);
  assert.equal(response.status, 200);
  assert.equal((await response.json()).offerIds.length, 11);
  assert.ok(updates.some(({ sql }) => sql.includes('UPDATE user_stacks')));
});
