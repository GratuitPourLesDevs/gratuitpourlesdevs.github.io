---
nom: JSONing
accroche: Création instantanée d’une fausse API REST à partir d’un objet JSON
type: Ressource
categorie: tests
formule: Service gratuit et open source avec APIs temporaires supprimées quotidiennement
inclus:
  - Création d’une API à partir de JSON
  - Personnalisation des status HTTP
  - Headers et corps de réponse personnalisables
  - Projet open source auto-hébergeable
conditions: []
restrictions:
  - Les APIs hébergées gratuitement sont supprimées une fois par jour
  - Le fournisseur demande de limiter raisonnablement le nombre d’appels
  - Aucun quota chiffré de requêtes n’est publié
alertes:
  - type: operationnel
    niveau: important
    libelle: API temporaire
    detail: Les APIs créées sur l’instance publique gratuite sont supprimées quotidiennement et ne doivent pas servir de stockage durable.
usages: [API, Tests]
url: https://jsoning.com/api/
source: https://jsoning.com/api/
couleur: "#111827"
initiales: JN
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 198
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

JSONing est utile pour simuler rapidement une réponse REST pendant un développement frontend ou un test d’intégration. Pour un mock durable ou à fort trafic, mieux vaut auto-héberger le projet ou utiliser une solution avec persistance garantie.
