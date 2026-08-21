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
