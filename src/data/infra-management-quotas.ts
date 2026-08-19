import { OFFER_QUOTAS } from './offer-quotas';

OFFER_QUOTAS["bitnami"] ??= [
  { id: "catalog", metric: "free_catalog", label: "Partie gratuite du catalogue", amount: null, unit: "image", period: "variable", scope: "catalog", reset: "variable", overage: "not-applicable", kind: "not-published" },
];

OFFER_QUOTAS["esper"] ??= [
  { id: "trial", metric: "trial_duration", label: "Essai gratuit", amount: 30, unit: "day", period: "total", scope: "account", reset: "never", overage: "billed", kind: "limit" },
];

OFFER_QUOTAS["jamf-now"] ??= [
  { id: "devices", metric: "devices", label: "Appareils gérés", amount: 3, unit: "device", period: "lifetime", scope: "account", reset: "never", overage: "billed", kind: "limit" },
];

OFFER_QUOTAS["miradore"] ??= [
  { id: "devices", metric: "devices", label: "Appareils inscrits", amount: 50, unit: "device", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "admins", metric: "administrators", label: "Administrateurs", amount: null, unit: "admin", period: "lifetime", scope: "account", reset: "never", overage: "not-applicable", kind: "unlimited" },
];

OFFER_QUOTAS["ploi"] ??= [
  { id: "servers", metric: "servers", label: "Serveurs", amount: 1, unit: "server", period: "lifetime", scope: "account", reset: "never", overage: "billed", kind: "limit" },
  { id: "sites", metric: "sites", label: "Sites", amount: 1, unit: "site", period: "lifetime", scope: "account", reset: "never", overage: "billed", kind: "limit" },
  { id: "deployments", metric: "deployments", label: "Déploiements", amount: 5, unit: "deployment", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "limit" },
];

OFFER_QUOTAS["runcloud"] ??= [
  { id: "trial", metric: "trial_duration", label: "Essai gratuit", amount: 7, unit: "day", period: "total", scope: "account", reset: "never", overage: "billed", kind: "limit" },
];

OFFER_QUOTAS["serveravatar"] ??= [
  { id: "servers", metric: "servers", label: "Serveurs documentés sur le Free", amount: 1, unit: "server", period: "lifetime", scope: "account", reset: "never", overage: "unknown", kind: "limit" },
  { id: "applications", metric: "applications", label: "Applications documentées sur le Free", amount: 1, unit: "application", period: "lifetime", scope: "account", reset: "never", overage: "unknown", kind: "limit" },
];

OFFER_QUOTAS["xcloud"] ??= [
  { id: "servers", metric: "servers", label: "Serveurs", amount: 1, unit: "server", period: "lifetime", scope: "account", reset: "never", overage: "billed", kind: "limit" },
  { id: "sites", metric: "sites", label: "Sites", amount: 10, unit: "site", period: "lifetime", scope: "account", reset: "never", overage: "billed", kind: "limit" },
];
