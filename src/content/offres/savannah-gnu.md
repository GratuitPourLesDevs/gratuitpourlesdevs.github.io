---
nom: GNU Savannah
accroche: Forge collaborative officielle pour les logiciels et composants du projet GNU
type: SaaS
categorie: depots-code-source
formule: Hébergement gratuit des projets GNU approuvés avec contrôle de version et outils collaboratifs
inclus:
  - Hébergement de code pour les projets GNU
  - Dépôts Git disponibles
  - Autres systèmes de contrôle de version proposés selon les besoins
  - Suivi de bugs et tâches
  - Listes de diffusion et outils de collaboration
  - Gestion collaborative du développement logiciel libre
conditions:
  - Projet faisant partie du projet GNU ou composant GNU éligible
  - Logiciel libre conforme aux exigences de Savannah
  - Projet soumis à validation avant hébergement
  - Développement principal attendu sur Savannah
restrictions:
  - Réservé aux projets GNU éligibles
  - Dépendances propriétaires incompatibles avec les critères d’acceptation
  - Savannah n’est pas un simple espace de stockage ou miroir
  - Aucun quota de stockage chiffré n’est publié comme offre commerciale
alertes:
  - type: usage
    niveau: critique
    libelle: Projets GNU uniquement
    detail: Cette instance Savannah est destinée aux projets GNU approuvés ; un projet libre indépendant doit utiliser Savannah non-GNU à la place.
usages:
  - Git
  - Gestion de projet
  - Collaboration
url: https://savannah.gnu.org/
documentation: https://savannah.gnu.org/maintenance/WhyChooseSavannah/
source: https://savannah.gnu.org/
couleur: "#a42e2b"
initiales: SG
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 90
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

GNU Savannah fournit une infrastructure de développement collaborative pour les logiciels appartenant au projet GNU : dépôts de code, suivi de bugs et tâches, listes de diffusion et autres outils historiques du développement libre. Il ne s’agit pas d’une forge gratuite généraliste : l’admission du projet et sa conformité aux principes du logiciel libre font partie intégrante de l’offre.
