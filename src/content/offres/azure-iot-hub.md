---
nom: Azure IoT Hub F1
accroche: Passerelle cloud managée pour connecter, superviser et piloter des appareils IoT
type: PaaS
categorie: messagerie-streaming
formule: 8 000 messages par jour et 500 identités d’appareils
inclus: [Une unité IoT Hub F1 gratuite, 8 000 unités de message par jour, Enregistrement de 500 identités d’appareils, Télémétrie appareil vers cloud, Messages cloud vers appareil, Device Twins et Module Twins, Routage des messages et intégration Event Grid, Protocoles MQTT AMQP et HTTP, Supervision et diagnostics, Prise en charge de Device Provisioning Service]
conditions: [Compte Microsoft, Abonnement Azure actif, Carte bancaire ou autre moyen de facturation Azure, Création du hub avec le niveau tarifaire F1]
restrictions: [Une seule instance IoT Hub gratuite par abonnement Azure, Une seule unité disponible dans le niveau F1, "Chaque tranche de 0,5 Ko est comptabilisée comme un message", Un message de 16 Ko consomme donc 32 unités du quota, Limite quotidienne suivie d’une limitation du débit, Maximum de 500 identités d’appareils, Niveau destiné aux tests et preuves de concept, Impossible de convertir directement un hub F1 vers un niveau Basic ou Standard]
usages: [IoT, Télémétrie, Messagerie, Gestion d’appareils]
url: https://azure.microsoft.com/products/iot-hub/
documentation: https://learn.microsoft.com/azure/iot-hub/iot-hub-scaling
source: https://azure.microsoft.com/pricing/details/iot-hub/
couleur: "#0078d4"
initiales: IH
carteRequise: true
permanent: true
statut: "active"
vedette: false
ordre: 37
verifieLe: 2026-08-31
verificationAutomatiqueLe: 2026-08-31
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Azure IoT Hub F1 permet de prototyper une architecture IoT bidirectionnelle avec les fonctionnalités du niveau Standard : ingestion de télémétrie, commandes vers les appareils, jumeaux numériques, routage et protocoles spécialisés. Le quota annoncé en messages doit être interprété selon la taille de comptage de 0,5 Ko, et non comme 8 000 charges utiles de taille quelconque.
