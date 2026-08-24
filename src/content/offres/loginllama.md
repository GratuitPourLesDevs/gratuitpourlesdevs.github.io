---
nom: LoginLlama
accroche: Détection de connexions suspectes et de tentatives de prise de contrôle de compte
type: API
categorie: identite-acces
formule: 1 000 vérifications de connexion par mois, sans carte
inclus:
  - Score de risque de 0 à 10
  - Détection de credential stuffing et bots
  - Signaux de voyage impossible nouveau device et VPN connu
  - Recommandation allow MFA ou block
  - SDKs et API
conditions:
  - Compte LoginLlama
  - Aucune carte bancaire requise pour démarrer
restrictions:
  - 1 000 vérifications par mois sur le Free
  - Les requêtes au-delà des limites peuvent être rejetées en HTTP 429
alertes:
  - type: fonctionnel
    niveau: important
    libelle: Quota mensuel
    detail: Le plan gratuit est limité à 1 000 vérifications de connexion par mois et les appels excédentaires peuvent être bloqués.
usages:
  - Authentification
  - API
  - Alertes
url: https://loginllama.app/
source: https://loginllama.app/
couleur: "#111827"
initiales: LL
carteRequise: false
depassementFacture: false
permanent: true
statut: active
vedette: false
ordre: 202
verifieLe: 2026-08-18
verificationAutomatiqueLe: 2026-08-24
verificationNote: "Vérification automatique incomplète : HTTP 403."
---

LoginLlama ajoute une couche de scoring de risque au moment de la connexion afin de décider si une authentification doit être autorisée, renforcée par MFA ou bloquée. Le quota gratuit suffit pour un petit produit ou un environnement de test.
