---
nom: "Qdrant Cloud"
accroche: "Base vectorielle managée pour embeddings, recherche sémantique et applications RAG."
type: PaaS
categorie: services-donnees-manages
formule: "Free : 1 nœud, 0,5 vCPU, 1 Go de RAM et 4 Go de disque"
inclus:
- "1 cluster à nœud unique"
- "0,5 vCPU"
- "1 Go de RAM"
- "4 Go de disque"
- "Environ 1 million de vecteurs de dimension 768 selon les données"
- "Monitoring, logs et alertes de base"
- "Aucune carte bancaire requise"
conditions:
- "Création d’un compte Qdrant Cloud"
restrictions:
- "Choix de régions et de fournisseurs cloud limité sur Free"
- "Pas de haute disponibilité sur le cluster à nœud unique"
- "Les clusters gratuits inactifs peuvent être suspendus après environ une semaine puis supprimés après une période d’inactivité prolongée"
alertes:
- type: operationnel
  niveau: critique
  libelle: Inactivité pouvant mener à la suppression
  detail: Un cluster Free inactif peut être suspendu puis supprimé après une période d’inactivité prolongée.
- type: fonctionnel
  niveau: important
  libelle: Pas de haute disponibilité
  detail: Le cluster gratuit est mono-nœud et ne fournit pas de haute disponibilité.
usages: ["Recherche vectorielle", "RAG", "IA", "Base de données"]
url: https://qdrant.tech/
documentation: https://qdrant.tech/documentation/cloud/
source: https://qdrant.tech/pricing/
couleur: "#DC244C"
initiales: QD
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 937
verifieLe: 2026-08-24
verificationAutomatiqueLe: 2026-08-24
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
---

Qdrant est spécialisé dans le stockage et la recherche de vecteurs pour embeddings, moteurs sémantiques et RAG. Le cluster gratuit offre assez de ressources pour des prototypes réels et de petits corpus, mais son nœud unique et sa politique d’inactivité le distinguent d’un environnement de production permanent.
