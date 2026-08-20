import { OFFER_QUOTAS } from './offer-quotas';

// Beanstalk : valeurs déjà documentées dans la fiche catalogue.
OFFER_QUOTAS.beanstalk ??= [
  { id: 'users', metric: 'users', label: 'Utilisateurs', amount: 1, unit: 'user', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'repositories', metric: 'repositories', label: 'Dépôts Git ou Subversion', amount: 1, unit: 'repository', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'storage', metric: 'storage', label: 'Stockage', amount: 100, unit: 'MB', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
];

export const SOURCE_CODE_GUIDE_QUOTA_SCORES = {
  beanstalk: 10,
} as const;

export const SOURCE_CODE_GUIDE_CONFIG = {
  categoryLabelFallback: 'Dépôts de code source',
  fallbackDescription: 'Hébergement de dépôts Git, Mercurial ou Subversion avec collaboration et CI/CD',
  pageTitle: (rankingSize: number) => `Les ${rankingSize} meilleurs dépôts de code source gratuits pour les développeurs`,
  pageDescription: (rankingSize: number) => `Comparatif indépendant des ${rankingSize} meilleures offres gratuites d’hébergement de code source : dépôts, collaborateurs, stockage, CI/CD, score et limites vérifiés.`,
  heroTitle: (rankingSize: number) => `Les ${rankingSize} meilleurs dépôts de code source gratuits`,
  heroIntro: 'Comparatif indépendant des services d’hébergement de code source présents dans le catalogue. Git, Mercurial ou Subversion, dépôts publics ou privés, travail en équipe et CI/CD : retrouvez les offres gratuites les mieux notées avec leurs limites réellement utiles pour choisir une forge ou un hébergeur de code.',
  rankingTitle: (rankingSize: number) => `Top ${rankingSize} des meilleurs hébergements de code source gratuits`,
  itemListName: (rankingSize: number) => `Les ${rankingSize} meilleurs dépôts de code source gratuits`,
  quotaPriority: ['repositories', 'projects', 'users', 'storage', 'package_storage', 'build_time'],
  comparisonIntro: 'Pour l’hébergement de code, le nombre de dépôts ou projets, la taille de l’équipe, le stockage disponible et le quota CI/CD sont des critères plus utiles qu’un quota générique. Ils sont donc comparés séparément.',
  comparisonColumns: [
    { key: 'service' as const, label: 'Service' },
    { key: 'quota' as const, label: 'Dépôts / projets', metrics: ['repositories', 'projects'] },
    { key: 'quota' as const, label: 'Collaborateurs', metrics: ['users', 'collaborators', 'members'] },
    { key: 'quota' as const, label: 'Stockage', metrics: ['storage', 'package_storage', 'codespace_storage'] },
    { key: 'quota' as const, label: 'CI/CD', metrics: ['build_time', 'pipelines', 'parallelism'] },
    { key: 'plan' as const, label: 'Formule gratuite' },
    { key: 'duration' as const, label: 'Gratuité' },
    { key: 'card' as const, label: 'Carte bancaire' },
    { key: 'usage' as const, label: 'Usage idéal' },
  ],
  faqItems: [
    {
      question: 'Quel hébergement Git gratuit choisir pour un projet de développement ?',
      answer: 'Le choix dépend surtout du nombre de dépôts, du nombre de collaborateurs, du stockage nécessaire et de l’usage de la CI/CD. Le comparatif sépare ces critères afin de distinguer une forge très généreuse pour le code d’une offre plus intéressante pour l’automatisation.',
    },
    {
      question: 'Peut-on héberger gratuitement des dépôts privés ?',
      answer: 'Plusieurs services du classement autorisent les dépôts privés dans leur offre gratuite, mais les limites de collaborateurs, de stockage ou de CI/CD peuvent différer. La fiche détaillée de chaque offre précise les conditions et restrictions applicables.',
    },
    {
      question: 'La CI/CD est-elle incluse gratuitement avec ces hébergeurs de code ?',
      answer: 'Cela dépend du service. Certains fournissent un quota mensuel chiffré, d’autres un accès partagé ou non chiffré, et certains se concentrent uniquement sur l’hébergement du code. La colonne CI/CD reprend uniquement les quotas structurés documentés.',
    },
    {
      question: 'Pourquoi comparer séparément dépôts, collaborateurs, stockage et CI/CD ?',
      answer: 'Ces limites répondent à des besoins différents : héberger plusieurs projets, travailler en équipe, stocker du code ou des artefacts, et automatiser les builds ou déploiements. Les regrouper en un seul quota masquerait les différences importantes entre services.',
    },
  ],
};
