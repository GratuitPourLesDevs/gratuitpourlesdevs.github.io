export type BillingRiskLevel = 'none' | 'card' | 'automatic';

export type BillingRisk = {
  level: BillingRiskLevel;
  label: string;
  shortLabel: string;
  detail: string;
};

const BILLING_RISKS: Record<BillingRiskLevel, BillingRisk> = {
  none: {
    level: 'none',
    label: 'Aucun risque identifié',
    shortLabel: 'Aucun risque',
    detail: 'Aucune carte n’est requise et aucun dépassement facturé automatiquement n’est documenté pour cette offre.',
  },
  card: {
    level: 'card',
    label: 'Risque modéré à l’inscription',
    shortLabel: 'Risque modéré',
    detail: 'Un moyen de paiement est demandé, mais aucun dépassement automatique n’est documenté pour cette offre.',
  },
  automatic: {
    level: 'automatic',
    label: 'Facturation automatique possible',
    shortLabel: 'Dépassement facturé',
    detail: 'L’usage peut continuer au-delà du gratuit ou mobiliser des ressources facturées sans blocage automatique.',
  },
};

export const getBillingRisk = (offer: { carteRequise: boolean; depassementFacture: boolean }): BillingRisk => {
  if (offer.depassementFacture) return BILLING_RISKS.automatic;
  if (offer.carteRequise) return BILLING_RISKS.card;
  return BILLING_RISKS.none;
};
