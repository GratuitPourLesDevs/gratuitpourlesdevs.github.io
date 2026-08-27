import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { assertOfferQuotaCoverage, getOfferQuotas } from '../data/offer-quotas';

export const prerender = true;

export const GET: APIRoute = async () => {
  const entries = await getCollection('offres');
  assertOfferQuotaCoverage(entries.map((entry) => entry.id));

  const sortedEntries = [...entries].sort((a, b) => a.id.localeCompare(b.id));
  const radarCatalogue = Object.fromEntries(sortedEntries.map((entry) => {
    const latestHistory = [...entry.data.historique].sort((a, b) => b.date.getTime() - a.date.getTime())[0];
    const latestChangeAt = latestHistory?.date ?? entry.data.verifieLe;
    return [entry.id, {
      id: entry.id,
      name: entry.data.nom,
      freeTier: entry.data.formule,
      cardRequired: entry.data.carteRequise,
      overageBilled: entry.data.depassementFacture,
      permanent: entry.data.permanent,
      status: entry.data.statut,
      sourceUrl: entry.data.source,
      verificationState: entry.data.verificationEtat ?? null,
      verifiedAt: entry.data.verifieLe.toISOString(),
      latestChangeAt: latestChangeAt.toISOString(),
      conditions: entry.data.conditions,
      restrictions: entry.data.restrictions,
      alerts: entry.data.alertes.map((alert) => ({
        type: alert.type,
        level: alert.niveau,
        label: alert.libelle,
        detail: alert.detail,
      })),
      quotas: getOfferQuotas(entry.id),
    }];
  }));

  return new Response(JSON.stringify({ radarSchemaVersion: 1, radarCatalogue }), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=300',
    },
  });
};
