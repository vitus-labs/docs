import Link from 'next/link'
import { Card, Cards } from 'fumadocs-ui/components/card'

const packages = [
  {
    title: 'Core',
    description: 'Configuration singleton, CSS engine connector, and utility functions.',
    href: '/docs/core',
  },
  {
    title: 'Styler',
    description: 'Lightweight CSS-in-JS engine (~3KB gzipped) with static/dynamic splitting.',
    href: '/docs/styler',
  },
  {
    title: 'Attrs',
    description: 'Immutable chainable default-props factory for React components.',
    href: '/docs/attrs',
  },
  {
    title: 'Elements',
    description: 'Core UI primitives — Element, Text, List, Overlay, Portal.',
    href: '/docs/elements',
  },
  {
    title: 'Rocketstyle',
    description: 'Dimension-based styling with theming, pseudo-states, and light/dark mode.',
    href: '/docs/rocketstyle',
  },
  {
    title: 'Unistyle',
    description: '170+ CSS property mappings with responsive breakpoints and unit conversion.',
    href: '/docs/unistyle',
  },
  {
    title: 'Coolgrid',
    description: 'Flexible responsive grid system with Container, Row, and Col.',
    href: '/docs/coolgrid',
  },
  {
    title: 'Hooks',
    description: '27 React hooks for state, DOM, events, timing, theming, and accessibility.',
    href: '/docs/hooks',
  },
  {
    title: 'Connectors',
    description: 'CSS engine adapters — switch between Styler, styled-components, or Emotion.',
    href: '/docs/connectors',
  },
]

const features = [
  {
    title: 'Engine Agnostic',
    description:
      'Swap CSS-in-JS engines without changing component code. Styler, styled-components, and Emotion supported.',
  },
  {
    title: 'Type-Safe',
    description:
      'Full TypeScript support with generic inference, dimension types, and strict prop validation.',
  },
  {
    title: 'Responsive',
    description:
      'Mobile-first responsive system with array, object, and scalar value formats across all components.',
  },
  {
    title: 'Composable',
    description:
      'Chainable API for building components incrementally — .attrs(), .theme(), .styles(), .compose().',
  },
  {
    title: 'Themeable',
    description:
      'Built-in light/dark mode, dimension-based theming, and context-based style cascading.',
  },
  {
    title: 'Lightweight',
    description:
      'Custom Styler engine at ~3KB gzipped. Static/dynamic CSS splitting for optimal performance.',
  },
]

export default function HomePage() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center gap-6 px-6 py-24 text-center md:py-32">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          Vitus Labs UI System
        </h1>
        <p className="max-w-2xl text-lg text-fd-muted-foreground md:text-xl">
          A comprehensive, type-safe React component system with composable
          styling, responsive layouts, and swappable CSS engines.
        </p>
        <div className="flex gap-3">
          <Link
            href="/docs"
            className="rounded-lg bg-fd-primary px-6 py-2.5 font-semibold text-fd-primary-foreground transition-colors hover:bg-fd-primary/90"
          >
            Get Started
          </Link>
          <Link
            href="https://github.com/vitus-labs/ui-system"
            className="rounded-lg border border-fd-border px-6 py-2.5 font-semibold transition-colors hover:bg-fd-accent"
          >
            GitHub
          </Link>
        </div>
        <div className="mt-2 flex items-center gap-2 text-sm text-fd-muted-foreground">
          <code className="rounded bg-fd-accent px-2 py-0.5 text-xs">
            v2.0.0-alpha.25
          </code>
          <span>·</span>
          <span>13 packages</span>
          <span>·</span>
          <span>MIT License</span>
        </div>
      </section>

      {/* Features */}
      <section className="w-full max-w-6xl px-6 py-16">
        <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">
          Why Vitus Labs?
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-fd-border bg-fd-card p-6"
            >
              <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm text-fd-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Packages */}
      <section className="w-full max-w-6xl px-6 py-16">
        <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">
          Packages
        </h2>
        <Cards>
          {packages.map((pkg) => (
            <Card
              key={pkg.title}
              title={pkg.title}
              description={pkg.description}
              href={pkg.href}
            />
          ))}
        </Cards>
      </section>

      {/* Quick Install */}
      <section className="w-full max-w-6xl px-6 py-16">
        <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">
          Quick Start
        </h2>
        <div className="mx-auto max-w-2xl overflow-hidden rounded-xl border border-fd-border bg-fd-card">
          <div className="border-b border-fd-border px-4 py-2 text-sm text-fd-muted-foreground">
            Terminal
          </div>
          <pre className="overflow-x-auto p-4 text-sm">
            <code>{`npm install @vitus-labs/core @vitus-labs/styler \\
  @vitus-labs/connector-styler @vitus-labs/elements \\
  @vitus-labs/rocketstyle`}</code>
          </pre>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-fd-border px-6 py-8 text-center text-sm text-fd-muted-foreground">
        <p>MIT License · Vitus Labs</p>
      </footer>
    </main>
  )
}
