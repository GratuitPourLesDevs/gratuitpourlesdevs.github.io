---
nom: "Postmark"
accroche: "Service d’e-mail transactionnel axé sur la délivrabilité, l’API et SMTP."
type: "API"
categorie: "email"
formule: "Developer Free : 100 e-mails par mois, sans dépassement"
inclus: ["100 e-mails/mois", "API", "SMTP", "Domaines d’envoi personnalisés"]
conditions: []
restrictions: ["Seulement 100 e-mails mensuels", "Aucun dépassement sur le plan Free"]
alertes:
  - type: "usage"
    niveau: "important"
    libelle: "100 e-mails par mois"
    detail: "Le Developer Free est volontairement petit et ne propose pas de dépassement."
usages: ["API", "E-mail transactionnel", "Développement et test"]
url: "https://postmarkapp.com/"
source: "https://postmarkapp.com/pricing"
couleur: "#2563EB"
initiales: "PO"
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 704
verifieLe: 2026-08-24
verificationAutomatiqueLe: 2026-08-24
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
---

Postmark est un service transactionnel reconnu pour sa focalisation sur la délivrabilité et la séparation claire des flux applicatifs. Son plan Developer gratuit est permanent mais très petit : 100 e-mails par mois via API ou SMTP, avec possibilité d’utiliser ses domaines d’envoi. C’est surtout un niveau destiné à développer, tester et valider l’intégration plutôt qu’à faire fonctionner une application active. Une fois les 100 messages consommés, le Free ne bascule pas en dépassement automatique : il faut changer de plan.
