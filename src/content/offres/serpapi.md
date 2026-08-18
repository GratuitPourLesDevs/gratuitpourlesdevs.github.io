---
nom: SerpApi
accroche: API de résultats structurés pour moteurs de recherche, e-commerce et plateformes vidéo
type: API
categorie: recherche
formule: 250 recherches réussies par mois et 50 recherches/heure sur le plan gratuit
inclus:
  - 250 recherches réussies par mois
  - 50 recherches par heure de throughput
  - Résultats JSON structurés
  - Google Bing YouTube Baidu Walmart et autres moteurs
  - Paramètres de localisation et langue selon les moteurs
conditions:
  - Compte SerpApi gratuit
restrictions:
  - Seules les recherches réussies sont décomptées du quota mensuel
  - Le plan Free actuel est à 250 recherches par mois et non 100
alertes:
  - type: fonctionnel
    niveau: important
    libelle: Ancien quota 100 obsolète
    detail: La tarification actuelle affiche 250 recherches gratuites par mois ; les anciennes références à 100 appels ne sont plus à jour.
usages:
  - API
  - Moteur de recherche
  - Données
url: https://serpapi.com/
documentation: https://serpapi.com/search-api
source: https://serpapi.com/pricing
couleur: "#10b981"
initiales: SERP
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 233
verifieLe: 2026-08-18
verificationAutomatiqueLe: 2026-08-18
verificationNote: "La tarification officielle Free actuelle indique 250 recherches/mois et un throughput de 50 recherches/heure."
---

SerpApi normalise les pages de résultats de nombreux moteurs en JSON exploitable par une application. Son quota gratuit convient à du prototypage, des tests de SERP ou une petite collecte ponctuelle.
