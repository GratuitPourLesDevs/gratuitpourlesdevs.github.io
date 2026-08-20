---
nom: Val Town
accroche: Plateforme collaborative TypeScript/JavaScript pour scripts serverless, endpoints HTTP, workers et tâches cron.
type: PaaS
categorie: paas
formule: 'Free : 100 000 runs/jour, vals publics illimités, cron toutes les 15 min'
inclus:
- 100 000 exécutions par jour
- Vals publics illimités
- Cron avec intervalle minimal de 15 minutes
- 1 minute maximum par run
- 3 jours de rétention des logs
- E-mail vers sa propre adresse
- MCP integration
conditions: []
restrictions:
- Aucun domaine personnalisé sur Free
- Aucun val privé sur le plan Free selon la page Limits actuelle
- 100 000 lignes de logs par jour
alertes: []
usages:
- Serverless
- Fonctions
- Tâches planifiées
- API
- Développement et test
url: https://www.val.town/
source: https://www.val.town/pricing
couleur: '#F97316'
initiales: VT
carteRequise: false
depassementFacture: false
permanent: true
statut: active
vedette: false
ordre: 833
verifieLe: '2026-08-20'
verificationAutomatiqueLe: '2026-08-20'
verificationNote: 'Pricing actuel : 100k runs/jour, cron 15min, timeout 1min, logs 3 jours, vals publics illimités et 0 custom domain.'
---

Val Town est très pratique pour transformer quelques lignes de TypeScript ou JavaScript en endpoint HTTP, fonction serverless ou tâche planifiée sans créer un projet cloud complet. Le Free Tier autorise jusqu’à 100 000 exécutions par jour et un nombre illimité de vals publics, avec des crons toutes les 15 minutes, ce qui est largement suffisant pour des petits outils, webhooks, prototypes d’API ou automatisations personnelles. Chaque exécution reste limitée à une minute et les logs ne sont conservés que trois jours. Surtout, le niveau gratuit ne fournit ni vals privés ni domaines personnalisés : il convient donc mieux au code partageable et aux utilitaires légers qu’aux backends privés exposés sous une marque propre.
