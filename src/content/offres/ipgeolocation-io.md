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
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

ipgeolocation.io est utile pour adapter un prototype au pays ou au fuseau horaire d’un visiteur, enrichir un journal de sécurité ou vérifier la provenance approximative d’une connexion sans maintenir sa propre base IP. Le plan gratuit fournit 1 000 requêtes quotidiennes et les principales données de localisation et de réseau, sans carte bancaire : il suffit donc pour une démonstration, un outil interne ou un projet personnel à trafic modéré. Il faut en revanche choisir une autre formule avant toute mise en production commerciale, et surveiller la consommation des modules qui utilisent plusieurs crédits par appel.
