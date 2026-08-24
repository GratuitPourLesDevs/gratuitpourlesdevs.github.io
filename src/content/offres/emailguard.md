---
nom: "EmailGuard"
accroche: "API de validation d’e-mails pour bloquer les domaines jetables, détecter les fautes et vérifier les MX."
type: "API"
categorie: "email"
formule: "Gratuité signalée ; limites actuelles à revalider avant un usage de production"
inclus: ["API de validation d’e-mails pour bloquer les domaines jetables, détecter les fautes et vérifier les MX."]
conditions: []
restrictions: ["La description historique indique : 100 requêtes API gratuites par mois. Cette limite n’a pas pu être confirmée suffisamment clairement sur une source officielle actuelle."]
alertes:
  - type: "fonctionnel"
    niveau: "important"
    libelle: "Free Tier à revalider"
    detail: "Le quota historique de 100 requêtes par mois doit être reconfirmé."
usages: ["API", "E-mail transactionnel", "Développement et test"]
url: "https://emailguard.lazrek.net/"
source: "https://emailguard.lazrek.net/"
couleur: "#2563EB"
initiales: "EM"
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 673
verifieLe: 2026-08-24
verificationAutomatiqueLe: 2026-08-24
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
---

EmailGuard aide à filtrer les mauvaises adresses avant qu’elles n’entrent dans une base utilisateur : domaines jetables, fautes courantes et absence d’enregistrement MX peuvent être détectés via une API simple. Le quota historiquement indiqué est de 100 requêtes gratuites par mois, suffisant pour un prototype ou un petit formulaire. Comme cette limite n’est pas suffisamment confirmée dans une documentation officielle actuelle, elle reste explicitement à revalider plutôt que d’être présentée comme garantie.
