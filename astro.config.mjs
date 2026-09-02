import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://gratuitpourlesdevs.fr',
  integrations: [
    sitemap({
      filter: (page) => !new URL(page).pathname.startsWith('/comparatifs/'),
    }),
  ],
  redirects: {
    '/comparatifs': '/guides',
    '/catégories': '/categories',
    '/catégories/[slug]': '/categories/[slug]',
  },
  output: 'static',
});
