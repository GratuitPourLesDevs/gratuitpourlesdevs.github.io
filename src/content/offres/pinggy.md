---
nom: "Pinggy"
accroche: "Tunnels localhost par simple commande SSH, sans téléchargement, pour HTTP(S), TCP, UDP et TLS."
type: SaaS
categorie: tunnels-webrtc-websockets
formule: "Free forever : tunnels de 60 minutes avec transfert illimité"
inclus:
- "Tunnels HTTP(S), TCP, UDP et TLS"
- "Timeout de 60 minutes par tunnel"
- "Sous-domaines aléatoires"
- "Transfert de données illimité"
- "Inspection et rejeu des requêtes"
- "Aucun téléchargement nécessaire avec SSH"
conditions:
- "Disposer d’un client SSH"
restrictions:
- "Chaque tunnel gratuit expire après 60 minutes"
- "Une nouvelle URL aléatoire est attribuée après reconnexion"
- "Les sous-domaines persistants et domaines personnalisés sont réservés au plan Pro"
alertes:
- type: usage
  niveau: important
  libelle: Tunnel limité à 60 minutes
  detail: Chaque tunnel gratuit expire après une heure et doit être recréé.
- type: fonctionnel
  niveau: important
  libelle: URL modifiée à la reconnexion
  detail: Le sous-domaine gratuit est aléatoire et une nouvelle URL est attribuée après reconnexion.
usages: ["Tunnel sécurisé", "Webhook local", "Développement et test", "Accès distant"]
url: https://pinggy.io/
documentation: https://pinggy.io/docs/
source: https://pinggy.io/
couleur: "#2563EB"
initiales: PI
carteRequise: false
depassementFacture: false
permanent: true
statut: active
vedette: false
ordre: 955
verifieLe: '2026-08-22'
verificationAutomatiqueLe: '2026-08-22'
verificationNote: "La tarification officielle confirme un plan Free gratuit à vie, un timeout de 60 minutes, des sous-domaines aléatoires et un transfert de données illimité."
---

Pinggy expose un service local en une commande SSH et évite d’installer un agent dédié sur les systèmes où OpenSSH est déjà disponible. Il prend en charge plusieurs protocoles et fournit aussi des outils pratiques pour inspecter les requêtes lors des tests de webhooks. La contrepartie du plan gratuit est une durée maximale de soixante minutes par session et une URL qui change à chaque reconnexion.
