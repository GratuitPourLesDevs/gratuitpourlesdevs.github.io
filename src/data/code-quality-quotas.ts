import { OFFER_QUOTAS } from './offer-quotas';

OFFER_QUOTAS['beanstalk'] ??= [
  { id: "users", metric: "users", label: "Utilisateurs", amount: 1, unit: "user", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "repos", metric: "repositories", label: "Dépôts", amount: 1, unit: "repository", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "storage", metric: "storage", label: "Stockage", amount: 100, unit: "MB", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
];

OFFER_QUOTAS['codacy'] ??= [
  { id: "developer", metric: "users", label: "Développeurs IDE", amount: 1, unit: "user", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "oss-repos", metric: "repositories", label: "Dépôts open source", amount: null, unit: "repository", period: "lifetime", scope: "account", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
  { id: "private-cloud", metric: "repositories", label: "Dépôts privés analysés dans le cloud", amount: 0, unit: "repository", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
];

OFFER_QUOTAS['codeac'] ??= [
  { id: "public-repos", metric: "repositories", label: "Dépôts publics", amount: null, unit: "repository", period: "lifetime", scope: "account", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
  { id: "private-repos", metric: "repositories_private", label: "Quota de dépôts privés", amount: null, unit: "repository", period: "variable", scope: "account", reset: "variable", overage: "unknown", kind: "not-published", notes: "La grille gratuite mentionne les dépôts privés sans publier de quota chiffré clair." },
];

OFFER_QUOTAS['codecov'] ??= [
  { id: "users", metric: "users", label: "Utilisateurs privés", amount: 1, unit: "user", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "repos", metric: "repositories", label: "Dépôts publics et privés", amount: null, unit: "repository", period: "lifetime", scope: "account", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
  { id: "private-uploads", metric: "uploads", label: "Uploads de couverture privés", amount: 250, unit: "upload", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "limit" },
  { id: "public-uploads", metric: "uploads_public", label: "Uploads publics", amount: null, unit: "upload", period: "month", scope: "account", reset: "monthly", overage: "not-applicable", kind: "unlimited" },
];

OFFER_QUOTAS['codefactor'] ??= [
  { id: "users", metric: "users", label: "Utilisateurs", amount: null, unit: "user", period: "lifetime", scope: "account", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
  { id: "public-repos", metric: "repositories", label: "Dépôts publics", amount: null, unit: "repository", period: "lifetime", scope: "account", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
  { id: "private-repos", metric: "repositories_private", label: "Dépôts privés", amount: 0, unit: "repository", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
];

OFFER_QUOTAS['coderabbit'] ??= [
  { id: "repos", metric: "repositories", label: "Dépôts", amount: null, unit: "repository", period: "lifetime", scope: "account", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
  { id: "cli-reviews", metric: "reviews", label: "Revues CLI", amount: 3, unit: "review/hour", period: "variable", scope: "user", reset: "rolling", overage: "blocked", kind: "limit" },
  { id: "ide-reviews", metric: "reviews_ide", label: "Revues IDE", amount: 1, unit: "review/hour", period: "variable", scope: "user", reset: "rolling", overage: "blocked", kind: "limit" },
  { id: "files", metric: "files", label: "Fichiers par revue", amount: 150, unit: "file", period: "session", scope: "review", reset: "not-applicable", overage: "blocked", kind: "limit" },
];

OFFER_QUOTAS['codspeed'] ??= [
  { id: "public-users", metric: "users_public", label: "Utilisateurs sur dépôts publics", amount: null, unit: "user", period: "lifetime", scope: "organization", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
  { id: "private-users", metric: "users", label: "Utilisateurs sur dépôts privés", amount: 5, unit: "user", period: "lifetime", scope: "organization", reset: "never", overage: "blocked", kind: "limit" },
  { id: "private-repos", metric: "repositories", label: "Dépôts privés", amount: null, unit: "repository", period: "lifetime", scope: "organization", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
  { id: "macro-minutes", metric: "compute_time", label: "Minutes Macro Runners", amount: 600, unit: "minute", period: "month", scope: "organization", reset: "monthly", overage: "billed", kind: "limit" },
  { id: "history", metric: "history", label: "Historique de performance", amount: 3, unit: "month", period: "lifetime", scope: "organization", reset: "never", overage: "degraded", kind: "limit" },
];

OFFER_QUOTAS['coveralls'] ??= [
  { id: "public-repos", metric: "repositories", label: "Dépôts publics", amount: null, unit: "repository", period: "lifetime", scope: "account", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
  { id: "private-repos", metric: "repositories_private", label: "Dépôts privés", amount: 0, unit: "repository", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
];

OFFER_QUOTAS['deepscan'] ??= [
  { id: "seats", metric: "users", label: "Sièges", amount: 100, unit: "user", period: "lifetime", scope: "team", reset: "never", overage: "blocked", kind: "limit" },
  { id: "public-projects", metric: "projects", label: "Projets publics", amount: 1000, unit: "project", period: "lifetime", scope: "team", reset: "never", overage: "blocked", kind: "limit" },
  { id: "private-projects", metric: "projects_private", label: "Projets privés", amount: 0, unit: "project", period: "lifetime", scope: "team", reset: "never", overage: "blocked", kind: "limit" },
  { id: "history", metric: "history", label: "Historique des tendances", amount: 3, unit: "month", period: "lifetime", scope: "team", reset: "never", overage: "degraded", kind: "limit" },
];

OFFER_QUOTAS['deepsource'] ??= [
  { id: "individual-analysis", metric: "analyses", label: "Analyses Individual", amount: null, unit: "analysis", period: "month", scope: "account", reset: "monthly", overage: "not-applicable", kind: "unlimited" },
  { id: "individual-format", metric: "format_runs", label: "Formatages Individual", amount: null, unit: "run", period: "month", scope: "account", reset: "monthly", overage: "not-applicable", kind: "unlimited" },
  { id: "oss-analysis", metric: "analyses_oss", label: "Analyses Open Source", amount: 1000, unit: "analysis", period: "month", scope: "team", reset: "monthly", overage: "blocked", kind: "limit" },
  { id: "oss-format", metric: "format_runs_oss", label: "Formatages Open Source", amount: 1000, unit: "run", period: "month", scope: "team", reset: "monthly", overage: "blocked", kind: "limit" },
];

OFFER_QUOTAS['difftext'] ??= [
  { id: "comparisons", metric: "comparisons", label: "Comparaisons locales", amount: null, unit: "comparison", period: "lifetime", scope: "browser", reset: "not-applicable", overage: "not-applicable", kind: "unmetered" },
];

OFFER_QUOTAS['eversql'] ??= [
  { id: "availability", metric: "availability", label: "Nouvelles inscriptions", amount: 0, unit: "signup", period: "lifetime", scope: "service", reset: "never", overage: "blocked", kind: "limit", notes: "Service autonome fermé aux nouvelles inscriptions." },
];

OFFER_QUOTAS['gerrithub'] ??= [
  { id: "repositories", metric: "repositories", label: "Dépôts / projets", amount: null, unit: "repository", period: "variable", scope: "account", reset: "variable", overage: "unknown", kind: "not-published" },
];

OFFER_QUOTAS['go-report-card'] ??= [
  { id: "availability", metric: "availability", label: "Projets analysables sur le service hébergé", amount: 0, unit: "project", period: "lifetime", scope: "service", reset: "never", overage: "blocked", kind: "limit", notes: "Service hébergé officiellement arrêté." },
];

OFFER_QUOTAS['gtmetrix'] ??= [
  { id: "tests", metric: "tests", label: "Tests à la demande", amount: 5, unit: "test", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "limit", notes: "Allocation annoncée pendant les 3 premiers mois du compte Basic." },
  { id: "monitors", metric: "monitors", label: "URL monitorées", amount: 1, unit: "url", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "regions", metric: "regions", label: "Régions de test", amount: 2, unit: "region", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "api-credits", metric: "credits", label: "Crédits API d’essai", amount: 5, unit: "credit", period: "total", scope: "account", reset: "never", overage: "blocked", kind: "credit" },
];

OFFER_QUOTAS['holistic-dev'] ??= [
  { id: "usage", metric: "analyses", label: "Analyses SQL gratuites", amount: null, unit: "analysis", period: "variable", scope: "account", reset: "variable", overage: "unknown", kind: "not-published" },
];

OFFER_QUOTAS['hound'] ??= [
  { id: "public-repos", metric: "repositories", label: "Dépôts publics", amount: null, unit: "repository", period: "lifetime", scope: "account", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
  { id: "private-reviews", metric: "reviews_private", label: "Revues privées gratuites", amount: 0, unit: "review", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "limit" },
];

OFFER_QUOTAS['reviewable'] ??= [
  { id: "reviews", metric: "reviews", label: "Revues publiques et privées personnelles", amount: null, unit: "review", period: "lifetime", scope: "account", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
  { id: "upload-size", metric: "file_size", label: "Taille maximale des fichiers", amount: 10, unit: "MB", period: "session", scope: "review", reset: "not-applicable", overage: "blocked", kind: "limit" },
];

OFFER_QUOTAS['coverity-scan'] ??= [
  { id: "projects", metric: "projects", label: "Projets open source", amount: null, unit: "project", period: "variable", scope: "account", reset: "variable", overage: "unknown", kind: "not-published" },
];

OFFER_QUOTAS['scrutinizer-ci'] ??= [
  { id: "repositories", metric: "repositories", label: "Dépôts open source", amount: null, unit: "repository", period: "lifetime", scope: "account", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
  { id: "users", metric: "users", label: "Utilisateurs", amount: null, unit: "user", period: "lifetime", scope: "account", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
];

OFFER_QUOTAS['semanticdiff'] ??= [
  { id: "seats", metric: "users", label: "Sièges privés", amount: 3, unit: "user", period: "lifetime", scope: "installation", reset: "never", overage: "blocked", kind: "limit" },
  { id: "public-repos", metric: "repositories", label: "Dépôts publics open source", amount: null, unit: "repository", period: "lifetime", scope: "installation", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
  { id: "public-contributors", metric: "contributors", label: "Contributeurs open source", amount: null, unit: "user", period: "lifetime", scope: "installation", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
];

OFFER_QUOTAS['shields'] ??= [
  { id: "badges", metric: "badges", label: "Badges", amount: null, unit: "badge", period: "variable", scope: "service", reset: "variable", overage: "unknown", kind: "not-published" },
];

OFFER_QUOTAS['sonarqube-cloud'] ??= [
  { id: "users", metric: "users", label: "Utilisateurs", amount: 5, unit: "user", period: "lifetime", scope: "organization", reset: "never", overage: "blocked", kind: "limit" },
  { id: "private-loc", metric: "lines_of_code", label: "Lignes de code privées", amount: 50000, unit: "line", period: "lifetime", scope: "organization", reset: "never", overage: "blocked", kind: "limit" },
  { id: "public-projects", metric: "projects", label: "Projets publics", amount: null, unit: "project", period: "lifetime", scope: "organization", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
];
