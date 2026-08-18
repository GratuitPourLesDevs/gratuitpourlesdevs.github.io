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

OFFER_QUOTAS.keybase ??= [
  limit('personal-storage', 'storage', 'Stockage de fichiers individuel', 250, 'GB', 'lifetime', 'user'),
  limit('team-storage', 'storage', 'Stockage de fichiers par équipe', 100, 'GB', 'lifetime', 'team'),
];
OFFER_QUOTAS.knocket ??= [
  unmetered('messages', 'messages', 'Messages du cœur gratuit', 'account'),
  unpublished('service-limits', 'usage', 'Limites de sites et membres non publiées', 'account'),
];
OFFER_QUOTAS.linkinize ??= [
  limit('users', 'users', 'Utilisateurs', 10, 'user', 'lifetime', 'account'),
  limit('workspaces', 'workspaces', 'Workspaces', 4, 'workspace', 'lifetime', 'account'),
  limit('bookmarks', 'bookmarks', 'Favoris', 2000, 'bookmark', 'total', 'account'),
];
OFFER_QUOTAS.lockitbot ??= [
  limit('resources', 'resources', 'Ressources partagées', 2, 'resource', 'lifetime', 'workspace'),
  unmetered('locks', 'locks', 'Locks et réservations', 'workspace'),
];
OFFER_QUOTAS['jitsi-meet'] ??= [limit('active-endpoints', 'active_endpoints', 'Active End Points agrégés', 25, 'endpoint', 'month', 'account', 'monthly')];
OFFER_QUOTAS.miro ??= [
  limit('editable-boards', 'boards', 'Tableaux éditables', 3, 'board', 'lifetime', 'team'),
  unmetered('members', 'users', 'Membres de l’équipe', 'team'),
  limit('ai-credits', 'credits', 'Crédits IA', 10, 'credit', 'month', 'account', 'monthly'),
];
OFFER_QUOTAS.notion ??= [
  unmetered('solo-blocks', 'blocks', 'Pages et blocs en usage individuel', 'solo-workspace'),
  limit('team-blocks', 'blocks', 'Blocs avec au moins 2 membres', 1000, 'block', 'total', 'team-workspace'),
  limit('guests', 'users', 'Invités externes', 10, 'guest', 'lifetime', 'workspace'),
  limit('file-size', 'file_size', 'Taille maximale par fichier', 5, 'MB', 'lifetime', 'file'),
  limit('history', 'retention_days', 'Historique des pages', 7, 'day', 'lifetime', 'workspace'),
];
OFFER_QUOTAS.nuclino ??= [
  limit('items', 'items', 'Items', 50, 'item', 'total', 'workspace'),
  limit('canvases', 'canvases', 'Canvases', 3, 'canvas', 'lifetime', 'workspace'),
  limit('storage', 'storage', 'Stockage total', 2, 'GB', 'lifetime', 'workspace'),
];
OFFER_QUOTAS.onlineinterview ??= [limit('participants', 'users', 'Utilisateurs simultanés par salle', 3, 'user', 'session', 'room', 'not-applicable')];
OFFER_QUOTAS['paste-sh'] ??= [unpublished('limits', 'usage', 'Quota du service public non publié', 'service')];
OFFER_QUOTAS.pastefy ??= [unpublished('limits', 'usage', 'Quota de l’instance publique non publié', 'service')];
OFFER_QUOTAS.pendulums ??= [unmetered('projects', 'projects', 'Projets', 'account'), unmetered('users', 'users', 'Utilisateurs par projet', 'project')];
OFFER_QUOTAS['proton-pass'] ??= [
  unmetered('logins', 'logins', 'Logins, notes et cartes', 'account'),
  unmetered('devices', 'devices', 'Appareils', 'account'),
  limit('aliases', 'aliases', 'Alias hide-my-email', 10, 'alias', 'lifetime', 'account'),
  limit('shared-vaults', 'vaults', 'Coffres créés et partagés', 2, 'vault', 'lifetime', 'account'),
  limit('vault-members', 'users', 'Personnes par coffre partagé', 3, 'user', 'lifetime', 'vault'),
];
OFFER_QUOTAS.pullflow ??= [
  unmetered('public-repositories', 'repositories', 'Dépôts publics', 'account'),
  unmetered('public-users', 'users', 'Utilisateurs sur dépôts publics', 'account'),
  unmetered('private-repositories', 'repositories', 'Dépôts privés', 'account'),
  limit('private-users', 'users', 'Utilisateurs sur dépôts privés', 5, 'user', 'lifetime', 'account'),
];
OFFER_QUOTAS.pumble ??= [
  unmetered('users', 'users', 'Utilisateurs', 'workspace'),
  unmetered('channels', 'channels', 'Canaux', 'workspace'),
  unmetered('history', 'messages', 'Historique des messages', 'workspace'),
  limit('storage', 'storage', 'Stockage par workspace', 10, 'GB', 'lifetime', 'workspace'),
  limit('integrations', 'integrations', 'Apps et intégrations', 3, 'integration', 'lifetime', 'workspace'),
];
OFFER_QUOTAS['quidlo-timesheets'] ??= [
  limit('users', 'users', 'Utilisateurs', 10, 'user', 'lifetime', 'workspace'),
  unmetered('projects', 'projects', 'Projets', 'workspace'),
  unmetered('timers', 'timers', 'Timers', 'workspace'),
];
OFFER_QUOTAS['raindrop-io'] ??= [
  unmetered('bookmarks', 'bookmarks', 'Favoris', 'account'),
  unmetered('collections', 'collections', 'Collections', 'account'),
  unmetered('devices', 'devices', 'Appareils', 'account'),
  unmetered('collaborators', 'users', 'Collaborateurs par collection', 'collection'),
  limit('uploads', 'storage', 'Téléversements de fichiers', 100, 'MB', 'month', 'account', 'monthly'),
  limit('file-size', 'file_size', 'Taille maximale par fichier', 100, 'MB', 'lifetime', 'file'),
];
OFFER_QUOTAS.reezn ??= [
  limit('seats', 'users', 'Sièges', 3, 'user', 'lifetime', 'workspace'),
  limit('projects', 'projects', 'Projets', 1, 'project', 'lifetime', 'workspace'),
  limit('features', 'features', 'Fonctionnalités actives', 5, 'feature', 'month', 'workspace', 'monthly'),
];
OFFER_QUOTAS.stoat ??= [
  unmetered('core-service', 'usage', 'Messagerie de base du service hébergé', 'account'),
  limit('file-size', 'file_size', 'Taille maximale par fichier', 20, 'MB', 'lifetime', 'file'),
  limit('group-dm-members', 'users', 'Membres par groupe de messages directs', 50, 'user', 'lifetime', 'group'),
];
OFFER_QUOTAS['rocket-chat'] ??= [
  limit('starter-users', 'users', 'Utilisateurs sur Starter self-managed', 50, 'user', 'lifetime', 'workspace'),
  limit('starter-workspaces', 'workspaces', 'Workspace Starter auto-géré', 1, 'workspace', 'lifetime', 'organization'),
  unmetered('community-users', 'users', 'Utilisateurs sur Community Edition', 'self-hosted'),
];
OFFER_QUOTAS.ruttl ??= [
  limit('projects', 'projects', 'Projets', 1, 'project', 'lifetime', 'workspace'),
  limit('pages', 'pages', 'Pages', 5, 'page', 'lifetime', 'project'),
  limit('storage', 'storage', 'Stockage workspace', 1, 'GB', 'lifetime', 'workspace'),
  limit('comments', 'comments', 'Commentaires', 10, 'comment', 'total', 'workspace'),
];
