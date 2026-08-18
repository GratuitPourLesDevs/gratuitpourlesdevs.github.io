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
) => ({ id, metric, label, amount, unit, period, scope, reset, overage: 'blocked' as const, kind: 'limit' as const });

const unmetered = (id: string, metric: string, label: string, scope = 'service') => ({
  id, metric, label, amount: null, unit: 'usage', period: 'lifetime' as const, scope,
  reset: 'never' as const, overage: 'not-applicable' as const, kind: 'unmetered' as const,
});

const unpublished = (id: string, metric: string, label: string, scope = 'service') => ({
  id, metric, label, amount: null, unit: 'usage', period: 'variable' as const, scope,
  reset: 'variable' as const, overage: 'unknown' as const, kind: 'not-published' as const,
});

OFFER_QUOTAS['screen-sharing-browser'] ??= [unpublished('viewers', 'users', 'Spectateurs simultanés', 'service')];
OFFER_QUOTAS.seafile ??= [unmetered('community', 'usage', 'Community Edition auto-hébergée', 'installation')];
OFFER_QUOTAS.sitedots ??= [
  limit('projects', 'projects', 'Projets', 1, 'project', 'lifetime', 'account', 'never'),
  limit('users', 'users', 'Utilisateurs par projet', 3, 'user', 'lifetime', 'project', 'never'),
  limit('dots', 'items', 'Points de feedback par projet', 12, 'dot', 'lifetime', 'project', 'never'),
];
OFFER_QUOTAS.slab ??= [
  limit('users', 'users', 'Utilisateurs', 10, 'user', 'lifetime', 'workspace', 'never'),
  limit('attachment-size', 'file_size', 'Taille maximale des pièces jointes', 10, 'MB', 'lifetime', 'file', 'never'),
  limit('version-history', 'retention_days', 'Historique des versions', 90, 'day', 'lifetime', 'workspace', 'never'),
  limit('integrations', 'integrations', 'Intégrations standard', 10, 'integration', 'lifetime', 'workspace', 'never'),
];
OFFER_QUOTAS.slack ??= [
  limit('history', 'retention_days', 'Historique accessible', 90, 'day', 'lifetime', 'workspace', 'never'),
  unpublished('apps', 'integrations', 'Nombre exact d’applications gratuites selon la documentation locale', 'workspace'),
];
OFFER_QUOTAS.statuspile ??= [unpublished('providers', 'services', 'Services ou pages de statut suivis', 'account')];
OFFER_QUOTAS.stickies ??= [
  limit('walls', 'boards', 'Murs', 3, 'wall', 'lifetime', 'account', 'never'),
  limit('collaborators', 'users', 'Collaborateurs par mur', 3, 'user', 'lifetime', 'wall', 'never'),
  limit('storage', 'storage', 'Stockage', 1, 'GB', 'lifetime', 'account', 'never'),
];
OFFER_QUOTAS.meetbackdrops ??= [unpublished('free-assets', 'assets', 'Ressources gratuites disponibles', 'service')];
OFFER_QUOTAS.talky ??= [limit('participants', 'users', 'Participants par salon', 6, 'user', 'session', 'room', 'not-applicable')];
OFFER_QUOTAS.teamcamp ??= [
  limit('users', 'users', 'Utilisateurs', 10, 'user', 'lifetime', 'workspace', 'never'),
  limit('tasks', 'tasks', 'Tâches', 250, 'task', 'total', 'workspace', 'never'),
  limit('storage', 'storage', 'Stockage', 1, 'GB', 'lifetime', 'workspace', 'never'),
  unmetered('projects', 'projects', 'Projets', 'workspace'),
];
OFFER_QUOTAS.teamhood ??= [
  limit('users', 'users', 'Utilisateurs', 10, 'user', 'lifetime', 'workspace', 'never'),
  limit('storage', 'storage', 'Stockage', 100, 'MB', 'lifetime', 'workspace', 'never'),
  unmetered('projects', 'projects', 'Projets et workspaces', 'account'),
];
OFFER_QUOTAS.teamplify ??= [
  limit('users', 'users', 'Utilisateurs', 5, 'user', 'lifetime', 'workspace', 'never'),
  limit('history', 'retention_days', 'Historique analytique', 30, 'day', 'lifetime', 'workspace', 'never'),
];
OFFER_QUOTAS.telegram ??= [
  limit('file-size', 'file_size', 'Taille maximale par fichier', 2, 'GB', 'lifetime', 'file', 'never'),
  unmetered('messages', 'messages', 'Messagerie', 'account'),
];
OFFER_QUOTAS['tencent-rtc'] ??= [
  limit('minutes', 'minutes', 'Minutes RTC gratuites', 10000, 'minute', 'month', 'account', 'monthly'),
  limit('duration', 'free_duration', 'Durée de l’avantage gratuit', 1, 'year', 'total', 'account', 'never'),
];
OFFER_QUOTAS.timecamp ??= [unmetered('users', 'users', 'Utilisateurs', 'workspace'), unmetered('projects', 'projects', 'Projets', 'workspace')];
OFFER_QUOTAS.tldraw ??= [unmetered('opensource', 'usage', 'Application et code open source', 'installation'), unpublished('hosted', 'usage', 'Limites du service hébergé', 'service')];
OFFER_QUOTAS.transfernow ??= [
  limit('transfer-size', 'file_size', 'Taille maximale par transfert', 5, 'GB', 'session', 'transfer', 'not-applicable'),
  limit('retention', 'retention_days', 'Conservation des transferts', 7, 'day', 'lifetime', 'transfer', 'never'),
];
OFFER_QUOTAS.tugboat ??= [
  limit('storage', 'storage', 'Stockage', 5, 'GB', 'lifetime', 'account', 'never'),
  limit('ram', 'memory', 'RAM par environnement Nano', 512, 'MB', 'session', 'preview', 'not-applicable'),
  limit('cpu', 'cpu', 'CPU par environnement Nano', 0.5, 'CPU', 'session', 'preview', 'not-applicable'),
  unmetered('users', 'users', 'Utilisateurs', 'account'),
  unmetered('previews', 'previews', 'Previews', 'account'),
];
OFFER_QUOTAS.twist ??= [
  limit('internal-users', 'users', 'Comptes internes', 500, 'user', 'lifetime', 'workspace', 'never'),
  limit('guests', 'users', 'Invités externes', 500, 'guest', 'lifetime', 'workspace', 'never'),
  limit('history', 'retention_days', 'Historique accessible', 30, 'day', 'lifetime', 'workspace', 'never'),
  limit('integrations', 'integrations', 'Intégrations', 5, 'integration', 'lifetime', 'workspace', 'never'),
  limit('storage', 'storage', 'Stockage', 5, 'GB', 'lifetime', 'workspace', 'never'),
];
OFFER_QUOTAS.userforge ??= [limit('personas', 'items', 'Personas', 2, 'persona', 'lifetime', 'account', 'never'), limit('collaborators', 'users', 'Collaborateurs invités', 1, 'user', 'lifetime', 'account', 'never')];
OFFER_QUOTAS['visual-debug'] ??= [
  limit('members', 'users', 'Membres d’équipe', 1, 'user', 'lifetime', 'workspace', 'never'),
  unmetered('reporters', 'users', 'Reporters', 'workspace'),
  limit('storage', 'storage', 'Stockage', 5, 'GB', 'lifetime', 'workspace', 'never'),
  unmetered('projects', 'projects', 'Projets', 'workspace'),
];
OFFER_QUOTAS.webex ??= [
  limit('duration', 'session_duration', 'Durée maximale d’une réunion', 40, 'minute', 'session', 'meeting', 'not-applicable'),
  limit('participants', 'users', 'Participants', 100, 'user', 'session', 'meeting', 'not-applicable'),
  unmetered('meetings', 'meetings', 'Réunions', 'account'),
  unmetered('whiteboards', 'boards', 'Whiteboards', 'account'),
];
OFFER_QUOTAS.whereby ??= [
  limit('hosts', 'users', 'Hôtes', 1, 'user', 'lifetime', 'account', 'never'),
  limit('rooms', 'rooms', 'Salles', 1, 'room', 'lifetime', 'account', 'never'),
  limit('participants', 'users', 'Participants', 4, 'user', 'session', 'room', 'not-applicable'),
  limit('duration', 'session_duration', 'Durée maximale', 30, 'minute', 'session', 'room', 'not-applicable'),
];
OFFER_QUOTAS.windmill ??= [
  unmetered('executions', 'executions', 'Exécutions en auto-hébergement', 'installation'),
  limit('workspaces', 'workspaces', 'Workspaces', 3, 'workspace', 'lifetime', 'installation', 'never'),
  limit('users', 'users', 'Utilisateurs', 50, 'user', 'lifetime', 'installation', 'never'),
  limit('groups', 'groups', 'Groupes', 4, 'group', 'lifetime', 'installation', 'never'),
  limit('storage', 'storage', 'Stockage objet', 10, 'GiB', 'lifetime', 'installation', 'never'),
  limit('email-triggers', 'triggers', 'Déclenchements email', 100, 'trigger', 'day', 'installation', 'daily'),
];
OFFER_QUOTAS.wistia ??= [limit('storage', 'storage', 'Stockage', 25, 'GB', 'lifetime', 'account', 'never'), limit('users', 'users', 'Utilisateurs', 1, 'user', 'lifetime', 'account', 'never')];
OFFER_QUOTAS['wormhol-org'] ??= [unmetered('files', 'files', 'Nombre de fichiers', 'service'), limit('file-size', 'file_size', 'Taille maximale par fichier', 5, 'GB', 'session', 'file', 'not-applicable'), limit('retention', 'retention_days', 'Conservation maximale', 3, 'day', 'lifetime', 'file', 'never')];
OFFER_QUOTAS.wormhole ??= [limit('stored-size', 'file_size', 'Taille stockée temporairement', 5, 'GB', 'session', 'transfer', 'not-applicable'), limit('retention', 'retention_hours', 'Conservation sur les serveurs', 24, 'hour', 'lifetime', 'transfer', 'never'), unmetered('p2p-size', 'file_size', 'Transfert pair-à-pair au-delà de 5 Go', 'transfer')];
OFFER_QUOTAS.zoom ??= [
  limit('duration', 'session_duration', 'Durée maximale d’une réunion', 40, 'minute', 'session', 'meeting', 'not-applicable'),
  limit('participants', 'users', 'Participants', 100, 'user', 'session', 'meeting', 'not-applicable'),
  unmetered('meetings', 'meetings', 'Réunions', 'account'),
  limit('whiteboards', 'boards', 'Whiteboards éditables', 3, 'board', 'lifetime', 'account', 'never'),
  limit('clips', 'clips', 'Clips', 5, 'clip', 'lifetime', 'account', 'never'),
];
OFFER_QUOTAS.zulip ??= [limit('history', 'messages', 'Messages recherchables', 10000, 'message', 'total', 'workspace', 'never'), limit('storage', 'storage', 'Stockage de fichiers', 5, 'GB', 'lifetime', 'workspace', 'never'), unpublished('users', 'users', 'Utilisateurs sur Zulip Cloud Free', 'workspace')];
OFFER_QUOTAS.rightfeature ??= [limit('products', 'products', 'Produits', 1, 'product', 'lifetime', 'account', 'never'), limit('boards', 'boards', 'Product boards', 1, 'board', 'lifetime', 'account', 'never'), limit('members', 'users', 'Membres d’équipe', 1, 'user', 'lifetime', 'account', 'never')];
OFFER_QUOTAS.zeitio ??= [
  limit('users', 'users', 'Utilisateurs', 1, 'user', 'lifetime', 'account', 'never'),
  limit('projects', 'projects', 'Projets actifs', 3, 'project', 'lifetime', 'account', 'never'),
  limit('tasks', 'tasks', 'Tâches par projet', 50, 'task', 'lifetime', 'project', 'never'),
  limit('clients', 'clients', 'Clients', 3, 'client', 'lifetime', 'account', 'never'),
  limit('invoices', 'invoices', 'Factures', 3, 'invoice', 'month', 'account', 'monthly'),
  limit('retention', 'retention_days', 'Rétention des données', 90, 'day', 'lifetime', 'account', 'never'),
];
