---
nom: "Airtable"
accroche: "Base relationnelle visuelle proche d’un tableur, avec collaboration, pièces jointes et API."
type: SaaS
categorie: services-donnees-manages
formule: "Free : 1 000 enregistrements par base et 1 000 appels API par workspace et par mois"
inclus:
- "1 000 enregistrements par base"
- "1 000 appels API par workspace et par mois"
- "1 Go de pièces jointes par base"
- "2 semaines d’historique des révisions et snapshots"
- "5 collaborateurs Editor ou Creator"
- "50 collaborateurs Commenter"
- "Collaborateurs en lecture seule illimités"
conditions:
- "Création d’un workspace Airtable gratuit"
restrictions:
- "La limite actuelle est de 1 000 enregistrements par base, et non 1 200"
- "Extensions et plusieurs fonctions avancées de vues et de personnalisation indisponibles sur Free"
- "Le quota API est partagé au niveau du workspace"
alertes:
- type: usage
  niveau: important
  libelle: Quota API partagé
  detail: Les 1 000 appels API mensuels sont partagés entre les bases et usages du workspace, pas alloués séparément à chaque base.
usages: ["Base de données", "Collaboration", "API", "Productivité"]
url: https://airtable.com/
documentation: https://support.airtable.com/
source: https://support.airtable.com/articles/2277136852-airtable-plans-overview
couleur: "#18BFFF"
initiales: AT
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 922
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Airtable mélange l’ergonomie d’un tableur avec des relations, des vues et une API utilisables comme petite couche de données collaborative. Le plan Free reste pratique pour des prototypes, catalogues internes et outils simples, mais sa limite actuelle de 1 000 enregistrements par base est plus basse que l’ancienne valeur souvent citée.
