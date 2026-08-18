---
nom: GerritHub
accroche: Instance Gerrit hébergée et intégrée à GitHub pour la revue de code
type: SaaS
categorie: qualite-code
formule: Service GerritHub actif ; gratuité historique à confirmer faute de grille tarifaire publique exploitable
inclus:
- Revue de code Gerrit pour dépôts GitHub
- Workflow de validation avant fusion
- Interface PolyGerrit
- Gestion des labels et exigences de soumission
conditions:
- Compte GitHub
restrictions:
- Aucune grille tarifaire publique claire n’a été trouvée lors de la vérification
- Les quotas de dépôts, utilisateurs ou revues ne sont pas publiés
alertes:
- type: fonctionnel
  niveau: important
  libelle: Gratuité à confirmer
  detail: Le service GerritHub est actif, mais aucune page tarifaire publique vérifiable ne permet de confirmer les limites exactes de son offre gratuite en 2026.
usages:
- Git
- Développement et test
url: https://gerrithub.io/
documentation: https://review.gerrithub.io/Documentation/intro-quick.html
source: https://review.gerrithub.io/Documentation/intro-quick.html
couleur: '#405780'
initiales: GH
carteRequise: false
depassementFacture: false
permanent: true
statut: a_verifier
vedette: false
ordre: 377
verifieLe: '2026-08-18'
verificationAutomatiqueLe: '2026-08-18'
verificationNote: L’instance GerritHub répond avec une version Gerrit récente, mais aucune grille de prix publique exploitable n’a été trouvée ; statut laissé à vérifier.
---

GerritHub fournit une instance Gerrit connectée à GitHub. Le service est bien actif, mais sa gratuité et ses quotas actuels ne sont pas suffisamment documentés pour être marqués comme vérifiés.
