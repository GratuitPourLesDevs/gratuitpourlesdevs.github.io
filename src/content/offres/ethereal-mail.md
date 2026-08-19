---
nom: "Ethereal Email"
accroche: "Faux service SMTP destiné au développement : les messages sont capturés pour inspection et ne sont jamais délivrés."
type: "Ressource"
categorie: "email"
formule: "Gratuité signalée ; limites actuelles à revalider avant un usage de production"
inclus: ["SMTP de test", "Messages non délivrés aux destinataires réels", "Inspection des messages"]
conditions: []
restrictions: ["Ce service ne doit pas être utilisé pour envoyer de vrais e-mails en production"]
alertes:
  - type: "fonctionnel"
    niveau: "important"
    libelle: "Uniquement pour les tests"
    detail: "Les messages Ethereal sont capturés pour inspection et ne sont pas remis aux destinataires."
usages: ["Développement et test", "E-mail transactionnel"]
url: "https://ethereal.email/"
source: "https://ethereal.email/"
couleur: "#2563EB"
initiales: "EE"
carteRequise: false
depassementFacture: false
permanent: true
statut: "a_verifier"
vedette: false
ordre: 680
verifieLe: "2026-08-19"
verificationAutomatiqueLe: "2026-08-19"
verificationNote: "Le service est historiquement entièrement gratuit ; disponibilité et politique actuelles à revalider."
---

Ethereal Email est volontairement l’inverse d’un service transactionnel de production : il accepte des messages SMTP mais ne les remet jamais à de vrais destinataires. Les e-mails peuvent ensuite être inspectés pour vérifier HTML, headers, pièces jointes et rendu, ce qui en fait un excellent outil pour Nodemailer, EmailEngine et les tests d’intégration. Le service est historiquement gratuit ; faute de grille contractuelle actuelle clairement publiée, la fiche reste cependant marquée « à vérifier ».
