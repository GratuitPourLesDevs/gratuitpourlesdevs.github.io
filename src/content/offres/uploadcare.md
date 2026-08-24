---
nom: Uploadcare
accroche: "Pipeline média pour téléversement, transformation, optimisation et livraison CDN de fichiers."
type: SaaS
categorie: stockage-medias
formule: "Free : 1 000 opérations, 5 Go de trafic et 1 Go de stockage par mois"
inclus:
- "API et widget d’upload"
- "Image CDN"
- "Compression intelligente"
- "1 000 opérations mensuelles"
- "5 Go de trafic"
conditions: []
restrictions:
- "1 Go de stockage"
- "500 Mo maximum par fichier"
- "Suspension temporaire à la limite gratuite"
alertes:
- type: operationnel
  niveau: important
  libelle: "Suspension à la limite gratuite"
  detail: "Lorsque le quota gratuit est atteint, le service peut être temporairement suspendu jusqu’au prochain cycle mensuel ou à une mise à niveau."
usages: ["API", "CDN", "Distribution de médias", "Stockage"]
url: https://uploadcare.com/hub/developers/
source: https://uploadcare.com/pricing/
couleur: '#2563EB'
initiales: U
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 1066
verifieLe: 2026-08-24
verificationAutomatiqueLe: 2026-08-24
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
---

Uploadcare regroupe upload, traitement et CDN dans une API média, avec quotas mensuels clairement définis.