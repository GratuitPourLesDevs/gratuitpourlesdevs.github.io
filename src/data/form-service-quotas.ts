import { OFFER_QUOTAS, type OfferQuota } from './offer-quotas';

const quota = (input: OfferQuota): OfferQuota => input;

OFFER_QUOTAS['fabform'] ??= [
  quota({ id: 'forms', metric: 'forms', label: 'Formulaires', amount: null, unit: 'form', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' }),
  quota({ id: 'submissions', metric: 'submissions', label: 'Soumissions', amount: null, unit: 'submission', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' }),
];

OFFER_QUOTAS['feathery'] ??= [
  quota({ id: 'submissions', metric: 'submissions', label: 'Soumissions', amount: 500, unit: 'submission', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' }),
  quota({ id: 'live-forms', metric: 'forms', label: 'Formulaires actifs', amount: 5, unit: 'form', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' }),
];

OFFER_QUOTAS['feedback-fish'] ??= [
  quota({ id: 'feedback', metric: 'feedback_submissions', label: 'Retours collectés', amount: 25, unit: 'submission', period: 'total', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' }),
];

OFFER_QUOTAS['fluidforms'] ??= [
  quota({ id: 'responses', metric: 'submissions', label: 'Réponses', amount: 100, unit: 'submission', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' }),
  quota({ id: 'forms', metric: 'forms', label: 'Formulaires', amount: null, unit: 'form', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' }),
  quota({ id: 'ai-actions', metric: 'ai_actions', label: 'Actions IA', amount: 10, unit: 'action', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' }),
];

OFFER_QUOTAS['form-taxi'] ??= [
  quota({ id: 'forms', metric: 'forms', label: 'Formulaires', amount: 3, unit: 'form', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' }),
  quota({ id: 'submissions', metric: 'submissions', label: 'Soumissions', amount: 40, unit: 'submission', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' }),
];

OFFER_QUOTAS['formcarry'] ??= [
  quota({ id: 'forms', metric: 'forms', label: 'Formulaires', amount: 1, unit: 'form', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' }),
  quota({ id: 'submissions', metric: 'submissions', label: 'Soumissions', amount: 50, unit: 'submission', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' }),
];

OFFER_QUOTAS['formester'] ??= [
  quota({ id: 'forms', metric: 'forms', label: 'Formulaires', amount: null, unit: 'form', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' }),
  quota({ id: 'responses', metric: 'submissions', label: 'Réponses', amount: null, unit: 'submission', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' }),
];

OFFER_QUOTAS['forminit'] ??= [
  quota({ id: 'forms', metric: 'forms', label: 'Formulaires', amount: 1, unit: 'form', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' }),
  quota({ id: 'submissions', metric: 'submissions', label: 'Soumissions', amount: 100, unit: 'submission', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' }),
  quota({ id: 'storage', metric: 'storage', label: 'Stockage fichiers', amount: 100, unit: 'MB', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' }),
];

OFFER_QUOTAS['formkeep'] ??= [
  quota({ id: 'forms', metric: 'forms', label: 'Formulaires', amount: null, unit: 'form', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' }),
  quota({ id: 'submissions', metric: 'submissions', label: 'Soumissions', amount: 50, unit: 'submission', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' }),
];

OFFER_QUOTAS['form-plume'] ??= [
  quota({ id: 'submissions', metric: 'submissions', label: 'Soumissions', amount: 500, unit: 'submission', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' }),
  quota({ id: 'forms', metric: 'forms', label: 'Formulaires', amount: null, unit: 'form', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' }),
];

OFFER_QUOTAS['formlets'] ??= [
  quota({ id: 'forms', metric: 'forms', label: 'Formulaires publiés', amount: 1, unit: 'form', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' }),
  quota({ id: 'responses', metric: 'submissions', label: 'Réponses', amount: null, unit: 'submission', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' }),
];

OFFER_QUOTAS['forms-app'] ??= [
  quota({ id: 'forms', metric: 'forms', label: 'Formulaires', amount: 5, unit: 'form', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' }),
  quota({ id: 'responses', metric: 'submissions', label: 'Réponses', amount: null, unit: 'submission', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' }),
];

OFFER_QUOTAS['formspark'] ??= [
  quota({ id: 'submissions', metric: 'submissions', label: 'Soumissions gratuites', amount: 250, unit: 'submission', period: 'total', scope: 'workspace', reset: 'never', overage: 'blocked', kind: 'limit' }),
  quota({ id: 'forms', metric: 'forms', label: 'Formulaires', amount: 10, unit: 'form', period: 'lifetime', scope: 'workspace', reset: 'never', overage: 'blocked', kind: 'limit' }),
];

OFFER_QUOTAS['formspree'] ??= [
  quota({ id: 'submissions', metric: 'submissions', label: 'Soumissions', amount: 50, unit: 'submission', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' }),
  quota({ id: 'forms', metric: 'forms', label: 'Formulaires', amount: null, unit: 'form', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' }),
];

OFFER_QUOTAS['formsubmit'] ??= [
  quota({ id: 'submissions', metric: 'submissions', label: 'Soumissions gratuites', amount: null, unit: 'submission', period: 'variable', scope: 'account', reset: 'variable', overage: 'unknown', kind: 'not-published', notes: 'FormSubmit ne publie pas de plafond chiffré clair pour son service gratuit.' }),
];

OFFER_QUOTAS['formware'] ??= [
  quota({ id: 'forms', metric: 'forms', label: 'Formulaires', amount: null, unit: 'form', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' }),
  quota({ id: 'responses', metric: 'submissions', label: 'Réponses', amount: null, unit: 'submission', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited', notes: 'Illimité sous réserve des règles de fair use.' }),
];

OFFER_QUOTAS['herotofu'] ??= [
  quota({ id: 'forms', metric: 'forms', label: 'Endpoints de formulaires', amount: null, unit: 'form', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' }),
  quota({ id: 'submissions', metric: 'submissions', label: 'Soumissions', amount: 25, unit: 'submission', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' }),
];

OFFER_QUOTAS['heyform'] ??= [
  quota({ id: 'forms', metric: 'forms', label: 'Formulaires auto-hébergés', amount: null, unit: 'form', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited', notes: 'Illimité côté logiciel auto-hébergé ; dépend de l’infrastructure de l’utilisateur.' }),
  quota({ id: 'submissions', metric: 'submissions', label: 'Soumissions auto-hébergées', amount: null, unit: 'submission', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited', notes: 'Illimité côté logiciel auto-hébergé ; dépend de l’infrastructure de l’utilisateur.' }),
];

OFFER_QUOTAS['jotform'] ??= [
  quota({ id: 'forms', metric: 'forms', label: 'Formulaires', amount: 5, unit: 'form', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' }),
  quota({ id: 'submissions', metric: 'submissions', label: 'Soumissions', amount: 100, unit: 'submission', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' }),
  quota({ id: 'storage', metric: 'storage', label: 'Stockage', amount: 100, unit: 'MB', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' }),
  quota({ id: 'payments', metric: 'payment_submissions', label: 'Soumissions de paiement', amount: 10, unit: 'submission', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' }),
  quota({ id: 'esign', metric: 'signed_documents', label: 'Documents signés', amount: 10, unit: 'document', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' }),
];

OFFER_QUOTAS['kwes'] ??= [
  quota({ id: 'sites', metric: 'sites', label: 'Sites (historique)', amount: 1, unit: 'site', period: 'lifetime', scope: 'account', reset: 'never', overage: 'not-applicable', kind: 'limit', notes: 'Quota historique du Free Tier supprimé.' }),
  quota({ id: 'submissions', metric: 'submissions', label: 'Soumissions mensuelles (historique)', amount: 50, unit: 'submission', period: 'month', scope: 'account', reset: 'monthly', overage: 'not-applicable', kind: 'limit', notes: 'Quota historique du Free Tier supprimé.' }),
];

OFFER_QUOTAS['pageclip'] ??= [
  quota({ id: 'sites', metric: 'sites', label: 'Sites', amount: 1, unit: 'site', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' }),
  quota({ id: 'forms', metric: 'forms', label: 'Formulaires', amount: 1, unit: 'form', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' }),
  quota({ id: 'submissions', metric: 'submissions', label: 'Soumissions', amount: 1000, unit: 'submission', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' }),
];

OFFER_QUOTAS['simplepdf'] ??= [
  quota({ id: 'pdfs', metric: 'pdfs', label: 'PDF (historique)', amount: null, unit: 'pdf', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited', notes: 'Quota historique de l’ancienne offre Embed gratuite.' }),
  quota({ id: 'submissions', metric: 'submissions', label: 'Soumissions par PDF (historique)', amount: 3, unit: 'submission', period: 'lifetime', scope: 'pdf', reset: 'never', overage: 'not-applicable', kind: 'limit', notes: 'Quota historique de l’ancienne offre Embed gratuite.' }),
];

OFFER_QUOTAS['smartforms'] ??= [
  quota({ id: 'submissions', metric: 'submissions', label: 'Soumissions', amount: 50, unit: 'submission', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' }),
  quota({ id: 'bandwidth', metric: 'bandwidth', label: 'Bande passante', amount: 250, unit: 'MB', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' }),
];

OFFER_QUOTAS['staticforms'] ??= [
  quota({ id: 'submissions', metric: 'submissions', label: 'Soumissions', amount: 500, unit: 'submission', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' }),
];

OFFER_QUOTAS['survicate'] ??= [
  quota({ id: 'responses', metric: 'survey_responses', label: 'Réponses', amount: 25, unit: 'response', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' }),
  quota({ id: 'surveys', metric: 'surveys', label: 'Enquêtes actives', amount: null, unit: 'survey', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' }),
];

OFFER_QUOTAS['tally'] ??= [
  quota({ id: 'forms', metric: 'forms', label: 'Formulaires', amount: null, unit: 'form', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' }),
  quota({ id: 'submissions', metric: 'submissions', label: 'Soumissions', amount: null, unit: 'submission', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited', notes: 'Illimité sous réserve des règles de fair use.' }),
];

OFFER_QUOTAS['typeform'] ??= [
  quota({ id: 'responses', metric: 'submissions', label: 'Réponses', amount: 10, unit: 'response', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' }),
];

OFFER_QUOTAS['vidhook'] ??= [
  quota({ id: 'active-surveys', metric: 'surveys', label: 'Enquêtes actives', amount: 1, unit: 'survey', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' }),
  quota({ id: 'responses', metric: 'survey_responses', label: 'Réponses par enquête', amount: 25, unit: 'response', period: 'lifetime', scope: 'survey', reset: 'never', overage: 'blocked', kind: 'limit' }),
];

OFFER_QUOTAS['waiverstevie'] ??= [
  quota({ id: 'signatures', metric: 'signatures', label: 'Signatures du plan gratuit', amount: null, unit: 'signature', period: 'variable', scope: 'account', reset: 'variable', overage: 'unknown', kind: 'not-published', notes: 'La documentation confirme un démarrage gratuit mais ne publie plus un quota actuel fiable.' }),
  quota({ id: 'envelopes', metric: 'envelopes', label: 'Enveloppes du plan gratuit', amount: null, unit: 'envelope', period: 'variable', scope: 'account', reset: 'variable', overage: 'unknown', kind: 'not-published', notes: 'Les limites actuelles ne sont pas publiées clairement.' }),
];

OFFER_QUOTAS['web3forms'] ??= [
  quota({ id: 'forms', metric: 'forms', label: 'Formulaires', amount: null, unit: 'form', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' }),
  quota({ id: 'domains', metric: 'domains', label: 'Domaines', amount: null, unit: 'domain', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' }),
  quota({ id: 'submissions', metric: 'submissions', label: 'Soumissions', amount: 250, unit: 'submission', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' }),
];

OFFER_QUOTAS['wufoo'] ??= [
  quota({ id: 'forms', metric: 'forms', label: 'Formulaires', amount: 5, unit: 'form', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' }),
  quota({ id: 'entries', metric: 'submissions', label: 'Entrées', amount: 100, unit: 'submission', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' }),
  quota({ id: 'fields', metric: 'fields', label: 'Champs par formulaire', amount: 10, unit: 'field', period: 'lifetime', scope: 'form', reset: 'never', overage: 'blocked', kind: 'limit' }),
  quota({ id: 'api', metric: 'api_requests', label: 'Requêtes API', amount: 100, unit: 'request', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' }),
];

OFFER_QUOTAS['formnx'] ??= [
  quota({ id: 'forms', metric: 'forms', label: 'Formulaires', amount: null, unit: 'form', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' }),
  quota({ id: 'submissions', metric: 'submissions', label: 'Soumissions', amount: null, unit: 'submission', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' }),
  quota({ id: 'fields', metric: 'fields', label: 'Champs', amount: null, unit: 'field', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' }),
  quota({ id: 'storage', metric: 'storage', label: 'Stockage', amount: 100, unit: 'MB', period: 'lifetime', scope: 'workspace', reset: 'never', overage: 'blocked', kind: 'limit' }),
];
