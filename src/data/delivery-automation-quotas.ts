import { OFFER_QUOTAS } from './offer-quotas';

OFFER_QUOTAS['appcircle'] ??= [
  { id: 'builds', metric: 'builds', label: 'Builds', amount: 20, unit: 'build', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
  { id: 'build-duration', metric: 'build_duration', label: 'Durée maximale par build', amount: 30, unit: 'minute', period: 'session', scope: 'build', reset: 'not-applicable', overage: 'blocked', kind: 'limit' },
  { id: 'concurrency', metric: 'concurrency', label: 'Builds concurrents', amount: 1, unit: 'build', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'store-publishes', metric: 'store_publishes', label: 'Publications vers les stores', amount: 5, unit: 'publish', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['appveyor'] ??= [
  { id: 'public-projects', metric: 'projects', label: 'Projets publics open source', amount: null, unit: 'project', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' },
  { id: 'concurrency', metric: 'concurrency', label: 'Jobs concurrents', amount: 1, unit: 'job', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'self-hosted', metric: 'self_hosted_jobs', label: 'Jobs auto-hébergés', amount: 5, unit: 'job', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'job-duration', metric: 'job_duration', label: 'Durée maximale d’un job', amount: 60, unit: 'minute', period: 'session', scope: 'job', reset: 'not-applicable', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['bitrise'] ??= [
  { id: 'credits', metric: 'credits', label: 'Crédits', amount: 300, unit: 'credit', period: 'month', scope: 'workspace', reset: 'monthly', overage: 'blocked', kind: 'credit' },
  { id: 'private-apps', metric: 'applications_private', label: 'Applications privées', amount: 1, unit: 'application', period: 'lifetime', scope: 'workspace', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'members', metric: 'users', label: 'Membres d’équipe', amount: 1, unit: 'user', period: 'lifetime', scope: 'workspace', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'concurrency', metric: 'concurrency', label: 'Builds concurrents', amount: 5, unit: 'build', period: 'lifetime', scope: 'workspace', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'build-duration', metric: 'build_duration', label: 'Durée maximale par build', amount: 90, unit: 'minute', period: 'session', scope: 'build', reset: 'not-applicable', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['buddy'] ??= [
  { id: 'seats', metric: 'users', label: 'Sièges', amount: 1, unit: 'user', period: 'lifetime', scope: 'workspace', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'concurrency', metric: 'concurrency', label: 'Exécutions concurrentes', amount: 1, unit: 'run', period: 'lifetime', scope: 'workspace', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'pipeline-gb-minutes', metric: 'pipeline_compute', label: 'Pipeline GB-minutes', amount: 300, unit: 'GB-minute', period: 'month', scope: 'workspace', reset: 'monthly', overage: 'blocked', kind: 'limit' },
  { id: 'pipeline-cache', metric: 'cache_storage', label: 'Cache de pipeline', amount: 1, unit: 'GB', period: 'lifetime', scope: 'workspace', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'sandbox-cpu', metric: 'sandbox_compute', label: 'Sandbox CPU-minutes', amount: 300, unit: 'CPU-minute', period: 'month', scope: 'workspace', reset: 'monthly', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['buildkite'] ??= [
  { id: 'users', metric: 'users', label: 'Utilisateurs', amount: 1, unit: 'user', period: 'lifetime', scope: 'organization', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'concurrency', metric: 'concurrency', label: 'Jobs concurrents', amount: 3, unit: 'job', period: 'lifetime', scope: 'organization', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'linux-vcpu', metric: 'compute_time', label: 'Linux vCPU-minutes hébergées', amount: 500, unit: 'vCPU-minute', period: 'month', scope: 'organization', reset: 'monthly', overage: 'blocked', kind: 'limit' },
  { id: 'test-executions', metric: 'test_executions', label: 'Exécutions de tests', amount: 50000, unit: 'test', period: 'month', scope: 'organization', reset: 'monthly', overage: 'blocked', kind: 'limit' },
  { id: 'retention', metric: 'history', label: 'Rétention', amount: 90, unit: 'day', period: 'lifetime', scope: 'organization', reset: 'never', overage: 'degraded', kind: 'limit' },
];

OFFER_QUOTAS['bytebase'] ??= [
  { id: 'users', metric: 'users', label: 'Utilisateurs', amount: 20, unit: 'user', period: 'lifetime', scope: 'workspace', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'database-instances', metric: 'database_instances', label: 'Instances de base de données', amount: 10, unit: 'instance', period: 'lifetime', scope: 'workspace', reset: 'never', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['circleci'] ??= [
  { id: 'credits', metric: 'credits', label: 'Crédits généraux', amount: 30000, unit: 'credit', period: 'month', scope: 'organization', reset: 'monthly', overage: 'blocked', kind: 'credit' },
  { id: 'small-docker-minutes', metric: 'compute_time', label: 'Minutes équivalentes Small Docker', amount: 6000, unit: 'minute', period: 'month', scope: 'organization', reset: 'monthly', overage: 'blocked', kind: 'limit', notes: 'Équivalence annoncée pour une petite classe Docker ; les autres classes consomment les crédits à des rythmes différents.' },
  { id: 'users', metric: 'users', label: 'Utilisateurs actifs inclus', amount: 5, unit: 'user', period: 'month', scope: 'organization', reset: 'monthly', overage: 'blocked', kind: 'limit' },
  { id: 'concurrency', metric: 'concurrency', label: 'Jobs concurrents', amount: 30, unit: 'job', period: 'lifetime', scope: 'organization', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'oss-credits', metric: 'credits_oss', label: 'Crédits open source Linux/Arm/Docker', amount: 400000, unit: 'credit', period: 'month', scope: 'organization', reset: 'monthly', overage: 'blocked', kind: 'credit' },
];

OFFER_QUOTAS['cirun'] ??= [
  { id: 'public-repos', metric: 'repositories', label: 'Dépôts publics', amount: null, unit: 'repository', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' },
  { id: 'runners', metric: 'runners', label: 'Runners Cirun', amount: null, unit: 'runner', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited', notes: 'La plateforme Cirun est gratuite pour l’open source ; le compute cloud sous-jacent reste facturé par le fournisseur.' },
];

OFFER_QUOTAS['codemagic'] ??= [
  { id: 'macos-minutes', metric: 'compute_time', label: 'Minutes macOS M2', amount: 500, unit: 'minute', period: 'month', scope: 'personal-account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
  { id: 'users', metric: 'users', label: 'Utilisateurs du compte personnel', amount: 1, unit: 'user', period: 'lifetime', scope: 'personal-account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'concurrency', metric: 'concurrency', label: 'Builds concurrents', amount: 1, unit: 'build', period: 'lifetime', scope: 'personal-account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'build-duration', metric: 'build_duration', label: 'Durée maximale par build', amount: 120, unit: 'minute', period: 'session', scope: 'build', reset: 'not-applicable', overage: 'blocked', kind: 'limit' },
  { id: 'history', metric: 'history', label: 'Historique et artefacts', amount: 30, unit: 'day', period: 'lifetime', scope: 'personal-account', reset: 'never', overage: 'degraded', kind: 'limit' },
];

OFFER_QUOTAS['deployhq'] ??= [
  { id: 'projects', metric: 'projects', label: 'Projets', amount: 1, unit: 'project', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'deployments', metric: 'deployments', label: 'Déploiements', amount: 3, unit: 'deployment', period: 'day', scope: 'account', reset: 'daily', overage: 'blocked', kind: 'limit' },
  { id: 'servers', metric: 'servers', label: 'Serveurs', amount: 5, unit: 'server', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'build-minutes', metric: 'compute_time', label: 'Minutes de build', amount: 30, unit: 'minute', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
  { id: 'concurrency', metric: 'concurrency', label: 'Déploiements concurrents', amount: 1, unit: 'deployment', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['localops'] ??= [
  { id: 'vcpu', metric: 'managed_vcpu', label: 'vCPU gérés gratuitement', amount: 12, unit: 'vCPU', period: 'month', scope: 'account', reset: 'monthly', overage: 'billed', kind: 'limit' },
  { id: 'memory', metric: 'managed_memory', label: 'RAM gérée gratuitement', amount: 24, unit: 'GB', period: 'month', scope: 'account', reset: 'monthly', overage: 'billed', kind: 'limit' },
  { id: 'users', metric: 'users', label: 'Utilisateurs', amount: null, unit: 'user', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' },
];

OFFER_QUOTAS['make'] ??= [
  { id: 'credits', metric: 'credits', label: 'Crédits', amount: 1000, unit: 'credit', period: 'month', scope: 'organization', reset: 'monthly', overage: 'blocked', kind: 'credit' },
  { id: 'active-scenarios', metric: 'scenarios', label: 'Scénarios actifs', amount: 2, unit: 'scenario', period: 'lifetime', scope: 'organization', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'schedule-interval', metric: 'schedule_interval', label: 'Intervalle minimal', amount: 15, unit: 'minute', period: 'session', scope: 'scenario', reset: 'not-applicable', overage: 'degraded', kind: 'limit' },
  { id: 'data-transfer', metric: 'data_transfer', label: 'Transfert de données', amount: 512, unit: 'MB', period: 'month', scope: 'organization', reset: 'monthly', overage: 'blocked', kind: 'limit' },
  { id: 'data-store', metric: 'storage', label: 'Stockage data store', amount: 1, unit: 'MB', period: 'lifetime', scope: 'organization', reset: 'never', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['mergify'] ??= [
  { id: 'private-users', metric: 'users', label: 'Contributeurs actifs sur dépôts privés', amount: 5, unit: 'user', period: 'month', scope: 'organization', reset: 'rolling', overage: 'blocked', kind: 'limit' },
  { id: 'oss-users', metric: 'users_oss', label: 'Utilisateurs open source', amount: null, unit: 'user', period: 'lifetime', scope: 'organization', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' },
  { id: 'retention', metric: 'history', label: 'Rétention CI/Test Insights', amount: 24, unit: 'hour', period: 'lifetime', scope: 'organization', reset: 'never', overage: 'degraded', kind: 'limit' },
];

OFFER_QUOTAS['nx-cloud'] ??= [
  { id: 'credits', metric: 'credits', label: 'Crédits', amount: 50000, unit: 'credit', period: 'month', scope: 'organization', reset: 'monthly', overage: 'blocked', kind: 'credit' },
  { id: 'contributors', metric: 'contributors', label: 'Contributeurs', amount: 5, unit: 'user', period: 'month', scope: 'organization', reset: 'monthly', overage: 'blocked', kind: 'limit' },
  { id: 'connections', metric: 'concurrency', label: 'Connexions CI concurrentes', amount: 10, unit: 'connection', period: 'lifetime', scope: 'organization', reset: 'never', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['runmyjob'] ??= [
  { id: 'vcpu-minutes', metric: 'compute_time', label: 'vCPU-minutes', amount: 400, unit: 'vCPU-minute', period: 'month', scope: 'account', reset: 'monthly', overage: 'billed', kind: 'limit' },
  { id: 'memory-minutes', metric: 'memory_time', label: 'GB-minutes mémoire', amount: 800, unit: 'GB-minute', period: 'month', scope: 'account', reset: 'monthly', overage: 'billed', kind: 'limit' },
  { id: 'concurrency', metric: 'concurrency', label: 'Jobs concurrents', amount: 10, unit: 'job', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'vcpu-per-job', metric: 'vcpu_per_job', label: 'vCPU par job', amount: 12, unit: 'vCPU', period: 'session', scope: 'job', reset: 'not-applicable', overage: 'blocked', kind: 'limit' },
  { id: 'memory-per-job', metric: 'memory_per_job', label: 'RAM par job', amount: 32, unit: 'GB', period: 'session', scope: 'job', reset: 'not-applicable', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['shipfox'] ??= [
  { id: 'free-usage', metric: 'compute_time', label: 'Quota gratuit actuel', amount: null, unit: 'minute', period: 'variable', scope: 'organization', reset: 'variable', overage: 'unknown', kind: 'not-published', notes: 'L’ancienne page de pricing n’existe plus ; les 3000 minutes gratuites historiques ne sont pas confirmées en 2026.' },
];

OFFER_QUOTAS['spacelift'] ??= [
  { id: 'users', metric: 'users', label: 'Utilisateurs', amount: 2, unit: 'user', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'public-workers', metric: 'workers', label: 'Workers publics', amount: 1, unit: 'worker', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'compute-time', metric: 'compute_time', label: 'Quota de compute public', amount: null, unit: 'minute', period: 'variable', scope: 'account', reset: 'variable', overage: 'unknown', kind: 'not-published', notes: 'La tarification actuelle ne republie plus l’ancien quota de 200 minutes par mois.' },
];

OFFER_QUOTAS['squash-labs'] ??= [
  { id: 'repositories', metric: 'repositories', label: 'Dépôts publics et privés', amount: null, unit: 'repository', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' },
  { id: 'users', metric: 'users', label: 'Utilisateurs', amount: null, unit: 'user', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' },
  { id: 'concurrency', metric: 'concurrency', label: 'Environnements concurrents', amount: 2, unit: 'environment', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'vm-hours', metric: 'compute_time', label: 'VM-heures sur taille 1 Go', amount: 30, unit: 'hour', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit', notes: 'Avec la taille 2 Go, l’allocation équivaut à 15 heures par mois.' },
  { id: 'vm-size', metric: 'memory', label: 'Taille maximale de VM', amount: 2, unit: 'GB', period: 'session', scope: 'environment', reset: 'not-applicable', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['terramate'] ??= [
  { id: 'users', metric: 'users', label: 'Utilisateurs', amount: 2, unit: 'user', period: 'lifetime', scope: 'organization', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'resources', metric: 'resources', label: 'Ressources gérées', amount: 1000, unit: 'resource', period: 'lifetime', scope: 'organization', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'retention', metric: 'history', label: 'Rétention', amount: 30, unit: 'day', period: 'lifetime', scope: 'organization', reset: 'never', overage: 'degraded', kind: 'limit' },
  { id: 'concurrency', metric: 'concurrency', label: 'Concurrence / runners', amount: null, unit: 'runner', period: 'lifetime', scope: 'organization', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' },
];

OFFER_QUOTAS['terrateam'] ??= [
  { id: 'runs', metric: 'runs', label: 'Runs', amount: 50, unit: 'run', period: 'variable', scope: 'organization', reset: 'rolling', overage: 'blocked', kind: 'limit', notes: 'Fenêtre glissante de 30 jours.' },
  { id: 'users', metric: 'users', label: 'Utilisateurs', amount: 3, unit: 'user', period: 'lifetime', scope: 'organization', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'private-runners', metric: 'runners', label: 'Runners privés', amount: 1, unit: 'runner', period: 'lifetime', scope: 'organization', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'audit-retention', metric: 'history', label: 'Rétention d’audit', amount: 30, unit: 'day', period: 'lifetime', scope: 'organization', reset: 'never', overage: 'degraded', kind: 'limit' },
];

OFFER_QUOTAS['trigger-dev'] ??= [
  { id: 'credits', metric: 'credits_usd', label: 'Crédits compute', amount: 5, unit: 'USD', period: 'month', scope: 'organization', reset: 'monthly', overage: 'blocked', kind: 'credit' },
  { id: 'concurrency', metric: 'concurrency', label: 'Runs concurrents en production', amount: 20, unit: 'run', period: 'lifetime', scope: 'environment', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'tasks', metric: 'tasks', label: 'Tâches', amount: null, unit: 'task', period: 'lifetime', scope: 'organization', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' },
  { id: 'members', metric: 'users', label: 'Membres d’équipe', amount: 5, unit: 'user', period: 'lifetime', scope: 'organization', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'schedules', metric: 'schedules', label: 'Schedules', amount: 10, unit: 'schedule', period: 'lifetime', scope: 'project', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'logs', metric: 'history', label: 'Rétention des logs', amount: 1, unit: 'day', period: 'lifetime', scope: 'project', reset: 'never', overage: 'degraded', kind: 'limit' },
];
