---
nom: Gemfury
accroche: Hébergement de packages publics et privés pour de nombreux écosystèmes
type: SaaS
categorie: build-packages
formule: Hébergement public disponible ; gratuit permanent actuel à confirmer
inclus:
  - RubyGems npm PyPI Composer Maven Go Modules NuGet APT DEB YUM RPM et autres formats
  - Packages publics accessibles sans jeton de téléchargement
  - Publication via interface CLI cURL ou Git selon le format
  - CDN et URLs de dépôts par écosystème
conditions:
  - Compte Gemfury
restrictions:
  - La documentation actuelle de facturation indique une facturation mensuelle à la fin de l’essai
  - Aucune grille tarifaire primaire actuelle ne confirme clairement un plan public gratuit permanent
  - Taille maximale absolue de 300 Mo par package uploadé et limites plus faibles selon certains endpoints
alertes:
  - type: finance
    niveau: critique
    libelle: Gratuit permanent non confirmé
    detail: Gemfury héberge toujours des packages publics, mais sa documentation de facturation actuelle décrit un essai suivi d’un abonnement ; l’ancien gratuit public doit être reconfirmé.
usages:
  - Build
  - Déploiement
  - Stockage
url: https://gemfury.com/
documentation: https://gemfury.com/help/getting-started/
source: https://gemfury.com/help/billing/
couleur: "#ef5b2a"
initiales: GF
carteRequise: true
depassementFacture: true
permanent: false
statut: "a_verifier"
vedette: false
ordre: 264
verifieLe: 2026-08-18
verificationAutomatiqueLe: 2026-08-24
verificationNote: "Vérification automatique incomplète : HTTP 403."
---

Gemfury reste une plateforme complète d’hébergement de packages multi-écosystèmes. La fiche est conservée en vérification car la disponibilité d’un vrai plan public gratuit permanent n’est plus clairement établie par la documentation tarifaire actuelle.
