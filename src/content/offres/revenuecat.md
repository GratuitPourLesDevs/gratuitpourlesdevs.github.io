---
nom: "RevenueCat"
accroche: "Backend hébergé pour achats intégrés et abonnements avec SDK open source, entitlements, analytics et outils de croissance."
type: "SaaS"
categorie: paiement-facturation
formule: "Pro : gratuit jusqu’à 2 500 $ de revenus mensuels suivis"
inclus:
- "Jusqu’à 2 500 $ de Monthly Tracked Revenue sans frais"
- "SDK open source pour achats intégrés et abonnements"
- "Backend de validation des reçus et gestion des entitlements"
- "API REST et webhooks"
- "Analytics, paywalls et outils de croissance du plan Pro"
- "Aucune carte bancaire requise pour démarrer"
conditions: []
restrictions:
- "Au-delà de 2 500 $ de revenus mensuels suivis, RevenueCat facture 1 % du Monthly Tracked Revenue"
alertes:
- type: finance
  niveau: important
  libelle: "1 % au-delà de 2 500 $"
  detail: "Le plan Pro est gratuit jusqu’à 2 500 $ MTR ; une fois ce seuil dépassé, la tarification passe à 1 % des revenus mensuels suivis."
usages: ["Mobile", "API", "Données"]
url: https://www.revenuecat.com/
documentation: https://www.revenuecat.com/docs
source: https://www.revenuecat.com/pricing
couleur: "#F2542D"
initiales: "RC"
carteRequise: false
depassementFacture: true
permanent: true
statut: "active"
vedette: false
ordre: 1207
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

RevenueCat évite aux équipes mobiles de maintenir elles-mêmes toute la logique spécifique aux abonnements App Store et Google Play : validation des reçus, état des achats et entitlements sont centralisés derrière des SDK et un backend communs. Cela accélère fortement un lancement multi-plateforme et réduit les cas limites liés aux renouvellements, restaurations d’achats ou changements d’abonnement. Le plan Pro peut donc accompagner gratuitement une jeune application jusqu’à 2 500 $ de revenus mensuels suivis, avant de passer à une tarification de 1 % du MTR.
