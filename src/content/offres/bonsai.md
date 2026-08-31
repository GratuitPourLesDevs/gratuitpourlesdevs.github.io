---
nom: "Bonsai"
accroche: "Elasticsearch et OpenSearch entièrement managés avec Sandbox gratuit permanent"
type: "Service managé"
categorie: "recherche"
formule: "Sandbox Elasticsearch/OpenSearch gratuit permanent ; limites de capacité actuelles non publiées clairement sur la grille publique"
inclus: ["Cluster Sandbox gratuit", "Elasticsearch ou OpenSearch", "3 nœuds répartis sur plusieurs zones de disponibilité", "TLS et contrôle d’accès", "Cluster provisionné automatiquement à l’inscription"]
conditions: ["Compte Bonsai", "Le Sandbox vise surtout l’expérimentation, le développement et les petits usages"]
restrictions: ["Les anciennes affirmations de 1 Go mémoire et 1 Go stockage ne sont plus reprises comme quotas 2026", "Les limites exactes de stockage, mémoire, documents et shards dépendent du plan Sandbox courant et ne sont pas toutes exposées dans la grille publique"]
alertes:
  - type: "usage"
    niveau: "important"
    libelle: "Quotas non publiés"
    detail: "Bonsai confirme toujours un Sandbox gratuit permanent mais la grille publique actuelle ne détaille pas suffisamment ses plafonds de capacité pour reprendre les anciens chiffres sans réserve."
usages: ["Moteur de recherche", "Données", "Applications web", "API"]
url: "https://bonsai.io/"
documentation: "https://bonsai.io/docs/"
source: "https://bonsai.io/ai-powered-search"
couleur: "#6B4EFF"
initiales: "BO"
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 634
verifieLe: 2026-08-31
verificationAutomatiqueLe: 2026-08-31
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Bonsai permet de lancer un cluster Elasticsearch ou OpenSearch sans administrer soi-même l’infrastructure, les mises à jour, la sécurité ou la disponibilité. Le service confirme toujours un Sandbox gratuit permanent : même ce cluster gratuit repose sur trois nœuds répartis entre plusieurs zones de disponibilité et inclut les mécanismes de connexion sécurisée nécessaires pour expérimenter rapidement. En revanche, la documentation 2026 ne publie plus assez clairement les anciens chiffres de 1 Go de mémoire et 1 Go de stockage cités par certains référentiels ; la fiche conserve donc la gratuité confirmée sans transformer ces anciennes valeurs en quotas actuels.
