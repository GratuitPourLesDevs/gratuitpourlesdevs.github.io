---
nom: "KaiMail"
accroche: "Transfert d’e-mails sur domaine personnalisé avec signatures ARC/DKIM."
type: "SaaS"
categorie: "email"
formule: "Basic Free : 1 domaine, 1 boîte et 300 e-mails reçus par mois"
inclus: ["1 domaine personnalisé", "1 boîte", "300 e-mails reçus/mois", "ARC/DKIM", "Logs 1 jour"]
conditions: []
restrictions: ["300 correspond aux e-mails reçus, pas aux envois", "Taille de message limitée à 1 Mo", "Webhook réservé à un plan supérieur"]
alertes:
  - type: "usage"
    niveau: "important"
    libelle: "300 réceptions par mois"
    detail: "Le quota gratuit concerne les e-mails reçus ; le webhook n’est pas inclus en Basic Free."
usages: ["E-mail transactionnel", "Applications web"]
url: "https://kaimail.net/"
source: "https://kaimail.net/"
couleur: "#2563EB"
initiales: "KA"
carteRequise: false
depassementFacture: false
permanent: true
statut: "a_verifier"
vedette: false
ordre: 686
verifieLe: "2026-08-19"
verificationAutomatiqueLe: 2026-08-24
verificationNote: "Source accessible, mais aucune mention explicite de gratuité détectée."
---

KaiMail fournit du forwarding pour un domaine personnalisé tout en appliquant des signatures ARC/DKIM. Le plan Basic gratuit comprend un domaine, une mailbox et jusqu’à 300 e-mails reçus par mois, avec une taille maximale d’un mégaoctet et un jour de logs. Le mot important est « reçus » : ce quota ne décrit pas un service d’envoi de 300 messages. Le webhook de réception cité dans certaines descriptions appartient par ailleurs à une offre supérieure et n’est pas inclus dans ce Free Tier.
