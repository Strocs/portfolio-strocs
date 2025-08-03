import { getCollection } from 'astro:content'
import type { PersonalProjectsCollection } from '../types'

export const getPersonalProjects = async ({ lang }) => {
  return (await getCollection(
    'projects',
    ({ data }) => data.type === 'personal' && data.lang === lang
  )) as PersonalProjectsCollection[]
}
