---
nom: Zoho WorkDrive
accroche: Stockage cloud individuel avec suite bureautique Zoho intégrée
type: SaaS
categorie: equipe-collaboration
formule: 5 Go de stockage pour un utilisateur, avec Writer, Sheet et Show intégrés
inclus:
  - 5 Go de stockage cloud pour un compte individuel
  - Zoho Writer pour créer et éditer des documents
  - Zoho Sheet pour les feuilles de calcul
  - Zoho Show pour les présentations
  - Les fichiers natifs Writer Sheet et Show ne consomment pas le quota de 5 Go
  - Création stockage et organisation de fichiers dans le cloud
  - Partage de fichiers et dossiers
  - Collaboration sur les fichiers partagés
conditions:
  - Compte Zoho WorkDrive individuel
  - Usage individuel
  - Aucun moyen de paiement requis pour utiliser le plan gratuit
restrictions:
  - Le plan gratuit actuel est limité à un seul utilisateur
  - Stockage limité à 5 Go pour les fichiers non natifs Zoho
  - Les comptes d’équipe WorkDrive nécessitent une formule payante hors cas particuliers du plan Essentials
  - Partage direct limité à 50 adresses e-mail uniques pour l’édition individuelle gratuite
  - Une fois le quota atteint les nouveaux fichiers non natifs Zoho ne peuvent plus être ajoutés sans acheter du stockage supplémentaire
alertes:
  - type: usage
    niveau: critique
    libelle: Usage individuel uniquement
    detail: Le plan gratuit public actuel de WorkDrive est destiné à un utilisateur individuel et ne remplace pas un espace d’équipe gratuit.
  - type: fonctionnel
    niveau: important
    libelle: Stockage limité à 5 Go
    detail: Les nouveaux fichiers non natifs Zoho sont bloqués lorsque le quota est atteint ; les fichiers Writer, Sheet et Show restent exclus de ce quota.
usages:
  - Stockage
  - Stockage de fichiers
  - Partage de fichiers
  - Collaboration
url: https://www.zoho.com/workdrive/individual-plan.html
documentation: https://help.zoho.com/portal/en/kb/workdrive/individuals/articles/getting-started-for-individual-users
source: https://www.zoho.com/workdrive/pricing.html
couleur: "#2962ff"
initiales: ZW
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 63
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Zoho WorkDrive a remplacé Zoho Docs pour le stockage et la gestion de fichiers dans l’écosystème Zoho. Son plan individuel gratuit fournit 5 Go de stockage et intègre directement Writer, Sheet et Show. Les documents créés dans ces trois applications Zoho ne sont pas décomptés du quota, ce qui rend la formule pratique pour conserver des fichiers de projet, partager ponctuellement des documents et disposer d’une suite bureautique en ligne sans abonnement. Le gratuit public actuel reste toutefois destiné à un seul utilisateur : pour un véritable espace d’équipe, Zoho oriente vers ses formules WorkDrive payantes ou vers certains cas spécifiques du plan Essentials.
