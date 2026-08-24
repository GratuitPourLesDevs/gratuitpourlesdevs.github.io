---
nom: ip-api
accroche: API de géolocalisation IP sans clé pour les usages non commerciaux
type: API
categorie: api-donnees-ml
formule: Requêtes gratuites sans quota mensuel publié, limitées à 45 par minute
inclus:
  - 45 requêtes par minute depuis une même IP
  - Aucune clé API requise
  - Aucune inscription requise
  - Géolocalisation et informations réseau
conditions:
  - Usage strictement non commercial
restrictions:
  - 45 requêtes par minute
  - HTTPS non disponible sur l’endpoint gratuit
  - Usage commercial interdit sur Free
alertes:
  - type: usage
    niveau: critique
    libelle: Usage commercial exclu
    detail: L’endpoint gratuit ip-api est strictement réservé aux usages non commerciaux.
  - type: fonctionnel
    niveau: important
    libelle: Pas de HTTPS sur Free
    detail: L’endpoint gratuit ne fournit pas de connexion HTTPS, ce qui limite son usage côté navigateur et en production.
usages: [API, Données]
url: https://ip-api.com/
documentation: https://ip-api.com/docs/
source: https://ip-api.com/
couleur: "#ef4444"
initiales: IPA
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 182
verifieLe: 2026-08-24
verificationAutomatiqueLe: 2026-08-24
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
---

ip-api est pratique pour obtenir rapidement des données de géolocalisation sans créer de compte. Son volume est généreux, mais l’absence de HTTPS et l’interdiction d’usage commercial sont deux contraintes majeures.
