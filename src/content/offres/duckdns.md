---
nom: DuckDNS
accroche: Service Dynamic DNS gratuit hébergé sur AWS, avec sous-domaines duckdns.org et API HTTP/HTTPS très simple.
type: Service managé
categorie: dns
formule: 'Free : jusqu’à 5 sous-domaines Dynamic DNS'
inclus:
- Jusqu’à 5 sous-domaines duckdns.org
- Mise à jour IPv4 et IPv6
- API HTTP/HTTPS
- Mise à jour TXT
- Guides pour routeurs, NAS et systèmes courants
- Utilisation gratuite financée par les dons
conditions:
- Connexion via un fournisseur d’identité pris en charge
restrictions:
- Le service fournit surtout des sous-domaines duckdns.org, pas un hébergement DNS autoritatif complet pour une zone personnalisée
- Un domaine personnalisé s’utilise typiquement via un CNAME vers DuckDNS
alertes: []
usages: [DNS, Accès distant, Automatisation, Réseau]
url: https://www.duckdns.org/
documentation: https://www.duckdns.org/spec.jsp
source: https://www.duckdns.org/
couleur: '#F4C542'
initiales: DD
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 897
verifieLe: 2026-08-24
verificationAutomatiqueLe: 2026-08-24
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
---

DuckDNS résout un problème très concret : retrouver un serveur domestique, un NAS ou un Raspberry Pi même lorsque l’adresse IP publique change. Un script ou un routeur met à jour automatiquement le sous-domaine duckdns.org via une simple requête HTTPS, ce qui évite de mémoriser l’IP courante. Le plan gratuit couvre jusqu’à cinq sous-domaines et l’API prend également en charge IPv6 et les mises à jour TXT. Ce n’est en revanche pas un hébergeur DNS généraliste : pour son propre domaine, on l’utilise plutôt comme cible DDNS derrière un CNAME.
