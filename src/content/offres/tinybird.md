---
nom: "Tinybird"
accroche: "ClickHouse serverless managé pour ingérer des données et publier des requêtes SQL sous forme d’API."
type: PaaS
categorie: services-donnees-manages
formule: "Free : 10 Go de stockage et 1 000 requêtes API par jour"
inclus:
- "10 Go de stockage inclus"
- "1 000 requêtes par jour au niveau de l’organisation"
- "0,25 vCPU sur infrastructure partagée"
- "1 thread par requête"
- "Ingestion de données par HTTP"
- "Endpoints API construits à partir de SQL"
- "Support communautaire"
- "Aucune carte bancaire requise"
conditions:
- "Création d’un compte Tinybird"
- "Utilisation du plan Free"
restrictions:
- "Infrastructure partagée"
- "Capacité de calcul et nombre de requêtes limités"
- "Les quotas Free sont appliqués au niveau de l’organisation"
- "Les besoins de production soutenue nécessitent généralement un plan supérieur"
alertes:
- type: usage
  niveau: important
  libelle: Quota partagé par organisation
  detail: Les 1 000 requêtes API quotidiennes et les autres limites Free s’appliquent au niveau de l’organisation, pas séparément à chaque projet.
- type: operationnel
  niveau: important
  libelle: Infrastructure partagée
  detail: Le niveau Free utilise une capacité de calcul partagée et limitée, peu adaptée à une charge de production soutenue.
usages: ["Données", "API", "Serverless", "Base de données"]
url: https://www.tinybird.co/
documentation: https://www.tinybird.co/docs
source: https://www.tinybird.co/pricing
couleur: "#27F795"
initiales: TB
carteRequise: false
depassementFacture: false
permanent: true
statut: active
vedette: false
ordre: 942
verifieLe: '2026-08-21'
verificationAutomatiqueLe: '2026-08-21'
verificationNote: "Le plan Free actuel reste sans limite de durée annoncée et comprend 10 Go de stockage, 1 000 requêtes par jour et 0,25 vCPU partagé."
---

Tinybird s’appuie sur ClickHouse pour transformer rapidement des flux de données et des requêtes SQL en endpoints HTTP. Les 10 Go de stockage et 1 000 requêtes quotidiennes du plan Free suffisent pour construire des prototypes d’analytics temps réel et de petites API de données.
