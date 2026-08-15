---
nom: AWS CodeCommit
accroche: Dépôts Git privés entièrement gérés et intégrés à AWS
type: SaaS
categorie: depots-code-source
formule: 5 utilisateurs actifs, 50 Go de stockage et 10 000 requêtes Git par mois
inclus: [5 utilisateurs actifs par mois, 50 Go de stockage mutualisé par mois, 10 000 requêtes Git mutualisées par mois, Jusqu’à 5 000 dépôts par compte AWS selon le quota de service, Intégration avec IAM CodeBuild CodePipeline et les autres services AWS]
conditions: [Compte AWS, Compte de facturation et moyen de paiement configurés, Identités IAM ou accès fédéré configurés, Dépôts créés dans une région AWS prenant en charge CodeCommit]
restrictions: [Chaque identité AWS ou serveur distinct accédant au service pendant le mois compte comme utilisateur actif, Utilisateurs actifs supplémentaires facturés 1 dollar par mois, "Stockage supplémentaire facturé 0,06 dollar par Go et par mois", "Requêtes Git supplémentaires facturées 0,001 dollar chacune", Stockage et requêtes inutilisés non reportés au mois suivant]
usages: [Git, Dépôts privés, Collaboration]
url: https://aws.amazon.com/codecommit/
documentation: https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html
source: https://aws.amazon.com/codecommit/pricing/
couleur: "#ff9900"
initiales: CC
carteRequise: true
depassementFacture: true
permanent: true
statut: active
vedette: false
ordre: 19
verifieLe: 2026-08-13
verificationAutomatiqueLe: 2026-08-13
verificationNote: "Free Tier permanent confirmé sur la page tarifaire officielle ; CodeCommit est de nouveau ouvert aux nouveaux clients depuis le 25 novembre 2025."
---

AWS CodeCommit héberge des dépôts Git privés avec contrôle d’accès IAM, chiffrement et intégration aux pipelines AWS. Après une période de fermeture aux nouveaux comptes, AWS a rétabli sa disponibilité générale en novembre 2025. La formule gratuite ne s’arrête pas après douze mois, mais les identités techniques utilisées par CodeBuild ou CodePipeline peuvent compter parmi les utilisateurs actifs.
