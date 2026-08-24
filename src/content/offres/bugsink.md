---
nom: 'Bugsink'
accroche: 'Suivi d’erreurs compatible avec les SDK Sentry, disponible en SaaS ou en auto-hébergement'
type: 'SaaS'
categorie: 'crashs-exceptions'
formule: 'Hosted Free : 15 000 événements/mois, 5 000 événements retenus et 1 utilisateur ; self-hosted disponible'
inclus:
- '15 000 événements par mois en hébergement Bugsink'
- '5 000 événements conservés'
- '30 jours de rétention sur les événements conservés'
- '1 utilisateur'
- 'Compatibilité avec l’écosystème de SDK Sentry'
- 'Version auto-hébergeable'
conditions: []
restrictions:
- 'Le Hosted Free est limité à 1 utilisateur'
- 'Seuls 5 000 événements sont retenus sur les 15 000 événements mensuels'
- 'L’auto-hébergement nécessite sa propre infrastructure'
alertes:
- type: usage
  niveau: important
  libelle: '5 000 retenus'
  detail: 'Le Free accepte 15 000 événements par mois mais n’en conserve que 5 000 pendant 30 jours.'
usages:
- 'Monitoring'
- 'Observabilité'
- 'Alertes'
- 'Applications web'
url: 'https://www.bugsink.com/'
documentation: 'https://www.bugsink.com/docs/'
source: 'https://www.bugsink.com/blog/new-hosted-pricing/'
couleur: '#F97316'
initiales: 'BS'
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 566
verifieLe: 2026-08-24
verificationAutomatiqueLe: 2026-08-24
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
---

Bugsink vise les équipes qui veulent un suivi d’erreurs simple tout en conservant la compatibilité avec les SDK Sentry. Le service hébergé accepte désormais 15 000 événements par mois gratuitement, avec un utilisateur ; 5 000 de ces événements sont conservés pendant 30 jours. Pour ceux qui préfèrent maîtriser l’hébergement, Bugsink peut aussi être déployé sur sa propre infrastructure, ce qui déplace surtout la limite vers les ressources et l’exploitation du serveur.
