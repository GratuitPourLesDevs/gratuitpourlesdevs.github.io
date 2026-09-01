---
nom: "Pingmeter"
accroche: "Monitoring HTTP, HTTPS, SSH et ports TCP"
type: "SaaS"
categorie: "supervision"
formule: "Compte gratuit encore disponible ; quota exact de monitors et fréquence à revalider"
inclus: ["HTTP et HTTPS monitoring", "SSH monitoring", "Ports TCP personnalisés", "Alertes de disponibilité"]
conditions: []
restrictions: ["L’ancienne référence à 5 monitors avec intervalle de 10 minutes n’est pas retenue comme limite actuelle certaine"]
alertes:
  - type: "fonctionnel"
    niveau: "important"
    libelle: "Quotas à revalider"
    detail: "Un compte gratuit est toujours référencé, mais la grille actuelle ne confirme pas assez clairement les anciens plafonds."
usages: ["Monitoring", "Disponibilité", "Réseau"]
url: "https://pingmeter.com/"
source: "https://pingmeter.com/"
couleur: "#2563EB"
initiales: "PM"
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 613
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Pingmeter surveille des services réseau au-delà du simple HTTP grâce au support HTTPS, SSH et de ports TCP personnalisés. Un niveau gratuit est toujours identifiable, mais les anciens chiffres de cinq monitors et dix minutes ne sont pas assez clairement confirmés par la grille publique actuelle ; ils ne sont donc pas présentés ici comme des quotas 2026 garantis.
