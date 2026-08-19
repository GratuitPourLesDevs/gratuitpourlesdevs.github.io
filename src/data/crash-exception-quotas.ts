import { OFFER_QUOTAS } from './offer-quotas';

OFFER_QUOTAS["axiom"] ??= [
  { id: "data-loading", metric: "data_loading", label: "Données chargées", amount: 500, unit: "GB", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "limit", notes: "Plan Personal : limite maximale et Always Free de 500 Go/mois." },
  { id: "storage", metric: "storage", label: "Stockage Always Free", amount: 25, unit: "GB", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "query-compute", metric: "query_compute", label: "Calcul de requêtes", amount: 10, unit: "GB-hour", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "limit" },
  { id: "retention", metric: "retention", label: "Rétention maximale", amount: 30, unit: "day", period: "lifetime", scope: "account", reset: "never", overage: "not-applicable", kind: "limit" },
  { id: "datasets", metric: "datasets", label: "Datasets", amount: 3, unit: "dataset", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "users", metric: "team_members", label: "Utilisateurs", amount: 1, unit: "user", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "monitors", metric: "monitors", label: "Monitors", amount: 3, unit: "monitor", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
];

OFFER_QUOTAS["bugsink"] ??= [
  { id: "events", metric: "errors", label: "Événements acceptés", amount: 15000, unit: "event", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "limit" },
  { id: "retained", metric: "retained_events", label: "Événements conservés", amount: 5000, unit: "event", period: "month", scope: "account", reset: "monthly", overage: "degraded", kind: "limit" },
  { id: "users", metric: "team_members", label: "Utilisateurs", amount: 1, unit: "user", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "selfhost", metric: "self_hosted_usage", label: "Auto-hébergement", amount: null, unit: "usage", period: "lifetime", scope: "deployment", reset: "not-applicable", overage: "not-applicable", kind: "unmetered", notes: "Pas de quota SaaS ; limites déterminées par l’infrastructure auto-hébergée." },
];

OFFER_QUOTAS["bugsnag"] ??= [
  { id: "events", metric: "errors", label: "Événements", amount: 7500, unit: "event", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "limit" },
  { id: "spans", metric: "spans", label: "Spans", amount: 1000000, unit: "span", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "limit" },
  { id: "users", metric: "team_members", label: "Utilisateurs", amount: 1, unit: "user", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "retention", metric: "retention", label: "Rétention", amount: 7, unit: "day", period: "lifetime", scope: "account", reset: "never", overage: "not-applicable", kind: "limit" },
];

OFFER_QUOTAS["catchjs"] ??= [
  { id: "errors", metric: "errors", label: "Erreurs Open Source / Development", amount: 1000, unit: "event", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "limit", notes: "Après approbation du projet open source." },
  { id: "logs", metric: "log_calls", label: "Appels catchjs.log()", amount: 1000, unit: "call", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "limit" },
  { id: "domains", metric: "domains", label: "Domaines", amount: 1, unit: "domain", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "retention", metric: "retention", label: "Rétention", amount: 3, unit: "month", period: "lifetime", scope: "account", reset: "never", overage: "not-applicable", kind: "limit" },
];

OFFER_QUOTAS["elmah-io"] ??= [
  { id: "messages", metric: "errors", label: "Messages", amount: 10000, unit: "message", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "limit", notes: "Small Business offert aux projets open source approuvés." },
  { id: "users", metric: "team_members", label: "Utilisateurs", amount: 3, unit: "user", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "applications", metric: "projects", label: "Applications", amount: null, unit: "application", period: "lifetime", scope: "account", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
  { id: "emails", metric: "notifications", label: "E-mails", amount: 400, unit: "email", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "limit" },
  { id: "retention", metric: "retention", label: "Rétention", amount: 30, unit: "day", period: "lifetime", scope: "account", reset: "never", overage: "not-applicable", kind: "limit" },
];

OFFER_QUOTAS["embrace"] ??= [
  { id: "sessions", metric: "sessions", label: "Sessions", amount: 1000000, unit: "session", period: "year", scope: "account", reset: "yearly", overage: "blocked", kind: "limit" },
  { id: "users", metric: "team_members", label: "Utilisateurs", amount: 5, unit: "user", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "retention", metric: "retention", label: "Rétention des événements", amount: 3, unit: "day", period: "lifetime", scope: "account", reset: "never", overage: "not-applicable", kind: "limit" },
];

OFFER_QUOTAS["exceptionless"] ??= [
  { id: "events", metric: "errors", label: "Événements", amount: 3000, unit: "event", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "limit" },
  { id: "projects", metric: "projects", label: "Projets", amount: 1, unit: "project", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "users", metric: "team_members", label: "Utilisateurs", amount: 1, unit: "user", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "retention", metric: "retention", label: "Rétention", amount: 3, unit: "day", period: "lifetime", scope: "account", reset: "never", overage: "not-applicable", kind: "limit" },
  { id: "selfhost", metric: "self_hosted_usage", label: "Auto-hébergement", amount: null, unit: "usage", period: "lifetime", scope: "deployment", reset: "not-applicable", overage: "not-applicable", kind: "unmetered" },
];

OFFER_QUOTAS["glitchtip"] ??= [
  { id: "events", metric: "errors", label: "Événements", amount: 1000, unit: "event", period: "month", scope: "account", reset: "monthly", overage: "degraded", kind: "limit", notes: "Throttling progressif au-delà du quota, blocage complet au-dessus de 2×." },
  { id: "projects", metric: "projects", label: "Projets", amount: null, unit: "project", period: "lifetime", scope: "account", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
  { id: "users", metric: "team_members", label: "Membres", amount: null, unit: "user", period: "lifetime", scope: "account", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
  { id: "selfhost", metric: "self_hosted_usage", label: "Auto-hébergement", amount: null, unit: "usage", period: "lifetime", scope: "deployment", reset: "not-applicable", overage: "not-applicable", kind: "unmetered" },
];

OFFER_QUOTAS["honeybadger"] ??= [
  { id: "errors", metric: "errors", label: "Erreurs", amount: 5000, unit: "event", period: "month", scope: "account", reset: "monthly", overage: "degraded", kind: "limit", notes: "Traitement toléré jusqu’à 125 % du quota avant arrêt jusqu’au prochain cycle." },
  { id: "logs", metric: "logs", label: "Honeybadger Insights / logs", amount: 50, unit: "MB", period: "day", scope: "account", reset: "daily", overage: "degraded", kind: "limit" },
  { id: "uptime", metric: "monitors", label: "Monitor uptime", amount: 1, unit: "monitor", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "users", metric: "team_members", label: "Utilisateurs", amount: 1, unit: "user", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "projects", metric: "projects", label: "Projets", amount: null, unit: "project", period: "lifetime", scope: "account", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
];

OFFER_QUOTAS["jam"] ??= [
  { id: "jams", metric: "bug_reports", label: "Jams", amount: 30, unit: "report", period: "month", scope: "workspace", reset: "monthly", overage: "blocked", kind: "limit" },
  { id: "recording-links", metric: "recording_links", label: "Recording Links", amount: 5, unit: "link", period: "month", scope: "workspace", reset: "monthly", overage: "blocked", kind: "limit" },
  { id: "recording-duration", metric: "recording_duration", label: "Durée maximale", amount: 5, unit: "minute", period: "session", scope: "recording", reset: "not-applicable", overage: "blocked", kind: "limit" },
  { id: "creators", metric: "team_members", label: "Creator seats", amount: 5, unit: "user", period: "lifetime", scope: "workspace", reset: "never", overage: "blocked", kind: "limit" },
  { id: "viewers", metric: "viewers", label: "Viewer seats", amount: null, unit: "user", period: "lifetime", scope: "workspace", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
  { id: "ai-summaries", metric: "ai_summaries", label: "Résumés IA", amount: 30, unit: "summary", period: "month", scope: "workspace", reset: "monthly", overage: "blocked", kind: "limit" },
];

OFFER_QUOTAS["memfault"] ??= [
  { id: "development-devices", metric: "devices", label: "Appareils de développement", amount: 10, unit: "device", period: "lifetime", scope: "account", reset: "never", overage: "billed", kind: "limit", notes: "Tarification Developer actuelle pour les équipes Nordic éligibles." },
];

OFFER_QUOTAS["rollbar"] ??= [
  { id: "occurrences", metric: "errors", label: "Occurrences", amount: 5000, unit: "event", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "limit" },
  { id: "replays", metric: "session_replays", label: "Session replays", amount: 1000, unit: "replay", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "limit" },
  { id: "users", metric: "team_members", label: "Utilisateurs", amount: null, unit: "user", period: "lifetime", scope: "account", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
  { id: "projects", metric: "projects", label: "Projets", amount: null, unit: "project", period: "lifetime", scope: "account", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
  { id: "retention", metric: "retention", label: "Rétention", amount: 30, unit: "day", period: "lifetime", scope: "account", reset: "never", overage: "not-applicable", kind: "limit" },
];

OFFER_QUOTAS["semaphr"] ??= [
  { id: "logs", metric: "logs", label: "Logs", amount: null, unit: "event", period: "lifetime", scope: "account", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
  { id: "users", metric: "team_members", label: "Membres d’équipe", amount: null, unit: "user", period: "lifetime", scope: "account", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
  { id: "controls", metric: "release_controls", label: "Blocages et messages", amount: null, unit: "action", period: "lifetime", scope: "account", reset: "not-applicable", overage: "not-applicable", kind: "unmetered" },
];

OFFER_QUOTAS["sentry"] ??= [
  { id: "errors", metric: "errors", label: "Erreurs", amount: 5000, unit: "event", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "limit" },
  { id: "logs", metric: "logs", label: "Logs", amount: 5, unit: "GB", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "limit" },
  { id: "metrics", metric: "application_metrics", label: "Application Metrics", amount: 5, unit: "GB", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "limit" },
  { id: "spans", metric: "spans", label: "Spans", amount: 5000000, unit: "span", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "limit" },
  { id: "replays", metric: "session_replays", label: "Session Replays", amount: 50, unit: "replay", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "limit" },
  { id: "uptime", metric: "monitors", label: "Uptime monitor", amount: 1, unit: "monitor", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "cron", metric: "cron_monitors", label: "Cron monitor", amount: 1, unit: "monitor", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "users", metric: "team_members", label: "Utilisateurs", amount: 1, unit: "user", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "projects", metric: "projects", label: "Projets", amount: null, unit: "project", period: "lifetime", scope: "account", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
  { id: "retention", metric: "retention", label: "Lookback", amount: 30, unit: "day", period: "lifetime", scope: "account", reset: "never", overage: "not-applicable", kind: "limit" },
];

OFFER_QUOTAS["whitespace"] ??= [
  { id: "recordings", metric: "bug_reports", label: "Nombre de recordings", amount: null, unit: "recording", period: "variable", scope: "account", reset: "variable", overage: "unknown", kind: "not-published", notes: "La page Personal ne publie aucun plafond numérique de nombre de recordings." },
  { id: "duration", metric: "recording_duration", label: "Durée maximale", amount: 60, unit: "second", period: "session", scope: "recording", reset: "not-applicable", overage: "blocked", kind: "limit" },
  { id: "retention", metric: "retention", label: "Conservation", amount: null, unit: "day", period: "lifetime", scope: "recording", reset: "not-applicable", overage: "not-applicable", kind: "unlimited", notes: "Les recordings Personal sont annoncés comme jamais supprimés." },
];
