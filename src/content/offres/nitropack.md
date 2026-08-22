---
nom: NitroPack
accroche: "Optimisation automatique des performances frontend : cache, images, code et CDN."
type: SaaS
categorie: stockage-medias
formule: "Free : 1 site, 1 000 pages vues/mois et 1 Go de CDN/mois"
inclus:
- "Cache avancé"
- "Optimisation d’images"
- "Minification et optimisation frontend"
- "CDN intégré"
conditions:
- "1 site sur Free"
restrictions:
- "1 000 pages vues par mois"
- "1 Go de CDN par mois"
- "Badge NitroPack sur le plan gratuit"
- "Optimisation désactivée lorsque la limite est atteinte"
alertes:
- type: operationnel
  niveau: important
  libelle: "Optimisation coupée à la limite gratuite"
  detail: "À 100 % des pages vues ou de la bande passante CDN, NitroPack désactive ses optimisations jusqu’au prochain reset mensuel ou à une mise à niveau."
usages: ["CDN", "Applications web", "Bande passante"]
url: https://nitropack.io/
source: https://nitropack.io/pricing/
couleur: '#2563EB'
initiales: N
carteRequise: false
depassementFacture: false
permanent: true
statut: active
vedette: false
ordre: 1046
verifieLe: '2026-08-22'
verificationAutomatiqueLe: '2026-08-22'
verificationNote: "Le quota historique de 5 000 pages vues est obsolète : le plan Free actuel affiche 1 000 pages vues et 1 Go CDN/mois."
---

NitroPack automatise l’optimisation frontend et le CDN pour les petits sites, avec arrêt des optimisations au quota gratuit.