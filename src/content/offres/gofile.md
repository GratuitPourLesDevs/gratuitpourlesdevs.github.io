---
nom: GoFile
accroche: "Plateforme de partage et stockage de fichiers utilisable depuis le web et via API."
type: SaaS
categorie: stockage-medias
formule: "Free : stockage éphémère avec taille et téléchargements non limités publiquement"
inclus:
- "Interface web"
- "API"
- "Taille de fichier non plafonnée publiquement"
- "Téléchargements non plafonnés publiquement"
conditions: []
restrictions:
- "Le stockage gratuit est éphémère"
- "Le contenu inactif est supprimé après la période de rétention du niveau gratuit"
alertes:
- type: operationnel
  niveau: important
  libelle: "Stockage gratuit éphémère"
  detail: "Les contenus gratuits sont conservés temporairement ; l’activité de téléchargement peut prolonger leur présence mais ils ne constituent pas un stockage permanent."
usages: ["Partage de fichiers", "API", "Stockage de fichiers"]
url: https://gofile.io/
source: https://gofile.io/
couleur: '#2563EB'
initiales: G
carteRequise: false
depassementFacture: false
permanent: true
statut: active
vedette: false
ordre: 1033
verifieLe: '2026-08-22'
verificationAutomatiqueLe: '2026-08-22'
verificationNote: "Le stockage gratuit est éphémère ; la documentation actuelle indique une rétention par défaut autour de dix jours, prolongeable par l’activité."
---

GoFile combine partage web et API, mais son espace gratuit doit être considéré comme temporaire.