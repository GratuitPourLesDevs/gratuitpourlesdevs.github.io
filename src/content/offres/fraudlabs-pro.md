---
nom: FraudLabs Pro
accroche: Détection de fraude pour commandes e-commerce via API et règles
type: API
categorie: api-donnees-ml
formule: 500 vérifications par mois pour les boutiques sous 25 000 $ de ventes mensuelles
inclus: [500 requêtes par mois, Score de fraude, 5 règles de validation, 50 blacklists personnalisées, Validations IP facturation livraison e-mail et paiement, 10 crédits SMS de vérification, Aucune carte bancaire requise]
conditions: [Compte FraudLabs Pro, Ventes mensuelles inférieures à 25 000 USD pour le plan Micro]
restrictions: [Plan Micro réservé aux boutiques sous 25 000 USD de ventes mensuelles, 500 vérifications maximum par mois, Fonctions avancées et volumes supérieurs réservés aux plans payants]
alertes:
  - type: usage
    niveau: critique
    libelle: Éligibilité commerciale
    detail: Le plan Micro gratuit est limité aux boutiques dont les ventes mensuelles restent sous 25 000 USD.
usages: [API, Données]
url: https://www.fraudlabspro.com/
documentation: https://www.fraudlabspro.com/developer/api/screen-order
source: https://www.fraudlabspro.com/pricing
couleur: "#dc2626"
initiales: FLP
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 169
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

FraudLabs Pro évalue les commandes e-commerce et renvoie un score de fraude accompagné de règles configurables. Le quota gratuit est correct pour une petite boutique, mais l’éligibilité dépend explicitement d’un chiffre d’affaires mensuel inférieur à 25 000 dollars.
