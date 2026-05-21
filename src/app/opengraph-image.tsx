import { ImageResponse } from 'next/og'

/**
 * Default Open Graph + Twitter card image for the site root.
 *
 * Tuned for LinkedIn / X / Slack feed posting: dark plate (high contrast
 * against feeds' white surfaces), oversized headline, four measured-fact
 * pills as the visual rhythm, restrained orbital motif on the right.
 *
 * Generated at build time via next/og ImageResponse so a single PNG ships
 * to /out/opengraph-image and platforms cache one canonical asset.
 */

export const dynamic = 'force-static'
export const alt =
  'Vitus Labs — Composable React engine. 15 packages, 4.82 KB CSS-in-JS engine, 170+ CSS props, 123 motion presets.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const INK = '#0A0B0D'
const SURFACE = '#14161A'
const PAPER = '#F1EFE7'
const ACCENT = '#C8FF3A'
const COBALT = '#2F4DFF'
const MUTED = '#A8A69C'
const BORDER = '#2E3138'

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

function Pill({
  children,
  accent = false,
}: {
  children: React.ReactNode
  accent?: boolean
}) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '14px 22px',
        borderRadius: 999,
        border: `1px solid ${accent ? ACCENT : BORDER}`,
        background: accent
          ? `linear-gradient(180deg, rgba(200,255,58,0.16), rgba(200,255,58,0.06))`
          : SURFACE,
        color: accent ? ACCENT : PAPER,
        fontFamily: 'monospace',
        fontSize: 22,
        letterSpacing: '-0.01em',
        fontWeight: 500,
      }}
    >
      {children}
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
        padding: '56px 72px',
        background: INK,
        color: PAPER,
        fontFamily: 'sans-serif',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Aurora — chartreuse bloom on the right + cobalt counter-note bottom-left */}
      <div
        style={{
          position: 'absolute',
          top: -260,
          right: -260,
          width: 900,
          height: 900,
          borderRadius: '50%',
          background: `radial-gradient(circle at 30% 30%, ${ACCENT} 0%, transparent 55%), radial-gradient(circle at 70% 60%, ${COBALT} 0%, transparent 50%)`,
          opacity: 0.22,
          filter: 'blur(48px)',
          display: 'flex',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: -300,
          left: -200,
          width: 700,
          height: 700,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${COBALT} 0%, transparent 60%)`,
          opacity: 0.08,
          filter: 'blur(48px)',
          display: 'flex',
        }}
      />
      {/* Dot grid, masked to top-right so it doesn't fight the headline */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(to right, ${BORDER} 1px, transparent 1px), linear-gradient(to bottom, ${BORDER} 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
          opacity: 0.3,
          display: 'flex',
          maskImage:
            'radial-gradient(ellipse 90% 80% at 90% 10%, black 0%, transparent 70%)',
        }}
      />

      {/* TOP ROW — lockup left, MIT pill right */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <Mark size={48} />
          <div
            style={{
              fontSize: 28,
              fontFamily: 'monospace',
              letterSpacing: '-0.01em',
              color: PAPER,
              display: 'flex',
            }}
          >
            vitus
            <span style={{ color: ACCENT, margin: '0 3px', display: 'flex' }}>
              ·
            </span>
            labs
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: '8px 16px',
            borderRadius: 999,
            border: `1px solid ${BORDER}`,
            background: SURFACE,
            color: MUTED,
            fontFamily: 'monospace',
            fontSize: 14,
            letterSpacing: '0.12em',
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: ACCENT,
              display: 'flex',
              boxShadow: `0 0 8px ${ACCENT}`,
            }}
          />
          OPEN SOURCE · MIT · v2.6.1
        </div>
      </div>

      {/* BODY — eyebrow, big headline, stat pill row */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 28,
          marginTop: 16,
        }}
      >
        <div
          style={{
            fontSize: 18,
            fontFamily: 'monospace',
            color: ACCENT,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            display: 'flex',
          }}
        >
          — composable react engine
        </div>
        <div
          style={{
            fontSize: 112,
            fontWeight: 600,
            letterSpacing: '-0.045em',
            lineHeight: 0.92,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <span style={{ display: 'flex' }}>Build React apps</span>
          <span style={{ display: 'flex' }}>
            <span
              style={{
                color: ACCENT,
                fontStyle: 'italic',
                fontWeight: 400,
                display: 'flex',
              }}
            >
              faster.
            </span>
          </span>
        </div>

        {/* Stat pills */}
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Pill>15 packages</Pill>
          <Pill accent>4.82 KB engine</Pill>
          <Pill>170+ CSS props</Pill>
          <Pill>123 motion presets</Pill>
        </div>
      </div>

      {/* FOOTER */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: 16,
          fontFamily: 'monospace',
          color: MUTED,
          letterSpacing: '0.1em',
          paddingTop: 24,
          borderTop: `1px solid ${BORDER}`,
        }}
      >
        <span style={{ display: 'flex' }}>vitus-labs.com</span>
        <span style={{ display: 'flex' }}>
          TYPESCRIPT-FIRST · REACT · REACT-NATIVE
        </span>
      </div>
    </div>,
    {
      ...size,
    },
  )
}
