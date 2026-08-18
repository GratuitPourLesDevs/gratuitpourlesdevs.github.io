import { OFFER_QUOTAS } from './offer-quotas';

const limit = (
  id: string,
  metric: string,
  label: string,
  amount: number,
  unit: string,
  period: 'day' | 'month' | 'lifetime' | 'variable',
  scope = 'account',
  reset: 'daily' | 'monthly' | 'never' | 'variable' = 'never',
  overage: 'billed' | 'blocked' | 'degraded' | 'not-applicable' | 'unknown' = 'blocked',
) => ({ id, metric, label, amount, unit, period, scope, reset, overage, kind: 'limit' as const });

const unmetered = (id: string, metric: string, label: string, scope = 'service') => ({
  id, metric, label, amount: null, unit: 'usage', period: 'lifetime' as const, scope,
  reset: 'never' as const, overage: 'not-applicable' as const, kind: 'unmetered' as const,
});

const unpublished = (id: string, metric: string, label: string, scope = 'service') => ({
  id, metric, label, amount: null, unit: 'usage', period: 'variable' as const, scope,
  reset: 'variable' as const, overage: 'unknown' as const, kind: 'not-published' as const,
});

OFFER_QUOTAS.tavily ??= [limit('credits', 'requests', 'Crédits API', 1000, 'credit', 'month', 'account', 'monthly')];
OFFER_QUOTAS.templatefox ??= [limit('pdfs', 'documents', 'PDF générés', 60, 'pdf', 'month', 'account', 'monthly')];
OFFER_QUOTAS['the-ip-api'] ??= [limit('requests', 'requests', 'Requêtes', 1000, 'request', 'day', 'account', 'daily')];
OFFER_QUOTAS.tinymce ??= [
  limit('cloud-loads', 'requests', 'Chargements Tiny Cloud', 1000, 'load', 'month', 'account', 'monthly', 'billed'),
  unmetered('self-hosted-core', 'usage', 'Core auto-hébergé sous GPL2+', 'installation'),
];
OFFER_QUOTAS['tomorrow-io-weather-api'] ??= [
  limit('daily-requests', 'requests', 'Requêtes quotidiennes', 500, 'request', 'day', 'account', 'daily'),
  limit('hourly-requests', 'requests', 'Requêtes horaires', 25, 'request', 'variable', 'account', 'variable'),
  limit('per-second', 'requests', 'Requêtes par seconde', 3, 'request', 'variable', 'account', 'variable'),
];
OFFER_QUOTAS.treblle ??= [
  limit('requests', 'requests', 'Requêtes observées', 250000, 'request', 'month', 'account', 'monthly'),
  limit('api-dashboards', 'projects', 'Dashboards API', 1, 'dashboard', 'lifetime'),
  limit('retention', 'retention_days', 'Rétention', 7, 'day', 'lifetime'),
];
OFFER_QUOTAS.trophy ??= [limit('mau', 'users', 'Utilisateurs actifs mensuels', 1000, 'user', 'month', 'account', 'monthly')];
OFFER_QUOTAS.unirateapi ??= [
  limit('daily-requests', 'requests', 'Requêtes quotidiennes', 200, 'request', 'day', 'account', 'daily'),
  limit('monthly-requests', 'requests', 'Requêtes mensuelles', 6000, 'request', 'month', 'account', 'monthly'),
];
OFFER_QUOTAS.vatcheckapi ??= [
  limit('validations', 'requests', 'Validations TVA', 150, 'request', 'month', 'account', 'monthly'),
  limit('rate', 'requests', 'Requêtes par minute', 10, 'request', 'variable', 'account', 'variable'),
];
OFFER_QUOTAS.vatnode ??= [
  limit('validations', 'requests', 'Validations TVA', 100, 'request', 'month', 'account', 'monthly'),
  limit('api-keys', 'api_keys', 'Clés API', 1, 'key', 'lifetime'),
  unmetered('vat-rates', 'requests', 'API des taux de TVA', 'service'),
];
OFFER_QUOTAS.weatherxu ??= [limit('requests', 'requests', 'Appels API', 10000, 'request', 'month', 'account', 'monthly')];
OFFER_QUOTAS['webscraping-ai'] ??= [
  limit('credits', 'requests', 'Crédits API', 2000, 'credit', 'month', 'account', 'monthly'),
  limit('concurrency', 'concurrency', 'Connexions concurrentes', 2, 'connection', 'lifetime'),
];
OFFER_QUOTAS['weights-biases'] ??= [
  limit('model-seats', 'users', 'Sièges modèle', 5, 'user', 'lifetime'),
  limit('storage', 'storage', 'Stockage cloud', 5, 'GB', 'month', 'account', 'monthly'),
  limit('weave-ingestion', 'storage', 'Ingestion Weave', 1, 'GB', 'month', 'account', 'monthly'),
];
OFFER_QUOTAS['whatismyip-help'] ??= [unpublished('rate-limit', 'requests', 'Plafond de requêtes non publié', 'service')];
OFFER_QUOTAS['what-the-diff'] ??= [unpublished('tokens', 'tokens', 'Quota mensuel de tokens à confirmer', 'account')];
OFFER_QUOTAS.xflux ??= [
  limit('requests', 'requests', 'Appels API', 1000, 'request', 'month', 'account', 'monthly'),
  limit('monitors', 'projects', 'Monitors de comptes', 1, 'monitor', 'lifetime'),
];
OFFER_QUOTAS['wolfram-cloud-basic'] ??= [
  limit('storage', 'storage', 'Stockage cloud', 200, 'MB', 'lifetime'),
  limit('cloud-credits', 'compute', 'Cloud Credits', 5000, 'credit', 'month', 'account', 'monthly'),
  limit('deployment-lifetime', 'retention_days', 'Durée maximale des déploiements', 60, 'day', 'lifetime', 'object'),
];
OFFER_QUOTAS.wrapapi ??= [limit('requests', 'requests', 'Appels API', 30000, 'request', 'month', 'account', 'monthly')];
OFFER_QUOTAS.zenscrape ??= [limit('requests', 'requests', 'Appels API', 1000, 'request', 'month', 'account', 'monthly')];
OFFER_QUOTAS.zipcodebase ??= [
  limit('searches', 'requests', 'Recherches', 5000, 'request', 'month', 'account', 'monthly'),
  limit('concurrency', 'concurrency', 'Requêtes concurrentes', 1, 'request', 'lifetime'),
  limit('radius', 'radius', 'Rayon maximal', 10, 'mile', 'lifetime', 'request'),
];
OFFER_QUOTAS['zip-codes'] ??= [
  limit('daily-credits', 'requests', 'Crédits quotidiens', 2500, 'credit', 'day', 'account', 'daily'),
  limit('rate', 'requests', 'Requêtes par minute', 60, 'request', 'variable', 'account', 'variable'),
  limit('api-keys', 'api_keys', 'Clés API', 1, 'key', 'lifetime'),
];
OFFER_QUOTAS.zipcodestack ??= [
  limit('credits', 'requests', 'Crédits', 300, 'credit', 'month', 'account', 'monthly'),
  limit('rate', 'requests', 'Requêtes par minute', 10, 'request', 'variable', 'account', 'variable'),
  limit('api-keys', 'api_keys', 'Clés API', 1, 'key', 'lifetime'),
];
OFFER_QUOTAS.zuplo ??= [
  limit('requests', 'requests', 'Requêtes API', 100000, 'request', 'month', 'account', 'monthly'),
  limit('projects', 'projects', 'Projets et services', 2, 'project', 'lifetime'),
  limit('environments', 'projects', 'Environnements', 5, 'environment', 'lifetime'),
  limit('consumers', 'users', 'Consommateurs et clés API', 100, 'consumer', 'lifetime'),
  limit('members', 'users', 'Membres du compte', 2, 'user', 'lifetime'),
  limit('mcp-invocations', 'requests', 'Invocations MCP', 1000, 'request', 'month', 'account', 'monthly'),
];
OFFER_QUOTAS.metashot ??= [
  limit('images', 'documents', 'Images générées', 1000, 'image', 'month', 'account', 'monthly'),
  limit('api-keys', 'api_keys', 'Clés API', 2, 'key', 'lifetime'),
  limit('templates', 'projects', 'Templates personnalisés', 3, 'template', 'lifetime'),
];
