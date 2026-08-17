---
nom: Parsivex
accroche: Analyse des gaspillages de coûts AWS à partir d’un compte cloud
type: SaaS
categorie: gestion-cloud
formule: Offre annoncée comme un scan mensuel gratuit pour un compte AWS, à confirmer
inclus:
  - Scan annoncé d’un compte AWS
  - Détection annoncée de ressources EC2 inactives
  - Détection annoncée de volumes EBS non attachés
  - Analyse annoncée du dimensionnement RDS
  - Détection annoncée des snapshots anciens
  - Analyse annoncée de la consommation des NAT Gateway
  - Estimation annoncée du gaspillage mensuel total
  - Répartition annoncée des économies potentielles par catégorie
conditions:
  - Compte Parsivex
  - Compte AWS à analyser
  - Vérification de la méthode d’accès AWS et des permissions requises avant activation
restrictions:
  - Les résultats détaillés ressource par ressource seraient réservés aux plans payants selon les informations fournies
  - Les rescans planifiés seraient réservés aux plans payants selon les informations fournies
  - Le site officiel n’a pas pu être récupéré lors de la vérification du 17 août 2026
  - Les quotas et conditions exactes doivent être confirmés sur une source officielle avant publication active
alertes:
  - type: usage
    niveau: critique
    libelle: Offre à vérifier
    detail: La présence du service et son domaine sont identifiés mais le site officiel n’a pas pu être consulté et aucune source primaire indexée ne confirme actuellement le free tier annoncé.
usages:
  - Gestion d’infrastructure
  - Architecture cloud
  - Automatisation
url: https://www.parsivex.com/
source: https://www.parsivex.com/
couleur: "#334155"
initiales: PX
carteRequise: false
depassementFacture: false
permanent: true
statut: "a_verifier"
vedette: false
ordre: 80
verifieLe: 2026-08-17
verificationNote: "À vérifier : le site officiel parsivex.com n’a pas pu être récupéré et aucune source primaire indexée n’a permis de confirmer le scan mensuel gratuit d’un compte AWS ni les limites annoncées. La fiche reprend uniquement les éléments fournis afin de les conserver dans le workflow éditorial sans les publier comme vérifiés."
---

Parsivex est présenté comme un outil de détection du gaspillage dans un compte AWS, avec des analyses portant notamment sur EC2, EBS, RDS, les snapshots et les NAT Gateway. Le free tier annoncé fournirait un scan mensuel d’un compte et une synthèse des économies possibles. Ces éléments n’ont toutefois pas pu être confirmés sur une source officielle accessible au moment de la vérification : l’offre reste donc volontairement au statut « à vérifier » et n’est pas considérée comme une offre active vérifiée.
