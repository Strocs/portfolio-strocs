import { z } from 'astro:content'

const jobsSchema = z.object({
  TITLE: z.string(),
  DESCRIPTION: z.string(),
  FROM: z.string(),
  TO: z.string(),
})

export const i18nSchema = z.object({
  SEO_TITLE: z.string(),
  SEO_DESCRIPTION: z.string(),
  PERSONAL_IMAGE_ALT: z.string(),
  RESUME: z.string(),
  OTW: z.string(),
  SEE_MORE_BTN: z.string(),
  PORTFOLIO: z.object({
    HERO: z.object({
      TITLE: z.string(),
      SUBTITLE: z.string(),
      DESCRIPTION: z.string(),
      IMAGE_ALT: z.string(),
    }),
    EXPERIENCE: z.object({
      WORKS_DONE: z.string(),
      FREELANCE: jobsSchema.optional(),
    }),
  }),
})
