import { OFFER_QUOTAS } from './offer-quotas';

OFFER_QUOTAS["percy"] ??= [
  { id: "screenshots", metric: "screenshots", label: "Screenshots", amount: 5000, unit: "screenshot", period: "month", scope: "organization", reset: "monthly", overage: "blocked", kind: "limit" },
  { id: "projects", metric: "projects", label: "Projets", amount: null, unit: "project", period: "lifetime", scope: "organization", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
  { id: "users", metric: "users", label: "Membres d’équipe", amount: null, unit: "user", period: "lifetime", scope: "organization", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
];

OFFER_QUOTAS["qase"] ??= [
  { id: "projects", metric: "projects", label: "Projets", amount: 2, unit: "project", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "storage", metric: "storage", label: "Stockage", amount: 500, unit: "MB", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "api-results", metric: "api_results", label: "Résultats API", amount: 5000, unit: "result", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "limit" },
  { id: "history", metric: "history", label: "Historique de tests", amount: 30, unit: "day", period: "lifetime", scope: "account", reset: "never", overage: "degraded", kind: "limit" },
];

OFFER_QUOTAS["repeato"] ??= [
  { id: "android-tests", metric: "tests_android", label: "Tests Android enregistrés", amount: 5, unit: "test", period: "lifetime", scope: "installation", reset: "never", overage: "blocked", kind: "limit" },
  { id: "ios-tests", metric: "tests_ios", label: "Tests iOS enregistrés", amount: 5, unit: "test", period: "lifetime", scope: "installation", reset: "never", overage: "blocked", kind: "limit" },
  { id: "web-tests", metric: "tests_web", label: "Tests Web enregistrés", amount: 5, unit: "test", period: "lifetime", scope: "installation", reset: "never", overage: "blocked", kind: "limit" },
  { id: "runs", metric: "runs", label: "Exécutions de tests", amount: null, unit: "run", period: "month", scope: "installation", reset: "monthly", overage: "not-applicable", kind: "unlimited" },
];

OFFER_QUOTAS["requestly"] ??= [
  { id: "local-projects", metric: "projects_local", label: "Projets locaux", amount: null, unit: "project", period: "lifetime", scope: "account", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
  { id: "team-projects", metric: "projects_team", label: "Team Projects", amount: 3, unit: "project", period: "lifetime", scope: "team", reset: "never", overage: "blocked", kind: "limit" },
  { id: "collaborators", metric: "users", label: "Team Collaborators", amount: 10, unit: "user", period: "lifetime", scope: "team", reset: "never", overage: "blocked", kind: "limit" },
  { id: "collection-runs", metric: "collection_runs", label: "Collection Runs", amount: 100, unit: "run", period: "month", scope: "team", reset: "monthly", overage: "blocked", kind: "limit" },
];

OFFER_QUOTAS["seotest-me"] ??= [
  { id: "crawls", metric: "crawls", label: "Crawls gratuits", amount: null, unit: "crawl", period: "variable", scope: "account", reset: "variable", overage: "unknown", kind: "not-published", notes: "Le quota historique de 10 crawls/jour n’a pas pu être confirmé sur le site officiel." },
];

OFFER_QUOTAS["sherlo"] ??= [
  { id: "snapshots", metric: "snapshots", label: "Snapshots", amount: 1000, unit: "snapshot", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "limit" },
  { id: "projects", metric: "projects", label: "Projets", amount: null, unit: "project", period: "lifetime", scope: "account", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
  { id: "users", metric: "users", label: "Utilisateurs", amount: null, unit: "user", period: "lifetime", scope: "account", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
];

OFFER_QUOTAS["uilicious-snippets"] ??= [
  { id: "runs", metric: "runs", label: "Exécutions Snippets", amount: null, unit: "run", period: "variable", scope: "service", reset: "variable", overage: "unknown", kind: "not-published", notes: "Playground public gratuit ; le plafond actuel par run n’est pas documenté clairement." },
];

OFFER_QUOTAS["crawlably-ssr-checker"] ??= [
  { id: "checks", metric: "manual_checks", label: "Checks manuels", amount: null, unit: "check", period: "month", scope: "account", reset: "monthly", overage: "not-applicable", kind: "unlimited", notes: "Crawlably annonce les checks manuels illimités pendant la bêta." },
];

OFFER_QUOTAS["testingbot"] ??= [
  { id: "automated-tests", metric: "automated_tests", label: "Tests automatisés OSS", amount: null, unit: "test", period: "month", scope: "project", reset: "monthly", overage: "not-applicable", kind: "unlimited" },
  { id: "concurrency", metric: "concurrency", label: "Tests concurrents", amount: 2, unit: "test", period: "session", scope: "project", reset: "not-applicable", overage: "blocked", kind: "limit" },
];

OFFER_QUOTAS["testspace"] ??= [
  { id: "sessions", metric: "sessions", label: "Sessions", amount: 200, unit: "session", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "limit" },
  { id: "public-projects", metric: "projects", label: "Projets publics", amount: null, unit: "project", period: "lifetime", scope: "account", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
];

OFFER_QUOTAS["tesults"] ??= [
  { id: "cases-run", metric: "test_cases", label: "Cas de test par run", amount: 100, unit: "case", period: "session", scope: "run", reset: "not-applicable", overage: "blocked", kind: "limit" },
  { id: "targets", metric: "targets", label: "Targets", amount: 5, unit: "target", period: "lifetime", scope: "project", reset: "never", overage: "blocked", kind: "limit" },
  { id: "lists-runs", metric: "lists_runs", label: "Listes et runs", amount: 10, unit: "item", period: "lifetime", scope: "project", reset: "never", overage: "blocked", kind: "limit" },
  { id: "storage", metric: "storage", label: "Stockage fichiers total", amount: 50, unit: "GB", period: "total", scope: "project", reset: "never", overage: "blocked", kind: "limit" },
];

OFFER_QUOTAS["usewebhook"] ??= [
  { id: "history", metric: "request_history", label: "Requêtes récentes conservées", amount: 20, unit: "request", period: "session", scope: "webhook", reset: "not-applicable", overage: "degraded", kind: "limit" },
  { id: "body", metric: "request_body", label: "Taille maximale du body", amount: 10, unit: "kB", period: "session", scope: "request", reset: "not-applicable", overage: "blocked", kind: "limit" },
  { id: "requests", metric: "requests", label: "Requêtes envoyées", amount: null, unit: "request", period: "variable", scope: "webhook", reset: "variable", overage: "unknown", kind: "not-published", notes: "Pas de quota chiffré annoncé ; certaines opérations sont rate-limitées." },
];

OFFER_QUOTAS["vaadin"] ??= [
  { id: "projects", metric: "projects", label: "Projets utilisant le framework open source", amount: null, unit: "project", period: "lifetime", scope: "developer", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
  { id: "maintenance", metric: "maintenance_window", label: "Maintenance gratuite d’une version majeure", amount: 6, unit: "month", period: "lifetime", scope: "release", reset: "never", overage: "degraded", kind: "limit" },
];

OFFER_QUOTAS["webhook-site"] ??= [
  { id: "requests", metric: "requests", label: "Requêtes / e-mails par URL gratuite", amount: 50, unit: "request", period: "total", scope: "url", reset: "never", overage: "blocked", kind: "limit", notes: "La documentation 2026 contient des pages à 50 et d’autres à 100 ; 50 est retenu par prudence." },
  { id: "expiry", metric: "url_lifetime", label: "Durée de vie URL / e-mail", amount: 7, unit: "day", period: "lifetime", scope: "url", reset: "never", overage: "blocked", kind: "limit" },
];

OFFER_QUOTAS["websitepulse"] ??= [
  { id: "tools", metric: "diagnostics", label: "Diagnostics ponctuels", amount: null, unit: "check", period: "variable", scope: "service", reset: "variable", overage: "unknown", kind: "not-published", notes: "Les outils gratuits n’ont pas un quota global unique publié." },
];

OFFER_QUOTAS["kogiqa"] ??= [
  { id: "actions", metric: "actions", label: "Actions mensuelles du Free", amount: null, unit: "action", period: "month", scope: "account", reset: "monthly", overage: "unknown", kind: "not-published", notes: "Le site confirme un compte gratuit mais le quota historique de 500 actions/mois n’a pas pu être vérifié." },
];
