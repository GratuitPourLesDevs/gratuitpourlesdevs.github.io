---
nom: Azure DevTest Labs
accroche: Création gouvernée d’environnements Azure de développement et de test
type: SaaS
categorie: gestion-cloud
formule: Service de gestion des laboratoires gratuit, ressources Azure sous-jacentes facturées
inclus: [Création de laboratoires sans frais de service, Création et réutilisation de modèles d’environnement, Ajout de dépôts Git d’artefacts, Installation d’outils scripts et applications après le provisionnement, Politiques de quotas par utilisateur ou par laboratoire, Démarrage et arrêt automatiques des machines, Suivi des coûts via Azure Cost Management]
conditions: [Compte Microsoft, Abonnement Azure actif avec facturation, Utilisateurs présents dans le locataire Microsoft Entra ID, Autorisations Azure RBAC adaptées, Modèles images réseaux et politiques du laboratoire configurés]
restrictions: [Machines virtuelles facturées pendant leur exécution, Disques VHD et comptes de stockage facturés séparément, Réseau public adresses IP trafic et services associés susceptibles d’être facturés, Azure Key Vault susceptible d’être facturé pour les dépôts Git privés, Aucun quota de calcul ou de machine virtuelle offert par DevTest Labs, Coûts dépendant des tailles régions durées d’exécution et licences choisies, Arrêt automatique ne supprimant pas nécessairement les coûts de stockage]
alertes:
  - type: finance
    niveau: critique
    libelle: Infrastructure facturée séparément
    detail: Les machines virtuelles, disques, stockages, adresses IP et transferts restent payants.
usages: [Environnements de test, Gouvernance cloud, Laboratoires]
url: https://azure.microsoft.com/products/devtest-lab/
documentation: https://learn.microsoft.com/azure/devtest-labs/devtest-lab-overview
source: https://azure.microsoft.com/fr-fr/pricing/details/devtest-lab/
couleur: "#0078d4"
initiales: DL
carteRequise: true
depassementFacture: true
permanent: true
statut: "active"
vedette: false
ordre: 32
verifieLe: 2026-08-17
verificationAutomatiqueLe: 2026-08-17
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
---

Azure DevTest Labs apporte une couche de libre-service et de gouvernance pour fournir rapidement des environnements reproductibles aux développeurs et testeurs. Sa gratuité concerne uniquement l’orchestration : un laboratoire vide ne coûte rien au titre de DevTest Labs, tandis que chaque ressource Azure créée dans ce laboratoire suit sa propre tarification.
