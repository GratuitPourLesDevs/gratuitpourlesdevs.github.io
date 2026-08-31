---
nom: Amazon CloudFront
accroche: CDN mondial avec transfert, requêtes et fonctions en périphérie
type: PaaS
categorie: cdn-protection
formule: 1 To de transfert sortant, 10 millions de requêtes et 2 millions d’invocations CloudFront Functions par mois
inclus: [1 To de transfert de données sortant par mois, 10 millions de requêtes HTTP et HTTPS par mois, 2 millions d’invocations CloudFront Functions par mois, Certificats TLS partagés et diffusion depuis le réseau mondial CloudFront, Transfert entre CloudFront et une origine AWS éligible sans frais]
conditions: [Compte AWS, Compte de facturation et moyen de paiement configurés, Distribution CloudFront configurée avec une origine]
restrictions: [Quotas mensuels agrégés sur tous les emplacements périphériques, Dépassements facturés aux tarifs à la demande sur un compte payant, Les invalidations au-delà du quota gratuit et Lambda@Edge ne sont pas inclus, Origin Shield et les transferts vers l’origine ne sont pas inclus, Offre non applicable aux emplacements CloudFront en Chine, Un seul Free Tier par organisation en cas de facturation consolidée]
alertes:
  - type: finance
    niveau: critique
    libelle: Dépassement facturé
    detail: Les volumes dépassant les quotas gratuits sont facturés aux tarifs à la demande.
usages: [CDN, Mise en cache, Edge functions]
url: https://aws.amazon.com/cloudfront/
documentation: https://aws.amazon.com/cloudfront/getting-started/
source: https://aws.amazon.com/cloudfront/faqs/
couleur: "#ff9900"
initiales: CF
carteRequise: true
depassementFacture: true
permanent: true
statut: "active"
vedette: false
ordre: 13
verifieLe: 2026-08-31
verificationAutomatiqueLe: 2026-08-31
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Amazon CloudFront convient à l’hébergement de sites statiques, à l’accélération d’API et à l’exécution de traitements JavaScript légers au plus près des utilisateurs. Cette fiche décrit le Free Tier à l’usage ; AWS propose séparément des forfaits CloudFront à prix fixe dont les quotas sont différents.
