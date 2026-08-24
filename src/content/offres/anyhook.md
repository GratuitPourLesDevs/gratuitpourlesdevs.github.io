---
nom: AnyHook
accroche: Relais de webhooks avec file durable, retries, journal et replay des événements
type: Service managé
categorie: messagerie-streaming
formule: 3 000 événements par mois, 100 par jour, 1 app, 3 retries et 3 jours de rétention
inclus:
  - URL d’entrée pour recevoir des webhooks HTTP
  - Mise en file avant livraison au backend
  - Journal des événements et tentatives de livraison
  - Replay manuel des événements retenus
  - Trois tentatives de retry automatiques
  - Rétention des événements pendant 3 jours
  - Timeout de livraison de 60 secondes
  - Payload maximal de 512 Ko
  - Aucune carte bancaire requise
conditions:
  - Compte AnyHook pour gérer l’app et les clés
  - Endpoint HTTP de destination
  - Webhooks asynchrones acceptant une réponse rapide 2xx ou 202
restrictions:
  - Maximum de 3 000 événements par mois
  - Maximum de 100 événements par jour
  - Une seule app sur le plan gratuit
  - Trois retries automatiques maximum
  - Historique limité à 3 jours
  - Payload limité à 512 Ko
  - Aucun overage facturé sur Free ; le trafic au-delà des plafonds n’est pas traité normalement jusqu’au prochain cycle
alertes:
  - type: usage
    niveau: important
    libelle: Plafond quotidien
    detail: Le quota mensuel de 3 000 événements est également limité par un plafond de 100 événements par jour sur le plan Free.
usages:
  - Intégration événementielle
  - Traitement asynchrone
  - Webhook local
url: https://anyhook.net/
source: https://anyhook.net/
couleur: "#7c3aed"
initiales: AH
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 94
verifieLe: 2026-08-24
verificationAutomatiqueLe: 2026-08-24
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
---

AnyHook intercale une couche fiable entre une source de webhook et votre backend : l’événement est accepté rapidement, stocké, puis livré avec retries et possibilité de replay. C’est particulièrement utile pour Stripe, GitHub, Shopify ou des agents IA dont le traitement peut durer plus longtemps que le timeout imposé par l’émetteur.