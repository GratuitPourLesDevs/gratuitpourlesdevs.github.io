---
nom: Hurricane Electric Free DNS
accroche: Hébergement DNS autoritatif gratuit avec IPv4/IPv6, zones directes et inverses, DNS secondaire et Dynamic DNS.
type: Service managé
categorie: dns
formule: 'Free DNS : hébergement de plusieurs domaines avec Dynamic DNS, sans quota public consolidé'
inclus:
- DNS autoritatif gratuit
- Zones directes et inverses
- IPv4 et IPv6 natifs
- Dynamic DNS pour A et AAAA
- Mises à jour TXT dynamiques
- DNS secondaire
- Nombreux types d’enregistrements
conditions:
- Compte Hurricane Electric gratuit
restrictions:
- Le portail reste présenté comme une Open Beta
- Aucun plafond actuel universel de zones ou de requêtes n’est publié sur la page publique
- DNSSEC est toujours présenté comme une fonctionnalité à venir sur le portail
alertes: []
usages: [DNS, Réseau, Automatisation]
url: https://dns.he.net/
source: https://dns.he.net/
couleur: '#F58220'
initiales: HE
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 895
verifieLe: 2026-08-31
verificationAutomatiqueLe: 2026-08-31
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Hurricane Electric Free DNS est utile pour gérer gratuitement les enregistrements d’un domaine tout en profitant d’une excellente culture réseau IPv4/IPv6. Le service prend aussi en charge les zones inverses, le DNS secondaire et des mises à jour Dynamic DNS, y compris pour des enregistrements TXT utilisés par certains workflows ACME. C’est particulièrement pratique pour des labos réseau, des serveurs auto-hébergés ou plusieurs domaines techniques. Son interface reste toutefois marquée « Open Beta » et la page publique ne publie plus de plafond chiffré clair, ce qui invite à ne pas dimensionner un service critique sur une hypothèse de quota historique.
