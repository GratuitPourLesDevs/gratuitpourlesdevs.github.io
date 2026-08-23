import { OFFER_QUOTAS } from './offer-quotas';
import { MANAGED_DATA_ADDITIONS_QUOTA_SCORES } from './managed-data-additions';
import { TUNNEL_NETWORK_QUOTA_SCORES } from './tunnel-network-additions';
import { PROJECT_MANAGEMENT_QUOTA_SCORES } from './project-management-additions';
import { STORAGE_MEDIA_QUOTA_SCORES } from './storage-media-additions';

// Le pricing Taskade courant est la référence commerciale la plus directe :
// 1 utilisateur, 3 apps Genesis, 1 agent, 3 automatisations et 6 000 crédits ponctuels.
OFFER_QUOTAS['taskade'] = [
  { id: 'users', metric: 'users', label: 'Utilisateurs', amount: 1, unit: 'user', period: 'lifetime', scope: 'workspace', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'genesis-apps', metric: 'applications', label: 'Apps Taskade Genesis', amount: 3, unit: 'application', period: 'lifetime', scope: 'workspace', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'ai-agents', metric: 'agents', label: 'Agents IA', amount: 1, unit: 'agent', period: 'lifetime', scope: 'workspace', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'automations', metric: 'automations', label: 'Automatisations IA', amount: 3, unit: 'automation', period: 'lifetime', scope: 'workspace', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'ai-credits', metric: 'credit', label: 'Crédits IA de bienvenue', amount: 6000, unit: 'credit', period: 'total', scope: 'account', reset: 'never', overage: 'blocked', kind: 'credit', notes: '1 000 crédits après vérification du compte et 5 000 lors du premier build ; allocation non renouvelée mensuellement.' },
  { id: 'knowledge-base', metric: 'storage', label: 'Base de connaissances IA', amount: 250, unit: 'MB', period: 'lifetime', scope: 'workspace', reset: 'never', overage: 'blocked', kind: 'limit' },
];

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
  ...TUNNEL_NETWORK_QUOTA_SCORES,
  ...PROJECT_MANAGEMENT_QUOTA_SCORES,
  ...STORAGE_MEDIA_QUOTA_SCORES,
} satisfies Record<string, 5 | 10 | 15 | 20 | 25>;
