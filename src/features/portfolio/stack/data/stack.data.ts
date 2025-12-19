import icons, { type IconName } from './icons'

export interface StackItem {
  tech: string
  Icon?: string
}

const createStackItem = (tech: string, iconKey?: IconName): StackItem => ({
  tech,
  Icon: iconKey ? icons[iconKey] : undefined,
})

export const stack: StackItem[] = [
  // Frontend - Core
  createStackItem('HTML', 'html'),
  createStackItem('CSS', 'css'),
  createStackItem('TailwindCSS', 'tailwindcss'),
  // Frontend - Languages
  createStackItem('Javascript', 'javascript'),
  createStackItem('Typescript', 'typescript'),
  // Frontend - Frameworks
  createStackItem('React', 'react'),
  createStackItem('Next.js', 'nextjs'),
  createStackItem('Astro', 'astro'),
  // Frontend - Animation
  createStackItem('GSAP', 'gsap'),
  // Frontend - Testing
  createStackItem('Vitest', 'vitest'),
  createStackItem('Playwright', 'playwright'),
  // Backend & Scripting
  createStackItem('Node.js', 'nodejs'),
  createStackItem('Go', 'go'),
  createStackItem('Python', 'python'),
  // Others - Databases
  createStackItem('Prisma', 'prisma'),
  createStackItem('Turso', 'turso'),
  createStackItem('Firebase', 'firebase'),
  // Others - Deployment & DevOps
  createStackItem('Git', 'git'),
  createStackItem('GitHub', 'github'),
  createStackItem('Vercel', 'vercel'),
]
