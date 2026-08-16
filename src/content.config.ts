import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
import { DEPRECATED_USAGE_TAGS, USAGE_TAG_SET } from './data/usage-tags';
import { OFFER_ALERT_LEVELS, OFFER_ALERT_TYPES } from './data/offer-alerts';

const usageTag = z.string().superRefine((tag, context) => {
  if (USAGE_TAG_SET.has(tag)) return;

  const replacement = DEPRECATED_USAGE_TAGS[tag];
  context.addIssue({
    code: 'custom',
    message: replacement
      ? `Tag non canonique « ${tag} ». Utiliser « ${replacement} ».`
      : `Tag inconnu « ${tag} ». L’ajouter d’abord au vocabulaire canonique.`,
  });
});

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
    alertes: z.array(z.object({
      type: z.enum(OFFER_ALERT_TYPES),
      niveau: z.enum(OFFER_ALERT_LEVELS),
      libelle: z.string().min(3).max(48),
      detail: z.string().min(10),
    })).max(4).default([]),
    usages: z.array(usageTag).min(1),
    url: z.url(),
    documentation: z.url().optional(),
    source: z.url(),
    couleur: z.string(),
    initiales: z.string(),
    carteRequise: z.boolean(),
    depassementFacture: z.boolean().default(false),
    permanent: z.boolean(),
    statut: z.enum(['active', 'a_verifier', 'obsolete']).default('active'),
    verificationAutomatiqueLe: z.coerce.date().optional(),
    verificationNote: z.string().optional(),
    historique: z.array(z.object({
      date: z.coerce.date(),
      type: z.enum(['quota', 'conditions', 'statut', 'correction', 'verification']),
      titre: z.string(),
      resume: z.string().optional(),
      changements: z.array(z.object({
        champ: z.string(),
        avant: z.string().optional(),
        apres: z.string().optional(),
        note: z.string().optional(),
      })).min(1),
      source: z.url().optional(),
    })).default([]),
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
