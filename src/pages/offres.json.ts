import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { assertOfferQuotaCoverage, getOfferQuotas } from '../data/offer-quotas';

export const prerender = true;

export const GET: APIRoute = async () => {
  const entries = await getCollection('offres');
  assertOfferQuotaCoverage(entries.map((entry) => entry.id));
  const offers = entries.filter(({ data }) => data.statut !== 'obsolete').map((entry) => entry.id).sort();
  const quotas = Object.fromEntries(offers.map((id) => [id, getOfferQuotas(id)]));
  return new Response(JSON.stringify({ offers, quotaSchemaVersion: 1, quotas }), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=300',
    },
  });
};
