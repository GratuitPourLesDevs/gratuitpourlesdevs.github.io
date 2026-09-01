---
nom: Savannah non-GNU
accroche: Forge collaborative gratuite pour les projets de logiciel libre hors projet GNU
type: SaaS
categorie: depots-code-source
formule: Hébergement gratuit des projets de logiciel libre non-GNU après validation
inclus:
  - Hébergement de projets de logiciel libre indépendants du projet GNU
  - Dépôts Git
  - Prise en charge d’autres systèmes de contrôle de version
  - Suivi de bugs et tâches
  - Listes de diffusion et outils collaboratifs
  - Gestion de projet pour le développement logiciel libre
conditions:
  - Projet de logiciel libre
  - Projet pouvant fonctionner sur un système d’exploitation libre
  - Absence de dépendances propriétaires incompatibles avec les critères Savannah
  - Demande de projet examinée avant activation
restrictions:
  - Les projets non libres ou dépendants obligatoirement de composants propriétaires sont refusés
  - L’instance n’est pas destinée aux projets dont le développement principal se déroule ailleurs et qui cherchent seulement du stockage
  - Aucun quota de stockage chiffré n’est publié comme offre commerciale
alertes:
  - type: usage
    niveau: critique
    libelle: Validation logiciel libre
    detail: Chaque projet doit satisfaire les critères de logiciel libre de Savannah et être approuvé avant de pouvoir utiliser l’hébergement non-GNU.
usages:
  - Git
  - Gestion de projet
  - Collaboration
url: https://savannah.nongnu.org/
documentation: https://savannah.gnu.org/maintenance/WhyChooseSavannah/
source: https://savannah.nongnu.org/
couleur: "#5e8c31"
initiales: SN
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 91
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Savannah non-GNU utilise la même infrastructure collaborative que GNU Savannah mais accueille les logiciels libres qui ne font pas partie du projet GNU. La contrepartie de cette gratuité est une vraie sélection éditoriale : le projet doit être libre, pouvoir fonctionner dans un environnement libre et être approuvé avant création. Pour un projet éligible, la forge fournit gratuitement dépôt de code, suivi de bugs, tâches et outils communautaires.
