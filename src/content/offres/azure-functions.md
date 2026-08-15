---
nom: Azure Functions
accroche: Exécution serverless de fonctions déclenchées par HTTP ou par événement
type: PaaS
categorie: paas
formule: 1 million d’exécutions et 400 000 Go-secondes de calcul gratuits par mois
inclus: [1 million d’exécutions gratuites par mois, 400 000 Go-secondes de consommation de ressources par mois, Mise à l’échelle automatique selon les événements, Déclencheurs HTTP files messages minuteries et services Azure, Facturation à l’exécution sur le plan Consumption, Prise en charge de plusieurs langages et outils de déploiement]
conditions: [Compte Microsoft, Abonnement Azure payant à l’utilisation, Application Functions hébergée sur un plan Consumption éligible, Compte Azure Storage associé à l’application, Code déclencheurs autorisations et paramètres configurés]
restrictions: [Crédits gratuits agrégés entre toutes les applications Functions de l’abonnement, Crédits applicables uniquement aux compteurs à la demande des abonnements Consumption payants, Dépassements d’exécutions et de Go-secondes facturés, Instances Always Ready du plan Flex exclues des crédits gratuits, Compte de stockage obligatoire facturé séparément, Réseau journalisation et services Azure connectés susceptibles d’être facturés, Démarrages à froid possibles en l’absence d’instance active, Durée et capacité d’exécution dépendant du plan choisi]
usages: [Serverless, API, Traitement événementiel]
url: https://azure.microsoft.com/products/functions/
documentation: https://learn.microsoft.com/azure/azure-functions/consumption-plan
source: https://azure.microsoft.com/fr-fr/pricing/details/functions/
couleur: "#0078d4"
initiales: AF
carteRequise: true
depassementFacture: true
permanent: true
statut: active
vedette: false
ordre: 31
verifieLe: 2026-08-13
verificationAutomatiqueLe: 2026-08-13
verificationNote: "Crédit mensuel de 1 million d’exécutions et 400 000 Go-secondes confirmé dans la tarification officielle Azure Functions pour le plan Consumption."
---

Azure Functions exécute du code à la demande en réponse à des appels HTTP, messages, minuteries ou événements provenant d’autres services Azure. Le double quota gratuit couvre le nombre d’exécutions et leur consommation mémoire multipliée par la durée : rester sous un million d’appels ne suffit donc pas si les fonctions sont longues ou fortement dimensionnées.
