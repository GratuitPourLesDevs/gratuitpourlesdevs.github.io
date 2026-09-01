---
nom: noip.at
accroche: Dynamic DNS gratuit et minimaliste sans inscription, publicité, tracking ni journalisation annoncée.
type: Service managé
categorie: dns
formule: 'Gratuit sans inscription, nombre de domaines non plafonné publiquement'
inclus:
- Dynamic DNS gratuit
- Utilisation sans inscription
- Aucun tracking annoncé
- Aucune journalisation annoncée
- Aucune publicité
- Mise à jour simple pour hostnames dynamiques
conditions: []
restrictions:
- Les hostnames inactifs pendant 90 jours peuvent être supprimés
- Aucun quota numérique de domaines n’est actuellement publié comme garantie
- Service plus minimaliste que les plateformes DNS gérées avec SLA ou API riche
alertes: []
usages: [DNS, Accès distant, Réseau, Sécurité]
url: https://noip.at/
source: https://noip.at/
couleur: '#111827'
initiales: NA
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 907
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

noip.at vise le cas d’usage DDNS dans sa forme la plus simple : obtenir un nom stable pour une connexion dont l’adresse IP change, sans créer de compte. L’absence annoncée de tracking, de logs et de publicité peut être intéressante pour un homelab ou un accès distant où l’on veut limiter les données confiées au fournisseur. Il n’expose pas la lourdeur fonctionnelle d’une plateforme DNS complète et convient donc bien à un besoin ponctuel. La contrepartie est une politique d’inactivité : un hostname non mis à jour pendant 90 jours peut disparaître.
