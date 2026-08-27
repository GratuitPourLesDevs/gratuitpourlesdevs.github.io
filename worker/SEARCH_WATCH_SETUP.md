# Recherches surveillées

Cette fonctionnalité transforme une recherche sauvegardée de l’Explorateur en règle de veille.

## Principe

Une recherche est stockée avec une représentation structurée de ses filtres (`filters_json`).
Lors de l’activation de la surveillance, le Worker calcule les offres qui correspondent déjà à la recherche et les enregistre dans `last_match_offer_ids`.

Cette première photographie est une **baseline** : elle ne produit aucune notification.

Lors des évaluations suivantes :

- une offre absente de la baseline qui correspond désormais à la recherche produit `MATCH_ADDED` ;
- une offre présente dans la baseline qui ne correspond plus produit `MATCH_REMOVED`.

Lorsque cela est possible, l’événement est corrélé au dernier événement du Free Tier Radar (`offer_change_events`) afin de conserver le contexte : quota modifié, carte bancaire devenue obligatoire, offre retirée, etc.

## Modèle Free / Pro

Compte gratuit :

- 3 recherches sauvegardées maximum ;
- 1 recherche surveillée maximum ;
- fréquence hebdomadaire.

Compte Pro :

- limites de sauvegarde et de surveillance non imposées par ce module ;
- fréquence `immediate` disponible, évaluée après chaque scan du radar.

## Planification

Le Worker garde les deux crons existants :

- `17 */6 * * *` : Free Tier Radar puis recherches Pro en fréquence immédiate ;
- `0 7 * * 1` : Free Tier Radar, toutes les recherches surveillées, puis digest hebdomadaire.

Le moteur de recherches surveillées ne modifie jamais `offer_radar_state` ni `offer_change_events`.

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

Ne pas fusionner cette branche tant que la première baseline du Free Tier Radar (`0009`) n’a pas été validée avec `eventsCreated = 0`.

Après validation du radar :

1. resynchroniser la branche avec `main` si nécessaire ;
2. exécuter les tests et le build ;
3. fusionner ;
4. laisser GitHub Pages publier le client ;
5. appliquer `0010_search_watch.sql` ;
6. déployer le Worker ;
7. tester l’activation d’une recherche depuis l’Explorateur ;
8. vérifier que son activation ne crée aucun `search_watch_events` ;
9. contrôler ensuite les évaluations planifiées.
