---
nom: Posthook
accroche: Planification de webhooks différés avec retries, suivi de livraison et alertes
type: SaaS
categorie: messagerie-streaming
formule: 1 000 webhooks planifiés par mois, 3 projets et 7 jours de logs, sans carte
inclus:
  - 1 000 hooks planifiés par mois
  - 3 projets
  - 7 jours de rétention des logs
  - 20 livraisons concurrentes
  - Jusqu’à 3 tentatives de retry
  - Alertes e-mail en cas d’échec
  - Suivi des livraisons
conditions:
  - Compte Posthook gratuit
  - Aucune carte bancaire requise
restrictions:
  - Les retries utilisent une politique fixe sur le plan gratuit
  - Les hooks au-delà du quota mensuel nécessitent une formule supérieure
  - Les appels API et retries ne sont pas comptés comme nouveaux hooks planifiés
alertes: []
usages:
  - API
  - Événements
  - Traitement asynchrone
url: https://posthook.io/
documentation: https://docs.posthook.io/
source: https://posthook.io/pricing
couleur: "#7c3aed"
initiales: PH
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 222
verifieLe: 2026-08-31
verificationAutomatiqueLe: 2026-08-31
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Posthook permet de déléguer la planification et la fiabilité des webhooks différés. Il évite d’implémenter soi-même une file persistante, un scheduler et un mécanisme de retry pour les actions à exécuter plus tard.
