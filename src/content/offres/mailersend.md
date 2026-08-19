---
nom: "MailerSend"
accroche: "API et SMTP d’e-mail transactionnel avec templates, webhooks, routage entrant et validation."
type: "API"
categorie: "email"
formule: "Free : 500 e-mails par mois, 100 par jour et 100 requêtes API par jour"
inclus: ["500 e-mails/mois", "100 e-mails/jour", "100 requêtes API/jour", "1 domaine", "1 template", "1 webhook", "1 route entrante"]
conditions: []
restrictions: ["Les dépassements ne sont pas disponibles sur le plan Free", "Rétention d’activité 24 h"]
alertes:
  - type: "usage"
    niveau: "important"
    libelle: "500 e-mails par mois"
    detail: "Le plan gratuit est hard-capped et ne propose pas d’overage."
usages: ["API", "E-mail transactionnel", "Développement et test"]
url: "https://www.mailersend.com/"
source: "https://www.mailersend.com/pricing"
couleur: "#2563EB"
initiales: "MA"
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 694
verifieLe: "2026-08-19"
verificationAutomatiqueLe: "2026-08-19"
verificationNote: "Free vérifié : 500 e-mails/mois, 100/jour, 100 requêtes API/jour."
---

MailerSend propose API, SMTP, templates, webhook et routage entrant dans une offre pensée pour les e-mails transactionnels. Le niveau gratuit est modeste mais exploitable pour un prototype : 500 messages par mois, 100 par jour et 100 appels API quotidiens, avec un domaine, un template, un webhook et une route entrante. L’activité n’est conservée que 24 heures et le Free est bloquant plutôt que facturé en dépassement, ce qui évite les mauvaises surprises mais impose de surveiller les quotas.
