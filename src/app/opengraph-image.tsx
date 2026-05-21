import { ImageResponse } from 'next/og'

/**
 * Default Open Graph + Twitter card image for the site root.
 *
 * Generated at build time as a static PNG (1200×630) so social platforms
 * cache a single asset. Matches the social-kit design: stacked-triangle
 * mark + lockup top-left, big headline center, orbital motif on the right,
 * chartreuse + cobalt aurora backdrop on dark.
 */

// Static export: prerender at build time so a single PNG is emitted to /out
// and platforms cache one canonical asset.
export const dynamic = 'force-static'
export const alt =
  'Vitus Labs — Composable React engine. 15 packages, 4.82 KB CSS-in-JS engine, 170+ CSS props, 123 motion presets.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const INK = '#0A0B0D'
const PAPER = '#ECEAE2'
const ACCENT = '#C8FF3A'
const COBALT = '#2F4DFF'
const MUTED = '#A8A69C'
const BORDER = '#2E3138'

/** Stacked-triangle mark — three trapezoidal slabs over a unit canvas. */
function Mark({ size: s = 36 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={s}
      height={s}
      viewBox="0 0 100 100"
    >
      <path d="M8 18 L92 18 L74 44 L26 44 Z" fill={PAPER} />
      <path d="M26 50 L74 50 L60 72 L40 72 Z" fill={PAPER} />
      <path d="M40 78 L60 78 L50 94 Z" fill={ACCENT} />
    </svg>
  )
}

/** Orbital motif — frozen frame of the hero visual, scaled for the right edge. */
function Orbit() {
  const rings = [
    { size: 480, opacity: 1, dashed: true },
    { size: 360, opacity: 0.5, dashed: false },
    { size: 260, opacity: 1, dashed: true },
    { size: 180, opacity: 0.5, dashed: false },
  ]
  return (
    <div
      style={{
        position: 'absolute',
        top: 75,
        right: -100,
        width: 480,
        height: 480,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {rings.map((r, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: r.size,
            height: r.size,
            border: `1px ${r.dashed ? 'dashed' : 'solid'} ${BORDER}`,
            borderRadius: '50%',
            opacity: r.opacity,
            display: 'flex',
          }}
        />
      ))}
      {/* Nodes anchored at the right edge of each ring */}
      <div
        style={{
          position: 'absolute',
          width: 12,
          height: 12,
          borderRadius: '50%',
          background: ACCENT,
          boxShadow: `0 0 24px ${ACCENT}`,
          top: 75 - 6,
          right: -6,
          display: 'flex',
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: 10,
          height: 10,
          borderRadius: '50%',
          background: PAPER,
          top: 240 - 5,
          right: 240 - 360 / 2 - 5,
          display: 'flex',
        }}
      />
      {/* Center disc with mark */}
      <div
        style={{
          position: 'absolute',
          width: 130,
          height: 130,
          borderRadius: '50%',
          background: INK,
          border: `1px solid ${BORDER}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Mark size={80} />
      </div>
    </div>
  )
}

export default async function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: '64px 72px',
        background: INK,
        color: PAPER,
        fontFamily: 'sans-serif',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background — radial chartreuse glow on the right + faint cobalt counter-note */}
      <div
        style={{
          position: 'absolute',
          top: -200,
          right: -200,
          width: 900,
          height: 900,
          borderRadius: '50%',
          background: `radial-gradient(circle at 30% 30%, ${ACCENT} 0%, transparent 55%), radial-gradient(circle at 70% 60%, ${COBALT} 0%, transparent 50%)`,
          opacity: 0.22,
          filter: 'blur(40px)',
          display: 'flex',
        }}
      />
      {/* Faint dot-grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(to right, ${BORDER} 1px, transparent 1px), linear-gradient(to bottom, ${BORDER} 1px, transparent 1px)`,
          backgroundSize: '56px 56px',
          opacity: 0.35,
          display: 'flex',
          maskImage:
            'radial-gradient(ellipse 80% 60% at 30% 50%, black 0%, transparent 70%)',
        }}
      />

      <Orbit />

      {/* Lockup */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 14,
        }}
      >
        <Mark size={48} />
        <div
          style={{
            fontSize: 24,
            fontFamily: 'monospace',
            letterSpacing: '-0.01em',
            color: PAPER,
            display: 'flex',
          }}
        >
          vitus
          <span style={{ color: ACCENT, margin: '0 2px', display: 'flex' }}>
            ·
          </span>
          labs
        </div>
      </div>

      {/* Headline block */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 24,
          maxWidth: 720,
        }}
      >
        <div
          style={{
            fontSize: 18,
            fontFamily: 'monospace',
            color: ACCENT,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            display: 'flex',
          }}
        >
          — composable react engine
        </div>
        <div
          style={{
            fontSize: 92,
            fontWeight: 500,
            letterSpacing: '-0.04em',
            lineHeight: 0.95,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <span style={{ display: 'flex' }}>Build, style</span>
          <span style={{ display: 'flex' }}>
            &amp; ship{' '}
            <span
              style={{
                color: ACCENT,
                fontStyle: 'italic',
                fontWeight: 300,
                marginLeft: 16,
                display: 'flex',
              }}
            >
              faster.
            </span>
          </span>
        </div>
        <div
          style={{
            fontSize: 22,
            color: MUTED,
            lineHeight: 1.5,
            display: 'flex',
          }}
        >
          15 packages · 4.82 KB CSS-in-JS engine · 170+ CSS props · 123 motion
          presets
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: 16,
          fontFamily: 'monospace',
          color: MUTED,
          letterSpacing: '0.08em',
        }}
      >
        <span style={{ display: 'flex' }}>vitus-labs.com</span>
        <span style={{ display: 'flex' }}>MIT · TYPESCRIPT-FIRST</span>
      </div>
    </div>,
    {
      ...size,
    },
  )
}
