import adminWorker, { handleRequest as handleAdminRequest } from './oauth.js';
import { handleAccountRequest, runWeeklyDigest } from './account.js';

export async function handleRequest(request, env, fetchImpl = fetch) {
  const accountResponse = await handleAccountRequest(request, env, fetchImpl);
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
