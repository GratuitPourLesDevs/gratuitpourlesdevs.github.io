import assert from 'node:assert/strict';
import test from 'node:test';
import { handleAccountDeleteRequest } from './account-delete.js';

const origin = 'https://gratuitpourlesdevs.fr';

test('account deletion accepts browser CORS preflight', async () => {
  const response = await handleAccountDeleteRequest(new Request('https://oauth.example/api/account/delete', { method: 'OPTIONS', headers: { Origin: origin } }), { ALLOWED_ORIGIN: origin, COMPARISONS_DB: {} });
  assert.equal(response.status, 204);
  assert.equal(response.headers.get('access-control-allow-origin'), origin);
  assert.match(response.headers.get('access-control-allow-methods'), /DELETE/);
  assert.match(response.headers.get('access-control-allow-headers'), /Authorization/);
});

test('account deletion rejects a request without a session token', async () => {
  const response = await handleAccountDeleteRequest(new Request('https://oauth.example/api/account/delete', { method: 'DELETE', headers: { Origin: origin } }), { ALLOWED_ORIGIN: origin, COMPARISONS_DB: {} });
  assert.equal(response.status, 401);
  assert.deepEqual(await response.json(), { error: 'Authentication required', code: 'unauthorized' });
});
