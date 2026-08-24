---
nom: JitPack
accroche: Dépôt Maven qui construit automatiquement des projets JVM et Android depuis Git
type: SaaS
categorie: build-packages
formule: Gratuit pour les projets open source publics
inclus:
  - Build à la demande depuis un dépôt Git public
  - Publication d’artefacts JAR et AAR
  - Versions par tag commit branche ou snapshot
  - Javadocs hébergées automatiquement
  - Versions illimitées pour les projets open source
  - Collaborateurs illimités sur les projets open source
  - Distribution via CDN
conditions:
  - Projet open source public pour bénéficier du gratuit
  - Projet buildable par JitPack
restrictions:
  - Les dépôts privés nécessitent un abonnement
  - Les artefacts publics deviennent immuables après 7 jours
alertes:
  - type: usage
    niveau: important
    libelle: Open source uniquement
    detail: Le gratuit permanent de JitPack s’applique aux projets open source ; les dépôts privés nécessitent un abonnement.
usages:
  - Build
  - CI/CD
  - Déploiement
url: https://jitpack.io/
documentation: https://docs.jitpack.io/
source: https://www.jitpack.io/private
couleur: "#2dbe60"
initiales: JP
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 265
verifieLe: 2026-08-24
verificationAutomatiqueLe: 2026-08-24
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
---

JitPack transforme directement un dépôt Git public en dépendance Maven exploitable dans Gradle, Maven ou d’autres outils JVM. C’est particulièrement pratique pour distribuer une bibliothèque Android ou Java sans gérer soi-même un dépôt d’artefacts.
