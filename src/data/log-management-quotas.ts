import { OFFER_QUOTAS } from './offer-quotas';

OFFER_QUOTAS["bugfender"] ??= [
  { id: "logs", metric: "log_lines", label: "Lignes de logs", amount: 100000, unit: "log", period: "day", scope: "account", reset: "daily", overage: "blocked", kind: "limit" },
  { id: "retention", metric: "retention", label: "Rétention", amount: 24, unit: "hour", period: "lifetime", scope: "account", reset: "never", overage: "not-applicable", kind: "limit" },
];

OFFER_QUOTAS["logdog"] ??= [
  { id: "traffic", metric: "log_traffic", label: "Trafic logs et requêtes", amount: 100, unit: "MB", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "limit" },
];

OFFER_QUOTAS["logflare"] ??= [
  { id: "events", metric: "log_events", label: "Événements", amount: 12960000, unit: "event", period: "month", scope: "app", reset: "monthly", overage: "blocked", kind: "limit" },
  { id: "retention", metric: "retention", label: "Rétention", amount: 3, unit: "day", period: "lifetime", scope: "app", reset: "never", overage: "not-applicable", kind: "limit" },
];

OFFER_QUOTAS["logtail"] ??= [
  { id: "logs", metric: "logs_storage", label: "Logs inclus", amount: 3, unit: "GB", period: "month", scope: "account", reset: "monthly", overage: "billed", kind: "limit" },
  { id: "retention", metric: "retention", label: "Rétention", amount: 3, unit: "day", period: "lifetime", scope: "account", reset: "never", overage: "not-applicable", kind: "limit" },
];

OFFER_QUOTAS["logzab"] ??= [
  { id: "logs", metric: "audit_logs", label: "Audit logs", amount: 1000, unit: "log", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "limit" },
  { id: "apps", metric: "applications", label: "Applications", amount: 5, unit: "application", period: "lifetime", scope: "account", reset: "never", overage: "billed", kind: "limit" },
  { id: "retention", metric: "retention", label: "Rétention", amount: 1, unit: "month", period: "lifetime", scope: "account", reset: "never", overage: "not-applicable", kind: "limit" },
];

OFFER_QUOTAS["manageengine-log360-cloud"] ??= [
  { id: "storage", metric: "log_storage", label: "Stockage", amount: 50, unit: "GB", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "search-retention", metric: "search_retention", label: "Rétention de recherche", amount: 7, unit: "day", period: "lifetime", scope: "account", reset: "never", overage: "not-applicable", kind: "limit" },
  { id: "archive-retention", metric: "archive_retention", label: "Rétention d’archive", amount: 15, unit: "day", period: "lifetime", scope: "account", reset: "never", overage: "not-applicable", kind: "limit" },
];

OFFER_QUOTAS["openobserve"] ??= [
  { id: "enterprise-self-hosted", metric: "self_hosted_ingestion", label: "Ingestion Enterprise self-hosted gratuite", amount: 50, unit: "GB", period: "day", scope: "deployment", reset: "daily", overage: "billed", kind: "limit" },
];

OFFER_QUOTAS["smart-grow-logs"] ??= [
  { id: "logs", metric: "logs", label: "Logs", amount: 3000, unit: "log", period: "day", scope: "account", reset: "daily", overage: "blocked", kind: "limit" },
  { id: "projects", metric: "projects", label: "Projets", amount: 1, unit: "project", period: "lifetime", scope: "account", reset: "never", overage: "billed", kind: "limit" },
  { id: "apps", metric: "applications", label: "Applications", amount: 2, unit: "application", period: "lifetime", scope: "account", reset: "never", overage: "billed", kind: "limit" },
  { id: "retention", metric: "retention", label: "Rétention", amount: 7, unit: "day", period: "lifetime", scope: "account", reset: "never", overage: "not-applicable", kind: "limit" },
];
