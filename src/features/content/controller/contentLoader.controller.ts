import { glob } from 'astro/loaders'
import type { Loader } from 'astro/loaders'

type ContentLoader = (content: string) => Loader

const localLoader: ContentLoader = (content: string) => {
  return glob({ pattern: '*.md', base: '/content/' + content })
}

// Placeholder for future CMS integration
const remoteLoader: ContentLoader = (_content: string) => {
  // TODO: Implement headless CMS connection
  // const CMS_URL = process.env.CMS_PATH + content
  throw new Error('Remote loader not implemented yet')
}

export const projectLoader: ContentLoader = import.meta.env.USE_CMS
  ? remoteLoader
  : localLoader
