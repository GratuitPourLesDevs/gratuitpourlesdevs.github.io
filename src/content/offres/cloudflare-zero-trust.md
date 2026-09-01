---
nom: Cloudflare Zero Trust — plan Free
accroche: Accès privé et filtrage réseau pour les petites équipes
type: SaaS
categorie: securite-pki
formule: 50 utilisateurs, ZTNA et Secure Web Gateway avec 24 h de journaux
inclus: [Jusqu’à 50 utilisateurs actifs, Zero Trust Network Access, Secure Web Gateway, Cloudflare Tunnel comme connecteur applicatif, Cloudflare One Client pour les appareils, Filtrage DNS réseau et HTTP, Politiques d’accès basées sur l’identité et le contexte, Jusqu’à 250 emplacements DNS, Dix tests DEX par compte, Cent captures distantes DEX par jour, Journaux administrateur conservés dix-huit mois, Journaux DEX conservés sept jours, Journaux de posture des appareils conservés trente jours]
conditions: [Compte Cloudflare gratuit, Aucune carte bancaire, Création d’une organisation Cloudflare Zero Trust, Configuration des fournisseurs d’identité et des politiques d’accès, Installation éventuelle de cloudflared ou du client Cloudflare One]
restrictions: [Maximum cinquante utilisateurs actifs, Les utilisateurs supplémentaires nécessitent une offre payante, Journaux Access DNS réseau et HTTP conservés vingt-quatre heures, Aucun SLA de disponibilité, Assistance limitée aux forums communautaires et à Discord, Secure Web Gateway limité à des profils prédéfinis, Remote Browser Isolation disponible en option payante, Fonctions SASE avancées et Logpush réservés aux offres supérieures, Un utilisateur authentifié consomme un siège jusqu’à sa suppression, Log Explorer gratuit pour les dix premiers Go puis facturé à l’usage]
alertes:
  - type: finance
    niveau: important
    libelle: Options facturées à l’usage
    detail: Les utilisateurs supplémentaires, Log Explorer et plusieurs fonctions avancées nécessitent une offre payante.
  - type: operationnel
    niveau: important
    libelle: Aucun SLA
    detail: Le plan gratuit ne fournit aucune garantie contractuelle de disponibilité.
usages: [Zero Trust, ZTNA, Secure Web Gateway, VPN applicatif, Filtrage DNS]
url: https://www.cloudflare.com/zero-trust/
documentation: https://developers.cloudflare.com/cloudflare-one/
source: https://www.cloudflare.com/plans/zero-trust-services/
couleur: "#f6821f"
initiales: ZT
carteRequise: false
depassementFacture: true
permanent: true
statut: "active"
vedette: false
ordre: 50
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Cloudflare Zero Trust protège l’accès aux applications privées et le trafic Internet des appareils sans VPN réseau traditionnel. Le plan Free combine Cloudflare Access, Gateway, Tunnel et le client Cloudflare One pour une équipe allant jusqu’à 50 utilisateurs. Il convient aux petites équipes et aux preuves de concept, mais la courte conservation des journaux, l’assistance communautaire et l’absence de SLA limitent son usage dans les environnements soumis à des exigences fortes de production ou de conformité.
