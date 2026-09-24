---
nom: Beeceptor
accroche: Serveurs d’API mock et inspection de trafic pour REST, GraphQL et tests d’intégration
type: SaaS
categorie: tests
formule: 50 requêtes par jour et par endpoint avec 3 règles de mock
inclus:
  - 50 requêtes par jour par endpoint
  - 3 règles de mock
  - Endpoint public
  - Réponses dynamiques et conditionnelles
  - Inspection du trafic en temps réel
  - Mock stateful et routes CRUD
  - Jusqu’à 10 petits objets dans le stockage CRUD
  - Injection de latence et erreurs
  - Tunnel local éphémère
  - Aucune carte bancaire requise
conditions:
  - Aucun compte requis pour créer un endpoint gratuit non revendiqué
  - Compte conseillé pour conserver et administrer l’endpoint
restrictions:
  - 50 requêtes par jour et par endpoint
  - Trois règles de mock maximum
  - L’endpoint du plan gratuit est public
  - Les endpoints gratuits non revendiqués sont supprimés après 7 jours
  - Les fonctions privées avancées et CI/CD nécessitent un plan payant
alertes:
  - type: usage
    niveau: important
    libelle: Endpoint public
    detail: Le plan gratuit utilise un endpoint public ; il ne faut pas y envoyer de secrets ou de données sensibles destinées à rester privées.
usages:
  - API
  - Tests
  - Prototypage
url: https://beeceptor.com/
documentation: https://beeceptor.com/docs/
source: https://beeceptor.com/pricing/
couleur: "#f97316"
initiales: BC
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 99
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Beeceptor est utile lorsqu’un frontend doit avancer avant que le backend soit disponible, ou lorsqu’un test d’intégration doit reproduire une erreur, une latence ou une réponse précise. Le plan gratuit permet de créer un endpoint public, d’inspecter les requêtes reçues et de définir trois règles de mock, avec 50 appels par jour et un petit stockage CRUD. Cela suffit pour une démonstration, des tests manuels ou le débogage ponctuel d’un webhook sans écrire un serveur factice. Il faut passer à une solution privée ou payante dès que les échanges contiennent des données sensibles, que les scénarios se multiplient ou que le test doit tourner régulièrement en CI.
