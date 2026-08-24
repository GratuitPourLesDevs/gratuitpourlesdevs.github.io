---
nom: Appwrite
accroche: Backend-as-a-Service open source avec authentification, bases de données, stockage, fonctions, Realtime et hébergement applicatif.
type: BaaS
categorie: baas
formule: 'Free : 2 projets, 5 GB de bande passante, 2 GB de stockage et 750 000 exécutions/mois'
inclus:
- 2 projets par organisation Free
- 5 GB de bande passante API par mois
- 2 GB de stockage
- 750 000 exécutions par mois
- 75 000 utilisateurs actifs mensuels
- 1 base, 1 bucket et 2 fonctions par projet
- Sites illimités
- Realtime et authentification
conditions: []
restrictions:
- Les projets Free sont mis en pause après 1 semaine d’inactivité
- 1 seul membre d’organisation
- Les limites Free ne peuvent pas être augmentées par achat d’overage
- Au plafond, le projet gèle jusqu’au cycle suivant ou jusqu’à une mise à niveau
alertes:
- type: operationnel
  niveau: important
  libelle: Pause après 1 semaine
  detail: Contrairement à l’ancienne offre, les projets du plan Free sont désormais mis en pause après une semaine d’inactivité.
usages:
- Backend d’application
- Authentification
- Base de données
- Stockage
- Fonctions serverless
url: https://appwrite.io/
source: https://appwrite.io/pricing
couleur: '#FD366E'
initiales: AW
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 817
verifieLe: 2026-08-24
verificationAutomatiqueLe: 2026-08-24
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
---

Appwrite évite de reconstruire les briques backend classiques d’une application : authentification, base de données, stockage de fichiers, fonctions serverless et temps réel sont disponibles dans un même service et via des SDK cohérents. Le Free Tier reste suffisamment dimensionné pour un prototype sérieux ou une petite application, avec deux projets, 75 000 utilisateurs actifs mensuels, 2 GB de stockage et 750 000 exécutions. Il faut toutefois intégrer deux contraintes dans l’architecture : les projets gratuits sont mis en pause après une semaine d’inactivité et les plafonds ne peuvent pas être dépassés temporairement par de l’overage. Appwrite est donc très pratique pour accélérer un MVP, à condition de surveiller ces limites avant une mise en production régulière.
