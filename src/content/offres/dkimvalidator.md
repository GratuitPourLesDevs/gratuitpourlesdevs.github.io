---
nom: "DKIM Validator"
accroche: "Outil public pour vérifier SPF, DKIM et DMARC à partir d’un message de test."
type: "Ressource"
categorie: "email"
formule: "Gratuité signalée ; limites actuelles à revalider avant un usage de production"
inclus: ["Outil public pour vérifier SPF, DKIM et DMARC à partir d’un message de test."]
conditions: []
restrictions: ["La description historique indique : test gratuit SPF, DKIM et DMARC. Cette limite n’a pas pu être confirmée suffisamment clairement sur une source officielle actuelle."]
alertes:
  - type: "fonctionnel"
    niveau: "important"
    libelle: "Free Tier à revalider"
    detail: "Le service reste pertinent pour tester une configuration, mais sa disponibilité et ses limites gratuites doivent être reconfirmées."
usages: ["Développement et test", "E-mail transactionnel", "DNS"]
url: "https://dkimvalidator.com/"
source: "https://dkimvalidator.com/"
couleur: "#2563EB"
initiales: "DV"
carteRequise: false
depassementFacture: false
permanent: true
statut: "a_verifier"
vedette: false
ordre: 671
verifieLe: "2026-08-19"
verificationAutomatiqueLe: "2026-08-19"
verificationNote: "À revalider : test gratuit SPF, DKIM et DMARC."
---

DKIM Validator fournit une adresse de test vers laquelle envoyer un message afin d’examiner l’authentification e-mail, notamment SPF, DKIM et DMARC. C’est un outil très pratique lorsqu’on configure un nouveau domaine ou qu’on cherche pourquoi un message échoue aux contrôles de délivrabilité. Le service est historiquement proposé gratuitement, mais ses conditions actuelles ne sont pas suffisamment documentées pour être garanties en août 2026 ; la fiche est donc conservée en « à vérifier ».
