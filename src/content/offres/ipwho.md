---
nom: IPWho
accroche: API de géolocalisation IP avec données réseau et localisation
type: API
categorie: api-donnees-ml
formule: 2 000 requêtes gratuites par jour
inclus:
  - 2 000 requêtes par jour
  - Géolocalisation IP
  - Informations réseau et ASN selon réponse
  - Aucun moyen de paiement requis
conditions:
  - Usage non commercial sur le plan Free
restrictions:
  - Quota journalier bloquant à 2 000 requêtes
  - Usage commercial exclu du plan gratuit
  - Pas de SLA ni support dédié sur Free
alertes:
  - type: usage
    niveau: critique
    libelle: Usage commercial exclu
    detail: Le plan gratuit IPWho est réservé aux usages non commerciaux.
usages: [API, Données]
url: https://ipwho.org/
source: https://ipwho.org/pricing
couleur: "#2563eb"
initiales: IW
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 180
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

IPWho fournit une API simple de géolocalisation IP avec un quota quotidien confortable pour un prototype ou service personnel. La restriction non commerciale doit toutefois être prise en compte avant toute intégration en production.
