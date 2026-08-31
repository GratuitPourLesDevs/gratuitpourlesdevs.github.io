---
nom: "Tailscale"
accroche: "Réseau privé mesh basé sur WireGuard pour connecter appareils, serveurs et ressources sans configuration VPN complexe."
type: SaaS
categorie: tunnels-webrtc-websockets
formule: "Personal : gratuit à vie pour 6 utilisateurs avec appareils personnels illimités"
inclus:
- "Jusqu’à 6 utilisateurs"
- "Appareils utilisateurs illimités"
- "Jusqu’à 3 groupes ACL"
- "50 ressources taguées incluses"
- "1 000 minutes par mois pour les ressources éphémères"
- "Connexions pair à pair sécurisées"
- "Subnet routers, exit nodes, MagicDNS et ACL Zero Trust"
conditions:
- "Utilisation du plan Personal"
restrictions:
- "Le plan gratuit vise les usages personnels"
- "Les ressources taguées au-delà de l’allocation incluse et certaines fonctions d’entreprise sont payantes"
- "Les anciens comptes peuvent conserver des plans Personal historiques différents"
alertes:
- type: usage
  niveau: important
  libelle: Plan réservé à l’usage personnel
  detail: La formule Personal gratuite vise les usages personnels ; les besoins professionnels relèvent des offres adaptées.
usages: ["VPN applicatif", "Zero Trust", "Réseau", "Accès distant", "Sécurité"]
url: https://tailscale.com/
documentation: https://tailscale.com/kb/
source: https://tailscale.com/pricing
couleur: "#242424"
initiales: TS
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 960
verifieLe: 2026-08-31
verificationAutomatiqueLe: 2026-08-31
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Tailscale crée un réseau privé mesh en s’appuyant sur WireGuard et automatise une grande partie des opérations traditionnellement associées à un VPN. Il convient aussi bien aux machines personnelles qu’aux serveurs, environnements de développement ou petits homelabs. Le nouveau plan Personal est sensiblement plus généreux qu’auparavant avec six utilisateurs et un nombre illimité d’appareils utilisateurs.
