---
nom: OpenObserve
accroche: Plateforme open source d’observabilité pour logs, métriques et traces, gratuite en auto-hébergement
type: Ressource
categorie: gestion-logs
formule: Open Source self-hosted gratuit ; Enterprise self-hosted gratuit jusqu’à 50 Go d’ingestion par jour
inclus:
- Édition Open Source auto-hébergeable gratuite
- Enterprise self-hosted gratuit jusqu’à 50 Go d’ingestion par jour
- Logs, métriques, traces, RUM et error tracking
- Compatibilité OpenTelemetry
conditions:
- Fournir sa propre infrastructure pour l’auto-hébergement
restrictions:
- Le Free Tier OpenObserve Cloud à 200 Go/mois a été supprimé le 2 juin 2025
- OpenObserve Cloud ne propose plus qu’un essai gratuit de 14 jours
- Les limites de stockage en Open Source dépendent de l’infrastructure auto-hébergée
alertes:
- type: finance
  niveau: critique
  libelle: Free Cloud supprimé
  detail: L’ancien Cloud Free à 200 Go/mois n’existe plus depuis juin 2025 ; le gratuit actuel repose sur l’auto-hébergement.
usages:
- Logs
- Observabilité
- Monitoring
- Télémétrie
url: https://openobserve.ai/
documentation: https://openobserve.ai/docs/
source: https://openobserve.ai/pricing/
couleur: '#F97316'
initiales: OO
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 548
verifieLe: 2026-08-31
verificationAutomatiqueLe: 2026-08-31
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

OpenObserve est référencé avec les limites gratuites vérifiées le 19 août 2026.
