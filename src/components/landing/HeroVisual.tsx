'use client'

import { useState } from 'react'
import { Mark } from './Mark'

type Variant = 'orbit' | 'stack' | 'pulse'

export function HeroVisual() {
  const [active, setActive] = useState<Variant>('orbit')
  const [fading, setFading] = useState(false)

  const swap = (v: Variant) => {
    if (v === active) return
    setFading(true)
    window.setTimeout(() => {
      setActive(v)
      setFading(false)
    }, 220)
  }

  const cls = (v: Variant) =>
    `vl-hv-variant${fading ? ' fading' : ''}${active === v ? '' : ' vl-hidden'}`

  return (
    <div className="vl-hero-visual">
      {/* Variant A: Orbital */}
      <div className={cls('orbit')} data-v="orbit" hidden={active !== 'orbit'}>
        <div className="vl-orbit">
          <div className="ring ring-1">
            <span className="node" />
          </div>
          <div className="ring ring-2">
            <span className="node n2" />
          </div>
          <div className="ring ring-3">
            <span className="node n3" />
          </div>
          <div className="ring ring-4">
            <span className="node" />
          </div>
        </div>
        <span className="vl-hv-label l1">
          <span className="acc">core</span> · engine
        </span>
        <span className="vl-hv-label l2">
          <span className="acc">styler</span> · 4.82 KB
        </span>
        <span className="vl-hv-label l3">
          <span className="acc">kinetic</span> · 123 presets
        </span>
        <span className="vl-hv-label l4">
          <span className="acc">elements</span> · 5 primitives
        </span>
        <div className="vl-hv-center">
          <Mark size={96} />
        </div>
      </div>

      {/* Variant B: Stack */}
      <div className={cls('stack')} data-v="stack" hidden={active !== 'stack'}>
        <div className="vl-hv-stack-bg" />
        <div className="vl-hv-stack">
          <div className="vl-sbar vl-sb1" />
          <div className="vl-sbar vl-sb2" />
          <div className="vl-sbar vl-sb3" />
          <div className="vl-sbar vl-sb4" />
        </div>
        <div className="vl-hv-stack-tokens">
          <span>
            <i className="d" />
            core
          </span>
          <span>
            <i className="d" />
            styler
          </span>
          <span>
            <i className="d" />
            elements
          </span>
          <span>
            <i className="d" />
            kinetic
          </span>
        </div>
      </div>

      {/* Variant C: Pulse radar */}
      <div className={cls('pulse')} data-v="pulse" hidden={active !== 'pulse'}>
        <div className="vl-hv-radar">
          <div className="vl-radar-grid" />
          <div className="vl-radar-sweep" />
          <div className="vl-radar-ring r1" />
          <div className="vl-radar-ring r2" />
          <div className="vl-radar-ring r3" />
          <div className="vl-radar-blip b1" />
          <div className="vl-radar-blip b2" />
          <div className="vl-radar-blip b3" />
          <div className="vl-radar-blip b4" />
          <div className="vl-radar-center">
            <Mark size={56} />
          </div>
        </div>
      </div>

      {/* Switcher */}
      <div
        className="vl-hv-switch"
        role="tablist"
        aria-label="Hero visual variant"
      >
        <button
          type="button"
          className={active === 'orbit' ? 'active' : ''}
          aria-label="Orbital"
          aria-pressed={active === 'orbit'}
          onClick={() => swap('orbit')}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            aria-hidden
          >
            <ellipse cx="12" cy="12" rx="10" ry="4" />
            <ellipse
              cx="12"
              cy="12"
              rx="10"
              ry="4"
              transform="rotate(60 12 12)"
            />
            <ellipse
              cx="12"
              cy="12"
              rx="10"
              ry="4"
              transform="rotate(-60 12 12)"
            />
          </svg>
        </button>
        <button
          type="button"
          className={active === 'stack' ? 'active' : ''}
          aria-label="Stack"
          aria-pressed={active === 'stack'}
          onClick={() => swap('stack')}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            aria-hidden
          >
            <rect x="3" y="5" width="18" height="3" />
            <rect x="6" y="11" width="12" height="3" />
            <rect x="9" y="17" width="6" height="3" />
          </svg>
        </button>
        <button
          type="button"
          className={active === 'pulse' ? 'active' : ''}
          aria-label="Pulse"
          aria-pressed={active === 'pulse'}
          onClick={() => swap('pulse')}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            aria-hidden
          >
            <circle cx="12" cy="12" r="2" />
            <circle cx="12" cy="12" r="6" />
            <circle cx="12" cy="12" r="10" />
          </svg>
        </button>
      </div>
    </div>
  )
}
