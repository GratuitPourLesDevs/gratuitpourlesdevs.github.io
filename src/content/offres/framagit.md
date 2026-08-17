---
nom: Framagit
accroche: Forge GitLab communautaire de Framasoft avec CI et Pages
type: SaaS
categorie: depots-code-source
formule: Jusqu’à 42 projets publics ou privés par compte
inclus:
  - Jusqu’à 42 projets par compte
  - Dépôts Git publics et privés
  - GitLab CI pour l’intégration continue
  - GitLab Pages pour les sites statiques
  - Issues et gestion de projet GitLab
  - Merge requests et collaboration
conditions:
  - Compte Framagit
  - Inscription modérée afin de limiter le spam
  - Respect des conditions d’utilisation de Framasoft et des ressources partagées
restrictions:
  - Maximum de 42 projets par compte
  - Les nouveaux comptes peuvent nécessiter plusieurs jours avant activation
  - Le service ne doit pas servir de disque de stockage ni de miroir massif
  - Les ressources CI sont partagées et doivent rester compatibles avec un usage raisonnable
alertes:
  - type: usage
    niveau: important
    libelle: Inscription modérée
    detail: Les créations de comptes sont contrôlées contre le spam et l’activation peut prendre quelques jours avant de permettre l’utilisation de la forge.
usages:
  - Git
  - Dépôts privés
  - CI/CD open source
  - Hébergement statique
  - Gestion de projet
url: https://framagit.org/
documentation: https://docs.framasoft.org/fr/gitlab/
source: https://docs.framasoft.org/fr/gitlab/
couleur: "#725794"
initiales: FG
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 83
verifieLe: 2026-08-17
verificationAutomatiqueLe: 2026-08-17
verificationNote: "Framagit est toujours actif et annonce une limite de 42 projets par compte, avec dépôts publics ou privés, CI et Pages. L’inscription est modérée contre le spam."
---

Framagit est la forge Git de Framasoft, construite sur GitLab Community Edition. Elle combine hébergement de code, tickets, merge requests, CI et Pages dans un service communautaire gratuit. Sa limite de 42 projets par compte est généreuse pour des projets personnels ou associatifs, mais Framagit reste un service mutualisé : il ne doit pas être détourné en stockage de masse ou en infrastructure de calcul intensive.
