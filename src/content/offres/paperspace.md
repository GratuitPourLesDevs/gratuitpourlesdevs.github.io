---
nom: Paperspace Gradient
accroche: Plateforme cloud pour notebooks, entraînement et workflows de machine learning
type: PaaS
categorie: api-donnees-ml
formule: Plan Free avec projets publics, 5 Go de stockage et instances Basic
inclus:
  - Projets publics
  - 5 Go de stockage
  - Notebooks Jupyter
  - Instances Basic gratuites selon disponibilité
  - Environnements pour développer et entraîner des modèles
conditions:
  - Compte Paperspace DigitalOcean
  - Projets publics sur le plan Free
restrictions:
  - Les instances hors free tier sont facturées à l’heure
  - Les ressources gratuites dépendent de la disponibilité
  - Les projets privés nécessitent une formule supérieure
alertes:
  - type: finance
    niveau: important
    libelle: Instances payantes disponibles
    detail: Les types d’instances qui ne font pas partie du free tier sont facturés à l’heure ; il faut vérifier le type choisi avant lancement.
usages:
  - Notebooks Jupyter
  - Machine learning
  - Data science
  - Compute
url: https://www.paperspace.com/
documentation: https://docs.digitalocean.com/products/paperspace/
source: https://www.paperspace.com/pricing
couleur: "#1473e6"
initiales: PS
carteRequise: false
depassementFacture: true
permanent: true
statut: "active"
vedette: false
ordre: 266
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Paperspace Gradient fournit un environnement cloud de machine learning accessible sans abonnement fixe. Le Free est intéressant pour expérimenter avec des notebooks et de petites charges, à condition de rester sur les instances Basic et d’accepter que les projets soient publics.
