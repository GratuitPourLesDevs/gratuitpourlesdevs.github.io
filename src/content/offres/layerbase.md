---
nom: "Layerbase"
accroche: "Bases de données managées multiengines avec TLS, mise en veille et quotas de trafic gratuits."
type: PaaS
categorie: services-donnees-manages
formule: "Free : 2 bases, 5 Go de stockage total et 8 moteurs disponibles"
inclus:
- "2 bases de données managées"
- "5 Go de stockage total"
- "PostgreSQL, MariaDB, Redis et Valkey"
- "DuckDB, SQLite, libSQL et TypeDB"
- "TLS sur les connexions"
- "20 connexions simultanées"
- "10 Go de trafic sur 24 h, 50 Go sur 7 jours et 150 Go sur 30 jours"
- "Branchement disponible sur les moteurs compatibles"
conditions:
- "Création d’un compte Layerbase"
- "Aucune carte bancaire requise"
restrictions:
- "Les bases gratuites peuvent se mettre en veille lorsqu’elles sont inactives"
- "MySQL n’est plus listé parmi les moteurs gratuits actuels"
- "Les seuils de trafic relèvent de la politique d’usage équitable et peuvent entraîner une limitation plutôt qu’une facturation"
alertes:
- type: operationnel
  niveau: important
  libelle: Mise en veille après inactivité
  detail: Les bases gratuites peuvent se mettre en veille lorsqu’elles ne reçoivent plus d’activité.
- type: usage
  niveau: important
  libelle: Limitation possible du trafic
  detail: Les seuils de trafic relèvent d’une politique d’usage équitable et peuvent entraîner une limitation du service.
usages: ["Base de données", "PostgreSQL", "Mise en cache", "Développement et test"]
url: https://layerbase.com/
documentation: https://layerbase.com/docs
source: https://layerbase.com/pricing
couleur: "#111827"
initiales: LB
carteRequise: false
depassementFacture: false
permanent: true
statut: active
vedette: false
ordre: 931
verifieLe: '2026-08-21'
verificationAutomatiqueLe: '2026-08-21'
verificationNote: "La formule gratuite actuelle annonce 2 bases et 5 Go de stockage total. Les moteurs gratuits sont PostgreSQL, MariaDB, Redis, Valkey, DuckDB, SQLite, libSQL et TypeDB ; MySQL n’est plus inclus dans cette liste."
---

Layerbase regroupe plusieurs moteurs SQL, clé/valeur et analytiques derrière une expérience de base managée. Les deux bases gratuites et les 5 Go partagés offrent une vraie marge pour des projets personnels, avec une mise en veille automatique et une politique de débit à respecter.
