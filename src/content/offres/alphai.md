---
nom: alphai
accroche: API et serveur MCP de news financières enrichies et scorées pour agents et automatisations
type: API
categorie: api-donnees-ml
formule: 100 requêtes par jour avec un plafond de 20 requêtes par minute
inclus:
  - API REST de news financières en JSON
  - Serveur MCP utilisant le même compte et les mêmes quotas
  - Score de pertinence de 1 à 10 par article
  - Analyse d’impact et sentiment par ticker
  - Catégorisation des actualités
  - Flux SEC Form 4 d’achats et ventes d’initiés
  - Données macroéconomiques et calendrier économique
  - Un clé API gratuite
  - Aucune carte bancaire requise
conditions:
  - Compte alphai et clé API
  - Authentification Bearer
  - Plan Free destiné à l’évaluation et aux usages non commerciaux
restrictions:
  - Maximum de 100 requêtes par jour
  - Maximum de 20 requêtes par minute
  - Les quotas REST et MCP sont comptabilisés au niveau du compte
  - Le plan gratuit n’est pas destiné à la production commerciale
  - Le volume quotidien ne permet pas de parcourir en continu l’intégralité du flux général
alertes:
  - type: usage
    niveau: critique
    libelle: Évaluation non commerciale
    detail: Le plan Free est prévu pour évaluer le service et prototyper ; un usage de production ou commercial nécessite un plan payant.
usages:
  - API
  - Données
  - Agents IA
url: https://alphai.io/
documentation: https://alphai.io/developers
source: https://alphai.io/developers
couleur: "#111827"
initiales: AA
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 93
verifieLe: 2026-08-18
verificationAutomatiqueLe: 2026-08-18
verificationNote: "La documentation officielle confirme 20 requêtes/minute, 100/jour, une clé gratuite, aucune carte bancaire et un usage Free d’évaluation non commercial."
---

alphai fournit un flux de news financières déjà enrichi pour éviter de refaire toute la chaîne d’analyse côté application. Les articles sont reliés aux tickers, scorés et accompagnés d’une analyse d’impact ; les dépôts SEC Form 4 sont aussi transformés en événements structurés. Le quota gratuit convient surtout à un prototype ciblé plutôt qu’à l’ingestion exhaustive du flux.