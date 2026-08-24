---
nom: Libraries.io
accroche: Rechercher et suivre les métadonnées de millions de packages open source
type: Service managé
categorie: autres-ressources
formule: Service gratuit pour la recherche open source avec API limitée et soumise à un rate limit
inclus:
- Recherche dans environ 9,96 millions de packages open source
- 31 gestionnaires de paquets listés actuellement
- Recherche par licence et langage
- Découverte des packages nouveaux, populaires et tendance
- Suivi des packages et dépendances
- API publique à accès limité
conditions:
- Les données proviennent de métadonnées publiques collectées automatiquement
restrictions:
- L’API gratuite est limitée et soumise à un rate limit non chiffré publiquement
- Les données ne sont pas validées, corrigées ni curées comme celles de l’offre Tidelift
- Les informations avancées de vulnérabilités ne font pas partie de Libraries.io
alertes:
- type: usage
  niveau: important
  libelle: API limitée
  detail: Le service annonce une API limitée et soumise à un rate limit sans quota public chiffré.
- type: fonctionnel
  niveau: important
  libelle: Données non validées
  detail: Les métadonnées sont collectées automatiquement et ne bénéficient pas de la validation humaine de Tidelift.
usages:
- Moteur de recherche
- Données
- API
- Développement et test
url: https://libraries.io/
documentation: https://libraries.io/api
source: https://libraries.io/
couleur: '#F06445'
initiales: LI
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 389
verifieLe: 2026-08-24
verificationAutomatiqueLe: 2026-08-24
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
---

Libraries.io agrège les métadonnées de l’écosystème open source pour retrouver des packages et suivre les dépendances utilisées par un projet. La recherche web reste largement accessible, mais il faut distinguer ces données collectées automatiquement des informations enrichies et validées proposées séparément par Tidelift.
