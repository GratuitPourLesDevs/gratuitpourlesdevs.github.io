import { AUDITED_OFFER_EDITORIALS } from './audited-offer-editorials';
import { PROJECT_MANAGEMENT_EDITORIALS } from './project-management-editorials';
import { STORAGE_MEDIA_EDITORIALS } from './storage-media-editorials';

type OfferEditorialData = {
  nom: string;
  accroche: string;
  formule: string;
  inclus: string[];
  restrictions: string[];
  usages: string[];
  statut: 'active' | 'a_verifier' | 'obsolete';
  verificationNote?: string;
};

const CUSTOM_OFFER_EDITORIALS: Record<string, string> = {
  ...PROJECT_MANAGEMENT_EDITORIALS,
  ...STORAGE_MEDIA_EDITORIALS,
  ...AUDITED_OFFER_EDITORIALS,
};

/**
 * Retourne un éditorial explicitement rédigé pour l’offre.
 * Les fiches sans éditorial dédié continuent d’utiliser leur corps Markdown.
 *
 * La génération mécanique a été supprimée : la section « Pourquoi c’est utile »
 * doit rester une explication d’usage réellement éditorialisée.
 */
export function getGeneratedOfferEditorial(
  offerId: string,
  _data: OfferEditorialData,
): string | undefined {
  return CUSTOM_OFFER_EDITORIALS[offerId];
}
