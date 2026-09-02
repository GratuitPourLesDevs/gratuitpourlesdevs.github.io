import { getFreeTierScore } from '../data/free-tier-score';
import type { StackTemplate } from '../data/stack-templates';

export type StackOfferEntry = {
  id: string;
  data: {
    nom: string;
    accroche: string;
    categorie: string;
    formule: string;
    carteRequise: boolean;
    depassementFacture: boolean;
    permanent: boolean;
    statut: string;
    verifieLe: Date;
    source: string;
    documentation?: string;
    couleur: string;
    initiales: string;
    alertes: Array<{ niveau: 'important' | 'critique'; libelle: string; type: 'finance' | 'usage' | 'operationnel' | 'fonctionnel'; detail: string }>;
  };
};

export type StackTemplateServiceView = StackTemplate['services'][number] & {
  offer: StackOfferEntry;
  score: number | null;
  confidence: number;
  risk: 'safe' | 'warning' | 'danger';
  riskLabel: string;
};

const DAY = 86_400_000;

export const buildStackTemplateView = (template: StackTemplate, offers: Map<string, StackOfferEntry>, now = new Date()) => {
  const services = template.services.flatMap((service): StackTemplateServiceView[] => {
    const offer = offers.get(service.offerId);
    if (!offer) return [];
    const age = Math.max(0, Math.floor((now.getTime() - offer.data.verifieLe.getTime()) / DAY));
    const critical = offer.data.alertes.some((alert) => alert.niveau === 'critique');
    let confidence = 100;
    if (offer.data.depassementFacture) confidence -= 35;
    if (offer.data.carteRequise) confidence -= 16;
    if (age > 60) confidence -= Math.min(24, 8 + Math.floor((age - 60) / 30) * 4);
    if (critical) confidence -= 18;
    confidence = Math.max(0, confidence);
    let score: number | null = null;
    try { score = getFreeTierScore(offer.id, offer.data).total; } catch { score = null; }
    const risk = offer.data.depassementFacture || critical ? 'danger' : offer.data.carteRequise || age > 60 ? 'warning' : 'safe';
    const riskLabel = offer.data.depassementFacture ? 'Dépassement facturé' : critical ? 'Restriction critique' : offer.data.carteRequise ? 'Carte requise' : age > 60 ? 'À revérifier' : 'Aucun risque identifié';
    return [{ ...service, offer, score, confidence, risk, riskLabel }];
  });
  const confidence = services.length ? Math.round(services.reduce((sum, service) => sum + service.confidence, 0) / services.length) : 0;
  const billingRisks = services.filter((service) => service.offer.data.depassementFacture).length;
  const noCard = services.filter((service) => !service.offer.data.carteRequise).length;
  const threat = [...services].filter((service) => service.confidence < 100).sort((a, b) => a.confidence - b.confidence)[0];
  const oldestVerification = services.length ? new Date(Math.min(...services.map((service) => service.offer.data.verifieLe.getTime()))) : null;
  return { ...template, services, confidence, billingRisks, noCard, threat, oldestVerification };
};
