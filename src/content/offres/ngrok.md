---
nom: "ngrok"
accroche: "Passerelle et service de tunnels pour exposer des applications locales, tester des webhooks et publier des endpoints sécurisés."
type: SaaS
categorie: tunnels-webrtc-websockets
formule: "Free : 5 $ de crédit unique, 3 endpoints, 1 Go de transfert et 20 000 requêtes HTTP/S"
inclus:
- "5 $ de crédit d’usage accordé une seule fois"
- "Jusqu’à 3 endpoints en ligne simultanément"
- "Jusqu’à 1 Go de transfert de données"
- "20 000 requêtes HTTP/S par mois"
- "5 000 connexions TCP/TLS par mois"
- "1 domaine de développement attribué"
- "3 agents simultanés"
- "24 heures de rétention dans Traffic Inspector"
conditions:
- "Création d’un compte ngrok gratuit"
- "Une vérification par carte peut être requise pour les adresses TCP aléatoires"
restrictions:
- "Le crédit gratuit de 5 $ est unique, valable un an après attribution et ne se renouvelle pas mensuellement"
- "Aucun usage supplémentaire n’est autorisé au-delà du crédit sur le plan Free"
- "Le plan Free affiche une page intermédiaire sur les endpoints HTTP/S"
- "Les domaines personnalisés sont réservés aux offres supérieures"
alertes:
- type: usage
  niveau: critique
  libelle: Crédit gratuit non renouvelable
  detail: Les 5 $ de crédit sont accordés une seule fois, valables un an et ne se renouvellent pas chaque mois.
- type: fonctionnel
  niveau: important
  libelle: Page intermédiaire sur HTTP/S
  detail: Les endpoints HTTP/S du plan Free affichent une page intermédiaire ngrok avant l’application exposée.
usages: ["Tunnel sécurisé", "Webhook local", "Développement et test", "API", "Accès distant"]
url: https://ngrok.com/
documentation: https://ngrok.com/docs/
source: https://ngrok.com/pricing
couleur: "#1F1E37"
initiales: NG
carteRequise: false
depassementFacture: false
permanent: false
statut: active
vedette: false
ordre: 954
verifieLe: '2026-08-22'
verificationAutomatiqueLe: '2026-08-22'
verificationNote: "La tarification ngrok actuelle a remplacé l’ancien free tier par un plan à 0 $ avec 5 $ de crédit unique, 3 endpoints, 1 Go de transfert et 20 000 requêtes HTTP/S mensuelles."
---

ngrok est l’un des services de tunnel les plus connus pour publier temporairement une application locale derrière une URL sécurisée. Il combine tunnels, inspection du trafic, politiques d’accès et outils pour les webhooks. Son modèle gratuit a toutefois changé : il repose désormais sur un crédit d’usage unique de cinq dollars, ce qui le rend moins permanent que les anciens free tiers souvent encore décrits en ligne.
