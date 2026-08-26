export const CI_CD_GUIDE_CONFIG = {
  categoryLabelFallback: 'Intégration et déploiement continus (CI/CD)',
  fallbackDescription: 'Pipelines de compilation, test, livraison et déploiement automatisés pour développeurs',
  pageTitle: (rankingSize: number) => `Les ${rankingSize} meilleures offres gratuites CI/CD pour les développeurs`,
  pageDescription: (rankingSize: number) => `Comparatif indépendant des ${rankingSize} meilleures offres gratuites CI/CD pour développeurs : builds, déploiements, compute, concurrence, score et limites vérifiés.`,
  heroTitle: (rankingSize: number) => `Les ${rankingSize} meilleures offres gratuites CI/CD`,
  heroIntro: 'Comparatif indépendant des plateformes d’intégration et de déploiement continus présentes dans le catalogue. Builds, pipelines, tests, livraison et déploiement : retrouvez les offres gratuites les mieux notées avec leurs capacités de calcul, leur parallélisme et leurs limites réellement documentées.',
  rankingTitle: (rankingSize: number) => `Top ${rankingSize} des meilleures offres gratuites CI/CD`,
  itemListName: (rankingSize: number) => `Les ${rankingSize} meilleures offres gratuites CI/CD`,
  quotaPriority: ['builds', 'deployments', 'compute_time', 'credits', 'pipeline_compute', 'concurrency', 'build_duration', 'job_duration', 'test_executions', 'store_publishes', 'projects', 'users', 'contributors', 'runners', 'servers', 'repositories', 'history'],
  comparisonIntro: 'Les plateformes CI/CD expriment leur niveau gratuit avec des unités différentes. Le tableau sépare donc le volume de builds ou déploiements, les ressources de calcul ou crédits et les limites d’équipe ou de concurrence afin de comparer des capacités réellement proches.',
  comparisonColumns: [
    { key: 'service' as const, label: 'Service' },
    { key: 'type' as const, label: 'Type de CI/CD' },
    { key: 'quota' as const, label: 'Builds / déploiements', metrics: ['builds', 'deployments', 'store_publishes', 'test_executions', 'executions', 'runs', 'pipelines', 'scenarios'] },
    { key: 'quota' as const, label: 'Compute / crédits', metrics: ['compute_time', 'credits', 'credits_oss', 'pipeline_compute', 'build_duration', 'job_duration', 'memory_time', 'sandbox_compute', 'managed_vcpu', 'managed_memory'] },
    { key: 'quota' as const, label: 'Équipe / concurrence', metrics: ['concurrency', 'users', 'contributors', 'projects', 'applications_private', 'runners', 'servers', 'repositories', 'database_instances', 'history'] },
    { key: 'plan' as const, label: 'Formule gratuite' },
    { key: 'duration' as const, label: 'Gratuité' },
    { key: 'overage' as const, label: 'Dépassement' },
    { key: 'card' as const, label: 'Carte bancaire' },
    { key: 'usage' as const, label: 'Usage idéal' },
  ],
  faqItems: [
    {
      question: 'Quelle plateforme CI/CD gratuite choisir pour un projet de développement ?',
      answer: 'Le choix dépend surtout de votre charge de build, du type de runners nécessaires, du nombre de collaborateurs et du niveau de parallélisme attendu. Le classement combine la valeur du niveau gratuit avec sa permanence, les conditions d’accès, les restrictions et la fraîcheur de vérification.',
    },
    {
      question: 'Comment comparer des minutes de build, des crédits et des exécutions ?',
      answer: 'Ces unités ne sont pas directement équivalentes. Le comparatif les sépare en familles — builds et déploiements, compute et crédits, équipe et concurrence — puis n’affiche une valeur que lorsqu’un quota structuré correspondant est documenté.',
    },
    {
      question: 'Ces offres CI/CD sont-elles réellement utilisables gratuitement ?',
      answer: 'Les offres classées disposent d’un accès gratuit lors de leur dernière vérification. Certaines fournissent des minutes ou crédits mensuels, d’autres des capacités gratuites pour l’open source ou les runners auto-hébergés. La permanence et les restrictions sont intégrées au score GratuitPourLesDevs.',
    },
    {
      question: 'Faut-il une carte bancaire pour utiliser ces services CI/CD ?',
      answer: 'Pas systématiquement. La nécessité d’une carte bancaire est affichée dans le comparatif et intervient dans le score, ce qui permet d’identifier rapidement les plateformes réellement testables sans risque de facturation immédiate.',
    },
  ],
};
