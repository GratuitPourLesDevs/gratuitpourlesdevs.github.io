import adminWorker, { handleRequest as handleAdminRequest } from './oauth.js';
import { handleAccountRequest, runWeeklyDigest } from './account.js';
import { handleAccountDeleteRequest } from './account-delete.js';
import { handleAffiliateRequest } from './affiliate.js';
import { handleMonetizationRequest } from './monetization.js';
import { handleRadarAdminRequest } from './radar-admin.js';
import { handleRadarRequest, runFreeTierRadar } from './radar.js';
import { handleSearchWatchAdminRequest } from './search-watch-admin.js';
import { handleSearchWatchRequest, runSearchWatches } from './search-watch.js';

function accountEnvironment(env) {
  return {
    ...env,
    GITHUB_CLIENT_ID: env.ACCOUNT_GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET: env.ACCOUNT_GITHUB_CLIENT_SECRET,
  };
}

export async function handleRequest(request, env, fetchImpl = fetch) {
  const searchWatchAdminResponse = await handleSearchWatchAdminRequest(request, env, fetchImpl);
  if (searchWatchAdminResponse) return searchWatchAdminResponse;
  const radarAdminResponse = await handleRadarAdminRequest(request, env, fetchImpl);
  if (radarAdminResponse) return radarAdminResponse;
  const radarResponse = await handleRadarRequest(request, env);
  if (radarResponse) return radarResponse;
  const monetizationResponse = await handleMonetizationRequest(request, env, fetchImpl);
  if (monetizationResponse) return monetizationResponse;
  const affiliateResponse = await handleAffiliateRequest(request, env, fetchImpl);
  if (affiliateResponse) return affiliateResponse;
  const deleteResponse = await handleAccountDeleteRequest(request, env);
  if (deleteResponse) return deleteResponse;
  const accountEnv = accountEnvironment(env);
  const searchWatchResponse = await handleSearchWatchRequest(request, accountEnv, fetchImpl);
  if (searchWatchResponse) return searchWatchResponse;
  const accountResponse = await handleAccountRequest(request, accountEnv, fetchImpl);
  if (accountResponse) return accountResponse;
  return handleAdminRequest(request, env, fetchImpl);
}

async function runScheduledTasks(controller, env, fetchImpl = fetch) {
  const accountEnv = accountEnvironment(env);
  // Le digest hebdomadaire part après un scan afin d'utiliser un catalogue aussi frais que possible.
  if (controller?.cron === '0 7 * * 1') {
    await runFreeTierRadar(env, fetchImpl);
    await runSearchWatches(accountEnv, fetchImpl, { weekly: true, trigger: 'cron', frequencyScope: 'weekly' });
    return runWeeklyDigest(env);
  }
  await runFreeTierRadar(env, fetchImpl);
  return runSearchWatches(accountEnv, fetchImpl, { weekly: false, trigger: 'cron', frequencyScope: 'immediate' });
}

export default {
  async fetch(request, env) {
    return handleRequest(request, env);
  },
  async scheduled(controller, env, ctx) {
    ctx.waitUntil(runScheduledTasks(controller, env));
  },
};

export { adminWorker, runScheduledTasks };
