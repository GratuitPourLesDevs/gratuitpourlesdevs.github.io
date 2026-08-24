---
nom: DigitalOcean App Platform
accroche: PaaS de DigitalOcean avec un palier gratuit dédié aux sites statiques déployés depuis Git.
type: PaaS
categorie: paas
formule: 'Starter : jusqu’à 3 applications statiques gratuites, avec 1 Gio de trafic sortant par application et par mois'
inclus:
- Jusqu’à 3 applications statiques gratuites
- 1 Gio de transfert sortant par application et par mois
- Déploiement depuis GitHub ou GitLab
- HTTPS automatique
- Domaine personnalisé
- CDN mondial
- Protection DDoS
conditions:
- Un moyen de paiement est demandé à l’inscription DigitalOcean
restrictions:
- Le palier gratuit ne couvre que les composants statiques
- Les services dynamiques et workers sont payants
- Le trafic sortant au-delà de l’allocation peut être facturé
alertes:
- type: finance
  niveau: important
  libelle: Trafic supplémentaire facturable
  detail: Le trafic sortant au-delà de l’allocation gratuite peut être facturé sur le compte DigitalOcean.
usages:
- Hébergement statique
- Déploiement cloud
- Git
- CDN
url: https://www.digitalocean.com/products/app-platform
source: https://docs.digitalocean.com/products/app-platform/details/pricing/
couleur: '#0080FF'
initiales: DO
carteRequise: true
depassementFacture: true
permanent: true
statut: "active"
vedette: false
ordre: 870
verifieLe: 2026-08-24
verificationAutomatiqueLe: 2026-08-24
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
---

DigitalOcean App Platform est une bonne porte d’entrée si l’on veut héberger un frontend statique dans le même écosystème que ses futures ressources cloud. Le Free couvre trois applications, avec Git, HTTPS, CDN et domaines personnalisés, ce qui suffit pour plusieurs sites vitrines ou documentations. Le passage vers des composants dynamiques peut ensuite se faire sans changer de plateforme. La limite importante est que ce palier gratuit est strictement statique et que le trafic sortant au-delà de l’allocation peut entraîner une facturation.
