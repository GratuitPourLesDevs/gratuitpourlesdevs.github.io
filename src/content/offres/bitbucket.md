---
nom: Bitbucket Cloud
accroche: Hébergement Git Atlassian avec dépôts privés et Pipelines CI/CD
type: SaaS
categorie: depots-code-source
formule: Dépôts publics et privés illimités pour une équipe jusqu’à 5 utilisateurs
inclus:
  - Dépôts Git publics et privés illimités
  - Jusqu’à 5 utilisateurs sur le plan Free
  - 50 minutes Bitbucket Pipelines par mois
  - 1 Go de stockage Git LFS inclus
  - Pull requests et revue de code
  - Intégration avec Jira et l’écosystème Atlassian
conditions:
  - Compte Atlassian
  - Workspace Bitbucket Cloud sur le plan Free
  - Aucune carte bancaire nécessaire pour rester dans les quotas gratuits
restrictions:
  - Maximum de 5 utilisateurs sur le plan Free
  - Bitbucket Pipelines limité à 50 minutes de build par mois
  - Git LFS limité à 1 Go de stockage inclus
  - Des ressources supplémentaires peuvent être achetées si une facturation est configurée
alertes:
  - type: fonctionnel
    niveau: important
    libelle: CI très limitée
    detail: Le plan Free n’inclut que 50 minutes Bitbucket Pipelines par mois, ce qui convient surtout à de petits pipelines ou à des builds ponctuels.
usages:
  - Git
  - Dépôts privés
  - CI/CD
  - Pipelines
url: https://bitbucket.org/product/
documentation: https://support.atlassian.com/bitbucket-cloud/
source: https://support.atlassian.com/bitbucket-cloud/docs/manage-your-plan-and-billing/
couleur: "#0052cc"
initiales: BB
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 81
verifieLe: 2026-08-24
verificationAutomatiqueLe: 2026-08-24
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
---

Bitbucket Cloud est la forge Git hébergée d’Atlassian. Son plan gratuit convient à une petite équipe qui souhaite conserver autant de dépôts publics ou privés que nécessaire, gérer des pull requests et automatiser quelques builds avec Pipelines. La principale limite à surveiller est le faible quota mensuel de CI/CD : 50 minutes peuvent être consommées rapidement par des builds fréquents ou longs.
