### Updated TODO List (Based on Code Analysis)

**🚨 CRITICAL FIXES (Do These First)**

- **1. Fix Broken I18N Implementation:**
  - [ ] **URGENT**: Fix `getI18N` function in `src/i18n/index.ts` - currently tries to fetch from non-existent 'lang' collection
  - [ ] Update function to properly read from JSON files instead of collections
  - [ ] Add error handling for i18n loading failures
- **2. Content Schema Alignment:**
  - [ ] **URGENT**: Fix content schema mismatch in `src/content.config.ts`
  - [ ] Align project schema with actual markdown files (title vs name, type vs freelance, etc.)
  - [ ] Update `getProjects` function to work with correct schema
- **3. Remove Code Duplication:**
  - [ ] **URGENT**: Remove duplicate React components (`portfolio-ide.tsx` vs `editor-interface.tsx`)
  - [ ] Consolidate project data sources (hardcoded arrays vs content collections)
  - [ ] Clean up unused component files

**Tier 1: Core Functionality & Stability**

- **4. Data Management Refactor:**
  - [x] Create a new content collection for your job experience (e.g., `experience`).
  - [x] Migrate the job data from `en.json` and `es.json` to the new collection.
  - [x] Update the `JobsCard.astro` component to fetch data from the new collection.
  - [x] Consolidate the content schemas into a single `src/content.config.ts` file.
  - [ ] **NEW**: Migrate hardcoded project data from components to content collections
  - [ ] **NEW**: Add comprehensive error handling for all async operations
- **5. TypeScript & Type Safety:**
  - [ ] **NEW**: Remove all `any` types and add proper interfaces
  - [ ] **NEW**: Add type validation for external data sources
  - [ ] **NEW**: Create proper TypeScript interfaces for all props
- **6. Accessibility & Performance:**
  - [ ] **NEW**: Use Astro's `<Image />` component for all images (currently using regular `<img>`)
  - [ ] **NEW**: Add proper ARIA labels and semantic HTML
  - [ ] **NEW**: Make horizontal scroll keyboard accessible
  - [ ] **NEW**: Implement responsive design system (replace fixed `grid-cols-[628px_auto]`)

**Tier 2: Feature Implementation**

- **7. Blog Functionality:**
  - [ ] Create the UI for the blog list page (`/blog`) and individual post pages (`/blog/[slug]`).
  - [ ] Add a "tags" page to filter blog posts by tag (`/blog/tag/[tag]`).
  - [ ] Write your first blog post.
  - [ ] **NEW**: Add blog search functionality
- **8. Enhanced UI/UX:**
  - [ ] Implement the active section navigation with GSAP or the Intersection Observer API.
  - [ ] Add subtle "on-scroll" animations to the sections (About, Experience, etc.) to make the portfolio more dynamic.
  - [ ] **NEW**: Create design token system for consistent styling
  - [ ] **NEW**: Add loading states and skeleton screens
- **9. Search & Discovery:**
  - [ ] **NEW**: Implement search functionality for projects and blog posts
  - [ ] **NEW**: Add filtering by technology stack
  - [ ] **NEW**: Create tag-based navigation system

**Tier 3: Advanced Features & Optimization**

- **10. Performance Optimization:**
  - [ ] **NEW**: Implement lazy loading for non-critical sections
  - [ ] **NEW**: Optimize GSAP bundle size (tree-shake unused plugins)
  - [ ] **NEW**: Add service worker for offline functionality
  - [ ] Configure a CDN (like Cloudflare) to serve your assets for faster delivery.
- **11. Code Quality & Maintenance:**
  - [ ] **NEW**: Add comprehensive error boundaries
  - [ ] **NEW**: Implement proper logging and monitoring
  - [ ] **NEW**: Add unit and integration tests
  - [ ] Refactor `AutoSlides.astro` to remove the duplicated code.
  - [ ] Move the `noise` background image to your local assets or a configuration variable.
  - [ ] **NEW**: Create environment-specific configurations
- **12. Advanced Integrations:**
  - [ ] Research and choose a headless CMS (Payload CMS, Strapi, Sanity, etc.).
  - [ ] Set up the CMS and create the necessary content models (projects, blog posts, experience).
  - [ ] Migrate your existing content to the CMS.
  - [ ] Update your Astro components to fetch data from the CMS API.
  - [ ] **NEW**: Add analytics and performance monitoring
  - [ ] **NEW**: Implement contact form with email service

**🔧 Technical Debt Items**

- [ ] **NEW**: Remove hardcoded magic numbers (628px grid, animation values, etc.)
- [ ] **NEW**: Create proper configuration files for all settings
- [ ] **NEW**: Add input validation for all external data
- [ ] **NEW**: Implement proper SEO meta tag generation
- [ ] **NEW**: Add security headers and CSRF protection
