---
nom: "Foursquare Places API"
accroche: "API de découverte de lieux, recherche de POI et enrichissement contextuel basée sur la base Foursquare Places."
type: "API"
categorie: cartographie
formule: "Places API : 500 appels Pro gratuits puis tarification à l’usage"
inclus:
- "Place Search"
- "Place Details"
- "Autocomplete"
- "Place Match"
- "Geotagging Candidates"
- "Sandbox de test"
conditions:
- "Compte développeur Foursquare"
restrictions:
- "Le palier gratuit courant des endpoints Pro est limité à 500 appels"
- "Les endpoints Premium ne bénéficient pas de ce même palier gratuit"
- "Au-delà du palier gratuit Pro, la tarification est calculée au CPM"
alertes:
- type: finance
  niveau: critique
  libelle: "Facturation après 500 appels"
  detail: "Depuis le 1er juin 2026, les endpoints Pro passent à une tarification à l’usage après les 500 premiers appels gratuits."
usages: ["API", "Recherche", "Données"]
url: https://developer.foursquare.com/
source: https://foursquare.com/pricing/
couleur: "#F94877"
initiales: "FS"
carteRequise: false
depassementFacture: true
permanent: true
statut: active
vedette: false
ordre: 1097
verifieLe: '2026-08-25'
verificationAutomatiqueLe: '2026-08-25'
verificationNote: "Offre gratuite vérifiée manuellement à partir des pages officielles le 25 août 2026."
---

Foursquare Places API donne accès à une base mondiale de points d’intérêt pour rechercher des établissements, enrichir une adresse ou construire des expériences contextuelles. Le niveau gratuit est désormais beaucoup plus petit qu’auparavant : il faut surveiller les appels Pro et distinguer les endpoints Premium.
