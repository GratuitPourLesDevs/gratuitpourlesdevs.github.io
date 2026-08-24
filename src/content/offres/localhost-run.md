---
nom: "localhost.run"
accroche: "Tunnel SSH sans installation ni inscription pour publier instantanément une application locale en HTTPS."
type: Service managé
categorie: tunnels-webrtc-websockets
formule: "Niveau gratuit permanent avec domaines gratuits"
inclus:
- "Création d’un tunnel avec le client SSH déjà installé"
- "Aucune inscription nécessaire pour les tunnels gratuits"
- "URL publique avec terminaison TLS"
- "Certificats HTTPS générés automatiquement"
- "Domaines gratuits annoncés comme gratuits de façon permanente"
- "Prise en charge de connexions TLS et de protocoles non HTTP"
conditions:
- "Disposer d’un client SSH"
restrictions:
- "Les domaines personnalisés ou stables sont associés à une offre payante"
- "Aucun quota chiffré de trafic ou de durée n’est publié pour le niveau gratuit"
alertes:
- type: fonctionnel
  niveau: important
  libelle: Domaine stable payant
  detail: Les domaines personnalisés ou stables nécessitent une offre payante ; le niveau gratuit utilise les domaines du service.
- type: operationnel
  niveau: important
  libelle: Quotas non publiés
  detail: Aucun quota chiffré de trafic ou de durée n’est publié pour le niveau gratuit.
usages: ["Tunnel sécurisé", "Accès distant", "Webhook local", "Développement et test"]
url: https://localhost.run/
documentation: https://localhost.run/docs/
source: https://localhost.run/
couleur: "#111827"
initiales: LR
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 950
verifieLe: 2026-08-24
verificationAutomatiqueLe: 2026-08-24
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
---

localhost.run transforme une simple commande SSH en tunnel public vers un serveur local. Il est pratique pour partager une démonstration, tester un webhook ou accéder ponctuellement à une application derrière un NAT sans installer d’agent supplémentaire. Le service promet que ses domaines gratuits resteront gratuits, tandis que les domaines personnalisés et stables relèvent d’une souscription.
