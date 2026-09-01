---
nom: "Stadia Maps"
accroche: "Cartes, tuiles, routage et APIs géospatiales avec un système unifié de crédits mensuels."
type: "API"
categorie: cartographie
formule: "Free : 200 000 crédits par mois, sans dépassement automatique"
inclus:
- "200 000 crédits par mois"
- "Basemaps standards"
- "APIs de base"
- "Styles Stamen hébergés"
- "Aucune carte bancaire requise à l’inscription"
conditions:
- "Usage développement, évaluation ou non commercial"
- "Attribution requise selon les données et styles utilisés"
restrictions:
- "Usage commercial interdit sur le plan Free hors développement, test ou démonstration"
- "Une fois les crédits épuisés, les APIs retournent par défaut une erreur 429 jusqu’au prochain cycle"
- "Certaines APIs ne sont accessibles qu’aux niveaux payants"
alertes:
- type: fonctionnel
  niveau: critique
  libelle: "Usage commercial interdit"
  detail: "Le plan Free est réservé au développement, à l’évaluation et aux usages non commerciaux ; un produit commercial en production nécessite un abonnement payant."
usages: ["API", "Applications web", "Données"]
url: https://stadiamaps.com/
source: https://stadiamaps.com/pricing/
couleur: "#2563EB"
initiales: "SM"
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 1114
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Stadia Maps est aujourd’hui aussi le point d’accès officiel aux styles historiques Stamen. Son free tier repose sur 200 000 crédits mensuels et bloque par défaut lorsque le pool est consommé, ce qui évite les mauvaises surprises de facturation. En contrepartie, la production commerciale nécessite une offre payante.
