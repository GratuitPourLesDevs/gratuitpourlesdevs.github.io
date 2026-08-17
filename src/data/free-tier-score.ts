import type { OfferAlertLevel, OfferAlertType } from './offer-alerts';
import { OFFER_QUOTAS, formatQuotaAmount, formatQuotaPeriod, getOfferQuotas } from './offer-quotas';

export type FreeTierScoreCriterion = {
  id: 'permanence' | 'card' | 'quota' | 'restrictions' | 'freshness' | 'sources';
  label: string;
  points: number;
  max: number;
  detail: string;
};

export type FreeTierScore = {
  total: number;
  criteria: FreeTierScoreCriterion[];
};

type ScoredOffer = {
  permanent: boolean;
  carteRequise: boolean;
  depassementFacture: boolean;
  formule: string;
  verifieLe: Date;
  source: string;
  documentation?: string;
  alertes: Array<{
    type: OfferAlertType;
    niveau: OfferAlertLevel;
    libelle: string;
    detail: string;
  }>;
};

OFFER_QUOTAS['zoho-sprints'] ??= [
  {
    id: 'users',
    metric: 'users',
    label: 'Utilisateurs',
    amount: 3,
    unit: 'user',
    period: 'lifetime',
    scope: 'account',
    reset: 'never',
    overage: 'blocked',
    kind: 'limit',
  },
  {
    id: 'projects',
    metric: 'projects',
    label: 'Projets',
    amount: 3,
    unit: 'project',
    period: 'lifetime',
    scope: 'account',
    reset: 'never',
    overage: 'blocked',
    kind: 'limit',
  },
  {
    id: 'storage',
    metric: 'storage',
    label: 'Stockage',
    amount: 500,
    unit: 'MB',
    period: 'lifetime',
    scope: 'account',
    reset: 'never',
    overage: 'blocked',
    kind: 'limit',
  },
];

OFFER_QUOTAS['zoho-workdrive'] ??= [
  {
    id: 'users',
    metric: 'users',
    label: 'Utilisateurs',
    amount: 1,
    unit: 'user',
    period: 'lifetime',
    scope: 'account',
    reset: 'never',
    overage: 'blocked',
    kind: 'limit',
  },
  {
    id: 'storage',
    metric: 'storage',
    label: 'Stockage',
    amount: 5,
    unit: 'GB',
    period: 'lifetime',
    scope: 'account',
    reset: 'never',
    overage: 'blocked',
    kind: 'limit',
    notes: 'Les fichiers Zoho Writer, Sheet et Show natifs ne consomment pas ce quota.',
  },
];

OFFER_QUOTAS['zoho-projects'] ??= [
  {
    id: 'users',
    metric: 'users',
    label: 'Utilisateurs',
    amount: 3,
    unit: 'user',
    period: 'lifetime',
    scope: 'account',
    reset: 'never',
    overage: 'blocked',
    kind: 'limit',
  },
  {
    id: 'projects',
    metric: 'projects',
    label: 'Projets',
    amount: 3,
    unit: 'project',
    period: 'lifetime',
    scope: 'account',
    reset: 'never',
    overage: 'blocked',
    kind: 'limit',
  },
  {
    id: 'storage',
    metric: 'storage',
    label: 'Stockage',
    amount: 5,
    unit: 'GB',
    period: 'lifetime',
    scope: 'account',
    reset: 'never',
    overage: 'blocked',
    kind: 'limit',
  },
];

OFFER_QUOTAS['zoho-bugtracker'] ??= [
  {
    id: 'users',
    metric: 'users',
    label: 'Utilisateurs',
    amount: 3,
    unit: 'user',
    period: 'lifetime',
    scope: 'account',
    reset: 'never',
    overage: 'blocked',
    kind: 'limit',
  },
  {
    id: 'projects',
    metric: 'projects',
    label: 'Projets',
    amount: 2,
    unit: 'project',
    period: 'lifetime',
    scope: 'account',
    reset: 'never',
    overage: 'blocked',
    kind: 'limit',
  },
  {
    id: 'storage',
    metric: 'storage',
    label: 'Stockage',
    amount: 5,
    unit: 'GB',
    period: 'lifetime',
    scope: 'account',
    reset: 'never',
    overage: 'blocked',
    kind: 'limit',
  },
  {
    id: 'attachment-size',
    metric: 'attachment_size',
    label: 'Taille maximale par pièce jointe',
    amount: 10,
    unit: 'MB',
    period: 'lifetime',
    scope: 'file',
    reset: 'never',
    overage: 'blocked',
    kind: 'limit',
  },
];

OFFER_QUOTAS['zoho-connect'] ??= [
  {
    id: 'users',
    metric: 'users',
    label: 'Utilisateurs',
    amount: 5,
    unit: 'user',
    period: 'lifetime',
    scope: 'account',
    reset: 'never',
    overage: 'blocked',
    kind: 'limit',
  },
  {
    id: 'storage',
    metric: 'storage',
    label: 'Stockage',
    amount: 10,
    unit: 'GB',
    period: 'lifetime',
    scope: 'account',
    reset: 'never',
    overage: 'blocked',
    kind: 'limit',
  },
  {
    id: 'groups',
    metric: 'groups',
    label: 'Groupes',
    amount: 3,
    unit: 'group',
    period: 'lifetime',
    scope: 'account',
    reset: 'never',
    overage: 'blocked',
    kind: 'limit',
  },
  {
    id: 'boards',
    metric: 'boards',
    label: 'Tableaux',
    amount: 3,
    unit: 'board',
    period: 'lifetime',
    scope: 'account',
    reset: 'never',
    overage: 'blocked',
    kind: 'limit',
  },
  {
    id: 'manuals',
    metric: 'manuals',
    label: 'Manuels',
    amount: 3,
    unit: 'manual',
    period: 'lifetime',
    scope: 'account',
    reset: 'never',
    overage: 'blocked',
    kind: 'limit',
  },
  {
    id: 'attachment-size',
    metric: 'attachment_size',
    label: 'Taille maximale par document joint',
    amount: 10,
    unit: 'MB',
    period: 'lifetime',
    scope: 'file',
    reset: 'never',
    overage: 'blocked',
    kind: 'limit',
  },
];

OFFER_QUOTAS['zoho-meeting'] ??= [
  {
    id: 'participants',
    metric: 'participants',
    label: 'Participants par réunion ou webinar',
    amount: 100,
    unit: 'participant',
    period: 'session',
    scope: 'session',
    reset: 'not-applicable',
    overage: 'blocked',
    kind: 'limit',
  },
  {
    id: 'session-duration',
    metric: 'session_duration',
    label: 'Durée maximale',
    amount: 60,
    unit: 'minute',
    period: 'session',
    scope: 'session',
    reset: 'not-applicable',
    overage: 'blocked',
    kind: 'limit',
  },
];

const QUOTA_SCORES: Record<string, 5 | 10 | 15 | 20 | 25> = {
  'amazon-cloudfront': 20,
  'amazon-cloudwatch': 15,
  'amazon-dynamodb': 15,
  'amazon-ses': 5,
  'amazon-sns': 15,
  'amazon-sqs': 15,
  'aws-codebuild': 10,
  'aws-codecommit': 15,
  'aws-codepipeline': 10,
  'aws-lambda': 15,
  'azure-ai-search': 10,
  'azure-ai-services-free-tiers': 10,
  'azure-app-service': 5,
  'azure-bandwidth': 20,
  'azure-cosmos-db': 20,
  'azure-devops': 20,
  'azure-devtest-labs': 5,
  'azure-event-grid': 10,
  'azure-functions': 15,
  'azure-iot-hub': 15,
  'azure-kubernetes-service': 5,
  'azure-load-balancer': 5,
  'azure-notification-hubs': 15,
  'azure-service-bus': 10,
  'azure-static-web-apps': 15,
  'azure-storage-free-services': 10,
  brainboard: 15,
  'chrome-remote-desktop': 20,
  'cloud-66': 10,
  'cloudflare-application-services': 20,
  'cloudflare-d1': 15,
  'cloudflare-pages': 20,
  'cloudflare-queues': 10,
  'cloudflare-r2': 15,
  'cloudflare-realtime-turn': 20,
  'cloudflare-tunnel': 20,
  'cloudflare-workers-kv': 15,
  'cloudflare-workers': 15,
  'cloudflare-zero-trust': 15,
  'deployment-io': 10,
  'github-actions': 20,
  'google-ai-studio': 15,
  'google-cloud': 15,
  'google-colab': 15,
  'grafana-cloud': 20,
  'ibm-cloud': 15,
  'infomaniak-public-cloud': 5,
  'kaggle-notebooks': 20,
  'microsoft-entra-external-id': 15,
  'microsoft-entra-id': 20,
  neon: 15,
  'oracle-cloud': 20,
  'pulumi-cloud': 15,
  scalr: 15,
  uptimerobot: 15,
  vercel: 20,
  'zoho-apptics': 15,
  'zoho-assist': 15,
  'zoho-bugtracker': 15,
  'zoho-catalyst': 20,
  'zoho-connect': 15,
  'zoho-mail': 15,
  'zoho-meeting': 20,
  'zoho-projects': 20,
  'zoho-sprints': 15,
  'zoho-workdrive': 15,
};

const QUOTA_LEVELS: Record<number, string> = {
  5: 'Découverte : le gratuit sert surtout à tester le service ou son interface.',
  10: 'Prototype limité : le quota permet une expérimentation technique ciblée.',
  15: 'Projet réel : le quota convient à un projet personnel ou une petite charge durable.',
  20: 'Quota généreux : le gratuit couvre un projet actif ou plusieurs petits usages.',
  25: 'Exceptionnel : l’offre gratuite se distingue nettement dans sa catégorie.',
};

const DAY = 86_400_000;
const DURATION_ALERT_PATTERN = /gratuit pendant|avantage limité|crédit limité/i;
const AUTOMATIC_BILLING_PATTERN = /dépassements? facturés?|facturé après expiration/i;

const getUsageFreedomScore = (offer: ScoredOffer) => {
  const durationAlerts = offer.alertes.filter((alert) => DURATION_ALERT_PATTERN.test(alert.libelle));
  const relevantAlerts = offer.alertes.filter((alert) => !DURATION_ALERT_PATTERN.test(alert.libelle));
  const criticalAlerts = relevantAlerts.filter((alert) => alert.niveau === 'critique');
  const criticalTypes = new Set(criticalAlerts.map((alert) => alert.type));
  const hasAutomaticBilling = offer.depassementFacture || criticalAlerts.some((alert) => alert.type === 'finance' && AUTOMATIC_BILLING_PATTERN.test(alert.libelle));

  let points = 20;
  let assessment = 'Aucune restriction décisive n’est actuellement identifiée.';

  if (hasAutomaticBilling) {
    points = 0;
    assessment = 'Un dépassement ou la fin de l’avantage peut déclencher une facturation.';
  } else if (criticalTypes.has('finance') && criticalTypes.size > 1) {
    points = 0;
    assessment = 'Une dépendance payante se cumule avec une autre restriction critique.';
  } else if (criticalTypes.has('finance')) {
    points = 4;
    assessment = 'Une ressource ou une dépendance indispensable reste facturée séparément.';
  } else if (criticalTypes.has('usage')) {
    points = 8;
    assessment = 'Une restriction d’usage limite fortement les projets réellement éligibles.';
  } else if (criticalAlerts.length > 0) {
    points = 12;
    assessment = 'Une limitation opérationnelle ou fonctionnelle peut changer la décision d’usage.';
  } else if (relevantAlerts.length > 0) {
    points = 16;
    assessment = 'Des contraintes importantes existent, sans rendre l’offre inutilisable.';
  }

  const visibleReasons = relevantAlerts.map((alert) => alert.libelle);
  const reasons = visibleReasons.length ? ` Restrictions prises en compte : ${visibleReasons.join(', ')}.` : '';
  const durationNote = durationAlerts.length ? ' Les limites de durée sont évaluées dans « Gratuit permanent ».' : '';

  return { points, detail: `${assessment}${reasons}${durationNote}` };
};

export const getFreeTierScore = (id: string, offer: ScoredOffer, referenceDate = new Date()): FreeTierScore => {
  const quotaPoints = QUOTA_SCORES[id];
  if (!quotaPoints) throw new Error(`Score de quota manquant pour l’offre « ${id} ».`);
  const structuredQuotas = getOfferQuotas(id);
  if (!structuredQuotas.length) throw new Error(`Quotas structurés manquants pour l’offre « ${id} ».`);
  const quotaEvidence = structuredQuotas.slice(0, 3).map((quota) => `${quota.label} : ${formatQuotaAmount(quota)} ${formatQuotaPeriod(quota)}`).join(' ; ');

  const ageInDays = Math.max(0, Math.floor((referenceDate.getTime() - offer.verifieLe.getTime()) / DAY));
  const freshnessPoints = ageInDays <= 90 ? 5 : ageInDays <= 180 ? 3 : ageInDays <= 365 ? 1 : 0;
  const usageFreedom = getUsageFreedomScore(offer);
  const sourcePoints = 2 + (offer.documentation ? 3 : 0);

  const criteria: FreeTierScoreCriterion[] = [
    {
      id: 'permanence',
      label: 'Gratuit permanent',
      points: offer.permanent ? 25 : 5,
      max: 25,
      detail: offer.permanent ? 'Le quota gratuit n’a pas de date de fin annoncée.' : 'L’avantage gratuit est limité dans le temps.',
    },
    {
      id: 'card',
      label: 'Accès sans carte bancaire',
      points: offer.carteRequise ? 0 : 20,
      max: 20,
      detail: offer.carteRequise ? 'Un moyen de paiement est demandé pour activer l’offre.' : 'L’offre peut être activée sans fournir de carte bancaire.',
    },
    {
      id: 'quota',
      label: 'Utilité du quota',
      points: quotaPoints,
      max: 25,
      detail: `${QUOTA_LEVELS[quotaPoints]} Données structurées : ${quotaEvidence}${structuredQuotas.length > 3 ? ` ; +${structuredQuotas.length - 3} autre${structuredQuotas.length > 4 ? 's' : ''}` : ''}.`,
    },
    {
      id: 'restrictions',
      label: 'Liberté réelle d’utilisation',
      points: usageFreedom.points,
      max: 20,
      detail: usageFreedom.detail,
    },
    {
      id: 'freshness',
      label: 'Vérification récente',
      points: freshnessPoints,
      max: 5,
      detail: `Vérifié le ${offer.verifieLe.toLocaleDateString('fr-FR')} (${ageInDays} jour${ageInDays > 1 ? 's' : ''}).`,
    },
    {
      id: 'sources',
      label: 'Sources officielles',
      points: sourcePoints,
      max: 5,
      detail: offer.documentation ? 'Source tarifaire et documentation officielle disponibles.' : 'Source tarifaire disponible ; documentation distincte non renseignée.',
    },
  ];

  return { total: criteria.reduce((sum, criterion) => sum + criterion.points, 0), criteria };
};

export const FREE_TIER_SCORE_MAX = 100;
