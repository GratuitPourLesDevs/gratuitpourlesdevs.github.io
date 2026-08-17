---
nom: GitLab.com
accroche: Forge DevSecOps avec dépôts Git, CI/CD, Pages et registre de conteneurs
type: SaaS
categorie: depots-code-source
formule: Plan Free avec 5 utilisateurs, 400 minutes de calcul par mois et 10 Gio de stockage par projet
inclus:
  - Dépôts Git publics et privés
  - Jusqu’à 5 utilisateurs sur les namespaces privés Free
  - 400 minutes de calcul CI/CD par mois
  - 10 Gio de stockage par projet
  - GitLab CI/CD intégré
  - GitLab Pages pour l’hébergement statique
  - Container Registry
  - Issues merge requests et gestion de projet
conditions:
  - Compte GitLab.com
  - Namespace sur le plan Free
  - Aucune carte bancaire nécessaire pour le plan gratuit de base
restrictions:
  - Les namespaces privés Free sont limités à 5 utilisateurs licenciés
  - Le quota de calcul CI/CD est limité à 400 minutes par mois
  - Stockage gratuit limité à 10 Gio par projet dans un namespace Free
  - Les groupes publics de premier niveau peuvent bénéficier de règles différentes concernant la limite d’utilisateurs
  - Des add-ons payants existent pour augmenter certaines ressources
alertes:
  - type: fonctionnel
    niveau: important
    libelle: 5 utilisateurs en privé
    detail: Les namespaces privés du plan Free sont limités à cinq utilisateurs, ce qui réduit l’intérêt de GitLab.com pour une équipe privée plus importante.
usages:
  - Git
  - Dépôts privés
  - CI/CD
  - Hébergement statique
  - Gestion de projet
url: https://gitlab.com/
documentation: https://docs.gitlab.com/
source: https://about.gitlab.com/pricing/
couleur: "#fc6d26"
initiales: GL
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 86
verifieLe: 2026-08-17
verificationAutomatiqueLe: 2026-08-17
verificationNote: "Plan GitLab Free vérifié : 5 utilisateurs sur les namespaces privés, 400 minutes de calcul mensuelles et 10 Gio de stockage par projet. La limite de cinq utilisateurs est désormais appliquée aux namespaces privés Free concernés."
---

GitLab.com rassemble gestion du code, pipelines, registre de conteneurs, Pages et suivi de projet dans une même plateforme. Son plan Free reste très complet techniquement, avec 400 minutes de calcul CI/CD par mois et 10 Gio de stockage par projet. Pour un projet privé, la contrainte structurante est désormais la limite de cinq utilisateurs du namespace gratuit.
