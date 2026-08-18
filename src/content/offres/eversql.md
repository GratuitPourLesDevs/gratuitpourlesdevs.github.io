---
nom: EverSQL
accroche: Ancien service d’optimisation automatique SQL, désormais migré vers Aiven
type: SaaS
categorie: qualite-code
formule: Service historique avec essai gratuit, nouvelles inscriptions désormais fermées
inclus:
- Optimisation SQL historique pour MySQL, MariaDB, PostgreSQL et Percona
- Recommandations d’index et de réécriture de requêtes
conditions: []
restrictions:
- Les nouvelles inscriptions EverSQL ne sont plus disponibles
- Les abonnements EverSQL ont été arrêtés et les capacités ont migré vers Aiven
alertes:
- type: operationnel
  niveau: critique
  libelle: Service EverSQL arrêté
  detail: EverSQL n’accepte plus de nouvelles inscriptions et indique que ses capacités sont désormais disponibles chez Aiven.
usages:
- Base de données relationnelle
- PostgreSQL
url: https://www.eversql.com/
source: https://www.eversql.com/faq
couleur: '#2563EB'
initiales: ES
carteRequise: false
depassementFacture: false
permanent: false
statut: obsolete
historique:
- date: '2026-08-18'
  type: statut
  titre: Passage en obsolète
  changements:
  - champ: statut
    avant: active
    apres: obsolete
    note: Nouvelles inscriptions fermées ; migration vers Aiven.
  source: https://www.eversql.com/faq
vedette: false
ordre: 376
verifieLe: '2026-08-18'
verificationAutomatiqueLe: '2026-08-18'
verificationNote: La FAQ officielle indique que les abonnements ont été arrêtés, les nouvelles inscriptions fermées et les fonctions EverSQL transférées vers Aiven.
---

EverSQL optimisait automatiquement les requêtes SQL, mais le service autonome n’est plus une offre active. Cette fiche est conservée uniquement pour éviter de présenter l’ancienne gratuité comme encore disponible.
