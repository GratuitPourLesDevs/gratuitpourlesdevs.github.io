---
nom: RequestBin by Pipedream
accroche: Endpoint HTTP temporaire pour inspecter requêtes, webhooks, payloads et en-têtes
type: SaaS
categorie: tests
formule: RequestBin est intégré à Pipedream ; usage gratuit soumis aux limites du plan Pipedream
inclus:
  - Création d’un endpoint HTTP
  - Capture de requêtes entrantes
  - Inspection des payloads
  - Inspection des en-têtes
  - Historique des événements récents dans l’interface
  - Intégration avec les sources et workflows Pipedream
conditions:
  - Compte Pipedream pour conserver et gérer les endpoints dans l’interface
restrictions:
  - L’ancien service RequestBin autonome a été intégré à Pipedream
  - Aucun quota numérique propre à RequestBin n’est publié séparément
  - Les limites du workspace Pipedream gratuit s’appliquent
alertes: []
usages:
  - API
  - Tests
  - Webhook local
url: https://pipedream.com/requestbin
documentation: https://pipedream.com/docs/workflows/steps/triggers/#http
source: https://pipedream.com/requestbin
couleur: "#111111"
initiales: RB
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 229
verifieLe: 2026-08-18
verificationAutomatiqueLe: 2026-08-18
verificationNote: "RequestBin est désormais fourni par Pipedream. Aucun plafond distinct RequestBin n’est publié ; la fiche ne présente donc pas de quota chiffré inventé."
---

RequestBin est utile pour comprendre exactement ce qu’un fournisseur de webhook envoie à votre application. La version actuelle vit dans Pipedream et permet de capturer puis inspecter rapidement les requêtes HTTP sans préparer un serveur de test.
