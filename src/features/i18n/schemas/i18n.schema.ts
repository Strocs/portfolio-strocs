import { z } from 'astro:content'

export const i18nSchema = z.object({
  SEO_TITLE: z.string(),
  SEO_DESCRIPTION: z.string(),
  PERSONAL_IMAGE_ALT: z.string(),
  RESUME: z.string(),
  OTW: z.string(),
  SEE_MORE_BTN: z.string(),
  NAV: z.object({
    EXPERIENCE: z.string(),
    PROJECTS: z.string(),
    ABOUT: z.string(),
  }),
  PORTFOLIO: z.object({
    HERO: z.object({
      TITLE: z.string(),
      SUBTITLE: z.string(),
      DESCRIPTION: z.string(),
      IMAGE_ALT: z.string(),
    }),
    EXPERIENCE: z.object({
      WORKS_DONE: z.string(),
    }),
    PROJECTS: z.object({}),
    ABOUT: z.object({
      TITLE: z.string(),
      DESCRIPTION: z.array(z.string()),
    }),
  }),
})
