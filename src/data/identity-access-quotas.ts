import { OFFER_QUOTAS } from './offer-quotas';

OFFER_QUOTAS["360username"] ??= [
  { id: "searches", metric: "searches", label: "Recherches de pseudos", amount: null, unit: "search", period: "variable", scope: "service", reset: "variable", overage: "not-applicable", kind: "unmetered", notes: "Le service se présente comme entièrement gratuit, sans quota chiffré publié." },
];

OFFER_QUOTAS["aserto"] ??= [
  { id: "saas-availability", metric: "service_availability", label: "Disponibilité du SaaS", amount: 0, unit: "service", period: "lifetime", scope: "service", reset: "never", overage: "not-applicable", kind: "limit", notes: "Le control plane SaaS Aserto a été arrêté le 31 mai 2025." },
];

OFFER_QUOTAS["asgardeo"] ??= [
  { id: "b2c-maus", metric: "monthly_active_users", label: "MAU B2C", amount: 7500, unit: "user", period: "month", scope: "tenant", reset: "monthly", overage: "blocked", kind: "limit" },
  { id: "m2m-tokens", metric: "m2m_tokens", label: "Tokens M2M", amount: 5000, unit: "token", period: "month", scope: "tenant", reset: "monthly", overage: "blocked", kind: "limit" },
  { id: "applications", metric: "applications", label: "Applications", amount: 5, unit: "application", period: "lifetime", scope: "tenant", reset: "never", overage: "blocked", kind: "limit" },
  { id: "admins", metric: "admins", label: "Administrateurs", amount: 3, unit: "user", period: "lifetime", scope: "tenant", reset: "never", overage: "blocked", kind: "limit" },
  { id: "social-logins", metric: "social_connections", label: "Connexions sociales", amount: 2, unit: "connection", period: "lifetime", scope: "tenant", reset: "never", overage: "blocked", kind: "limit" },
  { id: "mfa-methods", metric: "mfa_methods", label: "Méthodes MFA", amount: 2, unit: "method", period: "lifetime", scope: "tenant", reset: "never", overage: "blocked", kind: "limit" },
];

OFFER_QUOTAS["auth0"] ??= [
  { id: "maus", metric: "monthly_active_users", label: "MAU", amount: 25000, unit: "user", period: "month", scope: "tenant", reset: "monthly", overage: "blocked", kind: "limit" },
  { id: "organizations", metric: "organizations", label: "Organisations", amount: 5, unit: "organization", period: "lifetime", scope: "tenant", reset: "never", overage: "blocked", kind: "limit" },
  { id: "custom-domain", metric: "custom_domains", label: "Domaine personnalisé", amount: 1, unit: "domain", period: "lifetime", scope: "tenant", reset: "never", overage: "blocked", kind: "limit" },
  { id: "enterprise-connection", metric: "enterprise_connections", label: "Connexion Enterprise / SSO", amount: 1, unit: "connection", period: "lifetime", scope: "tenant", reset: "never", overage: "blocked", kind: "limit" },
  { id: "social-connections", metric: "social_connections", label: "Connexions sociales", amount: null, unit: "connection", period: "variable", scope: "tenant", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
];

OFFER_QUOTAS["authgear"] ??= [
  { id: "maus", metric: "monthly_active_users", label: "MAU", amount: null, unit: "user", period: "month", scope: "project", reset: "monthly", overage: "not-applicable", kind: "unlimited" },
  { id: "otp-messages", metric: "otp_messages", label: "OTP SMS/WhatsApp", amount: 100, unit: "message", period: "month", scope: "project", reset: "monthly", overage: "blocked", kind: "limit" },
  { id: "applications", metric: "applications", label: "Applications", amount: 2, unit: "application", period: "lifetime", scope: "project", reset: "never", overage: "blocked", kind: "limit" },
  { id: "project-members", metric: "project_members", label: "Membres de projet", amount: 2, unit: "user", period: "lifetime", scope: "project", reset: "never", overage: "blocked", kind: "limit" },
  { id: "log-retention", metric: "log_retention", label: "Rétention des logs", amount: 1, unit: "day", period: "variable", scope: "project", reset: "not-applicable", overage: "not-applicable", kind: "limit" },
];

OFFER_QUOTAS["authress"] ??= [
  { id: "free-calls", metric: "billable_api_calls", label: "Premiers appels facturables", amount: 1000, unit: "request", period: "total", scope: "account", reset: "never", overage: "billed", kind: "credit", notes: "Crédit initial non récurrent ; les appels suivants sont facturés." },
];

OFFER_QUOTAS["authy"] ??= [
  { id: "new-api-customers", metric: "new_api_customers", label: "Nouveaux clients API", amount: 0, unit: "account", period: "lifetime", scope: "service", reset: "never", overage: "not-applicable", kind: "limit", notes: "Authy API est fermée aux nouveaux clients et en cours de dépréciation." },
];

OFFER_QUOTAS["cerbos-hub"] ??= [
  { id: "principals", metric: "monthly_active_principals", label: "Principals actifs", amount: 100, unit: "principal", period: "month", scope: "workspace", reset: "monthly", overage: "blocked", kind: "limit" },
  { id: "workspaces", metric: "workspaces", label: "Workspaces", amount: 1, unit: "workspace", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "developers", metric: "developers", label: "Développeurs", amount: 2, unit: "user", period: "lifetime", scope: "workspace", reset: "never", overage: "blocked", kind: "limit" },
  { id: "simultaneous-pdps", metric: "simultaneous_pdps", label: "PDP simultanés", amount: 2, unit: "pdp", period: "variable", scope: "workspace", reset: "variable", overage: "blocked", kind: "limit" },
  { id: "policy-builds", metric: "policy_builds", label: "Builds de policies", amount: 5, unit: "build", period: "week", scope: "workspace", reset: "weekly", overage: "blocked", kind: "limit" },
  { id: "audit-retention", metric: "audit_log_retention", label: "Rétention audit logs", amount: 7, unit: "day", period: "variable", scope: "workspace", reset: "not-applicable", overage: "not-applicable", kind: "limit" },
];

OFFER_QUOTAS["clerk"] ??= [
  { id: "mru", metric: "monthly_retained_users", label: "Monthly Retained Users", amount: 50000, unit: "user", period: "month", scope: "application", reset: "monthly", overage: "blocked", kind: "limit" },
  { id: "applications", metric: "applications", label: "Applications", amount: null, unit: "application", period: "variable", scope: "account", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
  { id: "dashboard-seats", metric: "dashboard_seats", label: "Sièges dashboard", amount: 3, unit: "user", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "log-retention", metric: "log_retention", label: "Rétention des logs applicatifs", amount: 1, unit: "day", period: "variable", scope: "application", reset: "not-applicable", overage: "not-applicable", kind: "limit" },
];

OFFER_QUOTAS["cloud-iam"] ??= [
  { id: "registered-users", metric: "registered_users", label: "Utilisateurs enregistrés", amount: 100, unit: "user", period: "lifetime", scope: "realm", reset: "never", overage: "blocked", kind: "limit" },
  { id: "realms", metric: "realms", label: "Realms", amount: 1, unit: "realm", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "maus", metric: "monthly_active_users", label: "MAU", amount: null, unit: "user", period: "month", scope: "realm", reset: "monthly", overage: "not-applicable", kind: "unlimited" },
];

OFFER_QUOTAS["descope"] ??= [
  { id: "maus", metric: "monthly_active_users", label: "MAU", amount: 7500, unit: "user", period: "month", scope: "project", reset: "monthly", overage: "blocked", kind: "limit" },
  { id: "active-tenants", metric: "monthly_active_tenants", label: "Tenants actifs", amount: 10, unit: "tenant", period: "month", scope: "project", reset: "monthly", overage: "blocked", kind: "limit" },
  { id: "sso-connections", metric: "sso_connections", label: "Connexions SSO", amount: 3, unit: "connection", period: "lifetime", scope: "project", reset: "never", overage: "blocked", kind: "limit" },
  { id: "m2m-exchanges", metric: "m2m_exchanges", label: "Échanges M2M", amount: 10000, unit: "exchange", period: "month", scope: "project", reset: "monthly", overage: "blocked", kind: "limit" },
  { id: "test-users", metric: "test_users", label: "Utilisateurs de test", amount: 5, unit: "user", period: "lifetime", scope: "project", reset: "never", overage: "blocked", kind: "limit" },
];

OFFER_QUOTAS["duo"] ??= [
  { id: "users", metric: "users", label: "Utilisateurs", amount: 10, unit: "user", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
];

OFFER_QUOTAS["kinde"] ??= [
  { id: "maus", metric: "monthly_active_users", label: "MAU", amount: 10500, unit: "user", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "limit" },
  { id: "active-orgs", metric: "monthly_active_organizations", label: "Organisations actives", amount: 5, unit: "organization", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "limit" },
  { id: "applications", metric: "applications", label: "Applications", amount: null, unit: "application", period: "variable", scope: "account", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
  { id: "environments", metric: "environments", label: "Environnements", amount: 2, unit: "environment", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "custom-roles", metric: "custom_roles", label: "Rôles personnalisés", amount: 2, unit: "role", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "permissions", metric: "permissions", label: "Permissions", amount: 10, unit: "permission", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "webhooks", metric: "webhooks", label: "Webhooks", amount: 1, unit: "webhook", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
];

OFFER_QUOTAS["logintc"] ??= [
  { id: "users", metric: "users", label: "Utilisateurs", amount: 3, unit: "user", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "push-auth", metric: "push_authentications", label: "Authentifications push", amount: null, unit: "authentication", period: "variable", scope: "account", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
];
