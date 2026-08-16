# Gratuit pour les devs

Catalogue francophone de services cloud, API et outils pour développeurs réellement utilisables gratuitement, avec quotas, restrictions et conditions vérifiés.

## Développement

```sh
npm install
npm run dev
```

Le site est généré avec Astro et publié sur GitHub Pages. Les offres sont stockées dans `src/content/offres` et seront administrables depuis `/admin` après déploiement du service OAuth GitHub.

Le proxy OAuth destiné à Decap CMS se trouve dans `worker/`. Son Client ID public est configuré dans `worker/wrangler.jsonc`. Ses secrets Cloudflare, `GITHUB_CLIENT_SECRET` et `STATE_SECRET`, ne doivent jamais être ajoutés au dépôt.

## Vérifications

```sh
npm run check
npm run build
npm run test:oauth
```
