import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { getIndexabilitySnapshot } from './src/lib/indexability.mjs';

const { obsoleteOfferPaths, thinCategoryPaths, thinUsagePaths } = getIndexabilitySnapshot();
const excludedPaths = new Set([
  '/archives/',
  '/categories/',
  '/comparaisons/',
  '/usages/',
  ...obsoleteOfferPaths,
  ...thinCategoryPaths,
  ...thinUsagePaths,
]);

export default defineConfig({
  site: 'https://gratuitpourlesdevs.fr',
  integrations: [
    sitemap({
      filter: (page) => {
        const pathname = decodeURIComponent(new URL(page).pathname);
        return !pathname.includes(' ') && !pathname.startsWith('/comparatifs/') && !excludedPaths.has(pathname);
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
