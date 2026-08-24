---
nom: "Couchbase Capella"
accroche: "Couchbase managé multicloud avec cluster gratuit permanent pour prototypage et apprentissage."
type: PaaS
categorie: services-donnees-manages
formule: "Free : 1 cluster à 1 nœud avec environ 8 Go de stockage de données"
inclus:
- "1 cluster gratuit par organisation"
- "1 nœud"
- "8 Go de stockage de données sur l’offre gratuite de référence"
- "Accès clé/valeur et SQL++"
- "Recherche texte et vectorielle"
- "Administration managée"
- "Support communautaire via les forums"
- "Aucune carte ou solde prépayé requis"
conditions:
- "Création d’un compte Couchbase Capella"
- "Utilisation active du cluster gratuit"
restrictions:
- "Un seul cluster Free par organisation"
- "Le cluster gratuit est destiné à l’évaluation, au développement et aux petits projets"
- "La capacité exacte peut varier selon le cloud et la documentation du fournisseur"
- "Les clusters gratuits inactifs peuvent être arrêtés selon la politique Capella"
alertes:
- type: operationnel
  niveau: important
  libelle: Cluster inactif susceptible d’être arrêté
  detail: Le niveau gratuit est soumis à une politique d’inactivité et un cluster inutilisé peut être arrêté.
usages: ["NoSQL", "Base de données", "Recherche vectorielle", "Applications cloud"]
url: https://www.couchbase.com/products/capella/
documentation: https://docs.couchbase.com/cloud/
source: https://www.couchbase.com/products/capella/
couleur: "#ED2226"
initiales: CB
carteRequise: false
depassementFacture: false
permanent: true
statut: active
vedette: false
ordre: 927
verifieLe: '2026-08-21'
verificationAutomatiqueLe: 2026-08-24
verificationNote: "Vérification automatique incomplète : HTTP 403."
---

Couchbase Capella transforme Couchbase en service DBaaS entièrement managé et ajoute recherche, requêtes SQL++ et fonctions orientées applications. Le cluster gratuit à nœud unique sert surtout au prototypage et à l’apprentissage ; il n’offre pas la haute disponibilité d’un cluster de production.
