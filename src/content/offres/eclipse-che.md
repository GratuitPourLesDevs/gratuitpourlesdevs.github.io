---
nom: "Eclipse Che"
accroche: "IDE cloud open source et Kubernetes-native pour fournir des workspaces développeur reproductibles dans le navigateur."
type: "Ressource"
categorie: ide-edition-code
formule: "Open source gratuit, avec instance en ligne de démonstration hébergée par Red Hat"
inclus:
- "Workspaces Kubernetes"
- "Éditeur VS Code Open Source"
- "Support JetBrains selon configuration"
- "Devfiles"
- "Déploiement auto-hébergé"
- "Instance en ligne pour essayer le produit"
conditions:
- "Un cluster Kubernetes ou OpenShift est nécessaire pour un déploiement autonome"
restrictions:
- "Les quotas de l’instance publique hébergée ne sont pas publiés comme un free tier commercial garanti"
- "Le coût de l’infrastructure Kubernetes reste à la charge de l’utilisateur en auto-hébergement"
alertes:
- type: operationnel
  niveau: important
  libelle: "Hébergement non garanti"
  detail: "Eclipse Che est libre, mais l’instance publique proposée pour l’essayer n’est pas présentée comme un SaaS gratuit avec SLA ou quotas garantis."
usages: ["Environnements de développement", "Kubernetes", "Développement et test"]
url: https://eclipse.dev/che/
source: https://eclipse.dev/che/
couleur: "#5C2D91"
initiales: "EC"
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 1131
verifieLe: '2026-08-25'
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source accessible, mais aucune mention explicite de gratuité détectée ; statut éditorial conservé pour contrôle manuel."
verificationEtat: "controle_requis"
verificationCode: "gratuit_non_detecte"
verificationEchecsConsecutifs: 2
---

Eclipse Che permet aux équipes de standardiser leurs environnements de développement sur Kubernetes. Le logiciel lui-même est libre ; la valeur principale du niveau gratuit vient donc de l’auto-hébergement et de l’instance publique destinée à l’évaluation.
