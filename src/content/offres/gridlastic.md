---
nom: Gridlastic
accroche: Selenium Grid privé et élastique hébergé dans AWS pour les tests navigateurs
type: SaaS
categorie: tests
formule: Free avec 5 démarrages de grille, 2 exécutions parallèles et 2 heures par démarrage
inclus:
- 5 démarrages de grille gratuits
- 2 tests / nœuds parallèles maximum
- Grid Selenium privé
- Vidéo des tests
- Démo Jenkins préconfigurée
conditions:
- Compte Gridlastic gratuit
restrictions:
- 2 heures maximum de fonctionnement par démarrage sur le Free
- Le Free est destiné à tester le service, pas à une CI soutenue
- Les anciens quotas de 10 starts / 4 000 minutes ne sont plus valables
alertes:
- type: usage
  niveau: important
  libelle: 5 démarrages gratuits
  detail: La grille Free est limitée à 5 démarrages et chaque démarrage peut fonctionner au maximum 2 heures.
usages:
- Tests
- Applications web
- CI/CD
url: https://www.gridlastic.com/
documentation: https://www.gridlastic.com/how-it-works.html
source: https://www.gridlastic.com/pricing.html
couleur: '#0F766E'
initiales: GL
carteRequise: false
depassementFacture: false
permanent: true
statut: active
vedette: false
ordre: 422
verifieLe: '2026-08-18'
verificationAutomatiqueLe: '2026-08-18'
verificationNote: Le Free actuel publie 5 grid starts, une parallélisation de 2 et une limite de 2 heures par grid start.
---

Gridlastic fournit un Selenium Grid isolé qui s’adapte aux demandes de tests. Le plan gratuit actuel sert surtout à expérimenter le service avant de passer à un volume de CI plus important.
