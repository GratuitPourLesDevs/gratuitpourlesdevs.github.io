import { OFFER_QUOTAS } from './offer-quotas';

OFFER_QUOTAS.formfeed ??= [
  { id: 'units', metric: 'document_units', label: 'Unités de génération', amount: 100, unit: 'unit', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit', notes: 'Une unité couvre un PDF de cinq pages maximum, une image ou un fichier Word/PowerPoint.' },
  { id: 'templates', metric: 'templates', label: 'Templates', amount: 5, unit: 'template', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['pr-quorum'] ??= [
  { id: 'reviews', metric: 'reviews', label: 'Revues de code', amount: 50, unit: 'review', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
  { id: 'repositories', metric: 'repositories', label: 'Dépôts', amount: 2, unit: 'repository', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS.estuary ??= [
  { id: 'data', metric: 'bandwidth', label: 'Données transférées', amount: 10, unit: 'GB', period: 'month', scope: 'account', reset: 'monthly', overage: 'degraded', kind: 'limit', notes: 'Le dépassement lance un essai Cloud de 30 jours.' },
  { id: 'connectors', metric: 'connectors', label: 'Connecteurs simultanés', amount: 2, unit: 'connector', period: 'lifetime', scope: 'account', reset: 'never', overage: 'degraded', kind: 'limit' },
];

OFFER_QUOTAS.myspec ??= [
  { id: 'projects', metric: 'projects', label: 'Projets', amount: 20, unit: 'project', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'spec-files', metric: 'files', label: 'Fichiers de spécification', amount: 100, unit: 'file', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'public-links', metric: 'links', label: 'Liens publics', amount: 20, unit: 'link', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS.sendraven ??= [
  { id: 'emails', metric: 'emails', label: 'E-mails sortants', amount: 3_000, unit: 'email', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
  { id: 'contacts', metric: 'contacts', label: 'Contacts', amount: null, unit: 'contact', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' },
];

OFFER_QUOTAS.watchgoose ??= [
  { id: 'checks', metric: 'monitors', label: 'Contrôles', amount: 10, unit: 'monitor', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'ping-logs', metric: 'log_entries', label: 'Entrées de journal de ping', amount: 200, unit: 'entry', period: 'lifetime', scope: 'account', reset: 'rolling', overage: 'degraded', kind: 'limit' },
];

OFFER_QUOTAS.vibeview ??= [
  { id: 'streaming', metric: 'streaming_time', label: 'Streaming de simulateurs', amount: 30, unit: 'minute', period: 'month', scope: 'organization', reset: 'monthly', overage: 'degraded', kind: 'limit' },
  { id: 'sessions', metric: 'parallelism', label: 'Sessions simultanées', amount: 2, unit: 'session', period: 'lifetime', scope: 'organization', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'builds', metric: 'builds', label: 'Builds cloud', amount: 10, unit: 'build', period: 'month', scope: 'organization', reset: 'monthly', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS.livecodes ??= [
  { id: 'usage', metric: 'usage', label: 'Utilisation du playground', amount: null, unit: 'project', period: 'lifetime', scope: 'service', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' },
];

OFFER_QUOTAS.unkey ??= [
  { id: 'requests', metric: 'requests', label: 'Requêtes de clés et rate limiting', amount: 150_000, unit: 'request', period: 'month', scope: 'account', reset: 'monthly', overage: 'degraded', kind: 'limit', notes: 'Unkey annonce ne pas facturer automatiquement les dépassements.' },
];

OFFER_QUOTAS['flaky-api'] ??= [
  { id: 'anonymous-requests', metric: 'requests', label: 'Requêtes sans clé', amount: 1_000, unit: 'request', period: 'day', scope: 'service', reset: 'daily', overage: 'blocked', kind: 'limit' },
  { id: 'keyed-requests', metric: 'requests', label: 'Requêtes avec clé gratuite', amount: 10_000, unit: 'request', period: 'day', scope: 'account', reset: 'daily', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['email-spam-tester'] ??= [
  { id: 'tests', metric: 'tests', label: 'Tests de délivrabilité', amount: null, unit: 'test', period: 'variable', scope: 'service', reset: 'variable', overage: 'unknown', kind: 'not-published', notes: 'Le service se présente comme gratuit sans publier de quota chiffré.' },
];

OFFER_QUOTAS.openwebhook ??= [
  { id: 'temporary-webhooks', metric: 'webhooks', label: 'Webhooks temporaires', amount: null, unit: 'webhook', period: 'variable', scope: 'service', reset: 'variable', overage: 'unknown', kind: 'not-published', notes: 'Le service gratuit ne publie pas de plafond chiffré.' },
];

OFFER_QUOTAS.snapenv ??= [
  { id: 'projects', metric: 'projects', label: 'Projets', amount: 3, unit: 'project', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'members', metric: 'users', label: 'Membres', amount: 3, unit: 'user', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'environments', metric: 'environments', label: 'Environnements par projet', amount: 3, unit: 'environment', period: 'lifetime', scope: 'project', reset: 'never', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS.tinyfish ??= [
  { id: 'api-rate-limit', metric: 'requests', label: 'Requêtes de recherche et extraction', amount: null, unit: 'request', period: 'variable', scope: 'account', reset: 'variable', overage: 'unknown', kind: 'not-published', notes: 'L’accès gratuit est annoncé sans quota public chiffré.' },
];

OFFER_QUOTAS.watchcron ??= [
  { id: 'monitors', metric: 'monitors', label: 'Moniteurs gratuits', amount: null, unit: 'monitor', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'not-published', notes: 'La page officielle mentionne actuellement 5 moniteurs dans sa FAQ et 20 contrôles dans son appel à l’action.' },
  { id: 'interval', metric: 'interval', label: 'Intervalle de contrôle', amount: 5, unit: 'minute', period: 'total', scope: 'monitor', reset: 'never', overage: 'not-applicable', kind: 'limit' },
];

export const FREE_FOR_DEV_SEPTEMBER_2026_QUOTA_SCORES = {
  formfeed: 15,
  'pr-quorum': 15,
  estuary: 15,
  myspec: 15,
  sendraven: 15,
  watchgoose: 15,
  vibeview: 10,
  livecodes: 25,
  unkey: 20,
  'flaky-api': 20,
  'email-spam-tester': 15,
  openwebhook: 15,
  snapenv: 15,
  tinyfish: 10,
  watchcron: 10,
} satisfies Record<string, 5 | 10 | 15 | 20 | 25>;
