// @ts-check
import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel'
import sitemap from '@astrojs/sitemap'
import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap(), react()],
  experimental: {
    svg: true,
  },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
  },
  site: 'https://strocs.dev/',
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
})
