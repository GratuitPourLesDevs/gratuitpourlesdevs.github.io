import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://gratuitpourlesdevs.fr',
  integrations: [sitemap()],
  output: 'static',
});
