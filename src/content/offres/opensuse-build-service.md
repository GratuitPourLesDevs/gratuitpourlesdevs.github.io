---
nom: "openSUSE Build Service (OBS)"
accroche: "Service public de build et de publication de packages pour plusieurs distributions Linux à partir d’une même base de sources."
type: "Service managé"
categorie: build-packages
formule: "Service public gratuit : builds multi-distributions, sans quota chiffré publié"
inclus:
- "Builds pour openSUSE et SUSE Linux Enterprise"
- "Cibles Fedora, Debian, Ubuntu et autres distributions prises en charge"
- "Builds multi-architectures"
- "Publication de dépôts de packages"
- "API et outils de collaboration autour des projets"
conditions:
- "Compte openSUSE pour publier et construire des packages"
- "Respect des conditions openSUSE et des règles de la communauté Free Software"
restrictions:
- "Instance publique et mutualisée, sans SLA commercial garanti"
- "Aucun quota chiffré stable de builds n’est publié pour l’instance publique"
- "Les contenus hébergés restent soumis aux règles de licence et aux restrictions juridiques du service"
alertes:
- type: operationnel
  niveau: important
  libelle: "Infrastructure communautaire partagée"
  detail: "build.opensuse.org est une instance publique destinée à la communauté Free Software ; sa capacité et ses règles d’usage ne constituent pas un SLA commercial."
usages: ["Build", "CI/CD", "Déploiement"]
url: https://build.opensuse.org/
source: https://build.opensuse.org/
couleur: "#73BA25"
initiales: "OBS"
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 1115
verifieLe: '2026-08-25'
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source accessible, mais aucune mention explicite de gratuité détectée ; statut éditorial conservé pour contrôle manuel."
verificationEtat: "controle_requis"
verificationCode: "gratuit_non_detecte"
verificationEchecsConsecutifs: 2
---

L’instance publique openSUSE Build Service permet de compiler et distribuer un même projet vers plusieurs distributions et architectures sans maintenir sa propre ferme de build. C’est particulièrement pratique pour les projets open source qui publient des paquets Linux, avec la contrepartie habituelle d’une infrastructure communautaire partagée et de règles d’hébergement à respecter.
