import { RootProvider } from 'fumadocs-ui/provider/next'
import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import './global.css'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://vitus-labs.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: '%s | Vitus Labs',
    default: 'Vitus Labs — Composable React engine',
  },
  description:
    'A modular React ecosystem — 15 packages, a 4.82 KB CSS-in-JS engine, 170+ CSS prop descriptors, 123 motion presets. Build, style, and ship React apps faster.',
  applicationName: 'Vitus Labs',
  authors: [{ name: 'Vít Bokisch', url: 'https://github.com/vitus-labs' }],
  keywords: [
    'react',
    'ui',
    'design system',
    'css-in-js',
    'styled components',
    'monorepo',
    'typescript',
    'animation',
    'react native',
    'vitus labs',
    'styler',
    'rocketstyle',
    'kinetic',
  ],
  category: 'technology',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Vitus Labs',
    title: 'Vitus Labs — Composable React engine',
    description:
      '15 packages · 4.82 KB CSS-in-JS engine · 170+ CSS props · 123 motion presets. One ecosystem, zero glue code.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vitus Labs — Composable React engine',
    description:
      '15 packages · 4.82 KB CSS-in-JS engine · 170+ CSS props · 123 motion presets.',
    creator: '@vitus_labs',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fdfbf5' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0b0d' },
  ],
  colorScheme: 'dark light',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <RootProvider
          search={{
            options: {
              type: 'static' as const,
            },
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  )
}
