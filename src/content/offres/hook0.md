---
nom: Hook0
accroche: Infrastructure open source de webhooks avec livraison, retries et journalisation
type: SaaS
categorie: messagerie-streaming
formule: Developer gratuit à vie avec 100 événements par jour et 7 jours de rétention
inclus:
  - 100 événements par jour
  - 1 développeur
  - 1 application
  - 10 types d’événements
  - 10 abonnements
  - 7 jours de rétention
  - Signatures HMAC et retries
  - Version self-hosted open source sans quota Hook0
conditions:
  - Compte Hook0 pour le cloud
  - Aucune carte bancaire requise
restrictions:
  - Les événements au-delà de 100 par jour sont bloqués avec HTTP 429
  - Support communautaire sur le plan Developer
alertes:
  - type: operationnel
    niveau: important
    libelle: Quota journalier bloquant
    detail: Les événements supplémentaires sont rejetés après 100 événements dans la journée jusqu’au prochain reset.
usages: [API, Événements, Intégration événementielle]
url: https://www.hook0.com/
documentation: https://documentation.hook0.com/
source: https://www.hook0.com/pricing
couleur: "#f97316"
initiales: H0
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 173
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Hook0 fournit une couche de livraison de webhooks prête à l’emploi : signature, retries, historique et abonnements. Le gratuit cloud est suffisant pour un side-project et la version self-hosted permet de supprimer le plafond imposé par Hook0 en prenant en charge sa propre infrastructure.
