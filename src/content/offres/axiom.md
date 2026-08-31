---
nom: 'Axiom'
accroche: 'Plateforme d’observabilité pour ingérer, interroger et surveiller de gros volumes de logs et d’événements'
type: 'SaaS'
categorie: 'crashs-exceptions'
formule: 'Personal gratuit : 500 Go chargés/mois, 25 Go stockés, 10 GB-hours de requêtes et 30 jours de rétention'
inclus:
- '500 Go de données chargées par mois'
- '25 Go de stockage Always Free'
- '10 GB-hours de calcul de requêtes par mois'
- '3 datasets'
- '3 monitors'
- 'Notificateurs e-mail et Discord'
- 'Bande passante, API et sources de données illimitées sous Fair Use'
conditions:
- 'Plan Personal gratuit pour tous les clients'
- 'Déploiement edge US sur le plan Personal'
restrictions:
- '1 utilisateur'
- '30 jours de rétention maximum'
- '256 champs par dataset'
- 'Le chiffre de 500 Go correspond au volume chargé par mois, pas à 500 Go de stockage persistant'
alertes:
- type: usage
  niveau: important
  libelle: '500 Go ≠ stockage'
  detail: 'Le plan autorise 500 Go chargés par mois mais seulement 25 Go de stockage Always Free.'
usages:
- 'Logs'
- 'Observabilité'
- 'Monitoring'
- 'Alertes'
url: 'https://axiom.co/'
documentation: 'https://axiom.co/docs/reference/limits'
source: 'https://axiom.co/docs/reference/limits'
couleur: '#111827'
initiales: 'AX'
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 565
verifieLe: 2026-08-31
verificationAutomatiqueLe: 2026-08-31
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Axiom centralise des logs et événements pour les explorer avec son moteur de requête et déclencher des monitors. Son Personal est très généreux pour un projet individuel : jusqu’à 500 Go de données peuvent être chargés chaque mois, avec 10 GB-hours de calcul de requêtes, 3 datasets et 3 monitors. La nuance importante est le stockage : les 500 Go ne sont pas une capacité persistante ; l’allocation Always Free est de 25 Go, avec 30 jours de rétention maximum et un seul utilisateur.
