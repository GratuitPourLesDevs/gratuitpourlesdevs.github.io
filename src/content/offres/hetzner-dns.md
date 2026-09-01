---
nom: Hetzner DNS
accroche: Gestion DNS gratuite dans Hetzner Console avec API REST et jusqu’à 25 zones par défaut.
type: Service managé
categorie: dns
formule: 'Gratuit : jusqu’à 25 zones par défaut dans Hetzner Console'
inclus:
- Jusqu’à 25 zones par défaut
- Gestion gratuite des zones et enregistrements
- API REST
- A, AAAA, CAA, CNAME, DS, HTTPS, MX, TXT et autres types
- Import de zones
- Interface Hetzner Console
conditions:
- Compte Hetzner
restrictions:
- Le quota par défaut est de 25 zones, une hausse nécessite un ticket support
- DNSSEC n’est actuellement pas pris en charge dans le nouveau Hetzner Console DNS
- L’ancien DNS Console et son ancienne API ont été arrêtés en mai 2026
alertes: []
usages: [DNS, API, Automatisation, Réseau]
url: https://www.hetzner.com/dns/
documentation: https://docs.hetzner.com/networking/dns/
source: https://www.hetzner.com/dns/
couleur: '#D50C2D'
initiales: HZ
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 901
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Hetzner DNS reste une excellente option gratuite pour héberger les zones DNS d’un projet, mais son point d’entrée a changé en 2026. L’ancien DNS Console a été retiré et les zones sont désormais gérées directement dans Hetzner Console, avec une nouvelle API REST et jusqu’à 25 zones par défaut. Cette intégration est pratique si l’on utilise déjà Hetzner Cloud, tout en restant utilisable gratuitement pour des domaines hébergés ailleurs. Le principal recul actuel est l’absence de DNSSEC dans le nouveau système, point à considérer pour les domaines où la chaîne de confiance DNS est indispensable.
