import type { OfferAlertLevel, OfferAlertType } from './offer-alerts';
import { formatQuotaAmount, formatQuotaPeriod, getOfferQuotas } from './offer-quotas';
import { DATA_TOOLS_QUOTA_SCORES } from './data-tools-scores';
import { SOURCE_CODE_GUIDE_QUOTA_SCORES } from './source-code-guide';
import { MESSAGING_PLATFORM_QUOTA_SCORES } from './messaging-platform-scores';
import './offer-quota-overrides';
import './parsivex-quota';
import './source-code-hosting-quotas';
import './api-service-quotas';
import './data-service-quotas';
import './data-tools-quotas';
import './messaging-platform-quotas';
import './messaging-platform-quotas-more';

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

const QUOTA_SCORES: Record<string, 5 | 10 | 15 | 20 | 25> = {
  ...DATA_TOOLS_QUOTA_SCORES,
  ...SOURCE_CODE_GUIDE_QUOTA_SCORES,
  ...MESSAGING_PLATFORM_QUOTA_SCORES,
  'abstract-api': 15,
  alphai: 15,
  'amazon-cloudfront': 20,
  'amazon-cloudwatch': 15,
  'amazon-dynamodb': 15,
  'amazon-ses': 5,
  'amazon-sns': 15,
  'amazon-sqs': 15,
  anyhook: 15,
  apify: 15,
  'apitemplate-io': 15,
  apiverve: 10,
  'arize-ax': 20,
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
  beeceptor: 15,
  bigdatacloud: 20,
  bitbucket: 20,
  brainboard: 15,
  'brave-search-api': 15,
  'browse-ai': 10,
  calendarific: 15,
  'canopy-api': 10,
  'carapi-dev': 10,
  catchdoms: 10,
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
  cloudmersive: 15,
  codeberg: 20,
  'comet-ml': 15,
  'commerce-layer': 20,
  composio: 20,
  'conversion-tools': 15,
  'country-state-city': 5,
  'coupler-io': 10,
  craftmypdf: 10,
  'cube-cloud': 15,
  curlhub: 20,
  currencybeacon: 20,
  customjs: 15,
  'deployment-io': 10,
  framagit: 20,
  gitgud: 20,
  github: 25,
  'github-actions': 20,
  'gitlab-com': 20,
  'google-ai-studio': 15,
  'google-cloud': 15,
  'google-colab': 15,
  'grafana-cloud': 20,
  'heptapod-foss': 15,
  'ibm-cloud': 15,
  'infomaniak-public-cloud': 5,
  'kaggle-notebooks': 20,
  'microsoft-entra-external-id': 15,
  'microsoft-entra-id': 20,
  neon: 15,
  'oracle-cloud': 20,
  parsivex: 10,
  'pijul-nest': 15,
  'pulumi-cloud': 15,
  rocketgit: 20,
  'savannah-gnu': 15,
  'savannah-nongnu': 15,
  scalr: 15,
  trainercentral: 15,
  uptimerobot: 15,
  vercel: 20,
  'zoho-apptics': 15,
  'zoho-assist': 15,
  'zoho-bookings': 15,
  'zoho-bugtracker': 15,
  'zoho-campaigns': 20,
  'zoho-catalyst': 20,
  'zoho-checkout': 10,
  'zoho-cliq': 20,
  'zoho-connect': 15,
  'zoho-desk': 15,
  'zoho-forms': 15,
  'zoho-learn': 20,
  'zoho-mail': 20,
  'zoho-meeting': 20,
  'zoho-notebook': 20,
  'zoho-projects': 20,
  'zoho-sign': 15,
  'zoho-sprints': 15,
  'zoho-survey': 20,
  'zoho-vault': 20,
  'zoho-workdrive': 15,
};

const dayMs = 24 * 60 * 60 * 1000;
const freshnessPoints = (date: Date) => {
  const days = Math.max(0, (Date.now() - date.getTime()) / dayMs);
  if (days <= 30) return 5;
  if (days <= 90) return 4;
  if (days <= 180) return 3;
  if (days <= 365) return 2;
  return 1;
};

const getQuotaScore = (offerId: string) => QUOTA_SCORES[offerId] ?? 10;

const getQuotaDetail = (offerId: string, points: number) => {
  const quota = getOfferQuotas(offerId)[0];
  if (!quota) {
    if (points >= 20) return 'Quota gratuit généreux pour un usage développeur courant.';
    if (points >= 15) return 'Quota gratuit exploitable pour un projet ou des tests réguliers.';
    if (points >= 10) return 'Quota gratuit utile surtout pour prototypage ou faible volume.';
    return 'Quota gratuit limité ou fortement encadré.';
  }
  return `${formatQuotaAmount(quota)} ${formatQuotaPeriod(quota)} — ${quota.label}.`;
};

const getRestrictionScore = (offer: ScoredOffer) => {
  if (offer.depassementFacture) return 5;
  if (offer.alertes.some((alert) => alert.niveau === 'critique')) return 8;
  if (offer.alertes.some((alert) => alert.niveau === 'important')) return 12;
  return 20;
};

export const getFreeTierScore = (offerId: string, offer: ScoredOffer): FreeTierScore => {
  const quotaPoints = getQuotaScore(offerId);
  const restrictions = getRestrictionScore(offer);
  const criteria: FreeTierScoreCriterion[] = [
    {
      id: 'permanence',
      label: 'Gratuité permanente',
      points: offer.permanent ? 25 : 8,
      max: 25,
      detail: offer.permanent ? 'Offre gratuite sans date de fin annoncée.' : 'Offre limitée dans le temps ou conditionnée.',
    },
    {
      id: 'card',
      label: 'Sans carte bancaire',
      points: offer.carteRequise ? 5 : 20,
      max: 20,
      detail: offer.carteRequise ? 'Une carte bancaire est requise.' : 'Aucune carte bancaire requise pour commencer.',
    },
    {
      id: 'quota',
      label: 'Utilité du quota',
      points: quotaPoints,
      max: 25,
      detail: getQuotaDetail(offerId, quotaPoints),
    },
    {
      id: 'restrictions',
      label: 'Liberté d’utilisation',
      points: restrictions,
      max: 20,
      detail: restrictions >= 20 ? 'Aucune restriction majeure détectée dans les conditions recensées.' : restrictions >= 12 ? 'Quelques restrictions importantes sont signalées.' : restrictions >= 8 ? 'Des restrictions fortes limitent l’usage.' : 'Le dépassement peut entraîner une facturation.',
    },
    {
      id: 'freshness',
      label: 'Fraîcheur de vérification',
      points: freshnessPoints(offer.verifieLe),
      max: 5,
      detail: `Dernière vérification le ${offer.verifieLe.toLocaleDateString('fr-FR')}.`,
    },
    {
      id: 'sources',
      label: 'Qualité des sources',
      points: offer.documentation ? 5 : offer.source ? 3 : 1,
      max: 5,
      detail: offer.documentation ? 'Source principale et documentation officielles disponibles.' : offer.source ? 'Source officielle principale disponible.' : 'Source officielle à renforcer.',
    },
  ];
  return { total: criteria.reduce((sum, criterion) => sum + criterion.points, 0), criteria };
};

export const getFreeTierScoreTone = (score: number) => {
  if (score >= 85) return 'excellent';
  if (score >= 70) return 'strong';
  if (score >= 50) return 'balanced';
  return 'limited';
};
