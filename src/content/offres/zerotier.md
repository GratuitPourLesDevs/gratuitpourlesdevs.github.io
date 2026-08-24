---
nom: "ZeroTier"
accroche: "Réseau virtuel chiffré de couche 2/3 pour relier appareils et sites distribués comme sur un LAN."
type: SaaS
categorie: tunnels-webrtc-websockets
formule: "Personal : gratuit à vie avec 10 appareils et 1 réseau"
inclus:
- "10 appareils inclus"
- "1 réseau"
- "1 administrateur réseau"
- "Chiffrement AES-256 et échange de clés ECC-256"
- "Réseau virtuel de couche 2 et couche 3"
- "API, CLI et interface d’administration"
conditions:
- "Utilisation personnelle du plan Personal"
restrictions:
- "Le plan Personal actuel est limité à 10 appareils et 1 réseau"
- "Les besoins professionnels et davantage de réseaux ou d’appareils nécessitent une offre payante"
alertes:
- type: usage
  niveau: important
  libelle: 10 appareils et 1 réseau maximum
  detail: Le plan Personal gratuit est limité à dix appareils, un seul réseau et un administrateur réseau.
- type: usage
  niveau: important
  libelle: Usage personnel
  detail: Le plan Personal est destiné à l’usage personnel ; les besoins professionnels relèvent d’une formule payante.
usages: ["VPN applicatif", "Réseau", "Accès distant", "Communications pair à pair", "Sécurité"]
url: https://www.zerotier.com/
documentation: https://docs.zerotier.com/
source: https://www.zerotier.com/pricing/
couleur: "#FFB000"
initiales: ZT
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 963
verifieLe: 2026-08-24
verificationAutomatiqueLe: 2026-08-24
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
---

ZeroTier crée un réseau virtuel chiffré entre machines distribuées et peut remplacer un VPN classique pour des usages personnels, homelabs ou petits environnements distants. Les clients se comportent comme s’ils partageaient un réseau commun tout en communiquant à travers internet. Depuis la nouvelle tarification, le plan Personal reste gratuit à vie mais est limité à dix appareils et un seul réseau.
