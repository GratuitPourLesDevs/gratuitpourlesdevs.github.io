import { OFFER_QUOTAS } from './offer-quotas';

const limit = (
  id: string,
  metric: string,
  label: string,
  amount: number,
  unit: string,
  period: 'day' | 'week' | 'month' | 'year' | 'total' | 'lifetime' | 'session' | 'variable',
  scope = 'account',
  reset: 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' | 'rolling' | 'variable' | 'not-applicable' = 'never',
  overage: 'billed' | 'blocked' | 'degraded' | 'not-applicable' | 'unknown' = 'blocked',
) => ({ id, metric, label, amount, unit, period, scope, reset, overage, kind: 'limit' as const });

const unlimited = (id: string, metric: string, label: string, scope = 'service') => ({
  id,
  metric,
  label,
  amount: null,
  unit: 'usage',
  period: 'lifetime' as const,
  scope,
  reset: 'not-applicable' as const,
  overage: 'not-applicable' as const,
  kind: 'unlimited' as const,
});

OFFER_QUOTAS.contentful ??= [
  limit('spaces', 'projects', 'Starter Space', 1, 'space', 'lifetime'),
  limit('users', 'users', 'Utilisateurs', 10, 'user', 'lifetime'),
  limit('roles', 'roles', 'Rôles', 2, 'role', 'lifetime'),
  limit('locales', 'locales', 'Locales', 2, 'locale', 'lifetime'),
  limit('content-types', 'content_types', 'Types de contenu', 25, 'content_type', 'lifetime', 'space'),
  limit('environments', 'environments', 'Environnements', 2, 'environment', 'lifetime', 'space'),
  limit('records', 'records', 'Records', 10000, 'record', 'lifetime', 'space'),
  limit('api-calls', 'requests', 'Appels API', 100000, 'request', 'month', 'account', 'monthly'),
  limit('cdn-bandwidth', 'bandwidth', 'Bande passante CDN', 50, 'GB', 'month', 'account', 'monthly'),
];

OFFER_QUOTAS.cosmic ??= [
  limit('buckets', 'projects', 'Buckets', 1, 'bucket', 'lifetime'),
  limit('users', 'users', 'Membres d’équipe', 2, 'user', 'lifetime'),
  limit('object-types', 'content_types', 'Types d’objets', 50, 'type', 'lifetime'),
  limit('objects', 'records', 'Objets', 1000, 'object', 'lifetime'),
  limit('api-uncached', 'requests', 'Requêtes API non cachées', 10000, 'request', 'month', 'account', 'monthly', 'billed'),
  limit('api-cached', 'requests', 'Requêtes API cachées', 100000, 'request', 'month', 'account', 'monthly', 'billed'),
  limit('api-bandwidth', 'bandwidth', 'Bande passante API', 1, 'GB', 'month', 'account', 'monthly', 'billed'),
  limit('media-files', 'files', 'Fichiers média', 1000, 'file', 'lifetime', 'account', 'never', 'billed'),
  limit('media-storage', 'storage', 'Stockage média', 1, 'GB', 'lifetime', 'account', 'never', 'billed'),
  limit('media-requests', 'requests', 'Requêtes média', 1000000, 'request', 'month', 'account', 'monthly', 'billed'),
  limit('media-bandwidth', 'bandwidth', 'Bande passante média', 1, 'GB', 'month', 'account', 'monthly', 'billed'),
  limit('agents', 'agents', 'Agents actifs', 1, 'agent', 'lifetime'),
  limit('workflows', 'workflows', 'Workflows actifs', 1, 'workflow', 'lifetime'),
];

OFFER_QUOTAS.crystallize ??= [
  limit('tenants', 'projects', 'Tenant', 1, 'tenant', 'lifetime'),
  unlimited('users', 'users', 'Utilisateurs', 'tenant'),
  unlimited('languages', 'locales', 'Langues', 'tenant'),
  limit('orders', 'orders', 'Commandes incluses', 25, 'order', 'month', 'tenant', 'monthly', 'billed'),
  limit('items', 'records', 'Items de catalogue', 100, 'item', 'lifetime', 'tenant', 'never', 'billed'),
  limit('bandwidth', 'bandwidth', 'Bande passante', 5, 'GB', 'month', 'tenant', 'monthly', 'billed'),
  limit('api-calls', 'requests', 'Appels API', 25000, 'request', 'month', 'tenant', 'monthly', 'billed'),
];

OFFER_QUOTAS.datocms ??= [
  limit('projects', 'projects', 'Projets', 3, 'project', 'lifetime'),
  limit('editors', 'users', 'Éditeurs', 2, 'user', 'lifetime'),
  limit('records', 'records', 'Records', 300, 'record', 'lifetime'),
  limit('traffic', 'bandwidth', 'Trafic', 10, 'GB', 'month', 'account', 'monthly'),
  limit('api-calls', 'requests', 'Appels API', 100000, 'request', 'month', 'account', 'monthly'),
];

OFFER_QUOTAS.hygraph ??= [
  limit('seats', 'users', 'Sièges', 3, 'user', 'lifetime'),
  limit('locales', 'locales', 'Locales', 2, 'locale', 'lifetime'),
  limit('roles', 'roles', 'Rôles standard', 2, 'role', 'lifetime'),
  limit('components', 'content_types', 'Composants', 10, 'component', 'lifetime'),
  limit('entries', 'records', 'Entrées', 1000, 'entry', 'lifetime'),
  limit('api-calls', 'requests', 'Appels API', 500000, 'request', 'month', 'project', 'monthly'),
  limit('asset-traffic', 'bandwidth', 'Trafic assets', 100, 'GB', 'month', 'project', 'monthly'),
  unlimited('asset-storage', 'storage', 'Stockage d’assets', 'project'),
  limit('asset-upload', 'file_size', 'Taille maximale par asset', 50, 'MB', 'lifetime', 'file'),
];

OFFER_QUOTAS.prismic ??= [
  limit('users', 'users', 'Utilisateur', 1, 'user', 'lifetime'),
  limit('api-calls', 'requests', 'Appels API', 4000000, 'request', 'month', 'repository', 'monthly'),
  limit('cdn-bandwidth', 'bandwidth', 'Bande passante CDN', 100, 'GB', 'month', 'repository', 'monthly'),
  limit('locales', 'locales', 'Locales', 2, 'locale', 'lifetime', 'repository'),
  unlimited('documents', 'records', 'Documents', 'repository'),
  unlimited('types', 'content_types', 'Types de contenu', 'repository'),
  unlimited('assets', 'files', 'Assets', 'repository'),
];

OFFER_QUOTAS.sanity ??= [
  limit('seats', 'users', 'Sièges', 20, 'user', 'lifetime'),
  limit('roles', 'roles', 'Rôles disponibles', 2, 'role', 'lifetime'),
  limit('datasets', 'databases', 'Datasets publics', 2, 'dataset', 'lifetime', 'project'),
  limit('documents', 'records', 'Documents', 10000, 'document', 'lifetime', 'project'),
  limit('attributes', 'attributes', 'Attributs uniques par dataset', 2000, 'attribute', 'lifetime', 'dataset'),
  limit('webhooks', 'webhooks', 'Webhooks GROQ', 2, 'webhook', 'lifetime', 'project'),
  limit('cdn-requests', 'requests', 'Requêtes API CDN', 1000000, 'request', 'month', 'project', 'monthly'),
  limit('api-requests', 'requests', 'Requêtes API', 250000, 'request', 'month', 'project', 'monthly'),
  limit('assets', 'storage', 'Assets', 100, 'GB', 'lifetime', 'project'),
  limit('bandwidth', 'bandwidth', 'Bande passante', 100, 'GB', 'month', 'project', 'monthly'),
];

OFFER_QUOTAS['soloist-ai'] ??= [
  limit('sites', 'sites', 'Sites publiés', 3, 'site', 'lifetime'),
  limit('editors', 'users', 'Éditeur supplémentaire', 1, 'user', 'lifetime'),
];

OFFER_QUOTAS.squidex ??= [
  limit('api-calls', 'requests', 'Appels API', 20000, 'request', 'month', 'app', 'monthly'),
  limit('traffic', 'bandwidth', 'Trafic', 2, 'GB', 'month', 'app', 'monthly', 'billed'),
  limit('storage', 'storage', 'Stockage', 500, 'MB', 'lifetime', 'app'),
  limit('contributors', 'users', 'Contributeurs', 2, 'user', 'lifetime', 'app'),
];

OFFER_QUOTAS.storyblok ??= [
  limit('spaces', 'projects', 'Space', 1, 'space', 'lifetime'),
  limit('users', 'users', 'Siège inclus', 1, 'user', 'lifetime'),
  limit('api-requests', 'requests', 'Requêtes API', 100000, 'request', 'month', 'space', 'monthly'),
  limit('traffic', 'bandwidth', 'Trafic', 100, 'GB', 'month', 'space', 'monthly'),
  limit('locales', 'locales', 'Locales', 2, 'locale', 'lifetime', 'space'),
  limit('components', 'content_types', 'Composants', 200, 'component', 'lifetime', 'space'),
  limit('folders', 'folders', 'Dossiers de contenu', 100, 'folder', 'lifetime', 'space'),
  limit('assets', 'files', 'Assets', 2000, 'asset', 'lifetime', 'space'),
  limit('asset-size', 'file_size', 'Taille maximale d’asset', 500, 'MB', 'lifetime', 'file'),
  limit('stories', 'records', 'Stories', 20000, 'story', 'lifetime', 'space'),
  limit('ai-credits', 'credits', 'Crédits IA', 25000, 'credit', 'month', 'space', 'monthly'),
  limit('retention', 'retention_days', 'Rétention versions et logs', 1, 'day', 'lifetime', 'space'),
];

OFFER_QUOTAS.tinacms ??= [
  limit('users', 'users', 'Utilisateurs', 2, 'user', 'lifetime'),
  limit('roles', 'roles', 'Rôles', 2, 'role', 'lifetime'),
  limit('projects', 'projects', 'Projet', 1, 'project', 'lifetime'),
  unlimited('documents', 'records', 'Documents', 'project'),
  limit('asset-size', 'file_size', 'Taille maximale d’asset', 100, 'MB', 'lifetime', 'file'),
];

OFFER_QUOTAS.wpjack ??= [
  limit('servers', 'servers', 'Serveur', 1, 'server', 'lifetime'),
  limit('sites', 'sites', 'Sites', 2, 'site', 'lifetime'),
  unlimited('cron', 'scheduled_jobs', 'Cron jobs', 'account'),
];
