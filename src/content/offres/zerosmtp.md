---
nom: "ZeroSMTP"
accroche: "Relais SMTP gratuit utilisant une adresse partagée du domaine msgwing.com, accompagné d’exemples d’intégration."
type: "Ressource"
categorie: "email"
formule: "Gratuité signalée ; limites actuelles à revalider avant un usage de production"
inclus: ["Relais SMTP", "Adresse partagée @msgwing.com", "Exemples pour de nombreux langages et systèmes"]
conditions: []
restrictions: ["Pas de domaine personnalisé selon la description historique", "Le quota de 200 e-mails/jour doit être revalidé"]
alertes:
  - type: "fonctionnel"
    niveau: "important"
    libelle: "200/jour à revalider"
    detail: "Le dépôt annonce historiquement un relais partagé ; disponibilité et quota actuels doivent être confirmés."
usages: ["Développement et test", "E-mail transactionnel", "SMTP"]
url: "https://github.com/msgwing/ZeroSMTP"
source: "https://github.com/msgwing/ZeroSMTP"
couleur: "#2563EB"
initiales: "ZE"
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 725
verifieLe: 2026-08-31
verificationAutomatiqueLe: 2026-08-31
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

ZeroSMTP est un projet qui documente l’usage d’un relais SMTP gratuit basé sur une adresse partagée du domaine msgwing.com, avec des exemples prêts à l’emploi dans de nombreux langages et pour plusieurs systèmes. Cette approche peut simplifier un test ou un équipement qui doit seulement expédier quelques notifications, mais elle ne permet pas de présenter son propre domaine d’expédition. Le dépôt annonce historiquement 200 e-mails par jour sans plan payant ; disponibilité et quota actuels restent à revalider avant tout usage réel.
