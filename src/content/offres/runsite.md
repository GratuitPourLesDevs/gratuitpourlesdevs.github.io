---
nom: Runsite
accroche: PaaS européen avec web services, PostgreSQL, Redis-compatible, stockage S3 et e-mail transactionnel dans un même compte.
type: PaaS
categorie: paas
formule: 'Free Forever : 1 web service 0,1 vCPU/256 MB + Postgres + Redis + 5 GB S3'
inclus:
- '1 web service : 0,1 vCPU, 256 MB RAM, 1 GB disque'
- 100 GB de bande passante mensuelle pour le web service
- '1 PostgreSQL : 256 MB RAM, 1 GB stockage, 25 connexions'
- '1 Redis-compatible : 50 MB, 50 connexions'
- 5 GB de stockage S3-compatible
- 3 000 e-mails transactionnels par mois
- Sites statiques gratuits avec 100 GB/mois
- Domaines personnalisés et SSL
- Serveurs exclusivement en Europe
conditions: []
restrictions:
- Un web service gratuit sans requête pendant 14 jours est suspendu puis se réveille à la prochaine visite
- Le stockage S3 et les e-mails dépassant les quotas gratuits sont facturés à l’usage
alertes:
- type: finance
  niveau: important
  libelle: Overage S3 et e-mail
  detail: 'Les 5 GB S3 et 3 000 e-mails/mois sont des franchises : l’usage supplémentaire est facturé, même si le web service Free reste à 0 €.'
usages:
- Applications web
- PostgreSQL
- Stockage objet
- E-mail transactionnel
- Hébergement
url: https://runsite.app/
source: https://runsite.app/
couleur: '#6366F1'
initiales: RS
carteRequise: false
depassementFacture: true
permanent: true
statut: "active"
vedette: false
ordre: 832
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Runsite est intéressant parce qu’il permet de démarrer une petite application européenne avec presque toutes ses briques techniques dans le même Free Tier : service web, PostgreSQL, cache compatible Redis, stockage S3 et e-mail transactionnel. Avec 100 GB de trafic mensuel pour le web, 5 GB de stockage objet et 3 000 e-mails par mois, l’ensemble est suffisamment généreux pour un MVP ou un petit site dynamique qui aurait autrement besoin de plusieurs fournisseurs. Le web service gratuit peut être suspendu après 14 jours sans requête puis se réveille à la visite suivante. Il faut aussi surveiller le stockage S3 et l’e-mail, car leur dépassement est facturé à l’usage même si le service web reste gratuit.
