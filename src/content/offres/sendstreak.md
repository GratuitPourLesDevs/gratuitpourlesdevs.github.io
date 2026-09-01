---
nom: "SendStreak"
accroche: "Couche de templates, automatisations et historique au-dessus d’un serveur SMTP existant."
type: "SaaS"
categorie: "email"
formule: "Gratuité signalée ; limites actuelles à revalider avant un usage de production"
inclus: ["Templates", "Automatisations", "Historique au-dessus d’un SMTP existant"]
conditions: []
restrictions: ["Le quota historique de 100 e-mails/jour doit être revalidé", "Les coûts du serveur SMTP utilisé restent séparés"]
alertes:
  - type: "fonctionnel"
    niveau: "important"
    libelle: "Quota à revalider"
    detail: "Les 100 e-mails/jour historiquement annoncés doivent être confirmés sur l’offre actuelle."
usages: ["E-mail transactionnel", "Automatisation", "SMTP"]
url: "https://www.sendstreak.com/"
source: "https://www.sendstreak.com/"
couleur: "#2563EB"
initiales: "SE"
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 711
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

SendStreak ajoute une couche de produit au-dessus d’un SMTP que l’on possède déjà, par exemple AWS SES, Gmail ou un autre relais : templates, automatisations et historique sont gérés séparément de l’infrastructure d’envoi. Cette architecture peut être intéressante pour conserver le choix du fournisseur SMTP tout en ajoutant des fonctions applicatives. Le référentiel annonce historiquement 100 e-mails par jour gratuitement, sans limite de durée. Ce quota n’étant pas suffisamment confirmé actuellement, la fiche reste « à vérifier ».
