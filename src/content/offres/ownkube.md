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
statut: active
vedette: false
ordre: 829
verifieLe: '2026-08-20'
verificationAutomatiqueLe: '2026-08-20'
verificationNote: Le site 2026 annonce « free for small teams » et un mode k3s/Starter sans frais de plateforme ; les ressources AWS restent directement facturées et les limites d’équipe ne sont pas chiffrées publiquement.
---

Ownkube — Plateforme de déploiement Git dans son propre compte AWS, avec k3s géré gratuitement pour indie builders et petites équipes.
