---
nom: "New Relic"
accroche: "Plateforme d’observabilité full-stack avec métriques, logs, traces et synthetics"
type: "SaaS"
categorie: "supervision"
formule: "Free : 100 Go d’ingestion/mois, 1 utilisateur Full Platform et 500 synthetic checks"
inclus: ["100 Go de données ingérées par mois", "1 utilisateur Full Platform", "Utilisateurs Basic sans petit quota fixe", "500 synthetic checks", "Instrumentation de nombreux hosts et services", "Rétention par défaut d’au moins plusieurs jours"]
conditions: ["Aucune carte bancaire requise pour démarrer le Free"]
restrictions: ["Si les 100 Go gratuits sont dépassés sans upgrade, l’ingestion ou l’accès est limité jusqu’au cycle suivant", "Les fonctions avancées et volumes supérieurs sont payants"]
alertes:
  - type: "usage"
    niveau: "important"
    libelle: "Plafond 100 Go/mois"
    detail: "Le niveau gratuit est centré sur 100 Go d’ingestion mensuelle ; dépasser ce plafond sans upgrade limite la continuité d’ingestion ou d’accès."
usages: ["Observabilité", "Monitoring", "Logs", "Alertes"]
url: "https://newrelic.com/"
source: "https://newrelic.com/pricing"
couleur: "#00AC69"
initiales: "NR"
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 606
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

New Relic permet d’instrumenter une application et son infrastructure pour rapprocher métriques, logs, traces et contrôles synthétiques dans une même plateforme. Son Free Tier est particulièrement généreux en volume avec 100 Go d’ingestion mensuelle et un utilisateur Full Platform ; la limite structurante est précisément ce volume, après lequel il faut réduire l’ingestion ou passer à une offre supérieure.
