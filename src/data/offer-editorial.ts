import { PROJECT_MANAGEMENT_EDITORIALS } from './project-management-editorials';
import { STORAGE_MEDIA_EDITORIALS } from './storage-media-editorials';

type OfferEditorialStatus = 'active' | 'a_verifier' | 'obsolete';

type OfferEditorialData = {
  nom: string;
  accroche: string;
  formule: string;
  inclus: string[];
  restrictions: string[];
  usages: string[];
  statut: OfferEditorialStatus;
  verificationNote?: string;
};

const CUSTOM_OFFER_EDITORIALS: Record<string, string> = {
  ...PROJECT_MANAGEMENT_EDITORIALS,
  ...STORAGE_MEDIA_EDITORIALS,
};

export const GENERATED_EDITORIAL_OFFER_IDS = new Set<string>([
  'certkit',
  'certobserver-ct-search',
  'certpost',
  'corgea',
  'crypteron',
  'cyberchef',
  'datree',
  'dependabot',
  'dj-checkup',
  'doppler',
  'dotenv',
  'gitguardian',
  'hasmysecretleaked',
  'have-i-been-pwned',
  'himitsushell',
  'hostedscan',
  'infisical',
  'inspect-software',
  'internet-nl',
  'intodns-ai',
  'letsencrypt',
  'meterian',
  'mozilla-observatory',
  'otterwatch',
  'protectumus',
  'public-cloud-threat-intelligence',
  'pyup',
  'qualys-community-edition',
  'sikkerkey',
  'smart-grow-vault',
  'socket',
  'ssl-labs',
  'sucuri-sitecheck',
  'testtls',
  'virgil-security',
  'auth0',
  'authgear',
  'authress',
  'authy',
  'cerbos-hub',
  'clerk',
  'cloud-iam',
  'descope',
  'duo',
  'kinde',
  'logintc',
  'logto',
  'mojoauth',
  'okta',
  'ory',
  'permit-io',
  'phase-two',
  'propelauth',
  'scalekit',
  'stack-auth',
  'stytch',
  'supertokens',
  'workos',
  'zitadel-cloud',
  'apphost',
  'diawi',
  'getupdraft',
  'installonair',
  'loadly',
  'distapp',
  'ably',
  'cloudamqp',
  'courier',
  'emqx-serverless',
  'engage',
  'engagespot',
  'hivemq',
  'httpsms',
  'knock',
  'novu',
  'pingram',
  'pocket-alert',
  'pubnub',
  'pusher',
  'scaledrone',
  'smsgate',
  'suprsend',
  'synadia',
  'webpushr',
  'vask',
  'logdog',
  'logflare',
  'logtail',
  'logzab',
  'manageengine-log360-cloud',
  'openobserve',
  'smart-grow-logs',
]);

const clean = (value: string) => value.trim().replace(/[.;:]+$/g, '');

const lowerFirst = (value: string) => {
  const text = clean(value);
  return text ? `${text[0]!.toLocaleLowerCase('fr-FR')}${text.slice(1)}` : text;
};

const joinFrench = (values: string[]) => {
  const items = values.map(clean).filter(Boolean);
  if (items.length <= 1) return items[0] ?? '';
  if (items.length === 2) return `${items[0]} et ${items[1]}`;
  return `${items.slice(0, -1).join(', ')} et ${items.at(-1)}`;
};

export function getGeneratedOfferEditorial(
  offerId: string,
  data: OfferEditorialData,
): string | undefined {
  const customEditorial = CUSTOM_OFFER_EDITORIALS[offerId];
  if (customEditorial) return customEditorial;

  if (!GENERATED_EDITORIAL_OFFER_IDS.has(offerId)) return undefined;

  const role = clean(data.accroche);
  const included = joinFrench(data.inclus.slice(0, 4).map(lowerFirst));
  const usages = joinFrench(data.usages.slice(0, 3));
  const limits = data.restrictions.slice(0, 2).map(lowerFirst).filter(Boolean);

  if (data.statut === 'obsolete') {
    const situation = limits.length
      ? `Situation actuelle : ${limits.join(' ; ')}.`
      : data.verificationNote
        ? `Situation actuelle : ${clean(data.verificationNote)}.`
        : '';

    return [
      `Cette fiche est conservée comme référence historique afin d’éviter qu’un ancien Free Tier soit pris pour une offre encore disponible.`,
      role ? `Son positionnement historique : ${lowerFirst(role)}.` : '',
      included ? `La fiche documente notamment ${included}.` : '',
      situation,
    ].filter(Boolean).join(' ');
  }

  if (data.statut === 'a_verifier') {
    const caution = limits.length
      ? `La fiche reste volontairement à vérifier : ${limits.join(' ; ')}.`
      : data.verificationNote
        ? `La fiche reste volontairement à vérifier : ${clean(data.verificationNote)}.`
        : 'La fiche reste volontairement à vérifier avant un usage en production.';

    return [
      role ? `${data.nom} couvre un besoin précis : ${lowerFirst(role)}.` : '',
      `Côté gratuit, la formule que nous pouvons documenter à ce jour est la suivante : ${clean(data.formule)}.`,
      included ? `Les éléments observés comprennent notamment ${included}.` : '',
      usages ? `Le service peut être pertinent pour des usages liés à ${usages}.` : '',
      caution,
    ].filter(Boolean).join(' ');
  }

  const caution = limits.length
    ? `À garder en tête : ${limits.join(' ; ')}.`
    : '';

  return [
    role ? `${data.nom} répond à un besoin précis : ${lowerFirst(role)}.` : '',
    `Côté gratuit, la référence actuelle est la suivante : ${clean(data.formule)}.`,
    included ? `Concrètement, cette formule comprend notamment ${included}.` : '',
    usages ? `Elle est surtout pertinente pour des usages liés à ${usages}.` : '',
    caution,
  ].filter(Boolean).join(' ');
}
