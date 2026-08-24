---
nom: Namae
accroche: Vérifier la disponibilité d’un nom de projet dans plusieurs registres et services
type: Ressource
categorie: autres-ressources
formule: Projet open source Apache-2.0 avec service web sans quota public documenté
inclus:
- Recherche de disponibilité de noms de projet
- Vérifications croisées auprès de registres et services
- Code source disponible sous licence Apache-2.0
- Possibilité d’auto-hébergement à partir du dépôt public
conditions:
- Le dépôt open source reste public et non archivé
restrictions:
- Le site namae.dev n’a pas pu être validé par le contrôle automatisé
- Aucun quota d’utilisation chiffré n’est publié
- La liste précise des services vérifiés n’a pas été reconfirmée en 2026
alertes:
- type: operationnel
  niveau: important
  libelle: Service hébergé à revérifier
  detail: namae.dev renvoie un accès non exploitable au contrôle automatisé ; le dépôt open source reste disponible.
usages:
- Moteur de recherche
- Développement et test
url: https://namae.dev/
documentation: https://github.com/uetchy/namae
source: https://github.com/uetchy/namae
couleur: '#8B6F47'
initiales: NA
carteRequise: false
depassementFacture: false
permanent: true
statut: "a_verifier"
vedette: false
ordre: 390
verifieLe: '2026-08-18'
verificationAutomatiqueLe: 2026-08-24
verificationNote: "Source accessible, mais aucune mention explicite de gratuité détectée."
---

Namae vise à éviter les recherches manuelles répétitives au moment de baptiser un nouveau projet. Le code source reste disponible, mais l’état fonctionnel du service hébergé et la liste exacte des plateformes interrogées méritent une nouvelle vérification avant de considérer l’offre comme pleinement active.
