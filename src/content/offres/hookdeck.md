---
nom: "Hookdeck"
accroche: "Passerelle observable pour recevoir, tester, router et superviser des webhooks et événements."
type: SaaS
categorie: tunnels-webrtc-websockets
formule: "Developer : 10 000 événements par mois et 3 jours de rétention"
inclus:
- "10 000 événements inclus par mois"
- "100 000 requêtes écartées incluses par mois"
- "3 jours de rétention des événements"
- "1 utilisateur"
- "Connexions et transformations illimitées"
- "5 événements par seconde et par destination inclus"
- "Aucune carte bancaire requise"
conditions:
- "Création d’un compte Hookdeck gratuit"
restrictions:
- "Au-delà de 10 000 événements, les événements continuent d’être reçus mais le tableau de bord peut être verrouillé jusqu’à la période suivante ou une mise à niveau"
- "En cas de dépassement excessif, Hookdeck se réserve le droit d’arrêter le traitement"
- "Les fonctions d’observabilité avancées et SLA sont réservées aux offres supérieures"
alertes:
- type: operationnel
  niveau: critique
  libelle: Tableau de bord verrouillable au quota
  detail: Après 10 000 événements, les événements peuvent continuer à arriver mais le tableau de bord peut être verrouillé jusqu’au prochain cycle ou à une mise à niveau.
- type: operationnel
  niveau: important
  libelle: Traitement susceptible d’être arrêté
  detail: En cas de dépassement excessif, Hookdeck se réserve le droit d’interrompre le traitement des événements.
usages: ["Webhook local", "API", "Monitoring", "Tests", "Intégration applicative"]
url: https://hookdeck.com/
documentation: https://hookdeck.com/docs
source: https://hookdeck.com/pricing
couleur: "#7C3AED"
initiales: HD
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 949
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Hookdeck centralise les webhooks et événements avant leur livraison aux applications, avec inspection, rejeu et routage. C’est utile pour développer des intégrations, observer les erreurs et éviter de perdre des événements lors des tests. Le plan Developer reste permanent et sans carte bancaire, mais son quota principal actuel est de dix mille événements mensuels.
