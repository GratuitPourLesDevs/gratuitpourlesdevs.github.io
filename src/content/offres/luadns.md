---
nom: LuaDNS
accroche: DNS Anycast gratuit pour trois domaines avec API, DNSSEC, statistiques et requêtes illimitées.
type: Service managé
categorie: dns
formule: 'Free : 3 domaines, 30 enregistrements et requêtes DNS illimitées'
inclus:
- 3 domaines
- 30 enregistrements DNS
- Requêtes DNS illimitées
- DNSSEC
- API
- Statistiques
- DNS secondaire et transferts AXFR
- Redirections HTTP
conditions: []
restrictions:
- TTL minimum de 5 minutes sur le plan Free
- Le plan gratuit est limité à 30 enregistrements au total selon la grille actuelle
alertes: []
usages: [DNS, API, Sécurité, Automatisation]
url: https://www.luadns.com/
source: https://www.luadns.com/pricing
couleur: '#2C3E50'
initiales: LD
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 904
verifieLe: 2026-08-24
verificationAutomatiqueLe: 2026-08-24
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
---

LuaDNS est une offre gratuite particulièrement complète pour quelques domaines techniques : API, DNSSEC, statistiques et DNS secondaire sont inclus sans devoir passer immédiatement à un abonnement. Les trois domaines et trente enregistrements suffisent à héberger un portfolio, un petit SaaS et quelques environnements annexes, tandis que les requêtes DNS ne sont pas plafonnées. L’API permet en plus d’intégrer les changements de zones dans des scripts ou une chaîne de déploiement. La limite principale est donc moins le trafic que le nombre de domaines et d’enregistrements disponibles sur le plan gratuit.
