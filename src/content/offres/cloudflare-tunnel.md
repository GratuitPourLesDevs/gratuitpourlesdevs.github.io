---
nom: Cloudflare Tunnel
accroche: Exposition sécurisée de services locaux sans ouvrir de port entrant
type: SaaS
categorie: securite-pki
formule: Quick Tunnel gratuit sans compte ou tunnels nommés persistants
inclus: [Sous-domaine aléatoire trycloudflare.com pour un Quick Tunnel, Aucun compte requis pour un Quick Tunnel, Aucun nom de domaine requis pour un Quick Tunnel, Connexion sortante chiffrée via cloudflared, Exposition de serveurs HTTP locaux, Accès sécurisé à SSH RDP et autres protocoles avec un tunnel nommé, Protection de l’origine sans adresse IP publique, Jusqu’à 1 000 tunnels cloudflared par compte, Jusqu’à 25 réplicas actifs par tunnel nommé, Jusqu’à 1 000 routes partagées avec Cloudflare Mesh, Jusqu’à 1 000 réseaux virtuels]
conditions: [Installation du client cloudflared ou utilisation de Wrangler, Accès sortant vers Cloudflare sur le port 7844 en TCP ou UDP, Processus local maintenu actif pendant l’utilisation, Compte Cloudflare pour les tunnels nommés, Domaine géré dans Cloudflare pour publier un hostname personnalisé]
restrictions: [Quick Tunnels réservés au développement et aux tests, Aucun SLA ni garantie de disponibilité pour TryCloudflare, URL Quick Tunnel aléatoire et temporaire, Quick Tunnel limité à 200 requêtes simultanées en cours, Réponse HTTP 429 lorsque cette limite est atteinte, Server-Sent Events non pris en charge par les Quick Tunnels, Quick Tunnel non configurable et absent de la liste des tunnels du compte, Les tunnels nommés et politiques Zero Trust nécessitent un compte, Le fichier config.yaml existant peut empêcher le démarrage d’un Quick Tunnel]
usages: [Webhook local, Prévisualisation, Accès distant, Tunnel sécurisé, Remplacement de VPN]
url: https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/
documentation: https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/
source: https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/do-more-with-tunnels/trycloudflare/
couleur: "#f6821f"
initiales: CT
carteRequise: false
permanent: true
statut: active
vedette: false
ordre: 51
verifieLe: 2026-08-14
verificationAutomatiqueLe: 2026-08-14
verificationNote: "La documentation Cloudflare confirme que TryCloudflare crée gratuitement un sous-domaine aléatoire sans compte ni domaine. Les Quick Tunnels sont temporaires, destinés aux tests, limités à 200 requêtes simultanées et incompatibles avec SSE. Les limites de compte actuelles autorisent jusqu’à 1 000 tunnels nommés et 25 réplicas actifs par tunnel."
---

Cloudflare Tunnel établit depuis la machine locale une connexion sortante vers le réseau Cloudflare, ce qui évite d’ouvrir un port entrant ou d’exposer directement l’adresse IP du serveur. Un Quick Tunnel permet de partager immédiatement une application locale avec une URL temporaire sur trycloudflare.com. Pour un accès durable, des hostnames personnalisés, plusieurs connecteurs ou des politiques Zero Trust, il faut créer un tunnel nommé dans un compte Cloudflare.
