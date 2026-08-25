import test from 'node:test';
import assert from 'node:assert/strict';
import { handleMonetizationRequest } from './monetization.js';

const origin = 'https://gratuitpourlesdevs.fr';
const row = { enabled: 1, client_id: 'ca-pub-1234567890123456', catalogue_slot: '1234567890', guide_slot: '2345678901', offer_slot: '3456789012', consent_ready: 1, updated_at: 1, updated_by: 'admin' };
const db = { prepare() { return { first: async () => row }; } };

test('ignore les routes sans rapport avec la monétisation', async () => {
  assert.equal(await handleMonetizationRequest(new Request('https://worker.test/health'), {}), null);
});

test('expose uniquement la configuration publique prête', async () => {
  const response = await handleMonetizationRequest(new Request('https://worker.test/api/monetization/config', { headers: { Origin: origin } }), { ALLOWED_ORIGIN: origin, COMPARISONS_DB: db });
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { enabled: true, clientId: row.client_id, slots: { catalogue: row.catalogue_slot, guide: row.guide_slot, offer: row.offer_slot } });
  assert.match(response.headers.get('Cache-Control'), /max-age=300/);
});

test('protège les réglages administrateur', async () => {
  const response = await handleMonetizationRequest(new Request('https://worker.test/api/monetization/settings', { headers: { Origin: origin } }), { ALLOWED_ORIGIN: origin, COMPARISONS_DB: db });
  assert.equal(response.status, 401);
});

test('refuse une origine étrangère', async () => {
  const response = await handleMonetizationRequest(new Request('https://worker.test/api/monetization/config', { headers: { Origin: 'https://evil.example' } }), { ALLOWED_ORIGIN: origin, COMPARISONS_DB: db });
  assert.equal(response.status, 403);
});
