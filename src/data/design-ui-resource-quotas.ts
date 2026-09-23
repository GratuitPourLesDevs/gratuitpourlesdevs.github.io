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
