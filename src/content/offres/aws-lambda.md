---
nom: AWS Lambda
accroche: Exécution de fonctions serverless déclenchées par événements
type: PaaS
categorie: paas
formule: 1 million de requêtes et 400 000 Go-secondes de calcul par mois
inclus: [1 million de requêtes de fonctions par mois, 400 000 Go-secondes de durée de calcul par mois, Architectures x86 et Arm éligibles, 512 Mo de stockage éphémère inclus sans supplément par fonction, Déclenchement par API événements et services AWS]
conditions: [Compte AWS, Compte de facturation et moyen de paiement configurés, Fonction Lambda classique à la demande, Code et rôle IAM de la fonction configurés]
restrictions: [Dépassements de requêtes et de durée facturés selon la région et l’architecture, Taille des événements asynchrones susceptible de compter comme plusieurs requêtes, Concurrence provisionnée exclue du Free Tier, Lambda Managed Instances facturées séparément, Services connectés journaux CloudWatch transfert de données et stockage susceptibles de générer des frais]
usages: [Serverless, Fonctions, Événements]
url: https://aws.amazon.com/lambda/
documentation: https://docs.aws.amazon.com/lambda/latest/dg/welcome.html
source: https://aws.amazon.com/lambda/pricing/
couleur: "#ff9900"
initiales: LA
carteRequise: true
depassementFacture: true
permanent: true
statut: active
vedette: false
ordre: 22
verifieLe: 2026-08-13
verificationAutomatiqueLe: 2026-08-13
verificationNote: "Quotas mensuels de requêtes et de calcul confirmés sur la page tarifaire officielle AWS Lambda."
---

AWS Lambda exécute du code en réponse à des requêtes HTTP, des messages, des changements de données ou d’autres événements sans serveur à administrer. Le quota de calcul dépend à la fois de la mémoire allouée et de la durée des exécutions : un million de requêtes ne signifie donc pas nécessairement un million d’exécutions entièrement gratuites.
