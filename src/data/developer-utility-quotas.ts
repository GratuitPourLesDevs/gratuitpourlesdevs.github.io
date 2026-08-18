import { OFFER_QUOTAS } from './offer-quotas';

OFFER_QUOTAS['codekeep'] ??= [
  { id: "public-snippets", metric: "snippets_public", label: "Snippets publics", amount: null, unit: "snippet", period: "lifetime", scope: "account", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
  { id: "private-snippets", metric: "snippets_private", label: "Snippets privés", amount: 0, unit: "snippet", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "folders", metric: "folders", label: "Dossiers", amount: 40, unit: "folder", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "bookmarks", metric: "bookmarks", label: "Favoris de dossiers", amount: 20, unit: "bookmark", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
];

OFFER_QUOTAS['libraries-io'] ??= [
  { id: "search", metric: "searches", label: "Recherches web", amount: null, unit: "search", period: "variable", scope: "service", reset: "variable", overage: "unknown", kind: "not-published", notes: "Le service gratuit ne publie pas de quota chiffré pour la recherche web." },
  { id: "api", metric: "api_requests", label: "Requêtes API", amount: null, unit: "request", period: "variable", scope: "account", reset: "variable", overage: "unknown", kind: "not-published", notes: "Libraries.io décrit l’API comme limitée et soumise à un rate limit sans publier de quota chiffré sur sa page principale." },
];

OFFER_QUOTAS['namae'] ??= [
  { id: "checks", metric: "name_checks", label: "Vérifications de disponibilité", amount: null, unit: "check", period: "variable", scope: "service", reset: "variable", overage: "unknown", kind: "not-published", notes: "Aucun quota chiffré n’est publié dans le dépôt ; le service hébergé n’a pas pu être validé automatiquement." },
];

OFFER_QUOTAS['tickgit'] ??= [
  { id: "public-repos", metric: "repositories", label: "Dépôts publics", amount: null, unit: "repository", period: "variable", scope: "service", reset: "variable", overage: "not-applicable", kind: "unmetered", notes: "Le site annonce les dépôts publics gratuits sans publier de maximum chiffré." },
  { id: "private-repos", metric: "repositories_private", label: "Dépôts privés gratuits permanents", amount: 0, unit: "repository", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "private-trial", metric: "trial_duration", label: "Essai dépôts privés", amount: 3, unit: "day", period: "total", scope: "account", reset: "never", overage: "billed", kind: "credit", notes: "Le site annonce un essai de 3 jours pour le plan privé à 3 $/mois." },
];
