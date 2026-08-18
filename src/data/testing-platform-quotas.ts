import { OFFER_QUOTAS } from './offer-quotas';

OFFER_QUOTAS["appetize"] ??= [
  { id: "minutes", metric: "usage_time", label: "Minutes d’usage", amount: 30, unit: "minute", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "limit" },
  { id: "devices", metric: "devices", label: "Appareils actifs maximum", amount: 2, unit: "device", period: "session", scope: "account", reset: "not-applicable", overage: "blocked", kind: "limit" },
  { id: "session", metric: "session_time", label: "Durée maximale d’une session", amount: 3, unit: "minute", period: "session", scope: "session", reset: "not-applicable", overage: "blocked", kind: "limit" },
  { id: "users", metric: "users", label: "Utilisateurs", amount: 1, unit: "user", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
];

OFFER_QUOTAS["argos"] ??= [
  { id: "screenshots", metric: "screenshots", label: "Captures d’écran", amount: 5000, unit: "screenshot", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "limit" },
];

OFFER_QUOTAS["bencher"] ??= [
  { id: "metrics", metric: "metrics", label: "Métriques", amount: 65535, unit: "metric", period: "day", scope: "project", reset: "daily", overage: "blocked", kind: "limit" },
  { id: "concurrency", metric: "concurrency", label: "Jobs bare-metal concurrents", amount: 1, unit: "job", period: "session", scope: "project", reset: "not-applicable", overage: "blocked", kind: "limit" },
  { id: "timeout", metric: "job_time", label: "Durée maximale d’un job bare-metal", amount: 5, unit: "minute", period: "session", scope: "job", reset: "not-applicable", overage: "blocked", kind: "limit" },
];

OFFER_QUOTAS["bugbug"] ??= [
  { id: "projects", metric: "projects", label: "Projets", amount: 1, unit: "project", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "users", metric: "users", label: "Utilisateurs", amount: 1, unit: "user", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "suites", metric: "test_suites", label: "Suites de tests", amount: 4, unit: "suite", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "tests", metric: "tests", label: "Tests enregistrés", amount: 15, unit: "test", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "local-runs", metric: "runs_local", label: "Exécutions locales", amount: null, unit: "run", period: "lifetime", scope: "account", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
];

OFFER_QUOTAS["checkbot"] ??= [
  { id: "urls", metric: "urls", label: "URL par crawl", amount: 100, unit: "url", period: "session", scope: "crawl", reset: "not-applicable", overage: "blocked", kind: "limit" },
  { id: "crawls", metric: "crawls", label: "Crawls", amount: null, unit: "crawl", period: "lifetime", scope: "account", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
  { id: "sites", metric: "sites", label: "Sites", amount: null, unit: "site", period: "lifetime", scope: "account", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
];

OFFER_QUOTAS["checkly"] ??= [
  { id: "monitors", metric: "monitors", label: "Uptime monitors", amount: 10, unit: "monitor", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "browser-checks", metric: "browser_checks", label: "Browser / Playwright checks", amount: 1000, unit: "check", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "limit" },
  { id: "api-checks", metric: "api_checks", label: "API checks", amount: 10000, unit: "check", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "limit" },
  { id: "locations", metric: "locations", label: "Emplacements", amount: 6, unit: "location", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
];

OFFER_QUOTAS["cors-tester"] ??= [
  { id: "checks", metric: "checks", label: "Vérifications CORS", amount: null, unit: "check", period: "variable", scope: "service", reset: "variable", overage: "unknown", kind: "not-published", notes: "Aucun quota chiffré n’est publié pour cet outil gratuit." },
];

OFFER_QUOTAS["cypress"] ??= [
  { id: "local-runs", metric: "runs_local", label: "Exécutions Cypress App locales", amount: null, unit: "run", period: "lifetime", scope: "account", reset: "not-applicable", overage: "not-applicable", kind: "unmetered" },
  { id: "cloud-results", metric: "test_results", label: "Résultats de test Cloud", amount: 500, unit: "result", period: "month", scope: "organization", reset: "monthly", overage: "blocked", kind: "limit" },
  { id: "cloud-users", metric: "users", label: "Utilisateurs Cypress Cloud Free", amount: 50, unit: "user", period: "lifetime", scope: "organization", reset: "never", overage: "blocked", kind: "limit" },
  { id: "prompts", metric: "prompt_executions", label: "Exécutions de prompts", amount: 100, unit: "execution", period: "month", scope: "organization", reset: "monthly", overage: "blocked", kind: "limit" },
];

OFFER_QUOTAS["everystep-automation"] ??= [
  { id: "recorder", metric: "recordings", label: "Enregistrements avec Web Recorder", amount: null, unit: "recording", period: "variable", scope: "account", reset: "variable", overage: "unknown", kind: "not-published", notes: "Le recorder est gratuit mais aucun quota numérique actuel n’est publié." },
];

OFFER_QUOTAS["gridlastic"] ??= [
  { id: "grid-starts", metric: "grid_starts", label: "Démarrages de grille", amount: 5, unit: "start", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "limit" },
  { id: "parallel", metric: "concurrency", label: "Tests parallèles", amount: 2, unit: "test", period: "session", scope: "grid", reset: "not-applicable", overage: "blocked", kind: "limit" },
  { id: "grid-time", metric: "grid_time", label: "Durée maximale par démarrage", amount: 2, unit: "hour", period: "session", scope: "grid", reset: "not-applicable", overage: "blocked", kind: "limit" },
];

OFFER_QUOTAS["katalon"] ??= [
  { id: "studio", metric: "local_usage", label: "Utilisation des fonctions cœur Katalon Studio", amount: null, unit: "run", period: "lifetime", scope: "installation", reset: "not-applicable", overage: "not-applicable", kind: "unmetered" },
];

OFFER_QUOTAS["keploy"] ??= [
  { id: "suites", metric: "test_suites", label: "Suites de tests Playground", amount: 30, unit: "suite", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "limit" },
  { id: "runs", metric: "test_runs", label: "Test runs", amount: 100, unit: "run", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "limit" },
  { id: "integrations", metric: "integrations", label: "Tests + sandboxes", amount: 5000, unit: "integration", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "limit" },
  { id: "ai", metric: "ai_credits", label: "Crédits IA", amount: 5, unit: "credit", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "credit" },
];

OFFER_QUOTAS["lastest"] ??= [
  { id: "projects", metric: "projects", label: "Projets", amount: 1, unit: "project", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "runner-minutes", metric: "compute_time", label: "Runner-minutes", amount: 500, unit: "minute", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "limit" },
  { id: "concurrency", metric: "concurrency", label: "Runs concurrents", amount: 1, unit: "run", period: "session", scope: "account", reset: "not-applicable", overage: "blocked", kind: "limit" },
];

OFFER_QUOTAS["loadmill"] ??= [
  { id: "ai-runs", metric: "managed_ai_runs", label: "Managed AI runs", amount: null, unit: "run", period: "month", scope: "account", reset: "monthly", overage: "unknown", kind: "not-published", notes: "Le Free annonce une plage de 10 à 25 runs IA gérés selon le contexte ; aucune valeur unique n’est retenue." },
];

OFFER_QUOTAS["lost-pixel"] ??= [
  { id: "availability", metric: "availability", label: "Disponibilité future du service", amount: 0, unit: "service", period: "lifetime", scope: "service", reset: "never", overage: "blocked", kind: "limit", notes: "Produit officiellement en cours d’extinction après le rapprochement avec Figma." },
];

OFFER_QUOTAS["pagegym"] ??= [
  { id: "free-limits", metric: "tests", label: "Quota du niveau gratuit", amount: null, unit: "test", period: "variable", scope: "account", reset: "variable", overage: "unknown", kind: "not-published", notes: "Le service confirme une utilisation gratuite avec limites mais ne publie pas clairement les quotas chiffrés dans la page accessible." },
];
