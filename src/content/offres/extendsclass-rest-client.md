---
nom: ExtendsClass REST Client
accroche: Client HTTP gratuit dans le navigateur pour tester des API REST
type: Ressource
categorie: autres-ressources
formule: Client REST web gratuit, sans installation
inclus: [Envoi de requêtes HTTP depuis le navigateur, Méthodes GET POST PUT PATCH et DELETE, Headers et authentification Basic, Corps de requête, Formatage JSON et XML, 50 dernières requêtes stockées localement, Collections sauvegardables]
conditions: [Navigateur web, CORS activé sur l’API cible pour le mode navigateur]
restrictions: [Le mode d’envoi via le serveur ExtendsClass est actuellement désactivé pour cause d’abus, Le mode navigateur exige CORS, Le site déconseille d’enregistrer des données sensibles]
alertes:
  - type: fonctionnel
    niveau: important
    libelle: Relais serveur désactivé
    detail: L’envoi des requêtes via le serveur ExtendsClass a été désactivé ; les tests reposent principalement sur le navigateur et nécessitent CORS.
usages: [API, Tests, Développement et test]
url: https://extendsclass.com/rest-client-online.html
documentation: https://extendsclass.com/rest-client-online.html
source: https://extendsclass.com/rest-client-online.html
couleur: "#f97316"
initiales: EC
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 164
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

ExtendsClass REST Client est un petit client HTTP web pratique pour quelques tests rapides. Il ne remplace pas Postman ou Bruno et son ancien relais serveur est aujourd’hui désactivé, mais le mode navigateur reste disponible gratuitement.
