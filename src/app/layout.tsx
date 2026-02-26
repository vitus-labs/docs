import { RootProvider } from 'fumadocs-ui/provider/next'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './global.css'

export const metadata: Metadata = {
  title: {
    template: '%s | Vitus Labs',
    default: 'Vitus Labs — React UI & Developer Tools',
  },
  description:
    'A modular ecosystem for building, styling, testing, and shipping React applications — from UI primitives to developer tooling.',
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
