---
nom: 4EVERLAND
accroche: Stockage Web3 compatible S3 pour IPFS et Arweave, avec quotas gratuits permanents et outils de déploiement.
type: SaaS
categorie: stockage-medias
formule: "Standard gratuit : 6 Go de stockage IPFS par mois et 100 Mo de stockage Arweave"
inclus:
- 6 Go de stockage IPFS par mois
- 100 Mo de stockage Arweave
- 100 Go de bande passante par mois
- 250 minutes de build par mois
- API compatible Amazon S3
- Accès par interface, API et CLI
conditions:
- Création d’un compte 4EVERLAND
- Utilisation dans les limites du package gratuit
restrictions:
- Le quota Arweave gratuit actuel est de 100 Mo au total
- Les ressources consommées au-delà des quotas gratuits peuvent devenir payantes
alertes:
- type: finance
  niveau: critique
  libelle: Dépassement potentiellement facturé
  detail: Les ressources consommées au-delà des quotas gratuits peuvent devenir payantes selon la tarification 4EVERLAND.
usages: [Stockage, API, Hébergement]
url: https://www.4everland.org/
documentation: https://docs.4everland.org/storage/bucket
source: https://www.4everland.org/price/
couleur: '#6D5DFB'
initiales: 4E
carteRequise: false
depassementFacture: true
permanent: true
statut: "active"
vedette: false
ordre: 917
verifieLe: 2026-08-31
verificationAutomatiqueLe: 2026-08-31
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

4EVERLAND fournit une couche de stockage Web3 utilisable avec des outils familiers aux développeurs grâce à sa compatibilité S3. La formule gratuite permet notamment de conserver des fichiers sur IPFS et Arweave sans devoir mettre immédiatement en place une infrastructure blockchain spécifique. Elle convient bien aux prototypes Web3, sites décentralisés, médias et petits projets qui veulent combiner stockage distribué, API et automatisation. Les quotas gratuits sont suffisamment larges pour tester le service, mais les consommations supplémentaires suivent ensuite la tarification publiée par 4EVERLAND.
