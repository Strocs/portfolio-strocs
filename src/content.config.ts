import { defineCollection } from 'astro:content'
import { ProjectSchema } from '@/features/content/schemas/project.schema'
import { loaders } from '@/features/content/adapters/content.adapter'

const projects = defineCollection({
  loader: loaders.projects,
  schema: ProjectSchema,
})

export const collections = {
  projects,
}
