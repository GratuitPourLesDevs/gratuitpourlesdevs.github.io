import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { getFreeTierScore } from '../data/free-tier-score';
import { assertOfferQuotaCoverage, getOfferQuotas } from '../data/offer-quotas';

export const prerender = true;

export const GET: APIRoute = async () => {
  const entries = await getCollection('offres');
  const categories = await getCollection('categories');
  const categoryNames = new Map(categories.map((category) => [category.id, category.data.nom]));
  assertOfferQuotaCoverage(entries.map((entry) => entry.id));
  const activeEntries = entries.filter(({ data }) => data.statut !== 'obsolete').sort((a, b) => a.id.localeCompare(b.id));
  const offers = activeEntries.map((entry) => entry.id);
  const quotas = Object.fromEntries(offers.map((id) => [id, getOfferQuotas(id)]));
  const catalogue = Object.fromEntries(activeEntries.map((entry) => {
    const latestHistory = [...entry.data.historique].sort((a, b) => b.date.getTime() - a.date.getTime())[0];
    const latestChangeAt = latestHistory?.date ?? entry.data.verifieLe;
    return [entry.id, {
      id: entry.id,
      name: entry.data.nom,
      category: categoryNames.get(entry.data.categorie) ?? entry.data.categorie,
      score: getFreeTierScore(entry.id, entry.data).total,
      freeTier: entry.data.formule,
      cardRequired: entry.data.carteRequise,
      permanent: entry.data.permanent,
      status: entry.data.statut,
      verifiedAt: entry.data.verifieLe.toISOString(),
      latestChangeAt: latestChangeAt.toISOString(),
      latestChangeTitle: latestHistory?.titre ?? 'Offre vérifiée',
      latestChangeSummary: latestHistory?.resume ?? entry.data.verificationNote ?? 'Quotas, conditions et restrictions contrôlés.',
    }];
  }));
  return new Response(JSON.stringify({ offers, quotaSchemaVersion: 1, quotas, catalogue }), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=300',
    },
  });
};
