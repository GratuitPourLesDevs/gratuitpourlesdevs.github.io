---
nom: Scalr
accroche: Automatisation et collaboration Terraform ou OpenTofu à grande échelle
type: SaaS
categorie: gestion-cloud
formule: 50 runs Terraform ou OpenTofu par mois avec 2 exécutions simultanées
inclus: [50 runs distants par mois, 2 runs simultanés, Utilisateurs environnements workspaces et ressources gérées illimités, Gestion distante de l’état Terraform et OpenTofu, Intégration GitOps avec plans et résultats publiés dans les pull requests, RBAC avec rôles personnalisés, SAML 2.0 sans supplément, Détection de dérive et estimation des coûts, Politiques OPA et contrôles Checkov, Registres privés de modules et de fournisseurs, Agents auto-hébergés illimités]
conditions: [Compte Scalr, Configuration Terraform ou OpenTofu, Connexion facultative à un fournisseur Git et aux comptes cloud ciblés]
restrictions: [Un plan distant et un apply distant comptent chacun comme un run, Les runs gratuits non utilisés ne sont pas reportés au mois suivant, Passage à la tarification par run au-delà de 50 exécutions mensuelles, Les ressources créées chez les fournisseurs cloud restent facturées séparément, Historique des plans seuls conservé 30 jours, Certaines fonctions contractuelles et de conformité avancée restent réservées à Enterprise]
alertes:
  - type: finance
    niveau: critique
    libelle: Cloud facturé séparément
    detail: Les ressources créées chez les fournisseurs cloud restent facturées par ces fournisseurs.
  - type: operationnel
    niveau: important
    libelle: Un plan et un apply valent 2 runs
    detail: Un plan distant et son apply consomment chacun une exécution sur le quota mensuel.
usages: [Terraform, OpenTofu, GitOps]
url: https://scalr.com/
documentation: https://docs.scalr.io/
source: https://scalr.com/pricing
couleur: "#00a67e"
initiales: SC
carteRequise: false
permanent: true
statut: "active"
vedette: false
ordre: 17
verifieLe: 2026-08-17
verificationAutomatiqueLe: 2026-08-17
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
---

Scalr fournit une plateforme Terraform Automation and Collaboration Software compatible avec Terraform et OpenTofu. Elle centralise les états, les exécutions, les politiques et les accès tout en permettant un fonctionnement GitOps ; le mode local « state storage only » conserve gratuitement l’état sans décompter de run distant.
