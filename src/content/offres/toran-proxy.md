---
nom: Toran Proxy
accroche: Ancien proxy Composer pour Packagist et GitHub, désormais progressivement retiré au profit de Private Packagist.
type: Ressource
categorie: cdn-protection
formule: Produit historique en phase de retrait ; nouvelle adoption déconseillée
inclus:
- Proxy de téléchargements Composer
- Mise en cache de Packagist et dépôts alternatifs
- Hébergement de packages Composer privés
- Protection contre les indisponibilités des sources
conditions: []
restrictions:
- Toran Proxy est officiellement en phase de retrait
- L’éditeur recommande Private Packagist comme remplaçant
- Le produit historique ne doit plus être retenu pour un nouveau projet
alertes:
- type: operationnel
  niveau: critique
  libelle: Produit en phase de retrait
  detail: Le site officiel indique que Toran Proxy est progressivement retiré et recommande désormais Private Packagist, disponible
    en SaaS et on-premise.
usages:
- Développement et test
- Cache mondial
- CI/CD
- Dépôts privés
url: https://toranproxy.com/
source: https://toranproxy.com/
couleur: '#4B5563'
initiales: TP
carteRequise: false
depassementFacture: false
permanent: false
statut: obsolete
vedette: false
ordre: 811
verifieLe: '2026-08-20'
verificationAutomatiqueLe: '2026-08-20'
verificationNote: Le site officiel affiche désormais explicitement « Toran Proxy is being phased out » et renvoie vers Private
  Packagist ; la fiche est conservée comme référence historique.
---

Toran Proxy — Ancien proxy Composer pour Packagist et GitHub, désormais progressivement retiré au profit de Private Packagist.
