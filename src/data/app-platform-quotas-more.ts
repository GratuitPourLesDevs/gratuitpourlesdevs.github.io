import { OFFER_QUOTAS } from './offer-quotas';

OFFER_QUOTAS.encore ??= [
  { id: "dev-environments", metric: "environments", label: "Environnements de développement", amount: 2, unit: "environment", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "trace-events", metric: "events", label: "Événements de trace", amount: 1000000, unit: "event", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "limit" },
  { id: "retention", metric: "retention", label: "Rétention logs et traces", amount: 7, unit: "day", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "build-concurrency", metric: "concurrency", label: "Build concurrent", amount: 1, unit: "build", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
];

OFFER_QUOTAS.flightcontrol ??= [
  { id: "users", metric: "users", label: "Utilisateur", amount: 1, unit: "user", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "projects", metric: "projects", label: "Projets", amount: null, unit: "project", period: "lifetime", scope: "account", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
  { id: "environments", metric: "environments", label: "Environnements", amount: null, unit: "environment", period: "lifetime", scope: "account", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
  { id: "deployments", metric: "deployments", label: "Déploiements", amount: null, unit: "deployment", period: "lifetime", scope: "account", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
  { id: "aws", metric: "management", label: "Couche de déploiement Flightcontrol", amount: null, unit: "service", period: "lifetime", scope: "account", reset: "not-applicable", overage: "billed", kind: "free-management", notes: "Les ressources AWS sont facturées directement sur le compte AWS du client." },
];

OFFER_QUOTAS.gigalixir ??= [
  { id: "replicas", metric: "compute", label: "Replica d'application", amount: 1, unit: "replica", period: "lifetime", scope: "app", reset: "never", overage: "blocked", kind: "limit" },
  { id: "memory", metric: "memory", label: "Mémoire du replica", amount: 0.5, unit: "GB", period: "lifetime", scope: "app", reset: "never", overage: "blocked", kind: "limit" },
  { id: "database", metric: "databases", label: "Base PostgreSQL gratuite", amount: 1, unit: "database", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "rows", metric: "database_rows", label: "Lignes PostgreSQL", amount: 10000, unit: "row", period: "lifetime", scope: "database", reset: "never", overage: "blocked", kind: "limit" },
  { id: "connections", metric: "database_connections", label: "Connexions PostgreSQL", amount: 2, unit: "connection", period: "lifetime", scope: "database", reset: "never", overage: "blocked", kind: "limit" },
  { id: "backups", metric: "backups", label: "Sauvegardes incluses", amount: 0, unit: "backup", period: "lifetime", scope: "database", reset: "never", overage: "blocked", kind: "limit" },
];

OFFER_QUOTAS.northflank ??= [
  { id: "services", metric: "services", label: "Services", amount: 2, unit: "service", period: "lifetime", scope: "workspace", reset: "never", overage: "blocked", kind: "limit" },
  { id: "jobs", metric: "scheduled_jobs", label: "Jobs", amount: 2, unit: "job", period: "lifetime", scope: "workspace", reset: "never", overage: "blocked", kind: "limit" },
  { id: "addon", metric: "databases", label: "Addon ou base managée", amount: 1, unit: "addon", period: "lifetime", scope: "workspace", reset: "never", overage: "blocked", kind: "limit" },
];

OFFER_QUOTAS.ownkube ??= [
  { id: "platform", metric: "management", label: "Gestion k3s Ownkube", amount: null, unit: "service", period: "lifetime", scope: "account", reset: "not-applicable", overage: "billed", kind: "free-management", notes: "La couche Ownkube k3s est gratuite pour petits projets ; les ressources AWS restent facturées sur le compte utilisateur." },
  { id: "aws", metric: "infrastructure", label: "Coûts AWS sous-jacents", amount: null, unit: "resource", period: "variable", scope: "aws-account", reset: "variable", overage: "billed", kind: "not-published" },
];

OFFER_QUOTAS.pipedream ??= [
  { id: "credits", metric: "credit", label: "Crédits quotidiens du plan Free", amount: null, unit: "credit", period: "day", scope: "account", reset: "daily", overage: "blocked", kind: "not-published", notes: "Pipedream publie le principe du plafond quotidien mais pas un montant fixe universel sur la documentation actuelle." },
  { id: "execution-time", metric: "execution_time", label: "Durée maximale d’une exécution", amount: 300, unit: "second", period: "session", scope: "execution", reset: "not-applicable", overage: "blocked", kind: "limit" },
  { id: "active-workflows", metric: "workflows", label: "Workflows actifs", amount: null, unit: "workflow", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "not-published", notes: "Le plan Free limite les workflows actifs ; le chiffre dépend de la grille/du compte." },
];

OFFER_QUOTAS.pythonanywhere ??= [
  { id: "webapp", metric: "applications", label: "Application web", amount: 1, unit: "application", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "worker", metric: "workers", label: "Worker", amount: 1, unit: "worker", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "storage", metric: "storage", label: "Stockage privé", amount: 512, unit: "MiB", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "consoles", metric: "consoles", label: "Consoles", amount: 2, unit: "console", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "cpu", metric: "compute_time", label: "CPU", amount: 100, unit: "second", period: "day", scope: "account", reset: "daily", overage: "blocked", kind: "limit" },
];

OFFER_QUOTAS.runsite ??= [
  { id: "web", metric: "services", label: "Service web", amount: 1, unit: "service", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "cpu", metric: "compute", label: "CPU web", amount: 0.1, unit: "vCPU", period: "lifetime", scope: "service", reset: "never", overage: "blocked", kind: "limit" },
  { id: "memory", metric: "memory", label: "Mémoire web", amount: 256, unit: "MB", period: "lifetime", scope: "service", reset: "never", overage: "blocked", kind: "limit" },
  { id: "disk", metric: "storage", label: "Disque web", amount: 1, unit: "GB", period: "lifetime", scope: "service", reset: "never", overage: "blocked", kind: "limit" },
  { id: "bandwidth", metric: "bandwidth", label: "Bande passante web", amount: 100, unit: "GB", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "limit" },
  { id: "postgres", metric: "databases", label: "PostgreSQL", amount: 1, unit: "database", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "postgres-memory", metric: "memory", label: "Mémoire PostgreSQL", amount: 256, unit: "MB", period: "lifetime", scope: "database", reset: "never", overage: "blocked", kind: "limit" },
  { id: "postgres-storage", metric: "storage", label: "Stockage PostgreSQL", amount: 1, unit: "GB", period: "lifetime", scope: "database", reset: "never", overage: "blocked", kind: "limit" },
  { id: "postgres-connections", metric: "database_connections", label: "Connexions PostgreSQL", amount: 25, unit: "connection", period: "lifetime", scope: "database", reset: "never", overage: "blocked", kind: "limit" },
  { id: "redis", metric: "databases", label: "Valkey/Redis", amount: 1, unit: "database", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "redis-storage", metric: "storage", label: "Mémoire Valkey/Redis", amount: 50, unit: "MB", period: "lifetime", scope: "database", reset: "never", overage: "blocked", kind: "limit" },
  { id: "redis-connections", metric: "database_connections", label: "Connexions Valkey/Redis", amount: 50, unit: "connection", period: "lifetime", scope: "database", reset: "never", overage: "blocked", kind: "limit" },
  { id: "s3", metric: "storage", label: "Stockage objet S3", amount: 5, unit: "GB", period: "lifetime", scope: "account", reset: "never", overage: "billed", kind: "limit" },
  { id: "emails", metric: "emails", label: "E-mails transactionnels", amount: 3000, unit: "email", period: "month", scope: "account", reset: "monthly", overage: "billed", kind: "limit" },
];

OFFER_QUOTAS["val-town"] ??= [
  { id: "runs", metric: "executions", label: "Exécutions", amount: 100000, unit: "run", period: "day", scope: "account", reset: "daily", overage: "blocked", kind: "limit" },
  { id: "public-vals", metric: "functions", label: "Vals publics", amount: null, unit: "val", period: "lifetime", scope: "account", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
  { id: "cron", metric: "schedule_interval", label: "Intervalle cron minimal", amount: 15, unit: "minute", period: "session", scope: "val", reset: "not-applicable", overage: "blocked", kind: "limit" },
  { id: "runtime", metric: "execution_time", label: "Durée maximale par run", amount: 1, unit: "minute", period: "session", scope: "execution", reset: "not-applicable", overage: "blocked", kind: "limit" },
  { id: "logs", metric: "retention", label: "Rétention des logs", amount: 3, unit: "day", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "custom-domains", metric: "domains", label: "Domaines personnalisés", amount: 0, unit: "domain", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
];

OFFER_QUOTAS["wundergraph-cloud"] ??= [
  { id: "projects", metric: "projects", label: "Projets historiques", amount: 3, unit: "project", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit", notes: "Ancien quota WunderGraph Cloud, conservé à titre historique." },
  { id: "egress", metric: "bandwidth", label: "Egress historique", amount: 1, unit: "GB", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "limit", notes: "Ancien quota WunderGraph Cloud." },
  { id: "build-minutes", metric: "build_time", label: "Minutes de build historiques", amount: 300, unit: "minute", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "limit", notes: "Ancien quota WunderGraph Cloud ; le produit a été remplacé par la gamme actuelle Cosmo." },
];

OFFER_QUOTAS.yepcode ??= [
  { id: "yeps", metric: "execution_time", label: "Yeps", amount: 50000, unit: "second", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "limit" },
  { id: "executions", metric: "executions", label: "Exécutions quotidiennes", amount: 300, unit: "execution", period: "day", scope: "account", reset: "daily", overage: "blocked", kind: "limit" },
  { id: "runtime", metric: "execution_time", label: "Durée maximale par exécution", amount: 30, unit: "second", period: "session", scope: "execution", reset: "not-applicable", overage: "blocked", kind: "limit" },
  { id: "concurrency", metric: "concurrency", label: "Exécution concurrente", amount: 1, unit: "execution", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "members", metric: "users", label: "Membre d'équipe", amount: 1, unit: "user", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "history", metric: "retention", label: "Historique", amount: 3, unit: "day", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "files", metric: "files", label: "Fichiers de stockage", amount: 5, unit: "file", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "file-size", metric: "file_size", label: "Taille maximale par fichier", amount: 5, unit: "MB", period: "lifetime", scope: "file", reset: "never", overage: "blocked", kind: "limit" },
  { id: "disk", metric: "storage", label: "Disque local", amount: 5, unit: "MB", period: "lifetime", scope: "execution", reset: "never", overage: "blocked", kind: "limit" },
];
