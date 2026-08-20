import assert from 'node:assert/strict';
import test from 'node:test';
import { handleRequest } from './index.js';

const env = {
  GITHUB_CLIENT_ID: 'admin-client-id',
  GITHUB_CLIENT_SECRET: 'admin-client-secret',
  ACCOUNT_GITHUB_CLIENT_ID: 'account-client-id',
  ACCOUNT_GITHUB_CLIENT_SECRET: 'account-client-secret',
  STATE_SECRET: 'a-long-random-test-secret',
  ALLOWED_ORIGIN: 'https://gratuitpourlesdevs.fr',
  ALLOWED_SITE_ID: 'gratuitpourlesdevs.fr',
  ALLOWED_GITHUB_LOGINS: 'GratuitPourLesDevs',
};

test('public account login uses the dedicated GitHub OAuth app', async () => {
  const response = await handleRequest(new Request('https://oauth.example/account/auth?return_to=%2Fcompte%2F'), env);
  assert.equal(response.status, 302);
  const location = new URL(response.headers.get('location'));
  assert.equal(location.searchParams.get('client_id'), 'account-client-id');
  assert.equal(location.searchParams.get('scope'), 'read:user user:email');
});

test('admin login keeps the administration OAuth app', async () => {
  const response = await handleRequest(new Request('https://oauth.example/auth?provider=github&site_id=gratuitpourlesdevs.fr'), env);
  assert.equal(response.status, 302);
  const location = new URL(response.headers.get('location'));
  assert.equal(location.searchParams.get('client_id'), 'admin-client-id');
  assert.equal(location.searchParams.get('scope'), 'public_repo');
});
