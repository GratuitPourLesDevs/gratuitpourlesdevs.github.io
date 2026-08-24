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
statut: "active"
vedette: false
ordre: 826
verifieLe: 2026-08-24
verificationAutomatiqueLe: 2026-08-24
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
---

Flightcontrol est pertinent pour un développeur qui veut conserver ses applications et données dans son propre compte AWS tout en évitant de gérer seul le provisioning, les déploiements et une partie de l’infrastructure. En mono-utilisateur sur des dépôts personnels, la couche Flightcontrol est gratuite et ne limite ni le nombre de projets, ni les environnements, ni les déploiements, ce qui permet d’exploiter un workflow proche d’un PaaS tout en restant chez AWS. La gratuité s’arrête cependant à la plateforme : EC2, Fargate, RDS, load balancers, NAT, stockage et trafic sont facturés directement par AWS. C’est donc une excellente option pour simplifier AWS, mais pas une solution d’hébergement à coût nul en elle-même.
