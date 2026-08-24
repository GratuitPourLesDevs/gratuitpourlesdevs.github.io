---
nom: UseWebhook
accroche: Capturer, inspecter, rejouer et transférer des webhooks vers localhost
type: Ressource
categorie: tests
formule: Gratuit sans compte avec plusieurs URL et nombre de requêtes non plafonné publiquement
inclus:
- Aucune inscription requise
- Plusieurs URL de webhook
- Requêtes envoyées sans quota chiffré annoncé
- Inspection headers, body et métadonnées
- Forward vers localhost via CLI
- Replay depuis l’historique
conditions: []
restrictions:
- 20 requêtes récentes conservées par URL
- Corps de requête limité à 10 kB
- Certaines opérations sont rate-limitées contre les abus
alertes: []
usages:
- Webhook local
- API
- Développement et test
url: https://usewebhook.com/
documentation: https://usewebhook.com/faq
source: https://usewebhook.com/faq
couleur: '#111827'
initiales: UW
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 440
verifieLe: 2026-08-24
verificationAutomatiqueLe: 2026-08-24
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
---

UseWebhook fournit un endpoint temporaire immédiatement exploitable pour examiner les payloads reçus, les rejouer ou les faire suivre vers un serveur local. C’est un outil simple et très pratique pendant le développement d’intégrations.
