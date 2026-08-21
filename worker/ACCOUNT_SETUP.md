# Comptes utilisateurs — mise en production

Le lancement du compte gratuit repose sur le Worker Cloudflare et la base D1 déjà utilisés par GratuitPourLesDevs. Le catalogue public reste inchangé : le compte ajoute uniquement de la mémorisation, de la veille et des limites freemium.

## 1. Créer un OAuth GitHub dédié aux utilisateurs

Ne réutilisez pas l’application OAuth de l’administration. Créez une seconde **GitHub OAuth App** dédiée au compte public, avec comme callback :

```text
https://gratuitpourlesdevs-oauth.gratuitpourlesdevsallianciasolutions.workers.dev/callback
```

Puis enregistrez ses identifiants dans les secrets du Worker :

```bash
npx wrangler secret put ACCOUNT_GITHUB_CLIENT_ID --config worker/wrangler.jsonc
npx wrangler secret put ACCOUNT_GITHUB_CLIENT_SECRET --config worker/wrangler.jsonc
```

L’administration conserve ses variables `GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET` et son scope `public_repo`. Le compte public utilise uniquement le couple `ACCOUNT_GITHUB_*` avec les scopes `read:user user:email`.

## 2. Appliquer les migrations D1

```bash
npm run migrate:worker
```

`0003_accounts.sql` crée les utilisateurs, sessions GPLD, favoris synchronisés, offres suivies, recherches/comparaisons sauvegardées, stack et mesure d’intérêt pour Pro. `0004_digest_opt_in.sql` force le digest e-mail à être désactivé à la création du compte : l’utilisateur doit l’activer explicitement depuis **Mon espace**.

## 3. Tester et déployer le Worker

```bash
npm run test:worker
npm run deploy:oauth
```

Le même chemin de callback `/callback` est conservé, mais les deux flux OAuth restent isolés par leurs cookies et leurs identifiants GitHub. Le token GitHub utilisateur n’est jamais envoyé au site : après lecture du profil et de l’adresse e-mail vérifiée, le navigateur reçoit uniquement un jeton de session opaque propre à GPLD.

## 4. Digest hebdomadaire

Le cron est configuré le lundi à `07:00 UTC` (09:00 en France métropolitaine pendant l’heure d’été). Le digest e-mail est **opt-in**. Sans fournisseur e-mail configuré, les changements restent visibles dans **Mon espace** mais aucun e-mail n’est envoyé.

Pour activer l’envoi avec Resend :

```bash
npx wrangler secret put RESEND_API_KEY --config worker/wrangler.jsonc
npx wrangler secret put DIGEST_FROM_EMAIL --config worker/wrangler.jsonc
```

`DIGEST_FROM_EMAIL` doit contenir une adresse autorisée par le domaine vérifié chez le fournisseur, par exemple `GratuitPourLesDevs <veille@gratuitpourlesdevs.fr>`.

Le Worker n’envoie un message que si le digest est activé et qu’au moins une offre suivie a un changement récent dans les données publiques de `/offres.json`.

## 5. Limites de lancement

Compte gratuit :

- favoris synchronisés illimités ;
- 5 offres suivies ;
- 3 recherches sauvegardées ;
- 3 comparaisons sauvegardées ;
- 1 stack (10 offres maximum) ;
- digest hebdomadaire activable.

Les dépassements renvoient `409 / free_limit` et l’interface oriente vers le bloc **GPLD Pro** sans paiement.

GPLD Pro lève ces deux limites : le nombre de stacks et le nombre d’offres qu’elles contiennent sont illimités.

## 6. Confidentialité et suppression

La page publique `/confidentialite/` décrit les données utilisées par le compte, l’OAuth GitHub, les prestataires techniques et les durées de conservation. Un utilisateur connecté peut supprimer son compte depuis **Mon espace** ; l’action efface côté D1 ses favoris, suivis, sauvegardes, stack, sessions et mesure d’intérêt Pro.

## 7. Mesurer l’intérêt pour Pro

Le bouton « Je serais intéressé par Pro » alimente la table `pro_interest`.

Exemple de lecture :

```bash
npx wrangler d1 execute gratuitpourlesdevs-comparisons --remote --config worker/wrangler.jsonc --command "SELECT COUNT(*) AS utilisateurs_interesses, SUM(clicks) AS clics FROM pro_interest;"
```

Aucune facturation n’est branchée à ce stade. L’objectif est de mesurer l’usage des limites gratuites et l’intention Pro avant d’introduire Stripe ou un autre moyen de paiement.
