---
nom: Buildkite
accroche: CI/CD hybride avec agents hébergés ou auto-hébergés et analyse de tests
type: SaaS
categorie: ci-cd
formule: Personal gratuit pour 1 utilisateur avec 500 vCPU-minutes Linux et 50 000 tests par mois
inclus:
- 1 utilisateur
- 3 jobs concurrents
- 500 Linux vCPU-minutes hébergées par mois
- 50 000 exécutions de tests par mois avec Test Engine
- 90 jours de rétention
- 1 Go de stockage et transfert Package Registry
- Agents auto-hébergés et pipelines CI/CD
conditions:
- Utiliser le plan Personal
restrictions:
- Le plan Personal est limité à 1 utilisateur
- Les minutes hébergées gratuites concernent la petite machine Linux AMD64
- Les capacités hébergées plus puissantes nécessitent un plan ou une consommation payante
alertes:
- type: usage
  niveau: important
  libelle: Anciens quotas remplacés
  detail: Le Personal actuel n’est plus à 3 utilisateurs, 5 000 job-minutes et 100 000 tests ; il est limité à 1 utilisateur, 500 vCPU-minutes Linux et 50 000 tests.
usages:
- CI/CD
- Build
- Tests
- Développement et test
url: https://buildkite.com/
documentation: https://buildkite.com/docs
source: https://buildkite.com/pricing/
couleur: '#14CC80'
initiales: BK
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 396
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Buildkite combine orchestration cloud et agents exécutés dans votre infrastructure. Le plan Personal reste gratuit, mais ses quotas sont nettement différents des anciennes grilles souvent reprises dans les listes de Free Tiers.
