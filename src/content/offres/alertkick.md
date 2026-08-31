---
nom: "AlertKick"
accroche: "Sécurité Linux, uptime, astreinte et pages de statut réunis dans un même produit"
type: "SaaS"
categorie: "supervision"
formule: "Free Tier annoncé ; les anciens plafonds chiffrés doivent être revalidés"
inclus: ["Agent Linux basé sur eBPF", "Monitoring uptime", "Alerting et on-call", "Pages de statut"]
conditions: ["Agent de sécurité destiné aux systèmes Linux compatibles"]
restrictions: ["Les chiffres historiques de 10 monitors, 5 minutes et 7 jours de rétention ne sont pas repris comme limites 2026 certaines"]
alertes:
  - type: "fonctionnel"
    niveau: "important"
    libelle: "Limites à confirmer"
    detail: "Le Free Tier existe, mais la grille publique actuelle ne confirme pas assez clairement les anciens quotas chiffrés."
usages: ["Monitoring", "Alertes", "Disponibilité", "Observabilité"]
url: "https://www.alertkick.com/"
source: "https://www.alertkick.com/"
couleur: "#DC2626"
initiales: "AK"
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 582
verifieLe: 2026-08-31
verificationAutomatiqueLe: 2026-08-31
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

AlertKick combine plusieurs besoins opérationnels habituellement séparés : surveillance d’un serveur Linux via eBPF, contrôles uptime, alertes d’astreinte et pages de statut. Un niveau gratuit est toujours mis en avant, mais les limites historiques souvent citées ne sont pas suffisamment confirmées par la grille publique actuelle ; la fiche documente donc le service sans figer des quotas potentiellement périmés.
