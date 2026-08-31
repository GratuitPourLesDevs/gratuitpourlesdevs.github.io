---
nom: "Google STUN"
accroche: "Serveur STUN public utilisé dans les exemples WebRTC pour la découverte d’adresse réseau."
type: Ressource
categorie: tunnels-webrtc-websockets
formule: "Serveur STUN public sans quota publié"
inclus:
- "Endpoint public documenté dans les exemples WebRTC : stun:stun.l.google.com:19302"
- "Utilisable comme serveur ICE dans WebRTC"
conditions:
- "Client compatible STUN/WebRTC"
restrictions:
- "Aucun quota ni SLA public n’est documenté pour cet endpoint"
- "Un relais TURN peut être nécessaire lorsque la connexion directe n’est pas possible"
alertes:
- type: operationnel
  niveau: important
  libelle: Aucun quota ni SLA publié
  detail: L’endpoint STUN est public et documenté mais Google ne publie ni quota d’usage ni engagement de disponibilité pour ce service.
- type: fonctionnel
  niveau: important
  libelle: TURN peut rester nécessaire
  detail: STUN ne remplace pas un relais TURN lorsque les contraintes NAT ou pare-feu empêchent une connexion directe.
usages: ["Traversée de NAT et de pare-feu", "Réseau", "Communications pair à pair"]
url: https://webrtc.org/getting-started/peer-connections
documentation: https://webrtc.org/getting-started/peer-connections
source: https://webrtc.org/getting-started/peer-connections
couleur: "#4285F4"
initiales: GS
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 959
verifieLe: '2026-08-22'
verificationAutomatiqueLe: 2026-08-31
verificationNote: "Source accessible, mais aucune mention explicite de gratuité détectée ; statut éditorial conservé pour contrôle manuel."
verificationEtat: "controle_requis"
verificationCode: "gratuit_non_detecte"
verificationEchecsConsecutifs: 1
---

Google fournit un endpoint STUN fréquemment utilisé dans les exemples WebRTC. Il aide les applications à établir leur configuration réseau pour les connexions pair à pair. Comme aucun quota ni engagement de service public n’est publié, la fiche le présente comme une ressource publique plutôt que comme une offre gratuite garantie.
