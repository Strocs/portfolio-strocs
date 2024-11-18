import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'

import vercel from '@astrojs/vercel/static'

import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  site: 'https://stocs.dev',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    react(),
  ],
  output: 'static',
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
})

