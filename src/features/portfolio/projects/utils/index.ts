import { getCollection } from 'astro:content'
import type { PersonalProjectsCollection } from '../types'

interface GetPersonalProjectsProps {
  lang: string | undefined
}

export const getPersonalProjects = async ({
  lang,
}: GetPersonalProjectsProps): Promise<PersonalProjectsCollection[]> => {
  try {
    const projects = await getCollection(
      'projects',
      ({ data }) => data.type === 'personal' && data.lang === lang
    )

    const sortedProjects = projects.sort((a, b) => {
      const aDate = new Date(a.data.date)
      const bDate = new Date(b.data.date)
      return bDate.getTime() - aDate.getTime()
    })

    return sortedProjects as PersonalProjectsCollection[]
  } catch (error) {
    console.error('Error fetching personal projects:', error)
    return []
  }
}
