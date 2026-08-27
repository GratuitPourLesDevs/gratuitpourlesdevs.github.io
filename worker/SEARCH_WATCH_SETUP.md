# Recherches surveillées

Cette fonctionnalité transforme une recherche sauvegardée de l’Explorateur en règle de veille.

## Principe

Une recherche est stockée avec une représentation structurée de ses filtres (`filters_json`).
Lors de l’activation de la surveillance, le Worker calcule les offres qui correspondent déjà à la recherche et les enregistre dans `last_match_offer_ids`.

Cette première photographie est une **baseline** : elle ne produit aucune notification.

Lors des évaluations suivantes :

- une offre absente de la baseline qui correspond désormais à la recherche produit `MATCH_ADDED` ;
- une offre présente dans la baseline qui ne correspond plus produit `MATCH_REMOVED` ;
- une offre qui reste compatible mais subit un événement `critical` vérifié du Free Tier Radar produit `MATCH_CRITICAL_CHANGED`.

Les événements sont corrélés à `offer_change_events` lorsque le radar dispose d’un changement associé : quota réduit, carte bancaire devenue obligatoire, dépassement devenu facturable, fin de permanence, etc.

Le moteur de recherches surveillées **lit** les données du radar mais ne modifie jamais `offer_radar_state` ni `offer_change_events`.

## Modèle Free / Pro

Compte gratuit :

- 3 recherches sauvegardées maximum ;
- 1 recherche surveillée maximum ;
- fréquence hebdomadaire ;
- nouvelles correspondances, sorties de correspondance et changements critiques visibles dans l’activité du compte.

Compte Pro :

- limites de sauvegarde et de surveillance non imposées par ce module ;
- fréquence `immediate` disponible, évaluée après chaque scan du radar.

## Filtres structurés

La recherche ne dépend plus uniquement de son URL. Elle stocke notamment :

- ressource ;
- période ;
- portée ;
- politique de dépassement ;
- carte bancaire requise ou non ;
- permanence ;
- seuil minimal réservé aux extensions futures de l’Explorateur.

Les valeurs explicites « Toutes » / « Indifférent » sont conservées même lorsqu’elles sont vides afin qu’une recherche rouverte reproduise exactement son état sauvegardé.

## Planification

Le Worker garde les deux crons existants :

- `17 */6 * * *` : Free Tier Radar puis recherches Pro en fréquence immédiate ;
- `0 7 * * 1` : Free Tier Radar, toutes les recherches surveillées, puis digest hebdomadaire.

## API

- `GET /api/account/searches`
- `POST /api/account/searches`
- `DELETE /api/account/searches?id=<id>`
- `PUT /api/account/searches/watch`
- `GET /api/account/search-watch/events?limit=20`

Toutes ces routes exigent une session GPLD valide.

### Activer une surveillance

```json
{
  "id": 12,
  "active": true
}
```

Un compte gratuit est automatiquement forcé sur `weekly`.
L’activation initialise immédiatement la baseline de la recherche et ne produit aucun événement utilisateur.

### Désactiver une surveillance

```json
{
  "id": 12,
  "active": false
}
```

## Migration

Appliquer `worker/migrations/0010_search_watch.sql` avant de déployer le Worker contenant `search-watch.js`.

```bash
npm run migrate:worker
```

## Tests

```bash
npm run test:worker
npm run build
```

## Mise en production

Ne pas mettre cette fonctionnalité en production tant que la première baseline du Free Tier Radar (`0009`) n’a pas été validée avec `eventsCreated = 0`.

Après validation du radar, l’ordre le plus sûr est :

1. resynchroniser `feature/watch-saved-searches` avec `main` si nécessaire ;
2. exécuter `npm run test:worker` et `npm run build` sur la branche ;
3. appliquer `0010_search_watch.sql` sur D1 ;
4. déployer le Worker depuis la branche et vérifier les nouvelles API ;
5. vérifier que les anciennes fonctions compte/radar répondent toujours ;
6. fast-forward de `main` sur la branche afin que GitHub Pages publie le client ;
7. tester la sauvegarde puis l’activation d’une recherche depuis l’Explorateur ;
8. vérifier que l’activation crée une baseline mais aucun `search_watch_events` ;
9. contrôler les évaluations planifiées suivantes.

Cet ordre publie d’abord un backend rétrocompatible avec l’ancien frontend ; il évite la fenêtre inverse où un nouveau bouton appellerait une API pas encore migrée.
