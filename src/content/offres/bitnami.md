---
nom: Bitnami Secure Images
accroche: Images applicatives sécurisées prêtes à déployer, avec un sous-ensemble gratuit pour le développement et les usages non-production
type: Ressource
categorie: docker-conteneurs
formule: Sous-ensemble de Bitnami Secure Images gratuit pour les usages non-production, uniquement sur le tag latest
inclus:
- Images applicatives et composants open source prêts à l’emploi
- Images OCI utilisables avec des runtimes de conteneurs et Kubernetes
- Accès gratuit à une partie du catalogue
- Images gratuites disponibles sur le tag latest
conditions:
- Utiliser les images gratuites dans des cas d’usage non-production
restrictions:
- L’ancien Bitnami Cloud Hosting avec gestion gratuite d’une micro-instance AWS n’est plus l’offre actuelle
- Le catalogue complet, les versions historiques et les usages de production nécessitent Bitnami Secure Images payant
alertes:
- type: fonctionnel
  niveau: important
  libelle: Offre historique remplacée
  detail: L’ancien plan permettant de gérer une micro-instance AWS gratuitement appartient à Bitnami Cloud Hosting historique ; le gratuit actuel concerne un sous-ensemble de Secure Images pour non-production.
usages:
- Applications conteneurisées
- Développement et test
- Kubernetes
url: https://bitnami.com/
documentation: https://docs.bitnami.com/
source: https://bitnami.com/
couleur: '#2563EB'
initiales: B
carteRequise: false
depassementFacture: false
permanent: true
statut: active
vedette: false
ordre: 514
verifieLe: '2026-08-19'
verificationAutomatiqueLe: '2026-08-19'
verificationNote: Le 19 août 2026, Bitnami confirme qu’une partie de Secure Images reste gratuite pour les usages non-production et uniquement sur le tag latest. L’ancien Developer Plan Cloud Hosting à 1 micro-instance n’est plus actuel.
---

Bitnami reste utile aux développeurs via ses images applicatives préconfigurées. La fiche est volontairement basée sur le modèle Secure Images actuel et non sur l’ancien service Bitnami Cloud Hosting.
