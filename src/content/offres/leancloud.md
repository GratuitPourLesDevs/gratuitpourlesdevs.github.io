---
nom: LeanCloud
accroche: Backend mobile/serverless avec stockage de données, fichiers, messagerie temps réel, push et services de recherche.
type: BaaS
categorie: baas
formule: 'Developer : 30 000 requêtes API/jour, 1 GB de données et 10 000 notifications push/jour'
inclus:
- 30 000 requêtes API par jour partagées entre plusieurs services
- 1 GB de stockage de données
- 10 000 notifications push par jour
- 10 000 requêtes de recherche plein texte par jour
- LeanMessage jusqu’à 500 utilisateurs actifs quotidiens
- 1 GB de stockage fichiers
conditions:
- Plan Developer destiné aux projets personnels et aux prototypes
restrictions:
- LeanEngine compute n’est plus inclus gratuitement comme dans certaines anciennes descriptions
- Les requêtes au-delà du quota quotidien sont refusées jusqu’au reset
- Certains dépassements de stockage ou trafic fichiers peuvent être facturés
alertes:
- type: finance
  niveau: important
  libelle: Dépassements fichiers payants
  detail: Le cœur du quota API est bloqué au plafond, mais certains usages de stockage ou de trafic fichiers peuvent générer des frais au-delà de la franchise.
usages:
- Backend d’application
- Base de données
- Notifications push
- Messagerie
- Mobile
url: https://leancloud.app/
source: https://leancloud.app/
couleur: '#28A745'
initiales: LC
carteRequise: false
depassementFacture: true
permanent: true
statut: "active"
vedette: false
ordre: 846
verifieLe: 2026-08-31
verificationAutomatiqueLe: 2026-08-31
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

LeanCloud fournit un backend assez complet pour une application mobile : données, push, messagerie et recherche sont accessibles via des SDKs plutôt que par une infrastructure à maintenir soi-même. Les 30 000 requêtes API quotidiennes donnent une marge confortable pour un prototype ou un petit produit, et les 10 000 notifications push par jour renforcent l’intérêt côté mobile. Il faut cependant distinguer les services gratuits du compute LeanEngine, qui n’est plus inclus comme dans d’anciennes descriptions. Le stockage et le trafic de fichiers demandent aussi une surveillance car certains dépassements peuvent être facturés.
