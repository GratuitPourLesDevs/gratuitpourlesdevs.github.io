import { OFFER_QUOTAS } from './offer-quotas';

OFFER_QUOTAS.befonts ??= [{
  id: 'catalogue',
  metric: 'font_catalogue',
  label: 'Catalogue et téléchargements gratuits',
  amount: null,
  unit: 'font',
  period: 'lifetime',
  scope: 'service',
  reset: 'not-applicable',
  overage: 'not-applicable',
  kind: 'unmetered',
  notes: 'L’accès est gratuit mais les droits d’utilisation dépendent de la licence de chaque police.',
}];

OFFER_QUOTAS['bunny-fonts'] ??= [{
  id: 'font-delivery',
  metric: 'font_delivery',
  label: 'Distribution de polices open source',
  amount: null,
  unit: 'request',
  period: 'lifetime',
  scope: 'service',
  reset: 'not-applicable',
  overage: 'not-applicable',
  kind: 'unmetered',
  notes: 'Service gratuit sans quota public de consommation annoncé ; les familles sont open source.',
}];

OFFER_QUOTAS.dafont ??= [{
  id: 'catalogue',
  metric: 'font_catalogue',
  label: 'Catalogue téléchargeable',
  amount: null,
  unit: 'font',
  period: 'lifetime',
  scope: 'service',
  reset: 'not-applicable',
  overage: 'not-applicable',
  kind: 'unmetered',
  notes: 'La licence varie selon la police et doit être vérifiée auprès de l’auteur.',
}];

OFFER_QUOTAS['everything-fonts'] ??= [{
  id: 'guest-file-size',
  metric: 'file_size',
  label: 'Taille de fichier pour visiteur non inscrit',
  amount: 0.4,
  unit: 'MB',
  period: 'total',
  scope: 'file',
  reset: 'never',
  overage: 'blocked',
  kind: 'limit',
  notes: 'Limite affichée sur le générateur @font-face ; d’autres outils ou niveaux de compte peuvent avoir des plafonds différents.',
}];

OFFER_QUOTAS['font-of-web'] ??= [{
  id: 'historical-service',
  metric: 'font_analysis',
  label: 'Service historique d’identification',
  amount: null,
  unit: 'analysis',
  period: 'variable',
  scope: 'service',
  reset: 'variable',
  overage: 'unknown',
  kind: 'not-published',
  notes: 'Le service d’origine n’est plus disponible ; le domaine redirige désormais vers Fudge.',
}];

OFFER_QUOTAS['font-squirrel'] ??= [{
  id: 'catalogue',
  metric: 'font_catalogue',
  label: 'Catalogue de polices commerciales gratuites',
  amount: null,
  unit: 'font',
  period: 'lifetime',
  scope: 'service',
  reset: 'not-applicable',
  overage: 'not-applicable',
  kind: 'unmetered',
  notes: 'Les licences restent propres à chaque police malgré la sélection orientée usage commercial.',
}];

OFFER_QUOTAS.fontget ??= [{
  id: 'downloads',
  metric: 'font_downloads',
  label: 'Téléchargements de polices',
  amount: null,
  unit: 'download',
  period: 'lifetime',
  scope: 'service',
  reset: 'not-applicable',
  overage: 'not-applicable',
  kind: 'unmetered',
  notes: 'Les téléchargements sont gratuits ; certaines polices nécessitent une licence séparée pour l’usage commercial.',
}];

OFFER_QUOTAS['fonts-xz-style'] ??= [{
  id: 'font-delivery',
  metric: 'font_delivery',
  label: 'Distribution de polices open source',
  amount: null,
  unit: 'request',
  period: 'lifetime',
  scope: 'service',
  reset: 'not-applicable',
  overage: 'not-applicable',
  kind: 'unmetered',
  notes: 'Service gratuit de distribution CSS ; migration du CDN vers bunny.net en cours.',
}];

OFFER_QUOTAS.fontsensei ??= [{
  id: 'picker',
  metric: 'font_catalogue',
  label: 'Sélecteur Google Fonts par tags',
  amount: null,
  unit: 'font',
  period: 'lifetime',
  scope: 'service',
  reset: 'not-applicable',
  overage: 'not-applicable',
  kind: 'unmetered',
  notes: 'Accès public au sélecteur et aux catégories de tags, notamment CJK.',
}];

OFFER_QUOTAS.fontshare ??= [{
  id: 'catalogue',
  metric: 'font_catalogue',
  label: 'Catalogue gratuit personnel et commercial',
  amount: null,
  unit: 'font',
  period: 'lifetime',
  scope: 'service',
  reset: 'not-applicable',
  overage: 'not-applicable',
  kind: 'unmetered',
  notes: 'Fontshare annonce toutes ses polices comme gratuites pour les usages personnels et commerciaux, sous les licences applicables.',
}];

OFFER_QUOTAS['google-fonts'] ??= [{
  id: 'font-catalogue',
  metric: 'font_catalogue',
  label: 'Catalogue de polices open source',
  amount: null,
  unit: 'font',
  period: 'lifetime',
  scope: 'service',
  reset: 'not-applicable',
  overage: 'not-applicable',
  kind: 'unmetered',
  notes: 'Les familles sont sous licences open source et peuvent être utilisées dans des projets personnels ou commerciaux.',
}, {
  id: 'css-delivery',
  metric: 'font_delivery',
  label: 'Chargement via l’API CSS',
  amount: null,
  unit: 'request',
  period: 'lifetime',
  scope: 'service',
  reset: 'not-applicable',
  overage: 'not-applicable',
  kind: 'unmetered',
  notes: 'La documentation publique ne présente pas de quota de facturation pour le chargement CSS des polices.',
}];
