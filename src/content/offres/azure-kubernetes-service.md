---
nom: Azure Kubernetes Service — niveau Free
accroche: Plan de contrôle Kubernetes managé gratuit pour le développement et les tests
type: PaaS
categorie: docker-conteneurs
formule: Gestion du cluster AKS gratuite, ressources d’infrastructure facturées à l’usage
inclus: [Plan de contrôle Kubernetes managé, Toutes les fonctionnalités AKS actuelles, Jusqu’à 1 000 nœuds pris en charge, Clusters publics ou privés dans les régions compatibles, Mises à niveau et maintenance du plan de contrôle, Intégration avec les services Azure, Niveau Base avec tier Free]
conditions: [Compte Microsoft, Abonnement Azure actif, Moyen de paiement configuré, Création d’un cluster AKS Standard avec le niveau Free, Paiement des machines virtuelles du stockage du réseau et des autres ressources consommées]
restrictions: [Aucun SLA de disponibilité assorti de compensations financières, Disponibilité du plan de contrôle en mode best effort, Recommandé pour moins de 10 nœuds, Destiné au développement aux tests à l’apprentissage et à l’évaluation, Non recommandé pour la production, Les nœuds de calcul ne sont pas gratuits, Le stockage les adresses IP et le trafic réseau peuvent être facturés, AKS Automatic utilise le niveau Standard et non le niveau Free]
alertes:
  - type: finance
    niveau: critique
    libelle: Infrastructure facturée
    detail: Les nœuds, le stockage, les adresses IP et le trafic réseau restent facturés.
  - type: usage
    niveau: critique
    libelle: Non recommandé en production
    detail: Le niveau Free fonctionne sans SLA et vise surtout le développement et les tests.
  - type: operationnel
    niveau: important
    libelle: Aucun SLA
    detail: Le plan de contrôle fonctionne en best effort sans garantie contractuelle de disponibilité.
usages: [Kubernetes, Orchestration de conteneurs, Environnements de développement, Tests d’infrastructure]
url: https://azure.microsoft.com/en-us/products/kubernetes-service/
documentation: https://learn.microsoft.com/en-us/azure/aks/free-standard-pricing-tiers
source: https://azure.microsoft.com/en-us/pricing/details/kubernetes-service/
couleur: "#0078d4"
initiales: AK
carteRequise: true
depassementFacture: true
permanent: true
statut: "active"
vedette: false
ordre: 46
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Azure Kubernetes Service fournit un plan de contrôle Kubernetes administré par Microsoft. Le niveau Free supprime le coût de gestion du cluster et donne accès aux fonctionnalités AKS courantes pour apprendre, prototyper ou tester une infrastructure conteneurisée. Il ne rend toutefois pas le cluster entièrement gratuit : les nœuds de calcul, disques, adresses IP, équilibreurs et flux réseau consommés suivent leur propre tarification Azure.
