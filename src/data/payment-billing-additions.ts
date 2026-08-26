import { OFFER_QUOTAS } from './offer-quotas';

OFFER_QUOTAS['adapty'] ??= [
  { id: 'tracked-revenue', metric: 'revenue', label: 'Revenus mensuels suivis gratuits', amount: 5000, unit: 'USD', period: 'month', scope: 'account', reset: 'monthly', overage: 'billed', kind: 'limit', notes: 'Au-delà de 5 000 $ MTR, le plan Pro facture 1 % des revenus suivis.' },
];

OFFER_QUOTAS['allratestoday'] ??= [
  { id: 'requests', metric: 'requests', label: 'Requêtes API', amount: 300, unit: 'request', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
  { id: 'rate-limit', metric: 'requests', label: 'Débit maximal', amount: 10, unit: 'request/min', period: 'variable', scope: 'account', reset: 'rolling', overage: 'blocked', kind: 'limit' },
  { id: 'api-keys', metric: 'keys', label: 'Clés API', amount: 1, unit: 'key', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['churnkey'] ??= [
  { id: 'open-source-sdk', metric: 'cancel-flow', label: 'SDK cancel flow open source', amount: null, unit: 'component', period: 'lifetime', scope: 'project', reset: 'not-applicable', overage: 'not-applicable', kind: 'unmetered', notes: 'Le composant React MIT fonctionne sans compte Churnkey.' },
  { id: 'analytics', metric: 'analytics', label: 'Usage analytics gratuit', amount: null, unit: 'session', period: 'variable', scope: 'account', reset: 'variable', overage: 'unknown', kind: 'not-published', notes: 'Churnkey ne publie pas de quota numérique pour le niveau Analytics gratuit.' },
];

OFFER_QUOTAS['coinmarketcap'] ??= [
  { id: 'call-credits', metric: 'credits', label: 'Call credits API', amount: 15000, unit: 'credit', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
  { id: 'rate-limit', metric: 'requests', label: 'Débit maximal', amount: 50, unit: 'request/min', period: 'variable', scope: 'account', reset: 'rolling', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['currencyapi'] ??= [
  { id: 'requests', metric: 'requests', label: 'Requêtes API', amount: 300, unit: 'request', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
  { id: 'rate-limit', metric: 'requests', label: 'Débit maximal', amount: 10, unit: 'request/min', period: 'variable', scope: 'account', reset: 'rolling', overage: 'blocked', kind: 'limit' },
  { id: 'api-keys', metric: 'keys', label: 'Clés API', amount: 1, unit: 'key', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['currencyapi-net'] ??= [
  { id: 'requests', metric: 'requests', label: 'Requêtes API', amount: 500, unit: 'request', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
  { id: 'rate-limit', metric: 'requests', label: 'Débit maximal', amount: 10, unit: 'request/min', period: 'variable', scope: 'account', reset: 'rolling', overage: 'blocked', kind: 'limit' },
  { id: 'api-keys', metric: 'keys', label: 'Clés API', amount: 1, unit: 'key', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['currencyfreaks'] ??= [
  { id: 'requests', metric: 'requests', label: 'Appels API', amount: 1000, unit: 'request', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['currencylayer'] ??= [
  { id: 'requests', metric: 'requests', label: 'Appels API', amount: 100, unit: 'request', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['exchangerate-api'] ??= [
  { id: 'requests', metric: 'requests', label: 'Requêtes API', amount: 1500, unit: 'request', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['fraudlabspro'] ??= [
  { id: 'queries', metric: 'requests', label: 'Validations de fraude', amount: 500, unit: 'query', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
  { id: 'merchant-sales', metric: 'revenue', label: 'Plafond de ventes du marchand', amount: 25000, unit: 'USD', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
  { id: 'rules', metric: 'rules', label: 'Règles de validation', amount: 5, unit: 'rule', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'blacklists', metric: 'blacklist', label: 'Entrées de blacklist personnalisées', amount: 50, unit: 'entry', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['parityvend'] ??= [
  { id: 'requests', metric: 'requests', label: 'Requêtes', amount: 7500, unit: 'request', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['qonversion'] ??= [
  { id: 'tracked-revenue', metric: 'revenue', label: 'Revenus mensuels suivis gratuits', amount: 10000, unit: 'USD', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit', notes: 'Un plan payant est nécessaire au-delà de 10 000 $ MTR.' },
  { id: 'apps', metric: 'applications', label: 'Applications', amount: null, unit: 'application', period: 'lifetime', scope: 'account', reset: 'never', overage: 'not-applicable', kind: 'unlimited' },
  { id: 'seats', metric: 'users', label: 'Membres d’équipe', amount: null, unit: 'user', period: 'lifetime', scope: 'account', reset: 'never', overage: 'not-applicable', kind: 'unlimited' },
];

OFFER_QUOTAS['revenuecat'] ??= [
  { id: 'tracked-revenue', metric: 'revenue', label: 'Revenus mensuels suivis gratuits', amount: 2500, unit: 'USD', period: 'month', scope: 'account', reset: 'monthly', overage: 'billed', kind: 'limit', notes: 'Au-delà de 2 500 $ MTR, RevenueCat facture 1 % des revenus mensuels suivis.' },
];

OFFER_QUOTAS['vatlayer'] ??= [
  { id: 'requests', metric: 'requests', label: 'Requêtes API', amount: 100, unit: 'request', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
];

export const PAYMENT_BILLING_QUOTA_SCORES = {
  adapty: 20,
  allratestoday: 15,
  churnkey: 25,
  coinmarketcap: 20,
  currencyapi: 10,
  'currencyapi-net': 15,
  currencyfreaks: 15,
  currencylayer: 10,
  'exchangerate-api': 20,
  fraudlabspro: 15,
  parityvend: 25,
  qonversion: 25,
  revenuecat: 20,
  vatlayer: 10,
} satisfies Record<string, 5 | 10 | 15 | 20 | 25>;
