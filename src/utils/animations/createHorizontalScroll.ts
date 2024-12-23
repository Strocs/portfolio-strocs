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
  start = 'top bottom',
  scrub = true,
  x = 500,
  swipeEnabled = true,
}: HorizontalScrollOptions) => {
  const element = document.querySelector(container) as HTMLElement
  if (!element) return

  const gap = +getComputedStyle(element).gap.replace('px', '')
  let rafId: number | null = null
  let draggableInstance: Draggable | null = null
  let scrollOffset = 0
  let lastProgress = 0
  let isDragging = false

  // Calculate bounds
  const bounds = {
    minX:
      -(element.offsetWidth - (window.innerWidth - element.offsetLeft)) - gap,
    maxX: 0,
  }

  // Throttled position update with bounds check
  const updatePosition = (progress: number) => {
    if (Math.abs(progress - lastProgress) < 0.001 || isDragging) return

    lastProgress = progress
    const newPosition = scrollOffset - x * progress

    //Apply bounds to scroll position
    const boundedPosition = Math.max(
      bounds.minX,
      Math.min(bounds.maxX, newPosition)
    )

    gsap.set(element, {
      x: boundedPosition,
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
      bounds,
      edgeResistance: 1,
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
