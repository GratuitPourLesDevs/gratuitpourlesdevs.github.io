import { OFFER_QUOTAS, type OfferQuota } from './offer-quotas';

const QUOTAS: Record<string, OfferQuota[]> = {
  "android-studio": [
    { id: "usage", metric: "usage", label: "Utilisation du logiciel", amount: null, unit: "usage", period: "lifetime", scope: "software", reset: "not-applicable", overage: "not-applicable", kind: "unmetered", notes: "Logiciel gratuit sans quota d’usage publié." },
  ],
  "code-on-the-go": [
    { id: "usage", metric: "usage", label: "Utilisation du logiciel", amount: null, unit: "usage", period: "lifetime", scope: "software", reset: "not-applicable", overage: "not-applicable", kind: "unmetered", notes: "Logiciel gratuit sans quota d’usage publié." },
  ],
  "apache-netbeans": [
    { id: "usage", metric: "usage", label: "Utilisation du logiciel", amount: null, unit: "usage", period: "lifetime", scope: "software", reset: "not-applicable", overage: "not-applicable", kind: "unmetered", notes: "Logiciel gratuit sans quota d’usage publié." },
  ],
  "apiary": [
    { id: "projects", metric: "projects", label: "Projets API", amount: null, unit: "project", period: "lifetime", scope: "account", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
    { id: "collaborators", metric: "users", label: "Collaborateurs par projet API", amount: 5, unit: "user", period: "lifetime", scope: "project", reset: "never", overage: "blocked", kind: "limit" },
  ],
  "bbedit": [
    { id: "free-mode", metric: "features", label: "Free Mode permanent", amount: null, unit: "feature-set", period: "lifetime", scope: "software", reset: "not-applicable", overage: "not-applicable", kind: "unmetered", notes: "Le noyau Free Mode reste utilisable après l’évaluation initiale ; les fonctions avancées sont désactivées." },
  ],
  "binder": [
    { id: "memory", metric: "memory", label: "Mémoire maximale indicative", amount: 2, unit: "GB", period: "session", scope: "session", reset: "not-applicable", overage: "blocked", kind: "limit", notes: "Environ 1 Go est garanti ; un kernel dépassant environ 2 Go peut être redémarré." },
    { id: "concurrency", metric: "parallelism", label: "Utilisateurs simultanés par dépôt", amount: 100, unit: "user", period: "session", scope: "repository", reset: "not-applicable", overage: "blocked", kind: "limit" },
    { id: "session-duration", metric: "usage_time", label: "Durée de session visée", amount: 6, unit: "hour", period: "session", scope: "session", reset: "not-applicable", overage: "blocked", kind: "limit", notes: "Le service public vise des sessions temporaires ; l’inactivité peut entraîner un arrêt bien avant cette durée." },
  ],
  "bluej": [
    { id: "usage", metric: "usage", label: "Utilisation du logiciel", amount: null, unit: "usage", period: "lifetime", scope: "software", reset: "not-applicable", overage: "not-applicable", kind: "unmetered", notes: "Logiciel gratuit sans quota d’usage publié." },
  ],
  "phoenix-code": [
    { id: "usage", metric: "usage", label: "Utilisation du logiciel", amount: null, unit: "usage", period: "lifetime", scope: "software", reset: "not-applicable", overage: "not-applicable", kind: "unmetered", notes: "Logiciel gratuit sans quota d’usage publié." },
  ],
  "cacher": [
    { id: "private-snippets", metric: "snippets", label: "Snippets privés", amount: 15, unit: "snippet", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
    { id: "private-labels", metric: "labels", label: "Labels privés", amount: 3, unit: "label", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
    { id: "attachment-size", metric: "file_size", label: "Taille d’une pièce jointe", amount: 10, unit: "MB", period: "lifetime", scope: "file", reset: "never", overage: "blocked", kind: "limit" },
    { id: "uploads", metric: "storage", label: "Uploads mensuels", amount: 50, unit: "MB", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "limit" },
  ],
  "cocalc": [
    { id: "storage", metric: "storage", label: "Disque par projet Trial", amount: 3, unit: "GB", period: "lifetime", scope: "project", reset: "never", overage: "blocked", kind: "limit" },
    { id: "memory", metric: "memory", label: "RAM par projet Trial", amount: 1, unit: "GB", period: "session", scope: "project", reset: "not-applicable", overage: "blocked", kind: "limit" },
    { id: "idle-timeout", metric: "usage_time", label: "Timeout d’inactivité", amount: 30, unit: "minute", period: "session", scope: "session", reset: "not-applicable", overage: "blocked", kind: "limit" },
  ],
  "codeblocks": [
    { id: "usage", metric: "usage", label: "Utilisation du logiciel", amount: null, unit: "usage", period: "lifetime", scope: "software", reset: "not-applicable", overage: "not-applicable", kind: "unmetered", notes: "Logiciel gratuit sans quota d’usage publié." },
  ],
  "codeground": [
    { id: "ai-conversations", metric: "requests", label: "Conversations AI Code Assistant", amount: 5, unit: "conversation", period: "day", scope: "account", reset: "daily", overage: "blocked", kind: "limit" },
    { id: "ai-analysis", metric: "requests", label: "Analyses IA", amount: 2, unit: "analysis", period: "day", scope: "account", reset: "daily", overage: "blocked", kind: "limit" },
    { id: "grounds", metric: "projects", label: "Grounds sauvegardés", amount: 10, unit: "project", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  ],
  "codiga": [
    { id: "free-features", metric: "service_limits", label: "Fonctions gratuites Coding Assistant", amount: null, unit: "various", period: "variable", scope: "account", reset: "variable", overage: "unknown", kind: "not-published", notes: "Les fonctions individuelles de snippets restent gratuites ; le partage privé d’équipe et l’offre d’analyse statique ont des conditions distinctes." },
  ],
  "eclipse-che": [
    { id: "hosted-instance", metric: "service_limits", label: "Limites de l’instance publique", amount: null, unit: "various", period: "variable", scope: "service", reset: "variable", overage: "unknown", kind: "not-published", notes: "L’instance hébergée pour essayer Eclipse Che n’est pas documentée comme un free tier commercial avec quotas garantis." },
  ],
  "forgecode": [
    { id: "free-requests", metric: "requests", label: "Requêtes gratuites dynamiques", amount: null, unit: "request", period: "day", scope: "account", reset: "daily", overage: "blocked", kind: "not-published", notes: "ForgeCode indique généralement 10 à 50 requêtes par jour selon la capacité et les modèles disponibles." },
  ],
  "getvm": [
    { id: "vms", metric: "compute", label: "VM par jour", amount: 5, unit: "VM", period: "day", scope: "account", reset: "daily", overage: "blocked", kind: "limit" },
    { id: "cpu", metric: "compute", label: "CPU par VM", amount: 1, unit: "core", period: "session", scope: "VM", reset: "not-applicable", overage: "blocked", kind: "limit" },
    { id: "memory", metric: "memory", label: "RAM par VM", amount: 2, unit: "GB", period: "session", scope: "VM", reset: "not-applicable", overage: "blocked", kind: "limit" },
    { id: "session", metric: "usage_time", label: "Durée d’une session VM", amount: 30, unit: "minute", period: "session", scope: "VM", reset: "not-applicable", overage: "blocked", kind: "limit" },
  ],
  "jdoodle": [
    { id: "executions", metric: "executions", label: "Exécutions IDE", amount: 100, unit: "execution", period: "day", scope: "account", reset: "daily", overage: "blocked", kind: "limit" },
    { id: "api", metric: "credit", label: "Crédits Compiler API", amount: 20, unit: "credit", period: "day", scope: "account", reset: "daily", overage: "blocked", kind: "credit" },
    { id: "projects", metric: "projects", label: "Projets", amount: 25, unit: "project", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
    { id: "memory", metric: "memory", label: "RAM", amount: 0.5, unit: "GB", period: "session", scope: "execution", reset: "not-applicable", overage: "blocked", kind: "limit" },
    { id: "cpu", metric: "compute", label: "CPU", amount: 0.5, unit: "vCPU", period: "session", scope: "execution", reset: "not-applicable", overage: "blocked", kind: "limit" },
    { id: "ai", metric: "credit", label: "Crédits IA", amount: 15, unit: "credit", period: "day", scope: "account", reset: "daily", overage: "blocked", kind: "credit" },
  ],
  "jetbrains": [
    { id: "license", metric: "license", label: "Utilisation gratuite selon licence", amount: null, unit: "license", period: "lifetime", scope: "user", reset: "not-applicable", overage: "not-applicable", kind: "unmetered", notes: "Le périmètre commercial dépend du produit : cœur IntelliJ IDEA gratuit pour tous ; plusieurs IDE professionnels gratuits uniquement pour usage non commercial." },
  ],
  "jsonplaceholder": [
    { id: "public-api", metric: "requests", label: "Requêtes vers l’API publique", amount: null, unit: "request", period: "variable", scope: "service", reset: "variable", overage: "unknown", kind: "not-published", notes: "Aucun quota contractuel public n’est annoncé ; le service est destiné au prototypage et aux tests." },
  ],
  "lazarus": [
    { id: "usage", metric: "usage", label: "Utilisation du logiciel", amount: null, unit: "usage", period: "lifetime", scope: "software", reset: "not-applicable", overage: "not-applicable", kind: "unmetered", notes: "Logiciel gratuit sans quota d’usage publié." },
  ],
  "trae-ide": [
    { id: "free-ai", metric: "service_limits", label: "Capacité IA du plan Free", amount: null, unit: "various", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "not-published", notes: "Les quotas du niveau Free dépendent des modèles et de l’offre courante TRAE." },
  ],
  "mockaroo": [
    { id: "rows", metric: "rows", label: "Lignes par fichier", amount: 1000, unit: "row", period: "session", scope: "file", reset: "not-applicable", overage: "blocked", kind: "limit" },
    { id: "api", metric: "requests", label: "Requêtes Mock API", amount: 200, unit: "request", period: "day", scope: "account", reset: "daily", overage: "blocked", kind: "limit" },
  ],
  "mocklets": [
    { id: "collections", metric: "collections", label: "Collections", amount: 1, unit: "collection", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
    { id: "apis", metric: "apis", label: "APIs par collection", amount: 10, unit: "API", period: "lifetime", scope: "collection", reset: "never", overage: "blocked", kind: "limit" },
    { id: "files", metric: "files", label: "Fichiers par collection", amount: 5, unit: "file", period: "lifetime", scope: "collection", reset: "never", overage: "blocked", kind: "limit" },
    { id: "members", metric: "users", label: "Membres par collection", amount: 2, unit: "user", period: "lifetime", scope: "collection", reset: "never", overage: "blocked", kind: "limit" },
  ],
  "onecompiler": [
    { id: "public-usage", metric: "service_limits", label: "Limites du service gratuit", amount: null, unit: "various", period: "variable", scope: "service", reset: "variable", overage: "unknown", kind: "not-published", notes: "Le service est accessible gratuitement mais ne publie pas de quota contractuel unique." },
  ],
  "onlinegdb": [
    { id: "public-usage", metric: "service_limits", label: "Limites du service gratuit", amount: null, unit: "various", period: "variable", scope: "service", reset: "variable", overage: "unknown", kind: "not-published", notes: "Le service est accessible gratuitement mais ne publie pas de quota contractuel unique." },
  ],
  "pterocos": [
    { id: "local-projects", metric: "projects", label: "Projets stockés localement", amount: null, unit: "project", period: "lifetime", scope: "browser", reset: "not-applicable", overage: "not-applicable", kind: "unmetered", notes: "La limite pratique dépend du stockage local du navigateur." },
  ],
  "paiza-cloud": [
    { id: "servers", metric: "compute", label: "Serveurs", amount: 1, unit: "server", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
    { id: "daily-runtime", metric: "usage_time", label: "Temps d’exécution quotidien", amount: 4, unit: "hour", period: "day", scope: "account", reset: "daily", overage: "blocked", kind: "limit" },
    { id: "lifetime", metric: "usage_time", label: "Durée de vie d’un serveur", amount: 24, unit: "hour", period: "session", scope: "server", reset: "not-applicable", overage: "blocked", kind: "limit" },
    { id: "cpu", metric: "compute", label: "CPU", amount: 2, unit: "core", period: "session", scope: "server", reset: "not-applicable", overage: "blocked", kind: "limit" },
    { id: "memory", metric: "memory", label: "RAM", amount: 2, unit: "GB", period: "session", scope: "server", reset: "not-applicable", overage: "blocked", kind: "limit" },
    { id: "storage", metric: "storage", label: "Stockage", amount: 1, unit: "GB", period: "lifetime", scope: "server", reset: "never", overage: "blocked", kind: "limit" },
  ],
  "phpsandbox": [
    { id: "notebooks", metric: "projects", label: "Notebooks", amount: 10, unit: "notebook", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
    { id: "timeout", metric: "usage_time", label: "Timeout par notebook", amount: 5, unit: "minute", period: "session", scope: "notebook", reset: "not-applicable", overage: "blocked", kind: "limit" },
    { id: "storage", metric: "storage", label: "Stockage par notebook", amount: 1, unit: "GB", period: "lifetime", scope: "notebook", reset: "never", overage: "blocked", kind: "limit" },
    { id: "memory", metric: "memory", label: "Mémoire par notebook", amount: 1, unit: "GB", period: "session", scope: "notebook", reset: "not-applicable", overage: "blocked", kind: "limit" },
  ],
  "replit": [
    { id: "published-apps", metric: "applications", label: "Application publiée", amount: 1, unit: "application", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit", notes: "La publication gratuite peut expirer après environ 30 jours et être republiée." },
    { id: "agent", metric: "credit", label: "Crédits Agent quotidiens", amount: null, unit: "credit", period: "day", scope: "account", reset: "daily", overage: "blocked", kind: "not-published", notes: "Le volume exact n’est pas affiché comme un quota public stable." },
    { id: "cloud", metric: "credit", label: "Crédits cloud Starter", amount: null, unit: "credit", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "not-published", notes: "L’allocation évolue avec le plan Starter courant." },
  ],
  "runmat": [
    { id: "runtime", metric: "usage", label: "Runtime, CLI et sandbox navigateur", amount: null, unit: "usage", period: "lifetime", scope: "software", reset: "not-applicable", overage: "not-applicable", kind: "unmetered" },
    { id: "temporary-sandboxes", metric: "projects", label: "Sandboxes temporaires", amount: null, unit: "sandbox", period: "lifetime", scope: "software", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
  ],
  "sololearn-code-playground": [
    { id: "public-usage", metric: "service_limits", label: "Limites du service gratuit", amount: null, unit: "various", period: "variable", scope: "service", reset: "variable", overage: "unknown", kind: "not-published", notes: "Le service est accessible gratuitement mais ne publie pas de quota contractuel unique." },
  ],
  "stackblitz": [
    { id: "public-projects", metric: "projects", label: "Projets publics", amount: null, unit: "project", period: "lifetime", scope: "account", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
    { id: "uploads", metric: "file_size", label: "Upload de fichiers par projet", amount: 1, unit: "MB", period: "lifetime", scope: "project", reset: "never", overage: "blocked", kind: "limit" },
  ],
  "visual-studio-code": [
    { id: "usage", metric: "usage", label: "Utilisation du logiciel", amount: null, unit: "usage", period: "lifetime", scope: "software", reset: "not-applicable", overage: "not-applicable", kind: "unmetered", notes: "Logiciel gratuit sans quota d’usage publié." },
  ],
  "visual-studio-community": [
    { id: "individual", metric: "license", label: "Utilisation individuelle", amount: null, unit: "license", period: "lifetime", scope: "user", reset: "not-applicable", overage: "not-applicable", kind: "unmetered", notes: "Tout développeur individuel peut utiliser Community pour créer ses propres applications, gratuites ou payantes." },
    { id: "organization-users", metric: "users", label: "Utilisateurs en organisation non-Enterprise", amount: 5, unit: "user", period: "lifetime", scope: "organization", reset: "never", overage: "blocked", kind: "limit", notes: "Hors scénarios explicitement exemptés comme l’open source, l’enseignement ou la recherche académique." },
  ],
  "vscodium": [
    { id: "usage", metric: "usage", label: "Utilisation du logiciel", amount: null, unit: "usage", period: "lifetime", scope: "software", reset: "not-applicable", overage: "not-applicable", kind: "unmetered", notes: "Logiciel gratuit sans quota d’usage publié." },
  ],
  "wakatime": [
    { id: "history", metric: "history", label: "Historique visible du dashboard", amount: 7, unit: "day", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
    { id: "projects", metric: "projects", label: "Projets", amount: null, unit: "project", period: "lifetime", scope: "account", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
    { id: "goals", metric: "goals", label: "Objectifs de programmation", amount: 1, unit: "goal", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  ],
  "wave-terminal": [
    { id: "usage", metric: "usage", label: "Utilisation du logiciel", amount: null, unit: "usage", period: "lifetime", scope: "software", reset: "not-applicable", overage: "not-applicable", kind: "unmetered", notes: "Logiciel gratuit sans quota d’usage publié." },
  ],
};

for (const [id, quotas] of Object.entries(QUOTAS)) OFFER_QUOTAS[id] ??= quotas;

export const IDE_CODE_QUOTA_SCORES = {
  "android-studio": 25,
  "code-on-the-go": 25,
  "apache-netbeans": 25,
  "apiary": 20,
  "bbedit": 15,
  "binder": 15,
  "bluej": 25,
  "phoenix-code": 25,
  "cacher": 15,
  "cocalc": 10,
  "codeblocks": 25,
  "codeground": 20,
  "codiga": 15,
  "eclipse-che": 20,
  "forgecode": 15,
  "getvm": 15,
  "jdoodle": 20,
  "jetbrains": 20,
  "jsonplaceholder": 25,
  "lazarus": 25,
  "trae-ide": 15,
  "mockaroo": 20,
  "mocklets": 15,
  "onecompiler": 20,
  "onlinegdb": 20,
  "pterocos": 25,
  "paiza-cloud": 20,
  "phpsandbox": 20,
  "replit": 15,
  "runmat": 25,
  "sololearn-code-playground": 15,
  "stackblitz": 25,
  "visual-studio-code": 25,
  "visual-studio-community": 20,
  "vscodium": 25,
  "wakatime": 15,
  "wave-terminal": 25,
} satisfies Record<string, 5 | 10 | 15 | 20 | 25>;
