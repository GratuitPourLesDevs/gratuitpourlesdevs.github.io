import { OFFER_QUOTAS } from './offer-quotas';

OFFER_QUOTAS['huawei-cloud-dns'] ??= [
  { id: 'public-zones', metric: 'dns_zones', label: 'Zones publiques', amount: 50, unit: 'zone', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'private-zones', metric: 'dns_private_zones', label: 'Zones privées', amount: 50, unit: 'zone', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'record-sets', metric: 'dns_records', label: 'Jeux d’enregistrements', amount: 500, unit: 'record-set', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'ptr', metric: 'ptr_records', label: 'Enregistrements PTR', amount: 50, unit: 'record', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
];
OFFER_QUOTAS['localcert'] ??= [
  { id: 'subdomains', metric: 'subdomains', label: 'Sous-domaines .localcert.net', amount: null, unit: 'hostname', period: 'variable', scope: 'service', reset: 'variable', overage: 'unknown', kind: 'not-published', notes: 'Le service est gratuit mais ne publie pas de plafond numérique universel.' },
];
OFFER_QUOTAS['luadns'] ??= [
  { id: 'domains', metric: 'dns_zones', label: 'Domaines', amount: 3, unit: 'domain', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'records', metric: 'dns_records', label: 'Enregistrements DNS', amount: 30, unit: 'record', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'queries', metric: 'dns_queries', label: 'Requêtes DNS', amount: null, unit: 'query', period: 'month', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' },
];
OFFER_QUOTAS['namecheap-freedns'] ??= [
  { id: 'domains', metric: 'dns_zones', label: 'Domaines gérés gratuitement', amount: null, unit: 'domain', period: 'variable', scope: 'account', reset: 'variable', overage: 'unknown', kind: 'not-published', notes: 'La page actuelle confirme FreeDNS mais ne publie plus clairement un nombre maximal de domaines.' },
];
OFFER_QUOTAS['nextdns'] ??= [
  { id: 'queries', metric: 'dns_queries', label: 'Requêtes DNS filtrées', amount: 300000, unit: 'query', period: 'month', scope: 'account', reset: 'monthly', overage: 'degraded', kind: 'limit', notes: 'Après le quota, la résolution continue mais le filtrage, les logs et fonctions avancées sont suspendus jusqu’au reset.' },
  { id: 'devices', metric: 'devices', label: 'Appareils', amount: null, unit: 'device', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' },
  { id: 'configurations', metric: 'configurations', label: 'Configurations', amount: null, unit: 'configuration', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' },
];
OFFER_QUOTAS['noip-at'] ??= [
  { id: 'hostnames', metric: 'ddns_hostnames', label: 'Hostnames Dynamic DNS', amount: null, unit: 'hostname', period: 'variable', scope: 'service', reset: 'variable', overage: 'unknown', kind: 'not-published', notes: 'Aucun plafond actuel n’est publié comme garantie.' },
  { id: 'inactivity', metric: 'retention', label: 'Délai avant suppression pour inactivité', amount: 90, unit: 'day', period: 'lifetime', scope: 'hostname', reset: 'never', overage: 'blocked', kind: 'limit' },
];
OFFER_QUOTAS['no-ip'] ??= [
  { id: 'hostnames', metric: 'ddns_hostnames', label: 'Hostnames Dynamic DNS', amount: 1, unit: 'hostname', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'update-clients', metric: 'update_clients', label: 'Clients de mise à jour', amount: 1, unit: 'client', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'confirmation', metric: 'confirmation_interval', label: 'Intervalle de confirmation obligatoire', amount: 30, unit: 'day', period: 'session', scope: 'hostname', reset: 'not-applicable', overage: 'blocked', kind: 'limit' },
];
OFFER_QUOTAS['sslip-io'] ??= [
  { id: 'resolution', metric: 'dns_queries', label: 'Résolution DNS par IP encodée', amount: null, unit: 'query', period: 'lifetime', scope: 'service', reset: 'not-applicable', overage: 'not-applicable', kind: 'unmetered' },
];
OFFER_QUOTAS['zilore'] ??= [
  { id: 'domains', metric: 'dns_zones', label: 'Domaines', amount: 5, unit: 'domain', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'records', metric: 'dns_records', label: 'Enregistrements par domaine', amount: 1000, unit: 'record', period: 'lifetime', scope: 'zone', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'queries', metric: 'dns_queries', label: 'Requêtes DNS', amount: 10000000, unit: 'query', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
  { id: 'snapshots', metric: 'snapshots', label: 'Snapshots par domaine', amount: 5, unit: 'snapshot', period: 'lifetime', scope: 'zone', reset: 'never', overage: 'blocked', kind: 'limit' },
];
OFFER_QUOTAS['zoneedit'] ??= [
  { id: 'queries', metric: 'dns_queries', label: 'Requêtes DNS', amount: 250000, unit: 'query', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
  { id: 'zones', metric: 'dns_zones', label: 'Zones gratuites', amount: null, unit: 'zone', period: 'variable', scope: 'account', reset: 'variable', overage: 'unknown', kind: 'not-published', notes: 'Le nombre actuel de zones gratuites n’est pas clairement publié.' },
];
OFFER_QUOTAS['zonomi'] ??= [
  { id: 'zones', metric: 'dns_zones', label: 'Zones DNS', amount: 1, unit: 'zone', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'records', metric: 'dns_records', label: 'Enregistrements DNS', amount: 10, unit: 'record', period: 'lifetime', scope: 'zone', reset: 'never', overage: 'blocked', kind: 'limit', notes: 'Valeur conservatrice : la page officielle affiche simultanément 10 et 20 records.' },
  { id: 'queries', metric: 'dns_queries', label: 'Requêtes DNS', amount: 1000000, unit: 'query', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
];
OFFER_QUOTAS['digitalplat-domains'] ??= [
  { id: 'names', metric: 'subdomains', label: 'Noms publics gratuits', amount: null, unit: 'hostname', period: 'variable', scope: 'account', reset: 'variable', overage: 'unknown', kind: 'not-published', notes: 'DigitalPlat confirme la gratuité mais ne publie pas de plafond numérique universel.' },
];
OFFER_QUOTAS['dnshe'] ??= [
  { id: 'base-domains', metric: 'subdomains', label: 'Inscriptions gratuites de base', amount: 3, unit: 'domain', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'referral-domains', metric: 'subdomains', label: 'Inscriptions supplémentaires par parrainage', amount: 2, unit: 'domain', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'validity', metric: 'registration_duration', label: 'Validité par inscription', amount: 1, unit: 'year', period: 'total', scope: 'domain', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'renewals', metric: 'renewals', label: 'Renouvellements gratuits', amount: null, unit: 'renewal', period: 'lifetime', scope: 'domain', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited', notes: 'Les renouvellements peuvent être répétés gratuitement tant que le nom reste en usage légitime.' },
];
OFFER_QUOTAS['isroot-in'] ??= [
  { id: 'subdomains', metric: 'subdomains', label: 'Sous-domaines gratuits', amount: null, unit: 'hostname', period: 'variable', scope: 'account', reset: 'variable', overage: 'unknown', kind: 'not-published', notes: 'Le nombre de sous-domaines par compte n’est pas publié comme plafond.' },
  { id: 'validity', metric: 'registration_duration', label: 'Validité initiale', amount: 1, unit: 'year', period: 'total', scope: 'hostname', reset: 'never', overage: 'blocked', kind: 'limit' },
];
OFFER_QUOTAS['pp-ua'] ??= [
  { id: 'registrations', metric: 'domain_registrations', label: 'Nouvelles inscriptions .PP.UA', amount: 3, unit: 'domain', period: 'month', scope: 'registrant', reset: 'rolling', overage: 'blocked', kind: 'limit', notes: 'Le règlement autorise au maximum 3 nouvelles inscriptions sur une période de 30 jours.' },
  { id: 'delegation', metric: 'registration_duration', label: 'Durée de délégation', amount: 1, unit: 'year', period: 'total', scope: 'domain', reset: 'never', overage: 'blocked', kind: 'limit' },
];
