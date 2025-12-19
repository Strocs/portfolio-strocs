# AGENTS.md

## Commands

- `pnpm dev` - Start development server
- `pnpm build` - Type check (`astro check`) and build for production
- `pnpm preview` - Preview production build locally
- No test suite configured

## Code Style (Prettier)

- No semicolons, single quotes, trailing commas (es5)
- JSX uses single quotes, brackets on same line
- Run `pnpm prettier --write .` to format

## TypeScript

- Use `@/*` path alias for src imports (e.g., `@/features/i18n/`)
- Explicit return types on async functions: `async (): Promise<Type[]> =>`
- Define `interface Props` for component props, `interface {Name}Props` for functions
- Avoid `any` - use proper types, `unknown`, or infer from zod schemas

## Conventions

- Feature-based structure: `src/features/{feature}/{components,utils,types}/`
- Async data fetching: wrap in try/catch, log errors, return `[]` on failure
- i18n: all user-facing strings in `src/features/i18n/{en,es}.json`
- Components: `.astro` preferred, `.tsx` only when React interactivity is needed
- SVG icons: import with `?raw` suffix for inline rendering
- Accessibility: use semantic HTML, ARIA labels, keyboard navigation
