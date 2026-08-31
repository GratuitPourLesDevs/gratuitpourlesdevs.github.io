---
nom: Market Data API
accroche: Données financières pour actions, options, indices et fonds via API
type: API
categorie: api-donnees-ml
formule: 100 crédits API par jour, historique sur 1 an et données de prix retardées de 24 h
inclus:
  - 100 crédits API par jour
  - Endpoints standards
  - Historique jusqu’à 1 an
  - Données actions et options
  - Métadonnées et certains indices en temps réel
conditions:
  - Compte Market Data
restrictions:
  - Données de prix actions et options retardées de 24 heures
  - Endpoints premium exclus
  - Historique limité à un an
  - Le compteur quotidien se réinitialise à 9 h 30 heure de New York
alertes:
  - type: fonctionnel
    niveau: important
    libelle: Données retardées de 24 h
    detail: Le Free Forever ne fournit pas les prix actions et options en temps réel ; ils sont disponibles avec au moins 24 heures de retard.
usages:
  - API
  - Données
url: https://www.marketdata.app/
documentation: https://www.marketdata.app/docs/account/free-accounts/
source: https://www.marketdata.app/pricing/
couleur: "#0f766e"
initiales: MD
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 203
verifieLe: 2026-08-31
verificationAutomatiqueLe: 2026-08-31
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Market Data propose une API financière exploitable gratuitement pour des side projects, backtests courts et prototypes. La contrepartie principale est l’absence de prix temps réel sur le Free Forever.
