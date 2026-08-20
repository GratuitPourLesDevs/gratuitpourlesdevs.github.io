import { OFFER_QUOTAS } from './offer-quotas';

OFFER_QUOTAS.bootstrapcdn ??= [
  { id: 'public-cdn', metric: 'requests', label: 'Utilisation du CDN public', amount: null, unit: 'request', period: 'variable', scope: 'public-service', reset: 'variable', overage: 'unknown', kind: 'not-published', notes: 'Aucun quota chiffré individuel n’est publié pour le CDN public.' },
];

OFFER_QUOTAS.cachefly ??= [
  { id: 'bandwidth', metric: 'bandwidth', label: 'Bande passante CDN', amount: 100, unit: 'GB', period: 'month', scope: 'account', reset: 'monthly', overage: 'unknown', kind: 'limit', notes: 'Developer Account gratuit actuel, sans limite de durée et sans carte bancaire selon la page tarifaire de juillet 2026.' },
];

OFFER_QUOTAS.cdnjs ??= [
  { id: 'public-cdn', metric: 'requests', label: 'Requêtes du CDN public', amount: null, unit: 'request', period: 'variable', scope: 'public-service', reset: 'variable', overage: 'unknown', kind: 'not-published', notes: 'Service public gratuit ; cdnjs ne publie pas de quota individuel ni de garantie d’absence de limite.' },
];

OFFER_QUOTAS['google-hosted-libraries'] ??= [
  { id: 'public-cdn', metric: 'requests', label: 'Requêtes vers les bibliothèques hébergées', amount: null, unit: 'request', period: 'variable', scope: 'public-service', reset: 'variable', overage: 'unknown', kind: 'not-published', notes: 'Google ne publie pas de quota chiffré pour l’utilisation publique des Hosted Libraries.' },
];

OFFER_QUOTAS.gcore ??= [
  { id: 'bandwidth', metric: 'bandwidth', label: 'Trafic CDN inclus', amount: 1, unit: 'TB', period: 'month', scope: 'account', reset: 'monthly', overage: 'billed', kind: 'limit' },
  { id: 'requests', metric: 'requests', label: 'Requêtes CDN avant tarification', amount: 1_000_000_000, unit: 'request', period: 'month', scope: 'account', reset: 'monthly', overage: 'billed', kind: 'limit', notes: 'La grille facture les requêtes au-delà de 1 milliard par blocs d’un million.' },
  { id: 'dns-requests', metric: 'dns_requests', label: 'Requêtes Managed DNS', amount: null, unit: 'request', period: 'month', scope: 'account', reset: 'monthly', overage: 'not-applicable', kind: 'unlimited' },
  { id: 'dns-zones', metric: 'dns_zones', label: 'Zones Managed DNS', amount: null, unit: 'zone', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' },
];

OFFER_QUOTAS.jsdelivr ??= [
  { id: 'bandwidth', metric: 'bandwidth', label: 'Bande passante open source', amount: null, unit: 'GB', period: 'month', scope: 'public-service', reset: 'monthly', overage: 'not-applicable', kind: 'unlimited', notes: 'jsDelivr indique explicitement qu’il n’existe aucune limite de bande passante pour son CDN open source.' },
];

OFFER_QUOTAS['microsoft-ajax-cdn'] ??= [
  { id: 'legacy-cdn', metric: 'requests', label: 'Utilisation du CDN historique', amount: null, unit: 'request', period: 'variable', scope: 'public-service', reset: 'variable', overage: 'unknown', kind: 'not-published', notes: 'Aucun quota chiffré ; le service n’est plus maintenu et son décommissionnement est annoncé.' },
];

OFFER_QUOTAS['namecheap-supersonic-cdn'] ??= [
  { id: 'bandwidth', metric: 'bandwidth', label: 'Trafic CDN Free affiché', amount: 50, unit: 'GB', period: 'month', scope: 'account', reset: 'monthly', overage: 'unknown', kind: 'limit', notes: 'Quota affiché sur la page Early Access ; disponibilité et conditions Free encore contradictoires.' },
];

OFFER_QUOTAS['ovh-ssl-gateway'] ??= [
  { id: 'free-gateway', metric: 'traffic', label: 'Trafic du SSL Gateway Free', amount: null, unit: 'request', period: 'variable', scope: 'gateway', reset: 'variable', overage: 'unknown', kind: 'not-published', notes: 'OVHcloud positionne le Free pour les sites à faible trafic sans publier de seuil chiffré.' },
  { id: 'metrics-retention', metric: 'retention', label: 'Rétention des métriques', amount: 1, unit: 'month', period: 'lifetime', scope: 'gateway', reset: 'never', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS.promoproxy ??= [
  { id: 'users', metric: 'users', label: 'Utilisateurs', amount: 5, unit: 'user', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'data', metric: 'bandwidth', label: 'Données quotidiennes', amount: 3, unit: 'GB', period: 'day', scope: 'account', reset: 'daily', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['raw-githack'] ??= [
  { id: 'requests', metric: 'requests', label: 'Requêtes CDN', amount: null, unit: 'request', period: 'variable', scope: 'public-service', reset: 'variable', overage: 'unknown', kind: 'not-published', notes: 'Service gratuit sans quota chiffré ni SLA formel.' },
];

OFFER_QUOTAS.skypack ??= [
  { id: 'requests', metric: 'requests', label: 'Requêtes du CDN de base', amount: null, unit: 'request', period: 'variable', scope: 'public-service', reset: 'variable', overage: 'unknown', kind: 'not-published', notes: 'Le site actuel ne publie plus l’ancien plafond de 1 million de requêtes par domaine et par mois.' },
];

OFFER_QUOTAS.statically ??= [
  { id: 'requests', metric: 'requests', label: 'Requêtes CDN open source', amount: null, unit: 'request', period: 'variable', scope: 'public-service', reset: 'variable', overage: 'unknown', kind: 'not-published' },
  { id: 'image-endpoint', metric: 'image_processing', label: 'Endpoint /img/', amount: 0, unit: 'endpoint', period: 'lifetime', scope: 'public-service', reset: 'never', overage: 'blocked', kind: 'limit', notes: 'Endpoint désactivé à cause des abus et du trafic élevé.' },
];

OFFER_QUOTAS.stellate ??= [
  { id: 'requests', metric: 'requests', label: 'Requêtes mensuelles', amount: 100_000, unit: 'request', period: 'month', scope: 'organization', reset: 'monthly', overage: 'degraded', kind: 'limit', notes: 'Au dépassement, les fonctionnalités sont désactivées mais les requêtes ne sont pas bloquées.' },
  { id: 'services', metric: 'services', label: 'Services', amount: null, unit: 'service', period: 'lifetime', scope: 'organization', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' },
  { id: 'seats', metric: 'users', label: 'Sièges', amount: null, unit: 'user', period: 'lifetime', scope: 'organization', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' },
  { id: 'retention', metric: 'retention', label: 'Rétention', amount: 1, unit: 'day', period: 'lifetime', scope: 'organization', reset: 'never', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['toran-proxy'] ??= [
  { id: 'legacy-usage', metric: 'usage', label: 'Utilisation du produit historique', amount: null, unit: 'developer', period: 'lifetime', scope: 'installation', reset: 'never', overage: 'unknown', kind: 'not-published', notes: 'Le produit est en phase de retrait ; l’éditeur renvoie vers Private Packagist.' },
];

OFFER_QUOTAS.unpkg ??= [
  { id: 'requests', metric: 'requests', label: 'Requêtes CDN npm', amount: null, unit: 'request', period: 'variable', scope: 'public-service', reset: 'variable', overage: 'unknown', kind: 'not-published', notes: 'UNPKG ne publie pas de quota individuel sur sa page publique.' },
];

OFFER_QUOTAS.weserv ??= [
  { id: 'uncached-images', metric: 'image_requests', label: 'Images non cachées', amount: 2_500, unit: 'image', period: 'variable', scope: 'ip', reset: 'rolling', overage: 'blocked', kind: 'limit', notes: 'Fenêtre glissante de 10 minutes par IP ; dépassement = blocage de l’IP pendant 1 heure.' },
];
