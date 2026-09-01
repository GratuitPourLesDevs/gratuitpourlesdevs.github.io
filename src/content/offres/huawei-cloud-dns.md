---
nom: Huawei Cloud DNS
accroche: Service DNS autoritatif gratuit de Huawei Cloud pour zones publiques et privées, avec quotas généreux par défaut.
type: Service managé
categorie: dns
formule: 'Gratuit : jusqu’à 50 zones publiques, 50 zones privées et 500 jeux d’enregistrements par défaut'
inclus:
- Jusqu’à 50 zones publiques par défaut
- Jusqu’à 50 zones privées par défaut
- Jusqu’à 500 jeux d’enregistrements
- Jusqu’à 50 enregistrements PTR
- Résolution DNS publique et privée
- Intégration à Huawei Cloud
- Gestion de zones et enregistrements sans frais de service DNS
conditions:
- Compte Huawei Cloud
restrictions:
- Les quotas sont des valeurs par défaut et peuvent varier selon le compte ou la région
- Les autres ressources Huawei Cloud utilisées autour du DNS peuvent être facturées séparément
alertes: []
usages: [DNS, Cloud public, Réseau, Architecture cloud]
url: https://www.huaweicloud.com/intl/en-us/product/dns.html
documentation: https://support.huaweicloud.com/intl/en-us/productdesc-dns/dns_pd_0000.html
source: https://support.huaweicloud.com/intl/en-us/productdesc-dns/dns_pd_0000.html
couleur: '#C7000B'
initiales: HW
carteRequise: false
depassementFacture: false
permanent: true
statut: "a_verifier"
vedette: false
ordre: 902
verifieLe: '2026-08-21'
verificationAutomatiqueLe: 2026-09-01
verificationNote: "La source tarifaire reste indisponible (HTTP 404) après 2 contrôles consécutifs ; contrôle éditorial requis."
verificationEtat: "controle_requis"
verificationCode: "source_indisponible"
verificationEchecsConsecutifs: 2
---

Huawei Cloud DNS est utile lorsqu’un projet a besoin d’un DNS autoritatif classique mais aussi de résolution privée entre ressources cloud. Le service lui-même est gratuit et ses quotas par défaut — 50 zones publiques, 50 zones privées et 500 jeux d’enregistrements — sont largement suffisants pour de nombreux environnements de développement ou petites architectures. Il devient particulièrement pertinent si l’infrastructure utilise déjà Huawei Cloud, car les zones privées s’intègrent naturellement au réseau virtuel. Il faut seulement garder à l’esprit que le DNS gratuit n’exonère pas des coûts éventuels des autres ressources cloud auxquelles les noms pointent.
