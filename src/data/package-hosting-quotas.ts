import { OFFER_QUOTAS } from './offer-quotas';

const limit = (id: string, metric: string, label: string, amount: number, unit: string, period: 'month' | 'lifetime' | 'variable', scope = 'account', reset: 'monthly' | 'never' | 'variable' = 'never') => ({ id, metric, label, amount, unit, period, scope, reset, overage: 'blocked' as const, kind: 'limit' as const });
const unlimited = (id: string, metric: string, label: string, scope = 'service') => ({ id, metric, label, amount: null, unit: 'usage', period: 'lifetime' as const, scope, reset: 'never' as const, overage: 'not-applicable' as const, kind: 'unlimited' as const });
const unpublished = (id: string, metric: string, label: string, scope = 'service') => ({ id, metric, label, amount: null, unit: 'usage', period: 'variable' as const, scope, reset: 'variable' as const, overage: 'unknown' as const, kind: 'not-published' as const });

OFFER_QUOTAS.gemfury ??= [
  unpublished('free-public-plan', 'packages', 'Quota du plan public gratuit à confirmer', 'account'),
];

OFFER_QUOTAS.jitpack ??= [
  unlimited('open-source-projects', 'projects', 'Projets open source publics', 'open-source'),
  unlimited('versions', 'versions', 'Versions pour les projets open source', 'open-source'),
];

OFFER_QUOTAS.paperspace ??= [
  limit('storage', 'storage', 'Stockage', 5, 'GB', 'lifetime'),
  unpublished('basic-instances', 'compute', 'Quota des instances Basic gratuites', 'account'),
];

OFFER_QUOTAS.repoflow ??= [
  limit('storage', 'storage', 'Stockage', 10, 'GB', 'lifetime'),
  limit('bandwidth', 'bandwidth', 'Bande passante', 10, 'GB', 'month', 'account', 'monthly'),
  limit('packages', 'packages', 'Packages uniques', 100, 'package', 'lifetime'),
  limit('workspace', 'projects', 'Workspace', 1, 'workspace', 'lifetime'),
  limit('ai-requests', 'requests', 'Requêtes RepoFlow AI', 10, 'request', 'month', 'account', 'monthly'),
  unlimited('users', 'users', 'Utilisateurs du workspace', 'workspace'),
];

OFFER_QUOTAS.repoforge ??= [
  limit('storage', 'storage', 'Stockage', 100, 'MB', 'lifetime'),
  unlimited('public-packages', 'packages', 'Packages publics open source', 'account'),
];

OFFER_QUOTAS.repsy ??= [
  limit('storage', 'storage', 'Stockage gratuit', 20, 'GB', 'lifetime'),
  unpublished('repositories', 'repositories', 'Nombre de dépôts', 'account'),
];
