---
nom: "HERE"
accroche: "Plateforme d’API et SDK de cartographie, recherche, géocodage, routage et données de localisation."
type: "API"
categorie: cartographie
formule: "Base Plan : seuils mensuels gratuits puis pay-as-you-grow"
inclus:
- "Accès aux HERE Location Services"
- "Maps API for JavaScript"
- "Géocodage et recherche"
- "Routage"
- "Seuils mensuels gratuits selon le service"
conditions:
- "Compte HERE Base Plan"
- "Moyen de paiement requis à l’inscription"
restrictions:
- "Le niveau Limited historique a été retiré ; l’ancien quota de 250 000 transactions/mois n’est plus la référence"
- "La facturation commence au-delà des seuils gratuits propres à chaque service"
- "Certains cas d’usage sont exclus du Base Plan, notamment plusieurs scénarios d’asset management, télématique et optimisation"
alertes:
- type: finance
  niveau: critique
  libelle: "Carte et pay-as-you-grow"
  detail: "Le Base Plan exige un moyen de paiement et peut facturer automatiquement les transactions au-delà des seuils gratuits."
- type: fonctionnel
  niveau: critique
  libelle: "Cas d’usage exclus"
  detail: "HERE exclut plusieurs usages d’asset management, télématique et optimisation du Base Plan standard."
usages: ["API", "Applications web", "Mobile"]
url: https://developer.here.com/
source: https://www.here.com/get-started/pricing
couleur: "#00AFAA"
initiales: "HE"
carteRequise: true
depassementFacture: true
permanent: true
statut: "active"
vedette: false
ordre: 1104
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

HERE reste accessible avec des seuils gratuits, mais son modèle actuel est très différent de l’ancien Limited Plan souvent repris dans les listes historiques. Pour un nouveau compte, le Base Plan exige un moyen de paiement et fonctionne en pay-as-you-grow : il faut donc suivre précisément les compteurs du service utilisé.
