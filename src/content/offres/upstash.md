---
nom: "Upstash Redis"
accroche: "Redis serverless avec stockage persistant, facturation à la commande et niveau gratuit permanent."
type: PaaS
categorie: services-donnees-manages
formule: "Free : 256 Mo, 500 000 commandes par mois et 10 Go de bande passante"
inclus:
- "256 Mo de taille maximale de base"
- "500 000 commandes par mois"
- "10 Go de bande passante par mois"
- "Jusqu’à 10 000 commandes par seconde selon la limite Free actuelle"
- "Redis serverless compatible avec les clients standards"
- "Accès REST et TLS"
- "Aucune carte bancaire requise"
conditions:
- "Création d’un compte Upstash ou utilisation d’une base temporaire selon le parcours proposé"
restrictions:
- "Le nombre de connexions simultanées cité dans d’anciennes fiches n’est plus utilisé comme quota principal public"
- "La base Free est limitée en taille, commandes et bande passante"
- "Les volumes supérieurs nécessitent une offre payante"
alertes:
- type: usage
  niveau: important
  libelle: Trois plafonds à surveiller
  detail: Le niveau Free est plafonné simultanément en taille de base, nombre de commandes et bande passante mensuelle.
usages: ["Mise en cache", "Serverless", "Base de données", "API"]
url: https://upstash.com/
documentation: https://upstash.com/docs/redis
source: https://upstash.com/pricing/redis
couleur: "#00E9A3"
initiales: UP
carteRequise: false
depassementFacture: false
permanent: true
statut: active
vedette: false
ordre: 944
verifieLe: '2026-08-21'
verificationAutomatiqueLe: '2026-08-21'
verificationNote: "Le plan Redis gratuit actuel confirme 256 Mo de données, 500 000 commandes mensuelles et 10 Go de bande passante. L’ancienne limite de 20 connexions simultanées n’est pas reprise faute d’être un quota public actuel."
---

Upstash transforme Redis en service serverless accessible par protocole Redis ou API REST. Le plan gratuit convient aux caches, sessions, rate limits et petits backends, avec des plafonds mensuels simples sur les commandes et la bande passante ainsi qu’une base limitée à 256 Mo.
