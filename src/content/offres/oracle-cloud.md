---
nom: Oracle Cloud Free Tier
accroche: Compute AMD et Arm, stockage et bases de données Always Free
type: IaaS
categorie: grands-fournisseurs-cloud
formule: Plus de 20 services Always Free sans limite de durée, plus 300 USD de crédit pendant 30 jours
inclus: [Jusqu’à 2 VM AMD avec 1/8 OCPU et 1 Go de mémoire chacune, Ampere A1 avec 1 500 heures OCPU et 9 000 heures Go par mois soit 2 OCPU et 12 Go de mémoire, 200 Go de volumes bloc et 5 sauvegardes, 20 Go de stockage objet et archive combinés pour un compte Always Free, 2 bases Autonomous AI Database avec 1 OCPU et 20 Go chacune, 1 load balancer flexible à 10 Mbit/s, 10 To de transfert sortant par mois]
conditions: [Compte Oracle Cloud, Carte bancaire ou carte de débit compatible demandée pour vérifier l’identité, Ressources créées avec l’étiquette Always Free Eligible]
restrictions: [Compute et volumes bloc à créer dans la région d’origine du compte, Capacité Always Free parfois indisponible dans certaines régions, Les instances Compute inactives pendant 7 jours peuvent être récupérées par Oracle, Une seule inscription Free Tier autorisée par personne, Aucun SLA et support communautaire uniquement, Le crédit de 300 USD expire après 30 jours]
alertes:
  - type: operationnel
    niveau: critique
    libelle: Instance inactive récupérable
    detail: Oracle peut récupérer une instance Compute restée inactive pendant sept jours.
  - type: operationnel
    niveau: important
    libelle: Capacité régionale non garantie
    detail: Les ressources Always Free peuvent être indisponibles dans certaines régions.
usages: [Compute, Stockage, Base de données]
url: https://www.oracle.com/cloud/free/
documentation: https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier_topic-Always_Free_Resources.htm
source: https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier_topic-Always_Free_Resources.htm
couleur: "#c74634"
initiales: OC
carteRequise: true
permanent: true
statut: "active"
vedette: false
ordre: 6
verifieLe: 2026-08-17
verificationAutomatiqueLe: 2026-08-17
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
---

Oracle Cloud Free Tier réunit un socle Always Free sans date d’expiration et un crédit d’essai temporaire. Il permet notamment de monter une petite infrastructure complète avec compute AMD ou Arm, volumes, stockage objet, base de données et load balancer, sous réserve de capacité dans la région d’origine.
