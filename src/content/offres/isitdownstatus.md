---
nom: "IsItDownStatus"
accroche: "API publique de statut temps réel pour de nombreux services populaires"
type: "API"
categorie: "supervision"
formule: "API gratuite annoncée ; quota de requêtes actuel non publié assez clairement"
inclus: ["Statut de services tiers", "Réponse JSON", "Accès sans authentification annoncé", "Usage depuis des applications web annoncé"]
conditions: []
restrictions: ["Le nombre exact de services et le quota de requêtes doivent être revalidés avant usage critique"]
alertes:
  - type: "fonctionnel"
    niveau: "important"
    libelle: "Capacité à revalider"
    detail: "L’API publique est accessible, mais ses limites et son périmètre exacts ne sont pas suffisamment documentés pour figer des quotas 2026."
usages: ["API", "Monitoring", "Disponibilité"]
url: "https://isitdownstatus.com/"
source: "https://isitdownstatus.com/"
couleur: "#0EA5E9"
initiales: "ID"
carteRequise: false
depassementFacture: false
permanent: true
statut: "a_verifier"
vedette: false
ordre: 599
verifieLe: "2026-08-19"
verificationAutomatiqueLe: 2026-08-24
verificationNote: "Vérification automatique incomplète : HTTP 429."
---

IsItDownStatus expose une API JSON destinée à récupérer l’état opérationnel de services tiers connus, ce qui peut servir à enrichir un dashboard interne ou différencier une panne locale d’un incident fournisseur. L’accès public est annoncé sans authentification, mais le quota et le nombre exact de services couverts ne sont pas assez documentés pour être présentés comme des limites contractuelles ; la fiche reste donc à vérifier.
