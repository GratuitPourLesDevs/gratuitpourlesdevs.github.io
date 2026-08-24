---
nom: "Prisma Postgres"
accroche: "PostgreSQL serverless intégré à Prisma avec unikernels, zéro cold start et tarification par opérations."
type: PaaS
categorie: services-donnees-manages
formule: "Free : 100 000 opérations, 500 Mo de stockage et 50 bases"
inclus:
- "100 000 opérations par mois"
- "500 Mo de stockage total"
- "Jusqu’à 50 bases de données"
- "Aucune carte bancaire requise"
- "PostgreSQL managé"
- "Connexion via Prisma ORM ou SQL"
- "Autoscaling et pooling de connexions"
conditions:
- "Création d’un compte Prisma"
- "Utilisation du plan Free"
restrictions:
- "Les quotas sont partagés entre les bases du compte"
- "Le plan gratuit est présenté comme destiné à l’évaluation et aux petits projets"
- "Les sauvegardes quotidiennes et capacités supérieures sont associées aux plans payants"
alertes:
- type: usage
  niveau: important
  libelle: Quotas partagés entre les bases
  detail: Les opérations et le stockage du plan gratuit sont des allocations partagées entre les bases du compte.
- type: fonctionnel
  niveau: important
  libelle: Sauvegardes quotidiennes payantes
  detail: Les sauvegardes quotidiennes ne font pas partie du plan Free et nécessitent une offre supérieure.
usages: ["PostgreSQL", "Serverless", "Base de données", "Développement et test"]
url: https://www.prisma.io/postgres
documentation: https://www.prisma.io/docs/postgres
source: https://www.prisma.io/pricing
couleur: "#2D3748"
initiales: PP
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 936
verifieLe: 2026-08-24
verificationAutomatiqueLe: 2026-08-24
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
---

Prisma Postgres est un PostgreSQL managé conçu pour fonctionner naturellement avec Prisma ORM tout en restant accessible aux clients SQL. Son architecture serverless cherche à éliminer les cold starts ; le plan gratuit a récemment été porté à 50 bases, tout en gardant 500 Mo de stockage total et 100 000 opérations mensuelles.
