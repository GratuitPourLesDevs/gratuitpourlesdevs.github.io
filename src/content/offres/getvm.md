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
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Vérification automatique incomplète (HTTP 403) ; statut éditorial conservé."
verificationEtat: "inconclusive"
verificationCode: "controle_bloque"
verificationEchecsConsecutifs: 2
---

GetVM convient pour reproduire rapidement une commande Linux, vérifier un script ou faire manipuler un environnement isolé pendant une démonstration. Le plan gratuit permet de lancer jusqu’à cinq VM quotidiennes de 30 minutes avec 2 Go de RAM, directement dans le navigateur. Il faut choisir un autre environnement dès que le projet nécessite Internet, la conservation des fichiers, une session longue ou un serveur disponible en continu.
