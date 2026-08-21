---
nom: Supabase
accroche: Backend open source de type Firebase avec PostgreSQL, Auth, Realtime, Storage, Edge Functions et APIs automatiques.
type: BaaS
categorie: baas
formule: 'Free : 2 projets actifs, 50 000 MAU, 500 MB de base et 1 GB de fichiers'
inclus:
- 2 projets actifs
- Requêtes API illimitées
- 50 000 utilisateurs actifs mensuels
- 500 MB de base de données par projet
- CPU partagé et 500 MB de RAM
- 5 GB d’egress
- 5 GB d’egress mis en cache
- 1 GB de stockage fichiers
- Utilisateurs totaux illimités
- Auth, Realtime et API PostgreSQL
conditions: []
restrictions:
- Les projets gratuits sont mis en pause après 1 semaine d’inactivité
- 'Taille maximale d’un fichier : 50 MB'
- Pas de sauvegardes automatiques sur Free
- Le plafond de base peut conduire à un mode en lecture seule lorsqu’il est atteint
alertes:
- type: operationnel
  niveau: important
  libelle: Pause après 1 semaine
  detail: Les projets Free inactifs pendant une semaine sont automatiquement mis en pause et doivent être relancés pour reprendre leur activité.
usages:
- Backend d’application
- PostgreSQL
- Authentification
- Stockage de fichiers
- Serverless
url: https://supabase.com/
source: https://supabase.com/pricing
couleur: '#3ECF8E'
initiales: SU
carteRequise: false
depassementFacture: false
permanent: true
statut: active
vedette: false
ordre: 852
verifieLe: '2026-08-21'
verificationAutomatiqueLe: '2026-08-21'
verificationNote: 'Free actuel : 2 projets, 50K MAU, 500 MB DB, 5 GB egress, 1 GB storage et API illimitée ; pause après 1 semaine d’inactivité.'
---

Supabase est l’un des Free Tiers les plus complets pour construire un backend moderne : PostgreSQL, authentification, temps réel, stockage et APIs sont disponibles dans une même plateforme open source. Les 50 000 MAU et les requêtes API illimitées permettent d’aller bien au-delà d’une simple démo, même si la base reste limitée à 500 MB. C’est particulièrement pertinent pour une application web ou mobile qui veut conserver SQL et éviter un modèle de données propriétaire. Il faut néanmoins surveiller la taille de la base et accepter la mise en pause des projets gratuits inactifs.
