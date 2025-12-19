import type { CollectionEntry } from 'astro:content'

export type ExperienceCollection = CollectionEntry<'experience'>

export type ExperienceProjectsCollection = CollectionEntry<'projects'> & {
  data: { type: 'experience' }
}
