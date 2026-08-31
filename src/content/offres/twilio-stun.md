---
nom: "Twilio STUN"
accroche: "Serveur STUN mondial gratuit pour découvrir l’adresse publique d’un client WebRTC derrière un NAT."
type: Ressource
categorie: tunnels-webrtc-websockets
formule: "STUN mondial gratuit avec capacité annoncée comme illimitée"
inclus:
- "STUN gratuit dans toutes les régions Twilio"
- "Requêtes STUN annoncées comme illimitées"
- "Endpoint global : stun:global.stun.twilio.com:3478"
- "Résolution vers une région Twilio à faible latence"
conditions:
- "Utilisation d’un client compatible STUN/WebRTC"
restrictions:
- "TURN est un service distinct facturé au volume de données relayé"
- "Les jetons et identifiants TURN passent par l’API Network Traversal"
alertes:
- type: finance
  niveau: important
  libelle: TURN n’est pas gratuit
  detail: Seul STUN est gratuit ; le relais TURN est un service distinct facturé au volume de données relayé.
usages: ["Traversée de NAT et de pare-feu", "Réseau", "Communications pair à pair"]
url: https://www.twilio.com/en-us/stun-turn
documentation: https://www.twilio.com/docs/stun-turn/api
source: https://www.twilio.com/en-us/stun-turn/pricing
couleur: "#F22F46"
initiales: TW
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 958
verifieLe: 2026-08-31
verificationAutomatiqueLe: 2026-08-31
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Le serveur STUN de Twilio aide un client WebRTC à connaître l’adresse IP et le port publics que son NAT lui attribue afin de tenter une connexion pair à pair directe. Twilio publie ce composant STUN comme gratuit et illimité, alors que le relais TURN n’est utilisé qu’en secours et reste facturé au trafic. L’URI STUN est conservée dans la fiche, tandis que le lien principal pointe vers une page HTTPS utilisable par le catalogue.
