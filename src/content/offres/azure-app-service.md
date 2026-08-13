---
nom: Azure App Service
accroche: Hébergement managé d’applications web et d’API sur Azure
type: PaaS
categorie: paas
formule: Jusqu’à 10 applications, 60 minutes CPU par jour et 1 Go de stockage
inclus: [Plan App Service F1 à 0 dollar, Jusqu’à 10 applications par plan App Service, 60 minutes CPU par jour, 1 Go de mémoire vive partagée, 1 Go de stockage partagé entre les applications du plan, Hébergement de code Windows ou Linux, Sous-domaine azurewebsites.net avec certificat générique]
conditions: [Compte Microsoft, Abonnement Azure actif, Plan App Service configuré sur la référence F1, Déploiement du code et des paramètres de l’application, Moyen de paiement généralement demandé à la création d’un abonnement Azure hors offres spécifiques]
restrictions: [Plan destiné aux essais à l’expérimentation et à l’apprentissage, Aucune garantie de disponibilité ni SLA, Charges de production non prises en charge, Quota CPU mesuré par application, Une seule instance de calcul partagée, Architecture 32 bits, Cinq connexions WebSocket simultanées par instance, Domaines personnalisés et certificats App Service non pris en charge, Stockage partagé entre toutes les applications du même plan]
usages: [Applications web, API, Prototypes]
url: https://azure.microsoft.com/products/app-service/
documentation: https://learn.microsoft.com/azure/app-service/overview
source: https://azure.microsoft.com/fr-fr/pricing/details/app-service/windows/
couleur: "#0078d4"
initiales: AS
carteRequise: true
permanent: true
statut: active
vedette: false
ordre: 30
verifieLe: 2026-08-13
verificationAutomatiqueLe: 2026-08-13
verificationNote: "Plan F1 gratuit, 60 minutes CPU quotidiennes, 1 Go de RAM et de stockage et limite de 10 applications confirmés par la tarification et les limites officielles Azure."
---

Azure App Service déploie des sites et API sans administrer directement les serveurs, avec intégration aux outils de développement et aux autres services Azure. Le plan F1 convient aux démonstrations, ateliers et petits prototypes intermittents ; ses ressources partagées, son quota CPU journalier et l’absence de domaine personnalisé le rendent inadapté à une application de production.
