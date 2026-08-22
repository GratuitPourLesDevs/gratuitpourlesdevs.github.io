---
nom: "LocalTunnel"
accroche: "Outil open source pour attribuer une URL publique HTTPS à un serveur web exécuté sur localhost."
type: Ressource
categorie: tunnels-webrtc-websockets
formule: "Service public gratuit et client open source"
inclus:
- "URL publique unique vers un port local"
- "HTTPS sécurisé pour les tunnels"
- "Client Node.js disponible en open source sous licence MIT"
- "API utilisable pour les tests et automatisations"
- "Possibilité d’auto-héberger le serveur LocalTunnel"
conditions:
- "Node.js pour le client officiel"
restrictions:
- "Aucun quota de trafic ni SLA n’est publié pour le service public"
- "Le sous-domaine demandé n’est pas garanti et dépend de sa disponibilité"
alertes:
- type: operationnel
  niveau: important
  libelle: Aucun SLA ni quota publié
  detail: Le service public ne publie ni engagement de disponibilité ni plafond de trafic garanti.
- type: fonctionnel
  niveau: important
  libelle: Sous-domaine non garanti
  detail: Le sous-domaine demandé dépend de sa disponibilité et n’est pas garanti sur le service public.
usages: ["Tunnel sécurisé", "Webhook local", "Développement et test", "API"]
url: https://theboroer.github.io/localtunnel-www/
documentation: https://github.com/localtunnel/localtunnel
source: https://theboroer.github.io/localtunnel-www/
couleur: "#111827"
initiales: LT
carteRequise: false
depassementFacture: false
permanent: true
statut: active
vedette: false
ordre: 952
verifieLe: '2026-08-22'
verificationAutomatiqueLe: '2026-08-22'
verificationNote: "Le site officiel et le dépôt public confirment l’URL publique, HTTPS, l’API et le caractère open source. Aucun quota chiffré du service hébergé n’est publié."
---

LocalTunnel est un outil minimaliste pour partager un serveur local sans déployer l’application. Une commande suffit à obtenir une URL HTTPS qui redirige vers le port choisi, ce qui fonctionne bien pour les callbacks, webhooks et démonstrations. Le client et le serveur étant open source, il est aussi possible de reprendre la technologie en auto-hébergement plutôt que de dépendre du service public.
