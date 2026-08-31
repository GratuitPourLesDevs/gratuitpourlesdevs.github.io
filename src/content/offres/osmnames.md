---
nom: "OSMNames"
accroche: "Projet open source de données de lieux OpenStreetMap avec API de recherche et autocomplete compatible en partie avec Nominatim."
type: "Ressource"
categorie: cartographie
formule: "Open source : données et moteur de recherche gratuits, quota du service hébergé non publié"
inclus:
- "Données de lieux issues d’OpenStreetMap"
- "API de recherche JSON"
- "Autocomplete"
- "API partiellement compatible Nominatim"
- "Installation on-premise possible"
conditions:
- "Respect des licences OpenStreetMap et des données sources"
restrictions:
- "Aucun quota ou SLA actuel clairement publié pour l’API de démonstration"
- "La documentation recommande l’installation de son propre serveur pour un usage maîtrisé"
- "Le service de recherche hébergé est présenté comme basique"
alertes:
- type: operationnel
  niveau: important
  libelle: "Quota hébergé non documenté"
  detail: "OSMNames reste disponible comme projet open source et documente une API, mais ne publie pas de capacité ou SLA clair pour un usage hébergé en production."
usages: ["Recherche", "Données", "API"]
url: https://osmnames.org/
source: https://osmnames.org/api/
couleur: "#4D7C0F"
initiales: "ON"
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 1112
verifieLe: '2026-08-25'
verificationAutomatiqueLe: 2026-08-31
verificationNote: "Source accessible, mais aucune mention explicite de gratuité détectée ; statut éditorial conservé pour contrôle manuel."
verificationEtat: "controle_requis"
verificationCode: "gratuit_non_detecte"
verificationEchecsConsecutifs: 1
---

OSMNames est surtout intéressant comme ressource ouverte et auto-hébergeable pour bâtir un moteur de recherche de lieux. Une API de recherche est documentée, mais l’absence de quota et de SLA public rend l’auto-hébergement préférable dès qu’une application dépend réellement du service.
