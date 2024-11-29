import { z } from 'astro:content';

export const ProjectSchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
  extract: z.string(),
  active: z.boolean(),
  repositoryUrl: z.string().optional(),
  webUrl: z.string().optional(),
  techs: z.array(z.string()),
  images: z.array(z.object({
    src: z.string(),
    alt: z.string(),
  })).optional(),
})

