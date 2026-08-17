---
nom: Azure AI Search Free
accroche: Recherche textuelle et vectorielle managée pour prototypes et tutoriels
type: PaaS
categorie: recherche
formule: 50 Mo de stockage avec 3 index, 3 indexeurs et 3 sources de données
inclus: [50 Mo de stockage d’index, Trois index par service, Trois indexeurs, Trois sources de données, Trois skillsets d’enrichissement, Jusqu’à 10 000 documents par appel d’indexation, Jusqu’à 1 000 champs simples par index, Champs vectoriels jusqu’à 4 096 dimensions, Recherche textuelle filtrage facettes suggestions et recherche vectorielle, Un service Free par abonnement Azure]
conditions: [Compte Microsoft, Abonnement Azure actif, Moyen de paiement configuré, Création du service avec le niveau Dedicated Free, Région disposant de capacité pour le niveau gratuit]
restrictions: [Infrastructure partagée sans montée en charge, Niveau destiné aux tutoriels au développement et aux évaluations non productives, Aucun SLA, Recherche sémantique indisponible, Identités managées pour l’authentification Microsoft Entra indisponibles, Durée d’exécution des indexeurs fortement limitée, Service gratuit inactif susceptible d’être supprimé, Stockage consommé par les documents champs vectoriels et métadonnées, Ressources Azure AI utilisées pour l’enrichissement susceptibles d’être facturées séparément]
usages: [Moteur de recherche, Recherche vectorielle, Indexation, RAG]
url: https://azure.microsoft.com/en-us/products/ai-services/ai-search/
documentation: https://learn.microsoft.com/en-us/azure/search/search-try-for-free
source: https://azure.microsoft.com/en-us/pricing/details/search/
couleur: "#0078d4"
initiales: SR
carteRequise: true
permanent: true
statut: "active"
vedette: false
ordre: 45
verifieLe: 2026-08-17
verificationAutomatiqueLe: 2026-08-17
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
---

Azure AI Search, anciennement Azure Cognitive Search, indexe des contenus structurés ou non structurés et expose des API de recherche textuelle, filtrée et vectorielle. Son niveau Free permanent convient aux tutoriels, prototypes RAG et petits jeux de données. Il ne doit pas être confondu avec une capacité globale de 10 000 documents : ce nombre limite la charge d’un appel d’indexeur, tandis que la capacité réelle est plafonnée à 50 Mo.
