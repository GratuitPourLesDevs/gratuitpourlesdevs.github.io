import { OFFER_QUOTAS, type OfferQuota } from './offer-quotas';

const QUOTAS: Record<string, OfferQuota[]> = {
  "clockwork-micro": [
    { id: "api", metric: "requests", label: "Requêtes API", amount: 50000, unit: "request", period: "month", scope: "account", reset: "monthly", overage: "billed", kind: "limit" },
    { id: "tiles", metric: "requests", label: "Requêtes de tuiles", amount: 50000, unit: "request", period: "month", scope: "account", reset: "monthly", overage: "billed", kind: "limit" },
  ],
  "foursquare": [
    { id: "pro-calls", metric: "requests", label: "Appels Places API Pro gratuits", amount: 500, unit: "request", period: "month", scope: "account", reset: "monthly", overage: "billed", kind: "limit", notes: "Tarification à l’usage au-delà du palier gratuit." },
  ],
  "geoapify": [
    { id: "credits", metric: "credit", label: "Crédits quotidiens", amount: 3000, unit: "credit", period: "day", scope: "account", reset: "daily", overage: "degraded", kind: "credit", notes: "Certaines APIs consomment plusieurs crédits par requête; les tuiles peuvent coûter une fraction de crédit." },
  ],
  "geocodio": [
    { id: "lookups", metric: "requests", label: "Recherches gratuites", amount: 2500, unit: "request", period: "day", scope: "account", reset: "daily", overage: "billed", kind: "limit", notes: "Sans moyen de paiement, le service peut couper au quota; avec paiement, l’overage est facturé." },
  ],
  "geocodify": [
    { id: "requests", metric: "requests", label: "Appels API", amount: 30000, unit: "request", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "limit" },
  ],
  "geojs": [
    { id: "requests", metric: "requests", label: "Requêtes API", amount: null, unit: "request", period: "variable", scope: "service", reset: "variable", overage: "unknown", kind: "unmetered", notes: "Aucune limite chiffrée actuellement; l’usage excessif peut être throttlé ou bloqué." },
  ],
  "geokeo": [
    { id: "requests", metric: "requests", label: "Requêtes API", amount: 2500, unit: "request", period: "day", scope: "account", reset: "daily", overage: "blocked", kind: "limit" },
  ],
  "graphhopper": [
    { id: "credits", metric: "credit", label: "Crédits Directions API", amount: 500, unit: "credit", period: "day", scope: "account", reset: "daily", overage: "blocked", kind: "credit", notes: "Le coût dépend de l’API et de la taille de la requête." },
  ],
  "here": [
    { id: "service-thresholds", metric: "service_limits", label: "Seuils gratuits par service", amount: null, unit: "various", period: "month", scope: "account", reset: "monthly", overage: "billed", kind: "not-published", notes: "Les volumes gratuits sont propres à chaque service HERE et sont présentés dans la tarification dynamique du Base Plan." },
  ],
  "ipgeolocation": [
    { id: "credits", metric: "credit", label: "Crédits API", amount: 1000, unit: "credit", period: "day", scope: "account", reset: "daily", overage: "blocked", kind: "credit", notes: "Un lookup standard consomme 1 crédit; certains modules peuvent en consommer davantage." },
  ],
  "ipstack": [
    { id: "requests", metric: "requests", label: "Requêtes API", amount: 100, unit: "request", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "limit" },
  ],
  "latlng": [
    { id: "shared-calls", metric: "requests", label: "Appels API partagés", amount: 3000, unit: "request", period: "day", scope: "account", reset: "daily", overage: "blocked", kind: "limit", notes: "Pool commun à plusieurs APIs." },
    { id: "reverse", metric: "requests", label: "Reverse geocoding", amount: 300, unit: "request", period: "day", scope: "account", reset: "daily", overage: "blocked", kind: "limit" },
    { id: "places", metric: "requests", label: "Places Search", amount: 100, unit: "request", period: "day", scope: "account", reset: "daily", overage: "blocked", kind: "limit" },
    { id: "static", metric: "requests", label: "Cartes statiques", amount: 100, unit: "image", period: "day", scope: "account", reset: "daily", overage: "blocked", kind: "limit" },
    { id: "datasets", metric: "datasets", label: "Datasets personnalisés", amount: 3, unit: "dataset", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit", notes: "50 MB maximum par dataset." },
  ],
  "locationiq": [
    { id: "requests", metric: "requests", label: "Requêtes API", amount: 5000, unit: "request", period: "day", scope: "account", reset: "daily", overage: "blocked", kind: "limit" },
  ],
  "mapbox": [
    { id: "web-loads", metric: "map_loads", label: "Chargements Mapbox GL JS", amount: 50000, unit: "load", period: "month", scope: "account", reset: "monthly", overage: "billed", kind: "limit" },
    { id: "mobile-mau", metric: "users", label: "Utilisateurs actifs Maps SDK mobile", amount: 25000, unit: "user", period: "month", scope: "account", reset: "monthly", overage: "billed", kind: "limit" },
    { id: "static-images", metric: "requests", label: "Static Images API", amount: 50000, unit: "request", period: "month", scope: "account", reset: "monthly", overage: "billed", kind: "limit" },
    { id: "temp-geocoding", metric: "requests", label: "Temporary Geocoding API", amount: 100000, unit: "request", period: "month", scope: "account", reset: "monthly", overage: "billed", kind: "limit" },
    { id: "tilequery", metric: "requests", label: "Tilequery API", amount: 100000, unit: "request", period: "month", scope: "account", reset: "monthly", overage: "billed", kind: "limit" },
  ],
  "maptiler": [
    { id: "storage", metric: "storage", label: "Stockage cloud", amount: 5, unit: "GB", period: "lifetime", scope: "account", reset: "never", overage: "blocked", kind: "limit", notes: "Le plan Free limite également le stockage à un seul fichier." },
    { id: "traffic", metric: "service_limits", label: "Limites de trafic Free", amount: null, unit: "various", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "not-published", notes: "Les limites sont appliquées par la plateforme; la page publique dynamique ne fournit pas un seul compteur global stable." },
  ],
  "nominatim": [
    { id: "public-usage", metric: "service_limits", label: "Politique de débit du serveur public", amount: null, unit: "request-rate", period: "variable", scope: "application", reset: "variable", overage: "blocked", kind: "not-published", notes: "Maximum absolu : 1 requête par seconde; des règles plus strictes s’appliquent à certains scripts et batchs." },
  ],
  "osmnames": [
    { id: "hosted-api", metric: "service_limits", label: "Quota de l’API hébergée", amount: null, unit: "various", period: "variable", scope: "service", reset: "variable", overage: "unknown", kind: "not-published", notes: "Aucun quota public actuel clairement documenté." },
  ],
  "positionstack": [
    { id: "requests", metric: "requests", label: "Requêtes API", amount: 100, unit: "request", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "limit" },
  ],
  "stadia-maps": [
    { id: "credits", metric: "credit", label: "Crédits mensuels", amount: 200000, unit: "credit", period: "month", scope: "account", reset: "monthly", overage: "blocked", kind: "credit", notes: "Le nombre de crédits consommés varie selon le type de tuile ou d’API." },
  ],
};

for (const [id, quotas] of Object.entries(QUOTAS)) OFFER_QUOTAS[id] ??= quotas;

export const CARTOGRAPHY_QUOTA_SCORES = {
  "clockwork-micro": 20,
  "foursquare": 10,
  "geoapify": 20,
  "geocodio": 20,
  "geocodify": 20,
  "geojs": 25,
  "geokeo": 25,
  "graphhopper": 15,
  "here": 5,
  "ipgeolocation": 15,
  "ipstack": 5,
  "latlng": 25,
  "locationiq": 20,
  "mapbox": 20,
  "maptiler": 15,
  "nominatim": 10,
  "osmnames": 15,
  "positionstack": 5,
  "stadia-maps": 20,
} satisfies Record<string, 5 | 10 | 15 | 20 | 25>;
