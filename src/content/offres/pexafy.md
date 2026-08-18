---
nom: Pexafy
accroche: Recherche sémantique unifiée d’images libres issues de plusieurs banques photo
type: API
categorie: api-donnees-ml
formule: Recherche gratuite sur 9 sources ; quota API de 5 000 requêtes/mois à revérifier
inclus:
  - Recherche sémantique en langage naturel
  - Recherche inversée par image
  - 9 fournisseurs de photos agrégés
  - Filtres couleur orientation et licence
  - Schéma JSON unifié
  - API avec clé
  - CORS ouvert sur les endpoints de lecture
conditions:
  - Compte gratuit pour obtenir une clé API
  - Aucune carte bancaire annoncée pour l’inscription gratuite
restrictions:
  - La page publique confirme 15 recherches anonymes gratuites par jour avant connexion
  - Le quota API annoncé de 5 000 requêtes par mois n’a pas pu être confirmé sur une page tarifaire officielle accessible
alertes:
  - type: fonctionnel
    niveau: important
    libelle: Quota API à confirmer
    detail: Le service et son API sont actifs, mais le plafond de 5 000 requêtes mensuelles n’a pas pu être revérifié sur une source tarifaire officielle accessible.
usages:
  - API
  - Recherche
  - Données
url: https://pexafy.com/
documentation: https://docs.pexafy.com/
source: https://pexafy.com/
couleur: "#ec4899"
initiales: PX
carteRequise: false
depassementFacture: false
permanent: true
statut: "a_verifier"
vedette: false
ordre: 220
verifieLe: 2026-08-18
verificationAutomatiqueLe: 2026-08-18
verificationNote: "L’existence de l’API, des 9 sources et de la recherche gratuite est confirmée. Le quota de 5 000 requêtes/mois fourni dans la source initiale reste à confirmer."
---

Pexafy évite d’intégrer séparément plusieurs banques d’images en normalisant la recherche et les métadonnées derrière une seule API. La fiche reste toutefois en vérification tant que le quota API gratuit exact n’est pas confirmé par une grille tarifaire officielle accessible.
