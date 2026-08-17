---
nom: Neon
accroche: PostgreSQL serverless avec branchement
type: PaaS
categorie: services-donnees-manages
formule: 100 projets, 100 CU-h et 0,5 Go de stockage par projet
inclus:
  - Jusqu’à 100 projets
  - 100 CU-heures de calcul par mois et par projet
  - 0,5 Go de stockage par projet
  - Jusqu’à 10 branches simultanées par projet
  - Calcul jusqu’à 2 CU soit environ 8 Go de mémoire
  - Mise à l’échelle automatique
  - Mise en veille après 5 minutes d’inactivité
  - Restauration instantanée sur 6 heures ou 1 Go de modifications
  - Réplicas de lecture
  - 5 Go de transfert réseau public inclus
  - Neon Auth jusqu’à 60 000 utilisateurs actifs mensuels
  - Membres d’équipe illimités
  - Pool de connexions PgBouncer intégré
conditions:
  - Compte Neon gratuit
  - Aucune carte bancaire
restrictions:
  - Quotas de calcul et de stockage appliqués séparément à chaque projet
  - Calcul limité à 100 CU-heures par mois et par projet
  - Stockage limité à 0,5 Go par projet
  - Calcul limité à 2 CU soit environ 8 Go de mémoire
  - Mise en veille automatique et non configurable après 5 minutes sur le plan gratuit
  - Fenêtre de restauration limitée à 6 heures ou 1 Go de modifications selon la première limite atteinte
  - Transfert réseau public limité à 5 Go inclus
  - Historique des métriques et journaux limité à un jour dans la console
  - Réseau privé règles IP avancées SLA et support professionnel réservés aux offres payantes
usages:
  - Base de données
  - PostgreSQL
  - Serverless
  - Environnements de prévisualisation
  - Développement et test
url: https://neon.com/
documentation: https://neon.com/docs/introduction
source: https://neon.com/pricing
couleur: "#00bfa5"
initiales: NE
carteRequise: false
permanent: true
statut: "active"
vedette: false
ordre: 3
verifieLe: 2026-08-17
verificationAutomatiqueLe: 2026-08-17
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
historique:
  - date: 2026-08-14
    type: correction
    titre: Périmètre du plan gratuit précisé
    resume: Les quotas principaux étaient déjà présents. La vérification a documenté leur portée par projet et les ressources gratuites complémentaires.
    changements:
      - champ: Calcul
        avant: 100 CU-h mensuelles
        apres: 100 CU-heures par mois et par projet
      - champ: Branches
        avant: Branches PostgreSQL, sans limite indiquée
        apres: Jusqu’à 10 branches simultanées par projet
      - champ: Capacité de calcul
        avant: Non documentée
        apres: Jusqu’à 2 CU, soit environ 8 Go de mémoire
      - champ: Transfert réseau public
        avant: Non documenté
        apres: 5 Go inclus
      - champ: Restauration instantanée
        avant: Jusqu’à 6 heures
        apres: 6 heures ou 1 Go de modifications, selon la première limite atteinte
    source: https://neon.com/pricing
---

Neon fournit PostgreSQL sous forme serverless avec séparation du calcul et du stockage. Chaque projet gratuit dispose de son propre quota de calcul et de stockage, se met automatiquement en veille après cinq minutes d’inactivité et peut être cloné en branches pour les développements et prévisualisations. La restauration instantanée remonte jusqu’à six heures, dans la limite d’un gigaoctet de modifications.
