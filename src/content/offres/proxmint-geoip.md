---
nom: Proxmint GeoIP
accroche: Endpoint JSON de géolocalisation IP annoncé sans clé et compatible CORS
type: API
categorie: api-donnees-ml
formule: Accès gratuit annoncé, quota public non vérifié
inclus:
  - Géolocalisation IP annoncée
  - Pays ville et ASN annoncés
  - Endpoint JSON annoncé sans clé
  - CORS annoncé ouvert
conditions:
  - Conditions exactes à revérifier sur la page officielle de l’outil
restrictions:
  - Quota et limites de débit non vérifiés
  - La page spécifique de l’outil n’est pas récupérable depuis les sources de vérification actuelles
alertes:
  - type: operationnel
    niveau: important
    libelle: Offre à revérifier
    detail: L’existence de Proxmint est confirmée mais les conditions précises du endpoint GeoIP gratuit ne sont pas accessibles à la vérification automatique actuelle.
usages: [API, Données]
url: https://proxmint.com/tools/ip-lookup
source: https://proxmint.com/tools/ip-lookup
couleur: "#334155"
initiales: PM
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 185
verifieLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationAutomatiqueLe: 2026-09-01
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Proxmint annonce un outil GeoIP simple basé sur MaxMind GeoLite2. La fiche est conservée en attente de vérification plutôt que de présenter comme certains des quotas ou garanties que la page officielle n’a pas permis de confirmer.
