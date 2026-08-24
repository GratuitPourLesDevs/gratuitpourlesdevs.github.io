---
nom: Webhook.site
accroche: URL et adresse e-mail temporaires pour inspecter instantanément webhooks et requêtes HTTP
type: Ressource
categorie: tests
formule: Free sans compte avec URL/e-mail temporaires pendant 7 jours et quota de requêtes limité
inclus:
- URL unique gratuite
- Adresse e-mail unique gratuite
- Inspection en temps réel des requêtes et e-mails
- DNSHook temporaire
- Aucune inscription nécessaire
conditions: []
restrictions:
- URL et données supprimées automatiquement après 7 jours
- La documentation 2026 indique 50 à 100 requêtes selon les pages en transition ; la fiche retient 50 comme plafond prudent
- Les données Free sont accessibles à toute personne connaissant l’identifiant de l’URL
- URLs permanentes et données privées nécessitent un abonnement
alertes:
- type: fonctionnel
  niveau: important
  libelle: Données non privées sur Free
  detail: Les URLs gratuites ne sont pas protégées par un compte ; toute personne connaissant leur identifiant peut consulter les données.
usages:
- Webhook local
- API
- Développement et test
url: https://webhook.site/
documentation: https://docs.webhook.site/
source: https://docs.webhook.site/pro.html
couleur: '#4F46E5'
initiales: WS
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 442
verifieLe: 2026-08-24
verificationAutomatiqueLe: 2026-08-24
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
---

Webhook.site est l’un des moyens les plus rapides pour voir ce qu’un service envoie réellement à un webhook ou à une adresse e-mail temporaire. Le Free est parfait pour du debug ponctuel, mais pas pour stocker des données sensibles ou durables.
