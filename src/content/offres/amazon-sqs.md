---
nom: Amazon SQS
accroche: Files de messages managées pour découpler les applications
type: PaaS
categorie: messagerie-streaming
formule: 1 million de requêtes de messagerie gratuites par mois
inclus: [1 million de requêtes Amazon SQS par mois, Files Standard à débit élevé, Files FIFO avec ordre et déduplication, Envoi réception suppression et modification de visibilité via API, Transfert sans frais lorsque toutes les ressources restent dans la même région AWS]
conditions: [Compte AWS, Compte de facturation et moyen de paiement configurés, Files politiques d’accès et producteurs ou consommateurs configurés, Quota gratuit partagé entre les régions hors GovCloud]
restrictions: [Chaque action API compte comme une requête, Chaque tranche de 64 Ko du payload compte comme une requête, Requêtes FIFO facturées au tarif FIFO après le quota, Requêtes Fair Queue susceptibles de cumuler les tarifs Standard et Fair Queue, Usage gratuit inutilisé non reporté au mois suivant, Transferts interrégion Internet stockage S3 et appels KMS susceptibles d’être facturés]
alertes:
  - type: finance
    niveau: critique
    libelle: Dépassement facturé
    detail: Les requêtes et services associés dépassant les quotas gratuits sont facturés au tarif AWS applicable.
usages: [Files de messages, Traitement asynchrone, Découplage de services]
url: https://aws.amazon.com/sqs/
documentation: https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/welcome.html
source: https://aws.amazon.com/sqs/pricing/
couleur: "#ff9900"
initiales: SQ
carteRequise: true
depassementFacture: true
permanent: true
statut: "active"
vedette: false
ordre: 25
verifieLe: 2026-08-31
verificationAutomatiqueLe: 2026-08-31
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Amazon Simple Queue Service stocke les messages entre producteurs et consommateurs afin d’absorber les pointes de charge et de découpler les composants. Une requête peut transporter jusqu’à dix messages, dans la limite d’un payload total de 1 Mio, mais chaque tranche de 64 Ko reste comptabilisée séparément.
