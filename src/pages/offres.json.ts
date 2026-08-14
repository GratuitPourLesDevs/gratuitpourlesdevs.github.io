import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const prerender = true;

export const GET: APIRoute = async () => {
  const offers = (await getCollection('offres'))
    .filter(({ data }) => data.statut !== 'obsolete')
    .map((entry) => entry.id)
    .sort();
  return new Response(JSON.stringify({ offers }), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=300',
    },
  });
};
