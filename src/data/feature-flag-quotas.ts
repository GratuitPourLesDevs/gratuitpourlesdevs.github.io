import { OFFER_QUOTAS, type OfferQuota } from './offer-quotas';

const limit = (
  id: string,
  metric: string,
  label: string,
  amount: number,
  unit: string,
  period: OfferQuota['period'],
  scope = 'account',
  reset: OfferQuota['reset'] = 'never',
  overage: OfferQuota['overage'] = 'blocked',
  notes?: string,
): OfferQuota => ({ id, metric, label, amount, unit, period, scope, reset, overage, kind: 'limit', ...(notes ? { notes } : {}) });

const unlimited = (
  id: string,
  metric: string,
  label: string,
  unit: string,
  scope = 'account',
  period: OfferQuota['period'] = 'lifetime',
): OfferQuota => ({ id, metric, label, amount: null, unit, period, scope, reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' });

OFFER_QUOTAS.abby ??= [
  limit('events', 'events', 'Événements', 1_000, 'event', 'month', 'account', 'monthly'),
  limit('ab-tests', 'experiments', 'Tests A/B', 1, 'experiment', 'lifetime'),
  limit('feature-flags', 'feature_flags', 'Feature flags ou Remote Configs', 3, 'flag', 'lifetime'),
  limit('environments', 'environments', 'Environnements', 5, 'environment', 'lifetime'),
];

OFFER_QUOTAS.configcat ??= [
  limit('feature-flags', 'feature_flags', 'Feature flags ou settings par produit', 10, 'flag', 'lifetime', 'product'),
  limit('environments', 'environments', 'Environnements par produit', 2, 'environment', 'lifetime', 'product'),
  limit('products', 'products', 'Produits', 2, 'product', 'lifetime'),
  limit('config-downloads', 'requests', 'Téléchargements config JSON', 5_000_000, 'request', 'month', 'account', 'monthly', 'billed'),
  limit('bandwidth', 'bandwidth', 'Trafic réseau', 20, 'GB', 'month', 'account', 'monthly', 'billed'),
  unlimited('team', 'users', 'Membres d’équipe', 'user'),
];

OFFER_QUOTAS.flagsmith ??= [
  limit('requests', 'requests', 'Requêtes', 50_000, 'request', 'month', 'account', 'monthly', 'degraded', 'Un délai de grâce est prévu avant action sur le compte en cas de dépassement du plan Free.'),
  unlimited('feature-flags', 'feature_flags', 'Feature flags', 'flag', 'project'),
  unlimited('environments', 'environments', 'Environnements', 'environment', 'project'),
  limit('members', 'users', 'Membres d’équipe', 1, 'user', 'lifetime'),
  limit('projects', 'projects', 'Projets', 1, 'project', 'lifetime'),
];

OFFER_QUOTAS.growthbook ??= [
  limit('users', 'users', 'Utilisateurs', 3, 'user', 'lifetime'),
  limit('projects', 'projects', 'Projets', 1, 'project', 'lifetime'),
  unlimited('feature-flags', 'feature_flags', 'Feature flags', 'flag', 'project'),
  unlimited('experiments', 'experiments', 'Expériences', 'experiment', 'project'),
  unlimited('traffic', 'experiment_traffic', 'Trafic des flags et expériences', 'event', 'account'),
  limit('managed-events', 'events', 'Événements du data warehouse managé', 1_000_000, 'event', 'month', 'account', 'monthly'),
];

OFFER_QUOTAS.hypertune ??= [
  limit('team', 'users', 'Membres d’équipe (historique)', 5, 'user', 'lifetime', 'account', 'never', 'not-applicable', 'Quota historique ; Hypertune a arrêté son service le 10 août 2026.'),
  unlimited('feature-flags', 'feature_flags', 'Feature flags (historique)', 'flag'),
  unlimited('experiments', 'experiments', 'Tests A/B (historique)', 'experiment'),
];

OFFER_QUOTAS.rollgate ??= [
  limit('requests', 'requests', 'Requêtes API', 500_000, 'request', 'month', 'account', 'monthly'),
  unlimited('feature-flags', 'feature_flags', 'Feature flags', 'flag'),
  limit('environments', 'environments', 'Environnements', 3, 'environment', 'lifetime'),
  limit('projects', 'projects', 'Projets', 3, 'project', 'lifetime'),
  limit('seats', 'users', 'Sièges', 3, 'user', 'lifetime'),
];

OFFER_QUOTAS.statsig ??= [
  limit('events', 'events', 'Événements', 2_000_000, 'event', 'month', 'account', 'monthly'),
  unlimited('flag-checks', 'feature_flag_checks', 'Checks de flags et configurations', 'check'),
  limit('session-replays', 'session_replays', 'Session replays', 50_000, 'replay', 'month', 'account', 'monthly'),
  unlimited('seats', 'users', 'Sièges', 'user'),
];

OFFER_QUOTAS['toggled-dev'] ??= [
  limit('projects', 'projects', 'Projets', 1, 'project', 'lifetime'),
  limit('feature-toggles', 'feature_flags', 'Feature toggles par projet', 10, 'flag', 'lifetime', 'project'),
  limit('environments', 'environments', 'Environnements par projet', 2, 'environment', 'lifetime', 'project'),
  limit('seats', 'users', 'Sièges', 2, 'user', 'lifetime'),
  unlimited('clients', 'clients', 'Clients', 'client'),
  unlimited('mau', 'monthly_active_users', 'Utilisateurs actifs mensuels', 'user', 'account', 'month'),
];
