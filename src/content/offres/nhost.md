---
nom: Nhost
accroche: Backend open source autour de PostgreSQL et Hasura avec GraphQL temps réel, authentification, stockage, fonctions et IaC.
type: BaaS
categorie: baas
formule: 'Starter Free : 1 projet actif, 1 GB de base, 1 GB de stockage et 5 GB d’egress'
inclus:
- 1 projet actif à la fois
- 1 GB de base PostgreSQL
- 1 GB de stockage fichiers
- 5 GB d’egress
- 10 fonctions serverless
- 1 GB-heure d’exécution de fonctions
- 10 secondes maximum par fonction
- GraphQL temps réel et Hasura
- Utilisateurs illimités
- OAuth
- Infrastructure as Code
conditions: []
restrictions:
- Le projet gratuit est mis en pause après 1 semaine d’inactivité
- 1 membre de workspace
- 'Les dépassements de limites ne stoppent pas le projet : Nhost indique qu’ils sont facturés'
alertes:
- type: finance
  niveau: critique
  libelle: Dépassement facturé
  detail: 'Nhost indique explicitement qu’un projet n’est pas arrêté au dépassement : l’usage excédentaire est facturé selon son modèle pay-as-you-grow.'
- type: operationnel
  niveau: important
  libelle: Pause après 1 semaine
  detail: Le projet Starter actif est automatiquement mis en pause après une semaine d’inactivité.
usages:
- Backend d’application
- PostgreSQL
- Authentification
- Stockage de fichiers
- API et microservices
url: https://nhost.io/
source: https://nhost.io/pricing
couleur: '#191919'
initiales: NH
carteRequise: false
depassementFacture: true
permanent: true
statut: active
vedette: false
ordre: 847
verifieLe: '2026-08-21'
verificationAutomatiqueLe: '2026-08-21'
verificationNote: 'Starter vérifié : 1 projet actif, 1 GB DB, 1 GB storage, 5 GB egress, 10 functions, utilisateurs illimités. L’overage est explicitement facturé.'
---

Nhost est pertinent si l’on veut un backend proche de Supabase mais construit autour de PostgreSQL et Hasura : GraphQL, auth, fichiers et fonctions sont préassemblés et restent compatibles avec une approche open source. Le Starter donne suffisamment de ressources pour développer une petite application complète avec un vrai schéma relationnel. La gratuité demande néanmoins une discipline d’usage : le projet se met en pause après une semaine d’inactivité et, surtout, Nhost précise qu’un dépassement n’arrête pas le service mais peut être facturé. C’est donc un Free Tier où les alertes de consommation comptent réellement.
