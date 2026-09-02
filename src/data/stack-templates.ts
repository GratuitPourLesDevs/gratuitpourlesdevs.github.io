export type StackTemplateService = {
  role: string;
  offerId: string;
  reason: string;
};

export type StackTemplate = {
  slug: string;
  name: string;
  eyebrow: string;
  description: string;
  audience: string;
  category: 'Web' | 'Backend' | 'Mobile' | 'IA' | 'Commerce' | 'Open source' | 'Contraintes';
  featured?: boolean;
  services: StackTemplateService[];
  strengths: string[];
  vigilance: string;
};

export const STACK_TEMPLATES: StackTemplate[] = [
  {
    slug: 'saas',
    name: 'Stack SaaS à 0 €',
    eyebrow: 'PRODUIT WEB COMPLET',
    description: 'Un socle cohérent pour lancer un SaaS : interface, API, données, identité, e-mail, supervision et analytics.',
    audience: 'MVP, produit B2B et petite équipe',
    category: 'Web',
    featured: true,
    services: [
      { role: 'Frontend', offerId: 'vercel', reason: 'Déploiement continu et hébergement du produit web.' },
      { role: 'Backend', offerId: 'cloudflare-workers', reason: 'Fonctions serverless proches des utilisateurs.' },
      { role: 'Base de données', offerId: 'supabase', reason: 'PostgreSQL managé et API pour démarrer vite.' },
      { role: 'Authentification', offerId: 'clerk', reason: 'Gestion des comptes et des sessions.' },
      { role: 'E-mail', offerId: 'resend', reason: 'E-mails transactionnels du produit.' },
      { role: 'Supervision', offerId: 'better-stack-uptime', reason: 'Surveillance de disponibilité et alertes.' },
      { role: 'Analytics', offerId: 'posthog', reason: 'Mesure produit et compréhension des usages.' },
    ],
    strengths: ['Tous les rôles essentiels sont couverts', 'Services remplaçables indépendamment', 'Adaptée à un lancement progressif'],
    vigilance: 'Les quotas gratuits restent propres à chaque fournisseur : surveillez surtout le trafic, les données et les volumes d’e-mails.',
  },
  {
    slug: 'portfolio', name: 'Stack portfolio à 0 €', eyebrow: 'SITE PERSONNEL', category: 'Web',
    description: 'Publier un portfolio rapide avec formulaire, statistiques respectueuses et dépôt de code.', audience: 'Freelance, candidature et vitrine personnelle',
    services: [
      { role: 'Hébergement', offerId: 'cloudflare-pages', reason: 'Déploiement statique mondial.' },
      { role: 'Code source', offerId: 'github', reason: 'Versionnement et publication du projet.' },
      { role: 'Formulaire', offerId: 'formspree', reason: 'Réception des messages sans backend dédié.' },
      { role: 'Analytics', offerId: 'umami', reason: 'Statistiques de fréquentation sobres.' },
    ], strengths: ['Peu de maintenance', 'Architecture simple', 'Coût nul à faible trafic'], vigilance: 'Vérifiez les limites du formulaire et le mode d’hébergement retenu pour les analytics.',
  },
  {
    slug: 'api-nodejs', name: 'Stack API Node.js à 0 €', eyebrow: 'BACKEND', category: 'Backend',
    description: 'Une API Node.js avec PostgreSQL, cache, authentification, erreurs et disponibilité.', audience: 'API métier, prototype et intégration',
    services: [
      { role: 'Runtime', offerId: 'render', reason: 'Exécution et déploiement du service Node.js.' },
      { role: 'Base de données', offerId: 'neon', reason: 'PostgreSQL serverless.' },
      { role: 'Cache', offerId: 'upstash', reason: 'Redis serverless pour cache et limitation.' },
      { role: 'Authentification', offerId: 'clerk', reason: 'Identités et sessions.' },
      { role: 'Erreurs', offerId: 'sentry', reason: 'Suivi des exceptions en production.' },
      { role: 'Supervision', offerId: 'better-stack-uptime', reason: 'Contrôles de disponibilité.' },
    ], strengths: ['Chaîne backend complète', 'Observabilité incluse', 'Composants interchangeables'], vigilance: 'Le runtime et les bases serverless peuvent se mettre en veille ou facturer certains dépassements.',
  },
  {
    slug: 'react-postgresql', name: 'Stack React + PostgreSQL', eyebrow: 'APPLICATION WEB', category: 'Web',
    description: 'Le chemin court entre une interface React et une base PostgreSQL avec auth, e-mail et mesure produit.', audience: 'Dashboard, outil interne et application client',
    services: [
      { role: 'Frontend', offerId: 'vercel', reason: 'Builds et hébergement du frontend React.' },
      { role: 'PostgreSQL', offerId: 'supabase', reason: 'Données relationnelles et API.' },
      { role: 'Authentification', offerId: 'clerk', reason: 'Connexion et gestion des utilisateurs.' },
      { role: 'E-mail', offerId: 'resend', reason: 'Messages transactionnels.' },
      { role: 'Analytics', offerId: 'posthog', reason: 'Analyse des parcours produit.' },
      { role: 'Erreurs', offerId: 'sentry', reason: 'Diagnostic des erreurs frontend.' },
    ], strengths: ['Architecture familière', 'Très bon socle de MVP', 'Données et parcours observables'], vigilance: 'Surveillez le stockage, la bande passante et les volumes d’événements.',
  },
  {
    slug: 'nextjs', name: 'Stack Next.js à 0 €', eyebrow: 'FULL STACK', category: 'Web',
    description: 'Une base Next.js complète pour pages publiques, comptes, données, fichiers et e-mails.', audience: 'SaaS éditorial, annuaire et application full stack',
    services: [
      { role: 'Application', offerId: 'vercel', reason: 'Déploiement natif de Next.js.' },
      { role: 'PostgreSQL', offerId: 'neon', reason: 'Base serverless compatible avec Next.js.' },
      { role: 'Authentification', offerId: 'clerk', reason: 'Comptes et sessions.' },
      { role: 'E-mail', offerId: 'resend', reason: 'Notifications et liens de connexion.' },
      { role: 'Fichiers', offerId: 'cloudflare-r2', reason: 'Stockage objet pour les médias.' },
      { role: 'Erreurs', offerId: 'sentry', reason: 'Suivi des erreurs côté client et serveur.' },
    ], strengths: ['Déploiement rapide', 'Services spécialisés par rôle', 'Convient aux pages SEO et à l’application'], vigilance: 'Le stockage objet et certains usages serverless demandent une attention particulière à la facturation.',
  },
  {
    slug: 'mobile', name: 'Stack mobile à 0 €', eyebrow: 'APPLICATION MOBILE', category: 'Mobile',
    description: 'Backend, notifications, erreurs, analytics et e-mail pour lancer une application mobile.', audience: 'Application iOS, Android ou multiplateforme',
    services: [
      { role: 'Backend', offerId: 'appwrite', reason: 'Données, comptes et fonctions côté serveur.' },
      { role: 'Notifications', offerId: 'onesignal', reason: 'Notifications push.' },
      { role: 'Erreurs', offerId: 'sentry', reason: 'Diagnostic des plantages et erreurs.' },
      { role: 'Analytics', offerId: 'posthog', reason: 'Mesure des parcours utilisateurs.' },
      { role: 'E-mail', offerId: 'mailersend', reason: 'E-mails transactionnels.' },
    ], strengths: ['Fonctions produit essentielles', 'Mesure et diagnostic intégrés', 'Compatible avec plusieurs frontends mobiles'], vigilance: 'Les notifications, événements et utilisateurs actifs sont les principaux quotas à suivre.',
  },
  {
    slug: 'ia', name: 'Stack IA à 0 €', eyebrow: 'PROTOTYPE IA', category: 'IA',
    description: 'Modèles, routage, recherche vectorielle, traces et fonctions edge pour expérimenter proprement.', audience: 'Assistant, RAG et preuve de concept IA',
    services: [
      { role: 'Modèles', offerId: 'hugging-face-inference-providers', reason: 'Accès à des modèles et fournisseurs d’inférence.' },
      { role: 'Routage LLM', offerId: 'openrouter', reason: 'Accès unifié à plusieurs modèles.' },
      { role: 'Vecteurs', offerId: 'qdrant', reason: 'Recherche vectorielle pour le RAG.' },
      { role: 'Observabilité', offerId: 'langfuse', reason: 'Traces et évaluation des appels IA.' },
      { role: 'Backend', offerId: 'cloudflare-workers', reason: 'Orchestration légère à l’edge.' },
    ], strengths: ['Architecture RAG complète', 'Modèles interchangeables', 'Observabilité prévue dès le départ'], vigilance: 'Les crédits IA sont souvent limités, promotionnels ou variables selon le modèle choisi.',
  },
  {
    slug: 'e-commerce', name: 'Stack e-commerce à 0 €', eyebrow: 'CATALOGUE & VENTE', category: 'Commerce',
    description: 'Le socle technique d’un catalogue marchand, hors frais incontournables du prestataire de paiement.', audience: 'Boutique pilote, catalogue et validation marché',
    services: [
      { role: 'Frontend', offerId: 'vercel', reason: 'Vitrine et tunnel de commande.' },
      { role: 'Données', offerId: 'supabase', reason: 'Catalogue, comptes et commandes.' },
      { role: 'Authentification', offerId: 'clerk', reason: 'Comptes clients.' },
      { role: 'E-mail', offerId: 'resend', reason: 'Confirmations et notifications.' },
      { role: 'Analytics', offerId: 'posthog', reason: 'Analyse des conversions.' },
      { role: 'Erreurs', offerId: 'sentry', reason: 'Surveillance du parcours d’achat.' },
    ], strengths: ['Parcours mesurable', 'Composants techniques gratuits', 'Bonne base de validation'], vigilance: 'Une stack technique à 0 € ne supprime ni les commissions de paiement ni les coûts liés à la croissance.',
  },
  {
    slug: 'open-source', name: 'Stack projet open source', eyebrow: 'MAINTENANCE PUBLIQUE', category: 'Open source',
    description: 'Dépôt, automatisation, qualité, documentation, erreurs et démo publique pour un projet ouvert.', audience: 'Bibliothèque, CLI et projet communautaire',
    services: [
      { role: 'Code source', offerId: 'github', reason: 'Dépôt, issues et contributions.' },
      { role: 'CI/CD', offerId: 'github-actions', reason: 'Tests et automatisations.' },
      { role: 'Couverture', offerId: 'codecov', reason: 'Suivi de la couverture des tests.' },
      { role: 'Documentation', offerId: 'read-the-docs', reason: 'Publication de la documentation.' },
      { role: 'Erreurs', offerId: 'sentry', reason: 'Remontée d’erreurs des applications.' },
      { role: 'Démo', offerId: 'netlify', reason: 'Hébergement d’une démo ou d’un site.' },
    ], strengths: ['Flux contributeur complet', 'Documentation et qualité visibles', 'Adaptée aux projets publics'], vigilance: 'Les conditions gratuites peuvent différer entre projet public, privé et organisation.',
  },
  {
    slug: 'sans-carte', name: 'Stack sans carte bancaire', eyebrow: 'ZÉRO CARTE', category: 'Contraintes',
    description: 'Une sélection de services dont les fiches indiquent qu’aucune carte bancaire n’est requise.', audience: 'Test, enseignement et prototype sans moyen de paiement',
    services: [
      { role: 'Frontend', offerId: 'vercel', reason: 'Déploiement web sans carte signalée.' },
      { role: 'Hébergement', offerId: 'cloudflare-pages', reason: 'Sites statiques et déploiements.' },
      { role: 'Données', offerId: 'supabase', reason: 'Base et API pour un prototype.' },
      { role: 'E-mail', offerId: 'resend', reason: 'Envoi transactionnel limité.' },
      { role: 'CI/CD', offerId: 'github-actions', reason: 'Automatisation du dépôt.' },
      { role: 'Analytics', offerId: 'umami', reason: 'Mesure d’audience.' },
    ], strengths: ['Pas de carte selon les fiches vérifiées', 'Risque d’activation payante réduit', 'Bon point de départ pédagogique'], vigilance: 'Sans carte ne signifie pas sans limite : un blocage au plafond ou une suspension reste possible.',
  },
  {
    slug: 'europe', name: 'Stack hébergée en Europe', eyebrow: 'ANCRAGE EUROPÉEN', category: 'Contraintes',
    description: 'Une base privilégiant des fournisseurs européens pour l’hébergement, l’e-mail et le DNS.', audience: 'Projet attentif à la localisation et aux fournisseurs européens',
    services: [
      { role: 'Hébergement', offerId: 'alwaysdata', reason: 'Hébergeur français polyvalent.' },
      { role: 'Application', offerId: 'koyeb', reason: 'Plateforme cloud fondée en France.' },
      { role: 'E-mail marketing', offerId: 'brevo', reason: 'Plateforme française d’e-mail.' },
      { role: 'E-mail transactionnel', offerId: 'mailjet', reason: 'Envoi d’e-mails par un acteur européen.' },
      { role: 'DNS', offerId: 'hetzner-dns', reason: 'Gestion DNS chez un fournisseur allemand.' },
      { role: 'Cloud', offerId: 'infomaniak-public-cloud', reason: 'Infrastructure d’un fournisseur suisse.' },
    ], strengths: ['Fournisseurs européens identifiables', 'Plusieurs briques d’infrastructure couvertes', 'Base utile pour une revue de conformité'], vigilance: 'L’origine du fournisseur ne garantit pas à elle seule la localisation de chaque donnée : contrôlez les régions et contrats.',
  },
];

export const getStackTemplate = (slug: string) => STACK_TEMPLATES.find((template) => template.slug === slug);
