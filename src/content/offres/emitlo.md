---
nom: "Emitlo"
accroche: "Service SMTP et API pour envoyer des e-mails transactionnels avec authentification de domaine."
type: "API"
categorie: "email"
formule: "Gratuité signalée ; limites actuelles à revalider avant un usage de production"
inclus: ["SMTP et API d’e-mail transactionnel", "Support SPF/DKIM/DMARC annoncé"]
conditions: []
restrictions: ["Le quota historique de 12 000 e-mails gratuits par mois doit être revalidé"]
alertes:
  - type: "fonctionnel"
    niveau: "important"
    libelle: "12 000 à revalider"
    detail: "Le volume gratuit historique n’est pas assez clairement confirmé par une source officielle actuelle."
usages: ["API", "E-mail transactionnel", "Développement et test"]
url: "https://emitlo.com/"
source: "https://emitlo.com/"
couleur: "#2563EB"
initiales: "EM"
carteRequise: false
depassementFacture: false
permanent: true
statut: "a_verifier"
vedette: false
ordre: 679
verifieLe: "2026-08-19"
verificationAutomatiqueLe: 2026-08-24
verificationNote: "Vérification automatique incomplète : HTTP 403."
---

Emitlo se positionne comme une infrastructure d’envoi transactionnel accessible par SMTP ou API, avec les mécanismes classiques d’authentification de domaine comme SPF, DKIM et DMARC. La description historique mentionne un niveau gratuit de 12 000 e-mails par mois sans carte, ce qui serait très généreux pour un petit produit. Cette valeur n’étant pas suffisamment confirmée sur une source officielle actuelle, la fiche conserve le service mais signale explicitement le quota comme à revalider.
