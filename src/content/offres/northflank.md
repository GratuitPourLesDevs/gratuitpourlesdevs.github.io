---
nom: Northflank
accroche: Plateforme cloud pour services conteneurisés, jobs et bases managées, avec Sandbox gratuit toujours-on pour expérimenter.
type: PaaS
categorie: paas
formule: 'Developer Sandbox : 2 services, 2 jobs et 1 addon/base gratuits'
inclus:
- 2 services gratuits
- 2 jobs ou cron jobs gratuits
- 1 addon, notamment une base de données
- Compute always-on sans sleeping
- GitHub, GitLab et Bitbucket
- SSL et domaines personnalisés
- UI, API et CLI
- 1 cluster BYOC de test selon la documentation
conditions:
- Le Developer Sandbox est destiné aux tests, prototypes et projets hobby, pas à la production
restrictions:
- Compute limité sur le Sandbox
- En BYOC, les coûts du fournisseur cloud restent dus
alertes: []
usages:
- Applications cloud
- Orchestration de conteneurs
- Tâches planifiées
- Base de données
- CI/CD
url: https://northflank.com/
source: https://northflank.com/pricing
couleur: '#7C3AED'
initiales: NF
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 828
verifieLe: 2026-08-31
verificationAutomatiqueLe: 2026-08-31
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Northflank est utile pour tester une architecture conteneurisée complète sans devoir installer Kubernetes ni assembler séparément le déploiement, les jobs planifiés et la base de données. Son Developer Sandbox permet de garder deux services et deux jobs actifs en permanence, ainsi qu’un addon pouvant servir de base managée, avec intégration aux principaux hébergeurs Git et gestion du SSL. Cela suffit pour monter un petit backend, un worker et sa base ou pour expérimenter une architecture de microservices avec un vrai cycle CI/CD. Le Sandbox reste néanmoins explicitement destiné aux prototypes, tests et projets hobby : le compute est limité et un usage de production ou BYOC peut entraîner des coûts supplémentaires.
