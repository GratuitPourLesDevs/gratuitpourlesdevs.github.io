export const TESTING_GUIDE_CONFIG = {
  categoryLabelFallback: 'Tests',
  fallbackDescription: 'Outils de tests automatisés, visuels, API, mobiles et navigateurs pour développeurs',
  pageTitle: (rankingSize: number) => `Les ${rankingSize} meilleures offres gratuites de tests pour les développeurs`,
  pageDescription: (rankingSize: number) => `Comparatif indépendant des ${rankingSize} meilleures offres gratuites de tests pour développeurs : exécutions, environnements, projets, score et limites vérifiés.`,
  heroTitle: (rankingSize: number) => `Les ${rankingSize} meilleures offres gratuites de tests`,
  heroIntro: 'Comparatif indépendant des plateformes et outils de tests présents dans le catalogue. Tests end-to-end, visuels, API, mobile, performance ou compatibilité navigateur : retrouvez les offres gratuites les mieux notées avec leurs volumes d’exécution et leurs contraintes réellement documentées.',
  rankingTitle: (rankingSize: number) => `Top ${rankingSize} des meilleures offres gratuites de tests`,
  itemListName: (rankingSize: number) => `Les ${rankingSize} meilleures offres gratuites de tests`,
  quotaPriority: ['test_runs', 'runs', 'runs_local', 'tests', 'automated_tests', 'browser_checks', 'api_checks', 'test_results', 'api_results', 'screenshots', 'snapshots', 'sessions', 'test_cases', 'collection_runs', 'crawls', 'checks', 'manual_checks', 'devices', 'concurrency', 'locations', 'projects', 'test_suites', 'history'],
  comparisonIntro: 'Les outils de tests ne mesurent pas tous la même chose. Le tableau sépare donc les volumes de tests ou d’exécutions, la capacité d’environnement ou de parallélisme et les limites de projets ou d’historique afin d’éviter les comparaisons trompeuses.',
  comparisonColumns: [
    { key: 'service' as const, label: 'Service' },
    { key: 'type' as const, label: 'Type de test' },
    { key: 'quota' as const, label: 'Tests / exécutions', metrics: ['test_runs', 'runs', 'runs_local', 'tests', 'tests_android', 'tests_ios', 'tests_web', 'automated_tests', 'browser_checks', 'api_checks', 'test_results', 'api_results', 'screenshots', 'snapshots', 'sessions', 'test_cases', 'collection_runs', 'crawls', 'checks', 'manual_checks', 'metrics'] },
    { key: 'quota' as const, label: 'Environnements / parallélisme', metrics: ['devices', 'concurrency', 'locations', 'usage_time', 'session_time', 'compute_time', 'grid_time', 'job_time'] },
    { key: 'quota' as const, label: 'Projets / historique', metrics: ['projects', 'projects_local', 'projects_team', 'test_suites', 'users', 'history', 'storage', 'targets'] },
    { key: 'plan' as const, label: 'Formule gratuite' },
    { key: 'duration' as const, label: 'Gratuité' },
    { key: 'overage' as const, label: 'Dépassement' },
    { key: 'card' as const, label: 'Carte bancaire' },
    { key: 'usage' as const, label: 'Usage idéal' },
  ],
  faqItems: [
    {
      question: 'Quel outil de test gratuit choisir pour un projet de développement ?',
      answer: 'Le choix dépend du type de validation recherché : tests end-to-end, API, visuels, mobile, performance ou compatibilité navigateur. Le classement combine la valeur du quota gratuit avec sa permanence, les conditions d’accès, les restrictions et la fraîcheur de vérification.',
    },
    {
      question: 'Comment comparer des quotas de tests très différents ?',
      answer: 'Un screenshot visuel, un test API, une session mobile et un run automatisé ne sont pas directement équivalents. Le comparatif les regroupe donc par familles — tests et exécutions, environnements et parallélisme, projets et historique — et n’affiche une valeur que lorsqu’elle est structurée.',
    },
    {
      question: 'Ces plateformes de tests proposent-elles un vrai niveau gratuit ?',
      answer: 'Les offres classées disposent d’un accès gratuit lors de leur dernière vérification. Certaines offrent des exécutions locales illimitées, d’autres un quota mensuel de runs, de screenshots ou de résultats. La permanence et les limites sont prises en compte dans le score GratuitPourLesDevs.',
    },
    {
      question: 'Faut-il une carte bancaire pour utiliser ces outils de tests ?',
      answer: 'Pas systématiquement. La nécessité d’une carte bancaire est affichée dans le comparatif et intervient dans le score. Cela permet de distinguer un outil immédiatement testable d’une offre gratuite nécessitant d’abord un moyen de paiement.',
    },
  ],
};
