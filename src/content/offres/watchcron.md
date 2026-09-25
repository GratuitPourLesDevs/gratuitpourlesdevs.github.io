---
nom: WatchCron
accroche: Monitoring de cron jobs et tâches planifiées par heartbeat avec alertes
type: SaaS
categorie: supervision
formule: Plan Hobby gratuit permanent avec contrôles toutes les 5 minutes
inclus: [Monitoring de cron jobs, Heartbeats HTTP, Alertes par e-mail, Contrôles toutes les 5 minutes, Surveillance de tâches planifiées]
conditions: [Compte WatchCron gratuit]
restrictions: [La page officielle mentionne selon ses sections 5 moniteurs ou 20 contrôles, Les intervalles de 30 secondes et canaux avancés nécessitent un plan payant]
alertes:
  - type: fonctionnel
    niveau: important
    libelle: Quota contradictoire
    detail: La page officielle affiche actuellement deux valeurs différentes pour le nombre de contrôles gratuits ; la fiche ne retient donc aucun plafond chiffré.
usages: [Monitoring, Tâches planifiées, Alertes, Disponibilité]
url: https://watchcron.com/
source: https://watchcron.com/
couleur: "#10B981"
initiales: WC
carteRequise: false
depassementFacture: false
permanent: true
statut: active
vedette: false
ordre: 1199
verifieLe: 2026-09-25
verificationAutomatiqueLe: 2026-09-25
verificationNote: "Le plan Hobby gratuit permanent et les contrôles à 5 minutes sont confirmés, mais le nombre gratuit est contradictoire sur la page officielle."
verificationEtat: controle_requis
verificationCode: controle_bloque
verificationEchecsConsecutifs: 0
---

WatchCron reçoit les signaux de cron jobs et avertit lorsqu’une exécution attendue manque ou termine en erreur. Il convient aux sauvegardes, synchronisations et traitements planifiés d’un petit projet, mais le plafond exact doit être revérifié car la page officielle affiche actuellement deux valeurs différentes.
