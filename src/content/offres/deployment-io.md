---
nom: Deployment.io
accroche: Automatisation des déploiements et agents DevOps dans votre compte AWS
type: PaaS
categorie: gestion-cloud
formule: 1 utilisateur et 10 jobs par mois avec sites, services et environnements illimités
inclus: [10 jobs par mois, 1 utilisateur, Sites statiques et services web illimités, Dépôts et environnements illimités, Domaines personnalisés avec HTTPS, Déploiements automatiques sur git push, Environnements de prévisualisation sur les pull requests, Logs de build et d’application, Notifications Slack, Accès MCP pour les agents de développement, Contrôles RBAC et validation humaine des déploiements en production]
conditions: [Compte Deployment.io gratuit sans carte bancaire, Compte AWS connecté et configuré, Dépôts de code accessibles à la plateforme]
restrictions: [Les ressources AWS déployées restent facturées par AWS, Une tâche un déploiement ou une récupération de logs consomme un job, Un environnement de prévisualisation consomme un job par service lancé, Les tâches multi-étapes comptent chaque étape comme un job, Limite d’un seul utilisateur sur le plan gratuit, Fonctionnalités SSO SAML et support managé réservés aux offres supérieures]
alertes:
  - type: finance
    niveau: critique
    libelle: Ressources AWS facturées
    detail: Les ressources créées par Deployment.io restent facturées directement par AWS.
  - type: fonctionnel
    niveau: important
    libelle: Un seul utilisateur
    detail: Le plan gratuit est limité à un seul utilisateur.
usages: [Déploiement AWS, CI/CD, Agents IA]
url: https://deployment.io/
documentation: https://deployment.io/docs/
source: https://deployment.io/pricing/
couleur: "#16a085"
initiales: DIO
carteRequise: false
permanent: true
statut: active
vedette: false
ordre: 15
verifieLe: 2026-08-13
verificationAutomatiqueLe: 2026-08-13
verificationNote: "Plan Self-serve Free, nombre de jobs et fonctionnalités communes confirmés sur la page tarifaire officielle Deployment.io."
---

Deployment.io automatise la création d’environnements, les déploiements de sites statiques et de services conteneurisés dans le compte AWS de l’utilisateur. Son intégration MCP permet aussi de piloter ces opérations depuis un agent de développement, avec des limites d’exécution et une validation humaine avant la production.
