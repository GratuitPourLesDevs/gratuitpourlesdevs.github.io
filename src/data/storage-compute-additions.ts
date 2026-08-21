import { OFFER_QUOTAS } from './offer-quotas';
import { MANAGED_DATA_ADDITIONS_QUOTA_SCORES } from './managed-data-additions';

OFFER_QUOTAS['4everland'] ??= [
  { id: 'ipfs-storage', metric: 'storage', label: 'Stockage IPFS', amount: 6, unit: 'GB', period: 'month', scope: 'account', reset: 'monthly', overage: 'billed', kind: 'limit' },
  { id: 'arweave-storage', metric: 'storage', label: 'Stockage Arweave', amount: 100, unit: 'MB', period: 'lifetime', scope: 'account', reset: 'never', overage: 'billed', kind: 'limit' },
  { id: 'bandwidth', metric: 'bandwidth', label: 'Bande passante', amount: 100, unit: 'GB', period: 'month', scope: 'account', reset: 'monthly', overage: 'billed', kind: 'limit' },
];

OFFER_QUOTAS['backblaze-b2'] ??= [
  { id: 'storage', metric: 'storage', label: 'Stockage objet', amount: 10, unit: 'GB', period: 'lifetime', scope: 'account', reset: 'never', overage: 'billed', kind: 'limit' },
  { id: 'class-b-requests', metric: 'requests', label: 'Transactions classe B', amount: 2500, unit: 'request', period: 'day', scope: 'account', reset: 'daily', overage: 'billed', kind: 'limit' },
  { id: 'class-c-requests', metric: 'requests', label: 'Transactions classe C', amount: 2500, unit: 'request', period: 'day', scope: 'account', reset: 'daily', overage: 'billed', kind: 'limit' },
];

OFFER_QUOTAS['filebase'] ??= [
  { id: 'storage', metric: 'storage', label: 'Stockage Object Storage + IPFS', amount: 5, unit: 'GB', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit', shared: true },
  { id: 'ipfs-bandwidth', metric: 'bandwidth', label: 'Bande passante IPFS', amount: 10, unit: 'GB', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['modal'] ??= [
  { id: 'compute-credit', metric: 'credit', label: 'Crédits de calcul', amount: 30, unit: 'USD', period: 'month', scope: 'account', reset: 'monthly', overage: 'billed', kind: 'credit' },
  { id: 'containers', metric: 'parallelism', label: 'Conteneurs simultanés', amount: 100, unit: 'container', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'gpus', metric: 'parallelism', label: 'GPU simultanés', amount: 10, unit: 'GPU', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
];

export const STORAGE_COMPUTE_QUOTA_SCORES = {
  '4everland': 20,
  'backblaze-b2': 20,
  filebase: 15,
  modal: 20,
  ...MANAGED_DATA_ADDITIONS_QUOTA_SCORES,
} satisfies Record<string, 5 | 10 | 15 | 20 | 25>;
