import { OFFER_QUOTAS, type OfferQuota } from './offer-quotas';

const q = (id: string, input: Omit<OfferQuota, 'id'>): OfferQuota => ({ ...input, id });
const add = (offerId: string, quotas: OfferQuota[]) => { if (!OFFER_QUOTAS[offerId]) OFFER_QUOTAS[offerId] = quotas; };

add('hex', [
  q('projects', { metric: 'projects', label: 'Projets', amount: 5, unit: 'project', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked' }),
  q('notebooks', { metric: 'notebooks', label: 'Notebooks', amount: 5, unit: 'notebook', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked' }),
  q('published-apps', { metric: 'applications', label: 'Applications publiées', amount: 5, unit: 'application', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked' }),
]);
add('hook0', [
  q('events', { metric: 'events', label: 'Événements', amount: 100, unit: 'event', period: 'day', scope: 'account', reset: 'daily', overage: 'blocked' }),
  q('applications', { metric: 'applications', label: 'Applications', amount: 1, unit: 'application', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked' }),
  q('retention', { metric: 'retention', label: 'Rétention', amount: 7, unit: 'day', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'degraded' }),
]);
add('hoppscotch', [q('requests', { metric: 'requests', label: 'Requêtes depuis le client', amount: null, unit: 'request', period: 'lifetime', scope: 'user', reset: 'not-applicable', overage: 'not-applicable', kind: 'unmetered', notes: 'Le client open source n’impose pas de quota de requêtes ; les limites viennent de l’API cible.' })]);
add('hs-ping', [q('lookups', { metric: 'requests', label: 'Lookups HS/HTS', amount: 100, unit: 'request', period: 'day', scope: 'account', reset: 'daily', overage: 'blocked' })]);
add('hugging-face-inference-providers', [q('credits', { metric: 'credits', label: 'Crédits d’inférence', amount: 0.1, unit: 'USD', period: 'month', scope: 'user', reset: 'monthly', overage: 'blocked', kind: 'credit', notes: 'Montant sujet à changement ; usage additionnel nécessite l’achat de crédits.' })]);
add('insomnia', [
  q('git-users', { metric: 'users', label: 'Utilisateurs Git Sync', amount: 3, unit: 'user', period: 'lifetime', scope: 'project', reset: 'never', overage: 'blocked' }),
  q('mock-requests', { metric: 'requests', label: 'Requêtes Mock Server', amount: 1000, unit: 'request', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked' }),
  q('projects', { metric: 'projects', label: 'Projets Cloud/Local', amount: null, unit: 'project', period: 'lifetime', scope: 'user', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' }),
]);
add('inngest', [
  q('executions', { metric: 'executions', label: 'Exécutions', amount: 50000, unit: 'execution', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked' }),
  q('events', { metric: 'events', label: 'Événements ingérés', amount: 500000, unit: 'event', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked' }),
  q('concurrency', { metric: 'parallelism', label: 'Concurrence', amount: 5, unit: 'step', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked' }),
]);
add('invantive-cloud', [
  q('users', { metric: 'users', label: 'Utilisateurs', amount: null, unit: 'user', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' }),
  q('data-volume', { metric: 'data_volume', label: 'Volume de données', amount: null, unit: 'row', period: 'variable', scope: 'account', reset: 'variable', overage: 'unknown', kind: 'not-published', notes: 'Fair use et limites dépendant du connecteur gratuit éligible.' }),
]);
add('ipwho', [q('requests', { metric: 'requests', label: 'Requêtes', amount: 2000, unit: 'request', period: 'day', scope: 'account', reset: 'daily', overage: 'blocked' })]);
add('ipgeolocation-io', [q('requests', { metric: 'requests', label: 'Requêtes', amount: 1000, unit: 'request', period: 'day', scope: 'account', reset: 'daily', overage: 'blocked' })]);
add('ip-api', [
  q('rate', { metric: 'requests', label: 'Débit maximum', amount: 45, unit: 'request/minute', period: 'variable', scope: 'source IP', reset: 'rolling', overage: 'blocked' }),
  q('monthly', { metric: 'requests', label: 'Quota mensuel', amount: null, unit: 'request', period: 'month', scope: 'source IP', reset: 'not-applicable', overage: 'not-applicable', kind: 'unmetered', notes: 'Pas de quota mensuel publié ; la limite de débit reste applicable.' }),
]);
add('ip-city', [q('requests', { metric: 'requests', label: 'Requêtes', amount: 100, unit: 'request', period: 'day', scope: 'api key', reset: 'daily', overage: 'blocked' })]);
add('ip2location-io', [
  q('geo', { metric: 'requests', label: 'Géolocalisations IP', amount: 50000, unit: 'request', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked' }),
  q('whois', { metric: 'requests', label: 'WHOIS', amount: 500, unit: 'request', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked' }),
  q('hosted-domains', { metric: 'requests', label: 'Domaines hébergés', amount: 50, unit: 'request', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked' }),
]);
add('proxmint-geoip', [q('requests', { metric: 'requests', label: 'Quota public', amount: null, unit: 'request', period: 'variable', scope: 'service', reset: 'variable', overage: 'unknown', kind: 'not-published', notes: 'À revérifier : la page spécifique GeoIP n’était pas accessible lors du contrôle.' })]);
add('ip2geo-dev', [q('requests', { metric: 'requests', label: 'Conversions IP', amount: 1000, unit: 'request', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked' })]);
add('ipaddress-sh', [q('requests', { metric: 'requests', label: 'Quota de requêtes', amount: null, unit: 'request', period: 'variable', scope: 'service', reset: 'variable', overage: 'unknown', kind: 'not-published' })]);
add('ipapi-is', [q('requests', { metric: 'requests', label: 'Lookups', amount: 1000, unit: 'request', period: 'day', scope: 'account', reset: 'daily', overage: 'blocked' })]);
add('ipapi-co', [
  q('daily', { metric: 'requests', label: 'Requêtes quotidiennes', amount: 1000, unit: 'request', period: 'day', scope: 'client', reset: 'daily', overage: 'blocked' }),
  q('monthly', { metric: 'requests', label: 'Requêtes mensuelles', amount: 30000, unit: 'request', period: 'month', scope: 'client', reset: 'monthly', overage: 'blocked' }),
]);
add('ipbase', [
  q('requests', { metric: 'requests', label: 'Requêtes', amount: 150, unit: 'request', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked' }),
  q('rate', { metric: 'requests', label: 'Débit maximum', amount: 10, unit: 'request/minute', period: 'variable', scope: 'api key', reset: 'rolling', overage: 'blocked' }),
]);
add('ipinfo-lite', [q('requests', { metric: 'requests', label: 'Requêtes authentifiées', amount: null, unit: 'request', period: 'month', scope: 'token', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' })]);
add('iplocate', [q('requests', { metric: 'requests', label: 'Requêtes avec clé Free', amount: 1000, unit: 'request', period: 'day', scope: 'account', reset: 'daily', overage: 'blocked' })]);
add('iptrace', [q('requests', { metric: 'requests', label: 'Lookups', amount: 50000, unit: 'request', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked' })]);
add('json-ip', [q('requests', { metric: 'requests', label: 'Requêtes', amount: null, unit: 'request', period: 'month', scope: 'service', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' })]);
add('json-to-table', [q('usage', { metric: 'usage', label: 'Utilisation', amount: null, unit: 'operation', period: 'lifetime', scope: 'user', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' })]);
add('json2video', [q('credits', { metric: 'credits', label: 'Crédits gratuits', amount: 600, unit: 'credit', period: 'total', scope: 'account', reset: 'never', overage: 'blocked', kind: 'credit' })]);
add('jsongrid', [q('usage', { metric: 'usage', label: 'Utilisation', amount: null, unit: 'operation', period: 'lifetime', scope: 'user', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' })]);
add('jsoning', [
  q('retention', { metric: 'retention', label: 'Rétention des APIs publiques', amount: 1, unit: 'day', period: 'lifetime', scope: 'api', reset: 'daily', overage: 'degraded' }),
  q('requests', { metric: 'requests', label: 'Quota de requêtes', amount: null, unit: 'request', period: 'variable', scope: 'service', reset: 'variable', overage: 'unknown', kind: 'not-published' }),
]);
add('jsonswiss', [q('usage', { metric: 'usage', label: 'Utilisation locale', amount: null, unit: 'operation', period: 'lifetime', scope: 'browser', reset: 'not-applicable', overage: 'not-applicable', kind: 'unmetered' })]);
