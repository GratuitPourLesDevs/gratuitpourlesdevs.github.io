---
nom: Flaky API
accroche: API factice pour simuler délais, erreurs HTTP, échecs et réponses JSON mal formées
type: API
categorie: tests
formule: Service gratuit avec 1 000 requêtes par jour sans clé ou 10 000 avec une clé gratuite
inclus: [1 000 requêtes par jour sans clé, 10 000 requêtes par jour avec une clé gratuite, Simulation de délais, Simulation d’erreurs et d’échecs, Réponses mal formées, Aucun plan payant annoncé]
conditions: [Clé gratuite nécessaire pour le quota supérieur]
restrictions: [Quotas quotidiens, Service récent dont les conditions doivent être surveillées, Aucune garantie de disponibilité publiée]
alertes: []
usages: [API, Tests, Développement et test]
url: https://flakyapi.dev/
source: https://flakyapi.dev/
couleur: "#DC2626"
initiales: FA
carteRequise: false
depassementFacture: false
permanent: true
statut: active
vedette: false
ordre: 1194
verifieLe: 2026-09-25
verificationAutomatiqueLe: 2026-09-25
verificationNote: "Les quotas proviennent de l’ajout du 24 septembre 2026 dans free-for.dev ; la page officielle doit être recontrôlée lors de la prochaine vérification."
verificationEtat: controle_requis
verificationCode: controle_bloque
verificationEchecsConsecutifs: 0
---

Flaky API aide à vérifier le comportement d’une application lorsque son backend ralentit, échoue ou renvoie une charge invalide. Les développeurs peuvent ainsi tester retries, timeouts, circuit breakers et affichages d’erreur sans construire ni maintenir leur propre serveur de simulation.
