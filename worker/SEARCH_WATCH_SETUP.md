# Recherches surveillées

Cette fonctionnalité transforme une recherche sauvegardée de l’Explorateur en règle de veille.

## Principe

Une recherche est stockée avec une représentation structurée de ses filtres (`filters_json`). Lors de l’activation de la surveillance, le Worker calcule les offres qui correspondent déjà à la recherche et les enregistre dans `last_match_offer_ids`.

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

Chaque invocation Search Watch crée désormais une ligne dans `search_watch_runs`, y compris lorsqu’aucune recherche n’est à évaluer. Cela permet de distinguer un passage réussi sans événement d’une absence d’exécution.

## API utilisateur

- `GET /api/account/searches`
- `POST /api/account/searches`
- `DELETE /api/account/searches?id=<id>`
- `PUT /api/account/searches/watch`
- `GET /api/account/search-watch/events?limit=20`

Toutes ces routes exigent une session GPLD valide.

`GET /api/account/searches` expose également `matchCount`, calculé à partir de la dernière baseline de correspondances, afin d’afficher dans Mon espace le nombre d’offres actuellement compatibles avec chaque recherche surveillée.

### Activer une surveillance

```json
{
  "id": 12,
  "active": true
}
```

Un compte gratuit est automatiquement forcé sur `weekly`. L’activation initialise immédiatement la baseline de la recherche et ne produit aucun événement utilisateur.

### Désactiver une surveillance

```json
{
  "id": 12,
  "active": false
}
```

## Dashboard d’administration

Le dashboard est disponible dans :

```text
/admin/search-watch/
```

Il affiche notamment :

- santé de la dernière exécution ;
- nombre de recherches sauvegardées et surveillées ;
- utilisateurs utilisant la veille ;
- répartition Free / Pro et hebdomadaire / immédiate ;
- recherches en retard selon leur fréquence ;
- nombre actuel de correspondances par recherche ;
- historique des runs, durée, déclencheur, portée et erreurs ;
- événements sur 24 h / 7 jours et événements critiques ;
- derniers `MATCH_ADDED`, `MATCH_REMOVED` et `MATCH_CRITICAL_CHANGED`.

Les routes admin utilisent la même autorisation GitHub que le dashboard Radar et vérifient `ALLOWED_GITHUB_LOGINS` côté Worker :

```http
GET /api/search-watch/admin/dashboard
Authorization: Bearer <github-token>
```

```http
POST /api/search-watch/admin/run
Authorization: Bearer <github-token>
```

Le lancement manuel évalue toutes les recherches surveillées actives. Il ne supprime aucun événement et ne modifie aucun filtre utilisateur.

## Mon espace

`/compte/` présente désormais une zone dédiée aux recherches surveillées :

- quota Free / Pro ;
- fréquence ;
- nombre actuel de correspondances ;
- dernière évaluation ;
- lien vers les résultats ;
- mise en pause / réactivation ;
- activité récente des recherches surveillées.

Le discours Pro indique explicitement que le compte gratuit inclut déjà une recherche surveillée hebdomadaire ; Pro étend les limites et la fréquence.

## Migrations

V1 :

```text
worker/migrations/0010_search_watch.sql
```

V1.1 — historique opérationnel :

```text
worker/migrations/0011_search_watch_runs.sql
```

`0011` doit être appliquée **avant** le Worker V1.1, car chaque exécution du moteur écrit son résultat dans `search_watch_runs`.

## Tests

```bash
npm run test:worker
npm run build
```

## Mise en production V1.1

Ordre sûr :

1. exécuter `npm run test:worker` et `npm run build` sur `feature/search-watch-admin-v11` ;
2. appliquer `0011_search_watch_runs.sql` sur la D1 distante ;
3. déployer le Worker depuis la branche ;
4. vérifier que `/api/search-watch/admin/dashboard` retourne `401` sans authentification ;
5. vérifier `/api/radar/status`, `/api/radar/admin/dashboard` et `/api/account/searches` pour les non-régressions ;
6. se connecter à `/admin/search-watch/` depuis une prévisualisation locale si nécessaire et lancer une évaluation manuelle ;
7. fusionner la PR vers `main` pour publier l’interface ;
8. tester `/compte/` avec une recherche surveillée et vérifier `matchCount`, dernière évaluation, activité et mise en pause ;
9. vérifier au passage cron suivant qu’un nouveau `search_watch_runs` est enregistré.

Cet ordre publie d’abord un backend et un schéma D1 rétrocompatibles avec l’ancien frontend, puis seulement l’interface GitHub Pages.
