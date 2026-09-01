---
nom: "ForgeCode"
accroche: "Agent de programmation open source en ligne de commande, compatible avec plusieurs fournisseurs et modèles IA."
type: "SaaS"
categorie: ide-edition-code
formule: "Free Tier permanent avec limite dynamique de requêtes"
inclus:
- "Agent de code en CLI"
- "Support de plusieurs fournisseurs IA"
- "Possibilité d’utiliser ses propres clés/modèles"
- "Modèles gratuits selon disponibilité"
- "Code source ouvert"
conditions:
- "Compte ForgeCode pour le Free Tier hébergé"
restrictions:
- "La limite gratuite est dynamique et généralement annoncée entre 10 et 50 requêtes par jour"
- "La disponibilité des modèles gratuits peut évoluer"
- "Les fournisseurs utilisés avec ses propres clés appliquent leur propre tarification"
alertes:
- type: usage
  niveau: important
  libelle: "Quota dynamique"
  detail: "ForgeCode décrit son Free Tier comme permanent, mais le nombre de requêtes gratuites varie selon la capacité disponible et les modèles."
usages: ["IA", "Développement et test", "Agents IA"]
url: https://forgecode.dev/
source: https://forgecode.dev/blog/graduating-from-early-access-new-pricing-tiers-available/
couleur: "#111827"
initiales: "FC"
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 1132
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

ForgeCode agit comme un pair programmer depuis le terminal et peut aussi s’appuyer sur des fournisseurs externes. Le free tier hébergé est permanent, mais son volume n’est pas fixe, ce qui doit être pris en compte pour un usage quotidien.
