import Link from 'next/link'
import { Card, Cards } from 'fumadocs-ui/components/card'

const uiPackages = [
  {
    title: 'Core',
    description:
      'Configuration singleton, CSS engine connector, and utility functions.',
    href: '/docs/core',
  },
  {
    title: 'Styler',
    description:
      'Lightweight CSS-in-JS engine (~3KB gzipped) with static/dynamic splitting.',
    href: '/docs/styler',
  },
  {
    title: 'Attrs',
    description:
      'Immutable chainable default-props factory for React components.',
    href: '/docs/attrs',
  },
  {
    title: 'Elements',
    description: 'Core UI primitives — Element, Text, List, Overlay, Portal.',
    href: '/docs/elements',
  },
  {
    title: 'Rocketstyle',
    description:
      'Dimension-based styling with theming, pseudo-states, and light/dark mode.',
    href: '/docs/rocketstyle',
  },
  {
    title: 'Unistyle',
    description:
      '170+ CSS property mappings with responsive breakpoints and unit conversion.',
    href: '/docs/unistyle',
  },
  {
    title: 'Coolgrid',
    description:
      'Flexible responsive grid system with Container, Row, and Col.',
    href: '/docs/coolgrid',
  },
  {
    title: 'Hooks',
    description:
      '28 React hooks for state, DOM, events, timing, theming, and accessibility.',
    href: '/docs/hooks',
  },
  {
    title: 'Connectors',
    description:
      'CSS engine adapters — switch between Styler, styled-components, or Emotion.',
    href: '/docs/connectors',
  },
  {
    title: 'Kinetic',
    description:
      'Declarative enter/leave animations — Transition, Collapse, Stagger, and TransitionGroup.',
    href: '/docs/kinetic',
  },
  {
    title: 'Kinetic Presets',
    description:
      '122 animation presets, 5 factories, and composition utilities for Kinetic.',
    href: '/docs/kinetic-presets',
  },
  {
    title: 'Rocketstories',
    description:
      'Auto-generated Storybook stories from rocketstyle components.',
    href: '/docs/rocketstories',
  },
]

const toolsPackages = [
  {
    title: 'Tools Core',
    description:
      'Cascading config loader, file discovery, and package metadata.',
    href: '/docs/tools-core',
  },
  {
    title: 'Tools Rolldown',
    description:
      'Rust-based bundler for library packages with DTS generation.',
    href: '/docs/tools-rolldown',
  },
  {
    title: 'Tools Rollup',
    description: 'Rollup-based build tool — legacy alternative to Rolldown.',
    href: '/docs/tools-rollup',
  },
  {
    title: 'Tools Vitest',
    description:
      'Shared Vitest config factory with sensible defaults and 90% coverage.',
    href: '/docs/tools-vitest',
  },
  {
    title: 'Tools Storybook',
    description:
      'Preconfigured Storybook 10 with auto-discovery and rocketstories.',
    href: '/docs/tools-storybook',
  },
  {
    title: 'Tools TypeScript',
    description: 'Shared tsconfig presets for libraries and Next.js apps.',
    href: '/docs/tools-typescript',
  },
  {
    title: 'Tools Lint',
    description: 'Shared Biome config for formatting and linting.',
    href: '/docs/tools-lint',
  },
  {
    title: 'Tools Next.js',
    description: 'Next.js config wrapper with security headers.',
    href: '/docs/tools-nextjs',
  },
  {
    title: 'Tools Next.js Images',
    description:
      'Image optimization plugin — WebP, LQIP, responsive, SVG sprites.',
    href: '/docs/tools-nextjs-images',
  },
  {
    title: 'Tools Atlas',
    description:
      'Dependency graph visualizer and monorepo health analyzer.',
    href: '/docs/tools-atlas',
  },
  {
    title: 'Tools Favicon',
    description: 'Multi-platform favicon and PWA manifest generator.',
    href: '/docs/tools-favicon',
  },
]

const features = [
  {
    icon: '{}',
    title: 'Type-Safe End to End',
    description:
      'Generic inference, dimension types, strict prop validation. TypeScript is a first-class citizen, not an afterthought.',
  },
  {
    icon: '<>',
    title: 'Composable by Design',
    description:
      'Chainable APIs everywhere — .attrs(), .theme(), .styles(). Build complex components from small, reusable pieces.',
  },
  {
    icon: '><',
    title: 'Swap Your Engine',
    description:
      'Write components once, run with Styler, styled-components, or Emotion. Switch CSS engines without touching component code.',
  },
  {
    icon: '[]',
    title: 'Responsive Built In',
    description:
      'Every layout prop accepts scalars, arrays, or breakpoint objects. Mobile-first responsive design without media query boilerplate.',
  },
  {
    icon: '()',
    title: 'Batteries Included',
    description:
      'Build, test, lint, bundle, analyze — shared configs and tooling so every package in your monorepo stays consistent.',
  },
  {
    icon: '//',
    title: '3KB CSS Engine',
    description:
      'Custom Styler engine with static/dynamic splitting, concurrent-mode safe injection, and deterministic class hashing.',
  },
]

const codeExample = `import { init } from '@vitus-labs/core'
import connector from '@vitus-labs/connector-styler'
import { Element, Text, List } from '@vitus-labs/elements'

// One-line setup
init({ ...connector, component: 'div', textComponent: 'span' })

// Start building
function FeatureCard({ icon, title, items }) {
  return (
    <Element tag="article" direction="rows" gap={16} padding={24}>
      <Element beforeContent={icon} gap={8} alignY="center">
        <Text tag="h3">{title}</Text>
      </Element>
      <List
        component={({ children }) => <Text>{children}</Text>}
        data={items}
        valueName="children"
        gap={4}
        direction="rows"
      />
    </Element>
  )
}`

export default function HomePage() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center gap-8 px-6 pb-20 pt-28 text-center md:pb-28 md:pt-36">
        <div className="hero-glow" aria-hidden="true" />

        <div className="flex items-center gap-2 rounded-full border border-fd-border bg-fd-card/60 px-4 py-1.5 text-sm backdrop-blur-sm">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
          <span className="text-fd-muted-foreground">
            v2.0.0-alpha.26 — actively developed
          </span>
        </div>

        <h1 className="max-w-3xl text-5xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
          Build, style &amp; ship{' '}
          <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-violet-400 dark:to-fuchsia-400">
            React apps
          </span>{' '}
          faster
        </h1>

        <p className="max-w-2xl text-lg leading-relaxed text-fd-muted-foreground md:text-xl">
          A modular ecosystem of 26 packages — composable UI primitives,
          a 3KB CSS-in-JS engine, animations, responsive layouts, and
          developer tools that keep your whole monorepo in sync.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/docs/getting-started"
            className="rounded-xl bg-fd-primary px-7 py-3 text-base font-semibold text-fd-primary-foreground shadow-lg shadow-fd-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-fd-primary/25"
          >
            Get Started
          </Link>
          <Link
            href="/docs"
            className="rounded-xl border border-fd-border bg-fd-background px-7 py-3 text-base font-semibold transition-all hover:-translate-y-0.5 hover:bg-fd-accent"
          >
            Browse Docs
          </Link>
          <Link
            href="https://github.com/vitus-labs"
            className="rounded-xl border border-fd-border bg-fd-background px-7 py-3 text-base font-semibold transition-all hover:-translate-y-0.5 hover:bg-fd-accent"
          >
            GitHub
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-4 flex flex-wrap justify-center gap-10">
          <div className="stat-pill">
            <span className="stat-value">26</span>
            <span className="stat-label">Packages</span>
          </div>
          <div className="stat-pill">
            <span className="stat-value">3KB</span>
            <span className="stat-label">CSS Engine</span>
          </div>
          <div className="stat-pill">
            <span className="stat-value">170+</span>
            <span className="stat-label">CSS Props</span>
          </div>
          <div className="stat-pill">
            <span className="stat-value">28</span>
            <span className="stat-label">React Hooks</span>
          </div>
          <div className="stat-pill">
            <span className="stat-value">122</span>
            <span className="stat-label">Animation Presets</span>
          </div>
        </div>
      </section>

      {/* Code showcase */}
      <section className="w-full max-w-4xl px-6 py-12">
        <div className="code-showcase overflow-hidden rounded-2xl border border-fd-border bg-fd-card">
          <div className="flex items-center gap-2 border-b border-fd-border px-5 py-3">
            <span className="h-3 w-3 rounded-full bg-red-400/60" />
            <span className="h-3 w-3 rounded-full bg-yellow-400/60" />
            <span className="h-3 w-3 rounded-full bg-green-400/60" />
            <span className="ml-3 text-xs text-fd-muted-foreground">
              app.tsx
            </span>
          </div>
          <pre className="overflow-x-auto p-5 text-[13px] leading-relaxed">
            <code>{codeExample}</code>
          </pre>
        </div>
      </section>

      {/* Features */}
      <section className="w-full max-w-6xl px-6 py-20">
        <h2 className="mb-3 text-center text-3xl font-bold tracking-tight md:text-4xl">
          Why Vitus Labs?
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-center text-fd-muted-foreground">
          One ecosystem, zero glue code. Every package is designed to work
          together — or standalone.
        </p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="feature-card rounded-2xl border border-fd-border bg-fd-card p-6"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-fd-accent font-mono text-sm font-bold text-fd-muted-foreground">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-base font-semibold">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-fd-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* UI System */}
      <section className="w-full max-w-6xl px-6 py-20">
        <div className="mb-10 flex flex-col items-center gap-3">
          <span className="rounded-full bg-blue-500/10 px-4 py-1 text-sm font-medium text-blue-600 dark:text-blue-400">
            @vitus-labs/*
          </span>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            UI System
          </h2>
          <p className="max-w-lg text-center text-fd-muted-foreground">
            Components, styling, layout, hooks, and theming — everything you
            need to build React interfaces.
          </p>
        </div>
        <Cards>
          {uiPackages.map((pkg) => (
            <Card
              key={pkg.title}
              title={pkg.title}
              description={pkg.description}
              href={pkg.href}
            />
          ))}
        </Cards>
      </section>

      {/* Developer Tools */}
      <section className="w-full max-w-6xl px-6 py-20">
        <div className="mb-10 flex flex-col items-center gap-3">
          <span className="rounded-full bg-violet-500/10 px-4 py-1 text-sm font-medium text-violet-600 dark:text-violet-400">
            @vitus-labs/tools-*
          </span>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Developer Tools
          </h2>
          <p className="max-w-lg text-center text-fd-muted-foreground">
            Build, test, lint, bundle, and analyze — shared configs for the
            full development lifecycle.
          </p>
        </div>
        <Cards>
          {toolsPackages.map((pkg) => (
            <Card
              key={pkg.title}
              title={pkg.title}
              description={pkg.description}
              href={pkg.href}
            />
          ))}
        </Cards>
      </section>

      {/* CTA */}
      <section className="w-full max-w-3xl px-6 py-20">
        <div className="flex flex-col items-center gap-6 rounded-2xl border border-fd-border bg-fd-card p-10 text-center">
          <h2 className="text-2xl font-bold md:text-3xl">Ready to start?</h2>
          <p className="max-w-md text-fd-muted-foreground">
            Get up and running in minutes. Install the core packages, init the
            engine, and build your first component.
          </p>
          <div className="w-full max-w-lg">
            <div className="code-showcase overflow-hidden rounded-xl border border-fd-border bg-fd-secondary/30">
              <pre className="overflow-x-auto px-5 py-4 text-sm">
                <code>
                  npm i @vitus-labs/core @vitus-labs/styler
                  @vitus-labs/connector-styler @vitus-labs/elements
                </code>
              </pre>
            </div>
          </div>
          <Link
            href="/docs/getting-started"
            className="rounded-xl bg-fd-primary px-7 py-3 font-semibold text-fd-primary-foreground shadow-lg shadow-fd-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-fd-primary/25"
          >
            Read the Guide
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-fd-border px-6 py-8 text-center text-sm text-fd-muted-foreground">
        <p>MIT License · Vitus Labs</p>
      </footer>
    </main>
  )
}
