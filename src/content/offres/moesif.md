---
nom: "Moesif"
accroche: "Analytics, observabilité et monétisation d’API pour REST, GraphQL et autres interfaces, avec métriques d’usage et facturation basée sur la consommation."
type: "SaaS"
categorie: analytique-evenements-statistiques
formule: "Free : 30 000 événements par mois"
inclus:
- "30 000 événements par mois"
- "7 jours de rétention"
- "Membres d’équipe illimités"
- "Analytics d’API, logs, métriques et dashboards"
- "Monétisation d’API et facturation basée sur l’usage"
- "Connecteurs de facturation Stripe, Recurly, Chargebee et Zuora"
- "Aucun frais de transaction"
conditions: []
restrictions:
- "Après l’essai Growth de 14 jours, le compte revient automatiquement au plan Free"
- "Le quota historique de 500 000 appels par mois n’est plus le Free Tier actuel"
- "Les offres self-service payantes peuvent facturer les événements supplémentaires"
alertes:
- type: usage
  niveau: important
  libelle: "Free Tier réduit à 30 000 événements"
  detail: "Le plan gratuit courant autorise 30 000 événements mensuels avec 7 jours de rétention, très loin de l’ancien quota de 500 000 appels."
usages: ["API", "Données", "Observabilité"]
url: https://www.moesif.com/
source: https://www.moesif.com/pricing
couleur: "#6C63FF"
initiales: "MOE"
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 1176
verifieLe: '2026-08-26'
verificationAutomatiqueLe: 2026-08-31
verificationNote: "La source tarifaire est momentanément indisponible (HTTP 404) ; statut éditorial conservé jusqu’à confirmation."
verificationEtat: "controle_requis"
verificationCode: "source_indisponible"
verificationEchecsConsecutifs: 1
---

Moesif devient intéressant dès qu’une API est un véritable produit et qu’il faut comprendre qui l’utilise, comment, à quel volume et avec quel impact commercial. En plus de l’observabilité des appels, la plateforme peut servir de couche de mesure pour une facturation à l’usage et transmettre ces données à Stripe, Recurly, Chargebee ou Zuora, ce qui évite de reconstruire tout le comptage côté application. Le Free Tier suffit pour un petit trafic ou une phase de lancement, mais ses 30 000 événements mensuels et seulement sept jours de rétention demandent de surveiller rapidement la croissance.
