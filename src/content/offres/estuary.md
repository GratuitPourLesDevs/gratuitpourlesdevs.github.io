---
nom: Estuary
accroche: Plateforme d’intégration de données temps réel, CDC et ETL avec connecteurs managés
type: Service managé
categorie: api-donnees-ml
formule: Developer gratuit avec 10 Go de données par mois et 2 connecteurs simultanés
inclus: [10 Go de données transférées par mois, 2 instances de connecteur simultanées, Plus de 200 connecteurs managés, CDC temps réel et traitements batch, Gestion par interface et CLI]
conditions: [Compte Estuary gratuit]
restrictions: [Maximum de 2 connecteurs simultanés, Quota mensuel de 10 Go, Le dépassement des limites lance un essai Cloud de 30 jours]
alertes:
  - type: finance
    niveau: important
    libelle: Essai après dépassement
    detail: Le dépassement du Free Tier déclenche un essai Cloud de 30 jours avant qu’un choix de plan soit nécessaire.
usages: [Données, Intégration applicative, Traitement événementiel]
url: https://estuary.dev/
documentation: https://docs.estuary.dev/
source: https://estuary.dev/pricing/
couleur: "#2563EB"
initiales: ES
carteRequise: false
depassementFacture: false
permanent: true
statut: active
vedette: false
ordre: 1187
verifieLe: 2026-09-25
verificationAutomatiqueLe: 2026-09-25
verificationNote: "Le Free Tier permanent, 10 Go mensuels, 2 connecteurs et l’absence de carte ont été confirmés officiellement."
verificationEtat: confirmee
verificationCode: gratuit_detecte
verificationEchecsConsecutifs: 0
---

Estuary relie des sources et destinations de données au moyen de pipelines CDC, streaming ou batch. Le plan Developer suffit pour tester une synchronisation réelle ou alimenter un petit projet analytique, à condition de rester sous deux connecteurs et dix gigaoctets mensuels.
