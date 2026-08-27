import adminWorker, { handleRequest as handleAdminRequest } from './oauth.js';
import { handleAccountRequest, runWeeklyDigest } from './account.js';
import { handleAccountDeleteRequest } from './account-delete.js';
import { handleAffiliateRequest } from './affiliate.js';
import { handleMonetizationRequest } from './monetization.js';
import { handleRadarRequest, runFreeTierRadar } from './radar.js';
import { handleSearchWatchRequest, runSearchWatches } from './search-watch.js';

function accountEnvironment(env) {
  return {
    ...env,
    GITHUB_CLIENT_ID: env.ACCOUNT_GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET: env.ACCOUNT_GITHUB_CLIENT_SECRET,
  };
}

export async function handleRequest(request, env, fetchImpl = fetch) {
  const radarResponse = await handleRadarRequest(request, env);
  if (radarResponse) return radarResponse;
  const monetizationResponse = await handleMonetizationRequest(request, env, fetchImpl);
  if (monetizationResponse) return monetizationResponse;
  const affiliateResponse = await handleAffiliateRequest(request, env, fetchImpl);
  if (affiliateResponse) return affiliateResponse;
  const deleteResponse = await handleAccountDeleteRequest(request, env);
  if (deleteResponse) return deleteResponse;
  // Intercepte les recherches sauvegardées avant le routeur de compte historique.
  // Cela permet de faire évoluer leur modèle sans modifier les autres fonctionnalités du compte.
  const searchWatchResponse = await handleSearchWatchRequest(request, env, fetchImpl);
  if (searchWatchResponse) return searchWatchResponse;
  const accountResponse = await handleAccountRequest(request, accountEnvironment(env), fetchImpl);
  if (accountResponse) return accountResponse;
  return handleAdminRequest(request, env, fetchImpl);
}

async function runScheduledTasks(controller, env) {
  // Le digest hebdomadaire part après un scan et après l'évaluation des recherches surveillées.
  if (controller?.cron === '0 7 * * 1') {
    const radar = await runFreeTierRadar(env);
    const searches = await runSearchWatches(env, fetch, { weekly: true });
    const digest = await runWeeklyDigest(env);
    return { radar, searches, digest };
  }
  const radar = await runFreeTierRadar(env);
  const searches = await runSearchWatches(env, fetch, { weekly: false });
  return { radar, searches };
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
