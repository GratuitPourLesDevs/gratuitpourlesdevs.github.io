---
nom: "Resend"
accroche: "API d’e-mail transactionnel pour développeurs avec domaines personnalisés, logs et automatisations."
type: "API"
categorie: "email"
formule: "Free : 3 000 e-mails par mois, 100 par jour et 1 domaine"
inclus: ["3 000 e-mails/mois", "100 e-mails/jour", "1 domaine", "Logs 30 jours", "10 000 automation runs/mois"]
conditions: []
restrictions: ["Les dépassements PAYG sont réservés aux plans payants"]
alertes:
  - type: "usage"
    niveau: "important"
    libelle: "100 e-mails par jour"
    detail: "Le quota de 3 000/mois reste soumis à un plafond de 100 envois quotidiens."
usages: ["API", "E-mail transactionnel", "Développement et test"]
url: "https://resend.com/"
source: "https://resend.com/pricing"
couleur: "#2563EB"
initiales: "RE"
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 707
verifieLe: 2026-08-31
verificationAutomatiqueLe: 2026-08-31
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Resend est une API transactionnelle conçue avec une expérience très orientée développeur. Le plan gratuit permet 3 000 e-mails par mois, au maximum 100 par jour, sur un domaine, avec 30 jours de conservation des données et jusqu’à 10 000 exécutions d’automatisations mensuelles. C’est suffisant pour un side project ou une petite application en production. Les dépassements pay-as-you-go ne sont pas disponibles sur le Free : si les volumes augmentent, il faut passer explicitement à un plan payant.
