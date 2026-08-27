import assert from 'node:assert/strict';
import test from 'node:test';
import { handleSearchWatchAdminRequest, healthStatus } from './search-watch-admin.js';

test('Search Watch admin reports a fresh success as healthy', () => {
  const now = Date.parse('2026-08-28T00:00:00Z');
  const health = healthStatus({ status: 'success', finishedAt: now - 60_000, errorMessage: null }, now);
  assert.equal(health.code, 'healthy');
});

test('Search Watch admin reports a failed run as error', () => {
  const now = Date.parse('2026-08-28T00:00:00Z');
  const health = healthStatus({ status: 'error', finishedAt: now - 60_000, errorMessage: 'boom' }, now);
  assert.equal(health.code, 'error');
  assert.equal(health.detail, 'boom');
});

test('Search Watch admin reports an old run as stale', () => {
  const now = Date.parse('2026-08-28T00:00:00Z');
  const health = healthStatus({ status: 'success', finishedAt: now - 9 * 60 * 60 * 1000, errorMessage: null }, now);
  assert.equal(health.code, 'stale');
});

test('Search Watch admin API rejects requests without a bearer token', async () => {
  const response = await handleSearchWatchAdminRequest(
    new Request('https://worker.example/api/search-watch/admin/dashboard'),
    { ALLOWED_ORIGIN: 'https://gratuitpourlesdevs.fr', COMPARISONS_DB: {} },
  );
  assert.equal(response.status, 401);
});

test('Search Watch admin handler ignores unrelated routes', async () => {
  const response = await handleSearchWatchAdminRequest(
    new Request('https://worker.example/api/radar/status'),
    { ALLOWED_ORIGIN: 'https://gratuitpourlesdevs.fr' },
  );
  assert.equal(response, null);
});
