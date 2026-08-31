---
nom: PDFBolt
accroche: API de génération PDF orientée développeurs avec rendu direct synchrone ou asynchrone
type: API
categorie: api-captures-ecran
formule: 100 documents par mois, 20 requêtes/minute et 1 modèle, sans carte
inclus:
  - 100 conversions PDF réussies par mois
  - 20 requêtes par minute
  - 1 conversion concurrente
  - 1 modèle
  - API directe synchrone et asynchrone
  - Documentation orientée développeurs
  - Une génération de modèle assistée par IA
conditions:
  - Compte PDFBolt gratuit
  - Aucune carte bancaire requise
restrictions:
  - Le plan gratuit actuel est limité à 100 documents par mois et non 500
  - PDF limité à 2 Mo sur le plan gratuit
  - Une seule conversion simultanée
  - Seules les conversions réussies sont décomptées du quota mensuel
alertes:
  - type: fonctionnel
    niveau: important
    libelle: Ancien quota 500 obsolète
    detail: Le plan Free actuel affiche 100 documents par mois ; l’ancien quota de 500 conversions n’est plus applicable.
usages:
  - API
  - Automatisation
url: https://pdfbolt.com/
documentation: https://pdfbolt.com/docs
source: https://pdfbolt.com/pricing
couleur: "#111827"
initiales: PB
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 219
verifieLe: 2026-08-18
verificationAutomatiqueLe: 2026-08-31
verificationNote: "Vérification automatique incomplète (HTTP 403) ; statut éditorial conservé."
verificationEtat: "inconclusive"
verificationCode: "controle_bloque"
verificationEchecsConsecutifs: 1
---

PDFBolt expose une API simple pour transformer des pages ou données en PDF. Le Free reste adapté aux prototypes et petits services internes, mais son quota actuel est nettement inférieur aux anciennes descriptions du service.
