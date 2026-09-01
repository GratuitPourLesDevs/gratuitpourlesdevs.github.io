---
nom: Convex
accroche: Backend réactif managé avec base documentaire transactionnelle, fonctions serverless, auth, recherche et synchronisation temps réel.
type: BaaS
categorie: baas
formule: 'Free : 1 M d’appels de fonctions/mois, 0,5 GB de base et jusqu’à 6 développeurs'
inclus:
- 1 à 6 développeurs
- 40 déploiements par équipe
- 0,5 GB de base de données
- 1 GB d’I/O base par mois
- 1 000 000 appels de fonctions par mois
- 20 GB-heures d’actions par mois
- 1 GB de fichiers
- 1 GB d’egress fichiers par mois
- 0,5 GB de stockage recherche
conditions: []
restrictions:
- Le Free applique des plafonds de ressources durs
- Après dépassement prolongé, les nouvelles mutations ou opérations peuvent échouer
- Les domaines personnalisés et fonctions d’entreprise sont réservés aux plans supérieurs
alertes:
- type: usage
  niveau: important
  libelle: Plafonds Free stricts
  detail: 'Convex distingue le Free du Starter par des plafonds durs : une fois les limites atteintes, certaines mutations ou opérations peuvent échouer.'
usages:
- Backend d’application
- Base de données
- Serverless
- Recherche vectorielle
- Architecture événementielle
url: https://www.convex.dev/
source: https://docs.convex.dev/production/state/limits
couleur: '#EE342F'
initiales: CV
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 840
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Convex est particulièrement utile pour les interfaces qui doivent se mettre à jour en temps réel : la base, les fonctions et les abonnements réactifs sont conçus comme un ensemble cohérent. Un million d’appels de fonctions par mois suffit à faire tourner un prototype sérieux ou une petite application, tout en profitant de transactions ACID et de la recherche intégrée. Le modèle évite beaucoup de plomberie entre base, API et WebSockets. La limite à connaître est la taille du Free Tier : 0,5 GB de base et des plafonds durs signifient qu’une application qui grossit doit être surveillée avant de toucher les limites.
