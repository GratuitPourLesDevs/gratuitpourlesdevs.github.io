import { getBillingRisk } from './billing-risk';

export type FreeTierScoreCriterion = {
  id: 'permanence' | 'card' | 'quota' | 'billing' | 'freshness' | 'sources';
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
};

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
  'zoho-catalyst': 20,
  'zoho-mail': 15,
};

const QUOTA_LEVELS: Record<number, string> = {
  5: 'Découverte : le gratuit sert surtout à tester le service ou son interface.',
  10: 'Prototype limité : le quota permet une expérimentation technique ciblée.',
  15: 'Projet réel : le quota convient à un projet personnel ou une petite charge durable.',
  20: 'Quota généreux : le gratuit couvre un projet actif ou plusieurs petits usages.',
  25: 'Exceptionnel : l’offre gratuite se distingue nettement dans sa catégorie.',
};

const DAY = 86_400_000;

export const getFreeTierScore = (id: string, offer: ScoredOffer, referenceDate = new Date()): FreeTierScore => {
  const quotaPoints = QUOTA_SCORES[id];
  if (!quotaPoints) throw new Error(`Score de quota manquant pour l’offre « ${id} ».`);

  const ageInDays = Math.max(0, Math.floor((referenceDate.getTime() - offer.verifieLe.getTime()) / DAY));
  const freshnessPoints = ageInDays <= 90 ? 10 : ageInDays <= 180 ? 7 : ageInDays <= 365 ? 3 : 0;
  const billingRisk = getBillingRisk(offer);
  const billingPoints = billingRisk.level === 'none' ? 15 : billingRisk.level === 'card' ? 8 : 0;
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
      detail: `${QUOTA_LEVELS[quotaPoints]} Quota observé : ${offer.formule}`,
    },
    {
      id: 'billing',
      label: 'Sécurité de facturation',
      points: billingPoints,
      max: 15,
      detail: billingRisk.detail,
    },
    {
      id: 'freshness',
      label: 'Vérification récente',
      points: freshnessPoints,
      max: 10,
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
