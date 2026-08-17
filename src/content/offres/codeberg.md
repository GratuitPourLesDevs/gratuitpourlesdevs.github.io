---
nom: Codeberg
accroche: Forge communautaire basée sur Forgejo pour les projets libres et open source
type: SaaS
categorie: depots-code-source
formule: Hébergement gratuit de projets libres avec dépôts Git, Pages et services communautaires
inclus:
  - Dépôts Git publics pour les projets libres et open source
  - Dépôts privés lorsqu’ils sont nécessaires au développement d’un projet libre
  - Forge basée sur Forgejo
  - Codeberg Pages pour l’hébergement statique
  - Codeberg CI basé sur Woodpecker après activation
  - Gestion des issues projets et collaboration
  - Hébergement de paquets conteneurs LFS et pièces jointes dans des limites raisonnables
  - Codeberg Translate pour les projets de traduction éligibles
conditions:
  - Compte Codeberg
  - Projet conforme à la mission Free/Libre Software de Codeberg
  - Licence libre appropriée attendue pour les projets publics
  - Activation du CI soumise à une demande et à une validation
restrictions:
  - Codeberg n’est pas destiné à l’hébergement privé généraliste ou commercial
  - Limite initiale de 100 dépôts avec possibilité de demander une augmentation
  - Au-delà d’environ 750 Mo de stockage Git il faut demander des ressources supplémentaires
  - Au-delà d’environ 1,5 Go pour paquets LFS et pièces jointes il faut contacter Codeberg
  - Les dépôts privés dépassant environ 100 Mo doivent être justifiés auprès de l’équipe
  - Le CI hébergé est une ressource communautaire dont les capacités ne sont pas garanties comme un service commercial
alertes:
  - type: usage
    niveau: critique
    libelle: Projets libres uniquement
    detail: Codeberg est destiné au logiciel libre et open source ; les dépôts privés ne sont admis que lorsqu’ils servent réellement le développement d’un projet libre.
  - type: fonctionnel
    niveau: important
    libelle: CI sur validation
    detail: L’accès au CI hébergé Codeberg doit être demandé et les ressources disponibles restent volontairement raisonnables et communautaires.
usages:
  - Git
  - CI/CD open source
  - Hébergement statique
  - Gestion de projet
  - Collaboration
url: https://codeberg.org/
documentation: https://docs.codeberg.org/
source: https://docs.codeberg.org/getting-started/faq/
couleur: "#2185d0"
initiales: CB
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 82
verifieLe: 2026-08-17
verificationAutomatiqueLe: 2026-08-17
verificationNote: "Codeberg vérifié comme forge communautaire Forgejo destinée aux projets libres. Les seuils de stockage et la limite initiale de dépôts sont des garde-fous de ressources et peuvent faire l’objet d’une demande d’augmentation."
---

Codeberg est une alternative communautaire aux grandes forges commerciales, opérée par une organisation à but non lucratif et basée sur Forgejo. L’offre est particulièrement intéressante pour un projet libre : dépôt Git, tickets, gestion de projet, Pages, CI et services complémentaires sont disponibles sans abonnement. En contrepartie, Codeberg applique une politique d’usage stricte afin que ses ressources restent consacrées au logiciel libre plutôt qu’à l’hébergement privé généraliste.
