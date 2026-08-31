---
nom: Bugfender
accroche: Remote logging pour applications avec 100 000 lignes de logs par jour et 24 h de rétention
type: SaaS
categorie: gestion-logs
formule: Free avec 100 000 lignes de logs par jour, 24 h de rétention, apps et membres d’équipe illimités
inclus:
- 100 000 lignes de logs par jour
- 24 heures de rétention
- 2 000 appareils
- Applications illimitées
- Membres d’équipe illimités
- Remote logging et recherche avancée
- SDK natifs mobile et web
conditions: []
restrictions:
- Les logs dépassant le quota Free sont finalement rejetés
- Crash reporting et feedback utilisateur nécessitent un plan payant
alertes:
- type: usage
  niveau: important
  libelle: Rétention très courte
  detail: Le Free conserve les logs seulement 24 heures ; les volumes au-delà du quota sont rejetés.
usages:
- Logs
- Mobile
- Monitoring
- Développement et test
url: https://bugfender.com/
documentation: https://support.bugfender.com/
source: https://bugfender.com/pricing/
couleur: '#FF4B55'
initiales: BF
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 542
verifieLe: 2026-08-31
verificationAutomatiqueLe: 2026-08-31
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Bugfender est un service de journalisation à distance conçu pour récupérer les logs d’applications exécutées sur les appareils réels des utilisateurs. Après intégration de son SDK dans une application mobile ou web, les logs remontent dans un tableau de bord central où ils peuvent être recherchés et filtrés par contenu, version de l’application ou appareil afin de diagnostiquer un problème sans devoir le reproduire localement. Le plan gratuit convient particulièrement au développement, aux tests, aux petits projets et au diagnostic ponctuel : il accepte jusqu’à 100 000 lignes de logs sur une fenêtre de 24 heures, jusqu’à 2 000 appareils, avec applications et membres d’équipe illimités. Sa principale limite est la rétention de seulement 24 heures ; en cas de dépassement durable du quota, les lignes supplémentaires finissent par être ignorées, tandis que le crash reporting et la collecte de feedback utilisateur restent réservés aux offres payantes.
