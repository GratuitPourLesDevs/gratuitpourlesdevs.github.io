---
nom: Authy API
accroche: Ancienne API 2FA Twilio Authy, fermée aux nouveaux clients et en cours de dépréciation
type: API
categorie: identite-acces
formule: API fermée aux nouveaux clients ; Twilio recommande Verify v2
inclus:
- Application Authy grand public toujours disponible
- Historique d’intégration 2FA via API
conditions: []
restrictions:
- L’API Authy n’accepte plus de nouveaux clients
- L’API a atteint sa fin de support
- L’ancien quota de 100 authentifications réussies gratuites n’est plus une offre pour de nouveaux projets
alertes:
- type: operationnel
  niveau: critique
  libelle: API en fin de vie
  detail: Twilio a fermé Authy API aux nouveaux clients et recommande de migrer vers Verify v2.
usages:
- Authentification client
- API
- Mobile
url: https://authy.com/
documentation: https://www.twilio.com/docs/verify
source: https://www.twilio.com/docs/verify/authy-vs-verify
couleur: '#F22F46'
initiales: AT
carteRequise: false
depassementFacture: false
permanent: false
statut: obsolete
vedette: false
ordre: 487
verifieLe: '2026-08-19'
verificationAutomatiqueLe: '2026-08-19'
verificationNote: 'Le Free Tier historique de l’API Authy n’est plus pertinent : l’API est fermée aux nouveaux clients et
  en dépréciation.'
---

Authy API est référencé avec les limites gratuites vérifiées le 2026-08-19.
