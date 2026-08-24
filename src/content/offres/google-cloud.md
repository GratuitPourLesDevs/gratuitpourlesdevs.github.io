---
nom: Google Cloud Free Tier
accroche: Compute, serverless et données avec des quotas gratuits permanents
type: IaaS
categorie: grands-fournisseurs-cloud
formule: Quotas Always Free sur une sélection de services, plus 300 USD de crédit pendant 90 jours pour les nouveaux clients
inclus: [Compute Engine avec l’équivalent d’une VM e2-micro par mois dans trois régions américaines, 30 Go-mois de disque persistant standard, Firestore avec 1 Gio de stockage et 50 000 lectures par jour, BigQuery avec 1 Tio de requêtes et 10 Gio de stockage par mois, Cloud Run avec 2 millions de requêtes par mois, Cloud Build avec 2 500 minutes de build par mois, App Engine Standard avec 28 heures F1 et 9 heures B1 par jour]
conditions: [Compte Google Cloud, Compte de facturation actif, Moyen de paiement demandé à l’inscription]
restrictions: [Régions et références éligibles propres à chaque produit, Les dépassements sont facturables après passage à un compte payant, Le crédit de 300 USD expire après 90 jours, Le quota gratuit App Engine concerne uniquement l’environnement standard, GPU et TPU exclus du Free Tier Compute Engine]
alertes:
  - type: operationnel
    niveau: important
    libelle: Régions éligibles limitées
    detail: Les quotas Always Free ne s’appliquent qu’aux régions et références prévues pour chaque produit.
  - type: operationnel
    niveau: important
    libelle: Crédit limité à 90 jours
    detail: Le crédit de bienvenue de 300 USD expire après quatre-vingt-dix jours.
usages: [Compute, Serverless, Données]
url: https://cloud.google.com/free
documentation: https://docs.cloud.google.com/free/docs/free-cloud-features
source: https://docs.cloud.google.com/free/docs/free-cloud-features
couleur: "#4285f4"
initiales: GCP
carteRequise: true
depassementFacture: true
permanent: true
statut: "active"
vedette: false
ordre: 12
verifieLe: 2026-08-24
verificationAutomatiqueLe: 2026-08-24
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
---

Google Cloud combine un Free Tier sans date d’expiration sur une sélection de produits et un crédit temporaire réservé aux nouveaux clients. Les quotas gratuits restent propres à chaque service et souvent limités à certaines régions : il faut donc surveiller la facturation dès qu’une ressource sort du périmètre éligible.
