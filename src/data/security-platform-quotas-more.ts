import { OFFER_QUOTAS } from './offer-quotas';

OFFER_QUOTAS["inspect-software"] ??= [
  { id: "starting_credits", metric: "credits", label: "Crédits de départ", amount: 100, unit: "credit", period: "total", scope: "account", reset: "never", overage: "blocked", kind: "credit" },
  { id: "below_threshold", metric: "inspections", label: "Inspections sous le seuil avec le crédit initial", amount: 5, unit: "inspection", period: "total", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
];

OFFER_QUOTAS["internet-nl"] ??= [
  { id: "tests", metric: "tests", label: "Tests publics", amount: null, unit: "test", period: "variable", scope: "service", reset: "variable", overage: "not-applicable", kind: "unmetered" },
];

OFFER_QUOTAS["intodns-ai"] ??= [
  { id: "checks", metric: "checks", label: "Analyses DNS", amount: null, unit: "check", period: "variable", scope: "service", reset: "variable", overage: "not-applicable", kind: "unmetered" },
];

OFFER_QUOTAS["letsencrypt"] ??= [
  { id: "certificates", metric: "certificate_issuance", label: "Certificats TLS", amount: null, unit: "certificate", period: "variable", scope: "domain", reset: "variable", overage: "not-applicable", kind: "unmetered", notes: "Gratuits, sous réserve des rate limits de l’autorité." },
];

OFFER_QUOTAS["meterian"] ??= [
  { id: "oss", metric: "repositories", label: "Projets open source", amount: null, unit: "project", period: "lifetime", scope: "account", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
  { id: "private", metric: "private_projects", label: "Projet fermé", amount: 1, unit: "project", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "analyses", metric: "analyses", label: "Analyses", amount: 10, unit: "analysis", period: "day", scope: "account", reset: "daily", overage: "blocked", kind: "limit" },
];

OFFER_QUOTAS["mozilla-observatory"] ??= [
  { id: "scans", metric: "scans", label: "Scans HTTP", amount: null, unit: "scan", period: "variable", scope: "domain", reset: "variable", overage: "not-applicable", kind: "unmetered", notes: "Un nouveau résultat pour un site est limité à environ une fois par 60 secondes." },
];

OFFER_QUOTAS["otterwatch"] ??= [
  { id: "domains", metric: "domains", label: "Domaines surveillés", amount: 5, unit: "domain", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
];

OFFER_QUOTAS["protectumus"] ??= [
  { id: "free_tools", metric: "tools", label: "Outils gratuits", amount: null, unit: "tool", period: "variable", scope: "service", reset: "variable", overage: "unknown", kind: "not-published" },
];

OFFER_QUOTAS["public-cloud-threat-intelligence"] ??= [
  { id: "public_data", metric: "datasets", label: "Données publiques", amount: null, unit: "dataset", period: "variable", scope: "service", reset: "variable", overage: "unknown", kind: "not-published" },
];

OFFER_QUOTAS["pyup"] ??= [
  { id: "availability", metric: "availability", label: "Free Tier PyUp permanent", amount: 0, unit: "plan", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
];

OFFER_QUOTAS["qualys-community-edition"] ??= [
  { id: "internal", metric: "assets_internal", label: "Actifs internes", amount: 16, unit: "asset", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "external", metric: "assets_external", label: "Actifs externes", amount: 3, unit: "asset", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "webapp", metric: "web_apps", label: "Applications web", amount: 1, unit: "application", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
];

OFFER_QUOTAS["sikkerkey"] ??= [
  { id: "machines", metric: "machines", label: "Machines incluses", amount: 10, unit: "machine", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "projects", metric: "projects", label: "Projets", amount: null, unit: "project", period: "lifetime", scope: "account", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
  { id: "secrets", metric: "secrets", label: "Secrets par projet", amount: null, unit: "secret", period: "lifetime", scope: "project", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
  { id: "audit", metric: "log_retention", label: "Rétention audit", amount: 30, unit: "day", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "webhooks", metric: "webhook_deliveries", label: "Livraisons webhook", amount: 20, unit: "delivery", period: "day", scope: "account", reset: "daily", overage: "blocked", kind: "limit" },
];

OFFER_QUOTAS["smart-grow-vault"] ??= [
  { id: "free_tier", metric: "allowance", label: "Quota gratuit actuel", amount: null, unit: "allowance", period: "variable", scope: "account", reset: "variable", overage: "unknown", kind: "not-published" },
];

OFFER_QUOTAS["socket"] ??= [
  { id: "scans", metric: "scans", label: "Scans", amount: 1000, unit: "scan", period: "month", scope: "workspace", reset: "monthly", overage: "blocked", kind: "limit" },
  { id: "api", metric: "api_calls", label: "Quota API", amount: 500, unit: "call/hour", period: "variable", scope: "workspace", reset: "rolling", overage: "blocked", kind: "limit" },
  { id: "members", metric: "members", label: "Membres", amount: 3, unit: "member", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
];

OFFER_QUOTAS["ssl-labs"] ??= [
  { id: "tests", metric: "tests", label: "Tests TLS", amount: null, unit: "test", period: "variable", scope: "service", reset: "variable", overage: "not-applicable", kind: "unmetered" },
];

OFFER_QUOTAS["sucuri-sitecheck"] ??= [
  { id: "scans", metric: "scans", label: "Scans distants", amount: null, unit: "scan", period: "variable", scope: "service", reset: "variable", overage: "not-applicable", kind: "unmetered" },
];

OFFER_QUOTAS["testtls"] ??= [
  { id: "tests", metric: "tests", label: "Tests TLS", amount: null, unit: "test", period: "variable", scope: "service", reset: "variable", overage: "not-applicable", kind: "unmetered" },
];

OFFER_QUOTAS["virgil-security"] ??= [
  { id: "users", metric: "application_users", label: "Utilisateurs d’application", amount: 250, unit: "user", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
];
