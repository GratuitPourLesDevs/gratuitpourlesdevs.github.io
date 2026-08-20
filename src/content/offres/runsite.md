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
statut: active
vedette: false
ordre: 832
verifieLe: '2026-08-20'
verificationAutomatiqueLe: '2026-08-20'
verificationNote: 'Le Free actuel est plus généreux que l’ancienne description : 100GB bande passante, Postgres + Redis gratuits, 5GB S3 et 3 000 e-mails/mois.'
---

Runsite — PaaS européen avec web services, PostgreSQL, Redis-compatible, stockage S3 et e-mail transactionnel dans un même compte.
