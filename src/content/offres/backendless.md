---
nom: Backendless
accroche: BaaS et plateforme low-code combinant base de données, APIs, fichiers, Cloud Code, temps réel et notifications push.
type: BaaS
categorie: baas
formule: 'Free : 1 000 requêtes/jour, 50 requêtes/minute, 1 GB de fichiers et 100 000 notifications push'
inclus:
- 1 000 requêtes API par jour
- 50 requêtes API par minute
- 20 tables de base de données
- 15 000 enregistrements de base
- 1 GB de stockage fichiers
- 100 000 messages Pub/Sub
- 100 000 notifications push
- Équipe de développement illimitée
conditions:
- Aucune carte bancaire requise
restrictions:
- Le Free est présenté comme un environnement d’exploration et d’apprentissage plutôt que comme un plan de production
- Dès qu’une limite Free est dépassée, l’application est immédiatement bloquée pour les requêtes API
alertes:
- type: operationnel
  niveau: important
  libelle: Blocage immédiat au plafond
  detail: Backendless indique qu’un dépassement d’une limite Free bloque immédiatement l’application pour le traitement des requêtes API.
usages:
- Backend d’application
- Base de données
- Notifications push
- Pub/Sub
- Développement et test
url: https://backendless.com/
source: https://backendless.com/about-the-free-plan/
couleur: '#00AEEF'
initiales: BL
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 838
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Backendless rassemble dans un même environnement la base, les APIs, le code serveur, le temps réel et le push, ce qui permet de monter très vite un backend sans gérer d’infrastructure. Le plan gratuit est suffisamment riche pour apprendre la plateforme, réaliser une démo ou valider une architecture. Ses limites sont cependant volontairement basses pour un service public : 1 000 appels par jour peuvent partir vite. Le point critique est surtout le comportement au plafond, puisque Backendless bloque immédiatement les requêtes de l’application au lieu de laisser une marge de dépassement.
