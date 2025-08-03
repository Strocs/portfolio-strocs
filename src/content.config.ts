import { defineCollection } from 'astro:content'
import { ExperienceSchema, ProjectsSchema } from '@/features/content/schemas'

const projectCollection = defineCollection({
  type: 'content',
  schema: ProjectsSchema,
})

const experienceCollection = defineCollection({
  type: 'content',
  schema: ExperienceSchema,
})

export const collections = {
  projects: projectCollection,
  experience: experienceCollection,
}
