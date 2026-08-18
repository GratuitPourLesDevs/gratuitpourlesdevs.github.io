---
nom: Rendi
accroche: API FFmpeg managée pour traiter audio et vidéo sans gérer l’infrastructure
type: API
categorie: stockage-medias
formule: 50 Go de traitement/mois, 4 vCPU et 5 Go de stockage, avec carte de vérification
inclus:
  - 50 Go de données traitées par mois
  - Jusqu’à 4 vCPU
  - 5 Go-mois de stockage
  - API FFmpeg
  - Upload stockage et analyse de fichiers
  - Intégrations Zapier et Make
conditions:
  - Compte Rendi
  - Carte bancaire requise pour vérifier le compte
  - Une empreinte de 5 $ est prélevée puis remboursée après validation
restrictions:
  - Durée maximale d’une commande limitée à 1 minute sur Free
  - 4 commandes par minute
  - Quota mensuel de traitement limité à 50 Go
alertes:
  - type: finance
    niveau: important
    libelle: Carte et vérification 5 $
    detail: Le plan gratuit demande une carte bancaire et une opération de vérification de 5 dollars annoncée comme remboursée après validation.
usages:
  - API
  - Automatisation
url: https://rendi.dev/
documentation: https://docs.rendi.dev/
source: https://www.rendi.dev/pricing
couleur: "#111827"
initiales: RE
carteRequise: true
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 228
verifieLe: 2026-08-18
verificationAutomatiqueLe: 2026-08-18
verificationNote: "Le Free officiel confirme 50 Go traités/mois, 4 vCPU, 5 Go-mois de stockage et une carte avec vérification remboursée de 5 $."
---

Rendi expose FFmpeg derrière une API REST et évite de gérer workers, codecs et scaling. Son quota de calcul est généreux pour des prototypes média, mais l’activation du plan gratuit nécessite tout de même une carte bancaire.
