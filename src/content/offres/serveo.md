---
nom: "Serveo"
accroche: "Service de tunnel basé sur SSH pour publier un serveur local sans installer de client dédié."
type: Service managé
categorie: tunnels-webrtc-websockets
formule: "Service public gratuit sans quota chiffré publié"
inclus:
- "Tunnel vers un serveur local via SSH remote forwarding"
- "Aucun client spécifique à installer"
- "URL ou sous-domaine public pour les services HTTP"
- "Utilisation possible sans inscription pour les tunnels de base"
conditions:
- "Disposer d’un client SSH"
restrictions:
- "Aucune grille de quotas ou SLA gratuit exploitable n’est actuellement publiée"
- "Certaines fonctions ou certains ports publics peuvent dépendre des règles opérationnelles du service"
alertes: []
usages: ["Tunnel sécurisé", "Accès distant", "Webhook local", "Développement et test"]
url: https://serveo.net/
source: https://serveo.net/
couleur: "#111827"
initiales: SE
carteRequise: false
depassementFacture: false
permanent: true
statut: active
vedette: false
ordre: 957
verifieLe: '2026-08-22'
verificationAutomatiqueLe: '2026-08-22'
verificationNote: "Serveo reste référencé comme service de tunnel SSH sans installation. Faute de grille tarifaire et de quotas publics fiables, la fiche n’affirme pas l’ancienne promesse 'sans limites'."
---

Serveo exploite le port forwarding SSH pour rediriger une adresse publique vers un service exécuté sur localhost. Cette approche est intéressante pour les démonstrations et tests rapides puisqu’elle évite l’installation d’un agent propriétaire. Les limites exactes du service public n’étant pas clairement documentées aujourd’hui, la fiche conserve une description volontairement prudente plutôt que l’ancienne mention de service sans limites.