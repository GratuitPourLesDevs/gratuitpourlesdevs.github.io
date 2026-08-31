---
nom: Cloudflare Realtime TURN
accroche: Relais TURN mondial managé pour fiabiliser les communications WebRTC
type: PaaS
categorie: tunnels-webrtc-websockets
formule: 1 000 Go de trafic sortant par mois partagés entre Realtime TURN et SFU
inclus:
  - 1 000 Go de trafic sortant par mois partagés avec Cloudflare Realtime SFU
  - Service STUN gratuit et illimité
  - TURN sur UDP aux ports 3478 et 53
  - TURN sur TCP aux ports 3478 et 80
  - TURN sur TLS aux ports 5349 et 443
  - Connectivité IPv4 et IPv6 entre le client et le serveur TURN
  - Génération et révocation d’identifiants TURN temporaires par API
  - Jusqu’à 1 000 clés TURN par compte
  - Nombre illimité d’identifiants utilisateurs par clé TURN
conditions:
  - Compte Cloudflare
  - Clé TURN créée depuis le tableau de bord ou l’API
  - Service backend pour générer des identifiants temporaires
  - Moyen de paiement requis pour activer la facturation à l’usage
restrictions:
  - Le quota de 1 000 Go est commun aux services Realtime SFU et TURN
  - Au-delà du quota le trafic sortant est facturé 0,05 USD par Go
  - Seul le trafic envoyé de Cloudflare vers le client TURN est comptabilisé
  - Durée maximale de validité d’un identifiant TURN de 48 heures
  - Pas d’adresse de relais IPv6 malgré la connectivité client IPv6
  - Limites par allocation sur les nouvelles adresses IP le débit de paquets et le débit de données
  - Les identifiants doivent être générés côté serveur et ne doivent pas exposer la clé TURN au client
alertes:
  - type: finance
    niveau: critique
    libelle: Dépassement facturé
    detail: Le trafic sortant dépassant le quota mensuel est facturé automatiquement au Go.
usages:
  - Relais WebRTC
  - Visioconférence et voix sur IP
  - Traversée de NAT et de pare-feu
  - Communications pair à pair
  - Jeux en ligne temps réel
  - Communications IoT
url: https://developers.cloudflare.com/realtime/turn/
documentation: https://developers.cloudflare.com/realtime/turn/generate-credentials/
source: https://developers.cloudflare.com/realtime/turn/faq/
couleur: "#f6821f"
initiales: RT
carteRequise: true
depassementFacture: true
permanent: true
statut: "active"
vedette: false
ordre: 57
verifieLe: 2026-08-31
verificationAutomatiqueLe: 2026-08-31
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Cloudflare Realtime TURN relaie le trafic des applications WebRTC lorsque la connexion directe échoue à cause d’un NAT ou d’un pare-feu. Le service fournit plusieurs transports et ports de secours pour les réseaux restrictifs. Le quota gratuit porte uniquement sur le trafic transmis depuis Cloudflare vers les clients et il est partagé avec Realtime SFU.
