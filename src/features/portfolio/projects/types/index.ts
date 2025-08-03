import type { CollectionEntry } from 'astro:content'

export type PersonalProjectsCollection = CollectionEntry<'projects'> & {
  data: { type: 'personal' }
}
