---
nom: "Numverify"
accroche: "API REST de validation internationale de numéros de téléphone avec détection du pays, de l’opérateur et du type de ligne."
type: "API"
categorie: verification-mobile
formule: "Free : 100 requêtes API par mois, sans limite de durée"
inclus:
- "100 requêtes API par mois"
- "Validation de numéros nationaux et internationaux"
- "Détection de l’opérateur et du type de ligne"
- "Détection du pays et de la localisation"
- "Réponses JSON"
conditions: []
restrictions:
- "Quota gratuit limité à 100 requêtes par mois"
- "Les volumes supérieurs et le support avancé nécessitent un abonnement payant"
alertes:
- type: usage
  niveau: important
  libelle: "Quota mensuel limité"
  detail: "Le Free Plan est permanent mais limité à seulement 100 requêtes API par mois."
usages: ["API", "Données", "Mobile", "Développement et test"]
url: https://numverify.com/
source: https://numverify.com/pricing
couleur: "#2D6CDF"
initiales: "NV"
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 1193
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Numverify est utile dès qu’un formulaire accepte des numéros internationaux et que l’on veut éviter de stocker des valeurs impossibles, mal formatées ou incompatibles avec l’usage prévu. Une application peut vérifier le pays, l’opérateur et le type de ligne avant de déclencher un SMS, un appel ou simplement d’enregistrer le contact, ce qui améliore la qualité des données en amont. Avec 100 appels mensuels, le Free Plan convient surtout au développement, aux tests ou à un très petit service plutôt qu’à une validation systématique à fort trafic.
