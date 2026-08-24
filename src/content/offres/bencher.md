---
nom: Bencher
accroche: Benchmarking continu pour détecter les régressions de performance dans la CI
type: SaaS
categorie: tests
formule: Free pour les projets publics avec 1 job bare-metal concurrent et 65 535 métriques par jour
inclus:
- Projets publics gratuits
- 65 535 métriques par jour
- 1 job bare-metal concurrent
- Runners à la demande
- Intégration aux pipelines CI
conditions:
- Projet public pour le service cloud gratuit
restrictions:
- 5 minutes maximum par job bare-metal gratuit
- Les projets privés nécessitent une offre payante
- Les runners gratuits utilisent la file standard
alertes:
- type: fonctionnel
  niveau: important
  libelle: Projets publics uniquement
  detail: Le plan cloud Free s’applique aux projets publics ; les projets privés sont payants.
usages:
- Tests
- CI/CD
- Monitoring
url: https://bencher.dev/
documentation: https://bencher.dev/docs/
source: https://bencher.dev/pricing
couleur: '#F97316'
initiales: BE
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 415
verifieLe: 2026-08-24
verificationAutomatiqueLe: 2026-08-24
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
---

Bencher ajoute une couche de suivi de performance aux tests afin de repérer les ralentissements avant leur mise en production. Le projet est aussi disponible en open source pour l’auto-hébergement.
