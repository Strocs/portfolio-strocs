### Updated TODO List (Based on Code Analysis)

**Tier 1: Core Functionality & Stability**

- **1. Data Management Refactor:**
  - [x] Create a new content collection for your job experience (e.g., `experience`).
  - [x] Migrate the job data from `en.json` and `es.json` to the new collection.
  - [x] Update the `JobsCard.astro` component to fetch data from the new collection.
  - [x] Consolidate the content schemas into a single `src/content.config.ts` file.
  - [x] Fix StackItem SVG rendering (refactored to use raw SVG imports)
  - [x] Projects already use content collections (no hardcoded data)
  - [x] Add error handling to `getPersonalProjects` and `getExperienceProjects`
- **2. TypeScript & Type Safety:**
  - [x] Remove `any` types from Badge component
  - [x] Add proper interfaces to `getPersonalProjects` (lang type, return type)
  - [x] Add typed exports to i18n (`SupportedLocale`, `I18NData`)
  - [x] Add proper types to contentLoader controller
  - [x] Fix ProjectTechList to handle optional stack prop
  - [ ] Add type validation for external data sources (when CMS is implemented)
- **3. Accessibility & SEO:**
  - [x] Use Astro's `<Picture />` component for optimized images
  - [x] Add viewport meta tag and canonical URL
  - [x] Add robots meta tag for search engine indexing
  - [x] Add proper ARIA labels to icon-only buttons/links
  - [x] Fix heading hierarchy (h1 → h2 → h3 → h4)
  - [x] Add section landmarks with `aria-labelledby`
  - [x] Add skip-to-content link for keyboard users
  - [x] Make horizontal scroll keyboard accessible (arrow keys)
  - [x] Add `target="_blank"` with `rel="noopener noreferrer"` for external links
  - [x] Add proper alt text to images from i18n
  - [x] Remove harmful `aria-hidden="true"` from main content
  - [ ] Implement responsive design system (planned for future release)

**Tier 2: Feature Implementation**

- **4. Blog Functionality:**
  - [ ] Create the UI for the blog list page (`/blog`) and individual post pages (`/blog/[slug]`).
  - [ ] Add a "tags" page to filter blog posts by tag (`/blog/tag/[tag]`).
  - [ ] Write your first blog post.
  - [ ] Add blog search functionality
- **5. Enhanced UI/UX:**
  - [ ] Implement the active section navigation with GSAP or the Intersection Observer API.
  - [ ] Add subtle "on-scroll" animations to the sections (About, Experience, etc.) to make the portfolio more dynamic.
  - [ ] Create design token system for consistent styling
  - [ ] Add loading states and skeleton screens
- **6. Search & Discovery:**
  - [ ] Implement search functionality for projects and blog posts
  - [ ] Add filtering by technology stack
  - [ ] Create tag-based navigation system

**Tier 3: Advanced Features & Optimization**

- **7. Performance Optimization:**
  - [ ] Implement lazy loading for non-critical sections
  - [ ] Optimize GSAP bundle size (tree-shake unused plugins)
  - [ ] Add service worker for offline functionality
  - [ ] Configure a CDN (like Cloudflare) to serve your assets for faster delivery.
- **8. Code Quality & Maintenance:**
  - [ ] Add comprehensive error boundaries
  - [ ] Implement proper logging and monitoring
  - [ ] Add unit and integration tests
  - [ ] Refactor `AutoSlides.astro` to remove the duplicated code.
  - [ ] Move the `noise` background image to your local assets or a configuration variable.
  - [ ] Create environment-specific configurations
- **9. Advanced Integrations:**
  - [ ] Research and choose a headless CMS (Payload CMS, Strapi, Sanity, etc.).
  - [ ] Set up the CMS and create the necessary content models (projects, blog posts, experience).
  - [ ] Migrate your existing content to the CMS.
  - [ ] Update your Astro components to fetch data from the CMS API.
  - [ ] Add analytics and performance monitoring
  - [ ] Implement contact form with email service

**Technical Debt Items**

- [ ] Remove hardcoded magic numbers (628px grid, animation values, etc.)
- [ ] Create proper configuration files for all settings
- [ ] Add input validation for all external data
- [ ] Implement proper SEO meta tag generation (Open Graph, Twitter Cards)
- [ ] Add security headers and CSRF protection

**Future Enhancements**

- [ ] Responsive design system (mobile-first approach with Tailwind breakpoints)
