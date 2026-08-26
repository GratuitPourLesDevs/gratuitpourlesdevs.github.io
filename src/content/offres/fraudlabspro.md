---
nom: "FraudLabsPRO"
accroche: "API de détection de fraude e-commerce pour analyser les commandes, attribuer un score de risque et réduire les chargebacks."
type: "API"
categorie: paiement-facturation
formule: "Micro : 500 validations par mois pour moins de 25 000 $ de ventes mensuelles"
inclus:
- "500 requêtes de validation par mois"
- "Score et statut de fraude"
- "5 règles de validation"
- "50 entrées de blacklist personnalisées"
- "10 crédits gratuits de vérification SMS"
- "Aucune carte bancaire requise"
conditions:
- "Le volume de ventes du marchand doit rester inférieur à 25 000 $ par mois"
restrictions:
- "Les volumes plus élevés et les règles avancées nécessitent un plan payant"
alertes:
- type: finance
  niveau: important
  libelle: "Plafond de ventes à 25 000 $"
  detail: "Le plan Micro gratuit est réservé aux marchands réalisant moins de 25 000 $ de ventes mensuelles, en plus du quota de 500 validations."
usages: ["API", "Données", "Applications web"]
url: https://www.fraudlabspro.com/
documentation: https://www.fraudlabspro.com/developer/api/screen-order
source: https://www.fraudlabspro.com/pricing
couleur: "#DC2626"
initiales: "FLP"
carteRequise: false
depassementFacture: false
permanent: true
statut: active
vedette: false
ordre: 1204
verifieLe: '2026-08-26'
verificationAutomatiqueLe: '2026-08-26'
verificationNote: "Offre gratuite vérifiée manuellement à partir des pages officielles le 26 août 2026."
---

FraudLabsPRO permet à un petit marchand d’ajouter une première couche antifraude sans développer son propre moteur de scoring ni accumuler lui-même des signaux sur les commandes suspectes. L’API peut enrichir une transaction avec un score et un statut de risque, puis appliquer quelques règles ou blacklists avant d’accepter automatiquement une commande. Le plan Micro est adapté à une jeune boutique avec 500 validations mensuelles, mais il est aussi conditionné à un chiffre de ventes inférieur à 25 000 $ par mois.
