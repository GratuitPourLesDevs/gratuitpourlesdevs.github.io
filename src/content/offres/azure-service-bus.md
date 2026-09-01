---
nom: Azure Service Bus Standard — avantage 12 mois
accroche: Files et rubriques de messagerie managées pour applications distribuées
type: PaaS
categorie: messagerie-streaming
formule: 750 heures et 13 millions d’opérations par mois pendant 12 mois
inclus: [750 heures mensuelles d’une unité de base Standard, 13 millions d’opérations mensuelles incluses, Files de messages, Rubriques et abonnements, Livraison différée, Dead-letter queues, Transactions, Sessions de messages, Détection des doublons, Jusqu’à 1 000 connexions broker incluses par mois]
conditions: [Nouveau client Azure éligible, Compte Microsoft, Abonnement Azure actif, Moyen de paiement configuré, Activation dans les 12 premiers mois suivant la création du compte, Passage au paiement à l’usage pour conserver les services après la période initiale]
restrictions: [Avantage limité aux 12 premiers mois, Réservé aux nouveaux clients Azure éligibles, Facturation du tarif Standard après expiration, Facturation possible au-delà de 750 heures mensuelles, Les opérations excédant le quota inclus suivent la tarification normale, Chaque appel API Service Bus constitue une opération, Les messages volumineux peuvent compter pour plusieurs opérations, Les ressources continuent de fonctionner et deviennent facturables après expiration]
alertes:
  - type: operationnel
    niveau: critique
    libelle: Avantage limité à 12 mois
    detail: Cette allocation est réservée aux nouveaux clients et s’arrête après douze mois.
  - type: finance
    niveau: critique
    libelle: Facturé après expiration
    detail: Les ressources continuent de fonctionner au tarif Standard après la période gratuite.
usages: [Files de messages, Pub/Sub, Intégration applicative, Architecture distribuée]
url: https://azure.microsoft.com/en-us/products/service-bus/
documentation: https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-messaging-overview
source: https://azure.microsoft.com/en-us/pricing/free-services/
couleur: "#0078d4"
initiales: SB
carteRequise: true
depassementFacture: true
permanent: false
statut: "active"
vedette: false
ordre: 48
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Azure Service Bus fournit des files et des rubriques de messagerie fiables pour découpler les composants d’une application. L’avantage Azure pour nouveaux clients couvre chaque mois 750 heures d’une unité de base Standard et 13 millions d’opérations pendant un an. Il s’agit d’une allocation temporaire : au terme des 12 mois, le namespace continue de fonctionner et devient facturable selon la tarification Service Bus en vigueur.
