---
nom: "Xirsys"
accroche: "Infrastructure STUN/TURN managée pour la traversée NAT et les communications WebRTC en pair à pair ou via relais."
type: SaaS
categorie: tunnels-webrtc-websockets
formule: "Developer gratuit : STUN illimité et 500 Mo de bande passante TURN par mois"
inclus:
- "Connexions STUN gratuites et illimitées"
- "500 Mo de bande passante TURN par mois selon la page tarifaire Developer"
- "2 channels"
- "30 jours d’accès initial aux fonctionnalités de production et aux 12 régions"
- "Après 30 jours : compte gratuit permanent avec 1 région de test"
- "Après 30 jours : jusqu’à 25 connexions WebSocket simultanées"
conditions:
- "Création d’un compte Developer gratuit"
restrictions:
- "La bande passante TURN gratuite est plafonnée et le relais s’arrête lorsque l’allocation mensuelle est consommée"
- "Après la période initiale de 30 jours, l’accès mondial, le routage géographique et les identifiants TURN statiques nécessitent une offre payante"
- "Le compte gratuit permanent est limité à une région de test"
alertes: []
usages: ["Traversée de NAT et de pare-feu", "Réseau", "Communications pair à pair", "API"]
url: https://xirsys.com/
documentation: https://docs.xirsys.com/
source: https://www.xirsys.com/pricing/
couleur: "#FF6B35"
initiales: XI
carteRequise: false
depassementFacture: false
permanent: true
statut: active
vedette: false
ordre: 962
verifieLe: '2026-08-22'
verificationAutomatiqueLe: '2026-08-22'
verificationNote: "La page tarifaire Developer publie toujours STUN illimité et 500 Mo de TURN mensuel. La FAQ 2026 précise désormais un essai production de 30 jours puis un compte gratuit permanent avec 1 région de test, 2 channels et 25 WebSockets simultanés."
---

Xirsys fournit les briques STUN et TURN utilisées par WebRTC lorsque les clients doivent traverser NAT et pare-feu. Les connexions STUN directes restent gratuites et illimitées, tandis que le relais TURN consomme une allocation mensuelle plafonnée. Les nouveaux comptes bénéficient en plus d’un accès production étendu pendant trente jours avant de revenir automatiquement au niveau Developer permanent.