import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { ProjectSchema } from '@/content/schemas/project.schema'
import { projectLoader } from '@/content/adapters/loader.adapter'
import { i18nSchema } from '@/i18n/schemas/i18n.schema'

const projects = defineCollection({
  loader: projectLoader('projects'),
  schema: ProjectSchema,
})

const lang = defineCollection({
  loader: glob({
    pattern: '*.json',
    base: './src/i18n',
  }),
  schema: i18nSchema,
})

export const collections = {
  projects,
  lang,
}
