---
nom: "CockroachDB Cloud"
accroche: "Base SQL distribuée managée avec calcul à la demande et allocation gratuite mensuelle."
type: PaaS
categorie: services-donnees-manages
formule: "Basic : 50 millions de RU et 10 Gio de stockage gratuits par mois"
inclus:
- "50 millions de Request Units gratuits par mois"
- "10 Gio de stockage gratuits par mois"
- "Calcul à la demande pouvant descendre à zéro"
- "Déploiement sur AWS ou GCP"
- "Réplication automatique des données"
- "Contrôle d’accès par liste IP"
- "Aucune carte bancaire requise pour démarrer Basic"
conditions:
- "Création d’un compte CockroachDB Cloud"
- "Utilisation du plan Basic"
restrictions:
- "La consommation dépassant les allocations gratuites relève de la tarification à l’usage du plan Basic"
- "Certaines fonctions réseau, observabilité et sécurité avancées nécessitent Standard ou Advanced"
- "Le quota gratuit se renouvelle mensuellement"
alertes: []
usages: ["Base de données distribuée", "Base de données relationnelle", "Applications cloud", "Haute disponibilité"]
url: https://www.cockroachlabs.com/
documentation: https://www.cockroachlabs.com/docs/cockroachcloud/
source: https://www.cockroachlabs.com/pricing/
couleur: "#6933FF"
initiales: CR
carteRequise: false
depassementFacture: true
permanent: true
statut: active
vedette: false
ordre: 925
verifieLe: '2026-08-21'
verificationAutomatiqueLe: '2026-08-21'
verificationNote: "La tarification actuelle du plan Basic annonce 50 millions de RU et 10 Gio de stockage gratuits par mois. La valeur historique exprimée en équivalent de 15 $ n’est pas utilisée."
---

CockroachDB Cloud fournit une base SQL distribuée conçue pour la résilience et la montée en charge. Le plan Basic utilise des Request Units et du stockage à la demande, avec une allocation mensuelle gratuite suffisamment élevée pour de petits services ou des environnements de développement, mais la consommation supplémentaire devient payante.
