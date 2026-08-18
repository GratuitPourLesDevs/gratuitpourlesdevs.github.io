import { OFFER_QUOTAS } from './offer-quotas';

const limit = (
  id: string,
  metric: string,
  label: string,
  amount: number,
  unit: string,
  period: 'day' | 'month' | 'total' | 'lifetime' | 'session' | 'variable',
  scope = 'account',
  reset: 'daily' | 'monthly' | 'never' | 'variable' | 'not-applicable' = 'never',
) => ({ id, metric, label, amount, unit, period, scope, reset, overage: 'blocked' as const, kind: 'limit' as const });

const unmetered = (id: string, metric: string, label: string, scope = 'service') => ({
  id,
  metric,
  label,
  amount: null,
  unit: 'usage',
  period: 'lifetime' as const,
  scope,
  reset: 'never' as const,
  overage: 'not-applicable' as const,
  kind: 'unmetered' as const,
});

const unpublished = (id: string, metric: string, label: string, scope = 'service') => ({
  id,
  metric,
  label,
  amount: null,
  unit: 'usage',
  period: 'variable' as const,
  scope,
  reset: 'variable' as const,
  overage: 'unknown' as const,
  kind: 'not-published' as const,
});

OFFER_QUOTAS['3cols'] ??= [unpublished('free-limits', 'usage', 'Limites du service gratuit non publiées')];
OFFER_QUOTAS.bookmarkos ??= [
  limit('storage', 'storage', 'Stockage de fichiers', 500, 'MB', 'lifetime'),
  limit('file-size', 'file_size', 'Taille maximale par fichier', 5, 'MB', 'lifetime', 'file'),
  limit('screenshots', 'screenshots', 'Icônes screenshot de favoris', 30, 'screenshot', 'month', 'account', 'monthly'),
];
OFFER_QUOTAS.braid ??= [
  unmetered('users', 'users', 'Utilisateurs dans un groupe Community public', 'group'),
  unmetered('history', 'history', 'Historique du groupe Community public', 'group'),
  unmetered('integrations', 'integrations', 'Intégrations dans un groupe Community public', 'group'),
];
OFFER_QUOTAS.calendly ??= [
  limit('event-types', 'event_types', 'Type d’événement actif', 1, 'event_type', 'lifetime'),
  limit('calendars', 'calendars', 'Calendrier connecté', 1, 'calendar', 'lifetime'),
  unmetered('meetings', 'meetings', 'Réunions planifiées', 'account'),
];
OFFER_QUOTAS.cally ??= [unmetered('events', 'events', 'Sondages et événements de planification', 'service')];
OFFER_QUOTAS.cdox ??= [
  limit('storage', 'storage', 'Stockage', 50, 'MB', 'lifetime'),
  limit('public-links', 'links', 'Liens publics actifs', 3, 'link', 'lifetime'),
];
OFFER_QUOTAS.chanty ??= [
  limit('members', 'users', 'Membres de l’équipe', 5, 'user', 'lifetime'),
  limit('storage', 'storage', 'Stockage par équipe', 20, 'GB', 'lifetime', 'team'),
  limit('integrations', 'integrations', 'Intégrations', 10, 'integration', 'lifetime', 'team'),
];
OFFER_QUOTAS.devtoollab ??= [
  unmetered('developer-tools', 'usage', 'Outils développeur de base', 'browser'),
  limit('tracked-links', 'links', 'Liens suivis', 5, 'link', 'lifetime'),
  limit('clicks', 'clicks', 'Clics par URL suivie', 1000, 'click', 'month', 'url', 'monthly'),
  limit('webhook-requests', 'requests', 'Requêtes du webhook receiver', 500, 'request', 'day', 'endpoint', 'daily'),
];
OFFER_QUOTAS.discord ??= [
  limit('servers', 'servers', 'Serveurs rejoints ou créés', 100, 'server', 'lifetime'),
  limit('file-size', 'file_size', 'Taille maximale de fichier sur compte de base', 10, 'MB', 'lifetime', 'file'),
];
OFFER_QUOTAS.dubble ??= [
  unmetered('guides', 'documents', 'Guides pas-à-pas', 'account'),
  unmetered('viewers', 'users', 'Lecteurs privés', 'account'),
];
OFFER_QUOTAS.duckly ??= [limit('participants', 'users', 'Participants simultanés', 2, 'user', 'session', 'session', 'not-applicable')];
OFFER_QUOTAS.element ??= [
  unmetered('app', 'usage', 'Application Element open source', 'installation'),
  unpublished('hosted-limits', 'usage', 'Limites de l’hébergement public Matrix non publiées', 'service'),
];
OFFER_QUOTAS.evernote ??= [
  limit('notes', 'notes', 'Notes', 50, 'note', 'total'),
  limit('notebooks', 'notebooks', 'Carnets', 1, 'notebook', 'lifetime'),
  limit('devices', 'devices', 'Appareils synchronisés', 1, 'device', 'lifetime'),
  limit('storage', 'storage', 'Stockage', 1, 'GB', 'lifetime'),
];
OFFER_QUOTAS.fibery ??= [
  limit('users', 'users', 'Utilisateurs', 10, 'user', 'lifetime'),
  limit('guests', 'users', 'Invités', 10, 'guest', 'lifetime'),
  limit('databases', 'databases', 'Bases', 10, 'database', 'lifetime'),
  unmetered('entities', 'entities', 'Entités', 'workspace'),
  limit('storage', 'storage', 'Stockage de fichiers', 1, 'GB', 'lifetime', 'workspace'),
  limit('automations', 'automation_runs', 'Exécutions d’automatisation', 250, 'run', 'month', 'workspace', 'monthly'),
  limit('syncs', 'syncs', 'Synchronisations d’entités', 5000, 'entity', 'month', 'workspace', 'monthly'),
];
OFFER_QUOTAS.fibo ??= [unmetered('sessions', 'sessions', 'Sessions de planning poker', 'service')];
OFFER_QUOTAS.fizzy ??= [
  limit('cards', 'items', 'Cartes créées', 1000, 'card', 'total', 'account'),
  limit('storage', 'storage', 'Stockage de fichiers', 1, 'GB', 'lifetime', 'account'),
];
OFFER_QUOTAS['flat-social'] ??= [
  limit('participants', 'users', 'Participants simultanés', 5, 'user', 'session', 'space', 'not-applicable'),
  unmetered('duration', 'session_duration', 'Durée des sessions', 'space'),
];
OFFER_QUOTAS.flock ??= [
  limit('members', 'users', 'Membres', 20, 'user', 'lifetime', 'team'),
  limit('searchable-messages', 'messages', 'Messages consultables dans la recherche', 10000, 'message', 'total', 'team'),
  limit('public-channels', 'channels', 'Canaux publics', 10, 'channel', 'lifetime', 'team'),
  limit('storage', 'storage', 'Stockage total par équipe', 5, 'GB', 'lifetime', 'team'),
];
OFFER_QUOTAS.ghostchat ??= [
  limit('sites', 'sites', 'Sites', 1, 'site', 'lifetime'),
  unmetered('messages', 'messages', 'Messages', 'site'),
  limit('retention', 'retention_days', 'Historique', 30, 'day', 'lifetime', 'site'),
];
OFFER_QUOTAS.gitbook ??= [
  limit('editors', 'users', 'Éditeur individuel', 1, 'user', 'lifetime'),
  unpublished('site-limits', 'sites', 'Limites de sites du plan individuel non publiées', 'account'),
];
OFFER_QUOTAS.gitdailies ??= [
  limit('pull-requests', 'pull_requests', 'Pull requests analysées', 50, 'pull_request', 'month', 'account', 'monthly'),
  limit('repositories', 'repositories', 'Dépôts', 2, 'repository', 'lifetime'),
  limit('retention', 'retention_days', 'Historique', 7, 'day', 'lifetime'),
  limit('alert-rules', 'alert_rules', 'Règles d’alertes partagées', 2, 'rule', 'lifetime'),
  unmetered('users', 'users', 'Utilisateurs', 'account'),
];
OFFER_QUOTAS.gitter ??= [unmetered('conversations', 'conversations', 'Conversations publiques et privées', 'service')];
OFFER_QUOTAS.gokanban ??= [unpublished('limits', 'usage', 'Limites du tableau Kanban non publiées', 'service')];
OFFER_QUOTAS.hackmd ??= [
  limit('members', 'users', 'Membres d’équipe privée', 3, 'user', 'lifetime'),
  unmetered('notes', 'notes', 'Notes', 'account'),
  limit('invitees', 'users', 'Invités', 3, 'user', 'lifetime'),
  limit('templates', 'templates', 'Templates personnalisés', 3, 'template', 'lifetime'),
  limit('github-pushes', 'pushes', 'Push GitHub', 20, 'push', 'month', 'account', 'monthly'),
  limit('image-size', 'file_size', 'Taille maximale par image', 1, 'MB', 'lifetime', 'file'),
  limit('api-calls', 'requests', 'Appels API', 400, 'request', 'month', 'account', 'monthly'),
];
OFFER_QUOTAS['timecamp-planner'] ??= [unpublished('free-limits', 'usage', 'Limites chiffrées actuelles du plan Free non publiées', 'workspace')];
OFFER_QUOTAS.huly ??= [
  unmetered('users', 'users', 'Utilisateurs', 'workspace'),
  unmetered('objects', 'items', 'Objets Huly', 'workspace'),
  limit('storage', 'storage', 'Stockage par workspace', 10, 'GB', 'lifetime', 'workspace'),
  limit('av-traffic', 'bandwidth', 'Trafic vidéo et audio inclus', 10, 'GB', 'variable', 'workspace', 'variable'),
];
