---
nom: Packagecloud
accroche: "Dépôts de paquets hébergés pour APT, RPM, RubyGems, PyPI, Maven, Helm et autres formats."
type: SaaS
categorie: depots-artefacts
formule: "Free : 2 Go de stockage, 10 Go de bande passante et dépôts publics"
inclus:
- "2 Go de stockage"
- "10 Go de bande passante"
- "Utilisateurs et dépôts annoncés sans limite"
- "API et CI/CD"
conditions:
- "Compte requis"
restrictions:
- "Dépôts privés non accessibles sur Free"
- "Dépassement peut désactiver le compte selon les limites configurées"
alertes: []
usages: ["CI/CD", "API", "Stockage"]
url: https://packagecloud.io/
source: https://packagecloud.io/pricing/
couleur: '#2563EB'
initiales: P
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 1050
verifieLe: 2026-08-24
verificationAutomatiqueLe: 2026-08-24
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
---

Packagecloud fournit des registres de paquets managés adaptés aux pipelines CI/CD et aux projets publics.