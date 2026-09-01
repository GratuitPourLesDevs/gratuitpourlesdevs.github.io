---
nom: "Imitate Email"
accroche: "Sandbox e-mail pour tester les scénarios d’envoi pendant le développement, la QA et la CI/CD."
type: "SaaS"
categorie: "email"
formule: "Gratuité signalée ; limites actuelles à revalider avant un usage de production"
inclus: ["Sandbox e-mail pour développement, QA et CI/CD"]
conditions: []
restrictions: ["Le quota historique de 15 e-mails de test par jour doit être revalidé"]
alertes:
  - type: "fonctionnel"
    niveau: "important"
    libelle: "15/jour à revalider"
    detail: "La limite gratuite historique n’est pas assez clairement confirmée actuellement."
usages: ["E-mail transactionnel", "Applications web"]
url: "https://imitate.email/"
source: "https://imitate.email/"
couleur: "#2563EB"
initiales: "IE"
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 682
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Imitate Email fournit une boîte de réception de test destinée aux environnements build, QA et CI/CD. Elle permet de valider qu’une application produit bien les bons messages sans risquer de les envoyer à de vraies personnes, ce qui est pratique pour automatiser les scénarios d’inscription, de reset de mot de passe ou de notification. Le référentiel historique annonce 15 e-mails de test gratuits par jour ; ce plafond n’étant pas assez clairement confirmé actuellement, la fiche reste « à vérifier ».
