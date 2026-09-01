---
nom: "InfluxDB Cloud"
accroche: "Base de séries temporelles serverless avec quotas gratuits d’écriture et de lecture."
type: PaaS
categorie: services-donnees-manages
formule: "Free : 5 Mo écrits et 300 Mo lus par fenêtre de 5 minutes"
inclus:
- "5 Mo d’écritures par fenêtre de 5 minutes"
- "300 Mo de lectures par fenêtre de 5 minutes"
- "2 buckets sur l’offre Serverless gratuite"
- "Rétention de données de 30 jours"
- "Base de séries temporelles managée"
- "API et outils InfluxDB"
conditions:
- "Création d’un compte InfluxDB Cloud Serverless"
restrictions:
- "Les limites actuelles sont supérieures aux anciennes valeurs de 3 Mo en écriture et 30 Mo en lecture"
- "Rétention limitée à 30 jours sur le niveau gratuit Serverless"
- "Les limites dépendent de la génération du service InfluxDB ; cette fiche suit l’offre Cloud Serverless actuelle"
alertes:
- type: usage
  niveau: important
  libelle: Rétention limitée à 30 jours
  detail: Les données du niveau Cloud Serverless gratuit ne sont conservées que pendant 30 jours.
usages: ["Base de données", "Télémétrie", "Monitoring", "Données"]
url: https://www.influxdata.com/
documentation: https://docs.influxdata.com/influxdb/cloud-serverless/
source: https://docs.influxdata.com/influxdb/cloud-serverless/account-management/limits/
couleur: "#22ADF6"
initiales: ID
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 930
verifieLe: '2026-08-21'
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source accessible, mais aucune mention explicite de gratuité détectée ; statut éditorial conservé pour contrôle manuel."
verificationEtat: "controle_requis"
verificationCode: "gratuit_non_detecte"
verificationEchecsConsecutifs: 2
---

InfluxDB est spécialisé dans les séries temporelles, métriques et télémétries. Le niveau Cloud Serverless gratuit autorise un débit suffisant pour des petits systèmes de monitoring, des capteurs ou des prototypes, avec une fenêtre de rétention limitée qui évite d’accumuler indéfiniment les données.
