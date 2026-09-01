---
nom: Azure Notification Hubs Free
accroche: Notifications push multiplateformes depuis un backend cloud ou local
type: PaaS
categorie: messagerie-streaming
formule: 1 million de notifications push et 500 appareils actifs par espace de noms
inclus: [1 million de notifications push par abonnement et par niveau, Jusqu’à 500 appareils actifs par espace de noms, Jusqu’à 100 espaces de noms Free, Jusqu’à 100 hubs par espace de noms, Envoi vers Apple APNs Google FCM et Windows WNS, Notifications ciblées par appareil utilisateur ou segment, Tags et modèles de notification, Variables de personnalisation, Requêtes sur les audiences enregistrées, Authentification SAS ou fédérée]
conditions: [Compte Microsoft, Abonnement Azure actif, Moyen de paiement configuré, Espace de noms Notification Hubs créé avec le niveau Free, Application mobile enregistrée auprès de son fournisseur de notifications, Identifiants APNs FCM ou WNS configurés]
restrictions: [Quota de notifications agrégé au niveau de l’abonnement et du niveau tarifaire, Notifications supplémentaires non disponibles dans le niveau Free, Les envois au-delà du quota peuvent être refusés ou partiellement délivrés, Maximum de 500 appareils actifs par espace de noms, Télémétrie limitée, Aucun SLA, Notifications planifiées indisponibles, Import massif et fonctions multi-locataires indisponibles, Private Link et zones de disponibilité proposés en options payantes, Notifications VoIP non officiellement prises en charge]
alertes:
  - type: operationnel
    niveau: critique
    libelle: Envois refusés au quota
    detail: Les notifications au-delà du quota peuvent être refusées ou seulement partiellement délivrées.
  - type: operationnel
    niveau: important
    libelle: Aucun SLA
    detail: Le niveau Free ne fournit aucune garantie contractuelle de disponibilité.
usages: [Notifications push, Mobile, Messagerie, Engagement utilisateur]
url: https://azure.microsoft.com/products/notification-hubs/
documentation: https://learn.microsoft.com/azure/notification-hubs/notification-hubs-push-notification-overview
source: https://azure.microsoft.com/pricing/details/notification-hubs/
couleur: "#0078d4"
initiales: NH
carteRequise: true
permanent: true
statut: "active"
vedette: false
ordre: 39
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Azure Notification Hubs fournit une API unique pour envoyer des notifications à des applications iOS, Android et Windows sans gérer séparément chaque infrastructure de push. Le niveau Free convient aux prototypes et petites audiences mobiles ; son plafond de 500 appareils actifs par espace de noms est généralement plus contraignant que le million d’envois inclus.
