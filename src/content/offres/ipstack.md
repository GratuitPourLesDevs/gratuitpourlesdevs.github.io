---
nom: "ipstack"
accroche: "API de géolocalisation d’adresses IP pour identifier pays, région, ville et coordonnées d’un visiteur."
type: "API"
categorie: cartographie
formule: "Free : 100 requêtes par mois"
inclus:
- "100 requêtes par mois"
- "Module de localisation"
- "Chiffrement SSL"
- "Géolocalisation IP mondiale"
conditions:
- "Compte ipstack gratuit"
restrictions:
- "Quota très faible : 100 requêtes mensuelles"
- "Les modules fuseau horaire, connexion, devise, bulk et sécurité nécessitent une offre payante"
- "Le plan Free vise surtout les tests et petits projets"
alertes:
- type: usage
  niveau: important
  libelle: "Seulement 100 requêtes/mois"
  detail: "Le niveau gratuit actuel est adapté à l’évaluation et aux très petits projets, mais pas à un trafic web significatif."
usages: ["API", "Données", "Applications web"]
url: https://ipstack.com/
source: https://ipstack.com/pricing/
couleur: "#1D4ED8"
initiales: "IS"
carteRequise: false
depassementFacture: false
permanent: true
statut: active
vedette: false
ordre: 1106
verifieLe: '2026-08-25'
verificationAutomatiqueLe: '2026-08-25'
verificationNote: "Offre gratuite vérifiée manuellement à partir des pages officielles le 25 août 2026."
---

ipstack reste une porte d’entrée simple vers la géolocalisation IP, mais son free tier actuel est devenu très limité. Avec 100 requêtes mensuelles, il sert surtout à tester une intégration ou à alimenter un outil interne très occasionnel.
