---
nom: MantleDB
accroche: "Stockage JSON anonyme pour scripts et petites applications, sans création de compte."
type: API
categorie: services-donnees-manages
formule: "Free : 1 bucket de 1 Mo avec nettoyage après 72 h d’inactivité"
inclus:
- "Aucune inscription"
- "Identifiant maître pour mise à jour"
- "Identifiant lecture seule pour exposition publique"
conditions: []
restrictions:
- "1 bucket"
- "1 Mo par bucket"
- "Suppression après 72 h d’inactivité"
alertes:
- type: operationnel
  niveau: critique
  libelle: "Nettoyage après 72 h d’inactivité"
  detail: "Le bucket gratuit peut être collecté après 72 heures sans activité ; ce service convient surtout aux scripts et données temporaires."
usages: ["API", "Données", "Prototypage", "NoSQL"]
url: https://mantledb.sh/
source: https://mantledb.sh/
couleur: '#2563EB'
initiales: MD
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 1048
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

MantleDB vise les petits scripts qui ont besoin d’un stockage JSON jetable et sans inscription.