---
nom: "BackupDrill"
accroche: "Sauvegardes Supabase vers votre propre bucket avec test réel de restauration."
type: SaaS
categorie: services-donnees-manages
formule: "Free : 1 projet, sauvegarde hebdomadaire et un restore drill sur la première sauvegarde"
inclus:
- "1 projet Supabase"
- "Sauvegardes hebdomadaires"
- "Un test de restauration sur la première sauvegarde"
- "Historique de 3 snapshots dans la console"
- "Sauvegarde vers votre propre bucket S3, R2 ou B2"
- "Base PostgreSQL et fichiers Storage lorsque les clés S3 sont configurées"
- "Essai initial de 30 jours avec les fonctions complètes"
conditions:
- "Création d’un compte BackupDrill"
- "Aucune carte bancaire requise"
- "Fourniture d’un bucket objet appartenant à l’utilisateur"
restrictions:
- "Après l’essai de 30 jours, un compte non abonné bascule automatiquement sur Free"
- "Le plan gratuit n’effectue qu’un restore drill, pas des drills récurrents"
- "Les objets stockés dans votre bucket peuvent générer des coûts chez votre fournisseur de stockage"
alertes: []
usages: ["Sauvegarde", "PostgreSQL", "Stockage objet", "Développement et test"]
url: https://backupdrill.com/
documentation: https://backupdrill.com/docs/quickstart
source: https://backupdrill.com/
couleur: "#1E293B"
initiales: BD
carteRequise: false
depassementFacture: false
permanent: true
statut: active
vedette: false
ordre: 924
verifieLe: '2026-08-21'
verificationAutomatiqueLe: '2026-08-21'
verificationNote: "La page officielle confirme un plan Free à 0 $ avec 1 projet, des sauvegardes hebdomadaires, 3 snapshots dans la console et un restore drill sur la première sauvegarde. Le compte commence par 30 jours d’essai complet sans carte puis revient sur Free."
---

BackupDrill vise un point souvent oublié des sauvegardes : vérifier qu’elles restaurent réellement. Le service exporte les données Supabase vers un bucket S3-compatible que vous contrôlez et peut inclure les fichiers Storage ; le plan gratuit couvre un projet avec une sauvegarde hebdomadaire et un premier test de restauration.
