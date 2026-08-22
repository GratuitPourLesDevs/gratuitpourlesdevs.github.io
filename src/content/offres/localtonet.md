---
nom: "Localtonet"
accroche: "Tunnels multi-protocoles pour exposer HTTP, TCP, UDP, TLS, fichiers et services privés sur internet."
type: SaaS
categorie: tunnels-webrtc-websockets
formule: "Free : 1 tunnel, 1 Go de bande passante par mois et timeout de 30 minutes"
inclus:
- "1 tunnel HTTP, TCP ou UDP"
- "1 Go de bande passante par mois"
- "Timeout de tunnel de 30 minutes"
- "Certificats SSL/TLS automatiques"
- "Authentification basique"
- "Inspection des requêtes et modification des en-têtes"
- "Gestion par API"
- "Aucune carte bancaire requise pour démarrer"
conditions:
- "Création d’un compte Localtonet gratuit"
restrictions:
- "Un seul tunnel gratuit"
- "Bande passante limitée à 1 Go par mois"
- "Les tunnels gratuits ont un timeout de 30 minutes"
- "Les tunnels illimités, domaines personnalisés et absence de timeout sont payants"
alertes:
- type: usage
  niveau: important
  libelle: Timeout de 30 minutes
  detail: Les tunnels gratuits expirent après 30 minutes et doivent être relancés.
- type: usage
  niveau: important
  libelle: 1 Go de trafic par mois
  detail: La bande passante gratuite est limitée à 1 Go par mois pour un seul tunnel.
usages: ["Tunnel sécurisé", "Accès distant", "Webhook local", "API", "Réseau"]
url: https://localtonet.com/
documentation: https://localtonet.com/documents
source: https://localtonet.com/
couleur: "#2563EB"
initiales: LN
carteRequise: false
depassementFacture: false
permanent: true
statut: active
vedette: false
ordre: 951
verifieLe: '2026-08-22'
verificationAutomatiqueLe: '2026-08-22'
verificationNote: "La page officielle actuelle confirme 1 tunnel HTTP/TCP/UDP, 1 Go de bande passante mensuelle et un timeout de 30 minutes sur le plan Free."
---

Localtonet couvre davantage de protocoles qu’un simple tunnel HTTP et peut servir pour des applications web, bases de données, SSH, RDP, jeux ou flux UDP. Le plan gratuit suffit pour des tests ponctuels et inclut déjà plusieurs fonctions de sécurité et d’inspection. Ses limites de trafic et de durée le destinent toutefois clairement au développement et aux démonstrations plutôt qu’à un service permanent.
