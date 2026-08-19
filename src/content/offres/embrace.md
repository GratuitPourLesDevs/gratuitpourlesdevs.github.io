---
nom: 'Embrace'
accroche: 'Observabilité mobile et web centrée sur les sessions, crashs, erreurs et performances utilisateur'
type: 'SaaS'
categorie: 'crashs-exceptions'
formule: 'Free : jusqu’à 1 million de sessions par an, 5 utilisateurs et 3 jours de rétention'
inclus:
- '1 million de sessions par an'
- '5 utilisateurs'
- 'Erreurs, exceptions et crashs'
- 'Monitoring basique des performances'
- 'Dashboards et alertes basiques'
- '3 jours de rétention des événements'
conditions: []
restrictions:
- 'L’ingestion s’arrête une fois le million de sessions annuelles atteint sans passage au payant'
- 'Impossible d’ajouter plus de 5 utilisateurs sur le Free'
- 'Rétention des événements limitée à 3 jours'
alertes:
- type: usage
  niveau: important
  libelle: 'Ingestion bloquée au plafond'
  detail: 'À 1 million de sessions/an, Embrace cesse d’ingérer de nouvelles données tant que le plan n’est pas augmenté.'
usages:
- 'Mobile'
- 'Observabilité'
- 'Monitoring'
- 'Applications web'
url: 'https://embrace.io/'
source: 'https://embrace.io/pricing/'
couleur: '#6D28D9'
initiales: 'EM'
carteRequise: false
depassementFacture: false
permanent: true
statut: 'active'
vedette: false
ordre: 570
verifieLe: '2026-08-19'
verificationAutomatiqueLe: '2026-08-19'
verificationNote: 'Le Free actuel confirme 1M sessions/an, 5 utilisateurs et 3 jours de rétention ; les caps bloquent l’ingestion plutôt que de facturer.'
---

Embrace observe les sessions réelles d’applications mobiles et web afin de relier crashs, exceptions et problèmes de performance au parcours utilisateur. Le Free est dimensionné pour une petite application ou un environnement de développement : jusqu’à 1 million de sessions par an et 5 utilisateurs. La contrepartie est une rétention de seulement 3 jours ; lorsque le plafond annuel ou le nombre d’utilisateurs est atteint, Embrace bloque l’ingestion ou l’ajout d’utilisateurs jusqu’à un éventuel upgrade.
