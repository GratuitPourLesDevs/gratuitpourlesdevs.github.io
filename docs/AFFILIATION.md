# Module affiliation

## Principe

Le module sépare strictement l'éditorial et le commercial. Le Score GratuitPourLesDevs, l'ordre des offres, les quotas affichés et les recommandations éditoriales n'utilisent jamais la commission d'un partenaire.

## Modèle de données

- `src/content/affiliations/` : programme, rémunération, réseau, liens, offres liées, statut et vérification.
- `src/content/campagnes/` : message public, offres, catégories, placements, dates et priorité d'affichage.
- Une campagne n'est rendue publiquement que si la campagne est `active`, le programme est `active`, la fenêtre de dates est valide et une véritable URL affiliée est disponible.
- Sans `urlAffiliee`, `liensOffres` ou `urlDestination`, aucun lien commercial public n'est généré.

## Activation d'un programme

1. Créer ou suivre le programme dans Decap CMS et conserver un statut `candidature_*` tant qu'il n'est pas accepté.
2. Après acceptation, renseigner `urlAffiliee` ou un/des `liensOffres` avec les URL réellement fournies par le réseau partenaire.
3. Passer le programme à `active`.
4. Vérifier le texte, les catégories et les placements de la campagne associée.
5. Passer la campagne à `active`.
6. Contrôler `/affiliate-campaigns.json` : seules les campagnes réellement éligibles doivent y apparaître.

## Tracking GPLD

Le tracking interne sert à mesurer l'efficacité des placements GPLD :

- événements `impression` et `click` uniquement ;
- aucun cookie publicitaire GPLD n'est nécessaire ;
- aucune adresse IP ni User-Agent n'est stocké tel quel ;
- une empreinte SHA-256 signée avec `ANALYTICS_SECRET` sert uniquement à dédupliquer les événements sur une fenêtre courte ;
- les événements bruts sont supprimés après 90 jours ;
- les conversions et commissions peuvent être saisies depuis le dashboard ou importées ultérieurement via l'API administrateur.

Le fournisseur ou son réseau d'affiliation peut appliquer ses propres règles d'attribution après le clic sortant.

## Déploiement Worker / D1

Créer une valeur longue, aléatoire et propre à cet usage. Ne jamais la committer.

```bash
npx wrangler secret put ANALYTICS_SECRET --config worker/wrangler.jsonc
npm run migrate:worker
npm run deploy:oauth
```

La migration `0006_affiliate_tracking.sql` crée les tables de tracking et de conversions dans la base D1 déjà utilisée par GPLD.

## Validation

```bash
npm run build
npm run test:worker
```

## Administration

- Programmes : `/admin/#/collections/affiliations`
- Campagnes : `/admin/#/collections/campagnes`
- Dashboard de performance : `/admin/affiliation/`

Le dashboard réutilise l'autorisation GitHub administrateur. Les endpoints de statistiques et de conversion vérifient que le login appartient à `ALLOWED_GITHUB_LOGINS`.

## Placements publics

Le composant `public/affiliate-enhancement.js` peut rendre une sélection partenaire sur :

- l'accueil ;
- une catégorie du catalogue ;
- une fiche offre ;
- un Guide ;
- un comparatif ;
- un bloc de découverte des autres offres du même fournisseur.

Le lien officiel neutre d'une fiche offre reste distinct du CTA affilié.
