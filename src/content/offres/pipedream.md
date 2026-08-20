---
nom: Pipedream
accroche: Plateforme d’intégration orientée développeurs pour créer des workflows déclenchés par événements avec code, APIs et milliers de connecteurs.
type: PaaS
categorie: plateformes-low-code
formule: 'Free : crédits quotidiens gratuits et workflows à faible volume, sans montant public fixe'
inclus:
- Workflows
- Pipedream Connect en environnement de développement
- Sources d’événements publiques
- Tests de workflows sans consommation de crédits
- Support communautaire
- Jusqu’à 5 minutes par exécution sur le Free
conditions:
- Le plan Free vise les workflows simples et à faible volume
restrictions:
- Le nombre de crédits gratuits est plafonné quotidiennement mais n’est pas publié comme valeur fixe dans la documentation
- Nombre limité de workflows actifs et de comptes connectés
- Connect en production nécessite une offre payante
alertes:
- type: usage
  niveau: important
  libelle: Quota dynamique
  detail: Pipedream confirme un plafond quotidien de crédits pour le Free, mais renvoie l’utilisateur à Billing & Usage pour connaître son quota exact plutôt que d’afficher un chiffre public stable.
usages:
- Automatisation
- Intégration applicative
- Traitement événementiel
- API
- Serverless
url: https://pipedream.com/
source: https://pipedream.com/docs/pricing
couleur: '#111827'
initiales: PD
carteRequise: false
depassementFacture: false
permanent: true
statut: active
vedette: false
ordre: 830
verifieLe: '2026-08-20'
verificationAutomatiqueLe: '2026-08-20'
verificationNote: Free plan actuel confirmé. Les anciennes présentations en nombre d’exécutions sont remplacées par des crédits de calcul ; la valeur quotidienne exacte n’est pas publiée dans la doc générale.
---

Pipedream est particulièrement utile comme couche de colle entre des APIs et services qui doivent réagir à des événements sans nécessiter un serveur permanent. Un workflow peut être déclenché par un webhook, un événement ou une source externe, combiner des connecteurs prêts à l’emploi avec du code, puis enchaîner plusieurs actions dans un environnement serverless. Le plan gratuit convient aux automatisations personnelles, prototypes et intégrations à faible volume, avec des tests qui ne consomment pas de crédits et jusqu’à cinq minutes par exécution. Son principal défaut pour le dimensionnement est que le quota quotidien de crédits n’est plus publié comme une valeur fixe : il faut consulter l’espace Billing & Usage du compte, et Pipedream Connect en production reste payant.
