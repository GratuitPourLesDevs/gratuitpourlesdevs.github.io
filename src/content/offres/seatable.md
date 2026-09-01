---
nom: "SeaTable"
accroche: "Base collaborative de type tableur avec tables liées, automatisations, scripts et API."
type: SaaS
categorie: services-donnees-manages
formule: "Free : jusqu’à 25 utilisateurs et 10 000 lignes"
inclus:
- "Jusqu’à 25 utilisateurs"
- "Bases et tables illimitées"
- "10 000 lignes"
- "2 Go de fichiers"
- "1 mois de snapshots"
- "3 000 appels API par mois"
- "100 automatisations"
- "Exécutions JavaScript illimitées et quota de scripts Python"
conditions:
- "Création d’un compte SeaTable Cloud"
restrictions:
- "La limite actuelle est de 10 000 lignes, et non 2 000"
- "Historique de snapshots limité à un mois"
- "Les quotas API, automatisations et scripts restent limités sur Free"
alertes:
- type: fonctionnel
  niveau: important
  libelle: Snapshots conservés 1 mois
  detail: L’historique de snapshots du plan Free est limité à un mois.
- type: usage
  niveau: important
  libelle: API limitée à 3 000 appels/mois
  detail: Le quota API gratuit est plafonné à 3 000 appels par mois.
usages: ["Base de données", "Collaboration", "Automatisation", "API"]
url: https://seatable.com/
documentation: https://seatable.com/help/
source: https://seatable.com/pricing/
couleur: "#FF8000"
initiales: ST
carteRequise: false
depassementFacture: false
permanent: true
statut: "a_verifier"
vedette: false
ordre: 939
verifieLe: '2026-08-21'
verificationAutomatiqueLe: 2026-09-01
verificationNote: "La source tarifaire reste indisponible (HTTP 404) après 2 contrôles consécutifs ; contrôle éditorial requis."
verificationEtat: "controle_requis"
verificationCode: "source_indisponible"
verificationEchecsConsecutifs: 2
---

SeaTable reprend l’interface familière d’un tableur tout en ajoutant relations, automatisations, scripts et API. Avec 10 000 lignes et jusqu’à 25 utilisateurs sur Free, il peut couvrir des outils internes et bases collaboratives plus conséquents que ne le laissait penser l’ancienne limite de 2 000 lignes.
