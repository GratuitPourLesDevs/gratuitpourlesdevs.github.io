---
nom: "Turso"
accroche: "Base SQLite distribuée orientée edge avec nombreuses bases et quotas gratuits mensuels."
type: PaaS
categorie: services-donnees-manages
formule: "Free : 100 bases, 5 Go de stockage et 500 millions de lignes lues par mois"
inclus:
- "Jusqu’à 100 bases de données"
- "5 Go de stockage total"
- "500 millions de lignes lues par mois"
- "10 millions de lignes écrites par mois"
- "3 Go de synchronisation par mois"
- "1 jour de restauration point-in-time"
- "Développement local compatible SQLite"
- "Aucune carte bancaire requise"
conditions:
- "Création d’un compte Turso"
- "Utilisation du plan Free"
restrictions:
- "Les anciennes valeurs de 500 bases, 9 Go et 1 milliard de lectures ne correspondent plus au plan actuel"
- "Les quotas de lecture, écriture, stockage et synchronisation sont partagés au niveau du compte"
- "Les capacités de production avancées nécessitent une offre payante"
alertes:
- type: usage
  niveau: important
  libelle: Quotas partagés au niveau du compte
  detail: Stockage, lectures, écritures et synchronisation sont des allocations partagées entre les bases du compte.
- type: fonctionnel
  niveau: important
  libelle: Restauration point-in-time limitée à 1 jour
  detail: Le niveau Free ne conserve qu’une journée de restauration point-in-time.
usages: ["Base SQL serverless", "Edge", "Base de données", "Développement et test"]
url: https://turso.tech/
documentation: https://docs.turso.tech/
source: https://turso.tech/pricing
couleur: "#4FF8D2"
initiales: TU
carteRequise: false
depassementFacture: false
permanent: true
statut: active
vedette: false
ordre: 943
verifieLe: '2026-08-21'
verificationAutomatiqueLe: '2026-08-21'
verificationNote: "La tarification actuelle a changé : Free comprend 100 bases, 5 Go de stockage, 500 millions de lignes lues et 10 millions écrites par mois. Les anciennes valeurs 500/9 Go/1 milliard sont obsolètes."
---

Turso apporte une expérience SQLite managée et distribuée pour les applications edge et serverless. Le plan gratuit reste généreux en nombre de bases et en lectures, mais ses quotas actuels sont inférieurs à plusieurs anciennes descriptions encore diffusées en ligne.
