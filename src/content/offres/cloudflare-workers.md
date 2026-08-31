---
nom: Cloudflare Workers
accroche: Fonctions serverless déployées à l’edge
type: PaaS
categorie: paas
formule: 100 000 requêtes Workers par jour
inclus: [100 000 requêtes Workers par jour, 10 ms de temps CPU par requête HTTP, 128 Mo de mémoire par Worker, Jusqu’à 100 Workers par compte, 50 sous-requêtes externes par invocation, 1 000 sous-requêtes vers les services Cloudflare par invocation, 6 connexions sortantes simultanées par invocation, 64 variables d’environnement par Worker, 5 déclencheurs Cron par compte, 20 000 fichiers statiques par version, Requêtes vers les fichiers statiques gratuites et illimitées, Déploiement mondial à l’edge, Pages Functions incluses dans les mêmes quotas]
conditions: [Compte Cloudflare gratuit, Aucune carte bancaire, Déploiement avec Wrangler ou le tableau de bord Cloudflare]
restrictions: [Quota de 100 000 requêtes réinitialisé chaque jour à minuit UTC, Erreur Cloudflare 1027 ou contournement du Worker lorsque le quota est dépassé selon le mode de la route, 10 ms de temps CPU par requête HTTP, 3 Mo maximum par Worker, 50 sous-requêtes externes par invocation, 100 Workers maximum par compte gratuit, 5 déclencheurs Cron maximum par compte, Limites propres à Workers KV Hyperdrive D1 et aux autres services associés]
usages: [Serverless, Edge, API, Middleware, Fonctions web, Tâches planifiées]
url: https://workers.cloudflare.com/
documentation: https://developers.cloudflare.com/workers/
source: https://developers.cloudflare.com/workers/platform/pricing/
couleur: "#f6821f"
initiales: CF
carteRequise: false
permanent: true
statut: "active"
vedette: false
ordre: 2
verifieLe: 2026-08-31
verificationAutomatiqueLe: 2026-08-31
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
historique:
  - date: 2026-08-14
    type: correction
    titre: Quotas gratuits documentés en détail
    resume: La fiche initiale indiquait seulement le quota journalier principal. Les limites officielles associées au plan Workers Free ont été ajoutées après vérification.
    changements:
      - champ: Temps CPU par requête HTTP
        avant: Non documenté
        apres: 10 ms
      - champ: Mémoire par Worker
        avant: Non documentée
        apres: 128 Mo
      - champ: Workers par compte
        avant: Non documenté
        apres: Jusqu’à 100
      - champ: Sous-requêtes externes
        avant: Non documentées
        apres: 50 par invocation
      - champ: Fichiers statiques
        avant: Pages Functions mentionnées sans précision
        apres: Requêtes gratuites et illimitées, 20 000 fichiers par version
    source: https://developers.cloudflare.com/workers/platform/limits/
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Cloudflare Workers exécute du code serverless au plus près des utilisateurs sur le réseau mondial de Cloudflare. Le plan gratuit convient aux API, middlewares, fonctions web et petits traitements à l’edge. Il couvre également Pages Functions et donne accès, avec leurs propres quotas, à plusieurs services de données de la plateforme.
