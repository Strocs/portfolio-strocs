/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  tailwindConfig: './tailwind.config.mjs',
  trailingComma: 'es5',
  semi: false,
  singleQuote: true,
  bracketSameLine: true,
  astroAllowShorthand: true,
  jsxSingleQuote: true,
}
