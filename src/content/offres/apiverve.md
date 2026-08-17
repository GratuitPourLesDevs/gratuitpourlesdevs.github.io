---
nom: APIVerve
accroche: Catalogue de plus de 300 API derrière une même clé avec REST, SDK et outils développeur
type: API
categorie: api-donnees-ml
formule: 100 crédits par mois à 5 requêtes par minute sur le plan Free
inclus:
  - Accès à plus de 300 API avec une seule clé
  - 100 crédits renouvelés chaque mois
  - REST et OpenAPI
  - SDK typés pour plusieurs langages
  - JSON XML et YAML
  - Playground API
  - Un JSON bin et un endpoint Mock API
  - Intégrations limitées et MCP limité sur Free
  - Aucune carte bancaire requise
conditions:
  - Compte APIVerve et clé API
  - Attribution requise sur le plan Free
  - Usage Free réservé au développement aux tests et aux usages non commerciaux
restrictions:
  - 100 crédits partagés entre l’ensemble du catalogue par mois
  - Maximum de 5 requêtes par minute
  - Certains endpoints consomment 2 à 5 crédits par appel
  - Usage commercial et production non autorisés sur Free
  - Attribution obligatoire
  - Les crédits épuisés provoquent une réponse HTTP 429 jusqu’au reset ou à la mise à niveau
alertes:
  - type: usage
    niveau: critique
    libelle: Non commercial
    detail: Le plan gratuit APIVerve est prévu pour le développement et les tests ; la production commerciale nécessite au minimum un plan Starter.
usages:
  - API
  - Données
  - Automatisation
url: https://apiverve.com/
documentation: https://docs.apiverve.com/
source: https://apiverve.com/pricing
couleur: "#6366f1"
initiales: AV
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 97
verifieLe: 2026-08-18
verificationAutomatiqueLe: 2026-08-18
verificationNote: "APIVerve est actif. La tarification officielle actuelle remplace l’ancien quota de 50 tokens par 100 crédits/mois, 5 requêtes/minute, sans carte, avec attribution et usage non commercial."
---

APIVerve simplifie l’accès à un grand nombre de petites API utilitaires en centralisant l’authentification et la facturation derrière une seule clé. Le free tier actuel est nettement plus limité en volume qu’autrefois, mais reste utile pour tester rapidement plusieurs endpoints sans créer autant de comptes fournisseurs.