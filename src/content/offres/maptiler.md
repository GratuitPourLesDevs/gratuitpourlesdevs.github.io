---
nom: "MapTiler Cloud"
accroche: "Plateforme de cartes vectorielles et raster, SDK, recherche et hébergement de données géospatiales."
type: "API"
categorie: cartographie
formule: "Free : usage personnel, test ou non commercial avec 5 Go de stockage"
inclus:
- "Cartes vectorielles et raster XYZ"
- "SDK et styles de cartes"
- "2D/3D"
- "5 Go de stockage"
- "1 fichier hébergé"
conditions:
- "Compte MapTiler gratuit"
- "Logo MapTiler affiché sur les cartes"
restrictions:
- "Le plan Free est limité au non-commercial ainsi qu’à la R&D de produits commerciaux"
- "Les quotas de trafic du niveau Free sont appliqués par la plateforme et peuvent entraîner une suspension temporaire"
- "Un seul fichier dans les 5 Go de stockage"
alertes:
- type: fonctionnel
  niveau: critique
  libelle: "Usage commercial exclu"
  detail: "Le Cloud Free est réservé au test, à l’usage personnel ou non commercial, et à la recherche-développement de produits commerciaux."
usages: ["API", "Applications web", "Données"]
url: https://www.maptiler.com/cloud/
source: https://www.maptiler.com/cloud/pricing/
couleur: "#087F5B"
initiales: "MT"
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 1110
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

MapTiler Cloud fournit des cartes modernes, du stockage et des outils de rendu sans coût pour les tests et projets non commerciaux. Le point clé n’est pas seulement le quota technique : la licence du Free interdit la production commerciale, ce qui impose de prévoir un passage à Flex pour un produit monétisé.
