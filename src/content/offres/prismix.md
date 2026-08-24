---
nom: "Prismix"
accroche: "API publique de statut temps réel pour les principaux services d’IA"
type: "API"
categorie: "supervision"
formule: "API publique gratuite sans authentification, couvrant environ 77 services IA"
inclus: ["Endpoint GET /api/v1/statuses", "Environ 77 services suivis", "OpenAI, Anthropic, Gemini, Mistral et autres fournisseurs IA", "Aucune authentification requise", "Badges SVG gratuits"]
conditions: []
restrictions: ["Aucun quota de requêtes chiffré n’est publié pour l’API gratuite"]
alertes: []
usages: ["API", "Monitoring", "Disponibilité", "IA générative"]
url: "https://prismix.dev/"
source: "https://prismix.dev/"
couleur: "#8B5CF6"
initiales: "PR"
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 615
verifieLe: 2026-08-24
verificationAutomatiqueLe: 2026-08-24
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
---

Prismix agrège l’état opérationnel de dizaines de services d’IA et expose ces informations via une API REST publique, pratique pour un dashboard, un fallback de fournisseur ou une page de statut interne. L’endpoint principal ne nécessite ni compte ni clé et couvre environ soixante-dix-sept services ; le seul point à garder en tête est l’absence de quota de requêtes public, qui invite à rester raisonnable dans la fréquence d’appel.
