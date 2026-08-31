---
nom: "Nominatim (OSMF)"
accroche: "Service public de géocodage direct et inverse d’OpenStreetMap, accessible gratuitement sous une politique d’usage stricte."
type: "API"
categorie: cartographie
formule: "Service public gratuit : maximum absolu 1 requête par seconde"
inclus:
- "Recherche d’adresses et lieux"
- "Reverse geocoding"
- "Données OpenStreetMap"
- "Aucun compte requis"
conditions:
- "User-Agent ou Referer identifiant clairement l’application"
- "Attribution OpenStreetMap obligatoire"
- "Mise en cache fortement recommandée"
restrictions:
- "Maximum absolu 1 requête par seconde par application"
- "Autocomplete interdit"
- "Les gros batchs, requêtes systématiques, scraping et revente du service sont interdits"
- "Les scripts réguliers de longue durée sont limités à 4 requêtes par minute"
- "Le service public n’est pas destiné à une forte charge ni à une dépendance critique"
alertes:
- type: usage
  niveau: critique
  libelle: "Politique d’usage très stricte"
  detail: "Le serveur public OSMF est une ressource partagée : 1 requête/s maximum, pas d’autocomplete ni de requêtes systématiques, et l’accès peut être retiré."
- type: fonctionnel
  niveau: important
  libelle: "Pas pour un service de géocodage générique"
  detail: "Les applications dont la fonction principale est la revente ou la fourniture générique de géocodage doivent exploiter leur propre instance ou un fournisseur tiers."
usages: ["API", "Recherche", "Données"]
url: https://nominatim.org/
source: https://operations.osmfoundation.org/policies/nominatim/
couleur: "#7EBC6F"
initiales: "NO"
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 1111
verifieLe: '2026-08-25'
verificationAutomatiqueLe: 2026-08-31
verificationNote: "Source accessible, mais aucune mention explicite de gratuité détectée ; statut éditorial conservé pour contrôle manuel."
verificationEtat: "controle_requis"
verificationCode: "gratuit_non_detecte"
verificationEchecsConsecutifs: 1
---

Le Nominatim public est parfait pour des recherches occasionnelles et des applications modestes capables de respecter la politique OSMF. Il ne faut toutefois pas le traiter comme un SaaS commercial gratuit : sa capacité est volontairement limitée et les usages de masse, autocomplete ou revente sont explicitement interdits.
