---
nom: DatoCMS
accroche: Headless CMS GraphQL pour petits projets avec quotas mensuels bloquants
type: SaaS
categorie: cms
formule: Free Forever avec 3 projets, 2 éditeurs et 100k appels API/mois
inclus:
- Jusqu’à 3 projets
- 2 éditeurs
- 300 records
- 10 Go de trafic par mois
- 100 000 appels API par mois
- API GraphQL
conditions:
- Compte DatoCMS
restrictions:
- Aucun dépassement n’est autorisé sur le plan Free
- Si un quota mensuel est atteint, les projets peuvent être suspendus jusqu’au début du mois suivant
alertes:
- type: operationnel
  niveau: important
  libelle: Suspension au quota
  detail: Atteindre une limite mensuelle du Free peut suspendre les projets et leurs API jusqu’à la réinitialisation du mois suivant.
usages:
- API
- Données
- Applications web
url: https://www.datocms.com/
source: https://www.datocms.com/pricing
couleur: '#FF5E1A'
initiales: DA
carteRequise: false
depassementFacture: false
permanent: true
statut: active
vedette: false
ordre: 350
verifieLe: '2026-08-18'
verificationAutomatiqueLe: '2026-08-18'
verificationNote: Le plan Free est annoncé gratuit pour toujours, sans carte, avec 2 éditeurs, 300 records, 10 Go de trafic et 100k appels API/mois ; aucun overage n’est autorisé.
---

DatoCMS fournit une API GraphQL et une interface éditoriale adaptée aux petits sites et prototypes. Son comportement au quota est à connaître : le service privilégie la coupure temporaire plutôt qu’une facture surprise.
