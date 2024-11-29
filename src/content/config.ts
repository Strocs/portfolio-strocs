import { ProjectSchema } from '@/schemas/project.schema'
import { defineCollection } from 'astro:content'

const projectsCollection = defineCollection({
  type: 'content',
  schema: ProjectSchema
})

export const collections = {
  projects: projectsCollection
}
