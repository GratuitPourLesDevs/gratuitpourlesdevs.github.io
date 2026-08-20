---
nom: Flightcontrol
accroche: Plateforme de déploiement vers son propre compte AWS avec workflow Git, provisioning et gestion d’infrastructure
  sans surcoût de plateforme en mono-utilisateur.
type: PaaS
categorie: gestion-cloud
formule: 'Single user gratuit : projets, environnements et déploiements illimités ; AWS facturé séparément'
inclus:
- 1 utilisateur
- Dépôts personnels mono-utilisateur
- Projets illimités
- Environnements illimités
- Déploiements illimités
- Support communautaire
- Déploiement ECS/Fargate, EC2, Lambda, S3/CloudFront, RDS et ElastiCache
conditions:
- Le code doit provenir de dépôts personnels pour rester dans les limites du plan gratuit
restrictions:
- Les coûts d’infrastructure AWS sont entièrement à la charge de l’utilisateur
- Les organisations GitHub nécessitent une offre payante après essai
alertes:
- type: finance
  niveau: critique
  libelle: AWS reste payant
  detail: Flightcontrol est gratuit en mono-utilisateur, mais les serveurs, bases, load balancers, NAT et autres ressources sont facturés directement par AWS.
usages:
- Déploiement AWS
- Gestion d’infrastructure
- CI/CD
- Applications cloud
- Git
url: https://flightcontrol.dev/
source: https://www.flightcontrol.dev/pricing
couleur: '#7C3AED'
initiales: FC
carteRequise: false
depassementFacture: true
permanent: true
statut: active
vedette: false
ordre: 826
verifieLe: '2026-08-20'
verificationAutomatiqueLe: '2026-08-20'
verificationNote: Le plan Single user reste à 0 $, autorise les usages hobby et commerciaux sur dépôts personnels et ne limite ni projets, ni environnements, ni déploiements. AWS est séparément facturé.
---

Flightcontrol — Plateforme de déploiement vers son propre compte AWS avec workflow Git, provisioning et gestion d’infrastructure sans surcoût de plateforme en mono-utilisateur.
