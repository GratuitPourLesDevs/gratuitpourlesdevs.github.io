---
nom: Amazon DynamoDB
accroche: Base NoSQL serverless clé-valeur et documents à faible latence
type: PaaS
categorie: services-donnees-manages
formule: 25 Go, 25 unités de lecture et 25 unités d’écriture provisionnées par mois
inclus: [25 Go de stockage de données, 25 unités de capacité de lecture provisionnées RCU, 25 unités de capacité d’écriture provisionnées WCU, 25 unités d’écriture répliquées pour les tables globales sur deux régions, "2,5 millions de requêtes de lecture DynamoDB Streams par mois", 1 Go de transfert de données sortant par mois]
conditions: [Compte AWS, Compte de facturation et moyen de paiement configurés, Tables utilisant la classe DynamoDB Standard, Mode de capacité provisionnée configuré, Quotas appliqués par région et par compte payeur]
restrictions: [Capacité à la demande facturée par requête et non couverte par les RCU et WCU gratuites, Dépassements de stockage et de capacité facturés au tarif régional, Sauvegardes à la demande et restauration à un instant donné facturées séparément, Tables Standard Infrequent Access non éligibles aux quotas gratuits, Fonctions optionnelles comme DAX export S3 et capture des changements susceptibles d’être facturées]
alertes:
  - type: finance
    niveau: critique
    libelle: Dépassement facturé
    detail: Le stockage et la capacité dépassant le quota provisionné gratuit sont facturés automatiquement.
  - type: fonctionnel
    niveau: important
    libelle: Mode à la demande exclu
    detail: Les unités gratuites concernent la capacité provisionnée et non la facturation à la demande.
usages: [NoSQL, Serverless, Base de données]
url: https://aws.amazon.com/dynamodb/
documentation: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html
source: https://aws.amazon.com/dynamodb/pricing/
couleur: "#ff9900"
initiales: DB
carteRequise: true
depassementFacture: true
permanent: true
statut: active
vedette: false
ordre: 21
verifieLe: 2026-08-13
verificationAutomatiqueLe: 2026-08-13
verificationNote: "Quotas mensuels du Free Tier confirmés sur la page tarifaire officielle Amazon DynamoDB."
---

Amazon DynamoDB est une base NoSQL entièrement gérée pour les modèles clé-valeur et document. Avec 25 RCU et 25 WCU provisionnées, AWS estime que la formule gratuite peut couvrir environ 200 millions de requêtes mensuelles selon la taille des éléments et le type de lecture.
