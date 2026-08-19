import { OFFER_QUOTAS } from './offer-quotas';

OFFER_QUOTAS['algolia'] ??= [
  { id: 'records', metric: 'records', label: 'Enregistrements Build', amount: 1_000_000, unit: 'record', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'search-requests', metric: 'search_requests', label: 'Requêtes de recherche', amount: 10_000, unit: 'request', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
  { id: 'recommendations', metric: 'recommendation_requests', label: 'Requêtes de recommandation', amount: 10_000, unit: 'request', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
  { id: 'crawls', metric: 'crawls', label: 'Crawls', amount: 10_000, unit: 'crawl', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['bonsai'] ??= [
  { id: 'sandbox', metric: 'cluster_capacity', label: 'Capacité du Sandbox gratuit', amount: null, unit: 'various', period: 'variable', scope: 'cluster', reset: 'variable', overage: 'unknown', kind: 'not-published', notes: 'Le Sandbox est officiellement gratuit en permanence, mais ses limites chiffrées actuelles de mémoire et stockage ne sont pas suffisamment publiées pour reprendre les anciens quotas.' },
];

OFFER_QUOTAS['commandbar'] ??= [
  { id: 'free-tier', metric: 'monthly_active_users', label: 'Quota du niveau gratuit', amount: null, unit: 'MAU', period: 'month', scope: 'account', reset: 'monthly', overage: 'unknown', kind: 'not-published', notes: 'L’ancien plafond de 1 000 MAU n’est plus confirmé dans les sources publiques actuelles de Command AI.' },
];

OFFER_QUOTAS['searchly'] ??= [
  { id: 'storage', metric: 'storage', label: 'Stockage', amount: 20, unit: 'MB', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'indices', metric: 'indexes', label: 'Index Elasticsearch', amount: 2, unit: 'index', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
];
