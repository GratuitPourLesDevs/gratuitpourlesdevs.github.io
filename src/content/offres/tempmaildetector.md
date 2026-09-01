---
nom: "TempMailDetector"
accroche: "API qui indique si un domaine d’e-mail appartient à un service temporaire ou jetable."
type: "API"
categorie: "email"
formule: "Free : 200 recherches de domaines par mois"
inclus: ["200 lookups/mois", "API de détection d’e-mails temporaires", "Aucune carte bancaire requise"]
conditions: ["Aucune carte bancaire requise pour le niveau gratuit"]
restrictions: ["La vérification porte principalement sur le domaine"]
alertes:
  - type: "usage"
    niveau: "important"
    libelle: "200 lookups par mois"
    detail: "Le quota gratuit se renouvelle chaque mois et l’analyse porte principalement sur le domaine."
usages: ["API", "E-mail transactionnel", "Développement et test"]
url: "https://tempmaildetector.com/"
source: "https://tempmaildetector.com/"
couleur: "#2563EB"
initiales: "TE"
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 718
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

TempMailDetector est une API simple pour détecter si le domaine d’une adresse appartient à un fournisseur d’e-mails temporaires. Le niveau gratuit fournit 200 recherches par mois sans demander de carte bancaire, ce qui convient à un petit formulaire, une preuve de concept ou une validation complémentaire lors d’une inscription. L’outil raisonne principalement au niveau du domaine : il est donc pertinent pour repérer les services jetables connus, mais ne remplace pas à lui seul une validation complète de l’existence d’une boîte.
