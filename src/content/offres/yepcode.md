---
nom: YepCode
accroche: Plateforme serverless d’intégration pour connecter APIs et services avec du code, des webhooks, des tâches planifiées et des workflows.
type: PaaS
categorie: plateformes-low-code
formule: 'Developer Free : 50 000 Yeps/mois et 300 exécutions/jour'
inclus:
- 50 000 Yeps, soit secondes d’exécution, par mois
- 300 exécutions maximum par jour
- 30 secondes maximum par exécution
- 1 exécution concurrente
- 1 membre d’équipe
- 3 jours d’historique
- 5 fichiers de stockage, 5 MB max chacun
- 5 MB de disque local
- API REST YepCode
conditions: []
restrictions:
- Quand le quota Developer est épuisé, les nouvelles exécutions sont bloquées jusqu’au reset ou à l’upgrade
- CPU et mémoire des sandboxes sont limités sur Free
alertes:
- type: usage
  niveau: important
  libelle: 50 000 Yeps/mois
  detail: 'L’ancien chiffre de 1 000 Yeps n’est plus d’actualité : le plan Developer fournit maintenant 50 000 secondes d’exécution et plafonne à 300 exécutions par jour.'
usages:
- Automatisation
- Intégration applicative
- API
- Serverless
- Tâches planifiées
url: https://yepcode.io/
source: https://yepcode.io/pricing/
couleur: '#00A86B'
initiales: YC
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 835
verifieLe: 2026-08-24
verificationAutomatiqueLe: 2026-08-24
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
---

YepCode est utile pour automatiser des échanges entre APIs et services quand on préfère écrire quelques fonctions en code plutôt que construire un serveur ou utiliser un outil entièrement no-code. Les webhooks, tâches planifiées et workflows s’exécutent dans un environnement serverless, et le plan Developer offre 50 000 secondes d’exécution par mois avec un maximum de 300 lancements par jour. Ce volume convient à de nombreuses automatisations personnelles, synchronisations et traitements ponctuels. Les limites deviennent sensibles pour les workloads plus lourds : 30 secondes maximum par exécution, une seule exécution concurrente et blocage des nouveaux runs lorsque le quota est épuisé jusqu’au prochain reset ou à une montée en gamme.
