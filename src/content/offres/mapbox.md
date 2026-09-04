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
statut: "active"
vedette: false
ordre: 1109
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Mapbox convient à un produit qui doit combiner cartes personnalisées, recherche d’adresses et navigation avec des SDK cohérents sur le web et le mobile. Les quotas gratuits distincts permettent de lancer une carte ou un prototype avec plusieurs dizaines de milliers d’utilisateurs ou de requêtes selon le produit. Une autre formule devient nécessaire dès qu’un compteur dépasse son seuil, qu’un géocodage permanent est requis ou que l’équipe ne peut pas accepter la carte bancaire et la facturation automatique des dépassements.
