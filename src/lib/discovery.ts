export type DiscoveryMode = 'category' | 'usage';

export const slugifyDiscovery = (value: string) => value
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/(^-|-$)/g, '');

const CATEGORY_SLUGS: Record<string, string> = {
  'services-donnees-manages': 'database',
  'hebergement-web': 'hebergement',
  supervision: 'monitoring',
  email: 'email',
};

export const getDiscoverySlug = (mode: DiscoveryMode, identifier: string) => mode === 'category'
  ? (CATEGORY_SLUGS[identifier] ?? slugifyDiscovery(identifier))
  : slugifyDiscovery(identifier);

const CATEGORY_TITLES: Record<string, string> = {
  'services-donnees-manages': 'Bases de données gratuites pour développeurs',
  'hebergement-web': 'Hébergements gratuits pour développeurs',
  supervision: 'Outils de monitoring gratuits pour développeurs',
  email: 'Services d’e-mail gratuits pour développeurs',
};

const USAGE_TITLES: Record<string, string> = {
  API: 'API gratuites pour développeurs',
  'Next.js': 'Outils gratuits pour Next.js',
  PostgreSQL: 'Bases PostgreSQL gratuites',
  MongoDB: 'Bases MongoDB gratuites',
  Mobile: 'Outils gratuits pour applications mobiles',
};

export const getDiscoveryTitle = (mode: DiscoveryMode, identifier: string, name: string) => mode === 'category'
  ? (CATEGORY_TITLES[identifier] ?? `${name} : outils gratuits pour développeurs`)
  : (USAGE_TITLES[name] ?? `Outils gratuits pour ${name.charAt(0).toLocaleLowerCase('fr')}${name.slice(1)}`);

export const getDiscoveryDescription = (mode: DiscoveryMode, name: string, count: number) => mode === 'category'
  ? `Comparez ${count} offre${count > 1 ? 's' : ''} gratuite${count > 1 ? 's' : ''} de ${name.toLocaleLowerCase('fr')} : scores GPLD, quotas, carte bancaire, permanence et risques de facturation.`
  : `Découvrez ${count} service${count > 1 ? 's' : ''} gratuit${count > 1 ? 's' : ''} pour ${name} avec quotas vérifiés, scores GPLD, conditions et risques de facturation.`;

export const getDiscoveryGuide = (mode: DiscoveryMode, identifier: string, name: string) => {
  const categoryGuides: Record<string, string> = {
    email: '/guides/email/meilleures-offres-gratuites/',
    'api-donnees-ml': '/guides/api-donnees-ml/meilleures-offres-gratuites/',
    'depots-code-source': '/guides/depots-code-source/meilleures-offres-gratuites/',
    supervision: '/guides/supervision/meilleures-offres-gratuites/',
    tests: '/guides/tests/meilleures-offres-gratuites/',
    'ci-cd': '/guides/ci-cd/meilleures-offres-gratuites/',
    'securite-pki': '/guides/securite-pki/meilleures-offres-gratuites/',
  };
  if (mode === 'category') return categoryGuides[identifier];
  const normalized = slugifyDiscovery(name);
  if (/email|mail|newsletter/.test(normalized)) return categoryGuides.email;
  if (/api|machine-learning|intelligence-artificielle|donnees/.test(normalized)) return categoryGuides['api-donnees-ml'];
  if (/git|depot|code-source/.test(normalized)) return categoryGuides['depots-code-source'];
  if (/monitoring|supervision|observabilite|uptime/.test(normalized)) return categoryGuides.supervision;
  if (/test|qualite/.test(normalized)) return categoryGuides.tests;
  if (/ci-cd|pipeline|build/.test(normalized)) return categoryGuides['ci-cd'];
  if (/securite|certificat|pki|secret/.test(normalized)) return categoryGuides['securite-pki'];
  return undefined;
};

export const getScoreTone = (score: number) => score >= 85 ? 'excellent' : score >= 70 ? 'strong' : score >= 50 ? 'balanced' : 'limited';
