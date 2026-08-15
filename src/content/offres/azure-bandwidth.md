---
nom: Azure Bandwidth
accroche: Transfert de données entrant et quota mensuel de trafic Internet sortant
type: IaaS
categorie: cdn-protection
formule: 100 Go de trafic Internet sortant gratuits par mois dans toutes les régions Azure
inclus: [100 Go de trafic Internet sortant par mois, Transfert de données entrant gratuit, Transfert au sein d’une même zone de disponibilité gratuit, Transfert d’une origine Azure vers Azure Front Door Standard ou Premium gratuit, Certains transferts d’une origine Azure vers Azure CDN gratuits]
conditions: [Compte Microsoft, Abonnement Azure actif, Moyen de paiement configuré, Ressources Azure générant le trafic]
restrictions: [Trafic sortant au-delà de 100 Go par mois facturé au Go, Tarifs variables selon le continent source et le routage choisi, Transferts entre régions Azure généralement facturés, Cas particuliers soumis aux tarifs Azure CDN ExpressRoute ou Peering, Le quota historique de 15 Go pendant 12 mois n’est plus la limite de référence actuelle]
usages: [Réseau, Trafic sortant, Bande passante, Architecture cloud]
url: https://azure.microsoft.com/en-us/pricing/details/bandwidth/
documentation: https://learn.microsoft.com/en-us/azure/networking/fundamentals/
source: https://azure.microsoft.com/en-us/pricing/details/bandwidth/
couleur: "#0078d4"
initiales: BW
carteRequise: true
depassementFacture: true
permanent: true
statut: active
vedette: false
ordre: 40
verifieLe: 2026-08-14
verificationAutomatiqueLe: 2026-08-14
verificationNote: "Microsoft indique que les 100 premiers Go de trafic Internet sortant sont gratuits chaque mois pour tous les clients et dans toutes les régions Azure. Cette règle permanente remplace avantageusement l’ancienne référence de 15 Go pendant 12 mois."
---

Azure Bandwidth couvre les transferts de données vers et depuis les centres de données Azure. Microsoft accorde actuellement les 100 premiers Go de trafic Internet sortant chaque mois, quelle que soit la région Azure, tandis que le trafic entrant reste gratuit. Les échanges entre régions, ainsi que certains chemins passant par CDN, ExpressRoute ou Peering, suivent des grilles tarifaires distinctes.
