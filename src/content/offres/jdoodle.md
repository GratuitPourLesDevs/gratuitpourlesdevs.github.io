---
nom: "JDoodle"
accroche: "Compilateur et IDE en ligne couvrant plus de 90 langages, avec API d’exécution de code et fonctions collaboratives."
type: "SaaS"
categorie: ide-edition-code
formule: "Free : 100 exécutions IDE par jour et 20 crédits API par jour"
inclus:
- "100 exécutions de code par jour dans l’IDE"
- "20 crédits API de compilation par jour"
- "Plus de 90 langages"
- "25 projets"
- "0,5 Go de RAM et 0,5 vCPU"
- "15 crédits IA par jour"
conditions:
- "Compte requis pour sauvegarder des projets et utiliser certaines fonctions"
restrictions:
- "L’API gratuite est désormais limitée à 20 crédits par jour, et non 200"
- "Ressources de calcul limitées"
- "Les volumes supérieurs nécessitent une offre payante"
alertes:
- type: usage
  niveau: important
  libelle: "API : 20 crédits/jour"
  detail: "La documentation actuelle du Compiler API ne donne plus 200 crédits quotidiens : le niveau de test gratuit est limité à 20 crédits par jour."
usages: ["Développement et test", "API", "Environnements de développement"]
url: https://www.jdoodle.com/
source: https://www.jdoodle.com/pricing
couleur: "#ED1C24"
initiales: "JD"
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 1134
verifieLe: 2026-08-31
verificationAutomatiqueLe: 2026-08-31
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

JDoodle permet aussi bien de tester rapidement un extrait de code que d’intégrer de l’exécution distante via API. Les quotas actuels sont nettement plus précis que les anciennes descriptions circulant en ligne, notamment pour l’API.
