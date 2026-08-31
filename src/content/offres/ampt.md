---
nom: Ampt
accroche: Plateforme serverless JavaScript sur AWS qui masque la configuration d’infrastructure et fournit un environnement
  Preview gratuit.
type: PaaS
categorie: paas
formule: 'Preview gratuit : 1 sandbox développeur et 1 stage permanent auto-pausable'
inclus:
- 1 environnement sandbox développeur
- 1 stage permanent avec auto-pause
- Déploiement dans un compte AWS géré par Ampt
- CLI, SDK et tableau de bord
- Ressources serverless avec scale-to-zero
conditions:
- Le plan Preview est destiné à découvrir Ampt et construire un premier projet
restrictions:
- Les quotas chiffrés d’invocations de l’ancien Free Preview ne sont plus affichés sur la page tarifaire publique actuelle
- Les domaines personnalisés sont réservés aux offres payantes
- L’utilisation de son propre compte AWS nécessite une offre Self-Hosted
alertes:
- type: usage
  niveau: important
  libelle: Quotas Preview non publiés
  detail: Ampt confirme toujours un plan Preview gratuit, mais sa page tarifaire actuelle ne détaille plus publiquement les plafonds d’invocations, calcul, bande passante et stockage.
usages:
- Applications web
- Backend d’application
- Déploiement AWS
- Serverless
- CI/CD
url: https://getampt.com/
source: https://getampt.com/pricing
couleur: '#6C5CE7'
initiales: AM
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 814
verifieLe: 2026-08-31
verificationAutomatiqueLe: 2026-08-31
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Ampt est intéressant pour une équipe JavaScript qui veut profiter des services serverless d’AWS sans commencer par écrire et maintenir toute la configuration d’infrastructure. Le Preview gratuit fournit un environnement de développement et un stage permanent auto-pausable, ce qui suffit pour construire une API, un backend ou une petite application et tester le workflow complet de déploiement. Le principal point de vigilance est la visibilité des limites : Ampt ne publie plus les anciens quotas chiffrés d’invocations sur sa grille actuelle, et les domaines personnalisés restent réservés aux offres payantes. Il convient donc surtout au prototypage et à la découverte avant un usage plus engagé en production.
