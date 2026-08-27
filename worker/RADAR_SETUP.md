# Free Tier Radar

Le radar transforme les données publiées dans `/radar.json` en un journal métier append-only des changements de free tiers.

## Architecture

- `/radar.json` : projection stable et dédiée des champs surveillés, générée par Astro sans alourdir `/offres.json` pour les utilisateurs du site.
- `offer_radar_state` : dernier snapshot observé pour chaque offre. Cette table est mutable et sert uniquement à comparer deux états.
- `offer_change_events` : journal métier append-only. Les triggers SQL interdisent `UPDATE` et `DELETE`.
- `offer_radar_runs` : suivi opérationnel de chaque scan.
- `worker/radar.js` : normalisation, comparaison, classification, persistance et API de lecture.
- `worker/radar-admin.js` : supervision et lancement manuel protégés par l'autorisation GitHub de la console admin.
- `/admin/radar/` : dashboard de supervision du radar.

Le premier scan complet crée uniquement la baseline. Il ne fabrique donc pas de centaines de faux événements à partir du catalogue existant. Tant qu'aucun scan complet n'a réussi, le radar reste volontairement en mode baseline, ce qui rend l'initialisation résistante à une interruption en cours de route.

## Changements suivis

Le radar ignore les changements purement techniques comme une nouvelle date de vérification. Il suit notamment :

- nouvelle offre ajoutée après l'initialisation ;
- carte bancaire requise / retirée ;
- dépassement devenu facturable / non facturable ;
- permanence du free tier ;
- statut de l'offre et disparition du free tier ;
- formule gratuite ;
- conditions ;
- restrictions ;
- alertes ;
- ajout, retrait et modification de quotas ;
- diminution / augmentation de quota ;
- changement du comportement en cas de dépassement.

Les événements utilisent trois niveaux : `info`, `important`, `critical`.

## Planification

Le Worker lance le radar toutes les six heures :

```text
17 */6 * * *
```

Le lundi à `07:00 UTC`, un scan est également exécuté juste avant le digest hebdomadaire.

Une offre totalement inchangée ne provoque aucune écriture dans `offer_radar_state`; le dernier scan opérationnel est suivi dans `offer_radar_runs`.

## API de lecture

### Derniers événements

```http
GET /api/radar/events
```

Filtres facultatifs :

- `offer_id=vercel`
- `severity=critical`
- `event_type=QUOTA_DECREASED`
- `since=2026-08-27T00:00:00Z` ou timestamp Unix en secondes
- `limit=30` (maximum 100)

### État du radar

```http
GET /api/radar/status
```

Retourne le dernier scan et les compteurs globaux du journal.

## Dashboard d'administration

Le dashboard est disponible dans :

```text
/admin/radar/
```

Il affiche notamment :

- santé du dernier passage ;
- prochaines exécutions planifiées ;
- historique des runs, durées et erreurs ;
- nombre d'offres parcourues ;
- couverture et dates de la baseline ;
- nombre d'événements sur 24 h et 7 jours ;
- événements critiques et non vérifiés ;
- répartition par sévérité et principaux types d'événements ;
- derniers changements détectés.

Les actions d'administration utilisent le même jeton GitHub que la page Monétisation et vérifient `ALLOWED_GITHUB_LOGINS` côté Worker.

### Données du dashboard

```http
GET /api/radar/admin/dashboard
Authorization: Bearer <github-token>
```

### Lancement manuel

```http
POST /api/radar/admin/run
Authorization: Bearer <github-token>
```

Le lancement manuel appelle exactement `runFreeTierRadar()` contre la D1 configurée. Il ne réinitialise pas la baseline et ne supprime aucun événement. Aucun endpoint de reset ou de purge n'est exposé.

## Mise en production

Ordre recommandé :

1. Fusionner/déployer le site afin que `/radar.json` soit disponible publiquement.
2. Appliquer les migrations D1 :

```bash
npm run migrate:worker
```

3. Tester le Worker :

```bash
npm run test:worker
```

4. Déployer le Worker :

```bash
npm run deploy:oauth
```

5. Au premier cron, `/api/radar/status` doit indiquer des `baselinesCreated` mais `eventsCreated: 0`.
6. Après une vraie modification d'offre, vérifier `/api/radar/events?offer_id=<slug>` et `/api/radar/status`.
7. Pour le dashboard admin, déployer d'abord le Worker puis publier le site afin que les routes `/api/radar/admin/*` existent avant l'arrivée de `/admin/radar/`.

## Garanties de conception

- Le journal métier est append-only au niveau SQL.
- Un snapshot initial ne crée aucun faux changement.
- Une initialisation interrompue ne transforme pas le reste du catalogue en nouvelles offres.
- Les données sont normalisées avant comparaison afin d'éviter les événements dus à l'ordre des tableaux ou des clés JSON.
- Les fingerprints rendent une transition idempotente en cas de nouvelle tentative avant mise à jour du snapshot.
- Les offres obsolètes restent présentes dans `/radar.json` afin qu'un passage `active -> obsolete` soit enregistré comme `FREE_TIER_REMOVED`.
- Une offre supprimée entièrement du catalogue produit `OFFER_REMOVED_FROM_CATALOGUE` au lieu de disparaître silencieusement.
- Une nouvelle offre ajoutée après la baseline produit `OFFER_ADDED`.
- Les routes d'administration sont authentifiées côté Worker ; les routes publiques du radar restent uniquement en lecture.
