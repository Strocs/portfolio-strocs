import { glob } from 'astro/loaders'

const localLoader = (content: string) => {
  console.log('Called from localLoader')
  return glob({ pattern: '*.md', base: '/content/' + content })
}

const remoteLoader = (content: string) => async () => {
  // implement this to connect with a headless cms
  const CMS_URL = process.env.CMS_PATH + content
  return { id: '1232' + CMS_URL }
}

export const projectLoader = process.env.USE_CMS ? remoteLoader : localLoader
