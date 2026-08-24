---
nom: "Robusta"
accroche: "Monitoring et remédiation Kubernetes autour de Prometheus avec intégrations d’alerting"
type: "SaaS"
categorie: "supervision"
formule: "Free Tier permanent confirmé ; plafond de nœuds actuel non publié assez clairement"
inclus: ["Monitoring Kubernetes", "Intégration Prometheus", "Alertes Slack, Teams et Discord", "Intégrations PagerDuty, Opsgenie et autres outils", "Option d’installation all-in-one"]
conditions: ["Bring Your Own Prometheus possible"]
restrictions: ["L’ancien plafond public de 20 nœuds n’est pas présenté comme quota 2026 certain faute de confirmation explicite sur la grille actuelle"]
alertes:
  - type: "fonctionnel"
    niveau: "important"
    libelle: "Plafond non publié"
    detail: "Le Free Tier permanent est confirmé, mais son plafond actuel de nœuds n’est plus clairement chiffré dans la page tarifaire publique."
usages: ["Kubernetes", "Monitoring", "Alertes", "Observabilité"]
url: "https://home.robusta.dev/"
source: "https://home.robusta.dev/"
couleur: "#7C3AED"
initiales: "RO"
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 617
verifieLe: 2026-08-24
verificationAutomatiqueLe: 2026-08-24
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
---

Robusta enrichit Prometheus avec un contexte Kubernetes, des notifications plus actionnables et des workflows de diagnostic ou de remédiation. Un Free Tier permanent est toujours proposé et l’intégration avec les principaux canaux d’alerte reste un vrai atout ; en revanche, l’ancien chiffre de vingt nœuds n’est plus assez clairement publié pour être présenté comme une limite actuelle vérifiée.
