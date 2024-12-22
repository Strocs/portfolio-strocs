import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Draggable } from 'gsap/Draggable'

gsap.registerPlugin(ScrollTrigger, Draggable)

interface HorizontalScrollOptions {
  container: string
  trigger?: string
  start?: string
  scrub?: boolean | number
  x?: string
  arrowControls?: boolean
  swipeEnabled?: boolean
  cardWidth?: number
}

export const useHorizontalScroll = ({
  container,
  trigger = container,
  start = 'top center',
  scrub = true,
  swipeEnabled = true,
}: HorizontalScrollOptions) => {
  const element = document.querySelector(container) as HTMLElement
  if (!element) return

  const scrollAnimation = gsap.to(element, {
    x: `-=500`,
    ease: 'none',
    scrollTrigger: {
      trigger,
      start,
      scrub,
      invalidateOnRefresh: true,
    },
  })

  if (swipeEnabled) {
    // Swipe/Drag functionality
    const bounds = {
      minX: -(element.offsetWidth - (window.innerWidth - element.offsetLeft)),
      maxX: 0,
    }
    Draggable.create(element, {
      type: 'x',
      inertia: true,
      bounds,
      edgeResistance: 0,
    })
  }

  return scrollAnimation
}
