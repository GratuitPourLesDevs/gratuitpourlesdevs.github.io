---
nom: OCR.Space
accroche: OCR d’images et PDF via API avec résultat JSON
type: API
categorie: api-donnees-ml
formule: 25 000 requêtes par mois, 500 par jour et fichiers jusqu’à 1 Mo
inclus:
  - 25 000 requêtes par mois
  - 500 requêtes par jour et par adresse IP
  - Images et PDF
  - Résultats JSON
  - PDF recherchable avec watermark
  - Usage commercial autorisé sans SLA
conditions:
  - Clé API gratuite
  - Aucune carte bancaire requise
restrictions:
  - Fichier limité à 1 Mo
  - PDF limité à 3 pages sur le Free
  - Aucun SLA sur le service gratuit
  - Engine 3 dispose d’un quota séparé de 2 500 conversions gratuites
alertes:
  - type: fonctionnel
    niveau: important
    libelle: Fichiers limités à 1 Mo
    detail: Le quota mensuel est généreux mais chaque fichier du plan Free reste limité à un mégaoctet et les PDF à trois pages.
usages:
  - API
  - Données
  - Automatisation
url: https://ocr.space/
documentation: https://ocr.space/ocrapi
source: https://ocr.space/ocrapi
couleur: "#2563eb"
initiales: OCR
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 215
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

OCR.Space est une API OCR simple pour extraire du texte depuis des images ou des PDF. Son quota mensuel est très généreux, mais la taille de fichier et le nombre de pages PDF constituent les limites principales du plan gratuit.
