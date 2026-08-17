---
nom: Country-State-City Microservice API
accroche: API géographique pour pays, régions, provinces, villes et codes postaux
type: API
categorie: api-donnees-ml
formule: Jusqu’à 100 requêtes par jour annoncées
inclus:
  - Jusqu’à 100 requêtes par jour annoncées
  - Données de pays
  - Régions et provinces
  - Villes et codes postaux
conditions:
  - Utilisation de l’API Country-State-City
restrictions:
  - La source primaire était inaccessible lors de la vérification
  - Le quota doit être revérifié directement auprès du fournisseur
alertes:
  - type: operationnel
    niveau: important
    libelle: Source à revérifier
    detail: Le site officiel renvoie actuellement une erreur lors de la vérification et le quota de 100 requêtes par jour n’a pas pu être confirmé sur une source primaire.
usages:
  - API
  - Données
url: https://country-state-city.rebuscando.info/
source: https://country-state-city.rebuscando.info/
couleur: "#0ea5e9"
initiales: CSC
carteRequise: false
depassementFacture: false
permanent: true
statut: "a_verifier"
vedette: false
ordre: 139
verifieLe: 2026-08-18
verificationAutomatiqueLe: 2026-08-18
verificationNote: "Source primaire inaccessible (erreur 502). Quota de 100 requêtes/jour cohérent avec une source secondaire récente, mais non validé officiellement."
---

Country-State-City Microservice API expose des données géographiques structurées sur les pays, subdivisions, villes et codes postaux. Le quota annoncé de 100 requêtes quotidiennes paraît toujours référencé récemment, mais la source officielle n’a pas pu être chargée au moment de la vérification : la fiche reste donc volontairement à revérifier.
