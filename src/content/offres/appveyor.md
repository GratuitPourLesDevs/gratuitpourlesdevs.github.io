---
nom: AppVeyor
accroche: CI/CD hébergé avec offre gratuite dédiée aux projets open source
type: SaaS
categorie: ci-cd
formule: Open-source gratuit avec projets publics illimités et 1 job concurrent
inclus:
- Projets publics open source illimités
- 1 job concurrent
- Jusqu’à 5 jobs auto-hébergés
- Builds Windows et Linux
- Configuration YAML, matrices de build et déploiements automatisés
conditions:
- Le projet doit être public et open source pour bénéficier du plan gratuit permanent
restrictions:
- Les projets privés nécessitent un plan payant après l’essai
- Un job de build est limité à 60 minutes
alertes:
- type: fonctionnel
  niveau: important
  libelle: Gratuit réservé à l’open source
  detail: Le plan gratuit permanent concerne les projets publics open source ; les projets privés sont payants après l’essai.
usages:
- CI/CD
- Build
- Déploiement
- Git
url: https://www.appveyor.com/
documentation: https://www.appveyor.com/docs/
source: https://www.appveyor.com/pricing/
couleur: '#00B3E0'
initiales: AV
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 393
verifieLe: 2026-08-24
verificationAutomatiqueLe: 2026-08-24
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
---

AppVeyor reste une option CI/CD intéressante pour les projets open source, notamment dans les environnements Windows. La gratuité permanente est liée au caractère public du projet.
