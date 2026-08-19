import { OFFER_QUOTAS, type OfferQuota } from './offer-quotas';

const quota = (input: OfferQuota): OfferQuota => input;

OFFER_QUOTAS['audio-enhancer'] ??= [
  quota({ id: 'file-size', metric: 'file_size', label: 'Taille maximale par fichier', amount: 50, unit: 'MB', period: 'session', scope: 'file', reset: 'not-applicable', overage: 'blocked', kind: 'limit' }),
  quota({ id: 'enhancements', metric: 'enhancements', label: 'Nombre de traitements gratuits', amount: null, unit: 'enhancement', period: 'variable', scope: 'account', reset: 'variable', overage: 'unknown', kind: 'not-published', notes: 'Le service ne publie pas de quota chiffré sur le nombre total de traitements gratuits.' }),
];

OFFER_QUOTAS['braintrust'] ??= [
  quota({ id: 'processed-data', metric: 'processed_data', label: 'Données traitées', amount: 1, unit: 'GB', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' }),
  quota({ id: 'scores', metric: 'scores', label: 'Scores', amount: 10_000, unit: 'score', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' }),
  quota({ id: 'model-credit', metric: 'credit', label: 'Crédits modèles', amount: 10, unit: 'USD', period: 'month', scope: 'account', reset: 'monthly', overage: 'billed', kind: 'credit' }),
];

OFFER_QUOTAS['clair'] ??= [
  quota({ id: 'student-access', metric: 'feature_access', label: 'Accès Student', amount: null, unit: 'feature-set', period: 'year', scope: 'user', reset: 'yearly', overage: 'blocked', kind: 'not-published', notes: 'Accès gratuit aux fonctions du plan Starter sous réserve d’une vérification annuelle du statut étudiant.' }),
];

OFFER_QUOTAS['comet-opik'] ??= [
  quota({ id: 'spans', metric: 'spans', label: 'Spans', amount: 25_000, unit: 'span', period: 'month', scope: 'workspace', reset: 'monthly', overage: 'blocked', kind: 'limit' }),
  quota({ id: 'members', metric: 'users', label: 'Membres', amount: 10, unit: 'user', period: 'lifetime', scope: 'workspace', reset: 'never', overage: 'blocked', kind: 'limit' }),
];

OFFER_QUOTAS['future-agi'] ??= [
  quota({ id: 'storage', metric: 'storage', label: 'Stockage', amount: 50, unit: 'GB', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' }),
  quota({ id: 'eval-credits', metric: 'evaluation_credits', label: 'Crédits d’évaluation', amount: 2_000, unit: 'credit', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' }),
  quota({ id: 'gateway-requests', metric: 'requests', label: 'Requêtes AI Gateway', amount: 100_000, unit: 'request', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' }),
  quota({ id: 'cache-hits', metric: 'cache_hits', label: 'Cache hits', amount: 100_000, unit: 'hit', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' }),
  quota({ id: 'text-simulation', metric: 'tokens', label: 'Simulation texte', amount: 1_000_000, unit: 'token', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' }),
  quota({ id: 'voice-simulation', metric: 'voice_simulation', label: 'Simulation vocale', amount: 60, unit: 'minute', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' }),
  quota({ id: 'projects', metric: 'projects', label: 'Projets', amount: null, unit: 'project', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' }),
  quota({ id: 'members', metric: 'users', label: 'Membres', amount: null, unit: 'user', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' }),
];

OFFER_QUOTAS['gonka-broker'] ??= [
  quota({ id: 'tokens', metric: 'tokens', label: 'Tokens gratuits', amount: 1_000_000, unit: 'token', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit', notes: 'Le service annonce au moins un million de tokens gratuits par mois.' }),
];

OFFER_QUOTAS['keywords-ai'] ??= [
  quota({ id: 'logs', metric: 'logs', label: 'Logs', amount: 2_000, unit: 'log', period: 'month', scope: 'workspace', reset: 'monthly', overage: 'blocked', kind: 'limit' }),
  quota({ id: 'seats', metric: 'users', label: 'Sièges', amount: 2, unit: 'user', period: 'lifetime', scope: 'workspace', reset: 'never', overage: 'blocked', kind: 'limit' }),
  quota({ id: 'prompts', metric: 'prompts', label: 'Prompts', amount: 2, unit: 'prompt', period: 'lifetime', scope: 'workspace', reset: 'never', overage: 'blocked', kind: 'limit' }),
  quota({ id: 'analytics-users', metric: 'analytics_users', label: 'Utilisateurs suivis', amount: 100, unit: 'user', period: 'lifetime', scope: 'workspace', reset: 'never', overage: 'blocked', kind: 'limit' }),
];

OFFER_QUOTAS['langfuse'] ??= [
  quota({ id: 'observations', metric: 'observations', label: 'Unités d’observation', amount: 50_000, unit: 'observation', period: 'month', scope: 'organization', reset: 'monthly', overage: 'blocked', kind: 'limit' }),
  quota({ id: 'users', metric: 'users', label: 'Utilisateurs', amount: 2, unit: 'user', period: 'lifetime', scope: 'organization', reset: 'never', overage: 'blocked', kind: 'limit' }),
];

OFFER_QUOTAS['langwatch'] ??= [
  quota({ id: 'events', metric: 'events', label: 'Événements', amount: 50_000, unit: 'event', period: 'month', scope: 'workspace', reset: 'monthly', overage: 'blocked', kind: 'limit' }),
  quota({ id: 'users', metric: 'users', label: 'Utilisateurs', amount: 2, unit: 'user', period: 'lifetime', scope: 'workspace', reset: 'never', overage: 'blocked', kind: 'limit' }),
  quota({ id: 'scenarios', metric: 'scenarios', label: 'Scénarios', amount: 3, unit: 'scenario', period: 'lifetime', scope: 'workspace', reset: 'never', overage: 'blocked', kind: 'limit' }),
  quota({ id: 'simulations', metric: 'simulations', label: 'Simulations', amount: 3, unit: 'simulation', period: 'lifetime', scope: 'workspace', reset: 'never', overage: 'blocked', kind: 'limit' }),
  quota({ id: 'custom-evals', metric: 'evaluations', label: 'Évaluations personnalisées', amount: 3, unit: 'evaluation', period: 'lifetime', scope: 'workspace', reset: 'never', overage: 'blocked', kind: 'limit' }),
];

OFFER_QUOTAS['latitude'] ??= [
  quota({ id: 'credits', metric: 'credits', label: 'Crédits', amount: 20_000, unit: 'credit', period: 'month', scope: 'workspace', reset: 'monthly', overage: 'blocked', kind: 'limit' }),
  quota({ id: 'seats', metric: 'users', label: 'Sièges', amount: null, unit: 'user', period: 'lifetime', scope: 'workspace', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' }),
];

OFFER_QUOTAS['lumenfall'] ??= [
  quota({ id: 'free-allowance', metric: 'inference', label: 'Crédits ou inférences gratuites', amount: null, unit: 'inference', period: 'variable', scope: 'account', reset: 'variable', overage: 'unknown', kind: 'not-published', notes: 'Des crédits gratuits sont proposés, mais le volume gratuit universel n’est pas publié clairement.' }),
  quota({ id: 'platform-fee', metric: 'platform_fee', label: 'Frais de plateforme', amount: 0, unit: 'USD', period: 'variable', scope: 'account', reset: 'not-applicable', overage: 'billed', kind: 'free-management', notes: 'La plateforme annonce zéro marge et zéro abonnement ; les inférences des fournisseurs peuvent rester payantes.' }),
];

OFFER_QUOTAS['maxim'] ??= [
  quota({ id: 'logs', metric: 'logs', label: 'Logs', amount: 10_000, unit: 'log', period: 'month', scope: 'workspace', reset: 'monthly', overage: 'blocked', kind: 'limit' }),
  quota({ id: 'seats', metric: 'users', label: 'Sièges', amount: 3, unit: 'user', period: 'lifetime', scope: 'workspace', reset: 'never', overage: 'blocked', kind: 'limit' }),
  quota({ id: 'workspaces', metric: 'workspaces', label: 'Workspace', amount: 1, unit: 'workspace', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' }),
];

OFFER_QUOTAS['mediaworkbench'] ??= [
  quota({ id: 'historical-words', metric: 'words', label: 'Ancien quota de mots gratuits', amount: 100_000, unit: 'word', period: 'total', scope: 'account', reset: 'never', overage: 'unknown', kind: 'limit', notes: 'Quota historique archivé : l’offre IA correspondante n’est plus présente sur le site actuel.' }),
];

OFFER_QUOTAS['openrouter'] ??= [
  quota({ id: 'free-model-requests', metric: 'requests', label: 'Requêtes sur modèles gratuits', amount: 50, unit: 'request', period: 'day', scope: 'account', reset: 'daily', overage: 'blocked', kind: 'limit', notes: 'Plafond par défaut pour un compte ayant acheté moins de 10 USD de crédits cumulés.' }),
];

OFFER_QUOTAS['pollinations-ai'] ??= [
  quota({ id: 'free-usage', metric: 'generation', label: 'Usage gratuit', amount: null, unit: 'generation', period: 'variable', scope: 'account', reset: 'variable', overage: 'unknown', kind: 'not-published', notes: 'Le service propose des ressources gratuites mais le quota gratuit exact n’est pas publié clairement dans la documentation actuelle.' }),
];

OFFER_QUOTAS['portkey'] ??= [
  quota({ id: 'logs', metric: 'logs', label: 'Logs enregistrés', amount: 10_000, unit: 'log', period: 'month', scope: 'workspace', reset: 'monthly', overage: 'degraded', kind: 'limit', notes: 'Le gateway peut continuer à router des requêtes au-delà du plafond, mais les logs supplémentaires peuvent ne pas être enregistrés.' }),
  quota({ id: 'prompt-templates', metric: 'prompts', label: 'Templates de prompts', amount: 3, unit: 'prompt', period: 'lifetime', scope: 'workspace', reset: 'never', overage: 'blocked', kind: 'limit' }),
];

OFFER_QUOTAS['reportgpt'] ??= [
  quota({ id: 'demo-document', metric: 'documents', label: 'Document de démonstration', amount: 1, unit: 'document', period: 'total', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' }),
  quota({ id: 'byok-platform', metric: 'platform_access', label: 'Accès plateforme en BYOK', amount: null, unit: 'access', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'billed', kind: 'free-management', notes: 'Pas d’abonnement de plateforme en BYOK ; les appels à l’API OpenAI personnelle restent facturés par OpenAI.' }),
];

OFFER_QUOTAS['telemetry-dev'] ??= [
  quota({ id: 'spans', metric: 'spans', label: 'Spans d’ingestion', amount: 10_000, unit: 'span', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' }),
  quota({ id: 'projects', metric: 'projects', label: 'Projet', amount: 1, unit: 'project', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' }),
  quota({ id: 'seats', metric: 'users', label: 'Sièges', amount: 2, unit: 'user', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' }),
];

OFFER_QUOTAS['transcript-lol'] ??= [
  quota({ id: 'transcriptions', metric: 'transcriptions', label: 'Transcriptions', amount: 2, unit: 'transcription', period: 'day', scope: 'account', reset: 'daily', overage: 'blocked', kind: 'limit' }),
  quota({ id: 'file-duration', metric: 'duration', label: 'Durée maximale par fichier', amount: 20, unit: 'minute', period: 'session', scope: 'file', reset: 'not-applicable', overage: 'blocked', kind: 'limit' }),
];

OFFER_QUOTAS['zenable'] ??= [
  quota({ id: 'agent-credits', metric: 'agent_credits', label: 'Crédits agent', amount: 1_000, unit: 'credit', period: 'day', scope: 'account', reset: 'daily', overage: 'blocked', kind: 'limit' }),
  quota({ id: 'pr-reviews', metric: 'pull_request_reviews', label: 'Revues de pull requests', amount: 15, unit: 'review', period: 'week', scope: 'account', reset: 'weekly', overage: 'blocked', kind: 'limit' }),
  quota({ id: 'clusters', metric: 'clusters', label: 'Cluster Kubernetes', amount: 1, unit: 'cluster', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' }),
  quota({ id: 'integrations', metric: 'integrations', label: 'Intégrations connectées', amount: 5, unit: 'integration', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' }),
];
