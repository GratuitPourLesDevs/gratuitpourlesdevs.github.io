import assert from 'node:assert/strict';
import test from 'node:test';
import { detectOfferChanges, handleRadarRequest, normalizeRadarOffer, stableStringify } from './radar.js';

const base = normalizeRadarOffer({
  id: 'vercel',
  name: 'Vercel',
  freeTier: 'Hobby',
  cardRequired: false,
  overageBilled: false,
  permanent: true,
  status: 'active',
  sourceUrl: 'https://vercel.com/pricing',
  verifiedAt: '2026-08-27T00:00:00.000Z',
  conditions: ['Usage personnel'],
  restrictions: [],
  alerts: [],
  quotas: [{
    id: 'bandwidth',
    metric: 'bandwidth',
    amount: 100,
    unit: 'GB',
    period: 'month',
    scope: 'account',
    reset: 'monthly',
    overage: 'blocked',
  }],
}, 'vercel');

test('stableStringify ignores object key order', () => {
  assert.equal(stableStringify({ b: 2, a: 1 }), stableStringify({ a: 1, b: 2 }));
});

test('card requirement becoming mandatory is critical', () => {
  const current = { ...base, cardRequired: true };
  assert.deepEqual(
    detectOfferChanges(base, current).map(({ eventType, severity }) => [eventType, severity]),
    [['PAYMENT_REQUIREMENT_CHANGED', 'critical']],
  );
});

test('quota decrease is detected as important', () => {
  const current = structuredClone(base);
  current.quotas[0].amount = 75;
  const [change] = detectOfferChanges(base, current);
  assert.equal(change.eventType, 'QUOTA_DECREASED');
  assert.equal(change.field, 'quota.bandwidth.amount');
  assert.equal(change.severity, 'important');
  assert.equal(change.oldValue, '100');
  assert.equal(change.newValue, '75');
});

test('quota overage becoming billed is critical', () => {
  const current = structuredClone(base);
  current.quotas[0].overage = 'billed';
  const change = detectOfferChanges(base, current).find((item) => item.eventType === 'QUOTA_OVERAGE_CHANGED');
  assert.equal(change?.severity, 'critical');
});

test('free tier removal is critical', () => {
  const current = { ...base, status: 'obsolete' };
  const [change] = detectOfferChanges(base, current);
  assert.equal(change.eventType, 'FREE_TIER_REMOVED');
  assert.equal(change.severity, 'critical');
});

test('verification date alone does not create a business event', () => {
  const current = { ...base, verifiedAt: '2026-08-28T00:00:00.000Z' };
  assert.deepEqual(detectOfferChanges(base, current), []);
});

test('condition order alone is normalized away', () => {
  const previous = normalizeRadarOffer({ ...base, conditions: ['B', 'A'] }, 'vercel');
  const current = normalizeRadarOffer({ ...base, conditions: ['A', 'B'] }, 'vercel');
  assert.deepEqual(detectOfferChanges(previous, current), []);
});

test('radar API refuses to operate without its D1 binding', async () => {
  const response = await handleRadarRequest(
    new Request('https://worker.example/api/radar/events'),
    { ALLOWED_ORIGIN: 'https://gratuitpourlesdevs.fr' },
  );
  assert.equal(response.status, 503);
});

test('radar handler ignores unrelated routes', async () => {
  const response = await handleRadarRequest(
    new Request('https://worker.example/api/account/me'),
    { ALLOWED_ORIGIN: 'https://gratuitpourlesdevs.fr' },
  );
  assert.equal(response, null);
});
