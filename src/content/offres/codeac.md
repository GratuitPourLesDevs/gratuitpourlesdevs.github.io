---
nom: Codeac
accroche: Analyse continue de qualité, SAST et Infrastructure as Code
type: SaaS
categorie: qualite-code
formule: Open-source à 0 $ pour toujours avec dépôts publics illimités
inclus:
- Dépôts publics illimités
- Analyse statique et détection de duplications
- Détection de vulnérabilités SAST
- Intégrations GitHub, Bitbucket et GitLab
- Analyse Infrastructure as Code
conditions:
- Compte Codeac
restrictions:
- La grille gratuite mentionne aussi les dépôts privés sans publier de quota exploitable
- Fonctions avancées et support prioritaire réservés aux offres payantes
alertes:
- type: fonctionnel
  niveau: important
  libelle: Quota privé non chiffré
  detail: La page tarifaire mentionne les dépôts privés sur l’offre Open-source mais ne publie pas de nombre clair ; ne pas considérer le privé comme illimité.
usages:
- Git
- Infrastructure as Code
- Tests d’infrastructure
url: https://www.codeac.io/
source: https://www.codeac.io/pricing.html
couleur: '#0C6E5A'
initiales: CA
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 367
verifieLe: 2026-08-24
verificationAutomatiqueLe: 2026-08-24
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
---

Codeac automatise les contrôles de qualité et de sécurité sur le code applicatif et l’Infrastructure as Code. L’offre open source reste gratuite sans limite publiée sur les dépôts publics.
