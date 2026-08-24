---
nom: NextDNS
accroche: Pare-feu DNS configurable avec blocage des malwares, trackers et contenus indésirables, gratuit jusqu’à 300 000 requêtes par mois.
type: SaaS
categorie: dns
formule: 'Free : 300 000 requêtes DNS filtrées par mois, appareils et configurations illimités'
inclus:
- 300 000 requêtes DNS filtrées par mois
- Appareils illimités
- Configurations illimitées
- Blocage des malwares et trackers
- Listes de blocage personnalisables
- Contrôle parental
- Logs et statistiques
- DNS over HTTPS et DNS over TLS
conditions: []
restrictions:
- Au-delà de 300 000 requêtes dans le mois, le service continue à résoudre les DNS mais désactive le filtrage, les logs et les fonctions avancées jusqu’au reset
alertes:
- type: fonctionnel
  niveau: important
  libelle: Filtrage suspendu après le quota
  detail: Après 300 000 requêtes mensuelles, NextDNS continue à résoudre les noms mais fonctionne comme un DNS classique jusqu’au renouvellement du quota.
usages: [Filtrage DNS, Sécurité, DNS, Observabilité]
url: https://nextdns.io/
source: https://nextdns.io/pricing
couleur: '#1E88E5'
initiales: ND
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 906
verifieLe: 2026-08-24
verificationAutomatiqueLe: 2026-08-24
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
---

NextDNS transforme le DNS en une couche de sécurité configurable sans installer un agent lourd sur chaque appareil. Le plan gratuit donne accès aux mêmes fonctions de filtrage que les offres payantes jusqu’à 300 000 requêtes par mois, ce qui suffit souvent pour un développeur, une petite famille ou quelques appareils de test. Les listes de blocage, logs et configurations multiples sont pratiques pour comparer des politiques de sécurité ou isoler différents environnements. Le comportement après quota est plutôt doux : la résolution continue, mais le filtrage et les fonctions avancées s’arrêtent jusqu’au mois suivant.
