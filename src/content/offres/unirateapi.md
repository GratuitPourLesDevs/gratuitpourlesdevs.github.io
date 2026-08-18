---
nom: UniRateAPI
accroche: API de taux de change temps réel pour monnaies fiat, crypto et données TVA
type: API
categorie: api-donnees-ml
formule: "200 requêtes par jour, soit jusqu’à 6 000 par mois"
inclus: [200 requêtes quotidiennes, Jusqu’à 6 000 requêtes mensuelles, Plus de 170 monnaies fiat, Plus de 420 cryptomonnaies, Taux temps réel et conversion, Données de TVA européenne]
conditions: [Compte UniRateAPI gratuit]
restrictions: [Le plan gratuit n’est plus illimité, Pas d’historique sur le Free, Le dépassement de quota renvoie une erreur HTTP 429]
alertes:
  - type: fonctionnel
    niveau: important
    libelle: Ancien quota illimité obsolète
    detail: Le plan gratuit actuel est limité à 200 requêtes par jour et 6 000 par mois ; l’ancienne mention d’appels illimités n’est plus valable.
usages: [API, Données]
url: https://unirateapi.com/
documentation: https://unirateapi.com/docs
source: https://unirateapi.com/pricing
couleur: "#16a34a"
initiales: URA
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 247
verifieLe: 2026-08-18
verificationAutomatiqueLe: 2026-08-18
verificationNote: "La tarification actuelle remplace l’ancien illimité par 200 requêtes/jour et 6 000/mois."
---

UniRateAPI reste utile pour intégrer des taux actuels de nombreuses devises et cryptomonnaies, mais son Free Tier est désormais mesuré et doit être mis en cache pour éviter rapidement les limites journalières.
