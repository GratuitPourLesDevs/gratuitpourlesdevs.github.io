---
nom: ipapi.co
accroche: API de localisation IP avec accès gratuit sans inscription pour petits usages
type: API
categorie: api-donnees-ml
formule: Jusqu’à 1 000 requêtes par jour et 30 000 par mois sur l’accès gratuit présenté comme Free Trial
inclus:
  - 1 000 requêtes par jour
  - 30 000 requêtes par mois
  - Endpoint utilisable sans inscription pour l’accès public
  - Géolocalisation et informations réseau
conditions: []
restrictions:
  - La tarification officielle présente l’accès gratuit sous l’intitulé Free Trial
  - Plafond journalier et mensuel
alertes:
  - type: fonctionnel
    niveau: important
    libelle: Formule présentée comme essai
    detail: Le fournisseur nomme actuellement cette offre gratuite « Free Trial » et ne la présente pas comme un plan permanent garanti.
usages: [API, Données]
url: https://ipapi.co/
documentation: https://ipapi.co/api/
source: https://ipapi.co/
couleur: "#0284c7"
initiales: IPCO
carteRequise: false
depassementFacture: false
permanent: false
statut: "active"
vedette: false
ordre: 189
verifieLe: 2026-08-18
verificationAutomatiqueLe: 2026-08-18
verificationNote: "Les pages officielles indiquent 1 000/jour et 30 000/mois, mais utilisent l’intitulé Free Trial ; permanence volontairement marquée false."
---

ipapi.co propose un accès très simple à la géolocalisation IP et peut être testé sans inscription. Le catalogue le marque toutefois comme non permanent car la tarification actuelle emploie explicitement la notion de Free Trial.
