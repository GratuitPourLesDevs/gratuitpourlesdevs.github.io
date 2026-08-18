---
nom: Mocko
accroche: Mocks HTTP dynamiques, proxy sélectif et endpoints cloud partageables
type: SaaS
categorie: tests
formule: Mocko Cloud gratuit avec URL publique, plus version open source auto-hébergeable
inclus:
  - URL HTTPS publique par projet Cloud
  - Mocks dynamiques
  - Proxy vers un backend réel
  - Request logs
  - Flags et scénarios stateful
  - Version open source locale ou auto-hébergeable
conditions:
  - Connexion GitHub pour Mocko Cloud
restrictions:
  - Aucun plafond chiffré du Cloud gratuit n’est publié actuellement
  - Les ressources d’une version auto-hébergée dépendent de votre propre infrastructure
alertes:
  - type: fonctionnel
    niveau: important
    libelle: Quotas Cloud non publiés
    detail: Le service Cloud gratuit est actif mais sa documentation ne publie pas de plafond chiffré de requêtes ou de projets.
usages:
  - API
  - Tests
  - Prototypage
url: https://mocko.dev/
documentation: https://mocko.dev/docs/
source: https://mocko.dev/docs/cloud/getting-started
couleur: "#22c55e"
initiales: MO
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 210
verifieLe: 2026-08-18
verificationAutomatiqueLe: 2026-08-18
verificationNote: "La documentation officielle confirme Mocko Cloud avec hôte *.free.mockoapp.net et une version open source ; aucun quota numérique Cloud n’est publié."
---

Mocko permet de mélanger endpoints mockés et backend réel grâce à un proxy sélectif. Le Cloud fournit une URL publique gratuite, tandis que la version open source peut être utilisée localement ou auto-hébergée sans quota imposé par le service.
