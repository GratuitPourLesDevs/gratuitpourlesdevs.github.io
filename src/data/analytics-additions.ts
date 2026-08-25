import { OFFER_QUOTAS, type OfferQuota } from './offer-quotas';

const QUOTAS: Record<string, OfferQuota[]> = {
  amplitude: [
    { id: 'events', metric: 'events', label: 'Événements', amount: 2000000, unit: 'event', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
    { id: 'session-replays', metric: 'sessions', label: 'Session replays', amount: 10000, unit: 'replay', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
  ],
  appfit: [
    { id: 'events', metric: 'events', label: 'Événements', amount: 10000, unit: 'event', period: 'month', scope: 'project', reset: 'monthly', overage: 'blocked', kind: 'limit' },
    { id: 'projects', metric: 'projects', label: 'Projets', amount: 1, unit: 'project', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
    { id: 'retention', metric: 'retention', label: 'Historique des événements', amount: 12, unit: 'week', period: 'lifetime', scope: 'project', reset: 'not-applicable', overage: 'not-applicable', kind: 'limit' },
  ],
  aptabase: [
    { id: 'events', metric: 'events', label: 'Événements', amount: 20000, unit: 'event', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
    { id: 'apps', metric: 'applications', label: 'Applications', amount: null, unit: 'application', period: 'lifetime', scope: 'account', reset: 'never', overage: 'not-applicable', kind: 'unlimited' },
  ],
  avo: [
    { id: 'editors', metric: 'users', label: 'Éditeurs', amount: 2, unit: 'user', period: 'lifetime', scope: 'workspace', reset: 'never', overage: 'blocked', kind: 'limit' },
    { id: 'inspector-events', metric: 'events', label: 'Événements observés par Inspector', amount: 100000, unit: 'event', period: 'month', scope: 'workspace', reset: 'monthly', overage: 'blocked', kind: 'limit' },
  ],
  beampipe: [
    { id: 'domains', metric: 'domains', label: 'Domaines', amount: 5, unit: 'domain', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
    { id: 'pageviews', metric: 'pageviews', label: 'Pages vues', amount: 10000, unit: 'pageview', period: 'month', scope: 'account', reset: 'monthly', overage: 'unknown', kind: 'limit' },
  ],
  'fivetran-activations': [
    { id: 'activation-mar', metric: 'rows', label: 'MAR pour Activations', amount: 3500, unit: 'MAR', period: 'month', scope: 'account', reset: 'monthly', overage: 'degraded', kind: 'limit', notes: 'Premier dépassement avec période de grâce ; après un second dépassement, Fivetran peut geler les workloads jusqu’à optimisation ou upgrade.' },
  ],
  clicky: [
    { id: 'sites', metric: 'sites', label: 'Sites', amount: 1, unit: 'site', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
    { id: 'pageviews', metric: 'pageviews', label: 'Pages vues', amount: 3000, unit: 'pageview', period: 'day', scope: 'site', reset: 'daily', overage: 'degraded', kind: 'limit' },
    { id: 'retention', metric: 'retention', label: 'Historique', amount: 30, unit: 'day', period: 'lifetime', scope: 'site', reset: 'not-applicable', overage: 'not-applicable', kind: 'limit' },
  ],
  'counter-dev': [
    { id: 'hosted-usage', metric: 'service_limits', label: 'Usage du service hébergé', amount: null, unit: 'various', period: 'variable', scope: 'service', reset: 'variable', overage: 'unknown', kind: 'not-published', notes: 'Service utilisable gratuitement avec contribution facultative ; aucun quota numérique stable n’est publié.' },
  ],
  docbeacon: [
    { id: 'documents', metric: 'documents', label: 'Documents', amount: 20, unit: 'document', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
    { id: 'file-size', metric: 'storage', label: 'Taille maximale par PDF', amount: 10, unit: 'MB', period: 'lifetime', scope: 'document', reset: 'not-applicable', overage: 'blocked', kind: 'limit' },
    { id: 'shares', metric: 'shares', label: 'Partages par document', amount: 2, unit: 'share', period: 'lifetime', scope: 'document', reset: 'never', overage: 'blocked', kind: 'limit' },
    { id: 'contacts', metric: 'contacts', label: 'Contacts', amount: 10, unit: 'contact', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
    { id: 'link-views', metric: 'views', label: 'Vues par lien', amount: 10, unit: 'view', period: 'lifetime', scope: 'share', reset: 'never', overage: 'blocked', kind: 'limit' },
  ],
  'dwh-dev': [
    { id: 'projects', metric: 'projects', label: 'Projets', amount: 1, unit: 'project', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
    { id: 'objects', metric: 'objects', label: 'Objets par projet', amount: 100, unit: 'object', period: 'lifetime', scope: 'project', reset: 'never', overage: 'blocked', kind: 'limit' },
  ],
  expensify: [
    { id: 'personal-scans', metric: 'scans', label: 'SmartScans en usage personnel', amount: null, unit: 'scan', period: 'month', scope: 'account', reset: 'monthly', overage: 'not-applicable', kind: 'unlimited', notes: 'L’aide Expensify distingue l’usage personnel gratuit des quotas applicables à certains workspaces.' },
  ],
  insights: [
    { id: 'events', metric: 'events', label: 'Événements ou pages vues', amount: 3000, unit: 'event', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
  ],
  'gizmo-analytics': [
    { id: 'events', metric: 'events', label: 'Événements', amount: 10000, unit: 'event', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
    { id: 'sites', metric: 'sites', label: 'Sites', amount: null, unit: 'site', period: 'lifetime', scope: 'account', reset: 'never', overage: 'not-applicable', kind: 'unlimited' },
    { id: 'retention', metric: 'retention', label: 'Rétention', amount: 30, unit: 'day', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'limit' },
  ],
  goatcounter: [
    { id: 'hosted-usage', metric: 'service_limits', label: 'Usage du service public', amount: null, unit: 'pageview', period: 'variable', scope: 'service', reset: 'variable', overage: 'unknown', kind: 'not-published', notes: 'Le service hébergé gratuit fonctionne désormais selon une politique d’usage raisonnable ; l’auto-hébergement est libre.' },
  ],
  'google-analytics': [
    { id: 'standard-limits', metric: 'service_limits', label: 'Limites de Google Analytics Standard', amount: null, unit: 'various', period: 'variable', scope: 'property', reset: 'variable', overage: 'unknown', kind: 'not-published', notes: 'L’édition Standard est gratuite ; les limites dépendent des fonctionnalités et diffèrent de Google Analytics 360.' },
  ],
  heap: [
    { id: 'sessions', metric: 'sessions', label: 'Sessions', amount: 10000, unit: 'session', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
    { id: 'retention', metric: 'retention', label: 'Historique', amount: 6, unit: 'month', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'limit' },
  ],
  hightouch: [
    { id: 'active-syncs', metric: 'syncs', label: 'Synchronisations actives', amount: 2, unit: 'sync', period: 'lifetime', scope: 'workspace', reset: 'never', overage: 'blocked', kind: 'limit' },
    { id: 'operations', metric: 'operations', label: 'Opérations', amount: 100000000, unit: 'operation', period: 'month', scope: 'workspace', reset: 'monthly', overage: 'blocked', kind: 'limit' },
  ],
  hitkeep: [
    { id: 'sites', metric: 'sites', label: 'Sites', amount: 3, unit: 'site', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
    { id: 'members', metric: 'users', label: 'Membres', amount: 3, unit: 'user', period: 'lifetime', scope: 'workspace', reset: 'never', overage: 'blocked', kind: 'limit' },
    { id: 'retention', metric: 'retention', label: 'Rétention', amount: 60, unit: 'day', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'limit' },
  ],
  contentsquare: [
    { id: 'sessions', metric: 'sessions', label: 'Sessions', amount: 200000, unit: 'session', period: 'month', scope: 'project', reset: 'monthly', overage: 'blocked', kind: 'limit' },
    { id: 'projects', metric: 'projects', label: 'Projets', amount: 1, unit: 'project', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
    { id: 'survey-responses', metric: 'responses', label: 'Réponses d’enquête', amount: 100, unit: 'response', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
  ],
  logspot: [
    { id: 'events', metric: 'events', label: 'Événements', amount: 5000, unit: 'event', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
    { id: 'domains', metric: 'domains', label: 'Domaines', amount: 1, unit: 'domain', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
    { id: 'members', metric: 'users', label: 'Membres', amount: 1, unit: 'user', period: 'lifetime', scope: 'workspace', reset: 'never', overage: 'blocked', kind: 'limit' },
    { id: 'retention', metric: 'retention', label: 'Rétention', amount: 3, unit: 'month', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'limit' },
  ],
  mixpanel: [
    { id: 'events', metric: 'events', label: 'Événements', amount: 1000000, unit: 'event', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
    { id: 'replays', metric: 'sessions', label: 'Session replays', amount: 10000, unit: 'replay', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
    { id: 'saved-reports', metric: 'reports', label: 'Rapports sauvegardés par siège', amount: 5, unit: 'report', period: 'lifetime', scope: 'user', reset: 'never', overage: 'blocked', kind: 'limit' },
  ],
  moesif: [
    { id: 'events', metric: 'events', label: 'Événements', amount: 30000, unit: 'event', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
    { id: 'retention', metric: 'retention', label: 'Rétention', amount: 7, unit: 'day', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'limit' },
  ],
  posthog: [
    { id: 'product-events', metric: 'events', label: 'Événements Product Analytics', amount: 1000000, unit: 'event', period: 'month', scope: 'account', reset: 'monthly', overage: 'billed', kind: 'limit', notes: 'L’allocation est gratuite ; une facturation à l’usage peut s’appliquer au-delà lorsque la facturation cloud est activée.' },
    { id: 'replays', metric: 'sessions', label: 'Session replays', amount: 5000, unit: 'replay', period: 'month', scope: 'account', reset: 'monthly', overage: 'billed', kind: 'limit' },
    { id: 'feature-flags', metric: 'requests', label: 'Requêtes Feature Flags', amount: 1000000, unit: 'request', period: 'month', scope: 'account', reset: 'monthly', overage: 'billed', kind: 'limit' },
  ],
  repohistory: [
    { id: 'repositories', metric: 'repositories', label: 'Dépôts suivis', amount: 1, unit: 'repository', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  ],
  'row-zero': [
    { id: 'workbooks', metric: 'workbooks', label: 'Workbooks', amount: 1, unit: 'workbook', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
    { id: 'storage', metric: 'storage', label: 'Capacité par workbook', amount: 5, unit: 'GB', period: 'lifetime', scope: 'workbook', reset: 'never', overage: 'blocked', kind: 'limit' },
  ],
  rybbit: [
    { id: 'self-hosted', metric: 'service_limits', label: 'Limites auto-hébergées', amount: null, unit: 'various', period: 'variable', scope: 'installation', reset: 'variable', overage: 'not-applicable', kind: 'not-published', notes: 'L’édition open source n’impose pas de quota logiciel publié ; la capacité dépend de l’infrastructure choisie.' },
  ],
  statcounter: [
    { id: 'sessions', metric: 'sessions', label: 'Sessions', amount: 5000, unit: 'session', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
    { id: 'retention', metric: 'retention', label: 'Rétention', amount: 14, unit: 'day', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'limit' },
  ],
  statsig: [
    { id: 'events', metric: 'events', label: 'Événements mesurés', amount: 2000000, unit: 'event', period: 'month', scope: 'account', reset: 'monthly', overage: 'degraded', kind: 'limit', notes: 'Au-delà du seuil Developer, le ciblage des flags/configs continue mais certains calculs Metric Lift s’arrêtent.' },
    { id: 'replays', metric: 'sessions', label: 'Session replays', amount: 50000, unit: 'replay', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
    { id: 'retention', metric: 'retention', label: 'Rétention analytics', amount: 1, unit: 'year', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'limit' },
  ],
  tracelog: [
    { id: 'events', metric: 'events', label: 'Événements', amount: 50000, unit: 'event', period: 'month', scope: 'project', reset: 'monthly', overage: 'blocked', kind: 'limit' },
    { id: 'retention', metric: 'retention', label: 'Historique analytics agrégé', amount: 30, unit: 'day', period: 'lifetime', scope: 'project', reset: 'not-applicable', overage: 'not-applicable', kind: 'limit' },
    { id: 'ai-queries', metric: 'queries', label: 'Requêtes IA', amount: 10, unit: 'query', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
    { id: 'reports', metric: 'reports', label: 'Rapports', amount: 1, unit: 'report', period: 'month', scope: 'project', reset: 'monthly', overage: 'blocked', kind: 'limit' },
    { id: 'projects', metric: 'projects', label: 'Projets', amount: 1, unit: 'project', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  ],
  'trackwith-dicloud': [
    { id: 'sites', metric: 'sites', label: 'Sites', amount: 3, unit: 'site', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
    { id: 'pageviews', metric: 'pageviews', label: 'Pages vues', amount: null, unit: 'pageview', period: 'month', scope: 'account', reset: 'monthly', overage: 'not-applicable', kind: 'unlimited' },
    { id: 'heatmaps', metric: 'heatmaps', label: 'Heatmaps', amount: null, unit: 'heatmap', period: 'lifetime', scope: 'account', reset: 'never', overage: 'not-applicable', kind: 'unlimited' },
    { id: 'replays', metric: 'sessions', label: 'Session replays', amount: 600, unit: 'replay', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
  ],
  umami: [
    { id: 'hobby-limits', metric: 'service_limits', label: 'Quota mensuel Hobby', amount: null, unit: 'event', period: 'month', scope: 'account', reset: 'monthly', overage: 'unknown', kind: 'not-published', notes: 'La FAQ confirme que Hobby est gratuit mais ne publie pas directement un seuil mensuel stable sur la page de référence vérifiée.' },
    { id: 'api-rate', metric: 'requests', label: 'Limite API Cloud par clé', amount: 50, unit: 'request', period: 'session', scope: 'api-key', reset: 'rolling', overage: 'blocked', kind: 'limit', notes: '50 appels toutes les 15 secondes.' },
  ],
  lyssna: [
    { id: 'collaborators', metric: 'users', label: 'Collaborateurs', amount: 3, unit: 'user', period: 'lifetime', scope: 'workspace', reset: 'never', overage: 'blocked', kind: 'limit' },
    { id: 'quick-studies', metric: 'studies', label: 'Études rapides', amount: null, unit: 'study', period: 'month', scope: 'workspace', reset: 'monthly', overage: 'not-applicable', kind: 'unlimited' },
    { id: 'self-recruited-responses', metric: 'responses', label: 'Réponses auto-recrutées visibles par étude', amount: 15, unit: 'response', period: 'lifetime', scope: 'study', reset: 'never', overage: 'blocked', kind: 'limit' },
    { id: 'video-storage', metric: 'storage', label: 'Stockage vidéo', amount: 5, unit: 'GB', period: 'total', scope: 'workspace', reset: 'never', overage: 'blocked', kind: 'limit' },
    { id: 'transcription', metric: 'transcription', label: 'Transcription', amount: 5, unit: 'hour', period: 'total', scope: 'workspace', reset: 'never', overage: 'blocked', kind: 'limit' },
  ],
};

for (const [id, quotas] of Object.entries(QUOTAS)) OFFER_QUOTAS[id] ??= quotas;

export const ANALYTICS_QUOTA_SCORES = {
  amplitude: 25,
  appfit: 20,
  aptabase: 20,
  avo: 20,
  beampipe: 20,
  'fivetran-activations': 15,
  clicky: 15,
  'counter-dev': 20,
  docbeacon: 10,
  'dwh-dev': 15,
  expensify: 20,
  insights: 15,
  'gizmo-analytics': 20,
  goatcounter: 20,
  'google-analytics': 25,
  heap: 20,
  hightouch: 20,
  hitkeep: 25,
  contentsquare: 25,
  logspot: 15,
  mixpanel: 25,
  moesif: 15,
  posthog: 25,
  repohistory: 15,
  'row-zero': 20,
  rybbit: 20,
  statcounter: 15,
  statsig: 25,
  tracelog: 20,
  'trackwith-dicloud': 25,
  umami: 25,
  lyssna: 20,
} satisfies Record<string, 5 | 10 | 15 | 20 | 25>;
