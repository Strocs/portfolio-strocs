import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Draggable } from 'gsap/Draggable'

gsap.registerPlugin(ScrollTrigger, Draggable)

interface HorizontalScrollOptions {
  container: string
  trigger?: string
  start?: string
  scrub?: boolean | number
  x?: number
  swipeEnabled?: boolean
}

export const createHorizontalScroll = ({
  container,
  trigger = container,
  start = 'center bottom',
  scrub = true,
  x = 500,
  swipeEnabled = true,
}: HorizontalScrollOptions) => {
  const element = document.querySelector(container) as HTMLElement
  if (!element) return

  let rafId: number | null = null
  let draggableInstance: Draggable | null = null
  let scrollOffset = 0
  let lastProgress = 0
  let isDragging = false

  // Throttled position update
  const updatePosition = (progress: number) => {
    if (Math.abs(progress - lastProgress) < 0.001 || isDragging) return

    lastProgress = progress

    gsap.set(element, {
      x: scrollOffset - x * progress,
      force3D: true,
    })
  }

  const scrollTrigger = ScrollTrigger.create({
    trigger,
    start,
    scrub,
    invalidateOnRefresh: true,
    fastScrollEnd: true,
    preventOverlaps: true,
    onUpdate: (self) => {
      if (isDragging) return
      if (rafId) cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        updatePosition(self.progress)
        rafId = null
      })
    },
  })

  if (swipeEnabled) {
    draggableInstance = Draggable.create(element, {
      type: 'x',
      inertia: true,
      bounds: {
        minX: -(element.offsetWidth - (window.innerWidth - element.offsetLeft)),
        maxX: 0,
      },
      edgeResistance: 0.5,
      dragResistance: 0.1,
      onDragStart: () => {
        isDragging = true
      },
      onDragEnd: function () {
        isDragging = false
        const progress = scrollTrigger.progress
        scrollOffset = +gsap.getProperty(element, 'x') + x * progress
        lastProgress = progress
      },
    })[0]
  }

  // Cleanup function
  const cleanup = () => {
    if (rafId) cancelAnimationFrame(rafId)
    scrollTrigger.kill()
    if (draggableInstance) draggableInstance.kill()
  }

  return {
    scrollTrigger,
    cleanup,
  }
}
