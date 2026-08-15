---
nom: Cloudflare Queues
accroche: Files de messages managées pour Workers et consommateurs HTTP
type: PaaS
categorie: messagerie-streaming
formule: 10 000 opérations par jour avec rétention des messages pendant 24 heures
inclus: [10 000 opérations standard par jour, Jusqu’à 10 000 files par compte, Producteurs Cloudflare Workers, Consommateurs Workers avec livraison push, Consommateurs HTTP avec récupération pull, Jusqu’à 5 000 messages par seconde et par file, Messages jusqu’à 128 Ko, Lots jusqu’à 100 messages, Jusqu’à 100 tentatives de livraison, Files de messages morts, Jusqu’à 250 invocations de consommateurs simultanées, Backlog jusqu’à 25 Go par file, Abonnements aux événements illimités, Aucun frais de transfert sortant ni de bande passante]
conditions: [Compte Cloudflare gratuit, Utilisation du plan Workers Free, Producteur Worker ou client compatible avec l’API Queues, Aucune carte bancaire]
restrictions: [Quota de 10 000 opérations réinitialisé chaque jour, Rétention fixe et non configurable de 24 heures sur le plan gratuit, Une livraison réussie consomme généralement trois opérations pour écriture lecture et suppression, Chaque tranche de 64 Ko compte comme une opération distincte, Un message supérieur à 64 Ko consomme plusieurs opérations à chaque étape, Les opérations sont comptées par message et non par lot, Chaque nouvelle tentative consomme une opération de lecture, Messages limités à 128 Ko métadonnées comprises, Lots limités à 100 messages ou 256 Ko, Dépassement du débit renvoyant une erreur Too Many Requests, Backlog limité à 25 Go par file, Les consommateurs Workers utilisent également les limites CPU et mémoire de Workers]
usages: [Files de messages, Traitement asynchrone, Découplage de services, Tâches en arrière-plan, Intégration événementielle, Files de messages morts]
url: https://developers.cloudflare.com/queues/
documentation: https://developers.cloudflare.com/queues/
source: https://developers.cloudflare.com/queues/platform/pricing/
couleur: "#f6821f"
initiales: CQ
carteRequise: false
permanent: true
statut: active
vedette: false
ordre: 56
verifieLe: 2026-08-14
verificationAutomatiqueLe: 2026-08-14
verificationNote: "Depuis février 2026, Queues est inclus dans Workers Free avec 10 000 opérations quotidiennes et 24 heures de rétention. La documentation confirme 10 000 files, des messages de 128 Ko, 5 000 messages par seconde et un backlog de 25 Go par file."
---

Cloudflare Queues permet de découpler producteurs et consommateurs avec une livraison garantie vers des Workers ou des consommateurs HTTP. Le quota gratuit est exprimé en opérations plutôt qu’en messages : une livraison normale représente généralement une écriture, une lecture et une suppression. Les messages dépassant 64 Ko et les nouvelles tentatives consomment des opérations supplémentaires.
