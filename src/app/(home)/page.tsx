import Link from 'next/link'
import { Counter } from '@/components/landing/Counter'
import { Lockup, Mark } from '@/components/landing/Mark'
import { Reveal } from '@/components/landing/Reveal'
import { Ticker } from '@/components/landing/Ticker'

// Objective inventory — verified against the monorepo on 2026-05-21:
//   15 packages (packages/* count)
//   styler bundle: 4.82 KB gzipped (size-limit budget 12 KB; actual measured)
//   28 React hooks (packages/hooks/src/use*.ts, deduped against .native variants)
//   123 kinetic presets (exported consts in kinetic-presets/src/presets.ts)
//   170+ CSS prop descriptors (packages/unistyle/src/styles/styles/propertyMap.ts)
//   5 element primitives: Element, Text, List, Overlay, Portal
const STATS = [
  { n: 15, lbl: 'Packages', suffix: '' },
  { n: 4.82, lbl: 'KB Styler (gzip)', suffix: '', float: true },
  { n: 170, lbl: 'CSS props', suffix: '+' },
  { n: 123, lbl: 'Motion presets', suffix: '' },
]

const FEATURES = [
  {
    glyph: '{ }',
    title: 'Type-safe end to end',
    meta: '01 · core',
    body: 'Generic inference on dimensions, themes, and prop shapes. Iterator/List narrow per call-site mode; rocketstyle preserves dimension types through chain methods.',
  },
  {
    glyph: '▽▽▽',
    title: 'Composable by design',
    meta: '02 · attrs',
    body: 'Chainable factories — .attrs(), .theme(), .styles(), .compose(). priorityAttrs → attrs → explicit props (last wins). Marker-based detection (IS_ATTRS).',
  },
  {
    glyph: '⇌',
    title: 'Swap the engine',
    meta: '03 · connectors',
    body: 'Same component code runs on built-in Styler (4.82 KB), styled-components, or Emotion via a single connector swap. RN target via connector-native.',
  },
  {
    glyph: '[ ]',
    title: 'Responsive built-in',
    meta: '04 · coolgrid',
    body: 'Layout props accept scalars, arrays, or breakpoint objects. Mobile-first via the unistyle responsive resolver — no media-query boilerplate.',
  },
  {
    glyph: '( )',
    title: 'Batteries included',
    meta: '05 · tools-*',
    body: 'Shared rolldown bundler, vitest config (90% coverage default), biome lint, and storybook 10 preset — published as separate @vitus-labs/tools-* packages.',
  },
  {
    glyph: '//',
    title: '4.82 KB CSS engine',
    meta: '06 · styler',
    body: 'Static/dynamic split, React 19 <style precedence> SSR, useInsertionEffect injection, FNV-1a class hash, CI-gated competitive perf bench against Emotion + styled-components.',
  },
]

const ECO = [
  {
    n: 'core',
    t: 'Core',
    d: 'Configuration singleton, CSS engine connector, utilities.',
  },
  {
    n: 'styler',
    t: 'Styler',
    d: '4.82 KB gzipped CSS-in-JS engine, SSR via React 19 <style precedence>.',
  },
  { n: 'attrs', t: 'Attrs', d: 'Immutable chainable default-props factory.' },
  {
    n: 'elements',
    t: 'Elements',
    d: 'Five UI primitives — Element, Text, List, Overlay, Portal.',
  },
  {
    n: 'rocketstyle',
    t: 'Rocketstyle',
    d: 'Dimension-based styling with theming and per-mode narrowing.',
  },
  {
    n: 'unistyle',
    t: 'Unistyle',
    d: '170+ CSS prop descriptors with responsive breakpoints.',
  },
  {
    n: 'coolgrid',
    t: 'Coolgrid',
    d: 'Responsive grid — Container, Row, Col (web + native).',
  },
  { n: 'hooks', t: 'Hooks', d: '28 React hooks; .native overrides where DOM-bound.' },
  {
    n: 'connector-styler',
    t: 'Connector · Styler',
    d: 'Adapter (~300 B) for the built-in engine.',
  },
  {
    n: 'connector-emotion',
    t: 'Connector · Emotion',
    d: 'Adapter for Emotion if you prefer their engine.',
  },
  {
    n: 'connector-styled-components',
    t: 'Connector · SC',
    d: 'Adapter for styled-components.',
  },
  {
    n: 'connector-native',
    t: 'Connector · Native',
    d: 'React Native styled() + CSS-string → RN style parser.',
  },
  {
    n: 'kinetic',
    t: 'Kinetic',
    d: 'Declarative enter/leave + TransitionGroup; GPU-composited.',
  },
  {
    n: 'kinetic-presets',
    t: 'Kinetic Presets',
    d: '123 animation presets, 5 factories, composition utilities.',
  },
  {
    n: 'rocketstories',
    t: 'Rocketstories',
    d: 'Auto-generated Storybook stories from rocketstyle components.',
  },
]

const SAMPLE = `import { init } from '@vitus-labs/core'
import * as connector from '@vitus-labs/connector-styler'
import { Element, Text, List } from '@vitus-labs/elements'

// One-line setup
init({ ...connector, component: 'div', textComponent: 'span' })

function FeatureCard({ icon, title, items }) {
  return (
    <Element tag="article" direction="rows" gap={16} padding={24}>
      <Element beforeContent={icon} gap={8} alignY="center">
        <Text tag="h3">{title}</Text>
      </Element>
      <List data={items} gap={4} direction="rows" />
    </Element>
  )
}`

function CodeBlock() {
  return (
    <pre>
      <code
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: SAMPLE.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/\b(import|from|function|return|const)\b/g, '<span class="kw">$1</span>')
            .replace(/(&#39;[^&]*&#39;|&apos;[^&]*&apos;|'[^']*')/g, '<span class="str">$1</span>')
            .replace(/(\/\/[^\n]*)/g, '<span class="cm">$1</span>'),
        }}
      />
    </pre>
  )
}

export default function HomePage() {
  return (
    <main className="vl-landing">
      <div
        style={{
          maxWidth: 1440,
          margin: '0 auto',
          padding: '0 clamp(24px, 4vw, 64px)',
        }}
      >
        {/* HERO */}
        <section className="vl-hero">
          <div className="vl-hero-bg" aria-hidden>
            <div className="grid" />
            <div className="glow" />
          </div>

          <div className="vl-hero-inner">
            <div>
              <Reveal>
                <div className="vl-hero-tag">
                  <span className="vl-dot-pulse" />
                  <span>15 packages · MIT · TypeScript-first</span>
                </div>
              </Reveal>

              <Reveal delay={50}>
                <h1 className="vl-hero-title">
                  Build, style
                  <br />
                  &amp; ship React
                  <br />
                  apps <em>composable.</em>
                </h1>
              </Reveal>

              <Reveal delay={100}>
                <p className="vl-hero-sub">
                  A modular React ecosystem — UI primitives, a{' '}
                  <strong>4.82&nbsp;KB</strong> CSS-in-JS engine (gzipped),
                  declarative animations, responsive layouts, and developer
                  tooling. Shared <strong>workspace:*</strong> deps so every
                  package in your monorepo stays in sync.
                </p>
              </Reveal>

              <Reveal delay={150}>
                <div className="vl-hero-ctas">
                  <Link
                    className="vl-btn vl-btn--primary"
                    href="/docs/getting-started"
                  >
                    Get started <span>→</span>
                  </Link>
                  <Link className="vl-btn" href="/docs">
                    Browse docs
                  </Link>
                  <a
                    className="vl-btn vl-btn--ghost vl-mono"
                    href="https://github.com/vitus-labs/ui-system"
                  >
                    GitHub ↗
                  </a>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div className="vl-hero-stats">
                  {STATS.map((s) => (
                    <div className="vl-hero-stat" key={s.lbl}>
                      <div className="n">
                        {s.float ? (
                          // 4.82 is rendered as-is — counting fractional ints adds noise
                          <span>{s.n}</span>
                        ) : (
                          <Counter target={s.n as number} suffix={s.suffix} />
                        )}
                      </div>
                      <div className="lbl">{s.lbl}</div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Visual */}
            <Reveal delay={120}>
              <div className="vl-hero-visual">
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
            </Reveal>
          </div>
        </section>

        {/* TICKER */}
        <Ticker />

        {/* FEATURES */}
        <section className="vl-section" id="features">
          <div className="vl-section-head">
            <Reveal>
              <div>
                <div className="eyebrow">— Why Vitus Labs</div>
                <h2>
                  One ecosystem,
                  <br />
                  <em>15 packages.</em>
                </h2>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="right">
                Every package works standalone but they interlock. Type-safe end
                to end. Swap engines (Styler/Emotion/styled-components) without
                touching component code.
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="vl-features">
              {FEATURES.map((f, i) => (
                <div className="vl-feature vl-f-span-4" key={f.meta}>
                  <div className="glyph">{f.glyph}</div>
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                  <div className="meta">
                    <span>{f.meta}</span>
                    <span>0{i + 1}/06</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* DEMO */}
        <section className="vl-section">
          <div className="vl-section-head">
            <Reveal>
              <div>
                <div className="eyebrow">— Developer experience</div>
                <h2>
                  Init in one line.
                  <br />
                  <em>Compose primitives.</em>
                </h2>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="right">
                Wire the engine, register a connector, build with type-safe
                primitives. Styler computes static styles once at module-eval
                and only re-runs dynamic interpolations per render.
              </div>
            </Reveal>
          </div>

          <div className="vl-demo">
            <Reveal>
              <div className="vl-demo-copy">
                <div className="vl-uppercase-tag">— app.tsx</div>
                <h2>The whole stack in three imports.</h2>
                <p>
                  Wire <span className="vl-mono">@vitus-labs/core</span> with
                  any connector, then compose primitives. The Styler engine
                  caches static templates on a single-entry hot path with a
                  WeakMap fallback.
                </p>
                <ul>
                  <li>
                    <b>Element</b>
                    <span className="dim"> — base primitive · 170+ CSS props</span>
                  </li>
                  <li>
                    <b>Text</b>
                    <span className="dim"> — typography, polymorphic tag</span>
                  </li>
                  <li>
                    <b>List</b>
                    <span className="dim"> — Iterator with simple/object/children modes</span>
                  </li>
                  <li>
                    <b>Rocketstyle</b>
                    <span className="dim"> — dimensions, theming, light/dark</span>
                  </li>
                  <li>
                    <b>Kinetic</b>
                    <span className="dim"> — Transition · Stagger · TransitionGroup · 123 presets</span>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="vl-demo-code">
                <div className="vl-demo-code-head">
                  <div className="dots">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="file">app.tsx</div>
                  <div className="blink">live</div>
                </div>
                <CodeBlock />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ECOSYSTEM */}
        <section className="vl-section" id="ecosystem">
          <div className="vl-section-head">
            <Reveal>
              <div>
                <div className="eyebrow">— @vitus-labs/*</div>
                <h2>
                  15 packages,
                  <br />
                  <em>built to compose.</em>
                </h2>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="right">
                Pick what you need. Every package is independently versioned
                with Changesets in a fixed group. Click to open the doc.
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="vl-eco">
              {ECO.map((p) => (
                <Link
                  key={p.n}
                  className="vl-pkg"
                  href={`/docs/${p.n.replace(/^connector-/, 'connectors')}`}
                >
                  <div className="nm">@vitus-labs/{p.n}</div>
                  <div className="ttl">{p.t}</div>
                  <div className="desc">{p.d}</div>
                </Link>
              ))}
            </div>
          </Reveal>
        </section>

        {/* INSTALL */}
        <section className="vl-section" id="install">
          <Reveal>
            <div className="vl-install">
              <div className="vl-install-grid">
                <div>
                  <div className="vl-uppercase-tag">— Three imports to ship</div>
                  <h2>
                    Install the engine.
                    <br />
                    Compose the rest.
                  </h2>
                  <p>
                    Three packages are enough to render: core, a connector, and
                    elements. Add styler-backed adapters and you have a typed
                    component layer on top of a 4.82 KB CSS-in-JS runtime. MIT
                    licensed.
                  </p>
                  <div style={{ marginTop: 24, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                    <Link
                      className="vl-btn vl-btn--primary"
                      href="/docs/getting-started"
                    >
                      Read the guide →
                    </Link>
                    <a
                      className="vl-btn"
                      href="https://github.com/vitus-labs/ui-system"
                    >
                      GitHub ↗
                    </a>
                  </div>
                </div>

                <div className="vl-terminal">
                  <div className="vl-terminal-head">
                    <div className="dots">
                      <span />
                      <span />
                      <span />
                    </div>
                    <span>~/my-app</span>
                  </div>
                  <pre>
                    <span className="info"># core + engine + primitives</span>
                    {'\n'}
                    <span className="prompt">$</span>{' '}
                    <span className="cmd">npm i @vitus-labs/core \</span>
                    {'\n   '}
                    <span className="cmd">@vitus-labs/connector-styler \</span>
                    {'\n   '}
                    <span className="cmd">@vitus-labs/elements</span>
                    {'\n\n'}
                    <span className="info"># peer: react ^19</span>
                    {'\n'}
                    <span className="ok">✓ resolved 15 workspace packages</span>
                    <span className="cursor" />
                  </pre>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* FOOTER */}
        <footer
          style={{
            marginTop: 80,
            borderTop: '1px solid var(--vl-border)',
            padding: '40px 0',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 16,
            justifyContent: 'space-between',
            alignItems: 'center',
            fontFamily: 'var(--vl-font-mono)',
            fontSize: 12,
            color: 'var(--vl-fg-muted)',
            letterSpacing: '0.05em',
          }}
        >
          <Lockup size={28} />
          <span>© {new Date().getFullYear()} VITUS·LABS — MIT LICENSE</span>
        </footer>
      </div>
    </main>
  )
}
