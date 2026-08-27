# Free Tier Radar

Le radar transforme les données publiées dans `/offres.json` en un journal métier append-only des changements de free tiers.

## Architecture

- `radarCatalogue` : projection stable des champs surveillés, générée par Astro dans `/offres.json`.
- `offer_radar_state` : dernier snapshot observé pour chaque offre. Cette table est mutable et sert uniquement à comparer deux états.
- `offer_change_events` : journal métier append-only. Les triggers SQL interdisent `UPDATE` et `DELETE`.
- `offer_radar_runs` : suivi opérationnel de chaque scan.
- `worker/radar.js` : normalisation, comparaison, classification, persistance et API de lecture.

Le premier scan crée uniquement la baseline. Il ne fabrique donc pas de centaines de faux événements à partir du catalogue existant.

## Changements suivis

Le radar ignore les changements purement techniques comme une nouvelle date de vérification. Il suit notamment :

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

## Mise en production

Ordre recommandé :

1. Fusionner/déployer le site avec le nouveau `radarCatalogue` dans `/offres.json`.
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

5. Attendre le premier scan ou déclencher temporairement un cron de test dans un environnement de préproduction. Le premier scan doit indiquer des `baselinesCreated` mais `eventsCreated: 0`.
6. Après une vraie modification d'offre, vérifier `/api/radar/events?offer_id=<slug>` et `/api/radar/status`.

## Garanties de conception

- Le journal métier est append-only au niveau SQL.
- Un snapshot initial ne crée aucun faux changement.
- Les données sont normalisées avant comparaison afin d'éviter les événements dus à l'ordre des tableaux ou des clés JSON.
- Les fingerprints rendent une transition idempotente en cas de nouvelle tentative avant mise à jour du snapshot.
- Les offres obsolètes restent présentes dans le flux radar afin qu'un passage `active -> obsolete` soit enregistré comme `FREE_TIER_REMOVED`.
- Une offre supprimée entièrement du catalogue produit `OFFER_REMOVED_FROM_CATALOGUE` au lieu de disparaître silencieusement.
