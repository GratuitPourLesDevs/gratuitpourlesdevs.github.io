---
nom: deSEC
accroche: Hébergement DNS gratuit à but non lucratif, sécurisé par DNSSEC, avec API REST et réseau Anycast.
type: Service managé
categorie: dns
formule: 'Gratuit pour tous, avec DNSSEC systématique et API REST'
inclus:
- Hébergement DNS autoritatif
- DNSSEC activé systématiquement
- API REST
- Réseau Anycast
- IPv4 et IPv6
- Types modernes HTTPS/SVCB, TLSA et OPENPGPKEY
- Intégrations Terraform, Go, Python et JavaScript
- Dynamic DNS via dedyn.io
conditions:
- Usage raisonnable afin de préserver les ressources du service
restrictions:
- Aucun plafond universel chiffré n’est publié pour les zones gérées
- Les comptes causant une charge anormalement élevée peuvent être limités
- Un domaine Dynamic DNS dedyn.io inactif pendant six mois peut être supprimé après avertissement
alertes: []
usages: [DNS, Sécurité, API, Automatisation]
url: https://desec.io/
source: https://desec.io/
couleur: '#37A8E0'
initiales: DS
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 894
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

deSEC est une option très solide pour héberger les zones DNS d’un projet tout en donnant la priorité à la sécurité et à l’automatisation. DNSSEC est appliqué systématiquement et l’API REST, les bindings ainsi que les intégrations Terraform permettent de gérer les enregistrements dans un workflow d’infrastructure. Le service est porté par une organisation à but non lucratif et ne réserve pas ses fonctions de sécurité à un abonnement payant. Comme il fonctionne sur un modèle communautaire et de fair use, il faut néanmoins éviter les mises à jour abusivement fréquentes ou les charges atypiques.
