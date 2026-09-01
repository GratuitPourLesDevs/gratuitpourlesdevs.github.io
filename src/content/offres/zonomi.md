---
nom: Zonomi
accroche: DNS Anycast avec API, DDNS et DNSSEC ; plan gratuit pour une zone avec jusqu’à un million de requêtes mensuelles.
type: Service managé
categorie: dns
formule: 'Free : 1 zone, 10 enregistrements retenus par prudence et 1 M de requêtes par mois'
inclus:
- 1 zone DNS
- 10 enregistrements retenus comme plafond conservateur
- 1 million de requêtes DNS par mois
- API REST
- Dynamic DNS
- DNSSEC
- Anycast DNS
- Propagation annoncée comme rapide
conditions: []
restrictions:
- La page officielle actuelle est contradictoire : elle mentionne à la fois 10 et 20 enregistrements sur le plan gratuit
- Une seule zone sur le plan Free
alertes:
- type: usage
  niveau: important
  libelle: Quota de records contradictoire
  detail: La page Zonomi affiche actuellement deux plafonds différents pour les enregistrements gratuits ; cette fiche retient 10 par prudence.
usages: [DNS, API, Automatisation, Sécurité]
url: https://zonomi.com/
source: https://zonomi.com/
couleur: '#16A34A'
initiales: ZO
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 912
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Zonomi est intéressant pour automatiser gratuitement le DNS d’un petit projet grâce à son API, tout en conservant Dynamic DNS et DNSSEC. Une zone et un million de requêtes mensuelles suffisent largement à un domaine personnel, un labo ou un petit service en production. Le point de vigilance vient directement de la documentation du fournisseur : la même page affiche actuellement deux limites différentes pour le nombre d’enregistrements du plan Free. La fiche retient donc dix enregistrements, la valeur la plus restrictive, et reste marquée à vérifier plutôt que de présenter comme certaine une limite ambiguë.
