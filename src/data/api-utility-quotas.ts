import { OFFER_QUOTAS } from './offer-quotas';

const limit = (id: string, metric: string, label: string, amount: number, unit: string, period: 'day' | 'month' | 'lifetime' | 'variable', scope = 'account', reset: 'daily' | 'monthly' | 'never' | 'variable' = 'never') => ({ id, metric, label, amount, unit, period, scope, reset, overage: 'blocked' as const, kind: 'limit' as const });
const unmetered = (id: string, metric: string, label: string, scope = 'service') => ({ id, metric, label, amount: null, unit: 'usage', period: 'lifetime' as const, scope, reset: 'never' as const, overage: 'not-applicable' as const, kind: 'unmetered' as const });
const unpublished = (id: string, metric: string, label: string, scope = 'service') => ({ id, metric, label, amount: null, unit: 'usage', period: 'variable' as const, scope, reset: 'variable' as const, overage: 'unknown' as const, kind: 'not-published' as const });

OFFER_QUOTAS['killbait-api'] ??= [
  limit('hourly-submissions', 'requests', 'Soumissions par heure', 1, 'request', 'variable', 'account', 'variable'),
  limit('daily-submissions', 'requests', 'Soumissions par jour', 10, 'request', 'day', 'account', 'daily'),
];
OFFER_QUOTAS.kreya ??= [unmetered('local-usage', 'usage', 'Utilisation locale du client', 'device')];
OFFER_QUOTAS.loginllama ??= [limit('checks', 'requests', 'Vérifications de connexion', 1000, 'request', 'month', 'account', 'monthly')];
OFFER_QUOTAS['market-data-api'] ??= [limit('daily-credits', 'requests', 'Crédits API', 100, 'request', 'day', 'account', 'daily')];
OFFER_QUOTAS['maxim-ai'] ??= [
  limit('seats', 'users', 'Sièges', 3, 'user', 'lifetime'),
  limit('workspaces', 'projects', 'Workspaces', 1, 'workspace', 'lifetime'),
  limit('logs', 'logs', 'Logs et traces', 10000, 'log', 'month', 'account', 'monthly'),
  limit('retention', 'retention_days', 'Rétention', 3, 'day', 'lifetime'),
];
OFFER_QUOTAS.microlink ??= [limit('requests', 'requests', 'Requêtes', 25, 'request', 'day', 'account', 'daily')];
OFFER_QUOTAS.mintlify ??= [limit('editors', 'users', 'Éditeurs', 5, 'user', 'lifetime')];
OFFER_QUOTAS.mockapi ??= [
  limit('projects', 'projects', 'Projets', 1, 'project', 'lifetime'),
  limit('resources', 'resources', 'Ressources', 2, 'resource', 'lifetime'),
];
OFFER_QUOTAS.mockerito ??= [
  limit('endpoints', 'endpoints', 'Endpoints publics', 200, 'endpoint', 'lifetime', 'service'),
  limit('domains', 'domains', 'Domaines', 9, 'domain', 'lifetime', 'service'),
  unmetered('requests', 'requests', 'Requêtes sur les APIs publiques', 'service'),
];
OFFER_QUOTAS.mockfly ??= [
  limit('requests', 'requests', 'Requêtes', 500, 'request', 'day', 'account', 'daily'),
  limit('projects', 'projects', 'Projets', 1, 'project', 'lifetime'),
  limit('endpoints', 'endpoints', 'Endpoints', 4, 'endpoint', 'lifetime'),
];
OFFER_QUOTAS.mocko ??= [
  unpublished('cloud-limits', 'requests', 'Quota Mocko Cloud non publié', 'project'),
  unmetered('self-hosted', 'usage', 'Version auto-hébergée', 'installation'),
];
OFFER_QUOTAS['multi-exit-ip-checker'] ??= [unmetered('browser-usage', 'usage', 'Utilisation dans le navigateur', 'browser')];
OFFER_QUOTAS['nasdisks-data-api'] ??= [unmetered('requests', 'requests', 'Appels JSON/CSV sans rate limit publié', 'service')];
OFFER_QUOTAS['news-api'] ??= [limit('requests', 'requests', 'Requêtes', 100, 'request', 'day', 'account', 'daily')];
OFFER_QUOTAS.numlookupapi ??= [
  limit('requests', 'requests', 'Requêtes', 100, 'request', 'month', 'account', 'monthly'),
  limit('rate', 'requests', 'Requêtes par minute', 10, 'request', 'variable', 'account', 'variable'),
];
OFFER_QUOTAS['ocr-space'] ??= [
  limit('monthly-requests', 'requests', 'Requêtes mensuelles', 25000, 'request', 'month', 'account', 'monthly'),
  limit('daily-requests', 'requests', 'Requêtes quotidiennes par IP', 500, 'request', 'day', 'ip', 'daily'),
  limit('file-size', 'file_size', 'Taille maximale de fichier', 1, 'MB', 'lifetime', 'file'),
  limit('pdf-pages', 'pages', 'Pages PDF', 3, 'page', 'lifetime', 'file'),
];
OFFER_QUOTAS['openapi-designer'] ??= [unmetered('usage', 'usage', 'Utilisation du designer web', 'browser')];
