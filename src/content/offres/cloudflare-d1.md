---
nom: Cloudflare D1
accroche: Base de données SQL serverless compatible SQLite pour Workers et Pages
type: PaaS
categorie: services-donnees-manages
formule: 5 millions de lignes lues et 100 000 lignes écrites par jour avec 5 Go au total
inclus: [5 millions de lignes lues par jour, 100 000 lignes écrites par jour, 5 Go de stockage au total par compte, Jusqu’à 10 bases de données, 500 Mo maximum par base, Sémantique SQL compatible SQLite, Accès depuis Cloudflare Workers et Pages, API HTTP pour l’administration, Restauration à un instant donné sur 7 jours, Jusqu’à 50 requêtes D1 par invocation Worker, Aucun frais de transfert sortant, Mise à l’échelle à zéro sans facturation de capacité inactive]
conditions: [Compte Cloudflare gratuit, Utilisation du plan Workers Free, Base D1 liée à un Worker ou une application Pages, Aucune carte bancaire]
restrictions: [Quotas de lecture et d’écriture réinitialisés chaque jour à minuit UTC, Requêtes bloquées lorsque le quota quotidien de lecture ou d’écriture est atteint, Nouvelles écritures et modifications de schéma bloquées lorsque les 5 Go sont atteints, 500 Mo maximum par base sur le plan gratuit, 10 bases maximum par compte gratuit, Chaque base traite les requêtes de manière séquentielle, 30 secondes maximum par requête SQL, 100 colonnes maximum par table, 2 Mo maximum pour une chaîne un BLOB ou une ligne, 100 paramètres liés maximum par requête, Les index réduisent les lignes lues mais ajoutent des lignes écrites lors des modifications]
alertes:
  - type: operationnel
    niveau: critique
    libelle: Requêtes bloquées au quota
    detail: Les lectures ou écritures dépassant le quota quotidien sont bloquées jusqu’à sa réinitialisation.
  - type: fonctionnel
    niveau: important
    libelle: 500 Mo maximum par base
    detail: Le plan gratuit limite chaque base D1 à 500 Mo, même si le compte dispose de 5 Go au total.
usages: [Base SQL serverless, API, Applications web, Base de données relationnelle, Prototypage, Architecture multi-tenant]
url: https://developers.cloudflare.com/d1/
documentation: https://developers.cloudflare.com/d1/
source: https://developers.cloudflare.com/d1/platform/pricing/
couleur: "#f6821f"
initiales: D1
carteRequise: false
permanent: true
statut: "active"
vedette: false
ordre: 54
verifieLe: 2026-08-31
verificationAutomatiqueLe: 2026-08-31
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Cloudflare D1 est une base SQL serverless reposant sur la sémantique SQLite et intégrée à Workers et Pages. Elle convient aux API, applications web et architectures qui répartissent les données entre plusieurs petites bases. Le quota de stockage gratuit atteint désormais 5 Go au total, mais chaque base reste limitée à 500 Mo sur le plan Workers Free.
