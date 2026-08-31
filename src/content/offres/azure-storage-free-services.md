---
nom: Azure Storage — avantages 12 mois
accroche: Stockage de fichiers, objets et archives inclus pour les nouveaux comptes Azure
type: IaaS
categorie: stockage-medias
formule: 100 Go Azure Files, 5 Go Blob Hot et 10 Go Archive Storage pendant 12 mois
inclus: [100 Go Azure Files en stockage LRS, Niveaux Azure Files Transaction Optimized Hot et Cool, Deux millions d’opérations de lecture de liste et autres opérations Azure Files, 5 Go de blobs de blocs Hot en stockage LRS, 20 000 opérations de lecture Blob, 10 000 opérations d’écriture Blob, 10 Go de données en Archive Storage LRS, 10 Go d’écriture et de récupération Archive en LRS ou GRS, 100 lectures Archive]
conditions: [Nouveau compte Azure éligible aux services gratuits pendant 12 mois, Abonnement Azure actif, Moyen de paiement configuré, Compte de stockage créé avec la redondance et le niveau d’accès éligibles]
restrictions: [Avantages limités aux 12 premiers mois du compte Azure, Quotas appliqués mensuellement sans report, Dépassements de capacité et d’opérations facturés, Transfert de données sortant soumis aux quotas Azure Bandwidth, Autres niveaux de redondance et options de stockage susceptibles d’être facturés, Récupération des données archivées non instantanée, Les sauvegardes snapshots et fonctions annexes ne sont pas automatiquement incluses]
alertes:
  - type: operationnel
    niveau: critique
    libelle: Avantage limité à 12 mois
    detail: Les quotas gratuits sont réservés aux douze premiers mois des nouveaux comptes Azure.
  - type: finance
    niveau: critique
    libelle: Dépassement facturé
    detail: La capacité et les opérations au-delà des quotas sont automatiquement facturées.
usages: [Stockage objet, Partage de fichiers, Archivage, Sauvegarde]
url: https://azure.microsoft.com/en-us/products/category/storage/
documentation: https://learn.microsoft.com/en-us/azure/storage/common/storage-introduction
source: https://azure.microsoft.com/en-us/pricing/free-services/
couleur: "#0078d4"
initiales: ST
carteRequise: true
depassementFacture: true
permanent: false
statut: "active"
vedette: false
ordre: 43
verifieLe: 2026-08-31
verificationAutomatiqueLe: 2026-08-31
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Les avantages Azure Storage destinés aux nouveaux comptes couvrent trois usages complémentaires : les partages de fichiers Azure Files, les objets Blob fréquemment consultés et les données placées en archive. Chaque service possède ses propres quotas de capacité et d’opérations. Une fois les 12 mois écoulés, ou dès qu’un plafond mensuel est dépassé, la tarification standard Azure s’applique.
