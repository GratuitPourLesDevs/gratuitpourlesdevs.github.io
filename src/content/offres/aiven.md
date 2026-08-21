---
nom: "Aiven"
accroche: "Plateforme de données open source managée avec PostgreSQL, MySQL et Valkey gratuits sans carte bancaire."
type: PaaS
categorie: services-donnees-manages
formule: "Free : 1 nœud, 1 CPU, 1 Go de RAM et 1 Go de stockage pour PostgreSQL ou MySQL"
inclus:
- "PostgreSQL, MySQL et Valkey disponibles en formule gratuite"
- "1 nœud dédié"
- "1 CPU par VM"
- "1 Go de RAM"
- "1 Go de stockage pour PostgreSQL et MySQL"
- "Backups, métriques et logs"
- "Gestion via console, CLI, API et Terraform"
- "Aucune limite de durée"
conditions:
- "Création d’un compte Aiven"
- "Aucune carte bancaire requise"
restrictions:
- "Un seul service gratuit de chaque type par organisation"
- "Pas de haute disponibilité ni de SLA 99,99 %"
- "Pas de VPC, IP statique ni support payant sur Free"
- "Les services gratuits inactifs peuvent être mis hors tension et réactivés ensuite"
alertes: []
usages: ["Base de données", "PostgreSQL", "Mise en cache", "Développement et test"]
url: https://aiven.io/
documentation: https://aiven.io/docs/
source: https://aiven.io/pricing
couleur: "#FF3554"
initiales: AI
carteRequise: false
depassementFacture: false
permanent: true
statut: active
vedette: false
ordre: 923
verifieLe: '2026-08-21'
verificationAutomatiqueLe: '2026-08-21'
verificationNote: "Les offres gratuites Aiven actuelles sont sans limite de durée et sans carte. PostgreSQL et MySQL disposent de 1 CPU, 1 Go de RAM et 1 Go de stockage ; la capacité de stockage a été ramenée de 5 Go à 1 Go en 2025."
---

Aiven propose plusieurs moteurs open source sous forme de services managés. Pour PostgreSQL et MySQL, le niveau gratuit fournit une petite VM dédiée avec sauvegardes et observabilité, adaptée à l’apprentissage, aux démonstrations et aux petits prototypes ; les services inactifs peuvent toutefois être arrêtés automatiquement.
