---
nom: Gigalixir
accroche: PaaS spécialisé historiquement dans Elixir/Phoenix, désormais aussi pour d’autres runtimes, avec une instance et PostgreSQL gratuits.
type: PaaS
categorie: paas
formule: 'Free Tier : 1 replica de 0,5 GB + PostgreSQL gratuit limité à 10 000 lignes'
inclus:
- 1 replica d’application
- 0,5 GB de mémoire maximum
- 1 base PostgreSQL Free
- 10 000 lignes de base
- 2 connexions PostgreSQL concurrentes
- Domaines personnalisés et SSL
- Déploiements sans interruption
conditions:
- Une carte bancaire est demandée à l’inscription uniquement pour vérification anti-abus
restrictions:
- Aucune sauvegarde sur la base Free
- Les connexions DB inactives sont fermées après 5 minutes
- Après 30 jours sans déploiement, l’application peut être mise à zéro replica
alertes:
- type: operationnel
  niveau: important
  libelle: Inactivité 30 jours
  detail: Le Free Tier existe toujours, mais Gigalixir peut mettre l’application à zéro replica si aucun déploiement n’a eu lieu pendant plus de 30 jours.
usages:
- Applications web
- PostgreSQL
- Hébergement
- Déploiement cloud
url: https://gigalixir.com/
source: https://gigalixir.com/pricing
couleur: '#7A3E9D'
initiales: GX
carteRequise: true
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 827
verifieLe: 2026-08-31
verificationAutomatiqueLe: 2026-08-31
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Gigalixir reste une option simple pour mettre en ligne une petite application Elixir/Phoenix sans administrer soi-même le runtime, le déploiement et PostgreSQL. Le Free Tier fournit un replica de 0,5 GB ainsi qu’une base gratuite limitée à 10 000 lignes et deux connexions simultanées, ce qui convient à un projet personnel, une démonstration ou un prototype connecté à une vraie base. Il faut en revanche accepter des contraintes fortes : aucune sauvegarde de la base gratuite et possibilité de mise à zéro du replica après 30 jours sans nouveau déploiement. Ce niveau gratuit est donc utile pour apprendre et valider une application, mais demande davantage de prudence dès que les données deviennent importantes.
