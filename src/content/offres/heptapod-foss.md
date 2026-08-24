---
nom: Heptapod FOSS
accroche: Forge GitLab compatible Git et Mercurial réservée aux projets libres
type: SaaS
categorie: depots-code-source
formule: Hébergement gratuit des projets FOSS publics Git ou Mercurial sur foss.heptapod.net
inclus:
  - Hébergement gratuit de projets Free and Open Source Software
  - Dépôts Git
  - Dépôts Mercurial grâce au fork Heptapod de GitLab
  - Runners CI/CD intégrés
  - Gestion de projet et issues issue de GitLab
  - Infrastructure hébergée dans un cloud européen
conditions:
  - Projet Free and Open Source Software
  - Projet public sur l’instance foss.heptapod.net
  - Respect des règles de la communauté Heptapod
restrictions:
  - Service réservé aux projets FOSS publics
  - Aucun quota chiffré de stockage ou de calcul n’est publié comme engagement commercial
  - Service géré par la communauté sans garanties d’un plan SaaS commercial
alertes:
  - type: usage
    niveau: critique
    libelle: FOSS public uniquement
    detail: L’instance gratuite foss.heptapod.net est destinée à l’hébergement public de projets libres et open source et non aux dépôts privés généralistes.
usages:
  - Git
  - CI/CD open source
  - Gestion de projet
  - Collaboration
url: https://foss.heptapod.net/
documentation: https://heptapod.net/
source: https://heptapod.net/pricing/
couleur: "#6b4fbb"
initiales: HP
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 87
verifieLe: 2026-08-24
verificationAutomatiqueLe: 2026-08-24
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
---

Heptapod est un fork de GitLab Community Edition dont la particularité est d’ajouter une prise en charge de Mercurial en plus de Git. L’instance foss.heptapod.net offre cette forge gratuitement aux projets libres publics, avec CI/CD et fonctions de gestion de projet. C’est une option rare pour une équipe qui souhaite continuer à utiliser Mercurial sans renoncer à une expérience de forge proche de GitLab.
