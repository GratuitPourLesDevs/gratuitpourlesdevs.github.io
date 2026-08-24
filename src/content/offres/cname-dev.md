---
nom: "cname.dev"
accroche: "Proxy inverse dynamique gratuit pour exposer des services locaux derrière une URL publique sécurisée."
type: Service managé
categorie: tunnels-webrtc-websockets
formule: "Service gratuit sans quota public chiffré"
inclus:
- "Proxy inverse dynamique"
- "Exposition sécurisée de services locaux"
- "Interface web, API et CLI"
- "Sous-domaines publics gérés par le service"
conditions:
- "Création d’un compte selon le parcours utilisé"
restrictions:
- "Aucun quota chiffré ni SLA gratuit n’est publié sur la page publique"
- "Les limites opérationnelles peuvent évoluer selon le service"
alertes:
- type: operationnel
  niveau: important
  libelle: Quotas et SLA non documentés
  detail: Aucun plafond chiffré ni engagement de disponibilité gratuit n’est publié ; les limites opérationnelles peuvent donc évoluer.
usages: ["Tunnel sécurisé", "Accès distant", "Réseau", "API"]
url: https://cname.dev/
source: https://cname.dev/
couleur: "#2563EB"
initiales: CN
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 945
verifieLe: 2026-08-24
verificationAutomatiqueLe: 2026-08-24
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
---

cname.dev fournit un proxy inverse dynamique pour rendre accessible sur internet un service situé derrière un réseau local ou une adresse changeante. Le service vise les usages de développement, de démonstration et d’accès distant avec des outils d’administration simples. Faute de grille tarifaire détaillée ou de quotas publics, la fiche reste volontairement prudente sur les limites quantitatives.
