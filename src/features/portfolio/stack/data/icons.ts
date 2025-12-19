// Import SVGs as raw strings for inline rendering
import HtmlIcon from '../assets/html.svg?raw'
import CssIcon from '../assets/css.svg?raw'
import JavascriptIcon from '../assets/javascript.svg?raw'
import TypescriptIcon from '../assets/typescript.svg?raw'
import AstroIcon from '../assets/astro.svg?raw'
import ReactIcon from '../assets/react.svg?raw'
import NodejsIcon from '../assets/nodejs.svg?raw'
import NextjsIcon from '../assets/nextjs.svg?raw'
import TailwindcssIcon from '../assets/tailwindcss.svg?raw'
import FirebaseIcon from '../assets/firebase.svg?raw'
import VercelIcon from '../assets/vercel.svg?raw'
import GitIcon from '../assets/git.svg?raw'
import GithubIcon from '../assets/github.svg?raw'
import GsapIcon from '../assets/gsap.svg?raw'
import PythonIcon from '../assets/python.svg?raw'
import GoIcon from '../assets/go.svg?raw'
import PrismaIcon from '../assets/prisma.svg?raw'
import VitestIcon from '../assets/vitest.svg?raw'
import PlaywrightIcon from '../assets/playwright.svg?raw'
import TursoIcon from '../assets/turso.svg?raw'

export type IconName = keyof typeof icons

const icons = {
  html: HtmlIcon,
  css: CssIcon,
  javascript: JavascriptIcon,
  typescript: TypescriptIcon,
  astro: AstroIcon,
  react: ReactIcon,
  nodejs: NodejsIcon,
  nextjs: NextjsIcon,
  tailwindcss: TailwindcssIcon,
  firebase: FirebaseIcon,
  vercel: VercelIcon,
  git: GitIcon,
  github: GithubIcon,
  gsap: GsapIcon,
  python: PythonIcon,
  go: GoIcon,
  prisma: PrismaIcon,
  vitest: VitestIcon,
  playwright: PlaywrightIcon,
  turso: TursoIcon,
} as const

export default icons
