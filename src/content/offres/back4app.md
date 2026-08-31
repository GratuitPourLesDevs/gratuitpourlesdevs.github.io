---
nom: Back4App
accroche: Backend managé basé sur Parse Platform avec base de données, fichiers, Cloud Code et APIs REST/GraphQL.
type: BaaS
categorie: baas
formule: 'Free : 25 000 requêtes/mois, 250 MB de base, 1 GB de transfert et 1 GB de fichiers'
inclus:
- 25 000 requêtes par mois
- 250 MB de stockage base de données
- 1 GB de transfert de données
- 1 GB de stockage fichiers
- 1 application par souscription
- REST API et GraphQL API
- 1 Cloud Code Job
- Logs temps réel
conditions:
- Aucune carte bancaire requise pour démarrer
restrictions:
- Ressources cloud partagées
- Pas de sauvegarde sur le plan Free
- Rétention des access logs limitée à 1 jour
- 'Taille maximale d’un fichier uploadé : 20 MB'
alertes:
- type: operationnel
  niveau: important
  libelle: Pas de sauvegarde Free
  detail: Le plan gratuit ne fournit pas de rétention de sauvegarde ; les sauvegardes quotidiennes commencent sur les offres payantes.
usages:
- Backend d’application
- Base de données
- API
- Stockage de fichiers
- Prototypage
url: https://www.back4app.com/
source: https://www.back4app.com/pricing/backend-as-a-service
couleur: '#0B8F55'
initiales: B4
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 837
verifieLe: 2026-08-31
verificationAutomatiqueLe: 2026-08-31
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Back4App donne rapidement un backend Parse complet à une application mobile ou web : données, fichiers, logique Cloud Code et APIs sont disponibles sans assembler plusieurs services. Avec 25 000 requêtes mensuelles et 250 MB de base, le Free est adapté à un prototype fonctionnel ou à une petite application peu sollicitée. L’intérêt principal est de rester sur un socle Parse open source plutôt que sur une API totalement propriétaire. En revanche, l’absence de sauvegarde sur le plan gratuit le rend moins rassurant pour des données importantes en production.
