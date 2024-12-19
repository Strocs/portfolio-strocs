import { getCollection } from 'astro:content'

interface GetI18NProps {
  lang: string | undefined
}

export const getI18N = async ({ lang = 'en' }: GetI18NProps) => {
  const data = await getCollection('lang', ({ id }) => id === lang)
  return data[0].data
}
