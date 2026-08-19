import { OFFER_QUOTAS } from './offer-quotas';

OFFER_QUOTAS['apphost'] ??= [
  { id: 'apps', metric: 'apps', label: 'Applications', amount: 5, unit: 'app', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'downloads', metric: 'downloads', label: 'Téléchargements', amount: 50, unit: 'download', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
  { id: 'file-size', metric: 'file_size', label: 'Taille maximale par fichier', amount: 100, unit: 'MB', period: 'lifetime', scope: 'upload', reset: 'never', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['diawi'] ??= [
  { id: 'file-size', metric: 'file_size', label: 'Taille maximale par app', amount: 50, unit: 'MB', period: 'lifetime', scope: 'app', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'link-age', metric: 'link_retention', label: 'Durée du lien Free', amount: 3, unit: 'day', period: 'total', scope: 'app', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'installs', metric: 'installations', label: 'Installations par app', amount: 10, unit: 'installation', period: 'total', scope: 'app', reset: 'never', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['getupdraft'] ??= [
  { id: 'projects', metric: 'projects', label: 'Projets', amount: 1, unit: 'project', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'builds', metric: 'builds', label: 'Versions / builds', amount: 3, unit: 'build', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'storage', metric: 'storage', label: 'Stockage', amount: 500, unit: 'MB', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'installs', metric: 'installations', label: 'Installations', amount: 100, unit: 'installation', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['installonair'] ??= [
  { id: 'uploads', metric: 'uploads', label: 'Uploads de builds', amount: null, unit: 'upload', period: 'variable', scope: 'account', reset: 'variable', overage: 'not-applicable', kind: 'unlimited' },
  { id: 'guest-retention', metric: 'link_retention', label: 'Durée du lien invité', amount: 2, unit: 'day', period: 'total', scope: 'build', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'account-retention', metric: 'link_retention', label: 'Durée du lien connecté', amount: 8, unit: 'day', period: 'total', scope: 'build', reset: 'never', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['loadly'] ??= [
  { id: 'uploads', metric: 'uploads', label: 'Uploads', amount: null, unit: 'upload', period: 'variable', scope: 'account', reset: 'variable', overage: 'not-applicable', kind: 'unlimited' },
  { id: 'downloads', metric: 'downloads', label: 'Téléchargements', amount: null, unit: 'download', period: 'variable', scope: 'account', reset: 'variable', overage: 'not-applicable', kind: 'unlimited' },
  { id: 'file-size', metric: 'file_size', label: 'Taille maximale par fichier', amount: 2048, unit: 'MB', period: 'lifetime', scope: 'upload', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'link-age', metric: 'link_retention', label: 'Expiration des liens', amount: null, unit: 'day', period: 'variable', scope: 'build', reset: 'variable', overage: 'not-applicable', kind: 'unlimited' },
];

OFFER_QUOTAS['distapp'] ??= [
  { id: 'apps', metric: 'apps', label: 'Applications', amount: 2, unit: 'app', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'orgs', metric: 'organizations', label: 'Organisations', amount: 1, unit: 'organization', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'storage', metric: 'storage', label: 'Stockage', amount: 100, unit: 'MB', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'upload-size', metric: 'file_size', label: 'Taille maximale par upload', amount: 100, unit: 'MB', period: 'lifetime', scope: 'upload', reset: 'never', overage: 'blocked', kind: 'limit' },
];
