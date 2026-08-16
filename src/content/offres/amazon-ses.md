---
nom: Amazon SES
accroche: Envoi et réception d’e-mails transactionnels à grande échelle
type: SaaS
categorie: email
formule: Jusqu’à 200 $ de crédits AWS applicables à SES pendant le plan gratuit de 6 mois
inclus: [Accès au plan AWS gratuit pendant 6 mois après la création du compte, Jusqu’à 200 dollars de crédits AWS applicables aux usages SES éligibles, Envoi d’e-mails transactionnels ou marketing, Réception et traitement d’e-mails, Intégration avec les applications et services AWS]
conditions: [Nouveau compte AWS éligible au Free Tier, Compte et identité d’envoi SES configurés, Domaine ou adresse d’expéditeur vérifiés, Demande de sortie du bac à sable SES nécessaire pour envoyer librement]
restrictions: [Crédits mutualisés entre les services AWS et non réservés à SES, Montant maximal dépendant des crédits obtenus dans le programme AWS Free Tier, Plan gratuit limité à 6 mois après la création du compte, Tarification SES standard appliquée après épuisement des crédits ou expiration du plan, Pièces jointes adresses IP dédiées validation d’e-mails Mail Manager stockage S3 SNS et CloudWatch susceptibles d’être facturés]
alertes:
  - type: operationnel
    niveau: critique
    libelle: Gratuit pendant 6 mois
    detail: Le plan gratuit prend fin six mois après la création du compte AWS.
  - type: finance
    niveau: critique
    libelle: Facturé après expiration
    detail: La tarification standard s’applique après épuisement des crédits ou expiration du plan.
usages: [E-mail transactionnel, E-mail marketing, SMTP]
url: https://aws.amazon.com/ses/
documentation: https://docs.aws.amazon.com/ses/latest/dg/Welcome.html
source: https://aws.amazon.com/ses/pricing/
couleur: "#ff9900"
initiales: SE
carteRequise: true
depassementFacture: true
permanent: false
statut: active
vedette: false
ordre: 24
verifieLe: 2026-08-13
verificationAutomatiqueLe: 2026-08-13
verificationNote: "Offre actualisée après le changement tarifaire du 21 juillet 2026 : l’ancien quota de 3 000 messages est remplacé par les crédits AWS Free Tier."
---

Amazon Simple Email Service fournit des API et une interface SMTP pour envoyer et recevoir des e-mails. L’ancien quota de 3 000 charges de messages par mois n’est plus présenté dans la tarification actuelle : les nouveaux clients utilisent désormais les crédits partagés du programme AWS Free Tier, pendant une durée maximale de six mois sur le plan gratuit.
