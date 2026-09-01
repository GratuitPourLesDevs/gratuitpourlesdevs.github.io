---
nom: "LocalXpose"
accroche: "Proxy inverse sécurisé pour exposer des services locaux avec SSL/TLS, sous-domaines uniques et contrôles d’accès."
type: SaaS
categorie: tunnels-webrtc-websockets
formule: "Starter gratuit : 2 tunnels HTTP/HTTPS actifs"
inclus:
- "2 tunnels HTTP ou HTTPS actifs simultanément"
- "Chiffrement SSL/TLS"
- "Sous-domaines uniques"
- "Authentification basique et par clé"
- "Limitation de débit et liste blanche IP"
- "Serveur de fichiers intégré"
- "Aucune carte bancaire requise"
conditions:
- "Création d’un compte LocalXpose gratuit"
restrictions:
- "Le plan Starter applique des limites de temps sans durée chiffrée publiée sur la grille actuelle"
- "TCP, TLS et UDP, domaines personnalisés et disponibilité 24/7 sont réservés au plan Pro"
alertes:
- type: usage
  niveau: important
  libelle: Durée des tunnels limitée
  detail: Le plan Starter applique une limite de temps aux tunnels, mais la durée exacte n’est pas publiée sur la grille actuelle.
- type: fonctionnel
  niveau: important
  libelle: TCP, TLS et UDP réservés au Pro
  detail: Le niveau gratuit est limité aux tunnels HTTP/HTTPS ; les autres protocoles et la disponibilité 24/7 nécessitent Pro.
usages: ["Tunnel sécurisé", "Accès distant", "Développement et test", "Webhook local", "Sécurité"]
url: https://localxpose.io/
documentation: https://localxpose.io/docs
source: https://localxpose.io/pricing
couleur: "#7C3AED"
initiales: LX
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 953
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

LocalXpose transforme une application locale en endpoint public sécurisé tout en ajoutant des contrôles utiles comme l’authentification, le filtrage IP et le rate limiting. Le niveau gratuit permet aujourd’hui deux tunnels HTTP/HTTPS actifs. La tarification mentionne toujours des limites de temps mais sans publier la durée, ce qui rend l’ancienne valeur de quinze minutes trop fragile pour être conservée.
