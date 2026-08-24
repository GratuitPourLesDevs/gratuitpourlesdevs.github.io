---
nom: NASdisks Drive Data API
accroche: Dataset et API JSON/CSV pour spécifications de disques NAS, CMR/SMR et taux de panne
type: API
categorie: api-donnees-ml
formule: API gratuite sans inscription, sans clé et sans limite de débit publiée
inclus:
  - 268 modèles de disques au moment de la vérification
  - Export JSON et CSV
  - Spécifications matérielles
  - Classification CMR ou SMR
  - Taux de panne annualisés issus de Backblaze lorsqu’ils sont disponibles
  - CORS ouvert
  - Cache d’une heure
conditions:
  - Attribution CC BY 4.0 pour les spécifications et classifications NASdisks
  - Respect des conditions Backblaze pour les données de fiabilité
restrictions:
  - Les données de fiabilité ne couvrent qu’une partie des modèles
  - Les données Backblaze ne peuvent pas être revendues seules
alertes:
  - type: usage
    niveau: important
    libelle: Attribution requise
    detail: Les spécifications NASdisks sont sous CC BY 4.0 et les champs de fiabilité héritent également des conditions d’utilisation Backblaze.
usages:
  - API
  - Données
url: https://www.nasdisks.com/data/
source: https://www.nasdisks.com/data/
couleur: "#334155"
initiales: ND
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 212
verifieLe: 2026-08-24
verificationAutomatiqueLe: 2026-08-24
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
---

NASdisks met à disposition un dataset directement consommable depuis un navigateur ou un notebook pour comparer des disques NAS. L’absence de clé et de rate limit publié en fait une ressource très simple à intégrer, sous réserve de respecter les obligations d’attribution.
