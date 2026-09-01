---
nom: "GeoJS"
accroche: "API REST/JSON/JSONP gratuite pour déterminer la localisation géographique d’une adresse IP."
type: "API"
categorie: cartographie
formule: "Gratuit : aucun quota chiffré publié actuellement"
inclus:
- "Géolocalisation IPv4 et IPv6"
- "JSON et JSONP"
- "HTTPS"
- "Endpoint sans configuration complexe"
- "Pas de limite de débit publiée à ce jour"
conditions: []
restrictions:
- "Service fourni sans SLA et « as-is »"
- "Les usages jugés excessifs peuvent être ralentis ou bloqués"
- "Les limites peuvent évoluer avec préavis lorsque cela est possible"
alertes:
- type: operationnel
  niveau: important
  libelle: "Fair-use sans quota garanti"
  detail: "GeoJS n’impose actuellement pas de rate limit chiffré, mais se réserve le droit de limiter ou bloquer un usage considéré comme excessif."
usages: ["API", "Données", "Applications web"]
url: https://www.geojs.io/
source: https://www.geojs.io/docs/general/
couleur: "#111827"
initiales: "GJ"
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 1101
verifieLe: '2026-08-25'
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source accessible, mais aucune mention explicite de gratuité détectée ; statut éditorial conservé pour contrôle manuel."
verificationEtat: "controle_requis"
verificationCode: "gratuit_non_detecte"
verificationEchecsConsecutifs: 2
---

GeoJS est une option très légère lorsqu’une application a seulement besoin d’obtenir le pays, la ville ou les coordonnées approximatives associées à une IP. L’absence de quota publié est pratique pour des petits projets, mais ce n’est pas une promesse d’usage illimité ni un SLA.
