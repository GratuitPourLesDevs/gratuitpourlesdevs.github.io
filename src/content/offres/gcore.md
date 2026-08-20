---
nom: Gcore CDN
accroche: CDN mondial gratuit avec 1 To de trafic mensuel, un milliard de requêtes incluses avant tarification et DNS managé
  gratuit.
type: Service managé
categorie: cdn-protection
formule: 'Free : 1 To de trafic CDN par mois, puis dépassement facturé'
inclus:
- 1 To de trafic CDN par mois
- Jusqu’à 1 milliard de requêtes avant tarification des requêtes supplémentaires
- Couverture mondiale de base
- Managed DNS gratuit avec requêtes et zones illimitées
- Certificat TLS gratuit
conditions:
- Création d’un compte Gcore
restrictions:
- Trafic CDN au-delà de 1 To facturé 0,030 € par Go selon la grille actuelle
- Les requêtes au-delà de 1 milliard sont facturées par million
- Les fonctions CDN avancées et le support supérieur nécessitent un plan payant
alertes:
- type: finance
  niveau: important
  libelle: Dépassements facturés
  detail: Le Free CDN est à 0 € mais le trafic au-delà de 1 To et les requêtes au-delà du seuil inclus sont tarifés selon
    la grille en vigueur.
usages:
- CDN
- Bande passante
- DNS
- Protection DDoS
url: https://gcore.com/cdn
source: https://gcore.com/pricing/edge-network
couleur: '#FF4A00'
initiales: GC
carteRequise: false
depassementFacture: true
permanent: true
statut: active
vedette: false
ordre: 801
verifieLe: '2026-08-20'
verificationAutomatiqueLe: '2026-08-20'
verificationNote: 'Plan FREE vérifié le 20 août 2026 : 1 To de trafic, tarification des requêtes au-delà de 1 milliard et
  Managed DNS gratuit. Gcore indique qu’aucune carte n’est requise pour démarrer.'
---

Gcore CDN — CDN mondial gratuit avec 1 To de trafic mensuel, un milliard de requêtes incluses avant tarification et DNS managé gratuit.
