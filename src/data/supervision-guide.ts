export const SUPERVISION_GUIDE_CONFIG = {
  categoryLabelFallback: 'Supervision',
  fallbackDescription: 'Outils de monitoring, observabilité, uptime et alerting pour développeurs',
  pageTitle: (rankingSize: number) => `Les ${rankingSize} meilleures offres gratuites de supervision pour les développeurs`,
  pageDescription: (rankingSize: number) => `Comparatif indépendant des ${rankingSize} meilleures offres gratuites de supervision, monitoring et observabilité : quotas, score, fréquence, rétention et limites vérifiés.`,
  heroTitle: (rankingSize: number) => `Les ${rankingSize} meilleures offres gratuites de supervision`,
  heroIntro: 'Comparatif indépendant des outils de monitoring, uptime, observabilité et alerting présents dans le catalogue. Pour surveiller un site, une API, une infrastructure ou une application, retrouvez les offres gratuites les mieux notées avec leurs capacités, fréquences de contrôle et contraintes réellement documentées.',
  rankingTitle: (rankingSize: number) => `Top ${rankingSize} des meilleures offres gratuites de supervision`,
  itemListName: (rankingSize: number) => `Les ${rankingSize} meilleures offres gratuites de supervision`,
  quotaPriority: ['monitors', 'services', 'hosts', 'nodes', 'synthetic_checks', 'checks', 'monitoring_events', 'transactions', 'data_ingest', 'check_interval', 'retention'],
  comparisonIntro: 'La supervision couvre aussi bien l’uptime simple que l’observabilité complète. Le tableau distingue donc le nombre de ressources surveillées, les volumes de checks ou d’événements et les contraintes de fréquence ou de rétention lorsqu’elles sont structurées.',
  comparisonColumns: [
    { key: 'service' as const, label: 'Service' },
    { key: 'type' as const, label: 'Type de supervision' },
    { key: 'quota' as const, label: 'Ressources surveillées', metrics: ['monitors', 'services', 'hosts', 'nodes', 'sites', 'pages', 'targets'] },
    { key: 'quota' as const, label: 'Volume / événements', metrics: ['synthetic_checks', 'checks', 'monitoring_events', 'transactions', 'test_results', 'api_requests', 'data_ingest'] },
    { key: 'quota' as const, label: 'Fréquence / rétention', metrics: ['check_interval', 'retention'] },
    { key: 'plan' as const, label: 'Formule gratuite' },
    { key: 'duration' as const, label: 'Gratuité' },
    { key: 'overage' as const, label: 'Dépassement' },
    { key: 'card' as const, label: 'Carte bancaire' },
    { key: 'usage' as const, label: 'Usage idéal' },
  ],
  faqItems: [
    {
      question: 'Quel outil de supervision gratuit choisir pour un projet ?',
      answer: 'Pour un site ou une API, le nombre de monitors et la fréquence des contrôles sont souvent prioritaires. Pour une application ou une infrastructure, l’ingestion, les métriques, les traces, les logs et la rétention deviennent plus importantes. Le classement combine ces capacités avec la permanence du gratuit, la carte bancaire, les restrictions et la fraîcheur de vérification.',
    },
    {
      question: 'Quelle différence entre monitoring uptime et observabilité ?',
      answer: 'Le monitoring uptime vérifie principalement qu’un service répond correctement à intervalles réguliers. L’observabilité va plus loin en regroupant métriques, logs, traces, événements ou tests synthétiques pour comprendre pourquoi un système se dégrade ou tombe en panne.',
    },
    {
      question: 'Ces services de supervision sont-ils réellement gratuits ?',
      answer: 'Les offres classées disposent d’un accès gratuit lors de leur dernière vérification. Les limites peuvent porter sur le nombre de monitors, les volumes ingérés, la fréquence des contrôles, la rétention ou certaines fonctions avancées. Les conditions détaillées restent visibles sur chaque fiche.',
    },
    {
      question: 'Que se passe-t-il lorsque le quota gratuit de monitoring est dépassé ?',
      answer: 'Le comportement dépend du fournisseur : ajout de nouveaux monitors bloqué, réduction de la collecte, limitation de l’accès ou passage à une offre payante. Le comparatif affiche le comportement de dépassement lorsqu’il est documenté dans les données structurées.',
    },
  ],
};
