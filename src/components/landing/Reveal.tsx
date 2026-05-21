'use client'

import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'section' | 'span' | 'header'
}

export function Reveal({
  children,
  delay = 0,
  className = '',
  as = 'div',
}: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof document === 'undefined') return
    const el = ref.current
    if (!el) return

    // Skip animation entirely if the user prefers reduced motion or the
    // document was rendered in a hidden iframe (preview thumbnails).
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced || document.visibilityState === 'hidden') return

    // Arm the animation: hide first, then reveal. SSR/no-JS renders visible.
    el.classList.add('vl-reveal--armed')

    const reveal = () => {
      window.setTimeout(() => el.classList.add('in'), delay)
    }

    const rect = el.getBoundingClientRect()
    const inView = rect.top < window.innerHeight && rect.bottom > 0
    if (inView) {
      reveal()
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            reveal()
            io.unobserve(e.target)
          }
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' },
    )
    io.observe(el)

    const fallback = window.setTimeout(() => el.classList.add('in'), 2500)
    return () => {
      io.disconnect()
      window.clearTimeout(fallback)
    }
  }, [delay])

  const Tag = as as 'div'
  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`vl-reveal ${className}`}
    >
      {children}
    </Tag>
  )
}
