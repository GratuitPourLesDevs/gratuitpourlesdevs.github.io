---
nom: Cloudflare 1.1.1.1
accroche: Résolveur DNS public gratuit et chiffrable de Cloudflare, avec variantes de filtrage pour les familles.
type: Service managé
categorie: dns
formule: 'Gratuit : résolveur DNS public sans compte, avec DoH, DoT et variantes anti-malware'
inclus:
- Résolution DNS récursive publique
- DNS over HTTPS (DoH)
- DNS over TLS (DoT)
- IPv4 et IPv6
- 1.1.1.1 for Families contre les malwares
- Variante Families contre malwares et contenus adultes
conditions: []
restrictions:
- Ce service est un résolveur récursif, pas un hébergeur DNS autoritatif pour vos domaines
- Des usages atypiques à très fort débit peuvent être limités pour prévenir les abus
alertes: []
usages: [DNS, Réseau, Sécurité, Filtrage DNS]
url: https://developers.cloudflare.com/1.1.1.1/
documentation: https://developers.cloudflare.com/1.1.1.1/encryption/dns-over-https/
source: https://developers.cloudflare.com/1.1.1.1/
couleur: '#F38020'
initiales: '1.1'
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 891
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Cloudflare 1.1.1.1 est utile quand on veut remplacer le résolveur DNS de son fournisseur d’accès par une alternative rapide, chiffrable et davantage orientée confidentialité. Pour un développeur, son endpoint DoH permet aussi de tester ou intégrer des requêtes DNS via HTTPS sans déployer son propre résolveur. Les variantes 1.1.1.2 et 1.1.1.3 ajoutent un filtrage prêt à l’emploi contre les malwares, ou contre les malwares et les contenus adultes. Il faut toutefois bien le distinguer de Cloudflare DNS : 1.1.1.1 résout les domaines des autres, mais n’héberge pas les zones DNS de vos propres domaines.
