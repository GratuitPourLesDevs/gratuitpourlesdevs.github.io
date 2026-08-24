---
nom: Cirun
accroche: Runners CI à la demande sur votre propre cloud pour les dépôts GitHub
type: SaaS
categorie: ci-cd
formule: Open Source gratuit avec dépôts publics et runners illimités
inclus:
- Dépôts publics illimités
- Runners Cirun illimités
- Support des runners ARM et GPU
- Déploiement sur les principaux fournisseurs cloud supportés
- Intégration avec GitHub Actions
conditions:
- Le dépôt doit être public pour bénéficier du plan Open Source gratuit
- Le compte cloud utilisé pour exécuter les machines reste à la charge de l’utilisateur
restrictions:
- La gratuité concerne la plateforme Cirun, pas les ressources compute du fournisseur cloud
- Les dépôts privés nécessitent une offre adaptée
alertes:
- type: finance
  niveau: important
  libelle: Compute cloud non inclus
  detail: Cirun est gratuit pour les dépôts publics, mais les VM et autres ressources lancées dans AWS, GCP, Azure ou un autre cloud sont facturées par ce fournisseur.
usages:
- CI/CD
- Cloud public
- Build
- Git
url: https://cirun.io/
documentation: https://docs.cirun.io/
source: https://cirun.io/pricing/
couleur: '#FF6B35'
initiales: CR
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 399
verifieLe: 2026-08-24
verificationAutomatiqueLe: 2026-08-24
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
---

Cirun permet d’utiliser son propre cloud comme flotte de runners GitHub Actions. Pour l’open source la couche Cirun est gratuite, mais elle ne rend évidemment pas gratuites les machines provisionnées chez le fournisseur cloud.
