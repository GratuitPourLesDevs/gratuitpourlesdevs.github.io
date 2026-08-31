---
nom: Clever Cloud
accroche: PaaS européen avec déploiements automatisés, autoscaling, services managés et workflows Git.
type: PaaS
categorie: paas
formule: 'Découverte : 20 € de crédits à l’inscription + plans DEV gratuits pour certaines bases'
inclus:
- 20 EUR de crédits à la création du compte
- Plan PostgreSQL DEV gratuit
- Plan MySQL DEV gratuit
- Déploiement Git automatisé
- Services managés européens
conditions:
- Les plans DEV gratuits de bases de données sont destinés aux tests et petits environnements
restrictions:
- Les 20 EUR sont un crédit ponctuel, pas un budget mensuel permanent
- Les plans DEV ont des ressources partagées, des performances limitées et aucun SLA
- Le support des plans DEV est limité
alertes:
- type: finance
  niveau: important
  libelle: Crédit ponctuel de 20 €
  detail: Le crédit de 20 EUR est accordé à l’inscription et n’est pas renouvelé chaque mois ; les ressources applicatives payantes consomment ensuite le solde du compte.
usages:
- Applications cloud
- Déploiement cloud
- Base de données
- PostgreSQL
- CI/CD
url: https://clever.cloud/
source: https://www.clever.cloud/automated-and-flexible-deployment/
couleur: '#DB2525'
initiales: CC
carteRequise: true
depassementFacture: true
permanent: true
statut: "active"
vedette: false
ordre: 818
verifieLe: 2026-08-31
verificationAutomatiqueLe: 2026-08-31
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Clever Cloud est utile pour tester une approche PaaS européenne où le déploiement, le redémarrage, l’autoscaling et plusieurs services managés sont pris en charge à partir du code et de Git. La partie réellement permanente du gratuit se trouve surtout dans les petites bases PostgreSQL et MySQL DEV, pratiques pour le développement, les démonstrations et les environnements de test ; les 20 € offerts à l’inscription servent plutôt à découvrir les autres ressources de la plateforme. Ces crédits ne sont pas renouvelés et les bases DEV utilisent des ressources partagées sans SLA. Il faut donc distinguer le Free Tier de base de données, durable mais limité, du crédit de découverte ponctuel destiné à essayer le reste de Clever Cloud.
