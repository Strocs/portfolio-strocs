import { USE_CMS, LOCAL_PATH, CMS_PATH } from '@/config/content'
import { glob } from 'astro/loaders'

const localLoader = (content: string) =>
  glob({ pattern: '*.md', base: LOCAL_PATH + content })

const remoteLoader = (content: string) => async () => {
  // implement this to connect with a headless cms
  const CMS_URL = CMS_PATH + content
  return { id: '1234' + CMS_URL }
}

export const projectLoader = USE_CMS ? remoteLoader : localLoader
