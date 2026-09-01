---
nom: "Geocodio"
accroche: "Géocodage et enrichissement d’adresses par API ou fichiers, avec un quota quotidien gratuit."
type: "API"
categorie: cartographie
formule: "Pay-as-you-go : 2 500 recherches gratuites par jour"
inclus:
- "2 500 recherches gratuites par jour"
- "API de géocodage"
- "Uploads de feuilles de calcul"
- "Données d’enrichissement"
- "3 clés API sur le plan individuel"
conditions:
- "Aucune carte bancaire requise tant que le quota gratuit n’est pas dépassé"
restrictions:
- "Le pay-as-you-go couvre les États-Unis, le Canada et le Mexique"
- "Après le quota gratuit, le tarif est de 1 $ pour 1 000 recherches si un moyen de paiement est activé"
- "Le Royaume-Uni nécessite une offre Flex ou Unlimited adaptée"
alertes:
- type: finance
  niveau: critique
  libelle: "Dépassement potentiellement facturé"
  detail: "Une fois un moyen de paiement configuré, les recherches au-delà des 2 500 gratuites par jour sont facturées en pay-as-you-go."
usages: ["API", "Données", "Applications web"]
url: https://www.geocod.io/
source: https://www.geocod.io/pricing
couleur: "#3B82F6"
initiales: "GC"
carteRequise: false
depassementFacture: true
permanent: true
statut: "active"
vedette: false
ordre: 1099
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Geocodio est intéressant pour les projets centrés sur l’Amérique du Nord, notamment lorsqu’il faut traiter des fichiers CSV ou enrichir les résultats avec des données administratives. Le quota gratuit reste généreux, mais l’extension géographique et le dépassement payant doivent être anticipés.
