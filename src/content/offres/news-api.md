---
nom: News API
accroche: Recherche d’articles et top headlines au format JSON pour le développement
type: API
categorie: api-donnees-ml
formule: 100 requêtes par jour avec articles retardés de 24 h
inclus:
  - 100 requêtes par jour
  - Recherche d’articles
  - Top headlines
  - Recherche jusqu’à un mois en arrière
  - CORS sur localhost
conditions:
  - Plan Developer réservé au développement et aux tests
  - Clé API News API
restrictions:
  - Articles retardés de 24 heures
  - Pas de requêtes supplémentaires au-delà du quota
  - Pas d’usage production ou projet commercial publié avec le plan Developer
  - Pas de SLA
alertes:
  - type: usage
    niveau: critique
    libelle: Production exclue
    detail: Le plan Developer gratuit est destiné au développement et aux tests ; les projets publiés ou commerciaux nécessitent un plan payant.
usages:
  - API
  - Données
url: https://newsapi.org/
documentation: https://newsapi.org/docs
source: https://newsapi.org/pricing
couleur: "#e11d48"
initiales: NA
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 213
verifieLe: 2026-08-24
verificationAutomatiqueLe: 2026-08-24
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
---

News API fournit un accès JSON simple à l’actualité pour prototyper des agrégateurs, tableaux de bord ou expériences de recherche. Son plan gratuit ne doit toutefois pas être utilisé pour un service de production publié.
