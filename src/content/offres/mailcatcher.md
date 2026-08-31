---
nom: "MailCatcher"
accroche: "Serveur SMTP local qui capture les e-mails de développement et les affiche dans une interface web."
type: "Ressource"
categorie: "email"
formule: "Gratuité signalée ; limites actuelles à revalider avant un usage de production"
inclus: ["SMTP local", "Capture des messages", "Interface web d’inspection"]
conditions: []
restrictions: ["Outil de développement local, pas un service d’envoi de production"]
alertes:
  - type: "fonctionnel"
    niveau: "important"
    libelle: "Usage local"
    detail: "MailCatcher sert à capturer des messages de test et ne remplace pas un relais SMTP de production."
usages: ["Développement et test", "E-mail transactionnel"]
url: "https://mailcatcher.me/"
source: "https://mailcatcher.me/"
couleur: "#2563EB"
initiales: "MA"
carteRequise: false
depassementFacture: false
permanent: true
statut: "a_verifier"
vedette: false
ordre: 689
verifieLe: "2026-08-19"
verificationAutomatiqueLe: 2026-08-31
verificationNote: "Source accessible, mais aucune mention explicite de gratuité détectée ; statut éditorial conservé pour contrôle manuel."
verificationEtat: "controle_requis"
verificationCode: "gratuit_non_detecte"
verificationEchecsConsecutifs: 1
---

MailCatcher se lance localement comme un faux serveur SMTP : l’application lui envoie ses messages, puis le développeur les ouvre dans une interface web au lieu de les expédier réellement. Cela simplifie énormément les tests de templates, liens de confirmation et pièces jointes tout en supprimant le risque de contacter de vrais utilisateurs. Le projet est historiquement gratuit et open source ; son état de maintenance actuel devant être reconfirmé, il est conservé avec un statut « à vérifier ».
