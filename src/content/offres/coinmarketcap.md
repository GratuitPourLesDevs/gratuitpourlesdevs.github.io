---
nom: "CoinMarketCap API"
accroche: "API de données de marché crypto pour prix, listings, métadonnées, indicateurs et données historiques."
type: "API"
categorie: paiement-facturation
formule: "Basic : 15 000 call credits par mois"
inclus:
- "15 000 call credits par mois"
- "50 requêtes par minute"
- "Plus de 30 endpoints de données sur le plan Basic"
- "Données historiques"
- "Usage commercial autorisé sur le plan Basic"
- "Clé API et tableau de bord d’usage"
conditions: []
restrictions:
- "La consommation est comptée en call credits et peut varier selon le nombre de données retournées par un endpoint"
- "Les plans payants donnent accès à davantage de volume et de fonctionnalités"
alertes:
- type: usage
  niveau: important
  libelle: "Quota augmenté à 15 000 crédits"
  detail: "Le plan Basic gratuit fournit désormais 15 000 call credits mensuels, contre 10 000 dans les anciennes descriptions."
usages: ["API", "Données"]
url: https://coinmarketcap.com/api/
documentation: https://coinmarketcap.com/api/documentation/
source: https://coinmarketcap.com/api/
couleur: "#3861FB"
initiales: "CMC"
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 1198
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

CoinMarketCap API évite de scraper des pages ou d’agréger soi-même plusieurs sources lorsqu’une application a besoin de prix, listings, métadonnées ou historiques sur les cryptomonnaies. Elle est pratique pour un dashboard, un bot, un outil d’analyse ou une fonctionnalité crypto intégrée à un produit, avec un niveau Basic qui autorise aussi l’usage commercial. Il faut simplement raisonner en call credits plutôt qu’en nombre brut de requêtes : certains endpoints consomment davantage selon le volume de données retourné, même si l’allocation mensuelle de 15 000 crédits laisse une marge confortable pour démarrer.
