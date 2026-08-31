---
nom: Zoho Catalyst
accroche: Plateforme full-stack serverless réunissant calcul, données, hébergement et services backend
type: PaaS
categorie: paas
formule: 25 000 Go-secondes de fonctions, 15 Go-heures AppSail et quotas backend renouvelés chaque mois
inclus:
  - 25 000 Go-secondes de fonctions serverless par mois
  - 15 Go-heures AppSail par mois
  - 2 000 transitions de Circuits par mois
  - 300 000 requêtes d’hébergement web par mois
  - 100 000 appels API Gateway par mois
  - 2 Go de stockage Data Store
  - 10 000 lectures et 5 000 insertions Data Store par mois
  - 5 Go de stockage de fichiers
  - 10 000 téléchargements et 2 000 téléversements de fichiers par mois
  - 1 000 requêtes de recherche par mois
  - 100 emails et 500 notifications push par mois
  - 5 heures de navigateur headless et 50 conversions PDF par mois
conditions:
  - Compte Zoho Catalyst
  - Quotas gratuits partagés entre tous les projets et organisations du compte
  - Centres de données pris en charge aux États-Unis en Inde en Australie ou dans l’Union européenne
  - Aucune carte bancaire nécessaire pour commencer
restrictions:
  - Chaque quota est un plafond mensuel propre au composant concerné
  - Les quotas sont consolidés au niveau du compte et non accordés par projet
  - Le dépassement d’un quota active la facturation à l’usage pour la ressource concernée
  - Une facturation minimale de 5 USD par projet s’applique après dépassement du niveau gratuit
  - Un moyen de paiement est demandé avant de poursuivre au-delà des quotas gratuits
  - Les limites du niveau gratuit peuvent évoluer
alertes:
  - type: finance
    niveau: critique
    libelle: Dépassement facturé
    detail: Le dépassement d’un quota active la facturation à l’usage pour la ressource concernée.
usages:
  - Backend d’application
  - Fonctions serverless
  - API et microservices
  - Applications web
  - Base de données relationnelle
  - Stockage de fichiers
  - Automatisation et traitements planifiés
url: https://catalyst.zoho.com/
documentation: https://docs.catalyst.zoho.com/en/deployment-and-billing/billing/free-tier/
source: https://catalyst.zoho.com/free-tier.html
couleur: "#e42527"
initiales: ZC
carteRequise: false
depassementFacture: true
permanent: true
statut: "active"
vedette: false
ordre: 58
verifieLe: 2026-08-31
verificationAutomatiqueLe: 2026-08-31
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Zoho Catalyst fournit un environnement full-stack pour construire et exploiter des applications serverless sans assembler séparément le calcul, les API, les données, le stockage et l’hébergement. Ses quotas gratuits se renouvellent chaque mois tant que l’usage reste sous les plafonds définis pour l’ensemble du compte.
