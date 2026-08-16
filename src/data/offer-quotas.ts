export const QUOTA_PERIODS = ['day', 'week', 'month', 'year', 'total', 'lifetime', 'session', 'variable'] as const;
export const QUOTA_RESETS = ['daily', 'weekly', 'monthly', 'yearly', 'never', 'rolling', 'variable', 'not-applicable'] as const;
export const QUOTA_OVERAGES = ['billed', 'blocked', 'degraded', 'not-applicable', 'unknown'] as const;
export const QUOTA_KINDS = ['limit', 'unlimited', 'unmetered', 'credit', 'free-management', 'not-published'] as const;

export type QuotaPeriod = typeof QUOTA_PERIODS[number];
export type QuotaReset = typeof QUOTA_RESETS[number];
export type QuotaOverage = typeof QUOTA_OVERAGES[number];
export type QuotaKind = typeof QUOTA_KINDS[number];

export type OfferQuota = {
  id: string;
  metric: string;
  label: string;
  amount: number | null;
  unit: string;
  period: QuotaPeriod;
  scope: string;
  reset: QuotaReset;
  overage: QuotaOverage;
  kind?: QuotaKind;
  shared?: boolean;
  notes?: string;
};

type QuotaInput = Omit<OfferQuota, 'id' | 'kind'> & { kind?: QuotaKind };
const q = (id: string, input: QuotaInput): OfferQuota => ({ kind: 'limit', ...input, id });

export const OFFER_QUOTAS: Record<string, OfferQuota[]> = {
  'amazon-cloudfront': [
    q('bandwidth', { metric: 'bandwidth', label: 'Transfert sortant', amount: 1000, unit: 'GB', period: 'month', scope: 'account', reset: 'monthly', overage: 'billed' }),
    q('requests', { metric: 'requests', label: 'Requêtes HTTP/S', amount: 10_000_000, unit: 'request', period: 'month', scope: 'account', reset: 'monthly', overage: 'billed' }),
    q('functions', { metric: 'executions', label: 'Invocations CloudFront Functions', amount: 2_000_000, unit: 'execution', period: 'month', scope: 'account', reset: 'monthly', overage: 'billed' }),
  ],
  'amazon-cloudwatch': [
    q('metrics', { metric: 'metrics', label: 'Métriques personnalisées', amount: 10, unit: 'metric', period: 'month', scope: 'account', reset: 'monthly', overage: 'billed' }),
    q('alarms', { metric: 'alarms', label: 'Alarmes standard', amount: 10, unit: 'alarm', period: 'month', scope: 'account', reset: 'monthly', overage: 'billed' }),
    q('api', { metric: 'requests', label: 'Requêtes API', amount: 1_000_000, unit: 'request', period: 'month', scope: 'account', reset: 'monthly', overage: 'billed' }),
    q('logs', { metric: 'log_volume', label: 'Données de logs', amount: 5, unit: 'GB', period: 'month', scope: 'account', reset: 'monthly', overage: 'billed' }),
  ],
  'amazon-dynamodb': [
    q('storage', { metric: 'storage', label: 'Stockage', amount: 25, unit: 'GB', period: 'lifetime', scope: 'account', reset: 'never', overage: 'billed' }),
    q('read-capacity', { metric: 'read_capacity', label: 'Capacité de lecture provisionnée', amount: 25, unit: 'RCU', period: 'lifetime', scope: 'account', reset: 'never', overage: 'billed' }),
    q('write-capacity', { metric: 'write_capacity', label: 'Capacité d’écriture provisionnée', amount: 25, unit: 'WCU', period: 'lifetime', scope: 'account', reset: 'never', overage: 'billed' }),
  ],
  'amazon-ses': [q('credit', { metric: 'credit', label: 'Crédit AWS applicable à SES', amount: 200, unit: 'USD', period: 'total', scope: 'account', reset: 'never', overage: 'billed', kind: 'credit', notes: 'Crédit utilisable pendant les six mois du plan gratuit.' })],
  'amazon-sns': [
    q('publishes', { metric: 'messages', label: 'Publications', amount: 1_000_000, unit: 'message', period: 'month', scope: 'account', reset: 'monthly', overage: 'billed' }),
    q('http-deliveries', { metric: 'deliveries', label: 'Livraisons HTTP/S', amount: 100_000, unit: 'delivery', period: 'month', scope: 'account', reset: 'monthly', overage: 'billed' }),
    q('emails', { metric: 'emails', label: 'Livraisons e-mail', amount: 1_000, unit: 'email', period: 'month', scope: 'account', reset: 'monthly', overage: 'billed' }),
  ],
  'amazon-sqs': [q('requests', { metric: 'requests', label: 'Requêtes de messagerie', amount: 1_000_000, unit: 'request', period: 'month', scope: 'account', reset: 'monthly', overage: 'billed' })],
  'aws-codebuild': [
    q('ec2-build-time', { metric: 'build_time', label: 'Build EC2', amount: 100, unit: 'minute', period: 'month', scope: 'account', reset: 'monthly', overage: 'billed' }),
    q('lambda-build-time', { metric: 'build_time', label: 'Build Lambda', amount: 6_000, unit: 'second', period: 'month', scope: 'account', reset: 'monthly', overage: 'billed' }),
  ],
  'aws-codecommit': [
    q('users', { metric: 'users', label: 'Utilisateurs actifs', amount: 5, unit: 'user', period: 'month', scope: 'account', reset: 'monthly', overage: 'billed' }),
    q('storage', { metric: 'storage', label: 'Stockage mutualisé', amount: 50, unit: 'GB', period: 'month', scope: 'account', reset: 'monthly', overage: 'billed', shared: true }),
    q('git-requests', { metric: 'requests', label: 'Requêtes Git', amount: 10_000, unit: 'request', period: 'month', scope: 'account', reset: 'monthly', overage: 'billed', shared: true }),
  ],
  'aws-codepipeline': [
    q('pipeline', { metric: 'pipelines', label: 'Pipeline V1 actif', amount: 1, unit: 'pipeline', period: 'month', scope: 'account', reset: 'monthly', overage: 'billed' }),
    q('actions', { metric: 'build_time', label: 'Actions V2', amount: 100, unit: 'minute', period: 'month', scope: 'account', reset: 'monthly', overage: 'billed' }),
  ],
  'aws-lambda': [
    q('requests', { metric: 'requests', label: 'Requêtes', amount: 1_000_000, unit: 'request', period: 'month', scope: 'account', reset: 'monthly', overage: 'billed' }),
    q('compute', { metric: 'compute', label: 'Calcul', amount: 400_000, unit: 'GB-second', period: 'month', scope: 'account', reset: 'monthly', overage: 'billed' }),
  ],
  'azure-ai-search': [
    q('storage', { metric: 'storage', label: 'Stockage d’index', amount: 50, unit: 'MB', period: 'lifetime', scope: 'service', reset: 'never', overage: 'blocked' }),
    q('indexes', { metric: 'indexes', label: 'Index', amount: 3, unit: 'index', period: 'lifetime', scope: 'service', reset: 'never', overage: 'blocked' }),
  ],
  'azure-ai-services-free-tiers': [q('service-quotas', { metric: 'service_specific', label: 'Quotas par service IA', amount: null, unit: 'various', period: 'month', scope: 'service', reset: 'monthly', overage: 'billed', kind: 'not-published', notes: 'Les volumes diffèrent entre Vision, Face, Translator, Speech et Language.' })],
  'azure-app-service': [
    q('apps', { metric: 'applications', label: 'Applications', amount: 10, unit: 'application', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked' }),
    q('cpu', { metric: 'compute_time', label: 'Temps CPU', amount: 60, unit: 'minute', period: 'day', scope: 'account', reset: 'daily', overage: 'blocked' }),
    q('storage', { metric: 'storage', label: 'Stockage', amount: 1, unit: 'GB', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked' }),
  ],
  'azure-bandwidth': [q('bandwidth', { metric: 'bandwidth', label: 'Trafic Internet sortant', amount: 100, unit: 'GB', period: 'month', scope: 'account', reset: 'monthly', overage: 'billed' })],
  'azure-cosmos-db': [
    q('throughput', { metric: 'throughput', label: 'Débit provisionné', amount: 1_000, unit: 'RU/s', period: 'lifetime', scope: 'account', reset: 'never', overage: 'billed' }),
    q('storage', { metric: 'storage', label: 'Stockage', amount: 25, unit: 'GB', period: 'lifetime', scope: 'account', reset: 'never', overage: 'billed' }),
  ],
  'azure-devops': [
    q('users', { metric: 'users', label: 'Utilisateurs Basic', amount: 5, unit: 'user', period: 'lifetime', scope: 'organization', reset: 'never', overage: 'billed' }),
    q('ci-time', { metric: 'build_time', label: 'CI/CD hébergée', amount: 1_800, unit: 'minute', period: 'month', scope: 'organization', reset: 'monthly', overage: 'billed' }),
    q('repositories', { metric: 'repositories', label: 'Dépôts Git privés', amount: null, unit: 'repository', period: 'lifetime', scope: 'organization', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' }),
  ],
  'azure-devtest-labs': [q('management', { metric: 'management', label: 'Gestion des laboratoires', amount: null, unit: 'service', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'free-management', notes: 'Les ressources Azure sous-jacentes restent facturées.' })],
  'azure-event-grid': [q('operations', { metric: 'operations', label: 'Opérations Event Grid Basic', amount: 100_000, unit: 'operation', period: 'month', scope: 'account', reset: 'monthly', overage: 'billed' })],
  'azure-functions': [
    q('executions', { metric: 'executions', label: 'Exécutions', amount: 1_000_000, unit: 'execution', period: 'month', scope: 'account', reset: 'monthly', overage: 'billed' }),
    q('compute', { metric: 'compute', label: 'Calcul', amount: 400_000, unit: 'GB-second', period: 'month', scope: 'account', reset: 'monthly', overage: 'billed' }),
  ],
  'azure-iot-hub': [
    q('messages', { metric: 'messages', label: 'Messages', amount: 8_000, unit: 'message', period: 'day', scope: 'hub', reset: 'daily', overage: 'blocked' }),
    q('devices', { metric: 'devices', label: 'Identités d’appareils', amount: 500, unit: 'device', period: 'lifetime', scope: 'hub', reset: 'never', overage: 'blocked' }),
  ],
  'azure-kubernetes-service': [q('management', { metric: 'management', label: 'Gestion du cluster', amount: null, unit: 'cluster', period: 'lifetime', scope: 'cluster', reset: 'not-applicable', overage: 'not-applicable', kind: 'free-management', notes: 'Les nœuds et ressources d’infrastructure sont facturés.' })],
  'azure-load-balancer': [
    q('usage-time', { metric: 'usage_time', label: 'Utilisation', amount: 750, unit: 'hour', period: 'month', scope: 'account', reset: 'monthly', overage: 'billed', notes: 'Avantage limité aux douze premiers mois.' }),
    q('data', { metric: 'bandwidth', label: 'Données traitées', amount: 15, unit: 'GB', period: 'month', scope: 'account', reset: 'monthly', overage: 'billed' }),
  ],
  'azure-notification-hubs': [
    q('notifications', { metric: 'notifications', label: 'Notifications push', amount: 1_000_000, unit: 'notification', period: 'month', scope: 'namespace', reset: 'monthly', overage: 'billed' }),
    q('devices', { metric: 'devices', label: 'Appareils actifs', amount: 500, unit: 'device', period: 'lifetime', scope: 'namespace', reset: 'never', overage: 'blocked' }),
  ],
  'azure-pipelines-open-source': [q('parallel-jobs', { metric: 'parallelism', label: 'Jobs parallèles hébergés', amount: 10, unit: 'job', period: 'lifetime', scope: 'organization', reset: 'never', overage: 'blocked' }), q('minutes', { metric: 'build_time', label: 'Minutes pour projets publics', amount: null, unit: 'minute', period: 'month', scope: 'organization', reset: 'monthly', overage: 'not-applicable', kind: 'unlimited' })],
  'azure-service-bus': [
    q('usage-time', { metric: 'usage_time', label: 'Utilisation', amount: 750, unit: 'hour', period: 'month', scope: 'account', reset: 'monthly', overage: 'billed', notes: 'Avantage limité aux douze premiers mois.' }),
    q('operations', { metric: 'operations', label: 'Opérations', amount: 13_000_000, unit: 'operation', period: 'month', scope: 'account', reset: 'monthly', overage: 'billed' }),
  ],
  'azure-static-web-apps': [
    q('apps', { metric: 'applications', label: 'Applications', amount: 10, unit: 'application', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked' }),
    q('bandwidth', { metric: 'bandwidth', label: 'Bande passante', amount: 100, unit: 'GB', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked' }),
    q('storage', { metric: 'storage', label: 'Stockage total', amount: 500, unit: 'MB', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked' }),
  ],
  'azure-storage-free-services': [
    q('files', { metric: 'storage', label: 'Azure Files', amount: 100, unit: 'GB', period: 'month', scope: 'account', reset: 'monthly', overage: 'billed', notes: 'Avantage limité aux douze premiers mois.' }),
    q('blob-hot', { metric: 'storage', label: 'Blob Hot', amount: 5, unit: 'GB', period: 'month', scope: 'account', reset: 'monthly', overage: 'billed' }),
    q('archive', { metric: 'storage', label: 'Archive Storage', amount: 10, unit: 'GB', period: 'month', scope: 'account', reset: 'monthly', overage: 'billed' }),
  ],
  brainboard: [q('architectures', { metric: 'projects', label: 'Architectures cloud', amount: null, unit: 'project', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' })],
  'chrome-remote-desktop': [q('devices', { metric: 'devices', label: 'Appareils', amount: null, unit: 'device', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'unknown', kind: 'not-published' })],
  'cloud-66': [q('server', { metric: 'servers', label: 'Serveur de déploiement', amount: 1, unit: 'server', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked' }), q('deployments', { metric: 'deployments', label: 'Déploiements', amount: 5, unit: 'deployment', period: 'day', scope: 'account', reset: 'rolling', overage: 'blocked', notes: 'Fenêtre glissante de 24 heures.' })],
  'cloudflare-application-services': [q('traffic', { metric: 'bandwidth', label: 'CDN et protection DDoS', amount: null, unit: 'GB', period: 'month', scope: 'zone', reset: 'not-applicable', overage: 'not-applicable', kind: 'unmetered' })],
  'cloudflare-d1': [
    q('reads', { metric: 'rows_read', label: 'Lignes lues', amount: 5_000_000, unit: 'row', period: 'day', scope: 'account', reset: 'daily', overage: 'blocked' }),
    q('writes', { metric: 'rows_written', label: 'Lignes écrites', amount: 100_000, unit: 'row', period: 'day', scope: 'account', reset: 'daily', overage: 'blocked' }),
    q('storage', { metric: 'storage', label: 'Stockage total', amount: 5, unit: 'GB', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked' }),
  ],
  'cloudflare-pages': [q('builds', { metric: 'builds', label: 'Builds', amount: 500, unit: 'build', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked' }), q('bandwidth', { metric: 'bandwidth', label: 'Bande passante statique', amount: null, unit: 'GB', period: 'month', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' })],
  'cloudflare-queues': [q('operations', { metric: 'operations', label: 'Opérations', amount: 10_000, unit: 'operation', period: 'day', scope: 'account', reset: 'daily', overage: 'blocked' }), q('retention', { metric: 'retention', label: 'Rétention des messages', amount: 24, unit: 'hour', period: 'total', scope: 'message', reset: 'never', overage: 'blocked' })],
  'cloudflare-r2': [
    q('storage', { metric: 'storage', label: 'Stockage Standard', amount: 10, unit: 'GB', period: 'month', scope: 'account', reset: 'monthly', overage: 'billed' }),
    q('class-a', { metric: 'operations_class_a', label: 'Opérations classe A', amount: 1_000_000, unit: 'operation', period: 'month', scope: 'account', reset: 'monthly', overage: 'billed' }),
    q('class-b', { metric: 'operations_class_b', label: 'Opérations classe B', amount: 10_000_000, unit: 'operation', period: 'month', scope: 'account', reset: 'monthly', overage: 'billed' }),
  ],
  'cloudflare-realtime-turn': [q('bandwidth', { metric: 'bandwidth', label: 'Trafic sortant TURN et SFU', amount: 1_000, unit: 'GB', period: 'month', scope: 'account', reset: 'monthly', overage: 'billed', shared: true })],
  'cloudflare-tunnel': [q('tunnels', { metric: 'tunnels', label: 'Tunnels nommés', amount: null, unit: 'tunnel', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'unknown', kind: 'not-published' })],
  'cloudflare-workers-kv': [q('reads', { metric: 'reads', label: 'Lectures', amount: 100_000, unit: 'operation', period: 'day', scope: 'account', reset: 'daily', overage: 'blocked' }), q('writes', { metric: 'writes', label: 'Écritures', amount: 1_000, unit: 'operation', period: 'day', scope: 'account', reset: 'daily', overage: 'blocked' }), q('storage', { metric: 'storage', label: 'Stockage', amount: 1, unit: 'GB', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked' })],
  'cloudflare-workers': [q('requests', { metric: 'requests', label: 'Requêtes Workers', amount: 100_000, unit: 'request', period: 'day', scope: 'account', reset: 'daily', overage: 'blocked' })],
  'cloudflare-zero-trust': [q('users', { metric: 'users', label: 'Utilisateurs', amount: 50, unit: 'user', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked' }), q('logs', { metric: 'retention', label: 'Rétention des journaux', amount: 24, unit: 'hour', period: 'total', scope: 'account', reset: 'never', overage: 'blocked' })],
  'deployment-io': [q('users', { metric: 'users', label: 'Utilisateurs', amount: 1, unit: 'user', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked' }), q('jobs', { metric: 'jobs', label: 'Jobs', amount: 10, unit: 'job', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked' })],
  'github-actions': [q('build-time', { metric: 'build_time', label: 'Minutes sur dépôts privés', amount: 2_000, unit: 'minute', period: 'month', scope: 'account', reset: 'monthly', overage: 'billed' }), q('public-build-time', { metric: 'build_time', label: 'Minutes sur dépôts publics', amount: null, unit: 'minute', period: 'month', scope: 'repository', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' })],
  'google-ai-studio': [q('model-quotas', { metric: 'requests', label: 'Requêtes Gemini', amount: null, unit: 'request', period: 'variable', scope: 'model', reset: 'variable', overage: 'blocked', kind: 'not-published', notes: 'Le plafond dépend du modèle et peut évoluer.' })],
  'google-cloud': [q('service-quotas', { metric: 'service_specific', label: 'Quotas Always Free', amount: null, unit: 'various', period: 'variable', scope: 'service', reset: 'variable', overage: 'billed', kind: 'not-published' }), q('credit', { metric: 'credit', label: 'Crédit nouveaux clients', amount: 300, unit: 'USD', period: 'total', scope: 'account', reset: 'never', overage: 'blocked', kind: 'credit', notes: 'Expire après 90 jours.' })],
  'google-colab': [q('accelerator', { metric: 'compute_time', label: 'Accès GPU/TPU', amount: null, unit: 'hour', period: 'variable', scope: 'user', reset: 'variable', overage: 'degraded', kind: 'not-published' })],
  'grafana-cloud': [q('metrics', { metric: 'metrics', label: 'Séries métriques', amount: 10_000, unit: 'metric', period: 'month', scope: 'account', reset: 'monthly', overage: 'billed' }), q('logs', { metric: 'log_volume', label: 'Logs', amount: 50, unit: 'GB', period: 'month', scope: 'account', reset: 'monthly', overage: 'billed' }), q('traces', { metric: 'trace_volume', label: 'Traces', amount: 50, unit: 'GB', period: 'month', scope: 'account', reset: 'monthly', overage: 'billed' })],
  'ibm-cloud': [q('service-quotas', { metric: 'service_specific', label: 'Plans Lite', amount: 40, unit: 'service', period: 'lifetime', scope: 'account', reset: 'variable', overage: 'billed' }), q('credit', { metric: 'credit', label: 'Crédit découverte', amount: 200, unit: 'USD', period: 'total', scope: 'account', reset: 'never', overage: 'blocked', kind: 'credit', notes: 'Expire après 30 jours.' })],
  'infomaniak-public-cloud': [q('credit', { metric: 'credit', label: 'Crédit de bienvenue', amount: null, unit: 'CHF', period: 'total', scope: 'account', reset: 'never', overage: 'blocked', kind: 'not-published' })],
  'kaggle-notebooks': [q('gpu-time', { metric: 'compute_time', label: 'Temps GPU', amount: 30, unit: 'hour', period: 'week', scope: 'user', reset: 'weekly', overage: 'blocked' })],
  'microsoft-entra-external-id': [q('active-users', { metric: 'users', label: 'Utilisateurs actifs mensuels', amount: 50_000, unit: 'user', period: 'month', scope: 'tenant', reset: 'monthly', overage: 'billed' })],
  'microsoft-entra-id': [q('resources', { metric: 'resources', label: 'Ressources dans l’annuaire', amount: 500_000, unit: 'resource', period: 'lifetime', scope: 'tenant', reset: 'never', overage: 'blocked' }), q('sso', { metric: 'applications', label: 'Applications SaaS en SSO', amount: null, unit: 'application', period: 'lifetime', scope: 'tenant', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' })],
  neon: [q('projects', { metric: 'projects', label: 'Projets', amount: 100, unit: 'project', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked' }), q('compute', { metric: 'compute_time', label: 'Calcul', amount: 100, unit: 'CU-hour', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked' }), q('storage', { metric: 'storage', label: 'Stockage par projet', amount: 0.5, unit: 'GB', period: 'lifetime', scope: 'project', reset: 'never', overage: 'blocked' })],
  'oracle-cloud': [q('service-quotas', { metric: 'service_specific', label: 'Services Always Free', amount: 20, unit: 'service', period: 'lifetime', scope: 'account', reset: 'variable', overage: 'billed' }), q('credit', { metric: 'credit', label: 'Crédit d’essai', amount: 300, unit: 'USD', period: 'total', scope: 'account', reset: 'never', overage: 'blocked', kind: 'credit', notes: 'Expire après 30 jours.' })],
  'pulumi-cloud': [q('users', { metric: 'users', label: 'Utilisateurs', amount: 1, unit: 'user', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked' }), q('deploy-time', { metric: 'deployment_time', label: 'Minutes de déploiement', amount: 500, unit: 'minute', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked' }), q('projects', { metric: 'projects', label: 'Projets et stacks', amount: null, unit: 'project', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' })],
  scalr: [q('runs', { metric: 'runs', label: 'Runs Terraform/OpenTofu', amount: 50, unit: 'run', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked' }), q('parallelism', { metric: 'parallelism', label: 'Exécutions simultanées', amount: 2, unit: 'run', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked' })],
  uptimerobot: [q('monitors', { metric: 'monitors', label: 'Moniteurs', amount: 50, unit: 'monitor', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked' }), q('interval', { metric: 'interval', label: 'Intervalle de contrôle', amount: 5, unit: 'minute', period: 'total', scope: 'monitor', reset: 'never', overage: 'not-applicable' })],
  vercel: [q('invocations', { metric: 'executions', label: 'Invocations', amount: 1_000_000, unit: 'execution', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked' }), q('bandwidth', { metric: 'bandwidth', label: 'Transfert', amount: 100, unit: 'GB', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked' }), q('build-time', { metric: 'build_time', label: 'Minutes de build', amount: 6_000, unit: 'minute', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked' })],
  'zoho-apptics': [q('projects', { metric: 'projects', label: 'Projets', amount: 1, unit: 'project', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked' }), q('apps', { metric: 'applications', label: 'Applications', amount: 10, unit: 'application', period: 'lifetime', scope: 'project', reset: 'never', overage: 'blocked' }), q('engagements', { metric: 'events', label: 'Engagements', amount: 50_000, unit: 'event', period: 'month', scope: 'project', reset: 'monthly', overage: 'blocked' })],
  'zoho-assist': [q('technicians', { metric: 'users', label: 'Techniciens', amount: 1, unit: 'user', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked' }), q('sessions', { metric: 'parallelism', label: 'Sessions simultanées', amount: 1, unit: 'session', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked' }), q('devices', { metric: 'devices', label: 'Ordinateurs sans surveillance', amount: 5, unit: 'device', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked' })],
  'zoho-catalyst': [q('functions', { metric: 'compute', label: 'Fonctions', amount: 25_000, unit: 'GB-second', period: 'month', scope: 'project', reset: 'monthly', overage: 'billed' }), q('appsail', { metric: 'compute_time', label: 'AppSail', amount: 15, unit: 'GB-hour', period: 'month', scope: 'project', reset: 'monthly', overage: 'billed' })],
  'zoho-mail': [q('users', { metric: 'users', label: 'Utilisateurs', amount: 5, unit: 'user', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked' }), q('storage', { metric: 'storage', label: 'Stockage par boîte mail', amount: 5, unit: 'GB', period: 'lifetime', scope: 'user', reset: 'never', overage: 'blocked' }), q('domains', { metric: 'domains', label: 'Domaines', amount: 1, unit: 'domain', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked' })],
};

const PERIOD_LABELS: Record<QuotaPeriod, string> = { day: 'par jour', week: 'par semaine', month: 'par mois', year: 'par an', total: 'au total', lifetime: 'sans renouvellement', session: 'par session', variable: 'période variable' };
const RESET_LABELS: Record<QuotaReset, string> = { daily: 'Chaque jour', weekly: 'Chaque semaine', monthly: 'Chaque mois', yearly: 'Chaque année', never: 'Aucun', rolling: 'Fenêtre glissante', variable: 'Variable', 'not-applicable': 'Sans objet' };
const OVERAGE_LABELS: Record<QuotaOverage, string> = { billed: 'Facturé', blocked: 'Bloqué au plafond', degraded: 'Accès réduit', 'not-applicable': 'Sans objet', unknown: 'Non documenté' };
const SCOPE_LABELS: Record<string, string> = { account: 'Compte', application: 'Application', cluster: 'Cluster', hub: 'Hub', message: 'Message', model: 'Modèle', monitor: 'Moniteur', namespace: 'Espace de noms', organization: 'Organisation', project: 'Projet', repository: 'Dépôt', service: 'Service', tenant: 'Tenant', user: 'Utilisateur', zone: 'Zone' };
const METRIC_LABELS: Record<string, string> = { applications: 'Applications', bandwidth: 'Transfert de données', build_time: 'Temps de build', compute: 'Calcul', compute_time: 'Temps de calcul', credit: 'Crédit', devices: 'Appareils', executions: 'Exécutions', log_volume: 'Volume de logs', messages: 'Messages', metrics: 'Métriques', notifications: 'Notifications', operations: 'Opérations', parallelism: 'Exécutions simultanées', projects: 'Projets', requests: 'Requêtes', resources: 'Ressources', retention: 'Rétention', storage: 'Stockage', trace_volume: 'Volume de traces', users: 'Utilisateurs' };
const UNIT_LABELS: Record<string, [string, string]> = {
  alarm: ['alarme', 'alarmes'], application: ['application', 'applications'], build: ['build', 'builds'], delivery: ['livraison', 'livraisons'], deployment: ['déploiement', 'déploiements'], device: ['appareil', 'appareils'], domain: ['domaine', 'domaines'], email: ['e-mail', 'e-mails'], event: ['événement', 'événements'], execution: ['exécution', 'exécutions'], hour: ['heure', 'heures'], index: ['index', 'index'], job: ['job', 'jobs'], message: ['message', 'messages'], metric: ['métrique', 'métriques'], minute: ['minute', 'minutes'], monitor: ['moniteur', 'moniteurs'], notification: ['notification', 'notifications'], operation: ['opération', 'opérations'], pipeline: ['pipeline', 'pipelines'], project: ['projet', 'projets'], repository: ['dépôt', 'dépôts'], request: ['requête', 'requêtes'], resource: ['ressource', 'ressources'], row: ['ligne', 'lignes'], run: ['run', 'runs'], second: ['seconde', 'secondes'], server: ['serveur', 'serveurs'], service: ['service', 'services'], session: ['session', 'sessions'], tunnel: ['tunnel', 'tunnels'], user: ['utilisateur', 'utilisateurs'],
};

const NUMBER = new Intl.NumberFormat('fr-FR', { maximumFractionDigits: 2 });
export const formatQuotaAmount = (quota: OfferQuota) => {
  if (quota.kind === 'unlimited') return 'Illimité';
  if (quota.kind === 'unmetered') return 'Non mesuré';
  if (quota.kind === 'free-management') return 'Gestion gratuite';
  if (quota.kind === 'not-published' || quota.amount === null) return 'Non publié';
  const localizedUnit = UNIT_LABELS[quota.unit]?.[quota.amount === 1 ? 0 : 1] ?? quota.unit;
  return `${NUMBER.format(quota.amount)} ${localizedUnit}`;
};
export const formatQuotaPeriod = (quota: OfferQuota) => PERIOD_LABELS[quota.period];
export const formatQuotaReset = (quota: OfferQuota) => RESET_LABELS[quota.reset];
export const formatQuotaOverage = (quota: OfferQuota) => OVERAGE_LABELS[quota.overage];
export const formatQuotaScope = (quota: OfferQuota) => SCOPE_LABELS[quota.scope] ?? quota.scope;
export const formatQuotaMetric = (quota: OfferQuota) => METRIC_LABELS[quota.metric] ?? quota.label;

const STORAGE_FACTORS: Record<string, number> = { MB: 0.001, GB: 1, TB: 1000 };
const TIME_FACTORS: Record<string, number> = { second: 1 / 60, minute: 1, hour: 60 };
export const getComparableQuotaValue = (quota: OfferQuota): number | null => {
  if (quota.kind === 'unlimited' || quota.kind === 'unmetered') return Number.POSITIVE_INFINITY;
  if (quota.amount === null || quota.kind === 'not-published' || quota.kind === 'free-management') return null;
  if (quota.metric === 'storage' || quota.metric === 'bandwidth' || quota.metric === 'log_volume' || quota.metric === 'trace_volume') return quota.amount * (STORAGE_FACTORS[quota.unit] ?? 1);
  if (quota.metric.endsWith('_time') || quota.metric === 'usage_time' || quota.metric === 'retention' || quota.metric === 'interval') return quota.amount * (TIME_FACTORS[quota.unit] ?? 1);
  return quota.amount;
};

export const getQuotaComparisonKey = (quota: OfferQuota) => `${quota.metric}:${quota.period}:${quota.scope}`;
export const getOfferQuotas = (offerId: string) => OFFER_QUOTAS[offerId] ?? [];

export const assertOfferQuotaCoverage = (offerIds: string[]) => {
  const missing = offerIds.filter((id) => !OFFER_QUOTAS[id]?.length);
  if (missing.length) throw new Error(`Couverture des quotas invalide. Offres manquantes : ${missing.join(', ')}.`);
  const invalid = offerIds.flatMap((offerId) => {
    const quotas = OFFER_QUOTAS[offerId] ?? [];
    const duplicateIds = quotas.filter((quota, index) => quotas.findIndex((candidate) => candidate.id === quota.id) !== index).map((quota) => quota.id);
    const errors = quotas.flatMap((quota) => {
      const quotaErrors = [];
      if (!quota.metric.trim() || !quota.unit.trim() || !quota.scope.trim()) quotaErrors.push('métrique, unité ou portée vide');
      if (quota.amount !== null && quota.amount < 0) quotaErrors.push('montant négatif');
      if ((quota.kind === 'limit' || quota.kind === 'credit') && quota.amount === null) quotaErrors.push('limite numérique sans montant');
      return quotaErrors.map((error) => `${offerId}/${quota.id}: ${error}`);
    });
    return [...new Set(duplicateIds)].map((id) => `${offerId}/${id}: identifiant dupliqué`).concat(errors);
  });
  if (invalid.length) throw new Error(`Quotas structurés invalides : ${invalid.join(' ; ')}.`);
};
