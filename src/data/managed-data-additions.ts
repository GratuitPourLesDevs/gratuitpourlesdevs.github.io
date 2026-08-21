import { OFFER_QUOTAS } from './offer-quotas';

OFFER_QUOTAS['8base'] ??= [
  { id: 'rows', metric: 'database_rows', label: 'Lignes de base de données', amount: 2500, unit: 'row', period: 'lifetime', scope: 'project', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'file-storage', metric: 'storage', label: 'Stockage de fichiers', amount: 0.5, unit: 'GB', period: 'lifetime', scope: 'project', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'compute', metric: 'compute', label: 'Calcul serverless', amount: 1, unit: 'GB-hour', period: 'month', scope: 'project', reset: 'monthly', overage: 'blocked', kind: 'limit' },
  { id: 'api', metric: 'requests', label: 'Appels API GraphQL', amount: 100000, unit: 'request', period: 'month', scope: 'project', reset: 'monthly', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['airtable'] ??= [
  { id: 'records', metric: 'records', label: 'Enregistrements par base', amount: 1000, unit: 'record', period: 'lifetime', scope: 'base', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'api', metric: 'requests', label: 'Appels API', amount: 1000, unit: 'request', period: 'month', scope: 'workspace', reset: 'monthly', overage: 'blocked', kind: 'limit', shared: true },
  { id: 'attachments', metric: 'storage', label: 'Pièces jointes par base', amount: 1, unit: 'GB', period: 'lifetime', scope: 'base', reset: 'never', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['aiven'] ??= [
  { id: 'cpu', metric: 'cpu', label: 'CPU', amount: 1, unit: 'vCPU', period: 'lifetime', scope: 'service', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'ram', metric: 'memory', label: 'Mémoire RAM', amount: 1, unit: 'GB', period: 'lifetime', scope: 'service', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'storage', metric: 'storage', label: 'Stockage PostgreSQL/MySQL', amount: 1, unit: 'GB', period: 'lifetime', scope: 'service', reset: 'never', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['backupdrill'] ??= [
  { id: 'projects', metric: 'projects', label: 'Projet Supabase', amount: 1, unit: 'project', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'backups', metric: 'backups', label: 'Sauvegardes', amount: 1, unit: 'backup', period: 'week', scope: 'project', reset: 'weekly', overage: 'blocked', kind: 'limit' },
  { id: 'restore-drill', metric: 'restore_drills', label: 'Restore drill inclus', amount: 1, unit: 'drill', period: 'total', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit', notes: 'Un seul drill sur la première sauvegarde du plan Free.' },
];

OFFER_QUOTAS['cockroachdb-cloud'] ??= [
  { id: 'request-units', metric: 'request_units', label: 'Request Units', amount: 50000000, unit: 'RU', period: 'month', scope: 'account', reset: 'monthly', overage: 'billed', kind: 'limit' },
  { id: 'storage', metric: 'storage', label: 'Stockage', amount: 10, unit: 'GiB', period: 'month', scope: 'account', reset: 'monthly', overage: 'billed', kind: 'limit' },
];

OFFER_QUOTAS['codehooks'] ??= [
  { id: 'db-storage', metric: 'storage', label: 'Stockage base de données', amount: 150, unit: 'MB', period: 'lifetime', scope: 'space', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'file-storage', metric: 'storage', label: 'Stockage de fichiers', amount: 1, unit: 'GB', period: 'lifetime', scope: 'space', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'api-rate', metric: 'requests', label: 'Appels API ou fonctions', amount: 60, unit: 'request/minute', period: 'variable', scope: 'space', reset: 'rolling', overage: 'blocked', kind: 'limit', notes: 'Limite de 60 appels par minute.' },
];

OFFER_QUOTAS['couchbase-capella'] ??= [
  { id: 'clusters', metric: 'clusters', label: 'Cluster gratuit', amount: 1, unit: 'cluster', period: 'lifetime', scope: 'organization', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'nodes', metric: 'nodes', label: 'Nœud', amount: 1, unit: 'node', period: 'lifetime', scope: 'cluster', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'storage', metric: 'storage', label: 'Stockage de données', amount: 8, unit: 'GB', period: 'lifetime', scope: 'cluster', reset: 'never', overage: 'blocked', kind: 'limit', notes: 'Capacité de référence du Free tier ; certaines pages cloud peuvent afficher une variante selon le fournisseur.' },
];

OFFER_QUOTAS['cratedb'] ??= [
  { id: 'cpu', metric: 'cpu', label: 'vCPU', amount: 2, unit: 'vCPU', period: 'lifetime', scope: 'cluster', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'ram', metric: 'memory', label: 'Mémoire RAM', amount: 2, unit: 'GB', period: 'lifetime', scope: 'cluster', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'storage', metric: 'storage', label: 'Stockage', amount: 8, unit: 'GB', period: 'lifetime', scope: 'cluster', reset: 'never', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['filess'] ??= [
  { id: 'databases', metric: 'databases', label: 'Bases de données', amount: 2, unit: 'database', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'storage', metric: 'storage', label: 'Stockage par base', amount: 10, unit: 'MB', period: 'lifetime', scope: 'database', reset: 'never', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['influxdb'] ??= [
  { id: 'write', metric: 'write_volume', label: 'Écritures', amount: 5, unit: 'MB/5min', period: 'variable', scope: 'account', reset: 'rolling', overage: 'blocked', kind: 'limit', notes: 'Fenêtre glissante de 5 minutes.' },
  { id: 'read', metric: 'read_volume', label: 'Lectures', amount: 300, unit: 'MB/5min', period: 'variable', scope: 'account', reset: 'rolling', overage: 'blocked', kind: 'limit', notes: 'Fenêtre glissante de 5 minutes.' },
  { id: 'retention', metric: 'retention', label: 'Rétention', amount: 30, unit: 'day', period: 'lifetime', scope: 'bucket', reset: 'never', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['layerbase'] ??= [
  { id: 'databases', metric: 'databases', label: 'Bases de données', amount: 2, unit: 'database', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'storage', metric: 'storage', label: 'Stockage total', amount: 5, unit: 'GB', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit', shared: true },
  { id: 'traffic-month', metric: 'bandwidth', label: 'Trafic sur 30 jours', amount: 150, unit: 'GB', period: 'month', scope: 'account', reset: 'rolling', overage: 'degraded', kind: 'limit', shared: true, notes: 'Seuil de politique d’usage équitable.' },
];

OFFER_QUOTAS['memcachier'] ??= [
  { id: 'storage', metric: 'memory', label: 'Cache Memcached', amount: 25, unit: 'MB', period: 'lifetime', scope: 'cache', reset: 'never', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['mongodb-atlas'] ??= [
  { id: 'clusters', metric: 'clusters', label: 'Cluster M0 gratuit', amount: 1, unit: 'cluster', period: 'lifetime', scope: 'project', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'storage', metric: 'storage', label: 'Stockage', amount: 512, unit: 'MB', period: 'lifetime', scope: 'cluster', reset: 'never', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['neo4j-aura'] ??= [
  { id: 'databases', metric: 'databases', label: 'Base AuraDB Free', amount: 1, unit: 'database', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'nodes', metric: 'graph_nodes', label: 'Nœuds du graphe', amount: 200000, unit: 'node', period: 'lifetime', scope: 'database', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'relationships', metric: 'graph_relationships', label: 'Relations du graphe', amount: 400000, unit: 'relationship', period: 'lifetime', scope: 'database', reset: 'never', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['nile'] ??= [
  { id: 'databases', metric: 'databases', label: 'Bases de données', amount: null, unit: 'database', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' },
  { id: 'query-tokens', metric: 'query_tokens', label: 'Query tokens', amount: 50000000, unit: 'token', period: 'month', scope: 'account', reset: 'monthly', overage: 'billed', kind: 'limit', shared: true },
  { id: 'storage', metric: 'storage', label: 'Stockage', amount: 1, unit: 'GB', period: 'lifetime', scope: 'account', reset: 'never', overage: 'billed', kind: 'limit', shared: true },
];

OFFER_QUOTAS['prisma-postgres'] ??= [
  { id: 'operations', metric: 'operations', label: 'Opérations', amount: 100000, unit: 'operation', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit', shared: true },
  { id: 'storage', metric: 'storage', label: 'Stockage total', amount: 500, unit: 'MB', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit', shared: true },
  { id: 'databases', metric: 'databases', label: 'Bases de données', amount: 50, unit: 'database', period: 'lifetime', scope: 'workspace', reset: 'never', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['qdrant'] ??= [
  { id: 'cpu', metric: 'cpu', label: 'vCPU', amount: 0.5, unit: 'vCPU', period: 'lifetime', scope: 'cluster', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'ram', metric: 'memory', label: 'Mémoire RAM', amount: 1, unit: 'GB', period: 'lifetime', scope: 'cluster', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'disk', metric: 'storage', label: 'Disque', amount: 4, unit: 'GB', period: 'lifetime', scope: 'cluster', reset: 'never', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['restdb'] ??= [
  { id: 'users', metric: 'users', label: 'Utilisateurs', amount: 3, unit: 'user', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'records', metric: 'records', label: 'Enregistrements', amount: 2500, unit: 'record', period: 'lifetime', scope: 'database', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'api-day', metric: 'requests', label: 'Appels API par jour', amount: 500, unit: 'request', period: 'day', scope: 'account', reset: 'daily', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['seatable'] ??= [
  { id: 'users', metric: 'users', label: 'Utilisateurs', amount: 25, unit: 'user', period: 'lifetime', scope: 'team', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'rows', metric: 'records', label: 'Lignes', amount: 10000, unit: 'row', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'files', metric: 'storage', label: 'Stockage de fichiers', amount: 2, unit: 'GB', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'api', metric: 'requests', label: 'Appels API', amount: 3000, unit: 'request', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit', shared: true },
];

OFFER_QUOTAS['skyvia'] ??= [
  { id: 'records', metric: 'records', label: 'Enregistrements Data Integration', amount: 10000, unit: 'record', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
  { id: 'integrations', metric: 'integrations', label: 'Intégrations planifiées', amount: 2, unit: 'integration', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'automation-tasks', metric: 'automation_tasks', label: 'Tâches Automation', amount: 1000, unit: 'task', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['stackby'] ??= [
  { id: 'stacks', metric: 'stacks', label: 'Stacks', amount: 20, unit: 'stack', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'rows', metric: 'records', label: 'Lignes par stack', amount: 1500, unit: 'row', period: 'lifetime', scope: 'stack', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'attachments', metric: 'storage', label: 'Pièces jointes par stack', amount: 2, unit: 'GB', period: 'lifetime', scope: 'stack', reset: 'never', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['tinybird'] ??= [
  { id: 'storage', metric: 'storage', label: 'Stockage', amount: 10, unit: 'GB', period: 'lifetime', scope: 'organization', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'requests', metric: 'requests', label: 'Requêtes API', amount: 1000, unit: 'request', period: 'day', scope: 'organization', reset: 'daily', overage: 'blocked', kind: 'limit', shared: true },
  { id: 'cpu', metric: 'cpu', label: 'vCPU', amount: 0.25, unit: 'vCPU', period: 'lifetime', scope: 'organization', reset: 'never', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['turso'] ??= [
  { id: 'databases', metric: 'databases', label: 'Bases de données', amount: 100, unit: 'database', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'storage', metric: 'storage', label: 'Stockage total', amount: 5, unit: 'GB', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit', shared: true },
  { id: 'reads', metric: 'row_reads', label: 'Lignes lues', amount: 500000000, unit: 'row', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit', shared: true },
  { id: 'writes', metric: 'row_writes', label: 'Lignes écrites', amount: 10000000, unit: 'row', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit', shared: true },
];

OFFER_QUOTAS['upstash'] ??= [
  { id: 'storage', metric: 'storage', label: 'Taille maximale de la base', amount: 256, unit: 'MB', period: 'lifetime', scope: 'database', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'commands', metric: 'commands', label: 'Commandes', amount: 500000, unit: 'command', period: 'month', scope: 'database', reset: 'monthly', overage: 'blocked', kind: 'limit' },
  { id: 'bandwidth', metric: 'bandwidth', label: 'Bande passante', amount: 10, unit: 'GB', period: 'month', scope: 'database', reset: 'monthly', overage: 'blocked', kind: 'limit' },
];

export const MANAGED_DATA_ADDITIONS_QUOTA_SCORES = {
  '8base': 15,
  airtable: 15,
  aiven: 15,
  backupdrill: 15,
  'cockroachdb-cloud': 20,
  codehooks: 15,
  'couchbase-capella': 20,
  cratedb: 20,
  filess: 10,
  influxdb: 15,
  layerbase: 20,
  memcachier: 10,
  'mongodb-atlas': 15,
  'neo4j-aura': 15,
  nile: 20,
  'prisma-postgres': 15,
  qdrant: 20,
  restdb: 10,
  seatable: 20,
  skyvia: 15,
  stackby: 20,
  tinybird: 20,
  turso: 20,
  upstash: 15,
} satisfies Record<string, 5 | 10 | 15 | 20 | 25>;
