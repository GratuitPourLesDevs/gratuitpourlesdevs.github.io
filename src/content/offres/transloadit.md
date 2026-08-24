---
nom: Transloadit
accroche: "Pipeline API de téléversement et traitement de fichiers, images, audio, vidéo et documents."
type: API
categorie: stockage-medias
formule: "Community : 5 Go de traitement par mois, fichiers jusqu’à 0,5 Go et 2 collaborateurs"
inclus:
- "5 Go de traitement mensuel"
- "Accès aux Robots de traitement"
- "200 slots prioritaires par région"
- "2 collaborateurs"
conditions: []
restrictions:
- "0,5 Go maximum par fichier"
- "Images de sortie avec watermark"
- "Audio et vidéo de sortie tronqués"
- "Service stoppé à 5 Go"
alertes:
- type: fonctionnel
  niveau: important
  libelle: "Sorties limitées sur Community"
  detail: "Sur Community, les images générées sont marquées et les sorties audio/vidéo sont tronquées ; le traitement s’arrête aussi lorsque les 5 Go mensuels sont consommés."
usages: ["API", "Distribution de médias", "Automatisation"]
url: https://transloadit.com/
source: https://transloadit.com/pricing/
couleur: '#2563EB'
initiales: T
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 1064
verifieLe: 2026-08-24
verificationAutomatiqueLe: 2026-08-24
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
---

Transloadit fournit un pipeline média complet, mais son niveau Community conserve des limitations visibles sur les sorties.