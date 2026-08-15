---
nom: AWS CodePipeline
accroche: Orchestration visuelle de pipelines de livraison continue sur AWS
type: PaaS
categorie: ci-cd
formule: 1 pipeline V1 actif ou 100 minutes d’actions V2 par mois
inclus: [1 pipeline V1 actif gratuit par mois, 100 minutes d’exécution d’actions gratuites par mois partagées entre tous les pipelines V2 du compte, Pipelines gratuits pendant leurs 30 premiers jours, Approbations manuelles et actions personnalisées V2 non facturées, Intégration avec CodeCommit GitHub CodeBuild CodeDeploy S3 et les services tiers]
conditions: [Compte AWS, Compte de facturation et moyen de paiement configurés, Sources étapes et actions du pipeline configurées, Services AWS ou tiers nécessaires au workflow accessibles]
restrictions: [Pipeline V1 supplémentaire actif facturé 1 dollar par mois, "Actions V2 supplémentaires facturées 0,002 dollar par minute d’exécution", Minutes V2 inutilisées non reportées au mois suivant, Durée de chaque action V2 arrondie à la minute supérieure, Stockage et accès aux artefacts S3 ainsi que les services déclenchés facturés séparément]
usages: [CI/CD, Orchestration, Déploiement]
url: https://aws.amazon.com/codepipeline/
documentation: https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html
source: https://aws.amazon.com/codepipeline/pricing/
couleur: "#ff9900"
initiales: CP
carteRequise: true
depassementFacture: true
permanent: true
statut: active
vedette: false
ordre: 20
verifieLe: 2026-08-13
verificationAutomatiqueLe: 2026-08-13
verificationNote: "Free Tier permanent confirmé sur la page tarifaire officielle pour les pipelines V1 et V2."
---

AWS CodePipeline relie les étapes source, compilation, test, approbation et déploiement d’un workflow de livraison continue. Le type V1 convient à un pipeline classique facturé par pipeline actif, tandis que le type V2 ajoute notamment des déclencheurs et des variables avec une facturation à la minute d’action.
