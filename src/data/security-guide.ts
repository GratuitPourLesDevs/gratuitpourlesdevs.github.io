export const SECURITY_GUIDE_CONFIG = {
  categoryLabelFallback: 'Sécurité et PKI',
  fallbackDescription: 'Analyse de sécurité, certificats, secrets, chiffrement et infrastructure de clés pour développeurs',
  pageTitle: (rankingSize: number) => `Les ${rankingSize} meilleures offres gratuites de sécurité et PKI pour les développeurs`,
  pageDescription: (rankingSize: number) => `Comparatif indépendant des ${rankingSize} meilleures offres gratuites de sécurité et PKI pour développeurs : scans, actifs, secrets, certificats, score et limites vérifiés.`,
  heroTitle: (rankingSize: number) => `Les ${rankingSize} meilleures offres gratuites de sécurité et PKI`,
  heroIntro: 'Comparatif indépendant des outils de sécurité présents dans le catalogue. Analyse de code et de dépendances, détection de secrets, audits web et TLS, certificats ou gestion de secrets : retrouvez les offres gratuites les mieux notées avec leurs limites réellement documentées.',
  rankingTitle: (rankingSize: number) => `Top ${rankingSize} des meilleures offres gratuites de sécurité et PKI`,
  itemListName: (rankingSize: number) => `Les ${rankingSize} meilleures offres gratuites de sécurité et PKI`,
  quotaPriority: ['scans', 'analyses', 'pr_scans', 'local_scans', 'tests', 'checks', 'inspections', 'searches', 'api_calls', 'requests', 'operations', 'repositories', 'projects', 'private_projects', 'domains', 'assets_internal', 'assets_external', 'web_apps', 'machines', 'cloud_accounts', 'container_images', 'certificates', 'certificate_issuance', 'secrets', 'encrypted_env_values', 'secret_syncs', 'users'],
  comparisonIntro: 'La sécurité couvre des usages très différents. Le tableau sépare donc le volume d’analyses, les projets ou actifs protégés et les capacités liées aux secrets ou certificats, plutôt que de mettre artificiellement toutes ces unités sur le même plan.',
  comparisonColumns: [
    { key: 'service' as const, label: 'Service' },
    { key: 'type' as const, label: 'Type de sécurité' },
    { key: 'quota' as const, label: 'Analyses / scans', metrics: ['scans', 'analyses', 'pr_scans', 'local_scans', 'tests', 'checks', 'inspections', 'searches', 'api_calls', 'requests', 'operations', 'historical_detections', 'autofix'] },
    { key: 'quota' as const, label: 'Projets / actifs', metrics: ['repositories', 'projects', 'private_projects', 'domains', 'assets_internal', 'assets_external', 'web_apps', 'machines', 'cloud_accounts', 'container_images', 'agents', 'ssl_monitors', 'identities', 'users', 'members'] },
    { key: 'quota' as const, label: 'Secrets / certificats', metrics: ['certificates', 'certificate_issuance', 'secrets', 'encrypted_env_values', 'secret_syncs', 'config_syncs', 'environments', 'application_users'] },
    { key: 'plan' as const, label: 'Formule gratuite' },
    { key: 'duration' as const, label: 'Gratuité' },
    { key: 'overage' as const, label: 'Dépassement' },
    { key: 'card' as const, label: 'Carte bancaire' },
    { key: 'usage' as const, label: 'Usage idéal' },
  ],
  faqItems: [
    {
      question: 'Quel outil de sécurité gratuit choisir pour un projet de développement ?',
      answer: 'Le bon choix dépend du risque à couvrir : vulnérabilités de code ou dépendances, fuite de secrets, configuration web et TLS, certificats ou gestion de secrets. Le classement combine la valeur du niveau gratuit avec sa permanence, ses conditions d’accès, ses restrictions et la fraîcheur de vérification.',
    },
    {
      question: 'Comment comparer un scanner de vulnérabilités, un gestionnaire de secrets et une autorité de certification ?',
      answer: 'Ces outils ne rendent pas le même service et leurs quotas ne sont pas directement équivalents. Le comparatif sépare donc trois familles — analyses et scans, projets et actifs, secrets et certificats — et n’affiche une valeur que lorsqu’un quota structuré correspondant est documenté.',
    },
    {
      question: 'Ces outils de sécurité proposent-ils réellement un niveau gratuit ?',
      answer: 'Les offres classées disposent d’un accès gratuit lors de leur dernière vérification. Certaines sont des outils publics ou locaux sans quota mesuré, d’autres limitent le nombre de dépôts, scans, utilisateurs, secrets ou certificats. Ces différences sont intégrées au score GratuitPourLesDevs.',
    },
    {
      question: 'Faut-il une carte bancaire pour utiliser ces services de sécurité ?',
      answer: 'Pas systématiquement. La nécessité d’une carte bancaire est affichée dans le comparatif et intervient dans le score, afin d’identifier rapidement les outils testables sans moyen de paiement et sans risque de facturation immédiate.',
    },
  ],
};
