---
nom: Ownkube
accroche: Plateforme de déploiement Git dans son propre compte AWS, avec k3s géré gratuitement pour indie builders et petites équipes.
type: PaaS
categorie: gestion-cloud
formule: 'Starter/k3s : couche plateforme gratuite pour petites équipes ; infrastructure AWS payée directement à AWS'
inclus:
- Mode k3s gratuit pour indie builders et petits environnements d’équipe
- Déploiement dans son propre compte AWS
- Git push et preview URLs
- PostgreSQL managé sur son infrastructure
- Agents de coût, incident, scaling et sécurité
- Utilisation des crédits AWS Activate
conditions:
- Un compte AWS est nécessaire et accueille les workloads
restrictions:
- Les coûts EC2, stockage et réseau AWS restent à la charge de l’utilisateur
- Le mode EKS/Production applique des frais de plateforme
- GCP est annoncé comme à venir
alertes:
- type: finance
  niveau: critique
  libelle: AWS facturé séparément
  detail: Le mode k3s Ownkube peut être gratuit côté plateforme, mais le compute, le stockage et le trafic restent facturés directement dans votre compte AWS.
usages:
- Kubernetes
- Déploiement AWS
- Gestion d’infrastructure
- GitOps
- Applications cloud
url: https://ownkube.io/
source: https://ownkube.io/
couleur: '#111827'
initiales: OK
carteRequise: false
depassementFacture: true
permanent: true
statut: "active"
vedette: false
ordre: 829
verifieLe: 2026-08-24
verificationAutomatiqueLe: 2026-08-24
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
---

Ownkube cible les développeurs qui veulent la simplicité d’un déploiement par Git tout en conservant les workloads Kubernetes dans leur propre compte AWS. Le mode Starter basé sur k3s supprime les frais de plateforme pour les petits environnements et ajoute des fonctions pratiques comme les preview URLs, PostgreSQL et des agents dédiés aux coûts, incidents, scaling et sécurité. Cette approche peut être particulièrement intéressante pour exploiter des crédits AWS tout en gardant davantage de contrôle qu’avec un PaaS entièrement hébergé. Il faut cependant bien distinguer la plateforme de l’infrastructure : les instances, le stockage et le trafic AWS restent payants, et le mode EKS destiné à la production applique des frais Ownkube.
