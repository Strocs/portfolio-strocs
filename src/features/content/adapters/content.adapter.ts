import { localContent, useCMS } from '@/config/content'
import { glob } from 'astro/loaders'

const localLoader = {
  projects: glob({ pattern: '*.md', base: localContent }),
}

const remoteLoader = {
  projects: async () => {
    // implement this to connect with a headless cms
    return { id: '1234' }
  },
}

export const loaders = useCMS ? remoteLoader : localLoader
