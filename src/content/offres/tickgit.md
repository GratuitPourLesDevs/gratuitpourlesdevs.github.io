---
nom: tickgit
accroche: Transformer les commentaires TODO du code en tâches suivies avec l’historique Git
type: Service managé
categorie: tickets-projets
formule: Dépôts publics gratuits ; dépôts privés à 3 $/mois après 3 jours d’essai
inclus:
- Analyse gratuite des dépôts publics
- Détection des commentaires TODO
- Rapports de tâches en attente
- Progression, résumés et historique à partir de Git
- CLI open source sous licence MIT
conditions:
- Dépôts publics utilisables gratuitement sans connexion sur le service web
restrictions:
- Les dépôts privés ne sont pas inclus dans la gratuité permanente
- Les marqueurs FIXME et les phrases personnalisées sont encore annoncés comme à venir
alertes:
- type: finance
  niveau: important
  libelle: Privé payant
  detail: Les dépôts privés sont annoncés à 3 $/mois après un essai de 3 jours.
- type: fonctionnel
  niveau: important
  libelle: Marqueurs limités à TODO
  detail: FIXME et les phrases personnalisées ne sont pas documentés comme disponibles aujourd’hui.
usages:
- Gestion de projet
- Git
- Développement et test
url: https://www.tickgit.com/
documentation: https://github.com/augmentable-dev/tickgit
source: https://www.tickgit.com/
couleur: '#2F855A'
initiales: TG
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 391
verifieLe: 2026-08-31
verificationAutomatiqueLe: 2026-08-31
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

tickgit fait remonter le travail latent directement depuis les commentaires TODO du code et exploite l’historique Git pour donner du contexte sur leur évolution. Le service hébergé reste gratuit pour les dépôts publics, tandis que le CLI open source permet aussi une utilisation locale.
