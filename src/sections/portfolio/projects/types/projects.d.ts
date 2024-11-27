import type { Image } from './types'

export interface Project {
  title: string
  description: string
  active: boolean
  slug?: string
  repositoryUrl?: string
  webUrl?: string
  techs: string[]
  images: Image[]
}


