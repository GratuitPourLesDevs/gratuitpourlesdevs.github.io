---
nom: "LatLng"
accroche: "API de géocodage, reverse geocoding, recherche de lieux, cartes statiques et tuiles vectorielles."
type: "API"
categorie: cartographie
formule: "Free : 3 000 appels API partagés par jour avec sous-limites par service"
inclus:
- "3 000 appels API totaux par jour"
- "3 000 géocodages directs par jour"
- "300 reverse geocodings par jour"
- "100 recherches Places par jour"
- "100 cartes statiques par jour"
- "Tuiles vectorielles et 3 datasets personnalisés"
conditions:
- "Clé API gratuite"
- "Aucune carte bancaire requise"
restrictions:
- "Les appels sont comptabilisés dans un pool quotidien partagé"
- "Maximum 3 datasets, 50 Mo chacun, sur le Free"
- "Créer plusieurs comptes pour contourner les quotas est interdit"
alertes:
- type: usage
  niveau: important
  libelle: "Quota quotidien partagé"
  detail: "La documentation précise que géocodage, reverse, Places et tuiles consomment un pool commun de 3 000 appels par jour, en plus des sous-limites par service."
usages: ["API", "Applications web", "Données"]
url: https://www.latlng.work/
source: https://www.latlng.work/terms
couleur: "#0F766E"
initiales: "LL"
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 1107
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

LatLng rassemble plusieurs besoins géographiques derrière une API simple et un quota quotidien généreux. C’est particulièrement intéressant pour un MVP combinant recherche d’adresses, cartes et POI, à condition de garder en tête que les différents endpoints puisent dans un même quota global.
