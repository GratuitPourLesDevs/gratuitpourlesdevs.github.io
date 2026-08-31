---
nom: RepoForge
accroche: Hébergement de packages Python, Docker, npm, Debian et Conda pour projets open source
type: SaaS
categorie: build-packages
formule: 100 Mo de stockage et packages publics illimités pour les projets open source
inclus:
  - 100 Mo de stockage
  - Packages publics illimités
  - Python PyPI
  - Docker
  - npm
  - Debian APT
  - Conda
  - Gratuit permanent
  - Aucune carte bancaire requise
conditions:
  - Projet open source public
  - Usage non commercial sur le plan Free
restrictions:
  - Tous les packages du plan Free sont publics
  - Usage commercial exclu du plan Free
  - Les packages privés et le contrôle d’accès nécessitent un plan payant
alertes:
  - type: usage
    niveau: critique
    libelle: Open source non commercial uniquement
    detail: Le plan Free de RepoForge est réservé aux projets open source publics et n’autorise pas l’usage commercial.
usages:
  - Build
  - Stockage
  - Déploiement
url: https://repoforge.io/
documentation: https://help.repoforge.io/
source: https://repoforge.io/pricing.html
couleur: "#1f2937"
initiales: RFG
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 268
verifieLe: 2026-08-31
verificationAutomatiqueLe: 2026-08-31
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

RepoForge convient aux petits projets open source qui veulent publier leurs artefacts via des outils standards sans gérer leur propre registre. Son stockage gratuit est assez limité, et l’interdiction d’usage commercial est une contrainte importante à prendre en compte.
