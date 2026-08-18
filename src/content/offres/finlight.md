---
nom: finlight
accroche: API de news financières avec REST et accès gratuit retardé
type: API
categorie: api-donnees-ml
formule: 5 000 requêtes par mois avec articles retardés de 12 heures
inclus: [5 000 requêtes par mois, API REST, Dashboard, Support Discord, Articles accessibles avec un délai de 12 heures]
conditions: [Compte finlight, Aucune carte bancaire requise pour le free tier]
restrictions: [Articles du plan Launchpad retardés de 12 heures, Ticker et résolution d’entités non inclus, Analyse de sentiment non incluse, Webhooks et WebSocket non inclus]
alertes:
  - type: fonctionnel
    niveau: important
    libelle: Enrichissements exclus
    detail: Le plan gratuit n’inclut ni ticker/entités ni analyse de sentiment, contrairement aux fonctions disponibles dans les offres payantes.
usages: [API, Données, Traitement du langage]
url: https://finlight.me/
source: https://finlight.me/pricing
couleur: "#0f766e"
initiales: FL
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 166
verifieLe: 2026-08-18
verificationAutomatiqueLe: 2026-08-18
verificationNote: "Launchpad officiel : 5k requests/mois et 12 h de délai ; ticker/entities, sentiment, webhook et WebSocket non inclus."
---

finlight propose une API de news financières mais son plan Launchpad n’inclut plus plusieurs enrichissements cités dans d’anciennes descriptions. Le quota de 5 000 requêtes reste intéressant, à condition d’accepter le délai de douze heures et l’absence de ticker/sentiment.
