---
nom: Svix
accroche: Webhooks as a Service avec retries, signatures, transformations et suivi de livraison
type: SaaS
categorie: messagerie-streaming
formule: 50 000 messages par mois, 200 messages/seconde et 30 jours de rétention
inclus:
  - 50 000 messages inclus par mois
  - 200 messages par seconde via API
  - 30 jours de rétention des payloads
  - Environnements illimités
  - Applications consommatrices illimitées
  - Membres d’équipe illimités
  - Transformations illimitées
  - 1 connecteur
  - Retries et messages filtrés non facturés comme messages supplémentaires
conditions:
  - Compte Svix gratuit
  - Aucune carte bancaire requise pour démarrer le Free
restrictions:
  - Les messages tentés au-delà du quota peuvent être facturés à l’usage lorsqu’une facturation est activée
  - Chaque tranche de 64 KiB d’un payload compte comme un message
alertes:
  - type: finance
    niveau: critique
    libelle: Dépassement facturable
    detail: La tarification prévoit des messages supplémentaires facturés à l’usage au-delà des 50 000 inclus lorsque le compte dispose d’une facturation active.
usages:
  - API
  - Événements
  - Traitement asynchrone
url: https://www.svix.com/
documentation: https://docs.svix.com/
source: https://www.svix.com/pricing/
couleur: "#111827"
initiales: SV
carteRequise: false
depassementFacture: true
permanent: true
statut: "active"
vedette: false
ordre: 239
verifieLe: 2026-08-31
verificationAutomatiqueLe: 2026-08-31
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Svix fournit toute la mécanique difficile des webhooks sortants : signatures, retries, monitoring et gestion des endpoints consommateurs. Le quota gratuit est particulièrement large, mais il faut surveiller la facturation à l’usage si un moyen de paiement est activé.
