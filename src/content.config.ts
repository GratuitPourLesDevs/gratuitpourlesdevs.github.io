import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const offres = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/offres' }),
  schema: z.object({
    nom: z.string(),
    accroche: z.string(),
    type: z.enum(['SaaS', 'PaaS', 'IaaS', 'BaaS', 'API', 'Service managé', 'Ressource']),
    categorie: z.string(),
    formule: z.string(),
    inclus: z.array(z.coerce.string()),
    conditions: z.array(z.coerce.string()),
    restrictions: z.array(z.coerce.string()),
    usages: z.array(z.string()),
    url: z.url(),
    documentation: z.url().optional(),
    source: z.url(),
    couleur: z.string(),
    initiales: z.string(),
    carteRequise: z.boolean(),
    permanent: z.boolean(),
    vedette: z.boolean().default(false),
    ordre: z.number().default(100),
    verifieLe: z.coerce.date(),
  }),
});

const categories = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/categories' }),
  schema: z.object({
    nom: z.string(),
    nomSource: z.string(),
    description: z.string(),
    ordre: z.number().default(100),
    actif: z.boolean().default(true),
  }),
});

export const collections = { offres, categories };
