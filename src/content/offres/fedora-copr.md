---
nom: "Fedora Copr"
accroche: "Service de build RPM basé sur Mock pour construire, tester et publier des dépôts destinés à Fedora et Enterprise Linux."
type: "Service managé"
categorie: build-packages
formule: "Service Fedora gratuit : builds RPM publics, sans quota mensuel publié"
inclus:
- "Builds RPM pour plusieurs versions de Fedora"
- "Builds pour EPEL / Enterprise Linux selon les chroots disponibles"
- "Dépôt DNF/YUM généré pour chaque chroot"
- "API et client copr-cli"
- "Webhooks, builds en lots et intégrations de dépôt"
conditions:
- "Compte Fedora Account System (FAS)"
- "Packages et contenus conformes aux licences et règles acceptées par Fedora"
- "Les dépôts Copr créés sur l’instance Fedora sont publics"
restrictions:
- "Durée maximale d’un build limitée ; la valeur par défaut est de 5 heures"
- "Sur l’instance Fedora Copr, le délai peut être augmenté jusqu’à 50 heures"
- "Les anciens builds sont élagués selon la politique de rétention du backend"
alertes:
- type: fonctionnel
  niveau: important
  libelle: "Dépôts publics et licences encadrées"
  detail: "Copr est destiné à des packages distribuables publiquement et impose les exigences légales et de licence du projet Fedora."
usages: ["Build", "CI/CD", "Déploiement"]
url: https://copr.fedorainfracloud.org/
source: https://docs.copr.fedorainfracloud.org/user_documentation.html
couleur: "#51A2DA"
initiales: "COPR"
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 1116
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Fedora Copr est une excellente solution pour automatiser la construction de RPM sans exploiter soi-même des workers Mock. Un projet peut cibler plusieurs chroots Fedora ou EPEL et publier directement les résultats sous forme de dépôts installables par DNF/YUM. Il faut toutefois garder à l’esprit que le service est public, mutualisé et soumis aux règles de licence de Fedora.
