import { OFFER_QUOTAS } from './offer-quotas';

OFFER_QUOTAS.bitbucket ??= [
  { id: 'repositories', metric: 'repositories', label: 'Dépôts publics et privés', amount: null, unit: 'repository', period: 'lifetime', scope: 'workspace', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' },
  { id: 'users', metric: 'users', label: 'Utilisateurs', amount: 5, unit: 'user', period: 'lifetime', scope: 'workspace', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'pipelines', metric: 'build_time', label: 'Bitbucket Pipelines', amount: 50, unit: 'minute', period: 'month', scope: 'workspace', reset: 'monthly', overage: 'blocked', kind: 'limit', notes: 'Des minutes supplémentaires peuvent être achetées si une facturation est volontairement configurée.' },
  { id: 'lfs', metric: 'storage', label: 'Stockage Git LFS', amount: 1, unit: 'GB', period: 'lifetime', scope: 'workspace', reset: 'never', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS.codeberg ??= [
  { id: 'repositories', metric: 'repositories', label: 'Dépôts par défaut', amount: 100, unit: 'repository', period: 'lifetime', scope: 'account', reset: 'never', overage: 'degraded', kind: 'limit', notes: 'Une augmentation peut être demandée pour un usage FOSS légitime.' },
  { id: 'git-storage', metric: 'storage', label: 'Stockage Git avant demande de ressources', amount: 750, unit: 'MB', period: 'lifetime', scope: 'account', reset: 'never', overage: 'degraded', kind: 'limit', notes: 'Ce seuil déclenche une demande préalable de ressources plutôt qu’une facturation.' },
  { id: 'aux-storage', metric: 'package_storage', label: 'Paquets, LFS et pièces jointes avant demande', amount: 1.5, unit: 'GB', period: 'lifetime', scope: 'account', reset: 'never', overage: 'degraded', kind: 'limit' },
  { id: 'ci', metric: 'build_time', label: 'Codeberg CI hébergé', amount: null, unit: 'minute', period: 'variable', scope: 'project', reset: 'variable', overage: 'unknown', kind: 'not-published', notes: 'Activation sur demande et ressources raisonnables ; aucun quota chiffré garanti n’est publié.' },
];

OFFER_QUOTAS.framagit ??= [
  { id: 'projects', metric: 'projects', label: 'Projets', amount: 42, unit: 'project', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'ci', metric: 'build_time', label: 'GitLab CI', amount: null, unit: 'minute', period: 'variable', scope: 'account', reset: 'variable', overage: 'unknown', kind: 'not-published', notes: 'Le service CI est partagé et aucun quota commercial chiffré n’est publié.' },
];

OFFER_QUOTAS.gitgud ??= [
  { id: 'storage', metric: 'storage', label: 'Stockage de projet pour le code', amount: null, unit: 'GB', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited', notes: 'Réservé aux fichiers utiles au code et au développement ; stockage généraliste, CDN et abus interdits.' },
  { id: 'ci', metric: 'build_time', label: 'CI/CD partagé', amount: null, unit: 'minute', period: 'variable', scope: 'account', reset: 'variable', overage: 'unknown', kind: 'not-published', notes: 'Accès gratuit après demande ; aucun quota chiffré actuel publié.' },
];

OFFER_QUOTAS.github ??= [
  { id: 'repositories', metric: 'repositories', label: 'Dépôts publics et privés', amount: null, unit: 'repository', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' },
  { id: 'collaborators', metric: 'users', label: 'Collaborateurs', amount: null, unit: 'user', period: 'lifetime', scope: 'repository', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' },
  { id: 'actions', metric: 'build_time', label: 'GitHub Actions sur dépôts privés', amount: 2_000, unit: 'minute', period: 'month', scope: 'account', reset: 'monthly', overage: 'billed', kind: 'limit', notes: 'La facturation au-delà du quota dépend de la configuration d’un moyen de paiement et de budgets.' },
  { id: 'packages', metric: 'storage', label: 'GitHub Packages privé', amount: 500, unit: 'MB', period: 'lifetime', scope: 'account', reset: 'never', overage: 'billed', kind: 'limit' },
  { id: 'codespaces-compute', metric: 'compute_time', label: 'Codespaces core-hours', amount: 120, unit: 'core-hour', period: 'month', scope: 'user', reset: 'monthly', overage: 'billed', kind: 'limit' },
  { id: 'codespaces-storage', metric: 'codespace_storage', label: 'Stockage Codespaces', amount: 15, unit: 'GB', period: 'month', scope: 'user', reset: 'monthly', overage: 'billed', kind: 'limit' },
  { id: 'copilot-completions', metric: 'ai_completions', label: 'Complétions Copilot Free', amount: 2_000, unit: 'completion', period: 'month', scope: 'user', reset: 'monthly', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['gitlab-com'] ??= [
  { id: 'users', metric: 'users', label: 'Utilisateurs sur namespace privé', amount: 5, unit: 'user', period: 'lifetime', scope: 'namespace', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'compute', metric: 'build_time', label: 'Minutes de calcul CI/CD', amount: 400, unit: 'minute', period: 'month', scope: 'namespace', reset: 'monthly', overage: 'blocked', kind: 'limit' },
  { id: 'storage', metric: 'storage', label: 'Stockage par projet', amount: 10, unit: 'GB', period: 'lifetime', scope: 'project', reset: 'never', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['heptapod-foss'] ??= [
  { id: 'repositories', metric: 'repositories', label: 'Dépôts Git ou Mercurial FOSS publics', amount: null, unit: 'repository', period: 'lifetime', scope: 'project', reset: 'not-applicable', overage: 'unknown', kind: 'not-published', notes: 'Hébergement gratuit réservé aux projets FOSS publics ; aucun plafond chiffré publié.' },
  { id: 'ci', metric: 'build_time', label: 'Runners CI/CD', amount: null, unit: 'minute', period: 'variable', scope: 'project', reset: 'variable', overage: 'unknown', kind: 'not-published' },
];

OFFER_QUOTAS['pijul-nest'] ??= [
  { id: 'repositories', metric: 'repositories', label: 'Dépôts Pijul hébergés', amount: null, unit: 'repository', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'unknown', kind: 'not-published', notes: 'The Nest est présenté comme un hébergement gratuit mais aucun quota actuel n’est publié.' },
];

OFFER_QUOTAS.rocketgit ??= [
  { id: 'repositories', metric: 'repositories', label: 'Dépôts publics et privés', amount: null, unit: 'repository', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' },
];

OFFER_QUOTAS['savannah-gnu'] ??= [
  { id: 'repositories', metric: 'repositories', label: 'Dépôts pour projets GNU approuvés', amount: null, unit: 'repository', period: 'lifetime', scope: 'project', reset: 'not-applicable', overage: 'unknown', kind: 'not-published', notes: 'Projet soumis à approbation et aux critères de logiciel libre de Savannah.' },
];

OFFER_QUOTAS['savannah-nongnu'] ??= [
  { id: 'repositories', metric: 'repositories', label: 'Dépôts pour projets libres approuvés', amount: null, unit: 'repository', period: 'lifetime', scope: 'project', reset: 'not-applicable', overage: 'unknown', kind: 'not-published', notes: 'Projet soumis à approbation et aux critères de logiciel libre de Savannah.' },
];
