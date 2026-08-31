---
nom: "AllRatesToday"
accroche: "API de taux de change mid-market pour plus de 160 devises, avec SDK officiels et données servies en HTTPS."
type: "API"
categorie: paiement-facturation
formule: "Free : 300 requêtes par mois, sans carte bancaire"
inclus:
- "300 requêtes API par mois"
- "10 requêtes par minute"
- "1 clé API"
- "Plus de 160 devises"
- "Taux mid-market et HTTPS"
- "SDK officiels JavaScript, Python, PHP et Rust"
conditions: []
restrictions:
- "Le plan gratuit est réservé aux projets personnels et aux tests"
- "L’usage commercial nécessite un plan payant"
alertes:
- type: fonctionnel
  niveau: important
  libelle: "Usage gratuit non commercial"
  detail: "Les 300 requêtes mensuelles du plan Free sont prévues pour les projets personnels et les tests, pas pour un usage commercial en production."
usages: ["API", "Données", "Applications web"]
url: https://allratestoday.com/
documentation: https://allratestoday.com/open-api/
source: https://allratestoday.com/free-currency-api/
couleur: "#0F766E"
initiales: "ART"
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 1196
verifieLe: 2026-08-31
verificationAutomatiqueLe: 2026-08-31
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

AllRatesToday convient bien pour ajouter rapidement des taux de change à un prototype, un convertisseur, un dashboard personnel ou un outil de test sans gérer soi-même la collecte de données monétaires. Les SDK officiels réduisent encore le coût d’intégration dans les stacks courantes et les taux mid-market suffisent pour de nombreux usages informatifs. La limite la plus importante n’est pas seulement le quota de 300 requêtes mensuelles : le niveau gratuit est destiné aux projets personnels et aux tests, pas à une utilisation commerciale en production.
