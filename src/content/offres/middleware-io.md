---
nom: "Middleware.io"
accroche: "Observabilité unifiée pour logs, infrastructure et APM"
type: "SaaS"
categorie: "supervision"
formule: "Gratuité à revalider : documentation Free Forever et communication trial/PAYG actuellement contradictoires"
inclus: ["Monitoring de logs", "Infrastructure monitoring", "APM", "Traces et observabilité applicative"]
conditions: []
restrictions: ["Les anciennes limites de 2 hosts et 1M logs ne sont pas reprises comme vérité 2026", "Les pages officielles accessibles ne décrivent pas toutes le même modèle après essai"]
alertes:
  - type: "finance"
    niveau: "important"
    libelle: "Pricing contradictoire"
    detail: "La documentation mentionne encore un Free Forever alors que la communication tarifaire met aussi en avant un essai suivi de pay-as-you-go."
usages: ["Observabilité", "Monitoring", "Logs", "Gestion d’infrastructure"]
url: "https://middleware.io/"
source: "https://middleware.io/pricing"
couleur: "#7C3AED"
initiales: "MW"
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 603
verifieLe: 2026-08-31
verificationAutomatiqueLe: 2026-08-31
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Middleware.io réunit logs, métriques d’infrastructure et APM afin de relier un symptôme applicatif à son contexte système. Le service a historiquement proposé un Free Forever, mais les pages officielles actuelles ne sont pas cohérentes entre cette documentation et une logique d’essai puis pay-as-you-go ; la fiche reste donc volontairement à vérifier et n’affiche pas l’ancien million de logs comme quota garanti.
