---
nom: Squidex
accroche: Headless CMS API-first open source avec offre Cloud Starter gratuite
type: SaaS
categorie: cms
formule: Starter Free avec 20k appels API, 2 Go de trafic et 500 Mo de stockage
inclus:
- 20 000 appels API par mois
- 2 Go de trafic par mois
- 500 Mo de stockage
- 2 contributeurs
- Content CDN et Assets CDN
- API REST et requêtes GraphQL
- Version open source auto-hébergeable sous licence MIT
conditions:
- Compte Squidex Cloud pour le plan hébergé
- Afficher le label Powered By Squidex sur les pages ou applications utilisant le Starter Cloud
restrictions:
- Les appels API du Free sont bloqués à 20 000
- La tarification indique un coût pour le trafic supplémentaire au-delà du quota inclus
alertes:
- type: finance
  niveau: important
  libelle: Trafic facturable
  detail: Le quota API Free est bloquant, mais la page de tarification indique que le trafic supplémentaire peut être facturé au-delà des 2 Go inclus.
- type: usage
  niveau: important
  libelle: Attribution requise
  detail: Le plan Cloud Starter gratuit impose l’affichage du label Powered By Squidex sur chaque page web ou dans l’application mobile.
usages:
- API
- Données
- Applications web
url: https://squidex.io/
source: https://www.squidex.io/pricing
couleur: '#2563EB'
initiales: SQ
carteRequise: false
depassementFacture: true
permanent: true
statut: "active"
vedette: false
ordre: 355
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Squidex offre deux chemins intéressants : un petit plan Cloud gratuit ou une installation open source totalement maîtrisée. Pour le Cloud, l’attribution obligatoire et la tarification du trafic supplémentaire sont les deux points à surveiller.
