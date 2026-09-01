---
nom: Spacelift
accroche: Gestion collaborative et automatisation d’infrastructure as code
type: SaaS
categorie: gestion-cloud
formule: Free pour petite équipe avec 2 utilisateurs et 1 worker public
inclus:
- 2 utilisateurs
- 1 worker public
- Gestion d’état et exécutions distantes
- Intégration aux dépôts Git
- Support Terraform, OpenTofu, Terragrunt, Pulumi et Kubernetes
- Policy as Code et détection de drift
conditions:
- Utiliser le plan Free
restrictions:
- Le Free est limité à 2 utilisateurs
- Un seul worker public est inclus
- L’ancien quota de 200 minutes mensuelles n’est plus publié sur la tarification actuelle
alertes:
- type: usage
  niveau: important
  libelle: Quota compute non publié
  detail: La grille actuelle confirme 2 utilisateurs et 1 worker public, mais ne republie plus l’ancien plafond de 200 minutes par mois.
usages:
- Infrastructure as Code
- Terraform
- OpenTofu
- GitOps
url: https://spacelift.io/
documentation: https://docs.spacelift.io/
source: https://spacelift.io/pricing
couleur: '#5A3FFF'
initiales: SP
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 408
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Spacelift apporte workflows, politique et collaboration autour de l’IaC. Le plan gratuit existe toujours pour une petite équipe, mais le quota de compute n’est plus chiffré publiquement comme dans les anciennes grilles.
