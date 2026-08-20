import { OFFER_QUOTAS } from './offer-quotas';

OFFER_QUOTAS.appinvento ??= [
  { id: 'projects', metric: 'projects', label: 'Projets', amount: 3, unit: 'project', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'tables', metric: 'tables', label: 'Tables', amount: 5, unit: 'table', period: 'lifetime', scope: 'project', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'apis', metric: 'apis', label: 'API générées', amount: null, unit: 'api', period: 'lifetime', scope: 'project', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' },
  { id: 'routes', metric: 'routes', label: 'Routes', amount: null, unit: 'route', period: 'lifetime', scope: 'project', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' },
  { id: 'addons', metric: 'addons', label: 'Addon inclus', amount: 1, unit: 'addon', period: 'lifetime', scope: 'project', reset: 'never', overage: 'blocked', kind: 'limit', notes: 'La grille Free mentionne Google comme addon inclus.' },
];

OFFER_QUOTAS.dhiwise ??= [
  { id: 'previews', metric: 'previews', label: 'Prévisualisations gratuites', amount: null, unit: 'preview', period: 'variable', scope: 'account', reset: 'variable', overage: 'unknown', kind: 'not-published', notes: 'DhiWise confirme la prévisualisation gratuite mais ne publie pas de quota chiffré.' },
  { id: 'code-review', metric: 'code_access', label: 'Consultation du code', amount: null, unit: 'project', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'unmetered' },
  { id: 'source-downloads', metric: 'downloads', label: 'Téléchargements du code source', amount: 0, unit: 'download', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit', notes: 'Le téléchargement et la synchronisation Git sont réservés aux plans payants.' },
];

OFFER_QUOTAS['karbon-sites'] ??= [
  { id: 'generations', metric: 'generations', label: 'Générations gratuites', amount: null, unit: 'generation', period: 'month', scope: 'account', reset: 'monthly', overage: 'unknown', kind: 'not-published', notes: 'Une offre gratuite est présentée par l’éditeur, mais le quota chiffré n’est pas exploitable sur la page tarifaire publique vérifiée.' },
];

OFFER_QUOTAS.metalama ??= [
  { id: 'open-source', metric: 'usage', label: 'Framework open source MIT', amount: null, unit: 'project', period: 'lifetime', scope: 'project', reset: 'not-applicable', overage: 'not-applicable', kind: 'unmetered' },
  { id: 'community-users', metric: 'users', label: 'Utilisateurs Community en entreprise', amount: 3, unit: 'user', period: 'lifetime', scope: 'organization', reset: 'never', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS.supermaven ??= [
  { id: 'suggestions', metric: 'suggestions', label: 'Autocomplétion gratuite pour utilisateurs existants', amount: null, unit: 'suggestion', period: 'variable', scope: 'account', reset: 'variable', overage: 'unknown', kind: 'not-published', notes: 'Supermaven est en cours d’arrêt depuis l’annonce du 21 novembre 2025. L’éditeur maintient gratuitement l’autocomplétion pour les utilisateurs existants dans un avenir prévisible, sans publier de quota numérique ni garantir l’accès aux nouveaux comptes.' },
];

OFFER_QUOTAS.v0 ??= [
  { id: 'credits', metric: 'credits', label: 'Crédits mensuels', amount: 5, unit: 'USD', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'credit' },
  { id: 'messages', metric: 'messages', label: 'Messages', amount: 7, unit: 'message', period: 'day', scope: 'account', reset: 'daily', overage: 'blocked', kind: 'limit' },
];
