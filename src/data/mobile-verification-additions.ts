import { OFFER_QUOTAS, type OfferQuota } from './offer-quotas';

const QUOTAS: Record<string, OfferQuota[]> = {
  numverify: [
    { id: 'api-requests', metric: 'requests', label: 'Requêtes API', amount: 100, unit: 'request', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
  ],
  veriphone: [
    { id: 'validations', metric: 'requests', label: 'Validations standard', amount: 1000, unit: 'validation', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit', notes: 'Chaque validation standard consomme 1 crédit. Le compte gratuit reçoit 1 000 crédits par mois.' },
  ],
};

for (const [offerId, quotas] of Object.entries(QUOTAS)) {
  OFFER_QUOTAS[offerId] = quotas;
}

export const MOBILE_VERIFICATION_QUOTA_SCORES = {
  numverify: 15,
  veriphone: 20,
} satisfies Record<string, 5 | 10 | 15 | 20 | 25>;
