# Gratuit pour les devs

Catalogue francophone d’offres SaaS, PaaS et IaaS disposant d’une formule gratuite utile aux développeurs, DevOps et Infradev.

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
