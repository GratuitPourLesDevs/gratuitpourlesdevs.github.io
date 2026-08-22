---
nom: "Expose"
accroche: "Tunnel sécurisé open source pour partager des sites locaux, tester des webhooks et obtenir des URL publiques temporaires."
type: SaaS
categorie: tunnels-webrtc-websockets
formule: "Hobby gratuit : TLS/SSL, URL aléatoires et serveur européen"
inclus:
- "Chiffrement TLS/SSL"
- "URL publiques aléatoires"
- "Accès au serveur gratuit situé en Europe"
- "Inspection et rejeu des requêtes pour les webhooks"
- "Cœur du projet disponible en open source"
conditions:
- "Compte Hobby gratuit"
- "Aucune carte bancaire requise"
restrictions:
- "Le plan Hobby applique une limite de temps aux tunnels sans valeur chiffrée publiée sur la tarification actuelle"
- "Les URL persistantes, domaines personnalisés et réseau mondial sont réservés aux plans payants"
alertes:
- type: usage
  niveau: important
  libelle: Durée de tunnel limitée
  detail: Les tunnels Hobby ont une durée limitée, mais la durée exacte n’est plus publiée sur la tarification actuelle.
- type: fonctionnel
  niveau: important
  libelle: URL persistantes payantes
  detail: Les URL persistantes, domaines personnalisés et l’accès au réseau mondial nécessitent une offre payante.
usages: ["Tunnel sécurisé", "Webhook local", "Développement et test", "Accès distant"]
url: https://expose.dev/
documentation: https://expose.dev/docs/introduction
source: https://expose.dev/
couleur: "#F59E0B"
initiales: EX
carteRequise: false
depassementFacture: false
permanent: true
statut: active
vedette: false
ordre: 947
verifieLe: '2026-08-22'
verificationAutomatiqueLe: '2026-08-22'
verificationNote: "Le plan Hobby officiel reste gratuit sans carte et comprend TLS/SSL, URL aléatoires et un serveur européen. La page indique une limite de temps mais n’en publie plus la durée."
---

Expose permet de rendre une application locale accessible depuis internet sans modifier le routeur ni ouvrir de port entrant. Il est particulièrement pratique pour tester des webhooks, montrer rapidement une application à un tiers ou vérifier un développement depuis un autre appareil. La version managée gratuite s’appuie sur un serveur européen, tandis que le cœur du logiciel peut aussi être auto-hébergé.
