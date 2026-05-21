'use client'

import { useEffect, useRef, useState } from 'react'

const VERBS = ['ship', 'theme', 'test', 'animate', 'bundle']

export function VerbRotator({
  initial = VERBS[0],
  intervalMs = 2600,
  outMs = 420,
}: {
  initial?: string
  intervalMs?: number
  outMs?: number
}) {
  const [verb, setVerb] = useState(initial)
  const [state, setState] = useState<'idle' | 'out' | 'in'>('idle')
  const idxRef = useRef(VERBS.indexOf(initial))

  useEffect(() => {
    if (typeof document === 'undefined') return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    const cycle = () => {
      setState('out')
      window.setTimeout(() => {
        idxRef.current = (idxRef.current + 1) % VERBS.length
        setVerb(VERBS[idxRef.current])
        setState('in')
      }, outMs)
    }

    const id = window.setInterval(cycle, intervalMs)
    return () => window.clearInterval(id)
  }, [intervalMs, outMs])

  const cls = `vl-verb-slot${state !== 'idle' ? ` ${state}` : ''}`
  return <span className={cls}>{verb}</span>
}
