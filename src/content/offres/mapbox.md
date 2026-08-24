---
nom: "Mapbox"
accroche: "Suite de cartes, recherche, géocodage, navigation et SDK avec free tiers mensuels propres à chaque produit."
type: "API"
categorie: cartographie
formule: "Pay-as-you-go : quotas gratuits mensuels par produit puis facturation automatique"
inclus:
- "50 000 chargements Mapbox GL JS par mois"
- "25 000 utilisateurs actifs mobiles par mois"
- "50 000 Static Images par mois"
- "100 000 requêtes Temporary Geocoding par mois"
- "100 000 requêtes Tilequery par mois"
conditions:
- "Compte Mapbox"
- "Moyen de paiement valide requis pour conserver un compte opérationnel"
restrictions:
- "Chaque API possède son propre compteur et sa propre tarification"
- "Le Permanent Geocoding n’a pas de palier gratuit équivalent au Temporary Geocoding"
- "Le dépassement des free tiers est facturé en pay-as-you-go"
alertes:
- type: finance
  niveau: critique
  libelle: "Facturation automatique des dépassements"
  detail: "Mapbox exige un moyen de paiement valide et facture automatiquement l’usage au-delà des quotas gratuits de chaque produit."
usages: ["API", "Applications web", "Mobile"]
url: https://www.mapbox.com/
source: https://www.mapbox.com/pricing
couleur: "#111827"
initiales: "MB"
carteRequise: true
depassementFacture: true
permanent: true
statut: active
vedette: false
ordre: 1109
verifieLe: '2026-08-25'
verificationAutomatiqueLe: '2026-08-25'
verificationNote: "Offre gratuite vérifiée manuellement à partir des pages officielles le 25 août 2026."
---

Mapbox propose plusieurs free tiers très généreux, mais il ne faut pas les résumer à un quota unique : carte web, SDK mobile, images statiques et géocodage disposent de compteurs différents. Comme le compte fonctionne en pay-as-you-go avec un moyen de paiement, le suivi des usages est indispensable.
