---
nom: "Temp-Mail.io"
accroche: "Service d’adresses e-mail temporaires pour recevoir des messages sans exposer son adresse principale."
type: "Ressource"
categorie: "email"
formule: "Gratuité signalée ; limites actuelles à revalider avant un usage de production"
inclus: ["Adresses e-mail temporaires", "Réception de messages de test"]
conditions: []
restrictions: ["Les fonctions historiques de boîtes multiples et forwarding doivent être revalidées"]
alertes:
  - type: "fonctionnel"
    niveau: "important"
    libelle: "Fonctions à revalider"
    detail: "Le service reste utile comme inbox temporaire, mais ses fonctions gratuites exactes doivent être confirmées."
usages: ["Développement et test", "E-mail transactionnel"]
url: "https://temp-mail.io/"
source: "https://temp-mail.io/"
couleur: "#2563EB"
initiales: "TM"
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 716
verifieLe: 2026-08-31
verificationAutomatiqueLe: 2026-08-31
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Temp-Mail.io fournit des adresses jetables destinées à recevoir rapidement un message sans utiliser sa boîte personnelle. Pour un développeur, c’est pratique pour répéter un parcours d’inscription, vérifier un e-mail de confirmation ou tester une logique qui impose une adresse différente à chaque scénario. Le référentiel mentionne historiquement plusieurs adresses simultanées et du forwarding dans le niveau gratuit. Ces fonctions exactes n’étant pas suffisamment revalidées aujourd’hui, la fiche reste « à vérifier ».
