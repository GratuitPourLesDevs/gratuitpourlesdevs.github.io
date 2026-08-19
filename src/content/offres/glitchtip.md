---
nom: 'GlitchTip'
accroche: 'Suivi d’erreurs open source compatible avec les SDK Sentry, disponible en cloud ou en auto-hébergement'
type: 'SaaS'
categorie: 'crashs-exceptions'
formule: 'Hosted Free : 1 000 événements/mois, projets et membres illimités ; version self-hosted'
inclus:
- '1 000 événements par mois'
- 'Error tracking'
- 'Projets illimités'
- 'Membres d’équipe illimités'
- 'Compatibilité avec les SDK Sentry'
- 'Version auto-hébergeable'
conditions: []
restrictions:
- 'Après le quota, GlitchTip applique un throttling progressif'
- 'Au-delà de 2× le quota, les nouveaux événements sont bloqués'
- 'L’auto-hébergement nécessite sa propre infrastructure'
alertes:
- type: usage
  niveau: important
  libelle: 'Throttling après quota'
  detail: 'Le SaaS réduit progressivement l’acceptation des événements au-delà de 1 000/mois et bloque entièrement au-delà de 2× le quota.'
usages:
- 'Monitoring'
- 'Observabilité'
- 'Alertes'
- 'Applications web'
url: 'https://glitchtip.com/'
source: 'https://glitchtip.com/pricing/'
couleur: '#4F46E5'
initiales: 'GT'
carteRequise: false
depassementFacture: false
permanent: true
statut: 'active'
vedette: false
ordre: 572
verifieLe: '2026-08-19'
verificationAutomatiqueLe: '2026-08-19'
verificationNote: 'Le Hosted Free est toujours 1 000 événements/mois avec projets et membres illimités ; le dépassement est throttlé puis bloqué.'
---

GlitchTip propose un suivi d’erreurs open source qui réutilise l’écosystème des SDK Sentry et peut être consommé en SaaS ou auto-hébergé. Son hébergement gratuit est particulièrement souple sur l’organisation avec projets et membres illimités, mais il est limité à 1 000 événements mensuels. Le dépassement n’entraîne pas de facture automatique : GlitchTip réduit progressivement le trafic accepté puis bloque les événements lorsque la consommation dépasse environ deux fois le quota.
