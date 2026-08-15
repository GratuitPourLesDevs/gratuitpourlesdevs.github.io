---
nom: Cloudflare Pages
accroche: Hébergement et déploiement continu de sites web sur le réseau Cloudflare
type: PaaS
categorie: hebergement-web
formule: 500 builds par mois avec bande passante et requêtes statiques illimitées
inclus: [500 builds par mois, Un build exécuté à la fois, Bande passante illimitée, Requêtes vers les fichiers statiques gratuites et illimitées, Jusqu’à 100 projets Pages par compte, 100 domaines personnalisés par projet, Nombre illimité de déploiements de prévisualisation actifs, Nombre illimité de collaborateurs dans le tableau de bord, Certificats SSL intégrés, Intégration GitHub et GitLab, Déploiement direct avec Wrangler, Pages Functions avec les quotas Workers Free, Web Analytics intégré]
conditions: [Compte Cloudflare gratuit, Dépôt GitHub ou GitLab pour les builds automatiques ou déploiement direct, Aucune carte bancaire]
restrictions: [500 builds maximum par mois, Un seul build simultané sur le plan gratuit, Durée maximale de 20 minutes par build, 100 projets Pages maximum par compte, 20 000 fichiers maximum par site, 25 Mio maximum par fichier, 100 domaines personnalisés maximum par projet, Pages Functions partage le quota Workers Free de 100 000 requêtes par jour, Les appels de Functions vers KV D1 et Durable Objects utilisent leurs quotas respectifs, Les pull requests provenant de forks ne créent pas de prévisualisation automatique, Impossible de passer un projet intégré à Git vers le mode Direct Upload sans le recréer, Domaines personnalisés avec wildcard non pris en charge]
usages: [Hébergement statique, Applications web, JAMstack, Documentation, Landing page, Prévisualisation de pull request]
url: https://pages.cloudflare.com/
documentation: https://developers.cloudflare.com/pages/
source: https://developers.cloudflare.com/pages/platform/limits/
couleur: "#f6821f"
initiales: PG
carteRequise: false
permanent: true
statut: active
vedette: false
ordre: 55
verifieLe: 2026-08-14
verificationAutomatiqueLe: 2026-08-14
verificationNote: "La documentation Cloudflare confirme 500 builds par mois, un build simultané, 100 projets par compte, 100 domaines personnalisés par projet, 20 000 fichiers par site et des prévisualisations illimitées. Les requêtes statiques et la bande passante sont annoncées comme illimitées sur le plan gratuit."
---

Cloudflare Pages construit et déploie des sites statiques et applications frontend depuis GitHub, GitLab ou Wrangler. Chaque commit peut produire une prévisualisation partageable avant le passage en production. Les fichiers statiques bénéficient de requêtes et d’une bande passante illimitées, tandis que les fonctions dynamiques utilisent les quotas du plan Cloudflare Workers Free.
