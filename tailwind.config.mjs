/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      animation: {
        'bg-pulse': 'bg-pulse 2s ease-in-out infinite alternate'
      },
      keyframes: {
        'bg-pulse': { to: { top: '-40px' } }
      }
    }
  },
  plugins: []
}
