---
nom: No-IP Free Dynamic DNS
accroche: Dynamic DNS gratuit avec un hostname, client de mise à jour et confirmation obligatoire tous les 30 jours.
type: Service managé
categorie: dns
formule: 'Free : 1 hostname Dynamic DNS et 1 client de mise à jour'
inclus:
- 1 hostname Dynamic DNS
- 1 client de mise à jour
- Environ 30 domaines No-IP disponibles pour choisir son hostname
- Mise à jour automatique de l’adresse IP
- Aucune carte bancaire requise
conditions:
- Le hostname gratuit doit être confirmé tous les 30 jours
restrictions:
- 1 seul hostname sur le plan gratuit actuel
- Confirmation manuelle tous les 30 jours sous peine d’expiration
- TXT n’est pas disponible sur Free
- L’utilisation de son propre domaine nécessite une offre payante
alertes:
- type: operationnel
  niveau: important
  libelle: Confirmation tous les 30 jours
  detail: Le hostname gratuit expire s’il n’est pas confirmé périodiquement via le processus envoyé par No-IP.
usages: [DNS, Accès distant, Réseau, Automatisation]
url: https://www.noip.com/free
source: https://www.noip.com/free
couleur: '#EF3E42'
initiales: NI
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 908
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

No-IP reste un moyen très accessible de rendre joignable un NAS, un serveur domestique ou un équipement réseau derrière une adresse IP dynamique. Son client de mise à jour maintient automatiquement un hostname No-IP vers l’adresse publique actuelle, sans carte bancaire. En revanche, le Free est devenu nettement moins généreux que les anciennes descriptions encore présentes sur le Web : il ne comprend plus qu’un seul hostname. Il faut également le confirmer tous les 30 jours, ce qui en fait une solution correcte pour un usage personnel mais moins confortable pour un service que l’on veut complètement oublier une fois configuré.
