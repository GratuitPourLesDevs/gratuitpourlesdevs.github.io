---
nom: "PaizaCloud"
accroche: "Environnement Linux de développement dans le navigateur pour créer et tester des applications web sans installation locale."
type: "SaaS"
categorie: ide-edition-code
formule: "Free : 1 serveur, 4 h d’exécution par jour, durée de vie 24 h"
inclus:
- "1 serveur"
- "4 heures d’exécution par jour"
- "2 cœurs CPU"
- "2 Go de RAM"
- "1 Go de stockage"
- "Terminal et éditeur dans le navigateur"
conditions:
- "Compte PaizaCloud gratuit"
restrictions:
- "Durée de vie du serveur limitée à 24 heures"
- "Maximum 4 heures de fonctionnement par jour"
- "Le plan Free ne permet pas de publier un service durable"
alertes:
- type: operationnel
  niveau: critique
  libelle: "Serveur détruit après 24 h"
  detail: "Le serveur Free est éphémère : sa durée de vie est limitée à 24 heures et son temps d’exécution à 4 heures par jour."
usages: ["Environnements de développement", "Compute", "Applications web"]
url: https://paiza.cloud/en/
source: https://paiza.cloud/en/
couleur: "#00A0E9"
initiales: "PZ"
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 1144
verifieLe: 2026-08-31
verificationAutomatiqueLe: 2026-08-31
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

PaizaCloud fournit un petit serveur de développement prêt à l’emploi dans le navigateur. Il est adapté aux tutoriels et prototypes courts, mais sa durée de vie de 24 heures exclut tout usage d’hébergement durable.
