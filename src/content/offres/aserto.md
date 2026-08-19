---
nom: Aserto
accroche: Ancien service SaaS d’autorisation fine, arrêté en 2025 ; le moteur Topaz open source lui succède
type: SaaS
categorie: identite-acces
formule: Service SaaS arrêté le 31 mai 2025 ; Topaz reste disponible en open source
inclus:
- Moteur d’autorisation fine historique
- Politiques d’accès
- Successeur open source Topaz disponible
conditions: []
restrictions:
- Le control plane SaaS Aserto a été définitivement arrêté le 31 mai 2025
- Les anciens quotas Free de 1 000 utilisateurs et 100 authorizers ne sont plus exploitables
alertes:
- type: operationnel
  niveau: critique
  libelle: Service SaaS arrêté
  detail: Aserto a officiellement fermé son control plane SaaS le 31 mai 2025 ; utiliser Topaz pour la continuité open source.
usages:
- Gestion des accès
- API
- Développement et test
url: https://www.aserto.com/
documentation: https://docs.aserto.com/
source: https://www.aserto.com/blog/the-final-chapter-for-aserto
couleur: '#4F46E5'
initiales: AS
carteRequise: false
depassementFacture: false
permanent: false
statut: obsolete
vedette: false
ordre: 482
verifieLe: '2026-08-19'
verificationAutomatiqueLe: '2026-08-19'
verificationNote: Aserto a annoncé la fermeture du SaaS au 31 mai 2025. L’ancien Free Tier n’est donc plus une offre actuelle.
---

Aserto est conservé comme référence historique. Pour un nouveau projet, le composant open source Topaz constitue la continuité technique annoncée par l’équipe.
