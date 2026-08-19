import { OFFER_QUOTAS } from './offer-quotas';

OFFER_QUOTAS["aikido"] ??= [
  { id: "users", metric: "users", label: "Utilisateurs", amount: 2, unit: "user", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "repos", metric: "repositories", label: "Dépôts", amount: 10, unit: "repository", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "containers", metric: "container_images", label: "Images conteneur", amount: 2, unit: "image", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "domains", metric: "domains", label: "Domaines", amount: 1, unit: "domain", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "cloud", metric: "cloud_accounts", label: "Comptes cloud", amount: 1, unit: "account", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "autofix", metric: "autofix", label: "AI AutoFixes", amount: 10, unit: "fix", period: "month", scope: "workspace", reset: "monthly", overage: "blocked", kind: "limit" },
  { id: "protected", metric: "requests", label: "Requêtes protégées", amount: 250000, unit: "request", period: "month", scope: "workspace", reset: "monthly", overage: "blocked", kind: "limit" },
];

OFFER_QUOTAS["certkit"] ??= [
  { id: "certificates", metric: "certificates", label: "Certificats gérés", amount: 2, unit: "certificate", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "agents", metric: "agents", label: "Agents", amount: 1, unit: "agent", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "users", metric: "users", label: "Utilisateurs", amount: 1, unit: "user", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "monitors", metric: "ssl_monitors", label: "Moniteurs SSL", amount: 3, unit: "monitor", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
];

OFFER_QUOTAS["certobserver-ct-search"] ??= [
  { id: "searches", metric: "searches", label: "Recherches CT", amount: null, unit: "search", period: "variable", scope: "service", reset: "variable", overage: "not-applicable", kind: "unmetered" },
];

OFFER_QUOTAS["certpost"] ??= [
  { id: "certificates", metric: "certificates", label: "Certificats surveillés", amount: 3, unit: "certificate", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
];

OFFER_QUOTAS["corgea"] ??= [
  { id: "members", metric: "users", label: "Membres", amount: 2, unit: "user", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "repos", metric: "repositories", label: "Dépôts", amount: 10, unit: "repository", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "pr_scans", metric: "pr_scans", label: "Scans de pull request", amount: 10, unit: "scan", period: "month", scope: "workspace", reset: "monthly", overage: "blocked", kind: "limit" },
];

OFFER_QUOTAS["crypteron"] ??= [
  { id: "availability", metric: "availability", label: "Free Tier permanent", amount: 0, unit: "plan", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
];

OFFER_QUOTAS["cyberchef"] ??= [
  { id: "operations", metric: "operations", label: "Opérations locales", amount: null, unit: "operation", period: "variable", scope: "browser", reset: "variable", overage: "not-applicable", kind: "unmetered" },
];

OFFER_QUOTAS["datree"] ??= [
  { id: "cli", metric: "local_scans", label: "Analyses locales via CLI", amount: null, unit: "scan", period: "variable", scope: "local", reset: "variable", overage: "not-applicable", kind: "unmetered" },
];

OFFER_QUOTAS["dependabot"] ??= [
  { id: "repositories", metric: "repositories", label: "Dépôts éligibles", amount: null, unit: "repository", period: "lifetime", scope: "github", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
];

OFFER_QUOTAS["dj-checkup"] ??= [
  { id: "checks", metric: "checks", label: "Checkups", amount: null, unit: "check", period: "variable", scope: "service", reset: "variable", overage: "unknown", kind: "not-published" },
];

OFFER_QUOTAS["doppler"] ??= [
  { id: "users", metric: "users", label: "Utilisateurs inclus", amount: 3, unit: "user", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "projects", metric: "projects", label: "Projets", amount: 10, unit: "project", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "envs", metric: "environments", label: "Environnements", amount: 4, unit: "environment", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "syncs", metric: "config_syncs", label: "Config Syncs", amount: 5, unit: "sync", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "logs", metric: "log_retention", label: "Rétention des logs", amount: 3, unit: "day", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
];

OFFER_QUOTAS["dotenv"] ??= [
  { id: "secrets", metric: "encrypted_env_values", label: "Valeurs .env chiffrées", amount: null, unit: "value", period: "lifetime", scope: "local", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
];

OFFER_QUOTAS["gitguardian"] ??= [
  { id: "developers", metric: "users", label: "Développeurs", amount: 25, unit: "user", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "historical", metric: "historical_detections", label: "Détections historiques", amount: 500, unit: "detection", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "api", metric: "api_calls", label: "Appels API", amount: 10000, unit: "call", period: "month", scope: "workspace", reset: "monthly", overage: "blocked", kind: "limit" },
];

OFFER_QUOTAS["hasmysecretleaked"] ??= [
  { id: "checks", metric: "checks", label: "Vérifications gratuites", amount: null, unit: "check", period: "variable", scope: "user", reset: "variable", overage: "unknown", kind: "not-published" },
];

OFFER_QUOTAS["have-i-been-pwned"] ??= [
  { id: "password_api", metric: "api_calls", label: "Appels Pwned Passwords", amount: null, unit: "call", period: "variable", scope: "public_api", reset: "variable", overage: "not-applicable", kind: "unmetered" },
];

OFFER_QUOTAS["himitsushell"] ??= [
  { id: "personal_builds", metric: "builds", label: "Compilations personnelles", amount: null, unit: "build", period: "variable", scope: "user", reset: "variable", overage: "not-applicable", kind: "unmetered" },
];

OFFER_QUOTAS["hostedscan"] ??= [
  { id: "free_plan", metric: "availability", label: "Free Tier permanent", amount: 0, unit: "plan", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
];

OFFER_QUOTAS["infisical"] ??= [
  { id: "identities", metric: "identities", label: "Identités", amount: 5, unit: "identity", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "projects", metric: "projects", label: "Projets", amount: null, unit: "project", period: "lifetime", scope: "workspace", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
  { id: "envs", metric: "environments", label: "Environnements", amount: 3, unit: "environment", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "syncs", metric: "secret_syncs", label: "Secret Syncs", amount: 10, unit: "sync", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
];
