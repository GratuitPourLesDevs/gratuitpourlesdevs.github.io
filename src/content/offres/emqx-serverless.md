---
nom: EMQX Serverless
accroche: Broker MQTT serverless managé avec quota mensuel gratuit pour projets IoT
type: Service managé
categorie: messagerie-streaming
formule: 'Forever Free : 1 M de session-minutes, 1 GiB de trafic et 1 M de rule actions par mois'
inclus:
- 1 000 000 session-minutes par mois
- 1 GiB de trafic par mois
- 1 000 000 rule actions par mois
- Déploiement MQTT serverless en quelques secondes
- Autoscaling
- Aucune carte bancaire requise
conditions: []
restrictions:
- Avec une limite de dépense à 0, le déploiement est arrêté si un quota gratuit est dépassé
- Le service ne redémarre pas automatiquement au renouvellement mensuel après un arrêt pour dépassement
alertes:
- type: usage
  niveau: important
  libelle: Arrêt au dépassement sans budget
  detail: Si la limite de dépense reste à 0, dépasser les session-minutes ou le trafic gratuit arrête le déploiement
    jusqu’au prochain mois.
usages:
- Communications IoT
- IoT
- Messagerie
- Serverless
url: https://www.emqx.com/en/cloud/serverless-mqtt
documentation: https://docs.emqx.com/en/cloud/latest/
source: https://www.emqx.com/en/cloud/serverless-mqtt
couleur: '#00B173'
initiales: EM
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 525
verifieLe: 2026-08-24
verificationAutomatiqueLe: 2026-08-24
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
  sans carte bancaire.
---

EMQX Serverless est référencé avec les limites gratuites vérifiées le 19 août 2026.
