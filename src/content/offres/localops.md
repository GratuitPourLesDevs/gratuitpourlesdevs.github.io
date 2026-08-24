---
nom: LocalOps
accroche: Déploiement et exploitation d’applications dans votre propre AWS, GCP ou Azure
type: SaaS
categorie: gestion-cloud
formule: Free Forever pour les 12 premiers vCPU et 24 Go de RAM gérés par LocalOps
inclus:
- 12 vCPU gérés gratuitement
- 24 Go de RAM gérée gratuitement
- Utilisateurs illimités
- Toutes les fonctionnalités de la plateforme
- Déploiement continu intégré
- Observabilité et gestion standardisée des environnements
- Support AWS, GCP et Azure
conditions:
- Fournir son propre compte cloud AWS, GCP ou Azure
- Les ressources cloud consommées sont facturées directement par le fournisseur choisi
restrictions:
- La gratuité LocalOps couvre la gestion jusqu’à 12 vCPU et 24 Go de RAM
- Au-delà du quota gratuit, la gestion LocalOps devient payante
- Le coût des VM, bases, réseau et autres ressources cloud n’est jamais inclus
alertes:
- type: finance
  niveau: important
  libelle: Infrastructure cloud facturée séparément
  detail: Le plan LocalOps peut être gratuit, mais AWS, GCP ou Azure facture les ressources réellement provisionnées dans votre compte.
usages:
- Déploiement cloud
- Gestion d’infrastructure
- Cloud public
- Monitoring
url: https://localops.co/
documentation: https://localops.co/docs
source: https://localops.co/pricing
couleur: '#16A34A'
initiales: LO
carteRequise: false
depassementFacture: true
permanent: true
statut: "active"
vedette: false
ordre: 402
verifieLe: 2026-08-24
verificationAutomatiqueLe: 2026-08-24
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
---

LocalOps se place entre une PaaS et votre propre infrastructure cloud : l’outil standardise les environnements et le déploiement tout en laissant les ressources dans votre compte. Son nouveau Free Tier est bien plus généreux que l’ancienne limite à un utilisateur et un environnement.
