---
nom: Contentful
accroche: Headless CMS API-first avec espace Starter gratuit pour apprentissage et tests
type: SaaS
categorie: cms
formule: Free à 0 $ avec 1 Starter Space, 10 utilisateurs et 100k appels API/mois
inclus:
- 1 Starter Space
- Jusqu’à 10 utilisateurs
- 2 rôles
- 2 locales
- 25 types de contenu
- 2 environnements
- 10 000 records
- 100 000 appels API par mois
- 50 Go de bande passante CDN par mois
conditions:
- Compte Contentful
- Utilisation du plan Free réservée à l’apprentissage, l’exploration et aux tests
restrictions:
- Le plan Free ne doit pas être utilisé pour supporter un cas d’usage commercial
- Aucun dépassement d’appels API ou de bande passante n’est disponible sur le Free
- Une fois un quota mensuel atteint, la Delivery API peut être bloquée jusqu’à la fin de la période ou jusqu’à un upgrade
- 1 seul Starter Space
alertes:
- type: usage
  niveau: critique
  libelle: Usage commercial exclu
  detail: Les conditions actuelles de Contentful réservent le plan Free aux tests et à l’apprentissage et excluent les cas d’usage commerciaux.
usages:
- API
- Données
- Applications web
url: https://www.contentful.com/
source: https://www.contentful.com/help/admin/usage/usage-limit/
couleur: '#2478CC'
initiales: CF
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 347
verifieLe: '2026-08-18'
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Vérification automatique incomplète (HTTP 429) ; statut éditorial conservé."
verificationEtat: "inconclusive"
verificationCode: "controle_bloque"
verificationEchecsConsecutifs: 2
---

Contentful permet de découvrir un workflow headless complet et de tester une intégration API avec plusieurs éditeurs. En revanche, son plan Free actuel doit être considéré comme un environnement d’apprentissage et de validation, pas comme l’hébergement gratuit d’un projet commercial en production.
