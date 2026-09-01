---
nom: CodSpeed
accroche: Benchmarks continus et détection des régressions de performance en CI
type: SaaS
categorie: qualite-code
formule: Free avec public illimité, jusqu’à 5 utilisateurs privés et 600 minutes Macro Runners par mois
inclus:
- Utilisateurs illimités sur dépôts publics
- Jusqu’à 5 utilisateurs sur dépôts privés
- Dépôts privés illimités
- Historique de performance sur 3 mois
- Intégration CI et rapports de performance sur PR
- 600 minutes Macro Runners par mois
conditions:
- Compte CodSpeed
restrictions:
- Au-delà des 600 minutes Macro Runners gratuites, l’usage supplémentaire est tarifé
- Le plan privé gratuit est limité à 5 utilisateurs
alertes:
- type: finance
  niveau: critique
  libelle: Macro Runners avec dépassement
  detail: Les 600 minutes mensuelles sont incluses puis l’usage Macro Runners supplémentaire est facturé selon la tarification en vigueur si la facturation est activée.
usages:
- CI/CD
- Tests
- Git
url: https://codspeed.io/
documentation: https://codspeed.io/docs/features/macro-runners
source: https://codspeed.io/docs/features/seats-and-billing
couleur: '#FF6B35'
initiales: CS
carteRequise: false
depassementFacture: true
permanent: true
statut: "active"
vedette: false
ordre: 371
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

CodSpeed mesure les performances de benchmarks dans la CI et signale les régressions sur les pull requests. Le Free couvre aussi les petits projets privés.
