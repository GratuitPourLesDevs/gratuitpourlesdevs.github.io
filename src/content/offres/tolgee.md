---
nom: Tolgee
accroche: Plateforme de localisation orientée développeurs disponible en Cloud et en auto-hébergement
type: SaaS
categorie: traductions
formule: 'Cloud Free : 500 clés et 3 sièges ; version self-hosted gratuite avec clés illimitées et jusqu’à 10 sièges'
inclus:
- Cloud Free avec 500 clés
- Cloud Free avec 3 sièges
- Self-hosted gratuit avec clés illimitées
- Self-hosted jusqu’à 10 sièges
- SDKs et intégrations de localisation
- Traduction machine via ses propres clés API en self-hosted
conditions:
- Fournir et maintenir sa propre infrastructure pour la version self-hosted
restrictions:
- Sur le Cloud, un dépassement peut être facturé si des informations de paiement sont enregistrées
- Le self-hosted gratuit n’inclut pas le SSO avancé, les permissions granulaires ni le support Enterprise
- Les coûts d’infrastructure et de fournisseurs IA restent à la charge de l’utilisateur en auto-hébergement
alertes:
- type: finance
  niveau: critique
  libelle: Dépassement Cloud facturable
  detail: Si une carte a été ajoutée, le dépassement des limites Cloud peut être facturé mensuellement.
- type: fonctionnel
  niveau: important
  libelle: Self-hosted à administrer
  detail: La version auto-hébergée est gratuite mais nécessite de fournir, sécuriser et exploiter sa propre infrastructure.
usages:
- Traduction
- Applications web
- Mobile
- CI/CD
url: https://tolgee.io/
documentation: https://docs.tolgee.io/
source: https://tolgee.io/pricing
couleur: '#F97316'
initiales: TG
carteRequise: false
depassementFacture: true
permanent: true
statut: "active"
vedette: false
ordre: 563
verifieLe: 2026-08-31
verificationAutomatiqueLe: 2026-08-31
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Tolgee offre deux chemins gratuits intéressants : un Cloud sans carte avec 500 clés et trois sièges, ou une version auto-hébergée gratuite avec un nombre illimité de clés et jusqu’à dix sièges. Ses SDKs et son approche contextuelle en font une solution complète pour intégrer la localisation directement dans une application. L’auto-hébergement demande cependant d’assumer l’infrastructure, et sur le Cloud un dépassement peut devenir facturable si une carte a été ajoutée.
