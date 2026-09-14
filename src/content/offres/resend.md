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
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Resend est adapté à un side project ou une petite application qui doit envoyer des confirmations d’inscription, liens de connexion, reçus ou alertes depuis une API claire, sans exploiter son propre serveur SMTP. Le plan gratuit permet 3 000 e-mails par mois avec un maximum de 100 par jour, un domaine d’envoi, 30 jours de conservation des données et un quota d’automatisations. Ces limites suffisent pour tester toute la chaîne — domaine, modèles, délivrabilité et webhooks — puis servir une audience encore modeste en production. Le plafond quotidien compte toutefois autant que le quota mensuel : une campagne ponctuelle ou une hausse rapide des inscriptions peut le saturer même si le mois reste peu consommé. Le Free n’offrant pas de dépassement pay-as-you-go, il faut passer explicitement à une formule supérieure avant d’augmenter les volumes ou de multiplier les domaines.
