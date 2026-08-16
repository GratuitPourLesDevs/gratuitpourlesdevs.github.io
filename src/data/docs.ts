export interface DocArticle {
  slug: string;
  title: string;
  summary: string;
}

export interface DocGroup {
  id: string;
  title: string;
  icon: string;
  description: string;
  articles: DocArticle[];
}

const article = (slug: string, title: string, summary: string): DocArticle => ({ slug, title, summary });

export const docsGroups: DocGroup[] = [
  {
    id: 'bien-demarrer', title: 'Bien démarrer', icon: '↗', description: 'Les repères essentiels pour trouver et évaluer votre première offre.',
    articles: [
      article('quest-ce-que-gratuitpourlesdevs', "Qu'est-ce que GratuitPourLesDevs ?", 'Le rôle du catalogue, ce qui y entre et ce qui en reste volontairement exclu.'),
      article('comment-utiliser-le-site', 'Comment utiliser le site ?', 'Recherche, filtres, signaux de confiance et raccourcis utiles en quelques minutes.'),
      article('trouver-son-premier-outil-gratuit', 'Trouver son premier outil gratuit', 'Un parcours guidé pour passer de votre besoin à une shortlist exploitable.'),
      article('comprendre-une-fiche-en-2-minutes', 'Comprendre une fiche en 2 minutes', 'Les champs à lire en priorité avant de créer un compte.'),
    ],
  },
  {
    id: 'trouver-une-offre', title: 'Trouver une offre', icon: '⌕', description: 'Combinez recherche, catégories, tags et filtres sans perdre les bons candidats.',
    articles: [
      article('rechercher-dans-le-catalogue', 'Rechercher dans le catalogue', 'Interrogez le nom, la catégorie, les usages et le contenu détaillé des offres.'),
      article('utiliser-les-categories', 'Utiliser les catégories', 'Partez d’une famille d’outils lorsque votre besoin est déjà bien défini.'),
      article('utiliser-les-tags', 'Utiliser les tags', 'Croisez plusieurs usages pour obtenir une sélection réellement adaptée.'),
      article('filtrer-par-modele', 'Filtrer par modèle SaaS / PaaS / IaaS', 'Distinguez le niveau de service et de responsabilité qui vous convient.'),
      article('offres-sans-carte-bancaire', 'Trouver les offres sans carte bancaire', 'Écartez les services qui demandent un moyen de paiement à l’inscription.'),
      article('offres-permanentes', 'Trouver les offres réellement permanentes', 'Séparez les free tiers durables des crédits et essais temporaires.'),
      article('filtrer-date-verification', 'Filtrer selon la date de vérification', 'Favorisez les informations les plus récemment contrôlées.'),
      article('trier-les-resultats', 'Trier les résultats', 'Classez par score, fraîcheur, pertinence, catégorie ou nom.'),
      article('utiliser-les-favoris', 'Utiliser les favoris', 'Conservez une shortlist locale sans créer de compte.'),
    ],
  },
  {
    id: 'comprendre-une-offre', title: 'Comprendre une offre', icon: '▤', description: 'Lisez les quotas, restrictions, sources et changements d’une formule gratuite.',
    articles: [
      article('lire-une-fiche', 'Lire une fiche', 'Le parcours de lecture recommandé pour prendre une décision rapidement.'),
      article('formule-gratuite', 'La formule gratuite', 'Ce qui est réellement inclus dans le plan présenté.'),
      article('conditions', 'Conditions', 'Les prérequis contractuels et techniques à connaître.'),
      article('restrictions', 'Restrictions', 'Les limites d’usage qui peuvent changer votre décision.'),
      article('quotas', 'Quotas', 'Comprenez montant, période, portée, remise à zéro et dépassement.'),
      article('sources-officielles', 'Sources officielles', 'Retrouvez les pages tarifaires et documentations utilisées lors de la vérification.'),
      article('historique-offre', "Historique de l'offre", 'Suivez les changements de quota, de condition et de statut.'),
      article('alternatives', 'Alternatives', 'Rebondissez vers des offres proches lorsque la première ne convient pas.'),
    ],
  },
  {
    id: 'eviter-les-surprises', title: 'Éviter les mauvaises surprises', icon: '!', description: 'Identifiez les chemins de facturation et les faux amis des free tiers.',
    articles: [
      article('risque-de-facturation', 'Comprendre le risque de facturation', 'Le niveau de risque synthétise ce qui peut déclencher un paiement.'),
      article('sans-carte-bancaire', '« Sans carte bancaire » : qu’est-ce que ça signifie ?', 'Ce filtre réduit le risque sans garantir que toutes les ressources sont gratuites.'),
      article('depassement-facture', 'Dépassement facturé', 'Reconnaissez un quota dont le dépassement entraîne une consommation payante.'),
      article('depassement-bloque', 'Dépassement bloqué', 'Comprenez ce qui se passe quand la limite gratuite est atteinte.'),
      article('essai-vs-permanent', 'Essai limité vs formule permanente', 'Ne confondez plus durée promotionnelle et quota renouvelé.'),
      article('pieges-free-tiers', 'Les pièges classiques des free tiers', 'Carte, ressources liées, trafic sortant et renouvellement : les vérifications réflexes.'),
    ],
  },
  {
    id: 'score', title: 'Score GratuitPourLesDevs', icon: '100', description: 'Comprenez la note éditoriale sur 100 et utilisez-la sans surinterprétation.',
    articles: [
      article('a-quoi-sert-le-score', 'À quoi sert le score ?', 'Comparez la qualité pratique des formules gratuites, pas la qualité globale des produits.'),
      article('calcul-du-score', 'Comment est-il calculé ?', 'Les six dimensions, leurs points et les règles qui évitent le double comptage.'),
      article('score-gratuit-permanent', 'Gratuit permanent', 'La durée de la formule représente jusqu’à 25 points.'),
      article('score-carte-bancaire', 'Carte bancaire', 'L’absence de carte représente 20 points.'),
      article('score-utilite-quota', 'Utilité du quota', 'L’utilité réelle du quota est appréciée dans sa catégorie.'),
      article('score-liberte-utilisation', "Liberté d'utilisation", 'La restriction la plus structurante détermine cette composante.'),
      article('score-fraicheur', 'Fraîcheur de la vérification', 'Une information récente est plus utile et mieux valorisée.'),
      article('score-personnel', "Pourquoi 90/100 n'est pas forcément mieux pour moi", 'Votre besoin, votre volume et votre tolérance au risque restent prioritaires.'),
    ],
  },
  {
    id: 'comparer', title: 'Comparer', icon: '⇄', description: 'Placez plusieurs offres côte à côte et partagez votre sélection.',
    articles: [
      article('creer-une-comparaison', 'Créer une comparaison', 'Sélectionnez de deux à quatre offres depuis le catalogue.'),
      article('ajouter-retirer-offre', 'Ajouter / retirer une offre', 'Faites évoluer votre sélection sans perdre le fil de votre recherche.'),
      article('comparer-les-quotas', 'Comparer les quotas', 'Comparez uniquement les montants ayant la même unité, période et portée.'),
      article('comprendre-les-differences', 'Comprendre les différences', 'Repérez rapidement les critères qui changent réellement la décision.'),
      article('partager-une-comparaison', 'Partager une comparaison', 'Créez un lien stable vers votre sélection.'),
      article('comparaisons-publiques', 'Comparaisons publiques', 'Consultez des comparatifs éditoriaux et des sélections partagées.'),
    ],
  },
  {
    id: 'guides-par-besoin', title: 'Guides par besoin', icon: '⌁', description: 'Partez d’un projet concret et composez une stack gratuite cohérente.',
    articles: [
      article('heberger-application-gratuitement', 'Héberger gratuitement une application', 'Choisissez le bon équilibre entre calcul, mise en veille, trafic et simplicité.'),
      article('heberger-site-statique', 'Héberger un site statique', 'Comparez déploiement, bande passante, domaines et fonctions edge.'),
      article('postgresql-gratuit', 'Trouver une base PostgreSQL gratuite', 'Évaluez stockage, compute, mise en veille, sauvegardes et connexions.'),
      article('stockage-objet-gratuit', 'Trouver du stockage objet gratuit', 'Comparez capacité, opérations, trafic sortant et compatibilité S3.'),
      article('ci-cd-gratuite', 'Mettre en place une CI/CD gratuite', 'Choisissez selon les minutes, runners, dépôts privés et caches.'),
      article('monitoring-gratuit', 'Trouver du monitoring gratuit', 'Couvrez disponibilité, métriques, logs et alertes sans facture surprise.'),
      article('heberger-api-gratuitement', 'Héberger une API gratuitement', 'Anticipez cold starts, durée d’exécution, trafic et accès aux données.'),
      article('authentification-gratuite', "Trouver une solution d'authentification", 'Comparez utilisateurs actifs, SSO, MFA et personnalisation.'),
      article('stack-100-gratuite', 'Construire une stack 100 % gratuite', 'Assemblez des services compatibles et identifiez les coûts de jonction.'),
      article('outils-sans-carte', 'Trouver des outils sans carte bancaire', 'Construisez un environnement de test sans moyen de paiement.'),
    ],
  },
  {
    id: 'verifications-archives', title: 'Vérifications & archives', icon: '↻', description: 'Découvrez comment les informations sont contrôlées et conservées.',
    articles: [
      article('verification-des-offres', 'Comment les offres sont vérifiées', 'Sources officielles, contrôle éditorial et vérification automatique.'),
      article('date-derniere-verification', 'Date de dernière vérification', 'Ce que cette date garantit — et ce qu’elle ne garantit pas.'),
      article('pourquoi-une-offre-change', 'Pourquoi une offre peut changer', 'Les fournisseurs font évoluer quotas, conditions et disponibilité.'),
      article('historique-modifications', 'Historique des modifications', 'Lisez le journal des changements conservé sur chaque fiche.'),
      article('offres-archivees', 'Pourquoi certaines offres sont archivées', 'Une offre disparue reste consultable pour préserver le contexte.'),
    ],
  },
  {
    id: 'participer', title: 'Participer', icon: '+', description: 'Aidez à maintenir le catalogue précis, sourcé et utile.',
    articles: [
      article('suggerer-un-outil', 'Suggérer un outil', 'Proposez une formule gratuite encore absente du catalogue.'),
      article('signaler-une-erreur', 'Signaler une erreur', 'Indiquez un quota ou une condition qui a changé.'),
      article('proposer-une-amelioration', 'Proposer une amélioration', 'Partagez une idée pour rendre le produit plus utile.'),
      article('sources-a-fournir', 'Quelles sources fournir ?', 'Privilégiez tarification, documentation et conditions officielles.'),
      article('verification-suggestion', 'Comment une suggestion est vérifiée', 'Le parcours entre votre envoi et la publication dans le catalogue.'),
    ],
  },
  {
    id: 'aide', title: 'Aide', icon: '?', description: 'Définitions, méthode et moyens de contact.',
    articles: [
      article('faq', 'FAQ', 'Les réponses courtes aux questions les plus fréquentes.'),
      article('glossaire', 'Glossaire', 'Free tier, quota, SaaS, PaaS, IaaS et autres termes du catalogue.'),
      article('methodologie', 'Méthodologie', 'Les principes de sélection, de notation, de vérification et d’archivage.'),
      article('contacter', 'Contacter GratuitPourLesDevs', 'Choisissez le bon canal selon votre demande.'),
    ],
  },
];

export const docsArticles = docsGroups.flatMap((group) => group.articles.map((item) => ({ ...item, groupId: group.id, groupTitle: group.title })));
export const getDocArticle = (slug: string) => docsArticles.find((item) => item.slug === slug);
export const getDocIndex = (slug: string) => docsArticles.findIndex((item) => item.slug === slug);
