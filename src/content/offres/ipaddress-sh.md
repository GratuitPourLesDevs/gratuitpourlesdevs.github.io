---
nom: ipaddress.sh
accroche: Endpoint minimal pour récupérer l’adresse IP publique dans plusieurs formats
type: API
categorie: api-donnees-ml
formule: Service public gratuit sans quota chiffré publié
inclus:
  - Retour de l’adresse IP publique
  - Formats texte JSON et JSONP
  - IPv4 et IPv6
  - Aucun compte requis
conditions: []
restrictions:
  - Aucun SLA annoncé
  - Aucun plafond de requêtes officiel publié
alertes: []
usages: [API, Données]
url: https://ipaddress.sh/
documentation: https://about.ipaddress.sh/
source: https://about.ipaddress.sh/
couleur: "#111827"
initiales: IPSH
carteRequise: false
depassementFacture: false
permanent: true
statut: active
vedette: false
ordre: 187
verifieLe: 2026-08-18
verificationAutomatiqueLe: 2026-08-24
verificationNote: "Source accessible, mais aucune mention explicite de gratuité détectée."
---

ipaddress.sh fait une seule chose : retourner l’adresse IP publique du client ou serveur qui l’appelle. Il est pratique dans des scripts et diagnostics réseau, mais l’absence de quota et de SLA publiés invite à ne pas en dépendre pour un service critique.
