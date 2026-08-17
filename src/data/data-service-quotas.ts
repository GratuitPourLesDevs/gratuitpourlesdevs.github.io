import { OFFER_QUOTAS } from './offer-quotas';

OFFER_QUOTAS['calendarific'] ??= [
  { id: 'requests', metric: 'requests', label: 'Appels API', amount: 500, unit: 'request', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['canopy-api'] ??= [
  { id: 'requests', metric: 'requests', label: 'Requêtes API', amount: 100, unit: 'request', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['carapi-dev'] ??= [
  { id: 'requests', metric: 'requests', label: 'Requêtes API tous endpoints', amount: 100, unit: 'request', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['catchdoms'] ??= [
  { id: 'visible-domains', metric: 'items', label: 'Domaines visibles', amount: 10, unit: 'domain', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'blocked', kind: 'limit' },
  { id: 'favorites', metric: 'items', label: 'Favoris', amount: 5, unit: 'favorite', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'blocked', kind: 'limit' },
  { id: 'saved-searches', metric: 'items', label: 'Recherches sauvegardées', amount: 3, unit: 'search', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'blocked', kind: 'limit' },
  { id: 'pro-trial', metric: 'trial_duration', label: 'Essai Pro', amount: 7, unit: 'day', period: 'total', scope: 'account', reset: 'never', overage: 'degraded', kind: 'limit', notes: 'L’accès REST API et MCP fait partie des fonctions Pro disponibles pendant cet essai.' },
];

OFFER_QUOTAS['cloudmersive'] ??= [
  { id: 'requests', metric: 'requests', label: 'Appels API', amount: 600, unit: 'request', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
  { id: 'rate-limit', metric: 'requests', label: 'Débit maximal', amount: 1, unit: 'request/second', period: 'variable', scope: 'account', reset: 'variable', overage: 'blocked', kind: 'limit' },
  { id: 'file-size', metric: 'file_size', label: 'Taille maximale de fichier', amount: 3.5, unit: 'MB', period: 'lifetime', scope: 'file', reset: 'never', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['comet-ml'] ??= [
  { id: 'users', metric: 'users', label: 'Utilisateurs de plateforme', amount: 1, unit: 'user', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'mlops-usage', metric: 'usage', label: 'Quota MLOps détaillé', amount: null, unit: 'usage', period: 'variable', scope: 'account', reset: 'variable', overage: 'unknown', kind: 'not-published', notes: 'Comet décrit un free tier généreux sans publier de plafond quantitatif détaillé pour le MLOps.' },
];

OFFER_QUOTAS['commerce-layer'] ??= [
  { id: 'organizations', metric: 'organizations', label: 'Organisations', amount: 1, unit: 'organization', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'users', metric: 'users', label: 'Utilisateurs', amount: 2, unit: 'user', period: 'lifetime', scope: 'organization', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'markets', metric: 'markets', label: 'Marchés actifs', amount: 2, unit: 'market', period: 'lifetime', scope: 'organization', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'skus', metric: 'items', label: 'SKU', amount: 1000, unit: 'SKU', period: 'lifetime', scope: 'organization', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'links', metric: 'links', label: 'Links', amount: 10, unit: 'link', period: 'lifetime', scope: 'organization', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'live-orders', metric: 'orders', label: 'Commandes live', amount: 100, unit: 'order', period: 'month', scope: 'organization', reset: 'monthly', overage: 'blocked', kind: 'limit' },
  { id: 'test-orders', metric: 'orders', label: 'Commandes de test', amount: null, unit: 'order', period: 'lifetime', scope: 'organization', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' },
];

OFFER_QUOTAS['composio'] ??= [
  { id: 'tool-calls', metric: 'requests', label: 'Tool calls standards', amount: 20000, unit: 'call', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
  { id: 'pro-tool-calls', metric: 'requests', label: 'Pro Tool calls', amount: 1000, unit: 'call', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['conversion-tools'] ??= [
  { id: 'conversions-day', metric: 'requests', label: 'Conversions quotidiennes', amount: 10, unit: 'conversion', period: 'day', scope: 'account', reset: 'daily', overage: 'blocked', kind: 'limit' },
  { id: 'conversions-month', metric: 'requests', label: 'Conversions mensuelles', amount: 100, unit: 'conversion', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
  { id: 'file-size', metric: 'file_size', label: 'Taille maximale de fichier', amount: 20, unit: 'MB', period: 'lifetime', scope: 'file', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'ai-credits', metric: 'credits', label: 'Crédits IA', amount: 100, unit: 'credit', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'credit' },
];

OFFER_QUOTAS['country-state-city'] ??= [
  { id: 'requests', metric: 'requests', label: 'Requêtes API annoncées', amount: 100, unit: 'request', period: 'day', scope: 'account', reset: 'daily', overage: 'unknown', kind: 'limit', notes: 'Quota non confirmé sur une source primaire lors de la vérification du 18/08/2026.' },
];

OFFER_QUOTAS['coupler-io'] ??= [
  { id: 'users', metric: 'users', label: 'Utilisateurs', amount: 1, unit: 'user', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'accounts', metric: 'accounts', label: 'Comptes connectés', amount: 1, unit: 'account', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'data-flows', metric: 'flows', label: 'Flux de données actifs', amount: 1, unit: 'flow', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'rows-run', metric: 'rows', label: 'Lignes par exécution', amount: 100, unit: 'row', period: 'session', scope: 'flow', reset: 'not-applicable', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['craftmypdf'] ??= [
  { id: 'generations', metric: 'requests', label: 'PDF ou images générés', amount: 50, unit: 'generation', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
  { id: 'templates', metric: 'templates', label: 'Modèles', amount: 3, unit: 'template', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['cube-cloud'] ??= [
  { id: 'queries', metric: 'requests', label: 'Requêtes analytiques', amount: 1000, unit: 'query', period: 'day', scope: 'deployment', reset: 'daily', overage: 'blocked', kind: 'limit' },
  { id: 'deployments', metric: 'deployments', label: 'Déploiements', amount: 2, unit: 'deployment', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'workbooks', metric: 'workbooks', label: 'Workbooks', amount: 5, unit: 'workbook', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'query-retention', metric: 'retention', label: 'Historique des requêtes', amount: 1, unit: 'day', period: 'variable', scope: 'deployment', reset: 'rolling', overage: 'degraded', kind: 'limit' },
];

OFFER_QUOTAS['curlhub'] ??= [
  { id: 'requests', metric: 'requests', label: 'Requêtes inspectées', amount: 10000, unit: 'request', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['currencybeacon'] ??= [
  { id: 'requests', metric: 'requests', label: 'Requêtes API', amount: 5000, unit: 'request', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
  { id: 'update-frequency', metric: 'refresh_interval', label: 'Fréquence de mise à jour', amount: 1, unit: 'hour', period: 'variable', scope: 'dataset', reset: 'variable', overage: 'degraded', kind: 'limit' },
];

OFFER_QUOTAS['customjs'] ??= [
  { id: 'requests-day', metric: 'requests', label: 'Exécutions JS / PDF par jour', amount: 20, unit: 'request', period: 'day', scope: 'account', reset: 'daily', overage: 'blocked', kind: 'limit' },
  { id: 'requests-month', metric: 'requests', label: 'Requêtes gratuites annoncées', amount: 600, unit: 'request', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
  { id: 'forms', metric: 'forms', label: 'Formulaires', amount: 3, unit: 'form', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'form-responses', metric: 'responses', label: 'Réponses de formulaires', amount: 500, unit: 'response', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
  { id: 'hosted-pages', metric: 'pages', label: 'Pages hébergées', amount: 5, unit: 'page', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'mail-hooks', metric: 'webhooks', label: 'Mail hooks', amount: 1, unit: 'hook', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'incoming-emails', metric: 'emails', label: 'E-mails entrants', amount: 10, unit: 'email', period: 'day', scope: 'account', reset: 'daily', overage: 'blocked', kind: 'limit' },
];
