import { OFFER_QUOTAS } from './offer-quotas';

OFFER_QUOTAS['shadcn-space'] ??= [
  {
    id: 'open-source-resources',
    metric: 'resources',
    label: 'Utilisation des ressources open source gratuites',
    amount: null,
    unit: 'resource',
    period: 'lifetime',
    scope: 'free-catalog',
    reset: 'not-applicable',
    overage: 'not-applicable',
    kind: 'unmetered',
    notes: 'Les ressources marquées Free peuvent être copiées ou installées et utilisées sous leur licence open source. Le catalogue gratuit constitue un sous-ensemble évolutif de la bibliothèque complète.',
  },
];


OFFER_QUOTAS['shadcn-dashboard'] ??= [
  {
    id: 'free-assets',
    metric: 'resources',
    label: 'Utilisation des assets gratuits',
    amount: null,
    unit: 'resource',
    period: 'lifetime',
    scope: 'free-catalog',
    reset: 'not-applicable',
    overage: 'not-applicable',
    kind: 'unmetered',
    notes: 'Les templates, blocs et composants proposés gratuitement peuvent être utilisés sans compte ni paiement, y compris dans des projets commerciaux, sous réserve de ne pas les redistribuer comme bibliothèque ou template autonome.',
  },
];
