---
nom: file.io
accroche: "Partage temporaire de fichiers avec API REST et suppression automatique après téléchargement."
type: API
categorie: stockage-medias
formule: "Free : fichiers jusqu’à 2 Go et 4 Go de téléversement par heure"
inclus:
- "API REST"
- "Liens temporaires"
- "Suppression automatique après téléchargement"
conditions: []
restrictions:
- "2 Go maximum par fichier"
- "4 Go de téléversement par heure"
alertes:
- type: operationnel
  niveau: important
  libelle: "Suppression après le téléchargement"
  detail: "Dans le mode de partage à usage unique, le fichier est automatiquement supprimé après son premier téléchargement."
usages: ["Partage de fichiers", "API", "Stockage de fichiers"]
url: https://www.file.io/
source: https://www.file.io/#pricing
couleur: '#2563EB'
initiales: FI
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 1030
verifieLe: 2026-08-24
verificationAutomatiqueLe: 2026-08-24
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
---

file.io est utile pour transmettre des fichiers de façon temporaire, notamment via son API.