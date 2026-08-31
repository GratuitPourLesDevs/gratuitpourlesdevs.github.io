---
nom: GitGud
accroche: Forge GitLab communautaire avec dépôts privés, CI, Pages et registre de conteneurs
type: SaaS
categorie: depots-code-source
formule: Dépôts publics et privés gratuits avec stockage de projet non plafonné pour le code
inclus:
  - Dépôts Git publics et privés
  - Stockage de projet non plafonné pour les usages de code et développement
  - GitLab Pages pour l’hébergement statique
  - Pipelines CI/CD partagés après demande d’accès
  - Registre de conteneurs gratuit via ggcr.io
  - Issues tableaux Kanban groupes et gestion de projet
conditions:
  - Compte GitGud
  - Respect des conditions d’usage et des ressources partagées
  - Demande d’accès nécessaire pour utiliser les runners CI partagés
restrictions:
  - Le stockage illimité concerne le code et les fichiers utiles au développement et non le stockage de masse
  - Utilisation comme CDN ou hébergeur de gros fichiers interdite
  - Minage de cryptomonnaies et pipelines CI sans fin interdits
  - Aucun nombre maximal de dépôts n’est actuellement publié comme quota vérifiable
alertes:
  - type: fonctionnel
    niveau: important
    libelle: CI sur demande
    detail: Les runners CI/CD partagés gratuits ne sont pas activés automatiquement et nécessitent une demande auprès de l’équipe GitGud.
  - type: usage
    niveau: important
    libelle: Stockage réservé au développement
    detail: L’absence de plafond de stockage ne permet pas d’utiliser GitGud comme espace de sauvegarde, CDN ou stockage généraliste.
usages:
  - Git
  - Dépôts privés
  - CI/CD
  - Hébergement statique
  - Gestion de projet
url: https://gitgud.io/
source: https://gitgud.io/-/users/terms
couleur: "#e24329"
initiales: GG
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 84
verifieLe: 2026-08-31
verificationAutomatiqueLe: 2026-08-31
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

GitGud propose une expérience proche d’une instance GitLab complète : dépôts privés, tickets, tableaux, Pages, pipelines et registre de conteneurs. Le service est particulièrement généreux sur le stockage lié au développement, mais ses conditions interdisent explicitement les détournements en stockage de masse ou en CDN. Le CI gratuit existe également, avec une activation manuelle afin de protéger les ressources partagées.
