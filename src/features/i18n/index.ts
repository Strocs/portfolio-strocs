import es from './es.json'
import en from './en.json'
import type { i18nSchema } from './schemas/i18n.schema'
import type { z } from 'astro:content'

export type SupportedLocale = 'es' | 'en'
export type I18NData = z.infer<typeof i18nSchema>

interface GetI18NProps {
  lang: string | undefined
}

const translations: Record<SupportedLocale, I18NData> = {
  es,
  en,
}

export const getI18N = async ({
  lang = 'en',
}: GetI18NProps): Promise<I18NData> => {
  const locale = (lang === 'es' ? 'es' : 'en') as SupportedLocale
  return translations[locale]
}
