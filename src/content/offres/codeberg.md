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
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Codeberg est un bon choix pour héberger un logiciel libre dans une forge gouvernée par une organisation à but non lucratif plutôt que par une plateforme commerciale. Un mainteneur peut y publier son dépôt, suivre les tickets et les contributions, héberger une documentation avec Pages et demander l’accès au CI sans abonnement. Cette gratuité couvre un véritable cycle de développement open source, avec des volumes raisonnables et jusqu’à 100 dépôts au départ. Codeberg n’est toutefois pas une forge privée généraliste : un projet propriétaire, un gros stockage d’artefacts ou une CI exigeante doit être orienté vers une autre solution, et les dépôts privés doivent servir un projet libre.
