---
nom: HexDNS
accroche: DNS Anycast de Glauca avec trois zones gratuites, DNSSEC standard, Dynamic DNS et types d’enregistrements modernes.
type: Service managé
categorie: dns
formule: 'Free : les 3 premières zones à 0 GBP par mois'
inclus:
- 3 zones DNS gratuites
- DNSSEC standard
- Dynamic DNS
- Anycast
- Types A, AAAA, CNAME, ANAME, MX, TXT, SRV et CAA
- CDS
- Mises à jour RFC 2136
- DNS secondaire et AXFR
conditions: []
restrictions:
- Au-delà de 3 zones, la tarification annoncée est de 1 GBP par zone et par mois
alertes:
- type: finance
  niveau: important
  libelle: Zones supplémentaires payantes
  detail: Au-delà des trois premières zones gratuites, HexDNS annonce un tarif de 1 GBP par zone et par mois.
usages: [DNS, Sécurité, Automatisation, Réseau]
url: https://docs.glauca.digital/hexdns/
source: https://docs.glauca.digital/hexdns/
couleur: '#7C3AED'
initiales: HX
carteRequise: false
depassementFacture: true
permanent: true
statut: "active"
vedette: false
ordre: 900
verifieLe: 2026-08-31
verificationAutomatiqueLe: 2026-08-31
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

HexDNS est une option intéressante pour héberger gratuitement quelques domaines avec des fonctions que certains fournisseurs réservent aux plans payants. Les trois premières zones sont gratuites et bénéficient notamment de DNSSEC, Dynamic DNS, ANAME, CDS et mises à jour RFC 2136. Cela couvre confortablement un petit portefeuille de domaines techniques ou personnels avec une bonne capacité d’automatisation. À partir de la quatrième zone, le service devient payant, ce qui rend la frontière du Free très simple à comprendre.
