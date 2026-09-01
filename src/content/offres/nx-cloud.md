---
nom: Nx Cloud
accroche: Accélération CI pour monorepos avec cache distant, distribution de tâches et agents
type: SaaS
categorie: ci-cd
formule: Hobby gratuit avec 50 000 crédits par mois et 5 contributeurs inclus
inclus:
- 50 000 crédits par mois
- 5 contributeurs inclus
- 10 connexions CI concurrentes
- Cache distant avec Nx Replay
- Distribution de tâches avec Nx Agents
- Analyses et optimisation des exécutions CI
conditions:
- Utiliser le plan Hobby
restrictions:
- Le plan Hobby est limité à 5 contributeurs inclus
- Une exécution de pipeline consomme des crédits avant même le compute distribué
- La consommation dépend du nombre et du type de tâches exécutées
alertes:
- type: usage
  niveau: important
  libelle: Ancien quota obsolète
  detail: Le Hobby actuel fournit 50 000 crédits et 5 contributeurs, et non 150 000 crédits pour 30 contributeurs.
usages:
- CI/CD
- Build
- Développement et test
- Automatisation
url: https://nx.dev/ci
documentation: https://nx.dev/docs/features/ci-features
source: https://nx.dev/pricing
couleur: '#143055'
initiales: NX
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 405
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Nx Cloud accélère surtout les monorepos en évitant de recalculer ce qui peut être réutilisé et en distribuant les tâches CI. Le plan Hobby reste intéressant, mais son quota actuel est plus resserré qu’auparavant.
