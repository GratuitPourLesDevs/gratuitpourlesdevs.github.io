---
nom: Amazon SNS
accroche: Messagerie publish-subscribe managée pour applications et utilisateurs
type: PaaS
categorie: messagerie-streaming
formule: 1 million de publications, 100 000 livraisons HTTP/S et 1 000 e-mails par mois
inclus: [1 million de publications sur des topics Standard par mois, 100 000 livraisons HTTP ou HTTPS par mois, 1 000 livraisons par e-mail par mois, Livraison vers Amazon SQS et AWS Lambda sans frais par message, Filtrage des messages basé sur les attributs sans supplément]
conditions: [Compte AWS, Compte de facturation et moyen de paiement configurés, Topics abonnements et politiques d’accès SNS configurés, Endpoints de livraison confirmés lorsque nécessaire]
restrictions: [Chaque tranche de 64 Ko d’un message Standard compte comme une requête et une livraison, Topics FIFO facturés selon les messages publiés abonnés et le volume de données, SMS facturés selon le pays et l’identité d’origine, Transferts de données vers SQS Lambda ou entre régions susceptibles d’être facturés, Filtrage sur le contenu archivage rejeu protection des données KMS et stockage S3 facturés séparément]
alertes:
  - type: finance
    niveau: critique
    libelle: Dépassement facturé
    detail: Les publications, livraisons et services associés hors quota gratuit sont facturés.
usages: [Pub/Sub, Notifications, Événements]
url: https://aws.amazon.com/sns/
documentation: https://docs.aws.amazon.com/sns/latest/dg/welcome.html
source: https://aws.amazon.com/sns/pricing/
couleur: "#ff9900"
initiales: SN
carteRequise: true
depassementFacture: true
permanent: true
statut: "active"
vedette: false
ordre: 23
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Amazon Simple Notification Service distribue un message publié vers plusieurs consommateurs : services AWS, endpoints HTTP/S, applications mobiles ou utilisateurs. La formule gratuite couvre séparément les publications et certains canaux de livraison ; une seule publication envoyée à plusieurs abonnés peut donc consommer plusieurs quotas.
