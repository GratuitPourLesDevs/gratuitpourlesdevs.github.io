import { OFFER_QUOTAS } from './offer-quotas';

OFFER_QUOTAS['cloudflare-1-1-1-1'] ??= [
  { id: 'resolver', metric: 'dns_queries', label: 'Résolution DNS publique', amount: null, unit: 'query', period: 'lifetime', scope: 'service', reset: 'not-applicable', overage: 'degraded', kind: 'unmetered', notes: 'Aucun quota standard pour les usages Internet ordinaires ; Cloudflare peut limiter les trafics atypiques ou abusifs.' },
];
OFFER_QUOTAS['1984-freedns'] ??= [
  { id: 'zones', metric: 'dns_zones', label: 'Zones DNS', amount: null, unit: 'zone', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' },
  { id: 'records', metric: 'dns_records', label: 'Enregistrements par domaine', amount: null, unit: 'record', period: 'lifetime', scope: 'zone', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' },
];
OFFER_QUOTAS['cloudns'] ??= [
  { id: 'zones', metric: 'dns_zones', label: 'Zones DNS', amount: 1, unit: 'zone', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'records', metric: 'dns_records', label: 'Enregistrements DNS', amount: 50, unit: 'record', period: 'lifetime', scope: 'zone', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'queries', metric: 'dns_queries', label: 'Requêtes DNS', amount: 500000, unit: 'query', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
  { id: 'ddns', metric: 'ddns_hostnames', label: 'Hostnames Dynamic DNS', amount: 1, unit: 'hostname', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
];
OFFER_QUOTAS['desec'] ??= [
  { id: 'fair-use', metric: 'dns_usage', label: 'Usage DNS sous fair use', amount: null, unit: 'various', period: 'variable', scope: 'account', reset: 'variable', overage: 'degraded', kind: 'not-published', notes: 'deSEC ne publie pas un plafond universel ; les charges anormalement élevées peuvent être limitées.' },
];
OFFER_QUOTAS['hurricane-electric-free-dns'] ??= [
  { id: 'free-dns', metric: 'dns_usage', label: 'Capacité Free DNS', amount: null, unit: 'various', period: 'variable', scope: 'account', reset: 'variable', overage: 'unknown', kind: 'not-published', notes: 'Le portail confirme le service gratuit mais ne publie pas de plafond actuel consolidé pour les zones ou requêtes.' },
];
OFFER_QUOTAS['dnspod'] ??= [
  { id: 'records', metric: 'dns_records', label: 'Enregistrements DNS', amount: null, unit: 'record', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' },
  { id: 'subdomains', metric: 'subdomains', label: 'Sous-domaines', amount: null, unit: 'subdomain', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' },
  { id: 'url-forwards', metric: 'url_forwards', label: 'Redirections URL', amount: 2, unit: 'forward', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'subdomain-depth', metric: 'subdomain_depth', label: 'Niveaux de sous-domaines', amount: 5, unit: 'level', period: 'lifetime', scope: 'record', reset: 'never', overage: 'blocked', kind: 'limit' },
];
OFFER_QUOTAS['duckdns'] ??= [
  { id: 'hostnames', metric: 'ddns_hostnames', label: 'Sous-domaines Dynamic DNS', amount: 5, unit: 'hostname', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit', notes: 'Plafond confirmé par des intégrations maintenues ; la page publique DuckDNS sans authentification ne l’affiche pas explicitement.' },
];
OFFER_QUOTAS['dynv6'] ??= [
  { id: 'free-ddns', metric: 'ddns_usage', label: 'Usage Dynamic DNS gratuit', amount: null, unit: 'various', period: 'variable', scope: 'account', reset: 'variable', overage: 'unknown', kind: 'not-published', notes: 'dynv6 confirme la gratuité mais ne publie pas de quota numérique universel.' },
];
OFFER_QUOTAS['freedns-afraid'] ??= [
  { id: 'domains', metric: 'dns_zones', label: 'Domaines personnels', amount: null, unit: 'domain', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' },
  { id: 'shared-hostnames', metric: 'ddns_hostnames', label: 'Hostnames sur registre partagé', amount: 5, unit: 'hostname', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'own-domain-subdomains', metric: 'subdomains', label: 'Sous-domaines par domaine personnel', amount: 20, unit: 'subdomain', period: 'lifetime', scope: 'zone', reset: 'never', overage: 'blocked', kind: 'limit' },
];
OFFER_QUOTAS['hexdns'] ??= [
  { id: 'zones', metric: 'dns_zones', label: 'Zones DNS gratuites', amount: 3, unit: 'zone', period: 'lifetime', scope: 'account', reset: 'never', overage: 'billed', kind: 'limit', notes: 'Au-delà des trois premières zones, la tarification affichée est de 1 GBP par zone et par mois.' },
];
OFFER_QUOTAS['hetzner-dns'] ??= [
  { id: 'zones', metric: 'dns_zones', label: 'Zones DNS par défaut', amount: 25, unit: 'zone', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit', notes: 'Le quota par défaut peut être augmenté après demande au support Hetzner.' },
];
