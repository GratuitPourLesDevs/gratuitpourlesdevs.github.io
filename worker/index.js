import adminWorker, { handleRequest as handleAdminRequest } from './oauth.js';
import { handleAccountRequest, runWeeklyDigest } from './account.js';
import { handleAccountDeleteRequest } from './account-delete.js';
import { handleAffiliateRequest } from './affiliate.js';

function accountEnvironment(env) {
  return {
    ...env,
    GITHUB_CLIENT_ID: env.ACCOUNT_GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET: env.ACCOUNT_GITHUB_CLIENT_SECRET,
  };
}

export async function handleRequest(request, env, fetchImpl = fetch) {
  const affiliateResponse = await handleAffiliateRequest(request, env, fetchImpl);
  if (affiliateResponse) return affiliateResponse;
  const deleteResponse = await handleAccountDeleteRequest(request, env);
  if (deleteResponse) return deleteResponse;
  const accountResponse = await handleAccountRequest(request, accountEnvironment(env), fetchImpl);
  if (accountResponse) return accountResponse;
  return handleAdminRequest(request, env, fetchImpl);
}

export default {
  async fetch(request, env) {
    return handleRequest(request, env);
  },
  async scheduled(_controller, env, ctx) {
    ctx.waitUntil(runWeeklyDigest(env));
  },
};

export { adminWorker };
