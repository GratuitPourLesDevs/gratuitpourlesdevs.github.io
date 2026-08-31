---
nom: "Adapty"
accroche: "Infrastructure et outils de croissance pour achats intégrés et abonnements mobiles, avec SDK open source et paywalls pilotables à distance."
type: "SaaS"
categorie: paiement-facturation
formule: "Pro : gratuit sous 5 000 $ de revenus suivis par mois"
inclus:
- "Infrastructure d’abonnements et validation des achats intégrés"
- "SDK pour iOS, Android, React Native, Flutter, Unity et Web"
- "Paywalls et analytics de croissance"
- "Accès aux fonctionnalités du plan Pro sous le seuil gratuit"
conditions: []
restrictions:
- "Le seuil gratuit actuel est de 5 000 $ de Monthly Tracked Revenue (MTR), et non plus 10 000 $"
- "Au-delà de 5 000 $ MTR, le plan Pro facture 1 % des revenus suivis"
alertes:
- type: finance
  niveau: important
  libelle: "Seuil gratuit ramené à 5 000 $"
  detail: "Depuis février 2026, Adapty est gratuit sous 5 000 $ de revenus suivis mensuels ; les anciennes descriptions à 10 000 $ sont obsolètes."
usages: ["Mobile", "API", "Données"]
url: https://adapty.io/
documentation: https://adapty.io/docs/
source: https://adapty.io/pricing/
couleur: "#6C5CE7"
initiales: "AD"
carteRequise: false
depassementFacture: true
permanent: true
statut: "active"
vedette: false
ordre: 1195
verifieLe: 2026-08-31
verificationAutomatiqueLe: 2026-08-31
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Adapty évite de reconstruire toute la plomberie complexe des abonnements mobiles : validation des achats, état des souscriptions, entitlements, paywalls et analytics peuvent être pilotés derrière une même couche pour plusieurs plateformes. C’est particulièrement utile à une petite équipe mobile qui veut lancer rapidement sur iOS et Android tout en gardant la possibilité de faire évoluer ses paywalls sans republier toute l’application. Le plan Pro reste gratuit tant que les revenus suivis restent sous 5 000 $ par mois ; au-delà, la tarification passe à 1 % du MTR.
