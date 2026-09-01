---
nom: "Neo4j AuraDB"
accroche: "Base de graphes Neo4j entièrement managée avec Cypher et niveau gratuit permanent."
type: PaaS
categorie: services-donnees-manages
formule: "AuraDB Free : jusqu’à 200 000 nœuds et 400 000 relations"
inclus:
- "1 base AuraDB Free"
- "Jusqu’à 200 000 nœuds"
- "Jusqu’à 400 000 relations"
- "Langage Cypher"
- "API et drivers Neo4j"
- "Recherche et exploration de graphes"
- "Aucune carte bancaire requise"
conditions:
- "Création d’un compte Neo4j Aura"
restrictions:
- "Limites strictes sur le nombre de nœuds et de relations"
- "Pas de sauvegardes avancées ni de SLA de production sur Free"
- "Les instances gratuites inactives peuvent être mises en pause"
alertes:
- type: operationnel
  niveau: important
  libelle: Instance inactive mise en pause
  detail: Une instance AuraDB Free inactive peut être automatiquement mise en pause.
- type: fonctionnel
  niveau: important
  libelle: Pas de SLA de production
  detail: Le niveau gratuit ne fournit ni SLA de production ni les sauvegardes avancées des offres supérieures.
usages: ["Base de données", "Données", "Recherche", "Développement et test"]
url: https://neo4j.com/cloud/aura/
documentation: https://neo4j.com/docs/aura/
source: https://neo4j.com/pricing/
couleur: "#018BFF"
initiales: N4
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 934
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Neo4j AuraDB met à disposition une base de graphes native sans installation ni exploitation de cluster. Le niveau gratuit convient aux prototypes de recommandation, cartographie de relations, knowledge graphs et apprentissage de Cypher, tant que le graphe reste sous les limites de taille.
