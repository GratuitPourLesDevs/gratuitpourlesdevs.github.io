# Comptes utilisateurs — mise en production

Le lancement du compte gratuit repose sur le Worker Cloudflare et la base D1 déjà utilisés par GratuitPourLesDevs. Le catalogue public reste inchangé : le compte ajoute uniquement de la mémorisation, de la veille et des limites freemium.

## 1. Appliquer la migration D1

```bash
npm run migrate:worker
```

La migration `0003_accounts.sql` crée les utilisateurs, sessions GPLD, favoris synchronisés, offres suivies, recherches/comparaisons sauvegardées, stack et mesure d’intérêt pour Pro.

## 2. Déployer le Worker

```bash
npm run test:worker
npm run deploy:oauth
```

Le même callback GitHub `/callback` est conservé. L’administration continue à demander `public_repo`, tandis que les comptes utilisateurs passent par `/account/auth` et ne demandent que `read:user user:email`. Le token GitHub utilisateur n’est jamais envoyé au site : le navigateur reçoit uniquement un jeton de session opaque propre à GPLD.

## 3. Digest hebdomadaire

Le cron est configuré le lundi à `07:00 UTC`. Sans fournisseur e-mail configuré, le digest reste visible dans **Mon espace** mais aucun e-mail n’est envoyé.

Pour activer l’envoi avec Resend :

```bash
npx wrangler secret put RESEND_API_KEY --config worker/wrangler.jsonc
npx wrangler secret put DIGEST_FROM_EMAIL --config worker/wrangler.jsonc
```

`DIGEST_FROM_EMAIL` doit contenir une adresse autorisée par le domaine vérifié chez le fournisseur, par exemple `GratuitPourLesDevs <veille@gratuitpourlesdevs.fr>`.

Le Worker n’envoie un message que lorsqu’au moins une offre suivie a un changement récent dans les données publiques de `/offres.json`.

## 4. Limites de lancement

Compte gratuit :

- favoris synchronisés illimités ;
- 5 offres suivies ;
- 3 recherches sauvegardées ;
- 3 comparaisons sauvegardées ;
- 1 stack (20 services maximum) ;
- digest hebdomadaire.

Les dépassements renvoient `409 / free_limit` et l’interface oriente vers le bloc **GPLD Pro** sans paiement.

## 5. Mesurer l’intérêt pour Pro

Le bouton « Je serais intéressé par Pro » alimente la table `pro_interest`.

Exemple de lecture :

```bash
npx wrangler d1 execute gratuitpourlesdevs-comparisons --remote --config worker/wrangler.jsonc --command "SELECT COUNT(*) AS utilisateurs_interesses, SUM(clicks) AS clics FROM pro_interest;"
```

Aucune facturation n’est branchée à ce stade. L’objectif est de mesurer l’usage des limites gratuites et l’intention Pro avant d’introduire Stripe ou un autre moyen de paiement.
