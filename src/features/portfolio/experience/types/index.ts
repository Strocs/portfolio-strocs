import type { CollectionEntry } from 'astro:content'

export type ExperienceProjectsCollection = CollectionEntry<'projects'> & {
  data: { type: 'experience' }
}
