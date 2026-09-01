---
nom: Kreya
accroche: Client desktop pour explorer et tester des API gRPC, REST, GraphQL et WebSocket
type: Ressource
categorie: tests
formule: Plan Free permanent pour les particuliers, sans compte ni carte pour le téléchargement
inclus:
  - gRPC REST GraphQL WebSocket et Server-Sent Events
  - HTTP/2 et HTTP/3
  - Environnements et templating
  - OAuth 2.0 et OpenID Connect
  - Import gRPC par server reflection
  - Import de fichiers protobuf et descriptor sets
  - Données stockées localement
conditions:
  - Plan Free destiné aux particuliers
  - Application desktop Windows macOS ou Linux
restrictions:
  - Historique limité à la dernière requête sur Free
  - Scripting tests collections et snapshot testing réservés aux plans payants
alertes:
  - type: fonctionnel
    niveau: important
    libelle: Fonctions de test avancées payantes
    detail: Le plan gratuit couvre l’exploration et les appels API, mais les scripts, collections et tests automatisés avancés nécessitent Pro.
usages:
  - API
  - Tests
url: https://kreya.app/
documentation: https://kreya.app/docs/
source: https://kreya.app/pricing/
couleur: "#6d5dfc"
initiales: KR
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 201
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Kreya est un client API desktop orienté confidentialité : les projets restent locaux et peuvent être versionnés dans Git. Son support gRPC est particulièrement complet grâce à l’import par reflection serveur ou fichiers protobuf.
