---
nom: "Launchpad PPA"
accroche: "Service Canonical pour construire des paquets source et publier automatiquement des dépôts APT destinés à Ubuntu."
type: "Service managé"
categorie: build-packages
formule: "PPA public gratuit : 8 GiB de stockage par nouveau PPA"
inclus:
- "8 GiB de stockage pour un nouveau PPA"
- "Build automatique des paquets binaires à partir des sources"
- "Hébergement du dépôt APT et signature des packages"
- "Architecture amd64 activée par défaut"
- "Architectures supplémentaires disponibles sur demande/configuration"
- "Pas de limite stricte de transfert publiée pour les téléchargements"
conditions:
- "Compte Launchpad"
- "Clé GPG pour signer les uploads de sources"
- "Acceptation des conditions du service"
- "Contenu du PPA sous une licence éligible ou approuvée par Canonical"
restrictions:
- "Les PPA publics sont destinés à Ubuntu et ne constituent pas un service de build Debian générique"
- "Seuls les paquets source sont acceptés à l’upload ; Launchpad produit ensuite les binaires"
- "La ferme de build est partagée et peut être plus lente lors des périodes chargées"
- "Les usages propriétaires ou privés nécessitent une approbation ou des fonctionnalités spécifiques"
alertes:
- type: fonctionnel
  niveau: important
  libelle: "PPA ciblé Ubuntu"
  detail: "Launchpad utilise le format Debian, mais le service PPA public construit les paquets contre les séries Ubuntu prises en charge."
usages: ["Build", "CI/CD", "Déploiement"]
url: https://launchpad.net/
source: https://documentation.ubuntu.com/launchpad/user/reference/packaging/ppas/ppa/
couleur: "#E95420"
initiales: "LP"
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 1117
verifieLe: '2026-08-25'
verificationAutomatiqueLe: 2026-08-31
verificationNote: "Source accessible, mais aucune mention explicite de gratuité détectée ; statut éditorial conservé pour contrôle manuel."
verificationEtat: "controle_requis"
verificationCode: "gratuit_non_detecte"
verificationEchecsConsecutifs: 1
---

Launchpad PPA fournit à chaque développeur ou équipe un espace pour envoyer des paquets source, les faire construire sur l’infrastructure de Canonical puis les distribuer dans un dépôt APT. Le service est très pratique pour Ubuntu, avec 8 GiB attribués aux nouveaux PPA et sans plafond strict de bande passante publié, mais il est réservé aux contenus répondant aux règles de licence de Launchpad.
