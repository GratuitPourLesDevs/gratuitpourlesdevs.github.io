import assert from 'node:assert/strict';
import test from 'node:test';
import {
  MAX_PAGE_SIZE,
  handleUsersAdminRequest,
  normalizeLimit,
  normalizePage,
  normalizePlan,
  normalizeQuery,
  userRecord,
} from './users-admin.js';

test('user admin normalizes plans and pagination', () => {
  assert.equal(normalizePlan('PRO'), 'pro');
  assert.equal(normalizePlan('free'), 'free');
  assert.equal(normalizePlan('enterprise'), null);
  assert.equal(normalizePage('-4'), 1);
  assert.equal(normalizePage('3'), 3);
  assert.equal(normalizeLimit('1'), 5);
  assert.equal(normalizeLimit('999'), MAX_PAGE_SIZE);
  assert.equal(normalizeQuery(`  ${'a'.repeat(200)}  `).length, 120);
});

test('user record exposes usage without session secrets', () => {
  const record = userRecord({
    id: 'github:42', github_login: 'octo', display_name: 'Octo Cat', email: 'octo@example.com',
    email_verified: 1, plan: 'free', digest_enabled: 1, created_at: 10, updated_at: 11, last_login_at: 12,
    providers: 'github,google', active_sessions: 2, favorites_count: 4, follows_count: 6,
    searches_count: 2, watched_count: 1, comparisons_count: 1, stacks_count: 1, watch_events_count: 3,
    pro_interest_clicks: 2,
  });
  assert.equal(record.accountLabel, 'Octo Cat');
  assert.deepEqual(record.providers, ['github', 'google']);
  assert.equal(record.activeSessions, 2);
  assert.equal(record.usage.follows, 6);
  assert.equal(record.overFreeLimits, true);
  assert.equal(Object.hasOwn(record, 'tokenHash'), false);
});

test('user admin router ignores unrelated routes', async () => {
  const response = await handleUsersAdminRequest(
    new Request('https://worker.example/api/account/me'),
    { ALLOWED_ORIGIN: 'https://gratuitpourlesdevs.fr' },
  );
  assert.equal(response, null);
});

test('user admin requires D1 before authentication', async () => {
  const response = await handleUsersAdminRequest(
    new Request('https://worker.example/api/users/admin/dashboard', { headers: { Origin: 'https://gratuitpourlesdevs.fr' } }),
    { ALLOWED_ORIGIN: 'https://gratuitpourlesdevs.fr' },
  );
  assert.equal(response.status, 503);
});

test('user admin rejects an unauthenticated request', async () => {
  const response = await handleUsersAdminRequest(
    new Request('https://worker.example/api/users/admin/dashboard'),
    { COMPARISONS_DB: {}, ALLOWED_ORIGIN: 'https://gratuitpourlesdevs.fr', ALLOWED_GITHUB_LOGINS: 'julien' },
  );
  assert.equal(response.status, 401);
  assert.deepEqual(await response.json(), { error: 'Unauthorized' });
});

test('authorized admin receives 404 on an unknown user-admin route', async () => {
  const fetchImpl = async () => new Response(JSON.stringify({ login: 'Julien' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
  const response = await handleUsersAdminRequest(
    new Request('https://worker.example/api/users/admin/unknown', { headers: { Authorization: 'Bearer token' } }),
    { COMPARISONS_DB: {}, ALLOWED_ORIGIN: 'https://gratuitpourlesdevs.fr', ALLOWED_GITHUB_LOGINS: 'julien' },
    fetchImpl,
  );
  assert.equal(response.status, 404);
});
