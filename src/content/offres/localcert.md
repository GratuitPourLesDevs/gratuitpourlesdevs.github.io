---
nom: LocalCert
accroche: Sous-domaines gratuits en .localcert.net destinés aux services privés tout en restant compatibles avec les autorités de certification publiques.
type: Ressource
categorie: dns
formule: 'Gratuit : sous-domaines .localcert.net pour services et réseaux privés'
inclus:
- Sous-domaines sous localcert.net
- Noms publiquement résolvables utilisables avec des services privés
- Compatibilité avec les autorités de certification publiques
- Cas d’usage avec Let’s Encrypt et certificats TLS publics
- Utilisation sur réseaux privés et environnements locaux
conditions: []
restrictions:
- Ce n’est pas un hébergeur DNS généraliste pour ses propres domaines
- Le service vise des noms sous .localcert.net
- Aucun quota numérique universel n’est publié
alertes: []
usages: [DNS, Sécurité, Développement et test, Réseau]
url: https://localcert.net/
source: https://localcert.net/
couleur: '#2563EB'
initiales: LC
carteRequise: false
depassementFacture: false
permanent: true
statut: active
vedette: false
ordre: 903
verifieLe: '2026-08-21'
verificationAutomatiqueLe: 2026-08-24
verificationNote: "Vérification automatique incomplète : HTTP 403."
---

LocalCert résout un problème assez pénible en développement : obtenir un vrai certificat TLS public pour une application qui ne doit pourtant être accessible que sur un réseau privé. En utilisant un sous-domaine `.localcert.net`, on peut disposer d’un nom publiquement vérifiable par une autorité comme Let’s Encrypt tout en faisant pointer le service vers une adresse privée. C’est pratique pour des dashboards internes, des labs Kubernetes, des reverse proxies ou des environnements de test qui doivent reproduire HTTPS correctement. LocalCert ne remplace toutefois pas un hébergeur DNS complet : il fournit avant tout des noms sous son propre domaine pour ce cas d’usage précis.
