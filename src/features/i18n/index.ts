import es from './es.json'
import en from './en.json'

interface GetI18NProps {
  lang: string | undefined
}

export const getI18N = async ({ lang = 'en' }: GetI18NProps) => {
  return lang === 'es' ? es : en
}
