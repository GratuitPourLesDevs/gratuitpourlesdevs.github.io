---
nom: CircleCI
accroche: CI/CD hébergé multi-plateforme avec Docker, Linux, Windows, macOS, Arm et runners privés
type: SaaS
categorie: ci-cd
formule: Free avec 30 000 crédits par mois, jusqu’à 5 utilisateurs actifs et 30 jobs concurrents
inclus:
- 30 000 crédits par mois
- Jusqu’à 6 000 minutes équivalentes avec une petite classe Docker
- Jusqu’à 5 utilisateurs actifs inclus
- 30 jobs concurrents
- Exécuteurs Docker, Linux, Windows, macOS et Arm
- Runners auto-hébergés
- Offre open source pouvant atteindre 400 000 crédits par mois
conditions:
- Utiliser le plan Free
- L’allocation open source renforcée est soumise à l’éligibilité CircleCI
restrictions:
- La consommation en minutes varie selon la classe de ressources utilisée
- Les builds sont bloqués lorsque les crédits gratuits sont épuisés
- Certaines fonctionnalités et classes de ressources consomment plus rapidement les crédits
alertes:
- type: usage
  niveau: important
  libelle: 6 000 minutes = équivalence
  detail: Les 6 000 minutes correspondent à une petite classe Docker ; CircleCI facture l’usage interne en crédits selon le type de ressource.
usages:
- CI/CD
- Build
- Tests
- Développement et test
url: https://circleci.com/
documentation: https://circleci.com/docs/
source: https://circleci.com/pricing/
couleur: '#343434'
initiales: CI
carteRequise: false
depassementFacture: false
permanent: true
statut: active
vedette: false
ordre: 398
verifieLe: '2026-08-18'
verificationAutomatiqueLe: '2026-08-18'
verificationNote: Le Free actuel est basé sur 30k crédits/mois, 5 utilisateurs actifs et 30 concurrences ; l’open source peut obtenir jusqu’à 400k crédits/mois.
---

CircleCI propose toujours un Free Tier complet, mais la métrique fiable est désormais le crédit. Les « minutes gratuites » dépendent donc du type de machine réellement choisi.
