---
nom: "restdb.io"
accroche: "Base NoSQL cloud avec schéma, relations, API REST automatique et interface d’administration."
type: BaaS
categorie: services-donnees-manages
formule: "Development Free : 3 utilisateurs, 2 500 enregistrements et 500 appels API par jour"
inclus:
- "3 utilisateurs"
- "2 500 enregistrements"
- "1 appel API par seconde"
- "500 appels API par jour"
- "100 Mo de stockage média"
- "API REST automatique"
- "Schéma, relations et interface d’administration multi-utilisateur"
- "Codehooks et jobs"
conditions:
- "Création d’un compte restdb.io"
- "Aucune carte bancaire requise"
restrictions:
- "Le plafond quotidien de 500 appels API s’ajoute à la limite d’un appel par seconde"
- "Taille maximale de fichier limitée sur le plan gratuit"
- "Snapshots manuels mais pas de sauvegarde automatique sur Free"
alertes:
- type: fonctionnel
  niveau: important
  libelle: Pas de sauvegarde automatique
  detail: Le plan Free permet des snapshots manuels mais n’inclut pas de sauvegarde automatique.
- type: usage
  niveau: important
  libelle: Double limite API
  detail: Les appels API sont limités à la fois à 500 par jour et à un appel par seconde.
usages: ["NoSQL", "API", "Backend d’application", "Base de données"]
url: https://restdb.io/
documentation: https://restdb.io/docs/
source: https://restdb.io/pricing/
couleur: "#4CAF50"
initiales: RD
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 938
verifieLe: 2026-08-31
verificationAutomatiqueLe: 2026-08-31
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

restdb.io génère une API REST directement à partir d’une base NoSQL structurée et fournit une interface d’administration prête à l’emploi. Le plan gratuit est adapté à un prototype ou une petite application interne, mais le plafond quotidien de 500 appels API devient rapidement la contrainte principale.
