---
nom: "Verifalia"
accroche: "API de vérification d’adresses e-mail avec confirmation de boîte et détection des adresses jetables."
type: "API"
categorie: "email"
formule: "Free : 25 crédits de vérification par jour"
inclus: ["25 crédits/jour", "Validation via API ou interface", "Détection d’adresses jetables", "Confirmation de boîte"]
conditions: []
restrictions: ["Une vérification standard consomme 1 crédit ; certains traitements peuvent coûter davantage"]
alertes:
  - type: "usage"
    niveau: "important"
    libelle: "25 crédits par jour"
    detail: "Une vérification standard consomme un crédit ; certains traitements avancés peuvent en utiliser davantage."
usages: ["API", "E-mail transactionnel", "Développement et test"]
url: "https://verifalia.com/email-verification-api"
source: "https://verifalia.com/email-verification-api"
couleur: "#2563EB"
initiales: "VE"
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 721
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Verifalia valide les adresses en vérifiant leur structure, le domaine, la boîte et différents signaux comme l’usage d’un fournisseur jetable. Le niveau gratuit fournit 25 crédits par jour de façon permanente et peut être utilisé depuis l’interface ou l’API. Une vérification standard consomme un crédit, ce qui correspond à environ 750 validations simples sur un mois de 30 jours si elles sont réparties quotidiennement. Les traitements plus coûteux peuvent cependant utiliser plusieurs crédits, d’où l’intérêt de surveiller le mode choisi.
