---
nom: Cloudflare R2
accroche: Stockage objet compatible S3 sans frais de transfert sortant
type: IaaS
categorie: stockage-medias
formule: 10 Go-mois, 1 million d’opérations de classe A et 10 millions de classe B
inclus: [10 Go-mois de stockage Standard par mois, 1 million d’opérations de classe A par mois, 10 millions d’opérations de classe B par mois, Transfert sortant vers Internet gratuit, Aucun frais de récupération sur le stockage Standard, Suppressions d’objets et de buckets gratuites, API compatible Amazon S3, Accès depuis Cloudflare Workers, Buckets publics et domaines personnalisés, Taille maximale proche de 5 Tio par objet, Nombre d’objets illimité par bucket]
conditions: [Compte Cloudflare, Souscription R2 activée depuis le tableau de bord, Moyen de paiement configuré, Utilisation de la classe de stockage Standard pour bénéficier du quota gratuit]
restrictions: [Dépassements de stockage et d’opérations facturés automatiquement, Quota de stockage mesuré en Go-mois selon la moyenne des pics quotidiens, Arrondi de la consommation à l’unité de facturation supérieure, Formule gratuite non applicable à la classe Infrequent Access, Frais de récupération sur les objets Infrequent Access, Durée minimale de stockage de 30 jours en Infrequent Access, Endpoint public r2.dev destiné aux tests et susceptible d’être limité, Envoi en une seule partie limité à environ 5 Gio, Une écriture simultanée par seconde sur un même nom d’objet, Opérations de classe A et B comptabilisées séparément]
alertes:
  - type: finance
    niveau: critique
    libelle: Dépassement facturé
    detail: Le stockage et les opérations dépassant les quotas gratuits sont facturés automatiquement.
usages: [Stockage objet, Sauvegarde, Assets statiques, Distribution de médias, Migration S3, Data lake]
url: https://www.cloudflare.com/developer-platform/products/r2/
documentation: https://developers.cloudflare.com/r2/
source: https://developers.cloudflare.com/r2/pricing/
couleur: "#f6821f"
initiales: R2
carteRequise: true
depassementFacture: true
permanent: true
statut: "active"
vedette: false
ordre: 53
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Cloudflare R2 est pertinent pour stocker les images d’une application, des sauvegardes légères, des artefacts ou des fichiers téléchargeables en conservant une API compatible S3. Son avantage distinctif est l’absence de frais de trafic sortant R2 : un projet qui sert souvent ses objets n’est pas pénalisé de la même manière que sur certains stockages facturant chaque gigaoctet transféré. Le niveau gratuit mensuel couvre une quantité de stockage ainsi que des classes d’opérations, ce qui permet de valider une intégration et d’exploiter un petit volume réel. Ce n’est cependant pas un bac à sable isolé : l’activation de la facturation est nécessaire et les dépassements de stockage ou d’opérations sont automatiquement payants. Il faut donc mettre des alertes et envisager une autre organisation lorsque les accès deviennent très nombreux ou imprévisibles, même si le trafic sortant reste gratuit.
