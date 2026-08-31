---
nom: "Fivetran Activations (ex-Census)"
accroche: "Reverse ETL issu de Census pour synchroniser les données d’un warehouse vers plus de 200 destinations métier."
type: "SaaS"
categorie: analytique-evenements-statistiques
formule: "Free : 3 500 lignes actives mensuelles pour Activations"
inclus:
- "3 500 MAR par mois pour Activations"
- "Plus de 200 destinations d’activation"
- "Fonctionnalités du plan Standard à faible volume"
- "Utilisateurs illimités"
- "Aucune carte bancaire requise"
conditions:
- "Rester sous les limites du plan Free"
restrictions:
- "Census est désormais intégré à Fivetran sous le nom Activations"
- "Après un second dépassement de la limite Free, Fivetran peut geler les activations et le compte jusqu’à optimisation ou mise à niveau"
alertes:
- type: usage
  niveau: important
  libelle: "Census devient Fivetran Activations"
  detail: "L’ancien produit Census est désormais commercialisé et facturé dans Fivetran sous le nom Activations."
usages: ["Données", "Automatisation", "Intégration applicative"]
url: https://www.fivetran.com/products/activations
source: https://www.fivetran.com/pricing/free-plan
couleur: "#0073FF"
initiales: "FTA"
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 1160
verifieLe: '2026-08-25'
verificationAutomatiqueLe: 2026-08-31
verificationNote: "Site officiel momentanément indisponible (HTTP 404) ; statut éditorial conservé jusqu’à confirmation."
verificationEtat: "controle_requis"
verificationCode: "site_indisponible"
verificationEchecsConsecutifs: 1
---

Fivetran Activations est utile lorsque les données utiles existent déjà dans le warehouse mais doivent ensuite alimenter un CRM, un outil marketing, un support client ou une autre application métier. Le Reverse ETL évite de maintenir une collection de scripts maison pour recopier ces données et permet aux équipes de travailler à partir d’une source centrale. Le plan gratuit est adapté aux premières synchronisations et petits volumes ; les 3 500 MAR mensuels imposent toutefois de sélectionner soigneusement les données réellement nécessaires.
