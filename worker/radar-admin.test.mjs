import assert from 'node:assert/strict';
import test from 'node:test';
import {
  handleRadarAdminRequest,
  healthStatus,
  nextRadarScanAt,
  nextWeeklyDigestAt,
} from './radar-admin.js';

test('nextRadarScanAt returns the next 6-hour slot at minute 17 UTC', () => {
  const now = Date.parse('2026-08-27T20:00:00Z');
  assert.equal(nextRadarScanAt(now), Date.parse('2026-08-28T00:17:00Z'));
});

test('nextRadarScanAt skips a slot that already started', () => {
  const now = Date.parse('2026-08-28T00:17:01Z');
  assert.equal(nextRadarScanAt(now), Date.parse('2026-08-28T06:17:00Z'));
});

test('nextWeeklyDigestAt returns Monday 07:00 UTC', () => {
  const now = Date.parse('2026-08-27T20:00:00Z');
  assert.equal(nextWeeklyDigestAt(now), Date.parse('2026-08-31T07:00:00Z'));
});

test('healthStatus reports a fresh successful run as healthy', () => {
  const now = Date.parse('2026-08-27T22:00:00Z');
  const health = healthStatus({ status: 'success', finishedAt: now - 60_000, errorMessage: null }, now);
  assert.equal(health.code, 'healthy');
});

test('healthStatus reports an old successful run as stale', () => {
  const now = Date.parse('2026-08-27T22:00:00Z');
  const health = healthStatus({ status: 'success', finishedAt: now - 9 * 60 * 60 * 1000, errorMessage: null }, now);
  assert.equal(health.code, 'stale');
});

test('admin radar API rejects requests without a bearer token', async () => {
  const response = await handleRadarAdminRequest(
    new Request('https://worker.example/api/radar/admin/dashboard'),
    { ALLOWED_ORIGIN: 'https://gratuitpourlesdevs.fr', COMPARISONS_DB: {} },
  );
  assert.equal(response.status, 401);
});

test('admin radar handler ignores unrelated routes', async () => {
  const response = await handleRadarAdminRequest(
    new Request('https://worker.example/api/radar/status'),
    { ALLOWED_ORIGIN: 'https://gratuitpourlesdevs.fr' },
  );
  assert.equal(response, null);
});
