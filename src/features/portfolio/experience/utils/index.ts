import { getCollection } from 'astro:content'
import type { ExperienceProjectsCollection } from '../types'

interface ExperienceProjectProps {
  lang: string
  experienceSlug: string
}

export const getExperienceProjects = async ({
  lang,
  experienceSlug,
}: ExperienceProjectProps): Promise<ExperienceProjectsCollection[]> => {
  try {
    const projects = await getCollection('projects', ({ data }) => {
      console.log(lang, experienceSlug, data)
      return (
        data.type === 'experience' &&
        data.lang === lang &&
        data.experienceSlug === experienceSlug
      )
    })

    const sortProjects = projects.sort((a, b) => {
      const aDate = new Date(a.data.date)
      const bDate = new Date(b.data.date)
      return bDate.getTime() - aDate.getTime()
    })

    return sortProjects as ExperienceProjectsCollection[]
  } catch (error) {
    console.error(
      `Error fetching projects for [[ ${experienceSlug} ]] experience:`,
      error
    )
    return []
  }
}
