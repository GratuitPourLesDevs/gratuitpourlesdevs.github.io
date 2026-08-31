---
nom: "Netdata Cloud"
accroche: "Monitoring temps réel de systèmes et infrastructures autour de l’agent open source Netdata"
type: "SaaS"
categorie: "supervision"
formule: "Community gratuit : jusqu’à 5 nodes pour un usage non commercial"
inclus: ["5 nodes dans Netdata Cloud Community", "Agent Netdata open source", "Métriques temps réel", "Dashboards et visualisations"]
conditions: ["Le plan Cloud Community gratuit est destiné aux usages non commerciaux"]
restrictions: ["Plafond Cloud de 5 nodes sur Community", "Un usage commercial nécessite de vérifier le plan adapté"]
alertes:
  - type: "fonctionnel"
    niveau: "important"
    libelle: "Usage non commercial"
    detail: "La gratuité du plan Cloud Community est explicitement limitée aux usages non commerciaux."
usages: ["Monitoring", "Observabilité", "Gestion d’infrastructure", "Logs"]
url: "https://www.netdata.cloud/"
source: "https://www.netdata.cloud/pricing/"
couleur: "#00AB44"
initiales: "ND"
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 605
verifieLe: 2026-08-31
verificationAutomatiqueLe: 2026-08-31
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Netdata collecte des métriques système très détaillées en temps réel et les visualise via son agent open source et son service Cloud. Le plan Community Cloud permet de centraliser jusqu’à cinq nœuds gratuitement, mais cette gratuité est destinée à l’usage non commercial ; pour un lab personnel c’est très complet, tandis qu’une exploitation commerciale doit être évaluée séparément.
