---
nom: Synadia Cloud Personal
accroche: NATS managé dans Synadia Cloud avec un plan Personal gratuit pour petits workloads
type: Service managé
categorie: messagerie-streaming
formule: 'Personal gratuit : 10 connexions, 10 GiB de trafic réseau et 5 GiB de stockage'
inclus:
- 10 connexions
- 2 comptes
- 100 subscriptions par connexion
- 2 leaf nodes
- Message jusqu’à 1 MiB
- 10 GiB de données réseau
- 5 GiB de stockage standard
- 10 imports et 2 exports
conditions: []
restrictions:
- L’ancienne offre NGS avec 50 connexions, messages de 4 KiB et 5 GB/mois n’est plus la grille actuelle
- Le plan Personal n’autorise pas les collaborateurs et limite fortement les connexions
alertes:
- type: usage
  niveau: important
  libelle: NGS remplacé par Synadia Cloud Personal
  detail: Les limites Free actuelles sont 10 connexions, 10 GiB réseau, 5 GiB stockage et messages jusqu’à 1 MiB.
usages:
- Messagerie
- Pub/Sub
- Architecture événementielle
- Découplage de services
url: https://www.synadia.com/cloud
documentation: https://docs.synadia.com/cloud
source: https://docs.synadia.com/cloud/pricing
couleur: '#27AAE1'
initiales: SC
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 539
verifieLe: 2026-08-31
verificationAutomatiqueLe: 2026-08-31
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Synadia Cloud Personal est référencé avec les limites gratuites vérifiées le 19 août 2026.
