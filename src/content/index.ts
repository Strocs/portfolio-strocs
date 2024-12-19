import { getCollection } from 'astro:content'

interface GetProjectProps {
  type: string
  lang: string | undefined
}

export const getProjects = async ({ type, lang }: GetProjectProps) => {
  return await getCollection('projects', ({ data }) => {
    console.log('Called from collection getter ' + lang)
    return data.type === type
  })
}
