---
nom: "Nile"
accroche: "PostgreSQL serverless orienté applications B2B et multi-tenant avec isolation native des tenants."
type: PaaS
categorie: services-donnees-manages
formule: "Free : 1 Go de stockage et 50 millions de query tokens"
inclus:
- "Bases de données illimitées"
- "Bases tenant illimitées"
- "Embeddings vectoriels illimités"
- "50 millions de query tokens inclus"
- "1 Go de stockage"
- "500 connexions"
- "Autoscaling"
- "Pas de cold start"
- "Toutes les régions disponibles"
conditions:
- "Création d’un compte Nile"
restrictions:
- "Les query tokens supplémentaires sont facturés au-delà de l’allocation gratuite lorsque la facturation est activée"
- "Le stockage supplémentaire est payant"
- "Pas de SLA sur le plan gratuit"
- "Certaines fonctions annoncées comme backups ou placement global restent réservées ou en cours de déploiement"
alertes:
- type: finance
  niveau: critique
  libelle: Dépassement facturé si billing activé
  detail: Lorsque la facturation est activée, les query tokens et le stockage consommés au-delà des allocations gratuites deviennent payants.
- type: fonctionnel
  niveau: important
  libelle: Pas de SLA
  detail: Le plan Free ne fournit pas de SLA et certaines fonctions de sauvegarde ou de placement restent réservées.
usages: ["PostgreSQL", "Architecture multi-tenant", "Serverless", "Recherche vectorielle"]
url: https://www.thenile.dev/
documentation: https://www.thenile.dev/docs
source: https://www.thenile.dev/pricing
couleur: "#7C3AED"
initiales: NI
carteRequise: false
depassementFacture: true
permanent: true
statut: "active"
vedette: false
ordre: 935
verifieLe: 2026-08-31
verificationAutomatiqueLe: 2026-08-31
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Nile construit une couche PostgreSQL pensée pour les applications SaaS B2B, où l’isolation des tenants est un besoin central. Le plan gratuit combine bases illimitées, vectorisation et calcul serverless, mais le stockage et les query tokens au-delà des allocations deviennent payants.
