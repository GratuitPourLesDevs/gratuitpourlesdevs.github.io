---
nom: Deno Deploy
accroche: Plateforme edge pour applications JavaScript/TypeScript et workloads Deno, avec compute, KV, stockage
  et cache intégrés.
type: PaaS
categorie: paas
formule: 'Free : 1 M de requêtes et 20 GB d’egress par mois, 20 apps'
inclus:
- 1 000 000 requêtes par mois
- 20 GB de bande passante sortante par mois
- 20 applications actives
- 50 domaines personnalisés par organisation
- 15 heures CPU par mois
- 350 GB-heures mémoire par mois
- 1 GiB de volume et 1 GiB de KV
- 450 000 lectures KV et 300 000 écritures KV par mois
- 5 membres d’équipe
conditions:
- La totalité des plafonds Free nécessite la vérification de l’organisation par carte bancaire
restrictions:
- En Free, dépasser requêtes, bande passante, CPU ou mémoire met les applications en pause jusqu’au cycle suivant
- Pas de wildcard subdomains sur Free
- Rétention de logs limitée à 1 jour
alertes:
- type: usage
  niveau: important
  libelle: 20 GB/mois désormais
  detail: 'La grille actuelle remplace les anciens 100 GiB/mois : le plan Free offre 20 GB d’egress et 1 million de requêtes par mois.'
usages:
- Edge
- Applications web
- Serverless
- Déploiement cloud
- Stockage
url: https://deno.com/deploy
source: https://deno.com/deploy/pricing
couleur: '#111111'
initiales: DD
carteRequise: true
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 823
verifieLe: 2026-08-31
verificationAutomatiqueLe: 2026-08-31
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Deno Deploy est une solution particulièrement pratique pour publier des APIs, sites ou services JavaScript/TypeScript proches des utilisateurs sans administrer de serveurs ni construire séparément la couche edge. Le Free Tier est suffisamment généreux pour de vrais petits projets : un million de requêtes et 20 GB de trafic sortant par mois, jusqu’à 20 applications, du compute, du KV et du stockage. La vérification de l’organisation par carte est nécessaire pour bénéficier de tous les plafonds gratuits, et un dépassement de ressources met l’application en pause jusqu’au prochain cycle plutôt que de laisser la consommation dériver. Cela en fait un environnement intéressant pour des workloads edge à coût maîtrisé, à condition de surveiller les quotas.
