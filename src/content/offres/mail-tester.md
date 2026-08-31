---
nom: "Mail-Tester"
accroche: "Test de délivrabilité qui analyse SPF, DKIM, DMARC, contenu et réputation d’un e-mail envoyé vers une adresse dédiée."
type: "Ressource"
categorie: "email"
formule: "Gratuité signalée ; limites actuelles à revalider avant un usage de production"
inclus: ["Analyse SPF/DKIM/DMARC", "Analyse de contenu et réputation"]
conditions: []
restrictions: ["Le quota historique de 20 tests gratuits par mois doit être revalidé"]
alertes:
  - type: "fonctionnel"
    niveau: "important"
    libelle: "20/mois à revalider"
    detail: "Le nombre de tests gratuits disponible actuellement doit être confirmé."
usages: ["Développement et test", "E-mail transactionnel", "DNS"]
url: "https://www.mail-tester.com/"
source: "https://www.mail-tester.com/"
couleur: "#2563EB"
initiales: "MT"
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 687
verifieLe: 2026-08-31
verificationAutomatiqueLe: 2026-08-31
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Mail-Tester est un diagnostic de délivrabilité très pratique : on envoie un message à l’adresse générée et l’outil examine ensuite authentification DNS, contenu, réputation et signaux susceptibles de déclencher du spam. Il aide donc autant lors du premier paramétrage d’un domaine que pour analyser une campagne qui arrive mal en boîte de réception. La référence historique indique 20 tests gratuits par mois ; ce quota n’étant pas suffisamment confirmé actuellement, il est explicitement marqué à revalider.
