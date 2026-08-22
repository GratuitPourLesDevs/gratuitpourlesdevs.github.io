---
nom: Backblaze B2
accroche: Stockage objet compatible S3 avec 10 Go gratuits en permanence, API, CLI et egress gratuit jusqu’à trois fois le volume stocké.
type: SaaS
categorie: stockage-medias
formule: "Gratuit en continu : les 10 premiers Go de stockage B2 sont toujours gratuits"
inclus:
- 10 Go de stockage objet gratuits en permanence
- API compatible Amazon S3
- API native Backblaze B2
- Upload de données gratuit
- Egress gratuit jusqu’à 3 fois la moyenne mensuelle stockée
- Transactions de classe A gratuites
- 2 500 transactions de classes B et C gratuites par jour et par classe
conditions:
- Création d’un compte Backblaze
- Respect des limites du niveau gratuit pour éviter la facturation
restrictions:
- Le stockage au-delà des 10 Go gratuits est facturé
- L’egress au-delà du volume gratuit peut être facturé selon la destination
- Certaines transactions API deviennent payantes au-delà de leurs quotas quotidiens
alertes:
- type: finance
  niveau: critique
  libelle: Dépassements facturés
  detail: Le stockage, l’egress et certaines transactions deviennent payants au-delà des allocations gratuites applicables.
usages: [Stockage, API, Sauvegarde]
url: https://www.backblaze.com/b2/
documentation: https://www.backblaze.com/docs/cloud-storage
source: https://www.backblaze.com/cloud-storage/pricing
couleur: '#E32636'
initiales: B2
carteRequise: false
depassementFacture: true
permanent: true
statut: active
vedette: false
ordre: 918
verifieLe: '2026-08-21'
verificationAutomatiqueLe: '2026-08-21'
verificationNote: "Backblaze confirme que les 10 premiers Go de stockage B2 sont toujours gratuits. Le service est compatible S3, ne demande pas de carte bancaire pour démarrer et inclut également plusieurs quotas gratuits de transfert et de transactions."
---

Backblaze B2 est une alternative simple à Amazon S3 pour stocker des sauvegardes, médias, artefacts de build ou fichiers applicatifs. Sa compatibilité avec l’API S3 permet de réutiliser de nombreux SDK, outils et logiciels existants en changeant principalement l’endpoint et les identifiants. Le niveau gratuit permanent de 10 Go est particulièrement intéressant pour les petits projets et les environnements de test. Il faut toutefois surveiller le stockage, les téléchargements sortants et certaines classes de requêtes lorsque l’usage commence à dépasser les quotas inclus.
