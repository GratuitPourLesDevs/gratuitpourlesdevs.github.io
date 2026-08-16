export const OFFER_ALERT_TYPES = ['finance', 'usage', 'operationnel', 'fonctionnel'] as const;
export const OFFER_ALERT_LEVELS = ['critique', 'important'] as const;

export type OfferAlertType = typeof OFFER_ALERT_TYPES[number];
export type OfferAlertLevel = typeof OFFER_ALERT_LEVELS[number];

export const OFFER_ALERT_ICONS: Record<OfferAlertType, string> = {
  finance: '€',
  usage: '!',
  operationnel: '!',
  fonctionnel: 'i',
};
