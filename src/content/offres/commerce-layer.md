---
nom: Commerce Layer
accroche: API de commerce composable pour produits, prix, stocks et commandes
type: API
categorie: api-donnees-ml
formule: 100 commandes live/mois, 1 000 SKU, 2 utilisateurs et 2 marchés
inclus:
  - 1 organisation
  - 2 utilisateurs
  - 2 marchés actifs
  - 1 000 SKU
  - 10 links
  - Commandes de test illimitées
  - 100 commandes live gratuites par mois
  - Accès Core API
conditions:
  - Compte Commerce Layer
restrictions:
  - Au-delà du Developer plan il faut passer sur une offre Enterprise
  - Les frais des passerelles de paiement tierces ne sont pas inclus
  - Metrics API et Provisioning API sont réservées à l’Enterprise
alertes:
  - type: finance
    niveau: important
    libelle: Frais de paiement séparés
    detail: Les frais facturés par les passerelles de paiement intégrées à Commerce Layer restent à la charge du projet.
usages:
  - API
  - API et microservices
  - Backend d’application
url: https://commercelayer.io/
documentation: https://docs.commercelayer.io/core
source: https://commercelayer.io/pricing
couleur: "#111111"
initiales: CL
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 136
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Commerce Layer fournit un backend de commerce API-first pour gérer prix, inventaire, commandes et checkout depuis n’importe quel frontend. Son plan Developer est réellement exploitable pour construire et tester un projet, avec commandes de test illimitées et jusqu’à 100 commandes live gratuites chaque mois.
