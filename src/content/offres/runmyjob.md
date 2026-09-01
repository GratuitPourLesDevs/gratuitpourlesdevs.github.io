---
nom: RunMyJob
accroche: Runners GitHub Actions et GitLab CI à mise à l’échelle automatique
type: SaaS
categorie: ci-cd
formule: Free avec 400 vCPU-minutes, 800 GB-minutes mémoire et 10 jobs concurrents
inclus:
- 400 vCPU-minutes par mois
- 800 GB-minutes mémoire par mois
- 10 jobs concurrents
- Jusqu’à 12 vCPU par job
- Jusqu’à 32 Go de RAM par job
- Mise à l’échelle dynamique des runners
conditions:
- Pour GitHub, l’intégration runners nécessite un compte d’organisation
restrictions:
- Le compute au-delà des allocations gratuites est facturé à l’usage
- Les dépôts GitHub personnels ne sont pas compatibles avec l’intégration runners actuelle
alertes:
- type: finance
  niveau: important
  libelle: Dépassement facturé
  detail: Au-delà des 400 vCPU-minutes et 800 GB-minutes mensuels, le compute supplémentaire est facturé selon les tarifs publiés.
usages:
- CI/CD
- Build
- Git
- Développement et test
url: https://runmyjob.io/
documentation: https://runmyjob.io/
source: https://runmyjob.io/
couleur: '#0F172A'
initiales: RM
carteRequise: false
depassementFacture: true
permanent: true
statut: "active"
vedette: false
ordre: 406
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

RunMyJob fournit des runners puissants et élastiques sans changer les workflows GitHub Actions ou GitLab CI. Son Free Tier est chiffré en ressources compute, avec facturation au-delà de l’allocation.
