---
nom: CloudAMQP
accroche: RabbitMQ managé avec un plan Little Lemur gratuit pour développement et petits projets
type: Service managé
categorie: messagerie-streaming
formule: 'Little Lemur gratuit : 1 M de messages/mois, 20 connexions, 100 queues et 10 000 messages en attente'
inclus:
- 1 000 000 messages par mois
- 20 connexions concurrentes
- 100 queues
- 10 000 messages simultanément en attente
- Broker RabbitMQ partagé
- 28 jours maximum d’inactivité pour une queue
conditions: []
restrictions:
- Le plan gratuit utilise un broker RabbitMQ partagé
- La publication ou la création de queues peut être bloquée une fois les limites atteintes
- La haute disponibilité multi-AZ n’est pas annoncée comme caractéristique du plan gratuit Little Lemur
alertes:
- type: fonctionnel
  niveau: important
  libelle: Broker partagé
  detail: Little Lemur est un vhost sur infrastructure RabbitMQ partagée ; la promesse multi-AZ des offres dédiées
    ne doit pas être attribuée au Free.
usages:
- Files de messages
- Messagerie
- Découplage de services
- Traitement asynchrone
url: https://www.cloudamqp.com/
documentation: https://www.cloudamqp.com/docs/index.html
source: https://www.cloudamqp.com/plans.html
couleur: '#F97316'
initiales: CA
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 523
verifieLe: 2026-08-24
verificationAutomatiqueLe: 2026-08-24
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
---

CloudAMQP est référencé avec les limites gratuites vérifiées le 19 août 2026.
