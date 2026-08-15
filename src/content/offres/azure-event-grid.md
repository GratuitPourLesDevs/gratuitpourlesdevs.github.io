---
nom: Azure Event Grid Basic
accroche: Routage d’événements managé pour architectures cloud réactives
type: PaaS
categorie: messagerie-streaming
formule: 100 000 opérations Event Grid Basic gratuites par mois
inclus: [100 000 opérations gratuites chaque mois, Publication d’événements, Livraison push, Rubriques personnalisées, Rubriques système, Rubriques partenaires, Domaines Event Grid, Filtrage sur le type d’événement, Filtrage sur le début du sujet, Rétention gratuite pendant un jour]
conditions: [Compte Microsoft, Abonnement Azure actif, Moyen de paiement configuré, Utilisation du niveau Event Grid Basic, Facturation à l’usage au-delà du quota gratuit]
restrictions: [Chaque opération est comptabilisée par tranche de 64 Ko, Les événements publiés sont facturables, Les tentatives de livraison sont facturables, Le filtrage avancé est facturable, Le filtrage sur la fin du sujet est facturable, Les messages supérieurs à 64 Ko comptent pour plusieurs opérations, MQTT et livraison pull réservés au niveau Standard, Les autres ressources Azure utilisées peuvent être facturées séparément]
usages: [Architecture événementielle, Pub/Sub, Intégration cloud, Automatisation]
url: https://azure.microsoft.com/en-us/products/event-grid/
documentation: https://learn.microsoft.com/en-us/azure/event-grid/overview
source: https://azure.microsoft.com/en-us/pricing/details/event-grid/
couleur: "#0078d4"
initiales: EG
carteRequise: true
depassementFacture: true
permanent: true
statut: active
vedette: false
ordre: 47
verifieLe: 2026-08-14
verificationAutomatiqueLe: 2026-08-14
verificationNote: "La tarification officielle Microsoft confirme 100 000 opérations gratuites par mois pour Event Grid Basic. Les événements publiés, les tentatives de livraison et certains filtres sont comptabilisés, par tranche de 64 Ko de données. Le catalogue des services Azure gratuits classe cette allocation comme permanente."
---

Azure Event Grid distribue des événements entre services Azure, applications et points de terminaison HTTP. Son niveau Basic inclut en permanence 100 000 opérations par mois pour les rubriques personnalisées, système ou partenaires. Le quota ne correspond pas à 100 000 messages garantis : une publication, une tentative de livraison ou un filtrage avancé peut constituer une opération, et un événement dépassant 64 Ko en consomme plusieurs.
