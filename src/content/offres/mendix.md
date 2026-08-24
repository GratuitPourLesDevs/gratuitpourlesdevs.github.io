---
nom: Mendix
accroche: Plateforme low-code d’entreprise pour construire, tester et déployer des applications web et mobiles sur le Mendix Cloud.
type: PaaS
categorie: plateformes-low-code
formule: 'Free : environnement cloud partagé, utilisateurs illimités, 0,5 GiB de base et 1 GiB de fichiers'
inclus:
- Utilisateurs applicatifs illimités pour les Free Apps standards
- 1 environnement de développement local
- 1 environnement de production sur Mendix Cloud
- 0,5 GiB de stockage base de données
- 1 GiB de stockage fichiers
- 0,5 vCPU
- Accès aux outils de développement Mendix
- Community support
conditions: []
restrictions:
- Les applications gratuites se mettent en veille après environ une heure d’inactivité et redémarrent à la demande
- Pas de garantie de disponibilité ni de capacités de production avancées
- Ressources partagées et non extensibles sur le plan Free
- Destiné surtout aux démonstrations, prototypes et petites applications personnelles
alertes:
- type: operationnel
  niveau: important
  libelle: Mise en veille automatique
  detail: Une Free App inactive s’endort et doit redémarrer à la prochaine utilisation ; ce comportement n’est pas adapté à une production exigeante.
usages:
- Applications web
- Mobile
- Prototypage
- Développement et test
url: https://www.mendix.com/
documentation: https://docs.mendix.com/developerportal/deploy/mendix-cloud-deploy/
source: https://www.mendix.com/pricing/
couleur: '#0CABF3'
initiales: ME
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 860
verifieLe: 2026-08-24
verificationAutomatiqueLe: 2026-08-24
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
---

Mendix permet de découvrir un environnement low-code d’entreprise avec un vrai déploiement cloud sans commencer par une licence payante. Le plan Free est suffisamment complet pour une démonstration, un prototype ou une petite application personnelle et n’impose pas de plafond d’utilisateurs aux Free Apps standards. Il ne faut toutefois pas le confondre avec une offre de production gratuite : ressources partagées, mise en sommeil après inactivité, absence de SLA et capacités opérationnelles réduites en font surtout un environnement d’apprentissage et de validation.
