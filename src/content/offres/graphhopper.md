---
nom: "GraphHopper"
accroche: "API de routage, optimisation, matrice de distances, géocodage et map matching basée sur un système de crédits."
type: "API"
categorie: cartographie
formule: "Free : 500 crédits par jour, sans carte bancaire"
inclus:
- "500 crédits par jour"
- "Routing API"
- "Optimisation avec 1 véhicule"
- "Geocoding API"
- "Map Matching API"
- "Support communautaire"
conditions:
- "Compte GraphHopper gratuit"
- "Aucune carte bancaire requise"
- "Attribution OpenStreetMap obligatoire"
restrictions:
- "Maximum 5 emplacements par requête sur le plan Free"
- "Les coûts en crédits varient selon l’API"
- "L’usage commercial du plan Free est autorisé en développement ; la production commerciale nécessite une demande à GraphHopper"
alertes:
- type: fonctionnel
  niveau: critique
  libelle: "Production commerciale sur demande"
  detail: "Le plan Free n’est pas librement utilisable en production commerciale : GraphHopper demande de les contacter pour ce cas."
- type: usage
  niveau: important
  libelle: "Coût variable en crédits"
  detail: "Une route simple peut coûter 1 crédit tandis que matrice, isochrone ou certains géocodeurs consomment davantage."
usages: ["API", "Applications web", "Données"]
url: https://www.graphhopper.com/
source: https://www.graphhopper.com/pricing/
couleur: "#5FAE45"
initiales: "GH"
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 1103
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

GraphHopper est particulièrement utile lorsque le besoin va au-delà du simple affichage de carte : itinéraires, matrices, optimisation ou map matching sont disponibles dans le même compte. Les 500 crédits quotidiens suffisent bien au développement, mais la licence du plan Free impose de vérifier le passage en production commerciale.
