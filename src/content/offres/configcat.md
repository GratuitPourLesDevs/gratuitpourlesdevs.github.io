---
nom: "ConfigCat"
accroche: "Service de feature flags orienté développeurs avec évaluation locale, CDN et équipe de taille illimitée."
type: "SaaS"
categorie: "feature-flags"
formule: "Forever Free : 10 feature flags par produit, 2 environnements, 2 produits et 5 M de téléchargements de configuration/mois"
inclus: ["10 feature flags ou settings par produit", "2 environnements par produit", "2 produits", "5 000 000 téléchargements config JSON par mois", "20 Go de trafic réseau par mois", "Équipe, connexions de service, MAU et lectures de flags illimités", "API publique"]
conditions: ["Aucune carte bancaire requise pour le plan Forever Free"]
restrictions: ["10 feature flags ou settings par produit", "2 environnements par produit", "2 produits maximum", "5 millions de téléchargements config JSON et 20 Go de trafic réseau par mois"]
alertes:
  - type: "finance"
    niveau: "important"
    libelle: "Dépassement potentiellement facturé"
    detail: "La politique de facturation officielle prévoit des frais de dépassement pour les quotas du plan Free ; surveillez les téléchargements config JSON et le trafic."
usages: ["Feature flags", "Configuration distribuée", "Applications web"]
url: "https://configcat.com/"
documentation: "https://configcat.com/docs/"
source: "https://configcat.com/pricing/"
couleur: "#7C3AED"
initiales: "CC"
carteRequise: false
depassementFacture: true
permanent: true
statut: "active"
vedette: false
ordre: 727
verifieLe: "2026-08-19"
verificationAutomatiqueLe: "2026-08-19"
verificationNote: "Forever Free vérifié le 19 août 2026 : 10 flags/settings par produit, 2 environnements, 2 produits, 5 M de config JSON downloads/mois et équipe illimitée."
---

ConfigCat propose un plan Forever Free sans carte bancaire, avec une approche où les SDK téléchargent puis mettent en cache la configuration afin d’évaluer les flags localement. Le plan gratuit actuel comprend deux produits — et non un seul comme dans certaines anciennes descriptions — avec dix feature flags ou settings par produit, deux environnements par produit et cinq millions de téléchargements de configuration par mois. La politique de facturation actuelle prévoit toutefois des frais en cas de dépassement de certains quotas, ce qui mérite une surveillance en production.