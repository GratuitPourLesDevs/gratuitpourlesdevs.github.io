---
nom: AWS CodeBuild
accroche: Compilation et tests automatisés sans serveur de build à administrer
type: PaaS
categorie: ci-cd
formule: 100 minutes de build EC2 ou 6 000 secondes de build Lambda par mois
inclus: [100 minutes de build par mois avec general1.small ou arm1.small sur Amazon EC2 à la demande, 6 000 secondes de build par mois avec lambda.arm.1GB ou lambda.x86-64.1GB, Environnements de compilation entièrement gérés, Intégration aux dépôts de code et aux pipelines AWS]
conditions: [Compte AWS, Compte de facturation et moyen de paiement configurés, Projet CodeBuild associé à un code source et à une configuration de build]
restrictions: [Minutes ou secondes supplémentaires facturées selon le type de calcul et la région, Instances EC2 réservées Sandbox et serveur d’images Docker exclus de la formule gratuite, Stockage des artefacts dans Amazon S3 journaux CloudWatch chiffrement KMS et utilisation de CodePipeline susceptibles d’être facturés, Durées arrondies à la minute sur EC2 et à la seconde sur Lambda]
usages: [CI/CD, Build, Tests]
url: https://aws.amazon.com/codebuild/
documentation: https://docs.aws.amazon.com/codebuild/latest/userguide/welcome.html
source: https://aws.amazon.com/codebuild/pricing/
couleur: "#ff9900"
initiales: CB
carteRequise: true
permanent: true
statut: active
vedette: false
ordre: 18
verifieLe: 2026-08-13
verificationAutomatiqueLe: 2026-08-13
verificationNote: "Free Tier permanent confirmé sur la page tarifaire officielle AWS CodeBuild pour les petits environnements EC2 et Lambda éligibles."
---

AWS CodeBuild exécute les compilations et les tests dans des environnements gérés, sans serveur de CI à maintenir. La formule gratuite n’expire pas après douze mois et s’adresse aux nouveaux comme aux anciens clients AWS ; les ressources AWS utilisées autour du build peuvent toutefois générer des frais.
