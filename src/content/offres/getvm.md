---
nom: "GetVM"
accroche: "Machines Linux instantanées accessibles depuis le navigateur pour tester du code et disposer d’un environnement temporaire."
type: "SaaS"
categorie: ide-edition-code
formule: "Free : jusqu’à 5 VM par jour"
inclus:
- "5 VM par jour"
- "1 cœur CPU par VM"
- "2 Go de RAM"
- "Session de 30 minutes"
- "Environnement Linux instantané"
conditions:
- "Navigateur compatible"
restrictions:
- "Pas d’accès Internet sur le plan Free"
- "Pas de persistance"
- "Sessions limitées à 30 minutes"
alertes:
- type: operationnel
  niveau: important
  libelle: "VM éphémères hors ligne"
  detail: "Les VM gratuites ne disposent ni de persistance ni d’accès Internet et sont limitées à des sessions de 30 minutes."
usages: ["Environnements de développement", "Compute", "Développement et test"]
url: https://getvm.io/
source: https://getvm.io/pricing
couleur: "#111827"
initiales: "GV"
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 1133
verifieLe: '2026-08-25'
verificationAutomatiqueLe: 2026-08-31
verificationNote: "Vérification automatique incomplète (HTTP 403) ; statut éditorial conservé."
verificationEtat: "inconclusive"
verificationCode: "controle_bloque"
verificationEchecsConsecutifs: 1
---

GetVM est adapté aux essais ponctuels qui ont besoin d’un vrai environnement Linux mais pas d’un serveur durable. La limite de cinq VM par jour est claire, tout comme les compromis : aucune persistance et aucun accès réseau sortant.
