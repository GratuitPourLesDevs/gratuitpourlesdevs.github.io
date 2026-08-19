import { OFFER_QUOTAS } from './offer-quotas';

OFFER_QUOTAS["autolocalise"] ??= [
  { id: "characters", metric: "translation_characters", label: "Caractères comptabilisés", amount: 10000, unit: "character", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "limit", notes: "Le volume source est multiplié par le nombre de langues cibles." },
  { id: "projects", metric: "projects", label: "Projets", amount: 1, unit: "project", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
];

OFFER_QUOTAS["crowdin"] ??= [
  { id: "projects", metric: "projects", label: "Projets Open Source", amount: null, unit: "project", period: "lifetime", scope: "account", reset: "not-applicable", overage: "not-applicable", kind: "unlimited", notes: "Après approbation de la licence Open Source." },
  { id: "strings", metric: "translation_keys", label: "Chaînes", amount: null, unit: "string", period: "lifetime", scope: "account", reset: "not-applicable", overage: "not-applicable", kind: "unlimited", notes: "Après approbation de la licence Open Source." },
  { id: "members", metric: "team_members", label: "Membres", amount: null, unit: "user", period: "lifetime", scope: "account", reset: "not-applicable", overage: "not-applicable", kind: "unlimited", notes: "Après approbation de la licence Open Source." },
];

OFFER_QUOTAS["free-po-editor"] ??= [
  { id: "editor", metric: "editor_usage", label: "Utilisation de l’éditeur", amount: null, unit: "file", period: "variable", scope: "session", reset: "not-applicable", overage: "unknown", kind: "not-published", notes: "Aucun quota public chiffré n’est publié." },
];

OFFER_QUOTAS["lingo-dev"] ??= [
  { id: "open-source-cli", metric: "tool_usage", label: "CLI open source", amount: null, unit: "usage", period: "lifetime", scope: "installation", reset: "not-applicable", overage: "not-applicable", kind: "unmetered", notes: "L’outil est open source ; les coûts éventuels du LLM ou du service managé restent séparés." },
];

OFFER_QUOTAS["lingohub"] ??= [
  { id: "sponsored-plan", metric: "sponsored_capacity", label: "Capacité du Sponsored Plan", amount: null, unit: "various", period: "variable", scope: "account", reset: "variable", overage: "unknown", kind: "not-published", notes: "Les quotas du plan sponsorisé gratuit ne sont pas publiés précisément." },
];

OFFER_QUOTAS["localhero"] ??= [
  { id: "credits", metric: "translation_credits", label: "Crédits de traduction", amount: 250, unit: "credit", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "limit", notes: "Un crédit correspond à une clé source jusqu’à 100 caractères vers une langue cible." },
  { id: "projects", metric: "projects", label: "Projets", amount: 1, unit: "project", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
];

OFFER_QUOTAS["localazy"] ??= [
  { id: "source-keys", metric: "translation_keys", label: "Clés source", amount: 200, unit: "key", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "seats", metric: "team_members", label: "Sièges", amount: null, unit: "user", period: "lifetime", scope: "account", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
  { id: "languages", metric: "languages", label: "Langues", amount: null, unit: "language", period: "lifetime", scope: "account", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
];

OFFER_QUOTAS["localit"] ??= [
  { id: "users", metric: "team_members", label: "Utilisateurs", amount: 2, unit: "user", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "keys", metric: "translation_keys", label: "Clés partagées", amount: 500, unit: "key", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit", shared: true },
  { id: "storage", metric: "storage", label: "Stockage", amount: 100, unit: "MB", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "ai-tokens", metric: "ai_tokens", label: "Tokens AI Assistant", amount: 10000, unit: "token", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "limit" },
];

OFFER_QUOTAS["localizely"] ??= [
  { id: "keys", metric: "translation_keys", label: "Clés hébergées", amount: 250, unit: "key", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "projects", metric: "projects", label: "Projets", amount: 1, unit: "project", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "users", metric: "team_members", label: "Utilisateurs", amount: null, unit: "user", period: "lifetime", scope: "account", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
  { id: "languages", metric: "languages", label: "Langues", amount: null, unit: "language", period: "lifetime", scope: "account", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
];

OFFER_QUOTAS["loco"] ??= [
  { id: "translations", metric: "translations", label: "Traductions", amount: 2000, unit: "translation", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "projects", metric: "projects", label: "Projets privés", amount: 2, unit: "project", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "languages", metric: "languages", label: "Langues par projet", amount: 10, unit: "language", period: "lifetime", scope: "project", reset: "never", overage: "blocked", kind: "limit" },
  { id: "assets", metric: "translation_assets", label: "Assets traduisibles par projet", amount: 1000, unit: "asset", period: "lifetime", scope: "project", reset: "never", overage: "blocked", kind: "limit" },
  { id: "translators", metric: "team_members", label: "Traducteurs", amount: null, unit: "user", period: "lifetime", scope: "account", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
];

OFFER_QUOTAS["poeditor"] ??= [
  { id: "strings", metric: "translation_keys", label: "Chaînes", amount: 1000, unit: "string", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit", shared: true },
  { id: "projects", metric: "projects", label: "Projets", amount: null, unit: "project", period: "lifetime", scope: "account", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
  { id: "contributors", metric: "team_members", label: "Contributeurs", amount: 5, unit: "user", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
];

OFFER_QUOTAS["simplelocalize"] ??= [
  { id: "keys", metric: "translation_keys", label: "Clés", amount: 250, unit: "key", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "projects", metric: "projects", label: "Projets", amount: 10, unit: "project", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "languages", metric: "languages", label: "Langues", amount: 10, unit: "language", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "team-member", metric: "team_members", label: "Membre d’équipe", amount: 1, unit: "user", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "contributors", metric: "contributors", label: "Contributeurs", amount: null, unit: "user", period: "lifetime", scope: "account", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
];

OFFER_QUOTAS["texterify"] ??= [
  { id: "users", metric: "team_members", label: "Utilisateurs", amount: 1, unit: "user", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "projects", metric: "projects", label: "Projets", amount: 1, unit: "project", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "languages", metric: "languages", label: "Langues", amount: 2, unit: "language", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  { id: "keys", metric: "translation_keys", label: "Clés", amount: null, unit: "key", period: "lifetime", scope: "account", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
  { id: "translations", metric: "translations", label: "Traductions", amount: null, unit: "translation", period: "lifetime", scope: "account", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
];

OFFER_QUOTAS["tolgee"] ??= [
  { id: "cloud-keys", metric: "translation_keys", label: "Clés Cloud", amount: 500, unit: "key", period: "lifetime", scope: "account", reset: "never", overage: "billed", kind: "limit" },
  { id: "cloud-seats", metric: "team_members", label: "Sièges Cloud", amount: 3, unit: "user", period: "lifetime", scope: "account", reset: "never", overage: "billed", kind: "limit" },
  { id: "selfhost-keys", metric: "translation_keys", label: "Clés self-hosted", amount: null, unit: "key", period: "lifetime", scope: "deployment", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
  { id: "selfhost-seats", metric: "team_members", label: "Sièges self-hosted", amount: 10, unit: "user", period: "lifetime", scope: "deployment", reset: "never", overage: "blocked", kind: "limit" },
];

OFFER_QUOTAS["transifex"] ??= [
  { id: "oss-words", metric: "hosted_words", label: "Mots hébergés Open Source", amount: null, unit: "word", period: "lifetime", scope: "project", reset: "not-applicable", overage: "not-applicable", kind: "unlimited", notes: "Pour les projets Open Source approuvés ; ces mots ne comptent pas dans les limites habituelles." },
];
