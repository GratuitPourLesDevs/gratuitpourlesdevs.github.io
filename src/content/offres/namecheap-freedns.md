---
nom: Namecheap FreeDNS
accroche: Hébergement DNS gratuit pour des domaines enregistrés chez n’importe quel registrar, avec DDNS, redirections et DNS secondaire.
type: Service managé
categorie: dns
formule: 'FreeDNS : gestion DNS gratuite pour domaines tiers, sans quota de zones publiquement consolidé'
inclus:
- Hébergement DNS pour domaines enregistrés ailleurs
- Dynamic DNS
- Enregistrements A, AAAA, CNAME, MX, TXT, SRV et autres types courants
- Redirections d’URL
- Redirections e-mail
- DNS secondaire
- Interface Namecheap
conditions:
- Création d’un compte Namecheap
restrictions:
- DNSSEC n’est pas inclus dans FreeDNS
- PremiumDNS est nécessaire pour Anycast premium, SLA et protections renforcées
- Le nombre maximal actuel de domaines gratuits n’est pas clairement publié sur la page officielle
alertes: []
usages: [DNS, Réseau, Accès distant, Automatisation]
url: https://www.namecheap.com/domains/freedns/
source: https://www.namecheap.com/domains/freedns/
couleur: '#FF6A00'
initiales: NC
carteRequise: false
depassementFacture: false
permanent: true
statut: active
vedette: false
ordre: 905
verifieLe: '2026-08-21'
verificationAutomatiqueLe: '2026-08-21'
verificationNote: 'FreeDNS est toujours proposé gratuitement pour des domaines enregistrés chez des tiers. La page actuelle confirme DDNS, redirections et DNS secondaire, mais ne publie plus clairement l’ancien message « sans limite de domaines ».'
---

Namecheap FreeDNS est utile lorsqu’on possède déjà un domaine chez un autre registrar mais que l’on souhaite confier gratuitement sa zone DNS à une interface simple et connue. Le service inclut les types d’enregistrements usuels, le Dynamic DNS, les redirections d’URL et d’e-mail ainsi que le fonctionnement en DNS secondaire. Il permet donc de séparer proprement l’achat du domaine de son hébergement DNS sans migrer le registrar. Les fonctions de sécurité et de disponibilité les plus avancées, notamment DNSSEC et les garanties PremiumDNS, restent en revanche réservées aux offres payantes.
