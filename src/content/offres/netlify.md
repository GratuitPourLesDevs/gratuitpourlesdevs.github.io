---
nom: Netlify
accroche: Plateforme de déploiement web avec CDN, CI/CD, fonctions et previews basée sur un budget mensuel de crédits.
type: PaaS
categorie: paas
formule: 'Free : 300 crédits par mois avec limite dure et mise en pause des projets à épuisement'
inclus:
- 300 crédits par mois
- Déploiements depuis Git
- Deploy Previews
- Domaines personnalisés et SSL
- CDN mondial
- Functions et fonctions edge selon consommation de crédits
- Stockage Blob et services de données selon crédits
conditions: []
restrictions:
- Les déploiements de production, la bande passante, les requêtes et le compute consomment le même budget de crédits
- À 0 crédit, les projets sont mis en pause jusqu’au prochain cycle
- Pas de recharge automatique sur le plan Free
alertes:
- type: usage
  niveau: important
  libelle: Budget partagé de 300 crédits
  detail: Tous les principaux usages du projet consomment le même budget mensuel et le projet est mis en pause lorsqu’il est épuisé.
usages:
- Déploiement cloud
- CI/CD
- CDN
- Fonctions serverless
url: https://www.netlify.com/
source: https://www.netlify.com/pricing/
couleur: '#00C7B7'
initiales: NL
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 878
verifieLe: 2026-08-24
verificationAutomatiqueLe: 2026-08-24
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
---

Netlify reste très utile pour transformer un dépôt Git en application web déployée automatiquement avec preview, domaine, SSL et CDN. Le Free permet toujours de mener un vrai petit projet, mais son fonctionnement est désormais plus facile à comprendre comme un budget commun de 300 crédits que comme une liste de quotas indépendants. Cette souplesse est pratique si l’application consomme peu de compute ou de trafic. Une fois le budget épuisé, le comportement est protecteur côté coût : le projet se met en pause au lieu de déclencher une recharge automatique.
