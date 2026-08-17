import { OFFER_QUOTAS } from './offer-quotas';

OFFER_QUOTAS['abstract-api'] ??= [
  { id: 'ip-requests', metric: 'requests', label: 'IP Geolocation / Intelligence', amount: 1_000, unit: 'request', period: 'month', scope: 'api', reset: 'monthly', overage: 'blocked', kind: 'limit' },
  { id: 'email-requests', metric: 'requests', label: 'Email Validation', amount: 100, unit: 'request', period: 'month', scope: 'api', reset: 'monthly', overage: 'blocked', kind: 'limit' },
  { id: 'phone-requests', metric: 'requests', label: 'Phone Validation', amount: 100, unit: 'request', period: 'month', scope: 'api', reset: 'monthly', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS.alphai ??= [
  { id: 'daily-requests', metric: 'requests', label: 'Requêtes quotidiennes REST + MCP', amount: 100, unit: 'request', period: 'day', scope: 'account', reset: 'daily', overage: 'blocked', kind: 'limit' },
  { id: 'rate-limit', metric: 'requests', label: 'Débit maximal', amount: 20, unit: 'request/minute', period: 'variable', scope: 'account', reset: 'rolling', overage: 'blocked', kind: 'limit' },
  { id: 'api-keys', metric: 'api_keys', label: 'Clés API', amount: 1, unit: 'key', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS.anyhook ??= [
  { id: 'events-month', metric: 'events', label: 'Événements', amount: 3_000, unit: 'event', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
  { id: 'events-day', metric: 'events', label: 'Plafond quotidien', amount: 100, unit: 'event', period: 'day', scope: 'account', reset: 'daily', overage: 'blocked', kind: 'limit' },
  { id: 'apps', metric: 'applications', label: 'Apps', amount: 1, unit: 'application', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'retries', metric: 'retries', label: 'Retries automatiques', amount: 3, unit: 'retry', period: 'session', scope: 'delivery', reset: 'not-applicable', overage: 'blocked', kind: 'limit' },
  { id: 'retention', metric: 'retention', label: 'Rétention', amount: 3, unit: 'day', period: 'lifetime', scope: 'event', reset: 'never', overage: 'not-applicable', kind: 'limit' },
  { id: 'payload', metric: 'payload_size', label: 'Payload maximal', amount: 512, unit: 'KB', period: 'session', scope: 'event', reset: 'not-applicable', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS.apify ??= [
  { id: 'monthly-credit', metric: 'credit', label: 'Crédits plateforme', amount: 5, unit: 'USD', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'credit', notes: 'Crédit partagé entre compute, Actors et ressources consommées.' },
];

OFFER_QUOTAS['apitemplate-io'] ??= [
  { id: 'generations', metric: 'requests', label: 'Images ou PDF générés', amount: 50, unit: 'generation', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
  { id: 'templates', metric: 'templates', label: 'Templates', amount: 3, unit: 'template', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS.apiverve ??= [
  { id: 'credits', metric: 'credit', label: 'Crédits API', amount: 100, unit: 'credit', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'credit' },
  { id: 'rate-limit', metric: 'requests', label: 'Débit maximal', amount: 5, unit: 'request/minute', period: 'variable', scope: 'account', reset: 'rolling', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['arize-ax'] ??= [
  { id: 'spans', metric: 'events', label: 'Trace spans', amount: 25_000, unit: 'span', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
  { id: 'ingestion', metric: 'storage', label: 'Ingestion', amount: 1, unit: 'GB', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
  { id: 'retention', metric: 'retention', label: 'Rétention', amount: 15, unit: 'day', period: 'lifetime', scope: 'trace', reset: 'never', overage: 'not-applicable', kind: 'limit' },
  { id: 'users', metric: 'users', label: 'Utilisateurs', amount: null, unit: 'user', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' },
  { id: 'evals', metric: 'evaluations', label: 'Évaluations', amount: null, unit: 'evaluation', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' },
];

OFFER_QUOTAS.beeceptor ??= [
  { id: 'requests', metric: 'requests', label: 'Requêtes par endpoint', amount: 50, unit: 'request', period: 'day', scope: 'endpoint', reset: 'daily', overage: 'blocked', kind: 'limit' },
  { id: 'rules', metric: 'rules', label: 'Règles de mock', amount: 3, unit: 'rule', period: 'lifetime', scope: 'endpoint', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'crud-objects', metric: 'objects', label: 'Objets CRUD', amount: 10, unit: 'object', period: 'lifetime', scope: 'endpoint', reset: 'never', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS.bigdatacloud ??= [
  { id: 'ip-geolocation', metric: 'requests', label: 'IP Geolocation', amount: 10_000, unit: 'request', period: 'month', scope: 'package', reset: 'monthly', overage: 'blocked', kind: 'limit' },
  { id: 'reverse-geocoding', metric: 'requests', label: 'Reverse Geocoding', amount: 50_000, unit: 'request', period: 'month', scope: 'package', reset: 'monthly', overage: 'blocked', kind: 'limit' },
  { id: 'client-side', metric: 'requests', label: 'API client-side gratuites', amount: null, unit: 'request', period: 'month', scope: 'endpoint', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited', notes: 'Sans plafond mensuel fixe, sous fair use et pour exécution côté client.' },
];

OFFER_QUOTAS['brave-search-api'] ??= [
  { id: 'monthly-credit', metric: 'credit', label: 'Crédits gratuits', amount: 5, unit: 'USD', period: 'month', scope: 'subscription', reset: 'monthly', overage: 'billed', kind: 'credit' },
  { id: 'search-requests', metric: 'requests', label: 'Requêtes Search couvertes au tarif actuel', amount: 1_000, unit: 'request', period: 'month', scope: 'subscription', reset: 'monthly', overage: 'billed', kind: 'limit', notes: 'Équivalence calculée à partir du tarif officiel de 5 $ pour 1 000 requêtes Search.' },
  { id: 'rate-limit', metric: 'requests', label: 'Capacité Search', amount: 50, unit: 'request/second', period: 'variable', scope: 'subscription', reset: 'rolling', overage: 'billed', kind: 'limit' },
];

OFFER_QUOTAS['browse-ai'] ??= [
  { id: 'credits', metric: 'credit', label: 'Crédits', amount: 50, unit: 'credit', period: 'month', scope: 'workspace', reset: 'monthly', overage: 'blocked', kind: 'credit', notes: 'Sur un site standard, un crédit permet généralement d’extraire jusqu’à 10 lignes.' },
  { id: 'websites', metric: 'domains', label: 'Sites', amount: 2, unit: 'domain', period: 'lifetime', scope: 'workspace', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'users', metric: 'users', label: 'Utilisateurs', amount: 3, unit: 'user', period: 'lifetime', scope: 'workspace', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'robots', metric: 'automations', label: 'Robots', amount: null, unit: 'robot', period: 'lifetime', scope: 'workspace', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' },
  { id: 'retention', metric: 'retention', label: 'Rétention des données', amount: 90, unit: 'day', period: 'lifetime', scope: 'workspace', reset: 'never', overage: 'not-applicable', kind: 'limit' },
];
