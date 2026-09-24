import { createHash } from 'node:crypto';
import type { CollectionEntry } from 'astro:content';

type OfferEntry = CollectionEntry<'offres'>;

export const getCatalogueVersion = (entries: OfferEntry[]) => {
  const fingerprint = entries
    .map((entry) => ({
      id: entry.id,
      body: entry.body ?? '',
      data: entry.data,
    }))
    .sort((a, b) => a.id.localeCompare(b.id));

  return createHash('sha256')
    .update(JSON.stringify(fingerprint))
    .digest('hex')
    .slice(0, 16);
};
