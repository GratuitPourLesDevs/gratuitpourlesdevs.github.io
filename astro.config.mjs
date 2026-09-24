import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { getIndexabilitySnapshot } from './src/lib/indexability.mjs';
import { INDEXABLE_DOC_SLUGS } from './src/lib/editorial-readiness.mjs';

const { obsoleteOfferPaths, nonEditorialOfferPaths, thinCategoryPaths, thinUsagePaths } = getIndexabilitySnapshot();
const excludedPaths = new Set([
  '/archives/',
  '/categories/',
  '/comparaisons/',
  '/compte/',
  '/contact/',
  '/docs/',
  '/evolutions/',
  '/usages/',
  ...obsoleteOfferPaths,
  ...nonEditorialOfferPaths,
  ...thinCategoryPaths,
  ...thinUsagePaths,
]);

export default defineConfig({
  site: 'https://gratuitpourlesdevs.fr',
  integrations: [
    sitemap({
      filter: (page) => {
        const pathname = decodeURIComponent(new URL(page).pathname);
        const docMatch = pathname.match(/^\/docs\/([^/]+)\/$/);
        return !pathname.includes(' ')
          && !pathname.startsWith('/comparatifs/')
          && !pathname.startsWith('/categories/')
          && !pathname.startsWith('/go/')
          && !pathname.startsWith('/usages/')
          && (!docMatch || INDEXABLE_DOC_SLUGS.has(docMatch[1]))
          && !excludedPaths.has(pathname);
      },
    }),
  ],
  redirects: {
    '/comparatifs': '/guides',
    '/catégories': '/categories',
    '/catégories/[slug]': '/categories/[slug]',
  },
  output: 'static',
});
