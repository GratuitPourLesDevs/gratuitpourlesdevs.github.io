---
nom: Data Miner
accroche: Extraction de données web depuis Chrome et Edge vers CSV ou Excel
type: SaaS
categorie: api-donnees-ml
formule: 500 pages extraites par mois
inclus: [500 pages extraites par mois, Extension Google Chrome et Microsoft Edge, Recettes publiques et création de recettes, Export CSV ou Excel, Automatisation de pagination de base]
conditions: [Compte Data Miner, Extension navigateur Data Miner]
restrictions: [Certaines sources web sont restreintes sur le plan gratuit, Les crédits inutilisés ne sont pas reportés, Dépasser le quota gratuit peut verrouiller le compte jusqu’à passage sur un plan payant]
alertes:
  - type: operationnel
    niveau: critique
    libelle: Dépassement bloquant
    detail: Data Miner indique qu’un dépassement des 500 pages sur Free peut verrouiller le compte jusqu’à une mise à niveau payante.
usages: [Données, Automatisation]
url: https://dataminer.io/
documentation: https://dataminer.io/help
source: https://dataminer.io/pricing
couleur: "#f15a24"
initiales: DM
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 147
verifieLe: 2026-08-31
verificationAutomatiqueLe: 2026-08-31
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Data Miner est une extension de navigateur pour extraire des données structurées depuis des pages web. Son quota est correct mais son comportement en cas de dépassement mérite d’être visible : le compte Free peut être verrouillé plutôt que simplement attendre le prochain reset.
