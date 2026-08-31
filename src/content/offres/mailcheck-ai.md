---
nom: "Mailcheck.ai"
accroche: "API de détection des adresses e-mail temporaires et jetables pour protéger les inscriptions."
type: "API"
categorie: "email"
formule: "Gratuité signalée ; limites actuelles à revalider avant un usage de production"
inclus: ["Détection d’adresses temporaires et jetables via API"]
conditions: []
restrictions: ["Le quota historique de 120 requêtes par heure doit être revalidé"]
alertes:
  - type: "fonctionnel"
    niveau: "important"
    libelle: "Quota à revalider"
    detail: "La limite gratuite historique de 120 requêtes/heure n’est pas suffisamment confirmée actuellement."
usages: ["API", "E-mail transactionnel", "Développement et test"]
url: "https://www.mailcheck.ai/"
source: "https://www.mailcheck.ai/"
couleur: "#2563EB"
initiales: "MA"
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 691
verifieLe: 2026-08-31
verificationAutomatiqueLe: 2026-08-31
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Mailcheck.ai fournit une API spécialisée dans la détection des domaines d’e-mail temporaires, utile pour empêcher des inscriptions jetables ou améliorer la qualité d’une base utilisateur. Le référentiel historique mentionne 120 requêtes gratuites par heure, un volume qui conviendrait à de petits services et à des formulaires modérément fréquentés. Comme cette limite n’est pas suffisamment confirmée par une source officielle publique actuelle, elle reste explicitement marquée à revalider avant de dimensionner une intégration dessus.
