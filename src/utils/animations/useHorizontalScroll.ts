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
  start = 'top bottom',
  scrub = true,
  x = '100%',
  swipeEnabled = true,
}: HorizontalScrollOptions) => {
  const element = document.querySelector(container) as HTMLElement
  if (!element) return

  // Scroll animation
  const scrollAnimation = gsap.to(element, {
    x: `-=${x}`,
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
    Draggable.create(element, {
      type: 'x',
      inertia: true,
      bounds: {
        minX: -(element.scrollWidth - window.innerWidth),
        maxX: 0,
      },
      edgeResistance: 0.65,
      onDragEnd: function () {
        // // Snap to nearest card
        // const x = this.endX
        // const snapX = Math.round(x / cardWidth) * cardWidth
        // gsap.to(element, {
        //   x: snapX,
        //   duration: 0.3,
        //   ease: 'power2.out',
        // })
      },
    })
  }

  return scrollAnimation
}
