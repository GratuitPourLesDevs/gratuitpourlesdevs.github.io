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
statut: active
vedette: false
ordre: 53
verifieLe: 2026-08-14
verificationAutomatiqueLe: 2026-08-14
verificationNote: "La tarification Cloudflare confirme 10 Go-mois de stockage Standard, 1 million d’opérations de classe A et 10 millions d’opérations de classe B par mois, avec transfert sortant gratuit. La classe Infrequent Access ne bénéficie pas du quota gratuit."
---

Cloudflare R2 est un stockage objet compatible avec l’API S3, conçu pour conserver et distribuer des fichiers sans frais de transfert sortant. La formule gratuite mensuelle convient aux sauvegardes légères, aux assets statiques et aux petits dépôts de données. R2 reste cependant un service à l’usage : une souscription avec facturation doit être activée et tout dépassement des quotas gratuits est automatiquement facturé.
