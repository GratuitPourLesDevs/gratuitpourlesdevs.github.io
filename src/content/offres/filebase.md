---
nom: Filebase
accroche: Stockage objet et IPFS compatible S3 avec 5 Go gratuits permanents, sans carte bancaire, plus CDN et IPNS pour les petits projets.
type: SaaS
categorie: stockage-medias
formule: "Free : 5 Go de stockage mutualisé entre Object Storage et IPFS, sans limite de durée"
inclus:
- 5 Go de stockage mutualisé entre Object Storage et IPFS
- 10 Go de bande passante IPFS
- Egress gratuit pour le stockage objet
- API compatible Amazon S3
- 1 nom IPNS
- 1 Site avec CDN
- 1 Gateway avec CDN
conditions:
- Création d’un compte Filebase
- Aucune carte bancaire requise pour le niveau gratuit
restrictions:
- Les 5 Go sont partagés entre les usages Object Storage et IPFS
- Les capacités avancées et volumes supérieurs nécessitent une formule payante
alertes:
- type: usage
  niveau: important
  libelle: Stockage mutualisé
  detail: Les 5 Go gratuits sont partagés entre Object Storage et IPFS ; ils ne constituent pas deux allocations séparées.
usages: [Stockage, API, CDN]
url: https://filebase.com/
documentation: https://docs.filebase.com/
source: https://filebase.com/free/
couleur: '#1F6FEB'
initiales: FB
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 919
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Filebase permet de travailler avec du stockage objet classique et IPFS depuis une même plateforme, tout en conservant des workflows compatibles avec Amazon S3. Le niveau gratuit est adapté aux démonstrations, prototypes Web3, petits sites et tests d’intégration grâce aux 5 Go de stockage inclus et aux services complémentaires IPNS, Site et Gateway. L’absence de carte bancaire et le caractère permanent du free tier rendent l’offre particulièrement accessible pour expérimenter. La principale limite à garder en tête est que les 5 Go sont mutualisés entre le stockage objet et IPFS.
