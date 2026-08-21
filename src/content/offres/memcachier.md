---
nom: "MemCachier"
accroche: "Memcached managé pour ajouter un cache distribué à une application sans administrer de serveur."
type: PaaS
categorie: services-donnees-manages
formule: "Free : jusqu’à 25 Mo de cache Memcached"
inclus:
- "25 Mo de mémoire cache"
- "Service Memcached managé"
- "Connexion simple depuis les principaux frameworks"
- "Statistiques et outils de base"
conditions:
- "Création d’un compte MemCachier"
restrictions:
- "25 Mo maximum sur l’offre gratuite"
- "Capacité adaptée aux tests et petits caches seulement"
- "Les capacités, performances et fonctions avancées augmentent avec les plans payants"
alertes: []
usages: ["Mise en cache", "Backend d’application", "Développement et test"]
url: https://www.memcachier.com/
documentation: https://www.memcachier.com/documentation
source: https://www.memcachier.com/
couleur: "#F59E0B"
initiales: MC
carteRequise: false
depassementFacture: false
permanent: true
statut: active
vedette: false
ordre: 932
verifieLe: '2026-08-21'
verificationAutomatiqueLe: '2026-08-21'
verificationNote: "Les ressources officielles MemCachier continuent d’indiquer un plan gratuit de 25 Mo. Les éléments historiques non clairement documentés aujourd’hui, comme un nombre précis de proxy servers, ne sont pas utilisés comme quota principal."
---

MemCachier fournit Memcached sous forme de service, ce qui permet d’ajouter rapidement une couche de cache à une application. Les 25 Mo gratuits sont modestes mais suffisants pour valider une intégration, accélérer un petit prototype ou apprendre les stratégies de cache sans gérer Memcached soi-même.
