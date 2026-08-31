---
nom: Buddy
accroche: Plateforme CI/CD visuelle pour construire, tester et déployer des applications
type: SaaS
categorie: ci-cd
formule: Free avec 1 siège, 1 exécution concurrente et quotas mensuels de compute
inclus:
- 1 siège
- 1 exécution concurrente
- 300 pipeline GB-minutes par mois
- 1 Go de cache de pipeline
- 300 sandbox CPU-minutes par mois
- 730 sandbox GB-heures
- Pipelines visuels et automatisations de déploiement
conditions:
- Le service démarre par un essai de 14 jours
- Un moyen de paiement est demandé après l’essai pour continuer à utiliser le service selon les conditions actuelles
restrictions:
- Un seul utilisateur sur le plan Free
- Une seule exécution concurrente
- Les quotas sont désormais exprimés en ressources consommées et non en nombre fixe d’exécutions
alertes:
- type: finance
  niveau: important
  libelle: Moyen de paiement après l’essai
  detail: Les conditions actuelles indiquent qu’une carte ou PayPal est nécessaire après la période d’essai pour continuer à utiliser le service.
usages:
- CI/CD
- Automatisation
- Build
- Déploiement
url: https://buddy.works/
documentation: https://buddy.works/docs
source: https://buddy.works/pricing
couleur: '#1A86FD'
initiales: BU
carteRequise: true
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 395
verifieLe: 2026-08-31
verificationAutomatiqueLe: 2026-08-31
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Buddy conserve un plan Free mais son modèle de quotas a changé. La limite principale n’est plus un nombre de projets ou d’exécutions : le service mesure désormais les ressources de pipeline et de sandbox consommées.
