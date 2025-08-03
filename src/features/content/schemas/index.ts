import { z } from 'astro:content'

export const ExperienceSchema = z.object({
  company: z.string().min(1, 'Company name is required'),
  experienceSlug: z.string().min(1, 'Experience slug is required'),
  position: z.string().min(1, 'Position is required'),
  url: z.string().url().optional(),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  tasks: z.array(z.string()).optional(),
  dateRange: z.array(z.string()).max(2),
  stack: z.array(z.string()).optional(),
  lang: z.string().default('es'),
  // Auto-discovered from directory structure
  hasProjects: z.boolean().default(false),
})

export const BasicProjectSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  extract: z.string().min(10, 'Extract must be at least 10 characters'),
  date: z.coerce.date(),
  stack: z.array(z.string()).optional(),
  lang: z.string().default('es'),
  url: z.object({
    github: z.string().url().optional(),
    live: z.string().url().optional(),
  }),
  images: z
    .array(
      z.object({
        src: z.string(),
        alt: z.string(),
      })
    )
    .optional(),
})

export const ExperienceProjectsSchema = BasicProjectSchema.extend({
  type: z.literal('experience'),
  experienceSlug: z.string().min(1, 'Experience slug is required'),
  active: z.boolean().default(true),
})

export const PersonalProjectsSchema = BasicProjectSchema.extend({
  type: z.literal('personal'),
  status: z.enum(['completed', 'in-progress', 'paused']),
})

// Single projects collection with discriminated union
export const ProjectsSchema = z.discriminatedUnion('type', [
  ExperienceProjectsSchema,
  PersonalProjectsSchema,
])
