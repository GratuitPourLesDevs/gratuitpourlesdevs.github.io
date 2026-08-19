---
nom: Ably
accroche: Infrastructure temps réel Pub/Sub avec présence, persistance et livraison fiable
type: SaaS
categorie: messagerie-streaming
formule: 'Free sans limite de durée : 6 M de messages/mois, 200 connexions et 200 channels concurrents'
inclus:
- 6 000 000 messages par mois
- 200 connexions concurrentes
- 200 channels concurrents
- 500 messages par seconde
- Présence, Pub/Sub, push, webhooks et intégrations
- 1 jour de stockage des messages
- Message jusqu’à 64 KiB
conditions: []
restrictions:
- Le plan Free est destiné au prototypage et aux preuves de concept
- Les limites de connexions, channels et débit sont des plafonds de capacité du compte Free
alertes:
- type: usage
  niveau: important
  libelle: Quota doublé depuis l’ancienne référence
  detail: Le Free actuel est à 6 M de messages/mois et 200 connexions/channels concurrents, et non 3 M / 100 / 100.
usages:
- Messagerie
- Pub/Sub
- Événements
- Applications web
url: https://ably.com/
documentation: https://ably.com/docs
source: https://ably.com/pricing
couleur: '#FF5416'
initiales: A
carteRequise: false
depassementFacture: false
permanent: true
statut: active
vedette: false
ordre: 522
verifieLe: '2026-08-19'
verificationAutomatiqueLe: '2026-08-19'
verificationNote: Le pricing officiel confirme 6 M de messages/mois, 200 connexions concurrentes, 200 channels concurrents
  et 500 messages/s.
---

Ably est référencé avec les limites gratuites vérifiées le 19 août 2026.
