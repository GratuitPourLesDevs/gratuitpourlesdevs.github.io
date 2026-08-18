import { OFFER_QUOTAS } from './offer-quotas';

OFFER_QUOTAS['data-fetcher'] ??= [
  { id: 'runs', metric: 'requests', label: 'Runs API', amount: 100, unit: 'request', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
  { id: 'records', metric: 'records', label: 'Enregistrements de réponse', amount: 10_000, unit: 'record', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
  { id: 'saved', metric: 'requests_saved', label: 'Requêtes sauvegardées', amount: 5, unit: 'request', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'users', metric: 'users', label: 'Utilisateurs', amount: 1, unit: 'user', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
];
OFFER_QUOTAS['data-miner'] ??= [
  { id: 'pages', metric: 'pages', label: 'Pages extraites', amount: 500, unit: 'page', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit', notes: 'Le dépassement peut verrouiller le compte jusqu’à upgrade.' },
];
OFFER_QUOTAS['dataimporter-io'] ??= [
  { id: 'records', metric: 'records', label: 'Enregistrements', amount: 20_000, unit: 'record', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
  { id: 'storage', metric: 'storage', label: 'Sauvegarde', amount: 1, unit: 'GB', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'orgs', metric: 'organizations', label: 'Instances de production', amount: 1, unit: 'organization', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'integrations', metric: 'integrations', label: 'Intégrations', amount: 1, unit: 'integration', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
];
OFFER_QUOTAS['datalore'] ??= [
  { id: 'runtime', metric: 'compute_time', label: 'Heures machine CPU S', amount: 120, unit: 'hour', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
  { id: 'storage', metric: 'storage', label: 'Stockage cloud', amount: 10, unit: 'GB', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'notebooks', metric: 'notebooks', label: 'Notebooks', amount: null, unit: 'notebook', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' },
  { id: 'parallel', metric: 'parallelism', label: 'Notebooks en parallèle', amount: 2, unit: 'notebook', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
];
OFFER_QUOTAS['db-designer'] ??= [
  { id: 'models', metric: 'projects', label: 'Modèles de base de données', amount: 2, unit: 'model', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'tables', metric: 'tables', label: 'Tables par modèle', amount: 10, unit: 'table', period: 'lifetime', scope: 'model', reset: 'never', overage: 'blocked', kind: 'limit' },
];
OFFER_QUOTAS['db-ip'] ??= [
  { id: 'requests', metric: 'requests', label: 'Requêtes API', amount: 500, unit: 'request', period: 'day', scope: 'client', reset: 'daily', overage: 'blocked', kind: 'limit' },
];
OFFER_QUOTAS['deepar'] ??= [
  { id: 'mau', metric: 'users', label: 'Utilisateurs actifs mensuels', amount: 10, unit: 'user', period: 'month', scope: 'project', reset: 'monthly', overage: 'blocked', kind: 'limit' },
  { id: 'faces', metric: 'faces', label: 'Visages suivis', amount: 4, unit: 'face', period: 'session', scope: 'application', reset: 'not-applicable', overage: 'blocked', kind: 'limit' },
];
OFFER_QUOTAS['deepnote'] ??= [
  { id: 'projects', metric: 'projects', label: 'Projets', amount: 5, unit: 'project', period: 'lifetime', scope: 'workspace', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'users', metric: 'users', label: 'Éditeurs', amount: 3, unit: 'user', period: 'lifetime', scope: 'workspace', reset: 'never', overage: 'degraded', kind: 'limit' },
  { id: 'basic-machines', metric: 'compute', label: 'Machines Basic 5 Go RAM / 2 vCPU', amount: null, unit: 'machine-hour', period: 'month', scope: 'workspace', reset: 'monthly', overage: 'degraded', kind: 'unlimited' },
];
OFFER_QUOTAS['compare-json'] ??= [
  { id: 'usage', metric: 'usage', label: 'Comparaisons JSON locales', amount: null, unit: 'comparison', period: 'lifetime', scope: 'browser', reset: 'not-applicable', overage: 'not-applicable', kind: 'unmetered' },
];
OFFER_QUOTAS['disease-sh'] ??= [
  { id: 'requests', metric: 'requests', label: 'Requêtes API publiques', amount: null, unit: 'request', period: 'variable', scope: 'service', reset: 'variable', overage: 'unknown', kind: 'not-published' },
];
OFFER_QUOTAS['doczilla'] ??= [
  { id: 'requests', metric: 'requests', label: 'Requêtes', amount: 250, unit: 'request', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
  { id: 'rate', metric: 'rate_limit', label: 'Débit', amount: 30, unit: 'request/minute', period: 'variable', scope: 'account', reset: 'rolling', overage: 'blocked', kind: 'limit' },
];
OFFER_QUOTAS['doppio'] ??= [
  { id: 'documents', metric: 'documents', label: 'Documents', amount: 400, unit: 'document', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
  { id: 'templates', metric: 'templates', label: 'Templates', amount: 1, unit: 'template', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
];
OFFER_QUOTAS['docpenny'] ??= [
  { id: 'credits', metric: 'credits', label: 'Crédits gratuits', amount: 50, unit: 'credit', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'credit' },
  { id: 'templates', metric: 'templates', label: 'Templates gratuits', amount: 20, unit: 'template', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'previews', metric: 'previews', label: 'Prévisualisations sandbox', amount: null, unit: 'preview', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' },
];
OFFER_QUOTAS['doqlo'] ??= [
  { id: 'pdfs', metric: 'documents', label: 'PDF de sortie', amount: 100, unit: 'document', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
];
OFFER_QUOTAS['drawdb'] ??= [
  { id: 'diagrams', metric: 'projects', label: 'Diagrammes locaux', amount: null, unit: 'diagram', period: 'lifetime', scope: 'browser', reset: 'not-applicable', overage: 'not-applicable', kind: 'unmetered' },
];
OFFER_QUOTAS['dynamicdocs'] ??= [
  { id: 'requests', metric: 'requests', label: 'Appels API', amount: 50, unit: 'request', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
];
OFFER_QUOTAS['earnings-feed'] ??= [
  { id: 'rate', metric: 'rate_limit', label: 'Débit API', amount: 15, unit: 'request/minute', period: 'variable', scope: 'account', reset: 'rolling', overage: 'blocked', kind: 'limit' },
];
OFFER_QUOTAS['export-sdk'] ??= [
  { id: 'pages', metric: 'pages', label: 'Pages PDF', amount: 250, unit: 'page', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
  { id: 'templates', metric: 'templates', label: 'Templates', amount: 3, unit: 'template', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
];
OFFER_QUOTAS['extendsclass-rest-client'] ??= [
  { id: 'requests', metric: 'requests', label: 'Requêtes côté navigateur', amount: null, unit: 'request', period: 'lifetime', scope: 'browser', reset: 'not-applicable', overage: 'not-applicable', kind: 'unmetered' },
  { id: 'history', metric: 'history', label: 'Historique local', amount: 50, unit: 'request', period: 'lifetime', scope: 'browser', reset: 'never', overage: 'degraded', kind: 'limit' },
];
OFFER_QUOTAS['financial-data'] ??= [
  { id: 'requests', metric: 'requests', label: 'Requêtes', amount: 300, unit: 'request', period: 'day', scope: 'account', reset: 'daily', overage: 'blocked', kind: 'limit' },
];
OFFER_QUOTAS['finlight'] ??= [
  { id: 'requests', metric: 'requests', label: 'Requêtes', amount: 5_000, unit: 'request', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
  { id: 'delay', metric: 'data_delay', label: 'Délai des articles', amount: 12, unit: 'hour', period: 'variable', scope: 'article', reset: 'not-applicable', overage: 'not-applicable', kind: 'limit' },
];
OFFER_QUOTAS['firecrawl'] ??= [
  { id: 'credits', metric: 'credits', label: 'Crédits', amount: 1_000, unit: 'credit', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'credit' },
  { id: 'concurrency', metric: 'parallelism', label: 'Requêtes simultanées', amount: 2, unit: 'request', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
];
OFFER_QUOTAS['format-json-online'] ??= [
  { id: 'usage', metric: 'usage', label: 'Outils JSON locaux', amount: null, unit: 'operation', period: 'lifetime', scope: 'browser', reset: 'not-applicable', overage: 'not-applicable', kind: 'unmetered' },
];
OFFER_QUOTAS['fraudlabs-pro'] ??= [
  { id: 'queries', metric: 'requests', label: 'Vérifications', amount: 500, unit: 'request', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
  { id: 'sales', metric: 'eligibility_sales', label: 'Ventes mensuelles maximales éligibles', amount: 25_000, unit: 'USD', period: 'month', scope: 'store', reset: 'monthly', overage: 'blocked', kind: 'limit' },
];
OFFER_QUOTAS['freeipapi'] ??= [
  { id: 'rate', metric: 'rate_limit', label: 'Débit', amount: 60, unit: 'request/minute', period: 'variable', scope: 'client', reset: 'rolling', overage: 'blocked', kind: 'limit' },
];
OFFER_QUOTAS['geolocated-io'] ??= [
  { id: 'requests', metric: 'requests', label: 'Requêtes', amount: 2_000, unit: 'request', period: 'day', scope: 'account', reset: 'daily', overage: 'blocked', kind: 'limit' },
  { id: 'rate', metric: 'rate_limit', label: 'Débit', amount: 100, unit: 'request/minute', period: 'variable', scope: 'account', reset: 'rolling', overage: 'blocked', kind: 'limit' },
];
