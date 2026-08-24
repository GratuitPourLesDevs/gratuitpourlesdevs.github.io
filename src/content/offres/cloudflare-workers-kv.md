---
nom: Cloudflare Workers KV
accroche: Stockage clé-valeur mondial optimisé pour les lectures à faible latence
type: PaaS
categorie: services-donnees-manages
formule: 100 000 lectures et 1 000 écritures par jour avec 1 Go de stockage
inclus: [100 000 lectures de clés par jour, 1 000 écritures de clés par jour, 1 000 suppressions de clés par jour, 1 000 requêtes de listage par jour, 1 Go de données stockées par compte, Jusqu’à 1 000 espaces de noms par compte, Nombre de clés illimité par espace de noms, Valeurs jusqu’à 25 Mio, Métadonnées jusqu’à 1 024 octets par clé, Jusqu’à 1 000 opérations vers des services externes par invocation Worker, Aucun frais de transfert sortant]
conditions: [Compte Cloudflare gratuit, Utilisation du plan Workers Free, Liaison d’un espace de noms KV à un Worker ou accès par l’API REST, Aucune carte bancaire]
restrictions: [Quotas d’opérations réinitialisés chaque jour à minuit UTC, Les opérations dépassant un quota échouent jusqu’à la réinitialisation, Une écriture par seconde maximum sur une même clé, Taille de clé limitée à 512 octets, Taille de valeur limitée à 25 Mio, Stockage limité à 1 Go par compte et par espace de noms, Cohérence éventuelle entre les régions, Une modification peut prendre 60 secondes ou davantage avant d’être visible partout, Pas de transactions atomiques, Les lectures de clés inexistantes comptent dans le quota, Les opérations effectuées avec Wrangler ou le tableau de bord comptent également dans les quotas]
alertes:
  - type: operationnel
    niveau: critique
    libelle: Opérations bloquées au quota
    detail: Les opérations dépassant un quota échouent jusqu’à la réinitialisation quotidienne.
  - type: fonctionnel
    niveau: critique
    libelle: Cohérence éventuelle
    detail: Une modification peut nécessiter soixante secondes ou davantage avant d’être visible partout.
usages: [Cache mondial, Configuration distribuée, Préférences utilisateur, Feature flags, Listes d’autorisation, Données très lues]
url: https://developers.cloudflare.com/kv/
documentation: https://developers.cloudflare.com/kv/
source: https://developers.cloudflare.com/kv/platform/pricing/
couleur: "#f6821f"
initiales: KV
carteRequise: false
permanent: true
statut: "active"
vedette: false
ordre: 52
verifieLe: 2026-08-24
verificationAutomatiqueLe: 2026-08-24
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
---

Cloudflare Workers KV est un stockage clé-valeur distribué sur le réseau mondial de Cloudflare. Il est particulièrement adapté aux données lues très souvent et modifiées peu fréquemment, comme la configuration, les préférences, les indicateurs de fonctionnalité et les caches persistants. Sa cohérence éventuelle le rend moins adapté aux compteurs, transactions et écritures concurrentes qui exigent une lecture immédiatement à jour.
