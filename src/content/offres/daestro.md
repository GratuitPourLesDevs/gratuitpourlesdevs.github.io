---
nom: Daestro
accroche: Orchestrateur de jobs batch et cron capable d’exécuter du compute chez plusieurs clouds ou sur une infrastructure
  auto-hébergée.
type: PaaS
categorie: paas
formule: 'Free : 10 jobs concurrents, 2 compute spawns, 1 cloud, 1 registry et 1 cron'
inclus:
- 10 exécutions de jobs concurrentes
- 2 compute spawns
- 1 compte de fournisseur cloud
- 1 authentification de registre de conteneurs
- Compute auto-hébergé
- 1 cron job
- 500 MB de logs et métriques
- 1 jour de rétention des logs
conditions: []
restrictions:
- Les ressources cloud utilisées pour exécuter les jobs restent facturées par le fournisseur concerné
- Les quotas de concurrence et d’intégrations supérieurs sont payants
alertes: []
usages:
- Compute
- Tâches planifiées
- Traitement asynchrone
- Multicloud
- Orchestration
url: https://daestro.com/
source: https://daestro.com/pricing
couleur: '#7C3AED'
initiales: DA
carteRequise: false
depassementFacture: true
permanent: true
statut: "active"
vedette: false
ordre: 822
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Daestro est utile quand le besoin n’est pas d’héberger une application en continu, mais d’exécuter et d’orchestrer des traitements batch, des workers ou des tâches planifiées sur différentes ressources de calcul. Le plan gratuit autorise jusqu’à dix jobs simultanés, deux créations de compute, un fournisseur cloud, un registre de conteneurs et un cron, tout en permettant aussi d’utiliser du compute auto-hébergé. Cela suffit pour automatiser des traitements de données, des builds ou des workloads ponctuels sans construire son propre orchestrateur. En revanche, la gratuité concerne Daestro : les machines ou services lancés chez AWS, GCP ou un autre fournisseur restent facturés par ce dernier.
