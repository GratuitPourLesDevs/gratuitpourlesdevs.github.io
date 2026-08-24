---
nom: disease.sh
accroche: API open source de statistiques sur les maladies et épidémies
type: API
categorie: api-donnees-ml
formule: API communautaire gratuite, quota chiffré non publié
inclus: [API ouverte de statistiques sanitaires, Données COVID-19 et influenza parmi les jeux disponibles, Projet open source sous GPL-3.0, Code source et déploiement local disponibles]
conditions: [Respect de l’usage raisonnable du service public, Possibilité d’auto-héberger le projet open source]
restrictions: [Aucun quota chiffré officiel publié, Service communautaire sans SLA, Disponibilité et fraîcheur dépendantes des sources tierces]
alertes:
  - type: operationnel
    niveau: important
    libelle: Quota non publié
    detail: Le projet ne publie pas de plafond chiffré pour l’API publique ; les gros volumes doivent privilégier l’auto-hébergement ou un accord explicite.
usages: [API, Données]
url: https://disease.sh/
documentation: https://disease.sh/docs/
source: https://github.com/disease-sh/API
couleur: "#ef4444"
initiales: DS
carteRequise: false
depassementFacture: false
permanent: true
statut: active
vedette: false
ordre: 155
verifieLe: 2026-08-18
verificationAutomatiqueLe: 2026-08-24
verificationNote: "Source accessible, mais aucune mention explicite de gratuité détectée."
---

disease.sh est une API open source maintenue par une communauté et couvrant plusieurs statistiques sanitaires, notamment COVID-19 et influenza. Le service public est gratuit mais ne publie pas de plafond chiffré ni de SLA ; l’auto-hébergement reste possible.
