---
nom: ipgeolocation.io
accroche: API de géolocalisation IP et données réseau pour applications web et backend
type: API
categorie: api-donnees-ml
formule: 1 000 requêtes gratuites par jour
inclus:
  - 1 000 requêtes par jour
  - HTTPS sur le plan Free
  - Géolocalisation IP
  - Informations de fuseau et réseau selon endpoint
conditions:
  - Compte gratuit
  - Usage non commercial sur le Free Plan
restrictions:
  - Limite dure de 1 000 requêtes par jour
  - Usage commercial exclu du plan gratuit
alertes:
  - type: usage
    niveau: critique
    libelle: Usage commercial exclu
    detail: Les conditions officielles réservent le plan Free aux usages non commerciaux.
usages: [API, Données]
url: https://ipgeolocation.io/
documentation: https://ipgeolocation.io/documentation.html
source: https://ipgeolocation.io/pricing.html
couleur: "#2b6cb0"
initiales: IGEO
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 181
verifieLe: 2026-08-31
verificationAutomatiqueLe: 2026-08-31
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

ipgeolocation.io expose des données de localisation et réseau à partir d’une adresse IP. Le quota quotidien est exploitable pour de petits projets, mais le plan gratuit n’est pas destiné à une utilisation commerciale.
