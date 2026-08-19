import { OFFER_QUOTAS } from './offer-quotas';

OFFER_QUOTAS["logto"] ??= [
  { id: "maus", metric: "monthly_active_users", label: "MAU", amount: 50000, unit: "user", period: "month", scope: "tenant", reset: "monthly", overage: "blocked", kind: "limit" },
  { id: "access-tokens", metric: "access_tokens", label: "Access tokens", amount: 50000, unit: "token", period: "month", scope: "tenant", reset: "monthly", overage: "blocked", kind: "limit" },
  { id: "applications", metric: "applications", label: "Applications", amount: 3, unit: "application", period: "lifetime", scope: "tenant", reset: "never", overage: "blocked", kind: "limit" },
  { id: "m2m-applications", metric: "m2m_applications", label: "Applications M2M", amount: 1, unit: "application", period: "lifetime", scope: "tenant", reset: "never", overage: "blocked", kind: "limit" },
];

OFFER_QUOTAS["mojoauth"] ??= [
  { id: "maus", metric: "monthly_active_users", label: "MAU", amount: 25000, unit: "user", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "limit", notes: "Valeur affichée sur la page pricing ; une FAQ secondaire conserve une ancienne limite plus basse." },
  { id: "registered-users", metric: "registered_users", label: "Utilisateurs enregistrés", amount: null, unit: "user", period: "variable", scope: "account", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
];

OFFER_QUOTAS["okta"] ??= [
  { id: "active-users", metric: "active_users", label: "Utilisateurs actifs", amount: 10, unit: "user", period: "lifetime", scope: "organization", reset: "never", overage: "blocked", kind: "limit" },
  { id: "workflows", metric: "workflows", label: "Workflows", amount: 5, unit: "workflow", period: "lifetime", scope: "organization", reset: "never", overage: "blocked", kind: "limit" },
  { id: "inactivity", metric: "inactivity_before_deactivation", label: "Inactivité avant désactivation", amount: 180, unit: "day", period: "variable", scope: "organization", reset: "not-applicable", overage: "degraded", kind: "limit" },
];

OFFER_QUOTAS["ory"] ??= [
  { id: "members", metric: "members", label: "Membres", amount: 1, unit: "user", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "development-environments", metric: "development_environments", label: "Environnements de développement", amount: 2, unit: "environment", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "staging-environments", metric: "staging_environments", label: "Environnements de staging", amount: 0, unit: "environment", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "production-environments", metric: "production_environments", label: "Environnements de production", amount: 0, unit: "environment", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
];

OFFER_QUOTAS["permit-io"] ??= [
  { id: "maus", metric: "monthly_active_users", label: "MAU", amount: 1000, unit: "user", period: "month", scope: "project", reset: "monthly", overage: "blocked", kind: "limit" },
  { id: "tenants", metric: "tenants", label: "Tenants", amount: 20, unit: "tenant", period: "lifetime", scope: "project", reset: "never", overage: "blocked", kind: "limit" },
  { id: "authorization-queries", metric: "authorization_queries", label: "Requêtes d’autorisation", amount: null, unit: "query", period: "variable", scope: "project", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
  { id: "roles", metric: "roles", label: "Rôles", amount: 25, unit: "role", period: "lifetime", scope: "project", reset: "never", overage: "blocked", kind: "limit" },
  { id: "role-assignments", metric: "role_assignments", label: "Role assignments", amount: 2000, unit: "assignment", period: "lifetime", scope: "project", reset: "never", overage: "blocked", kind: "limit" },
  { id: "environments", metric: "environments", label: "Environnements", amount: 3, unit: "environment", period: "lifetime", scope: "project", reset: "never", overage: "blocked", kind: "limit" },
];

OFFER_QUOTAS["phase-two"] ??= [
  { id: "hosted-free-realm", metric: "hosted_free_allocation", label: "Allocation hosted gratuite", amount: null, unit: "realm", period: "variable", scope: "service", reset: "variable", overage: "unknown", kind: "not-published", notes: "La documentation actuelle est contradictoire sur la création de nouveaux shared free realms." },
  { id: "starter-trial", metric: "trial_duration", label: "Essai Starter dédié", amount: 30, unit: "day", period: "total", scope: "account", reset: "never", overage: "billed", kind: "credit" },
];

OFFER_QUOTAS["propelauth"] ??= [
  { id: "free-account", metric: "free_tier_allocation", label: "Allocation du compte gratuit", amount: null, unit: "user", period: "variable", scope: "account", reset: "variable", overage: "unknown", kind: "not-published", notes: "Le compte gratuit est documenté, mais les limites actuelles d’utilisateurs et d’e-mails ne sont pas publiées clairement." },
];

OFFER_QUOTAS["scalekit"] ??= [
  { id: "maus", metric: "monthly_active_users", label: "MAU", amount: 25000, unit: "user", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "limit" },
  { id: "organizations", metric: "organizations", label: "Organisations", amount: 25, unit: "organization", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "sso-connections", metric: "sso_connections", label: "Connexions SSO", amount: 1, unit: "connection", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "scim-connections", metric: "scim_connections", label: "Connexions SCIM", amount: 1, unit: "connection", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
];

OFFER_QUOTAS["stack-auth"] ??= [
  { id: "auth-users", metric: "auth_users", label: "Comptes auth", amount: 10000, unit: "user", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit", notes: "Hexclave compte les comptes enregistrés, y compris les utilisateurs inactifs." },
  { id: "dashboard-admins", metric: "dashboard_admins", label: "Administrateurs dashboard", amount: 1, unit: "user", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "emails", metric: "emails", label: "E-mails", amount: 1000, unit: "email", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "limit" },
  { id: "analytics-events", metric: "analytics_events", label: "Événements analytics", amount: 100000, unit: "event", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "limit" },
  { id: "session-replays", metric: "session_replays", label: "Session replays", amount: 2500, unit: "replay", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "limit" },
];

OFFER_QUOTAS["stytch"] ??= [
  { id: "maus", metric: "monthly_active_users", label: "MAU", amount: 10000, unit: "user", period: "month", scope: "account", reset: "monthly", overage: "billed", kind: "limit" },
  { id: "organizations", metric: "organizations", label: "Organisations", amount: null, unit: "organization", period: "variable", scope: "account", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
  { id: "sso-scim", metric: "enterprise_connections", label: "Connexions SSO ou SCIM", amount: 5, unit: "connection", period: "lifetime", scope: "account", reset: "never", overage: "billed", kind: "limit" },
  { id: "m2m-tokens", metric: "m2m_tokens", label: "Tokens M2M", amount: 1000, unit: "token", period: "month", scope: "account", reset: "monthly", overage: "billed", kind: "limit" },
];

OFFER_QUOTAS["supertokens"] ??= [
  { id: "cloud-maus", metric: "monthly_active_users", label: "MAU Cloud core", amount: 5000, unit: "user", period: "month", scope: "cloud", reset: "monthly", overage: "billed", kind: "limit", notes: "Le pricing décrit le cœur Cloud comme gratuit sous le seuil de 5 000 MAU." },
  { id: "self-hosted-users", metric: "self_hosted_users", label: "Utilisateurs self-hosted core", amount: null, unit: "user", period: "variable", scope: "self-hosted", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
  { id: "dashboard-users", metric: "dashboard_users", label: "Utilisateurs dashboard inclus", amount: 3, unit: "user", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
];

OFFER_QUOTAS["workos"] ??= [
  { id: "maus", metric: "monthly_active_users", label: "MAU AuthKit", amount: 1000000, unit: "user", period: "month", scope: "account", reset: "monthly", overage: "billed", kind: "limit" },
];

OFFER_QUOTAS["zitadel-cloud"] ??= [
  { id: "dau", metric: "daily_active_users", label: "Utilisateurs actifs quotidiens", amount: 100, unit: "user", period: "day", scope: "instance", reset: "daily", overage: "blocked", kind: "limit" },
  { id: "stored-users", metric: "stored_users", label: "Utilisateurs stockés", amount: null, unit: "user", period: "variable", scope: "instance", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
  { id: "organizations", metric: "organizations", label: "Organisations", amount: null, unit: "organization", period: "variable", scope: "instance", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
  { id: "identity-providers", metric: "identity_providers", label: "Fournisseurs d’identité", amount: 3, unit: "provider", period: "lifetime", scope: "instance", reset: "never", overage: "blocked", kind: "limit" },
  { id: "management-api", metric: "management_api_requests", label: "Requêtes Management API", amount: 5000, unit: "request", period: "month", scope: "instance", reset: "monthly", overage: "blocked", kind: "limit" },
  { id: "admins", metric: "admins", label: "Administrateurs", amount: 1, unit: "user", period: "lifetime", scope: "instance", reset: "never", overage: "blocked", kind: "limit" },
];
