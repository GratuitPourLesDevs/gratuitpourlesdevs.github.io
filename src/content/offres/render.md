---
nom: Render
accroche: Cloud applicatif unifié pour services web, sites statiques, PostgreSQL et Key Value avec ressources gratuites de développement.
type: PaaS
categorie: paas
formule: 'Free : web service jusqu’à 750 h/mois, site statique, 1 PostgreSQL 1 Go temporaire et 1 Key Value'
inclus:
- 750 heures d’instance Web Free par mois
- 512 Mo de RAM et environ 0,1 CPU sur le service Free
- Sites statiques gratuits
- 1 base PostgreSQL gratuite de 1 Go
- 1 instance Key Value gratuite
- Domaines personnalisés et TLS
- Déploiement automatique depuis Git
conditions: []
restrictions:
- Le service web s’endort après environ 15 min sans trafic
- La base PostgreSQL Free expire 30 jours après création
- Pas de sauvegardes sur la base gratuite
- Les ressources gratuites sont destinées aux tests, prototypes et hobby
alertes:
- type: usage
  niveau: important
  libelle: PostgreSQL limité à 30 jours
  detail: La base PostgreSQL gratuite expire trente jours après sa création et ne convient pas à un stockage durable.
usages:
- Applications web
- PostgreSQL
- Hébergement statique
- Déploiement cloud
url: https://render.com/
source: https://render.com/docs/free
couleur: '#46E3B7'
initiales: RD
carteRequise: false
depassementFacture: true
permanent: true
statut: "active"
vedette: false
ordre: 883
verifieLe: 2026-08-31
verificationAutomatiqueLe: 2026-08-31
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Render est particulièrement pratique pour mettre en ligne un petit stack complet depuis Git : frontend statique, API et services de données peuvent cohabiter sur la même plateforme. Les 750 heures mensuelles couvrent un service gratuit sur le mois, mais l’instance s’endort lorsqu’elle n’est pas sollicitée, ce qui implique un démarrage à froid. La base PostgreSQL gratuite est excellente pour une démo ou un test d’intégration, mais son expiration après 30 jours empêche de la traiter comme une base gratuite durable. C’est donc un très bon environnement de prototype, pas un hébergement gratuit sans contraintes pour une production sensible.
