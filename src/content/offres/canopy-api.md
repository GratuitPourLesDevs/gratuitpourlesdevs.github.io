---
nom: Canopy API
accroche: Données Amazon produits, recherche et catégories via REST et GraphQL
type: API
categorie: api-donnees-ml
formule: 100 requêtes par mois sur le plan Hobby gratuit
inclus:
  - 100 requêtes par mois
  - Accès REST et GraphQL
  - Données produits Amazon
  - Recherche et catégories Amazon
  - Support e-mail
conditions:
  - Compte Canopy API
  - Clé API
restrictions:
  - Quota mensuel plafonné à 100 requêtes
  - Le plan Hobby ne facture pas de dépassement et bloque au plafond
alertes:
  - type: fonctionnel
    niveau: important
    libelle: Quota très limité
    detail: Le plan Hobby est plafonné à 100 requêtes par mois, ce qui le destine surtout aux tests et petits projets.
usages:
  - API
  - Données
url: https://www.canopyapi.co/
documentation: https://docs.canopyapi.co/
source: https://www.canopyapi.co/
couleur: "#111827"
initiales: CN
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 131
verifieLe: 2026-08-24
verificationAutomatiqueLe: 2026-08-24
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
---

Canopy API expose des données Amazon par REST et GraphQL afin de récupérer des produits, prix, catégories, recherches et autres informations de catalogue. Le plan Hobby est permanent mais volontairement petit : il sert surtout à tester une intégration ou alimenter un prototype à faible trafic.
