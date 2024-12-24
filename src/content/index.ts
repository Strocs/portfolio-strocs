import { getCollection } from 'astro:content'

interface GetProjectProps {
  type: string
}

export const getProjects = async ({ type }: GetProjectProps) => {
  return await getCollection('projects', ({ data }) => {
    return data.type === type
  })
}
