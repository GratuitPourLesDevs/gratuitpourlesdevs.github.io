import { OFFER_QUOTAS } from './offer-quotas';

OFFER_QUOTAS.parsivex ??= [
  {
    id: 'free-tier-unverified',
    metric: 'service_specific',
    label: 'Quota gratuit annoncé à vérifier',
    amount: null,
    unit: 'various',
    period: 'variable',
    scope: 'account',
    reset: 'variable',
    overage: 'unknown',
    kind: 'not-published',
    notes: 'Aucun quota chiffré n’est considéré comme vérifié tant qu’une source officielle accessible ne confirme pas le free tier Parsivex.',
  },
];
