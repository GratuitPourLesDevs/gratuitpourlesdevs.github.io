---
nom: Azure Standard Load Balancer
accroche: Répartition de trafic réseau haute disponibilité pour les charges Azure
type: IaaS
categorie: cdn-protection
formule: 750 heures, 15 Go de données traitées et jusqu’à 5 règles pendant 12 mois
inclus: [750 heures d’utilisation de Standard Load Balancer, 15 Go de données traitées, Jusqu’à 5 règles de répartition de charge, Répartition de trafic TCP et UDP, Sondes d’intégrité des services principaux, Load balancer public ou interne, Règles NAT entrantes sans frais propres]
conditions: [Nouveau compte Azure éligible aux services gratuits pendant 12 mois, Abonnement Azure actif, Moyen de paiement configuré, Création d’un Standard Load Balancer pendant la période d’éligibilité]
restrictions: [Avantage limité aux 12 premiers mois du compte Azure, Heures au-delà du quota facturées, Données traitées au-delà de 15 Go facturées, Règles supplémentaires facturées, Machines virtuelles et autres ressources du pool principal facturées séparément, Adresses IP publiques et NAT Gateway susceptibles d’être facturées, Transfert de données sortant facturé selon les quotas Azure applicables, Gateway Load Balancer et niveau Global soumis à une tarification distincte]
alertes:
  - type: operationnel
    niveau: critique
    libelle: Avantage limité à 12 mois
    detail: La gratuité est réservée aux douze premiers mois des nouveaux comptes Azure.
  - type: finance
    niveau: critique
    libelle: Machines virtuelles facturées
    detail: Les machines, adresses IP et autres ressources associées restent payantes.
usages: [Répartition de charge, Haute disponibilité, Réseau Azure]
url: https://azure.microsoft.com/products/load-balancer/
documentation: https://learn.microsoft.com/azure/load-balancer/load-balancer-overview
source: https://azure.microsoft.com/pricing/free-services
couleur: "#0078d4"
initiales: LB
carteRequise: true
depassementFacture: true
permanent: false
statut: "active"
vedette: false
ordre: 38
verifieLe: 2026-08-17
verificationAutomatiqueLe: 2026-08-17
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
---

Azure Standard Load Balancer distribue les flux réseau entre plusieurs machines virtuelles ou services principaux et retire automatiquement les instances défaillantes grâce aux sondes d’intégrité. L’avantage gratuit couvre uniquement le service de répartition pendant la première année du compte : les machines, adresses IP et transferts réseau associés conservent leurs propres règles de facturation.
