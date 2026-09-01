---
nom: "SendBridge Mail Tester"
accroche: "Test de délivrabilité sans inscription analysant SPF, DKIM, DMARC, spam, blacklists et reverse DNS."
type: "Ressource"
categorie: "email"
formule: "Gratuité signalée ; limites actuelles à revalider avant un usage de production"
inclus: ["SPF/DKIM/DMARC", "Score spam", "Blacklists RBL", "Reverse DNS", "Analyse de contenu", "Rapport partageable"]
conditions: []
restrictions: ["L’affirmation de tests illimités doit être revalidée sur le service actuel"]
alertes:
  - type: "fonctionnel"
    niveau: "important"
    libelle: "Illimité à revalider"
    detail: "Le service reste référencé comme test gratuit, mais l’absence totale de quota doit être reconfirmée."
usages: ["Développement et test", "E-mail transactionnel", "DNS"]
url: "https://sendbridge.com/mail-tester"
source: "https://sendbridge.com/mail-tester"
couleur: "#2563EB"
initiales: "SM"
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 708
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

SendBridge Mail Tester génère une adresse vers laquelle envoyer un message, puis produit un diagnostic de délivrabilité couvrant SPF, DKIM, DMARC, score spam, listes RBL, reverse DNS et contenu. Le rapport partageable est pratique pour transmettre un diagnostic à une équipe ou un client. Le référentiel indique des tests gratuits et illimités sans inscription ; l’outil reste pertinent, mais l’absence totale de limite n’étant pas suffisamment confirmée actuellement, cette partie est signalée « à vérifier ».
