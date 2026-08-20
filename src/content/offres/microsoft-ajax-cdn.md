---
nom: Microsoft Ajax CDN
accroche: Ancien CDN Microsoft pour bibliothèques JavaScript et fichiers ASP.NET, désormais non maintenu et annoncé pour décommissionnement.
type: Ressource
categorie: cdn-protection
formule: Service historique encore accessible mais non activement mis à jour
inclus:
- Bibliothèques JavaScript tierces historiques
- Fichiers ASP.NET, MVC et SignalR
- HTTPS
- Diffusion via CDN
conditions: []
restrictions:
- Le CDN n’est plus activement mis à jour
- Microsoft recommande de migrer vers une source maintenant ses actifs
- Le service sera décommissionné à l’avenir
- Aucun SLA spécifique au-delà du CDN Azure sous-jacent
alertes:
- type: operationnel
  niveau: critique
  libelle: Décommissionnement annoncé
  detail: Microsoft indique officiellement que ce CDN n’est plus activement mis à jour et sera décommissionné dans le futur
    ; il ne faut plus en faire une nouvelle dépendance de production.
usages:
- CDN
- Assets statiques
- Applications web
url: https://learn.microsoft.com/en-us/aspnet/ajax/cdn/overview
source: https://learn.microsoft.com/en-us/aspnet/ajax/cdn/overview
couleur: '#5E5E5E'
initiales: MA
carteRequise: false
depassementFacture: false
permanent: false
statut: obsolete
vedette: false
ordre: 803
verifieLe: '2026-08-20'
verificationAutomatiqueLe: '2026-08-20'
verificationNote: Microsoft annonce officiellement que l’Ajax CDN n’est plus activement mis à jour et sera décommissionné
  ; la fiche est donc conservée comme référence historique.
---

Microsoft Ajax CDN — Ancien CDN Microsoft pour bibliothèques JavaScript et fichiers ASP.NET, désormais non maintenu et annoncé pour décommissionnement.
