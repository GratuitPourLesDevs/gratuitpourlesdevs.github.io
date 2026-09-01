---
nom: Pulumi Cloud Individual
accroche: Infrastructure as Code multicloud avec des langages de programmation familiers
type: SaaS
categorie: gestion-cloud
formule: 1 utilisateur, projets et stacks illimités, plus 500 minutes de déploiement par mois
inclus: [1 utilisateur, Projets stacks et environnements illimités, Mises à jour et historique illimités, Gestion distante et sécurisée de l’état IaC, 500 minutes de workflow partagées entre Pulumi Deployments et Insights par mois, 25 secrets Pulumi ESC, 10 000 appels API de lecture de secrets par mois, 5 millions de jetons Pulumi Neo par mois, Intégrations avec les principaux systèmes CI/CD, Pulumi CLI et SDK open source utilisables avec un backend autogéré]
conditions: [Compte Pulumi Individual gratuit sans carte bancaire, Installation du CLI Pulumi ou utilisation des déploiements gérés, Compte chez le fournisseur cloud ciblé]
restrictions: [Les ressources créées chez les fournisseurs cloud restent facturées séparément, Limite d’un seul utilisateur et d’une seule mise à jour de stack simultanée, Collaboration en organisation et fonctions d’équipe réservées aux offres payantes, SSO RBAC avancé audit et remédiation de dérive réservés aux offres supérieures, Dépassement des 500 minutes soumis aux conditions tarifaires applicables]
alertes:
  - type: finance
    niveau: critique
    libelle: Cloud facturé séparément
    detail: Les ressources créées chez AWS, Azure ou Google Cloud restent facturées par le fournisseur.
  - type: fonctionnel
    niveau: important
    libelle: Un seul utilisateur
    detail: Le plan Individual limite l’espace Pulumi Cloud à un seul utilisateur.
usages: [Infrastructure as Code, Multicloud, Déploiement]
url: https://www.pulumi.com/
documentation: https://www.pulumi.com/docs/iac/
source: https://www.pulumi.com/pricing/
couleur: "#8a3391"
initiales: PU
carteRequise: false
permanent: true
statut: "active"
vedette: false
ordre: 16
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Pulumi permet de définir une infrastructure avec TypeScript, Python, Go, C#, Java ou YAML, puis de la déployer sur de nombreux clouds. Le plan Individual convient aux projets personnels et privés ; le CLI open source peut également fonctionner sans Pulumi Cloud avec un backend de stockage autogéré.
