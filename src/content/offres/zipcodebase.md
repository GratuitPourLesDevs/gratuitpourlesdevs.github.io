---
nom: Zipcodebase
accroche: API mondiale de codes postaux avec recherche, géolocalisation et rayon
type: API
categorie: api-donnees-ml
formule: "5 000 recherches par mois, 1 requête concurrente et rayon maximal de 10 miles"
inclus: [5 000 recherches mensuelles, Données postales mondiales dans plus de 200 pays, Recherche par code postal, Recherche de proximité, HTTPS]
conditions: [Compte Zipcodebase et clé API]
restrictions: [Le plan gratuit est réservé à un usage privé, L’usage commercial nécessite une formule payante, 1 seule requête concurrente, Rayon maximal de 10 miles]
alertes:
  - type: usage
    niveau: critique
    libelle: Usage privé uniquement
    detail: La grille tarifaire réserve explicitement le plan gratuit Zipcodebase aux usages privés ; les usages commerciaux nécessitent un abonnement.
usages: [API, Données]
url: https://zipcodebase.com/
documentation: https://zipcodebase.com/documentation
source: https://zipcodebase.com/pricing-plans
couleur: "#0ea5e9"
initiales: ZB
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 259
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Zipcodebase fournit une base postale mondiale simple à intégrer. Son quota technique est intéressant, mais sa restriction d’usage privé exclut directement les applications commerciales sur le plan gratuit.
