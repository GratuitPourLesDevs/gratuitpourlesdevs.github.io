import { OFFER_QUOTAS, type OfferQuota } from './offer-quotas';

const QUOTAS: Record<string, OfferQuota[]> = {
  "beste": [
    { id: "pages", metric: "projects", label: "Pages", amount: null, unit: "page", period: "lifetime", scope: "site", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
  ],
  "brandicons": [
    { id: "requests", metric: "requests", label: "Requêtes API", amount: 500000, unit: "request", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "limit" },
  ],
  "calendar-icons-generator": [
    { id: "icons", metric: "assets", label: "Icônes par année générée", amount: 365, unit: "icon", period: "total", scope: "generation", reset: "never", overage: "not-applicable", kind: "limit" },
  ],
  "canva": [
    { id: "storage", metric: "storage", label: "Stockage cloud", amount: 5, unit: "GB", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  ],
  "codedthemes": [
    { id: "catalog", metric: "assets", label: "Catalogue gratuit", amount: null, unit: "template", period: "variable", scope: "service", reset: "variable", overage: "unknown", kind: "not-published" },
  ],
  "excalidraw": [
    { id: "editor", metric: "usage", label: "Utilisation de l’éditeur open source", amount: null, unit: "use", period: "lifetime", scope: "service", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
  ],
  "figma": [
    { id: "team-files", metric: "files", label: "Fichiers collaboratifs d’équipe", amount: 3, unit: "file", period: "lifetime", scope: "team", reset: "never", overage: "blocked", kind: "limit" },
    { id: "ai", metric: "credit", label: "Crédits IA", amount: 500, unit: "credit", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "credit" },
  ],
  "flows": [
    { id: "mtu", metric: "users", label: "Utilisateurs suivis mensuels", amount: 100, unit: "user", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "limit" },
  ],
  "logo-dev": [
    { id: "requests", metric: "requests", label: "Requêtes mensuelles", amount: 500000, unit: "request", period: "month", scope: "account", reset: "monthly", overage: "degraded", kind: "limit" },
    { id: "credits", metric: "credit", label: "Crédits mensuels", amount: 500, unit: "credit", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "credit" },
  ],
  "marvel": [
    { id: "projects", metric: "projects", label: "Projets actifs", amount: 1, unit: "project", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  ],
  "mindmup": [
    { id: "maps", metric: "maps", label: "Création de cartes mentales", amount: null, unit: "map", period: "lifetime", scope: "service", reset: "not-applicable", overage: "not-applicable", kind: "unmetered" },
  ],
  "mockplus-cloud": [
    { id: "users", metric: "users", label: "Utilisateurs", amount: 10, unit: "user", period: "lifetime", scope: "team", reset: "never", overage: "blocked", kind: "limit" },
    { id: "projects", metric: "projects", label: "Projets actifs", amount: 10, unit: "project", period: "lifetime", scope: "team", reset: "never", overage: "blocked", kind: "limit" },
  ],
  "photopea": [
    { id: "editor", metric: "usage", label: "Utilisation de l’éditeur", amount: null, unit: "use", period: "lifetime", scope: "service", reset: "not-applicable", overage: "not-applicable", kind: "unmetered" },
  ],
  "plasmic": [
    { id: "collaborators", metric: "users", label: "Collaborateurs", amount: 3, unit: "user", period: "lifetime", scope: "workspace", reset: "never", overage: "blocked", kind: "limit" },
    { id: "projects", metric: "projects", label: "Projets", amount: null, unit: "project", period: "lifetime", scope: "workspace", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
  ],
  "proto-io": [
    { id: "projects", metric: "projects", label: "Projets actifs", amount: 1, unit: "project", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
    { id: "screens", metric: "screens", label: "Écrans de prototype", amount: 5, unit: "screen", period: "lifetime", scope: "project", reset: "never", overage: "blocked", kind: "limit" },
    { id: "storage", metric: "storage", label: "Stockage", amount: 10, unit: "MB", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  ],
  "quant-ux": [
    { id: "usage", metric: "usage", label: "Utilisation du service et du projet open source", amount: null, unit: "use", period: "lifetime", scope: "service", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
  ],
  "shadcn-studio": [
    { id: "free-blocks", metric: "assets", label: "Blocs shadcn gratuits", amount: 57, unit: "block", period: "lifetime", scope: "service", reset: "never", overage: "blocked", kind: "limit" },
  ],
  "svgicons": [
    { id: "search", metric: "usage", label: "Recherche et copie d’icônes gratuites", amount: null, unit: "icon", period: "lifetime", scope: "service", reset: "not-applicable", overage: "not-applicable", kind: "unmetered" },
  ],
  "unicorn-platform": [
    { id: "pages", metric: "pages", label: "Pages par site", amount: 10, unit: "page", period: "lifetime", scope: "site", reset: "never", overage: "blocked", kind: "limit" },
    { id: "published", metric: "sites", label: "Sites publiés", amount: 0, unit: "site", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
  ],
  "umso": [
    { id: "pages", metric: "pages", label: "Page d’accueil publiée", amount: 1, unit: "page", period: "lifetime", scope: "site", reset: "never", overage: "blocked", kind: "limit" },
  ],
  "updrafts": [
    { id: "limits", metric: "service_limits", label: "Limites du niveau gratuit", amount: null, unit: "various", period: "variable", scope: "service", reset: "variable", overage: "unknown", kind: "not-published" },
  ],
  "webflow": [
    { id: "pages", metric: "pages", label: "Pages statiques", amount: 2, unit: "page", period: "lifetime", scope: "site", reset: "never", overage: "blocked", kind: "limit" },
    { id: "bandwidth", metric: "bandwidth", label: "Bande passante", amount: 1, unit: "GB", period: "month", scope: "site", reset: "monthly", overage: "blocked", kind: "limit" },
    { id: "cms", metric: "records", label: "Éléments CMS", amount: 50, unit: "item", period: "lifetime", scope: "site", reset: "never", overage: "blocked", kind: "limit" },
  ],
  "webstudio": [
    { id: "asset-storage", metric: "storage", label: "Stockage d’assets", amount: 250, unit: "MB", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
    { id: "forms", metric: "submissions", label: "Soumissions de formulaire", amount: 300, unit: "submission", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "limit" },
    { id: "projects", metric: "projects", label: "Projets", amount: null, unit: "project", period: "lifetime", scope: "account", reset: "not-applicable", overage: "not-applicable", kind: "unlimited" },
  ],
  "whimsical": [
    { id: "boards", metric: "boards", label: "Team boards", amount: 3, unit: "board", period: "lifetime", scope: "workspace", reset: "never", overage: "blocked", kind: "limit" },
    { id: "storage", metric: "storage", label: "Stockage total", amount: 1, unit: "GB", period: "lifetime", scope: "workspace", reset: "never", overage: "blocked", kind: "limit" },
    { id: "guests", metric: "users", label: "Invités", amount: 10, unit: "user", period: "lifetime", scope: "workspace", reset: "never", overage: "blocked", kind: "limit" },
  ],
  "zeplin": [
    { id: "projects", metric: "projects", label: "Projets", amount: 1, unit: "project", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit" },
    { id: "screens", metric: "screens", label: "Écrans", amount: 100, unit: "screen", period: "lifetime", scope: "project", reset: "never", overage: "blocked", kind: "limit" },
    { id: "components", metric: "assets", label: "Composants du styleguide", amount: 100, unit: "component", period: "lifetime", scope: "project", reset: "never", overage: "blocked", kind: "limit" },
  ],
  "wrappixel": [
    { id: "catalog", metric: "assets", label: "Templates gratuits disponibles", amount: null, unit: "template", period: "variable", scope: "service", reset: "variable", overage: "unknown", kind: "not-published" },
  ],
  "themeselection": [
    { id: "catalog", metric: "assets", label: "Templates admin gratuits", amount: 15, unit: "template", period: "variable", scope: "service", reset: "variable", overage: "not-applicable", kind: "limit" },
  ],
  "adminmart": [
    { id: "catalog", metric: "assets", label: "Templates gratuits disponibles", amount: null, unit: "template", period: "variable", scope: "service", reset: "variable", overage: "unknown", kind: "not-published" },
  ],
};

for (const [id, quotas] of Object.entries(QUOTAS)) OFFER_QUOTAS[id] ??= quotas;

export const DESIGN_UI_QUOTA_SCORES = {
  "beste": 25,
  "brandicons": 25,
  "calendar-icons-generator": 25,
  "canva": 20,
  "codedthemes": 20,
  "excalidraw": 25,
  "figma": 20,
  "flows": 15,
  "logo-dev": 25,
  "marvel": 10,
  "mindmup": 20,
  "mockplus-cloud": 20,
  "photopea": 25,
  "plasmic": 25,
  "proto-io": 10,
  "quant-ux": 25,
  "shadcn-studio": 20,
  "svgicons": 25,
  "unicorn-platform": 10,
  "umso": 10,
  "updrafts": 10,
  "webflow": 10,
  "webstudio": 20,
  "whimsical": 15,
  "zeplin": 15,
  "wrappixel": 20,
  "themeselection": 20,
  "adminmart": 20,
} satisfies Record<string, 5 | 10 | 15 | 20 | 25>;
