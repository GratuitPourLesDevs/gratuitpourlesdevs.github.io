---
nom: "EmailQo Email Infrastructure Grader"
accroche: "Analyse gratuite de l’infrastructure e-mail d’un domaine : SPF, DKIM, DMARC et configuration serveur."
type: "Ressource"
categorie: "email"
formule: "Gratuité signalée ; limites actuelles à revalider avant un usage de production"
inclus: ["Analyse SPF, DKIM, DMARC et configuration serveur"]
conditions: []
restrictions: ["Le fonctionnement gratuit sans inscription et l’absence de quota doivent être revalidés sur le service actuel"]
alertes:
  - type: "fonctionnel"
    niveau: "important"
    libelle: "Disponibilité à confirmer"
    detail: "Le service est conservé comme ressource utile, mais son accès gratuit actuel doit être reconfirmé."
usages: ["Développement et test", "E-mail transactionnel", "DNS"]
url: "https://emailqo.com/email-grader"
source: "https://emailqo.com/email-grader"
couleur: "#2563EB"
initiales: "EE"
carteRequise: false
depassementFacture: false
permanent: true
statut: "a_verifier"
vedette: false
ordre: 676
verifieLe: "2026-08-19"
verificationAutomatiqueLe: "2026-08-19"
verificationNote: "À revalider : grader historiquement gratuit sans inscription, avec score sur 100."
---

EmailQo Email Infrastructure Grader inspecte un domaine pour repérer les problèmes susceptibles de nuire à la délivrabilité : SPF, DKIM, DMARC et configuration du serveur de messagerie sont regroupés dans un diagnostic synthétique. Le référentiel historique décrit un test gratuit sans inscription avec une note sur 100, pratique avant une mise en production ou après un changement DNS. L’accès gratuit actuel n’étant pas suffisamment documenté, la fiche reste marquée « à vérifier ».
