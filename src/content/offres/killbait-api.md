---
nom: KillBait API
accroche: Analyse de liens pour détecter le clickbait et catégoriser les articles
type: API
categorie: api-donnees-ml
formule: Quotas annoncés de 1 soumission par heure et 10 par jour, à confirmer
inclus:
  - Soumission d’URL pour évaluation du contenu
  - Détection de contenu potentiellement clickbait
  - Catégorisation des articles
  - Possibilité de demander des limites supérieures pour les partenaires médias
conditions:
  - Utiliser l’API selon la documentation officielle
restrictions:
  - Limites annoncées de 1 soumission par heure et 10 par jour
  - Les quotas chiffrés n’ont pas pu être relus automatiquement sur la documentation JavaScript
alertes:
  - type: fonctionnel
    niveau: important
    libelle: Quotas à confirmer
    detail: La documentation officielle est accessible mais son contenu dynamique ne permet pas de confirmer automatiquement les limites chiffrées actuelles.
usages:
  - API
  - Traitement du langage
  - Données
url: https://killbait.com/api/doc
source: https://killbait.com/api/doc
couleur: "#ef4444"
initiales: KB
carteRequise: false
depassementFacture: false
permanent: true
statut: "a_verifier"
vedette: false
ordre: 200
verifieLe: 2026-08-18
verificationAutomatiqueLe: 2026-08-18
verificationNote: "Le service officiel est actif, mais la page /api/doc nécessite JavaScript. Les quotas 1/heure et 10/jour proviennent de la description fournie et restent à confirmer sur une source officielle lisible."
---

KillBait API aide à évaluer des URLs d’articles pour repérer des formulations potentiellement clickbait et classer le contenu. Le service semble adapté à une fréquence de publication modérée, mais les quotas exacts restent volontairement marqués à vérifier tant que la documentation dynamique n’est pas lisible de manière fiable.
