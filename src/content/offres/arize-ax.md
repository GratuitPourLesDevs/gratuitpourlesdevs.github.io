---
nom: Arize AX
accroche: Observabilité et évaluation pour applications IA, LLM et agents avec tracing OpenTelemetry
type: SaaS
categorie: supervision
formule: 25 000 spans et 1 Go d’ingestion par mois avec 15 jours de rétention
inclus:
  - 25 000 spans de trace par mois
  - 1 Go d’ingestion par mois
  - 15 jours de rétention
  - Utilisateurs illimités
  - Évaluations illimitées
  - Expériences et datasets illimités
  - Tracing OpenTelemetry
  - Suivi des tokens de la latence et des coûts
  - Jusqu’à 10 issues Signal par mois
conditions:
  - Compte Arize AX
  - Instrumentation de l’application ou de l’agent à observer
restrictions:
  - Ingestion limitée à 1 Go par mois
  - Maximum de 25 000 spans mensuels
  - Rétention limitée à 15 jours
  - Fonctions Enterprise SSO audit logs et déploiement self-hosted non incluses
  - Certaines fonctions avancées de Signal et des agents managés ne sont pas incluses
alertes:
  - type: fonctionnel
    niveau: important
    libelle: Rétention 15 jours
    detail: Les traces du plan AX Free ne sont conservées que quinze jours, ce qui limite les analyses historiques longues.
usages:
  - Observabilité
  - Monitoring
  - Machine learning
url: https://arize.com/
source: https://arize.com/pricing/
couleur: "#6d5dfc"
initiales: AR
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 98
verifieLe: 2026-08-18
verificationAutomatiqueLe: 2026-08-18
verificationNote: "La tarification officielle 2026 confirme AX Free avec 25k spans/mois, 1 Go/mois, 15 jours de rétention, utilisateurs et évaluations illimités. L’ancien quota de deux modèles n’est plus la métrique actuelle."
---

Arize AX cible désormais l’observabilité des applications IA et agents plutôt qu’un simple nombre de modèles supervisés. Le plan gratuit est généreux pour instrumenter un prototype ou une petite application avec tracing, évaluations et suivi de coûts, à condition d’accepter une rétention courte de quinze jours.