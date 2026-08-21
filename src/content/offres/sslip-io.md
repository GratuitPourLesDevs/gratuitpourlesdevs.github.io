---
nom: sslip.io
accroche: DNS gratuit qui déduit automatiquement l’adresse IP d’un hostname contenant cette IP, sans création d’enregistrement préalable.
type: Ressource
categorie: dns
formule: 'Gratuit : résolution de hostnames contenant une adresse IPv4 ou IPv6'
inclus:
- Résolution automatique d’IPv4 encodées dans le hostname
- Prise en charge IPv6
- Préfixes et sous-domaines arbitraires
- Aucun compte requis
- Aucun enregistrement DNS à créer pour les usages standards
- Possibilité de délégation white-label via NS
- Implémentation open source
conditions: []
restrictions:
- Ce n’est pas un hébergeur de zones DNS classique
- Les certificats wildcard ne sont pas utilisables pour les hostnames dynamiques génériques du service
alertes: []
usages: [DNS, Développement et test, Prototypage, Réseau]
url: https://sslip.io/
source: https://sslip.io/
couleur: '#0F172A'
initiales: SI
carteRequise: false
depassementFacture: false
permanent: true
statut: active
vedette: false
ordre: 909
verifieLe: '2026-08-21'
verificationAutomatiqueLe: '2026-08-21'
verificationNote: 'sslip.io reste un service DNS gratuit et open source qui extrait une IPv4 ou IPv6 du hostname et retourne cette adresse, sans inscription ni zone à créer.'
---

sslip.io est extrêmement pratique pour tester rapidement un service web qui exige un vrai hostname sans perdre du temps à créer un enregistrement DNS. En intégrant simplement l’adresse IP dans le nom — par exemple sous la forme d’un sous-domaine sslip.io — la résolution renvoie automatiquement cette IP. Cela fonctionne très bien pour des démonstrations, des clusters locaux, des reverse proxies et des tests TLS ponctuels. Le service n’est cependant pas un substitut à une zone DNS gérée : son intérêt est précisément d’éviter la configuration pour les scénarios temporaires ou reproductibles.
