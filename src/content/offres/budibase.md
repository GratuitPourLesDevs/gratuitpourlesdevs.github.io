---
nom: Budibase
accroche: Plateforme low-code open source pour créer et auto-héberger des applications métier connectées à des bases de données et APIs.
type: Ressource
categorie: plateformes-low-code
formule: 'Open Source self-hosted : gratuit, 1 workspace, applications et utilisateurs illimités'
inclus:
- 1 workspace
- Applications illimitées
- Utilisateurs illimités
- Automatisations illimitées
- Actions illimitées
- Connexions PostgreSQL, MySQL, MSSQL, MongoDB et REST
- SSO
- Déploiement Docker et Kubernetes
- Community support
conditions:
- Auto-hébergement sur sa propre infrastructure
restrictions:
- L’infrastructure, l’exploitation, les sauvegardes et la montée en charge restent à la charge de l’utilisateur
- Le Budibase Cloud managé n’a plus de plan gratuit permanent
- Certaines fonctions Enterprise et services IA managés restent payants
alertes:
- type: operationnel
  niveau: important
  libelle: Auto-hébergement requis
  detail: La licence open source est gratuite, mais il faut fournir et maintenir l’infrastructure qui exécute Budibase.
usages:
- Applications web
- Prototypage
- Automatisation
- Base de données
url: https://budibase.com/
documentation: https://docs.budibase.com/
source: https://budibase.com/pricing/
couleur: '#6C5CE7'
initiales: BU
carteRequise: false
depassementFacture: false
permanent: true
statut: active
vedette: false
ordre: 856
verifieLe: '2026-08-21'
verificationAutomatiqueLe: '2026-08-21'
verificationNote: Le Cloud managé n’est plus gratuit ; l’édition open source auto-hébergée reste gratuite avec 1 workspace et apps/utilisateurs/automatisations illimités.
---

Budibase est intéressant lorsque l’on veut un builder low-code sans confier l’hébergement de l’application à un SaaS tiers. L’édition open source peut être installée sur sa propre infrastructure et ne limite ni les applications ni les utilisateurs, ce qui est très généreux pour des outils internes. En contrepartie, le « gratuit » porte sur le logiciel : serveurs, mises à jour, sauvegardes, supervision et disponibilité deviennent votre responsabilité. C’est donc excellent pour une équipe à l’aise avec Docker ou Kubernetes, moins pour quelqu’un qui cherche du zéro-ops.
