---
nom: BigDataCloud
accroche: API de géolocalisation IP, reverse geocoding, réseau et validation de données
type: API
categorie: api-donnees-ml
formule: De 10 000 à 50 000 requêtes par mois selon le package, plus des API client-side gratuites sans plafond mensuel fixe
inclus:
  - IP Geolocation jusqu’à 10 000 requêtes par mois
  - Reverse Geocoding jusqu’à 50 000 requêtes par mois
  - API de réseau et ASN selon le package
  - Validation de téléphone et d’e-mail selon le package
  - REST et GraphQL sur les offres concernées
  - Accès à tous les champs du package sans feature gate
  - API client-side gratuites sans clé pour certains usages
  - Aucune carte bancaire requise pour démarrer
conditions:
  - Compte et clé API pour les packages serveur
  - Respect de la fair use policy pour les API client-side gratuites
restrictions:
  - Le quota exact dépend du package API choisi
  - IP Geolocation est limitée à 10 000 requêtes mensuelles sur Base Free
  - Reverse Geocoding est limitée à 50 000 requêtes mensuelles sur Base Free
  - Les API client-side illimitées sont destinées à une exécution navigateur ou mobile et restent soumises au fair use
  - Le pay-as-you-go peut être activé séparément sur le compte pour continuer au-delà d’un quota
alertes:
  - type: finance
    niveau: important
    libelle: Pay-as-you-go optionnel
    detail: Les plans Free démarrent sans carte, mais l’activation volontaire du pay-as-you-go permet de poursuivre au-delà des quotas avec facturation.
usages:
  - API
  - Données
  - Mobile
url: https://www.bigdatacloud.com/
documentation: https://www.bigdatacloud.com/docs
source: https://www.bigdatacloud.com/pricing
couleur: "#0284c7"
initiales: BD
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 100
verifieLe: 2026-08-24
verificationAutomatiqueLe: 2026-08-24
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
---

BigDataCloud regroupe plusieurs API de localisation et d’intelligence réseau avec des quotas gratuits qui varient selon le package. Le reverse geocoding se distingue par 50 000 appels mensuels gratuits, tandis que la géolocalisation IP serveur est à 10 000 ; certaines API côté client sont disponibles sans clé et sans plafond mensuel fixe sous fair use.