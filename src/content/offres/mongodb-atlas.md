---
nom: "MongoDB Atlas"
accroche: "MongoDB managé multicloud avec cluster partagé gratuit permanent."
type: PaaS
categorie: services-donnees-manages
formule: "Free M0 : 512 Mo de stockage sur un cluster partagé"
inclus:
- "512 Mo de stockage"
- "1 cluster gratuit M0 par projet"
- "RAM et vCPU partagés"
- "MongoDB managé"
- "Déploiement cloud simplifié"
- "Outils de monitoring et d’administration de base"
conditions:
- "Création d’un compte MongoDB Atlas"
- "Utilisation d’un cluster M0 Free"
restrictions:
- "Ressources de calcul partagées"
- "Capacité et performances limitées par rapport aux clusters dédiés"
- "Certaines fonctions réseau, sauvegarde et sécurité avancées nécessitent un niveau payant"
alertes:
- type: operationnel
  niveau: important
  libelle: Ressources de calcul partagées
  detail: Le cluster M0 partage RAM et vCPU ; ses performances et sa capacité ne sont pas celles d’un cluster dédié.
- type: fonctionnel
  niveau: important
  libelle: Sauvegardes avancées payantes
  detail: Plusieurs fonctions de sauvegarde, réseau et sécurité avancées nécessitent un niveau Atlas payant.
usages: ["MongoDB", "NoSQL", "Base de données", "Applications cloud"]
url: https://www.mongodb.com/atlas
documentation: https://www.mongodb.com/docs/atlas/
source: https://www.mongodb.com/pricing
couleur: "#00ED64"
initiales: MA
carteRequise: false
depassementFacture: false
permanent: true
statut: active
vedette: false
ordre: 933
verifieLe: '2026-08-21'
verificationAutomatiqueLe: '2026-08-21'
verificationNote: "MongoDB Atlas maintient son cluster M0 gratuit avec 512 Mo de stockage, destiné à l’apprentissage et aux petits projets."
---

MongoDB Atlas est la déclinaison managée de MongoDB sur les principaux clouds. Le cluster M0 gratuit fournit un environnement durable et simple à provisionner pour le développement et les petites applications, avec des ressources partagées et 512 Mo de stockage.
