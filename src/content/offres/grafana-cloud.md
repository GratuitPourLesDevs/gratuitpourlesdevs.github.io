---
nom: Grafana Cloud
accroche: Observabilité, métriques, logs et traces
type: SaaS
categorie: supervision
formule: 10k séries métriques, 50 Go de logs et 50 Go de traces par mois
inclus: [10 000 séries métriques, 50 Go de logs par mois, 50 Go de traces par mois, Rétention de 14 jours]
conditions: [Compte Grafana Cloud gratuit, Aucune carte bancaire]
restrictions: [Quotas mensuels, Capacité et rétention limitées au plan gratuit]
usages: [Observabilité, Monitoring, Logs]
url: https://grafana.com/products/cloud/
documentation: https://grafana.com/docs/grafana-cloud/
source: https://grafana.com/pricing/
couleur: "#f46800"
initiales: GC
carteRequise: false
permanent: true
statut: "active"
vedette: true
ordre: 1
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Grafana Cloud convient à un développeur ou une petite équipe qui veut réunir tableaux de bord, métriques, logs et traces sans déployer puis maintenir elle-même toute la pile Grafana, Loki et Tempo. Pour une API, un site ou un service personnel, le plan gratuit permet d’instrumenter l’application, de construire des alertes et de corréler un incident entre plusieurs signaux dans une même interface. Les quotas mensuels documentés et la rétention de 14 jours suffisent pour apprendre l’observabilité et suivre une charge modérée de manière durable. La limite arrive lorsque la télémétrie devient continue ou très détaillée : cardinalité des métriques, volume de logs et de traces, nombre d’utilisateurs et durée de conservation peuvent saturer le plan bien avant le trafic métier. Il faut alors réduire l’échantillonnage et les données collectées, ou prévoir une offre supérieure avant d’utiliser le service comme historique opérationnel de long terme.
