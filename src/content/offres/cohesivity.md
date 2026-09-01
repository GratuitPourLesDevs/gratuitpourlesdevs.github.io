---
nom: Cohesivity
accroche: Infrastructure backend à la demande pensée pour les agents IA, regroupant bases, stockage, hébergement,
  e-mail et APIs d’IA.
type: BaaS
categorie: baas
formule: 'Free : quotas par service, avec chiffres agrégés à confirmer directement auprès de l’éditeur'
inclus:
- Jusqu’à 10 projets selon le référentiel courant
- 100 000 requêtes edge rapportées
- 10 GB de stockage objet rapportés
- 100 e-mails rapportés
- 5 USD/mois de crédits IA et recherche rapportés
- PostgreSQL, Redis, hébergement, stockage, AI gateway et APIs tierces
conditions:
- L’inscription et le provisionnement sont conçus pour être pilotés par un agent IA
restrictions:
- Les pages d’offering publient des limites distinctes selon chaque service
- Les chiffres agrégés de la formule Free ne sont pas regroupés dans une grille tarifaire publique unique
alertes:
- type: usage
  niveau: important
  libelle: Quotas à confirmer
  detail: Le service et ses Free Tiers par offering sont actuels, mais les chiffres agrégés 10 projets / 100K edge
    / 10 GB / 100 e-mails / 5 USD ne sont pas exposés ensemble sur une page tarifaire publique.
usages:
- Agents IA
- Backend d’application
- Base de données
- Stockage objet
- API
url: https://cohesivity.ai/
source: https://cohesivity.ai/
couleur: '#111827'
initiales: CO
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 821
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Cohesivity cherche à simplifier la création d’agents IA en leur donnant accès à un ensemble cohérent de briques backend — bases de données, cache, stockage objet, hébergement, e-mail, modèles et APIs tierces — sans devoir provisionner chaque service séparément. Les quotas rapportés pour le niveau gratuit sont suffisamment intéressants pour expérimenter plusieurs projets et construire un prototype d’agent connecté à de vraies ressources. Cette fiche reste toutefois volontairement à vérifier : l’éditeur publie les limites service par service et ne rassemble pas encore publiquement les chiffres 10 projets, 100 000 requêtes edge, 10 GB de stockage, 100 e-mails et 5 $ de crédits sur une grille unique. Cohesivity est donc prometteur pour le prototypage agentique, mais les quotas doivent être confirmés avant de dimensionner un usage réel.
