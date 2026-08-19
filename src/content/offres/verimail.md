---
nom: "Verimail"
accroche: "Service de vérification d’e-mails en masse et via API."
type: "API"
categorie: "email"
formule: "Free : 100 vérifications par mois"
inclus: ["100 vérifications/mois", "API", "Validation en masse"]
conditions: []
restrictions: ["L’API bloque lorsque le quota gratuit est épuisé"]
alertes:
  - type: "usage"
    niveau: "important"
    libelle: "100 vérifications par mois"
    detail: "Le service bloque les requêtes supplémentaires lorsque le quota Free est consommé."
usages: ["API", "E-mail transactionnel", "Développement et test"]
url: "https://verimail.io/"
source: "https://verimail.io/"
couleur: "#2563EB"
initiales: "VE"
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 722
verifieLe: "2026-08-19"
verificationAutomatiqueLe: "2026-08-19"
verificationNote: "Free vérifié : 100 vérifications/mois ; l’API bloque au-delà du quota."
---

Verimail permet de nettoyer une liste ou de valider une adresse au moment d’une inscription, soit en masse soit via API. Le plan gratuit couvre 100 vérifications par mois, un volume adapté à un prototype, un petit site ou des tests d’intégration. Le comportement au dépassement est également intéressant côté maîtrise des coûts : l’API ne facture pas silencieusement des vérifications supplémentaires mais bloque lorsque le quota gratuit est épuisé. Pour des volumes plus importants, il faut donc passer explicitement à une offre payante.
