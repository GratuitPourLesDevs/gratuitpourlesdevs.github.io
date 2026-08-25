---
nom: "JSONPlaceholder"
accroche: "API REST factice gratuite pour prototyper, tester des appels HTTP et disposer immédiatement de données JSON."
type: "API"
categorie: ide-edition-code
formule: "Gratuit : API publique de test sans compte"
inclus:
- "Ressources posts, comments, albums, photos, todos et users"
- "GET, POST, PUT, PATCH et DELETE simulés"
- "Données JSON prêtes à l’emploi"
- "Aucun compte requis"
- "Code source disponible"
conditions: []
restrictions:
- "Les écritures sont simulées et ne persistent pas réellement"
- "Aucun SLA ni quota contractuel n’est publié pour le service public"
alertes:
- type: fonctionnel
  niveau: important
  libelle: "Écritures simulées"
  detail: "Les requêtes d’écriture retournent des réponses réalistes mais ne modifient pas durablement les données du service public."
usages: ["API", "Tests", "Développement et test"]
url: https://jsonplaceholder.typicode.com/
source: https://jsonplaceholder.typicode.com/
couleur: "#263238"
initiales: "JP"
carteRequise: false
depassementFacture: false
permanent: true
statut: active
vedette: false
ordre: 1136
verifieLe: '2026-08-25'
verificationAutomatiqueLe: '2026-08-25'
verificationNote: "Offre gratuite vérifiée manuellement à partir des pages officielles le 25 août 2026."
---

JSONPlaceholder est un classique pour construire une interface avant que le backend réel n’existe. L’API est immédiatement utilisable mais doit rester un outil de test : les modifications ne sont pas persistées et aucun SLA n’est fourni.
