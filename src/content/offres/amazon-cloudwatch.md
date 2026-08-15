---
nom: Amazon CloudWatch
accroche: Métriques, journaux, tableaux de bord et alertes pour AWS
type: SaaS
categorie: supervision
formule: 10 métriques personnalisées, 10 alarmes standard, 1 million de requêtes API et 5 Go de données de logs
inclus: [Métriques de supervision basique envoyées par les services AWS, 10 métriques personnalisées ou de supervision détaillée, 10 métriques d’alarme à résolution standard, 1 million de requêtes API par mois, 5 Go de données pour l’ingestion et l’archivage des logs ainsi que les requêtes Logs Insights, 3 tableaux de bord personnalisés contenant jusqu’à 50 métriques chacun, 1 800 minutes de Live Tail par mois, 100 exécutions de canaris Synthetics par mois]
conditions: [Compte AWS, Compte de facturation et moyen de paiement configurés, Ressources et journaux envoyés vers CloudWatch]
restrictions: [Dépassements facturés aux tarifs de la région AWS utilisée, GetMetricData GetInsightRuleReport et GetMetricWidgetImage exclus du million de requêtes gratuites, Alarmes haute résolution et alarmes basées sur des requêtes facturables, Les dimensions distinctes peuvent être comptées comme des métriques séparées, Les fonctions avancées d’observabilité disposent de quotas ou d’essais spécifiques]
usages: [Monitoring, Logs, Alertes]
url: https://aws.amazon.com/cloudwatch/
documentation: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html
source: https://aws.amazon.com/cloudwatch/pricing/
couleur: "#ff9900"
initiales: CW
carteRequise: true
depassementFacture: true
permanent: true
statut: active
vedette: false
ordre: 14
verifieLe: 2026-08-13
verificationAutomatiqueLe: 2026-08-13
verificationNote: "Quotas permanents de métriques, alarmes, API, journaux et tableaux de bord confirmés sur la page tarifaire officielle Amazon CloudWatch."
---

Amazon CloudWatch centralise la télémétrie des ressources AWS et des applications : métriques, logs, tableaux de bord et alertes. Son Free Tier permanent suffit pour superviser une petite infrastructure, à condition de surveiller le nombre de dimensions, les requêtes API exclues et les fonctions d’analyse avancées.
