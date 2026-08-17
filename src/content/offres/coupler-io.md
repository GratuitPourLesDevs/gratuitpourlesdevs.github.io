---
nom: Coupler.io
accroche: Intégration de données entre applications, feuilles de calcul et entrepôts
type: SaaS
categorie: api-donnees-ml
formule: 1 utilisateur, 1 compte, 1 flux actif et rafraîchissement manuel
inclus:
  - 1 utilisateur
  - 1 compte connecté
  - 1 source de données
  - 1 destination de données
  - 1 flux de données actif
  - Accès aux sources disponibles
conditions:
  - Compte Coupler.io
  - Passage automatique au Free si aucun plan payant n’est choisi après l’essai initial
restrictions:
  - Rafraîchissement manuel uniquement
  - 100 lignes exportées par exécution de flux
  - Un seul flux actif
  - Un seul compte connecté
alertes:
  - type: fonctionnel
    niveau: important
    libelle: Rafraîchissement manuel
    detail: Le plan gratuit ne permet pas la synchronisation planifiée et impose de déclencher les mises à jour manuellement.
usages:
  - Données
  - Intégration applicative
  - Automatisation
url: https://www.coupler.io/
source: https://www.coupler.io/pricing
couleur: "#ff5c35"
initiales: CU
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 140
verifieLe: 2026-08-18
verificationAutomatiqueLe: 2026-08-18
verificationNote: "Plan Free officiel vérifié : 1 utilisateur, 1 compte, 1 source, 1 destination, 100 lignes/run et refresh manuel."
---

Coupler.io copie et synchronise des données entre de nombreuses applications et destinations analytiques. Le plan gratuit est utilisable durablement mais reste très manuel : il convient à un petit flux ponctuel plutôt qu’à une pipeline de données réellement automatisée.
