---
nom: AWS CodePipeline
accroche: Orchestration visuelle de pipelines de livraison continue sur AWS
type: PaaS
categorie: ci-cd
formule: 1 pipeline V1 actif ou 100 minutes d’actions V2 par mois
inclus: [1 pipeline V1 actif gratuit par mois, 100 minutes d’exécution d’actions gratuites par mois partagées entre tous les pipelines V2 du compte, Pipelines gratuits pendant leurs 30 premiers jours, Approbations manuelles et actions personnalisées V2 non facturées, Intégration avec CodeCommit GitHub CodeBuild CodeDeploy S3 et les services tiers]
conditions: [Compte AWS, Compte de facturation et moyen de paiement configurés, Sources étapes et actions du pipeline configurées, Services AWS ou tiers nécessaires au workflow accessibles]
restrictions: [Pipeline V1 supplémentaire actif facturé 1 dollar par mois, "Actions V2 supplémentaires facturées 0,002 dollar par minute d’exécution", Minutes V2 inutilisées non reportées au mois suivant, Durée de chaque action V2 arrondie à la minute supérieure, Stockage et accès aux artefacts S3 ainsi que les services déclenchés facturés séparément]
alertes:
  - type: finance
    niveau: critique
    libelle: Dépassement facturé
    detail: Les pipelines ou minutes supplémentaires sont facturés dès que le quota gratuit est dépassé.
  - type: finance
    niveau: important
    libelle: Services associés facturables
    detail: Les artefacts S3 et les services exécutés par le pipeline restent facturés séparément.
usages: [CI/CD, Orchestration, Déploiement]
url: https://aws.amazon.com/codepipeline/
documentation: https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html
source: https://aws.amazon.com/codepipeline/pricing/
couleur: "#ff9900"
initiales: CP
carteRequise: true
depassementFacture: true
permanent: true
statut: "active"
vedette: false
ordre: 20
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

AWS CodePipeline est utile pour orchestrer un déploiement AWS reproductible : récupérer le code, lancer la compilation et les tests, demander une approbation puis publier l’application. Le niveau gratuit couvre un pipeline V1 actif ou 100 minutes mensuelles d’actions V2, ce qui peut suffire à un petit projet déployé peu souvent et évite d’écrire soi-même toute l’orchestration. Cette gratuité ne rend pas la chaîne entière gratuite : les artefacts S3, CodeBuild, CodeDeploy et les autres services appelés suivent leur propre tarification. Il faut donc changer d’architecture ou prévoir un budget dès que plusieurs pipelines restent actifs ou que les actions V2 dépassent 100 minutes.
