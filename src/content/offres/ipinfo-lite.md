---
nom: IPinfo Lite
accroche: API gratuite illimitée pour pays, continent et informations ASN
type: API
categorie: api-donnees-ml
formule: Requêtes API authentifiées illimitées pour les données pays et ASN
inclus:
  - Requêtes API illimitées
  - Pays et continent
  - ASN
  - Nom et domaine de l’organisation ASN
  - Base de données téléchargeable
  - Usage commercial autorisé
conditions:
  - Compte IPinfo gratuit
  - Token requis
  - Attribution requise pour une utilisation publique
restrictions:
  - Pas de ville région coordonnées hostname ou fuseau dans Lite
  - Attribution obligatoire pour un usage public
alertes:
  - type: usage
    niveau: important
    libelle: Attribution requise
    detail: IPinfo Lite impose une attribution publique lorsque les données sont utilisées dans un site ou une application publique.
usages: [API, Données]
url: https://ipinfo.io/lite
documentation: https://ipinfo.io/developers/ipinfo-lite-api
source: https://ipinfo.io/lite
couleur: "#0ea5e9"
initiales: INFO
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 191
verifieLe: 2026-08-31
verificationAutomatiqueLe: 2026-08-31
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

IPinfo Lite remplace avantageusement l’ancien free tier à 50 000 requêtes pour les usages qui n’ont pas besoin de précision ville : le nombre de requêtes est désormais illimité, avec pays, continent et ASN, y compris pour un usage commercial sous attribution.
