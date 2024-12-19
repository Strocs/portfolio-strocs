import { z } from 'astro:content';

export const ProjectSchema = z.object({
  title: z.string(),
  type: z.string(),
  stack: z.array(z.string()),
  extract: z.string(),
  active: z.boolean(),
  github: z.string().optional(),
  liveDemo: z.string().optional(),
  date: z.coerce.date(),
  images: z.array(z.object({
    src: z.string(),
    alt: z.string(),
  })).optional(),
})

