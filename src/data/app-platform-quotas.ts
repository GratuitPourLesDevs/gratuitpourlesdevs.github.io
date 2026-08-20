import { OFFER_QUOTAS } from './offer-quotas';

OFFER_QUOTAS.ampt ??= [
  { id: "sandbox", metric: "environments", label: "Sandbox développeur", amount: 1, unit: "environment", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "stage", metric: "environments", label: "Stage permanent auto-pausable", amount: 1, unit: "environment", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "resource-quotas", metric: "usage", label: "Quotas de ressources Preview", amount: null, unit: "various", period: "variable", scope: "account", reset: "variable", overage: "unknown", kind: "not-published", notes: "Les anciens plafonds d'invocations ne sont plus publiés sur la grille actuelle." },
];

OFFER_QUOTAS.anvil ??= [
  { id: "apps", metric: "applications", label: "Applications", amount: null, unit: "application", period: "lifetime", scope: "account", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
  { id: "timeout", metric: "execution_time", label: "Timeout serveur", amount: 30, unit: "second", period: "session", scope: "execution", reset: "not-applicable", overage: "blocked", kind: "limit" },
  { id: "rows", metric: "database_rows", label: "Lignes Data Tables", amount: 50000, unit: "row", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "storage", metric: "storage", label: "Stockage Data Tables", amount: 100, unit: "MB", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
];

OFFER_QUOTAS["apply-build"] ??= [
  { id: "cpu", metric: "compute", label: "CPU", amount: 0.5, unit: "vCPU", period: "lifetime", scope: "service", reset: "never", overage: "blocked", kind: "limit" },
  { id: "memory", metric: "memory", label: "Mémoire", amount: 512, unit: "MiB", period: "lifetime", scope: "service", reset: "never", overage: "blocked", kind: "limit" },
  { id: "disk", metric: "storage", label: "Disque éphémère", amount: 5, unit: "GB", period: "lifetime", scope: "service", reset: "never", overage: "blocked", kind: "limit" },
  { id: "egress-rate", metric: "bandwidth", label: "Débit sortant", amount: 5, unit: "MB/s", period: "lifetime", scope: "service", reset: "never", overage: "blocked", kind: "limit" },
];

OFFER_QUOTAS.appwrite ??= [
  { id: "projects", metric: "projects", label: "Projets", amount: 2, unit: "project", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "bandwidth", metric: "bandwidth", label: "Bande passante", amount: 5, unit: "GB", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "limit" },
  { id: "storage", metric: "storage", label: "Stockage", amount: 2, unit: "GB", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "executions", metric: "executions", label: "Exécutions Functions", amount: 750000, unit: "execution", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "limit" },
  { id: "mau", metric: "active_users", label: "Utilisateurs actifs mensuels", amount: 75000, unit: "user", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "limit" },
  { id: "databases", metric: "databases", label: "Bases par projet", amount: 1, unit: "database", period: "lifetime", scope: "project", reset: "never", overage: "blocked", kind: "limit" },
  { id: "buckets", metric: "buckets", label: "Buckets par projet", amount: 1, unit: "bucket", period: "lifetime", scope: "project", reset: "never", overage: "blocked", kind: "limit" },
  { id: "functions", metric: "functions", label: "Functions par projet", amount: 2, unit: "function", period: "lifetime", scope: "project", reset: "never", overage: "blocked", kind: "limit" },
];

OFFER_QUOTAS["clever-cloud"] ??= [
  { id: "signup-credit", metric: "credit", label: "Crédit à l'inscription", amount: 20, unit: "EUR", period: "total", scope: "account", reset: "never", overage: "billed", kind: "credit", notes: "Crédit ponctuel d'inscription." },
  { id: "postgres-dev", metric: "database", label: "PostgreSQL DEV", amount: 1, unit: "plan", period: "lifetime", scope: "service", reset: "not-applicable", overage: "not-applicable", kind: "free-management", notes: "Plan DEV gratuit destiné au test, sans SLA ni support garanti." },
  { id: "mysql-dev", metric: "database", label: "MySQL DEV", amount: 1, unit: "plan", period: "lifetime", scope: "service", reset: "not-applicable", overage: "not-applicable", kind: "free-management", notes: "Plan DEV gratuit destiné au test, sans SLA ni support garanti." },
];

OFFER_QUOTAS.choreo ??= [
  { id: "components", metric: "components", label: "Composants", amount: 5, unit: "component", period: "lifetime", scope: "organization", reset: "never", overage: "billed", kind: "limit" },
  { id: "credits", metric: "credit", label: "Crédits data plane", amount: 100, unit: "USD", period: "month", scope: "organization", reset: "monthly", overage: "billed", kind: "credit" },
  { id: "developers", metric: "users", label: "Développeurs", amount: 2, unit: "user", period: "lifetime", scope: "organization", reset: "never", overage: "blocked", kind: "limit" },
  { id: "projects", metric: "projects", label: "Projets", amount: null, unit: "project", period: "lifetime", scope: "organization", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
];

OFFER_QUOTAS["codename-one"] ??= [
  { id: "build-credits", metric: "build_credits", label: "Crédits de build", amount: 100, unit: "credit", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "credit" },
  { id: "jar-size", metric: "artifact_size", label: "Taille maximale du JAR utilisateur", amount: 8.5, unit: "MB", period: "lifetime", scope: "build", reset: "never", overage: "blocked", kind: "limit" },
  { id: "apps", metric: "applications", label: "Applications commerciales", amount: null, unit: "application", period: "lifetime", scope: "account", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
];

OFFER_QUOTAS.cohesivity ??= [
  { id: "projects", metric: "projects", label: "Projets rapportés", amount: 10, unit: "project", period: "lifetime", scope: "account", reset: "never", overage: "unknown", kind: "limit", notes: "Chiffre rapporté par le référentiel free-for.dev ; grille consolidée fournisseur non publiée." },
  { id: "edge-requests", metric: "requests", label: "Requêtes edge rapportées", amount: 100000, unit: "request", period: "month", scope: "account", reset: "monthly", overage: "unknown", kind: "limit", notes: "Périodicité et plafond à reconfirmer auprès du fournisseur." },
  { id: "object-storage", metric: "storage", label: "Stockage objet rapporté", amount: 10, unit: "GB", period: "lifetime", scope: "account", reset: "never", overage: "unknown", kind: "limit" },
  { id: "emails", metric: "emails", label: "E-mails rapportés", amount: 100, unit: "email", period: "month", scope: "account", reset: "monthly", overage: "unknown", kind: "limit", notes: "Périodicité à reconfirmer auprès du fournisseur." },
  { id: "ai-credit", metric: "credit", label: "Crédit IA et recherche rapporté", amount: 5, unit: "USD", period: "month", scope: "account", reset: "monthly", overage: "unknown", kind: "credit" },
];

OFFER_QUOTAS.daestro ??= [
  { id: "concurrent-jobs", metric: "concurrency", label: "Jobs concurrents", amount: 10, unit: "job", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "compute-spawns", metric: "compute", label: "Compute spawns", amount: 2, unit: "spawn", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "cloud-provider", metric: "providers", label: "Fournisseur cloud", amount: 1, unit: "provider", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "registry", metric: "registries", label: "Authentification de registry", amount: 1, unit: "registry", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "cron", metric: "scheduled_jobs", label: "Cron job", amount: 1, unit: "job", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "logs-metrics", metric: "storage", label: "Logs et métriques", amount: 500, unit: "MB", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "retention", metric: "retention", label: "Rétention logs", amount: 1, unit: "day", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
];

OFFER_QUOTAS["deno-deploy"] ??= [
  { id: "requests", metric: "requests", label: "Requêtes", amount: 1000000, unit: "request", period: "month", scope: "organization", reset: "monthly", overage: "blocked", kind: "limit" },
  { id: "egress", metric: "bandwidth", label: "Egress", amount: 20, unit: "GB", period: "month", scope: "organization", reset: "monthly", overage: "blocked", kind: "limit" },
  { id: "apps", metric: "applications", label: "Applications", amount: 20, unit: "application", period: "lifetime", scope: "organization", reset: "never", overage: "blocked", kind: "limit" },
  { id: "domains", metric: "domains", label: "Domaines personnalisés", amount: 50, unit: "domain", period: "lifetime", scope: "organization", reset: "never", overage: "blocked", kind: "limit" },
  { id: "cpu", metric: "compute_time", label: "Temps CPU", amount: 15, unit: "hour", period: "month", scope: "organization", reset: "monthly", overage: "blocked", kind: "limit" },
  { id: "memory", metric: "memory_time", label: "Mémoire", amount: 350, unit: "GB-hour", period: "month", scope: "organization", reset: "monthly", overage: "blocked", kind: "limit" },
  { id: "members", metric: "users", label: "Membres d'équipe", amount: 5, unit: "user", period: "lifetime", scope: "organization", reset: "never", overage: "blocked", kind: "limit" },
  { id: "volume", metric: "storage", label: "Volume", amount: 1, unit: "GiB", period: "lifetime", scope: "organization", reset: "never", overage: "blocked", kind: "limit" },
  { id: "kv-storage", metric: "storage", label: "Deno KV", amount: 1, unit: "GiB", period: "lifetime", scope: "organization", reset: "never", overage: "blocked", kind: "limit" },
  { id: "kv-reads", metric: "database_reads", label: "Lectures KV", amount: 450000, unit: "read", period: "month", scope: "organization", reset: "monthly", overage: "blocked", kind: "limit" },
  { id: "kv-writes", metric: "database_writes", label: "Écritures KV", amount: 300000, unit: "write", period: "month", scope: "organization", reset: "monthly", overage: "blocked", kind: "limit" },
  { id: "logs", metric: "retention", label: "Rétention des logs", amount: 1, unit: "day", period: "lifetime", scope: "organization", reset: "never", overage: "blocked", kind: "limit" },
];

OFFER_QUOTAS.domcloud ??= [
  { id: "websites", metric: "applications", label: "Sites web", amount: 3, unit: "website", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "storage", metric: "storage", label: "Stockage", amount: 1.5, unit: "GB", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "outbound", metric: "bandwidth", label: "Trafic sortant", amount: 2, unit: "GB", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "limit" },
];
