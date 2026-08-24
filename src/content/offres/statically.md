---
nom: Statically
accroche: CDN gratuit pour fichiers open source issus de GitHub, GitLab, Bitbucket, Gist et npm.
type: Ressource
categorie: cdn-protection
formule: CDN public gratuit pour Git et npm, sans quota chiffré publié
inclus:
- GitHub, GitLab et Bitbucket
- GitHub Gist
- Fichiers npm
- Diffusion mondiale via bunny.net et Cloudflare
conditions:
- Contenu open source
restrictions:
- L’ancien endpoint de transformation d’images /img/ est désormais désactivé
- Aucun SLA ou quota contractuel n’est publié
alertes:
- type: fonctionnel
  niveau: important
  libelle: Endpoint image désactivé
  detail: Statically indique que son endpoint /img/ a été désactivé à cause des abus et du trafic élevé ; la fiche ne présente
    donc plus le service comme CDN de transformation d’images.
usages:
- CDN
- Git
- Assets statiques
- Applications web
url: https://statically.io/
source: https://statically.io/
couleur: '#0EA5E9'
initiales: ST
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 809
verifieLe: 2026-08-24
verificationAutomatiqueLe: 2026-08-24
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
  actuelle.
---

Statically — CDN gratuit pour fichiers open source issus de GitHub, GitLab, Bitbucket, Gist et npm.
