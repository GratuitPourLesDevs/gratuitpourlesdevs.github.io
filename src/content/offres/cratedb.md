---
nom: "CrateDB Cloud"
accroche: "Base SQL distribuée pour l’analytique temps réel avec cluster cloud gratuit permanent."
type: PaaS
categorie: services-donnees-manages
formule: "Free : 1 nœud, 2 vCPU, 2 Go de RAM et 8 Go de stockage"
inclus:
- "1 cluster gratuit"
- "1 nœud"
- "2 vCPU"
- "2 Go de RAM"
- "8 Go de stockage"
- "Sauvegarde quotidienne"
- "Environnement partagé"
- "Aucune carte bancaire requise"
conditions:
- "Création d’un compte CrateDB Cloud"
- "Un seul cluster Free par organisation"
restrictions:
- "Ressources partagées et destinées aux charges non critiques"
- "Pas de SLA de production sur Free"
- "Les ressources et fonctions de production avancées nécessitent une offre payante"
- "Les clusters gratuits inactifs peuvent être suspendus ou supprimés selon la politique d’inactivité"
alertes:
- type: operationnel
  niveau: critique
  libelle: Inactivité pouvant mener à la suppression
  detail: Un cluster gratuit inactif peut être suspendu ou supprimé selon la politique d’inactivité du service.
usages: ["Base de données relationnelle", "Données", "Développement et test", "Applications cloud"]
url: https://cratedb.com/
documentation: https://cratedb.com/docs/
source: https://cratedb.com/pricing
couleur: "#009DC7"
initiales: CD
carteRequise: false
depassementFacture: false
permanent: true
statut: active
vedette: false
ordre: 928
verifieLe: '2026-08-21'
verificationAutomatiqueLe: '2026-08-21'
verificationNote: "Le plan gratuit CrateDB Cloud actuel est sans carte et fournit un cluster à un nœud avec 2 vCPU, 2 Go de RAM et 8 Go de stockage, ainsi qu’une sauvegarde quotidienne."
---

CrateDB est une base SQL distribuée orientée analytique temps réel et données volumineuses. Son plan cloud gratuit fournit un petit cluster partagé mais réellement managé, suffisant pour expérimenter les requêtes SQL, l’ingestion et les tableaux de bord sans installer l’infrastructure.
