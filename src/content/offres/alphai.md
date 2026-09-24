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
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

alphai est pertinent pour prototyper un agent qui résume l’actualité d’une entreprise, alimente une veille par ticker ou déclenche un workflow lorsqu’un événement financier important apparaît. Le service évite de collecter puis de classer soi-même les articles : le plan gratuit expose par API REST et MCP les news enrichies, les scores de pertinence, le sentiment, les événements SEC Form 4 et les données macroéconomiques, dans la limite de 100 requêtes par jour. Cette enveloppe convient à une démonstration ciblée ou à une veille sur quelques actifs ; une ingestion continue, un grand univers de titres ou un usage commercial impose de changer de formule.
