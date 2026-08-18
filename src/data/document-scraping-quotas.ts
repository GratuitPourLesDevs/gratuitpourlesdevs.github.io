import { OFFER_QUOTAS } from './offer-quotas';

const limit = (id: string, metric: string, label: string, amount: number, unit: string, period: 'day' | 'month' | 'total' | 'lifetime' | 'variable', scope = 'account', reset: 'daily' | 'monthly' | 'never' | 'variable' = 'never', overage: 'blocked' | 'billed' | 'unknown' = 'blocked') => ({ id, metric, label, amount, unit, period, scope, reset, overage, kind: 'limit' as const });
const unmetered = (id: string, metric: string, label: string, scope = 'service') => ({ id, metric, label, amount: null, unit: 'usage', period: 'lifetime' as const, scope, reset: 'never' as const, overage: 'not-applicable' as const, kind: 'unmetered' as const });
const unpublished = (id: string, metric: string, label: string, scope = 'service') => ({ id, metric, label, amount: null, unit: 'usage', period: 'variable' as const, scope, reset: 'variable' as const, overage: 'unknown' as const, kind: 'not-published' as const });

OFFER_QUOTAS.parseur ??= [
  limit('pages', 'pages', 'Pages ou crédits', 20, 'page', 'month', 'account', 'monthly'),
  limit('users', 'users', 'Utilisateurs', 1, 'user', 'lifetime'),
  limit('retention', 'retention_days', 'Rétention', 90, 'day', 'lifetime'),
];
OFFER_QUOTAS['pdf-api-io'] ??= [
  limit('pdfs', 'documents', 'PDF générés', 100, 'document', 'month', 'account', 'monthly'),
  limit('templates', 'templates', 'Modèles', 1, 'template', 'lifetime'),
  limit('users', 'users', 'Utilisateurs', 1, 'user', 'lifetime'),
];
OFFER_QUOTAS.pdfbolt ??= [
  limit('documents', 'documents', 'Documents', 100, 'document', 'month', 'account', 'monthly'),
  limit('rate', 'requests', 'Requêtes par minute', 20, 'request', 'variable', 'account', 'variable'),
  limit('concurrency', 'concurrency', 'Conversions concurrentes', 1, 'conversion', 'lifetime'),
  limit('file-size', 'file_size', 'Taille PDF maximale', 2, 'MB', 'lifetime', 'file'),
];
OFFER_QUOTAS.pexafy ??= [
  limit('anonymous-searches', 'requests', 'Recherches anonymes', 15, 'request', 'day', 'ip', 'daily'),
  unpublished('api-quota', 'requests', 'Quota API du compte gratuit à confirmer', 'account'),
];
OFFER_QUOTAS.pixela ??= [unmetered('api', 'requests', 'API gratuite sans plafond général publié', 'service')];
OFFER_QUOTAS.posthook ??= [
  limit('hooks', 'events', 'Hooks planifiés', 1000, 'event', 'month', 'account', 'monthly'),
  limit('projects', 'projects', 'Projets', 3, 'project', 'lifetime'),
  limit('retention', 'retention_days', 'Rétention des logs', 7, 'day', 'lifetime'),
  limit('concurrency', 'concurrency', 'Livraisons concurrentes', 20, 'delivery', 'lifetime'),
];
OFFER_QUOTAS.postman ??= [
  limit('users', 'users', 'Utilisateurs', 1, 'user', 'lifetime'),
  limit('postman-api', 'requests', 'Appels Postman API', 10000, 'request', 'month', 'account', 'monthly'),
  limit('ai-credits', 'credits', 'Crédits IA', 50, 'credit', 'month', 'account', 'monthly'),
  limit('integrations', 'integrations', 'Intégrations', 5, 'integration', 'lifetime'),
];
OFFER_QUOTAS['prefect-cloud'] ??= [
  limit('users', 'users', 'Utilisateurs', 2, 'user', 'lifetime'),
  limit('deployments', 'deployments', 'Déploiements', 5, 'deployment', 'lifetime'),
  limit('serverless', 'compute_time', 'Compute Serverless', 500, 'minute', 'month', 'account', 'monthly'),
  limit('automations', 'automations', 'Automations', 5, 'automation', 'lifetime'),
];
OFFER_QUOTAS['preset-cloud'] ??= [
  limit('users', 'users', 'Utilisateurs', 5, 'user', 'lifetime'),
  limit('workspaces', 'projects', 'Workspaces', 1, 'workspace', 'lifetime'),
  unmetered('dashboards', 'dashboards', 'Dashboards et graphiques', 'workspace'),
];
OFFER_QUOTAS.proxysentry ??= [limit('requests', 'requests', 'Requêtes', 10000, 'request', 'month', 'account', 'monthly')];
OFFER_QUOTAS.reducto ??= [limit('credits', 'credits', 'Crédits gratuits initiaux', 15000, 'credit', 'total', 'account', 'never')];
OFFER_QUOTAS.rendi ??= [
  limit('processing', 'bandwidth', 'Données traitées', 50, 'GB', 'month', 'account', 'monthly'),
  limit('vcpu', 'compute', 'vCPU', 4, 'vCPU', 'lifetime'),
  limit('storage', 'storage', 'Stockage', 5, 'GB', 'month', 'account', 'monthly'),
  limit('commands-rate', 'requests', 'Commandes par minute', 4, 'command', 'variable', 'account', 'variable'),
];
OFFER_QUOTAS['requestbin-pipedream'] ??= [unpublished('requestbin-limits', 'requests', 'Quota RequestBin distinct non publié', 'workspace')];
OFFER_QUOTAS.robohash ??= [unmetered('requests', 'requests', 'Générations sans quota chiffré publié', 'service')];
OFFER_QUOTAS['scrapers-proxy'] ??= [
  limit('scrapes', 'requests', 'Scrapes annoncés à revérifier', 100, 'request', 'month', 'account', 'monthly'),
];
OFFER_QUOTAS.scrapingant ??= [limit('credits', 'credits', 'Crédits API', 10000, 'credit', 'month', 'account', 'monthly')];
OFFER_QUOTAS.serpapi ??= [
  limit('searches', 'requests', 'Recherches réussies', 250, 'request', 'month', 'account', 'monthly'),
  limit('throughput', 'requests', 'Recherches par heure', 50, 'request', 'variable', 'account', 'variable'),
];
OFFER_QUOTAS.simplescraper ??= [limit('starter-credits', 'credits', 'Crédits cloud de démarrage', 100, 'credit', 'total', 'account', 'never')];
OFFER_QUOTAS['geekflare-api'] ??= [
  limit('credits', 'credits', 'Crédits API', 500, 'credit', 'month', 'account', 'monthly'),
  limit('users', 'users', 'Membres', 1, 'user', 'lifetime'),
  limit('retention', 'retention_days', 'Rétention des logs', 7, 'day', 'lifetime'),
];
OFFER_QUOTAS.smartparse ??= [limit('processing-units', 'credits', 'Processing Units', 300, 'unit', 'variable', 'account', 'variable')];
OFFER_QUOTAS.sofodata ??= [
  limit('apis', 'projects', 'APIs', 2, 'api', 'lifetime'),
  limit('calls', 'requests', 'Appels API', 2500, 'request', 'month', 'account', 'monthly'),
  limit('storage', 'storage', 'Stockage', 10, 'MB', 'lifetime'),
];
OFFER_QUOTAS.sqlable ??= [unmetered('browser-tools', 'usage', 'Outils SQL dans le navigateur', 'browser')];
OFFER_QUOTAS.svix ??= [
  limit('messages', 'events', 'Messages', 50000, 'message', 'month', 'account', 'monthly', 'billed'),
  limit('rate', 'requests', 'Messages par seconde', 200, 'message', 'variable', 'account', 'variable'),
  limit('retention', 'retention_days', 'Rétention des payloads', 30, 'day', 'lifetime'),
  limit('connectors', 'integrations', 'Connecteurs', 1, 'connector', 'lifetime'),
];
