import { RootProvider } from 'fumadocs-ui/provider/next'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './global.css'

export const metadata: Metadata = {
  title: {
    template: '%s | Vitus Labs',
    default: 'Vitus Labs — React UI System',
  },
  description:
    'A comprehensive, type-safe React component system with composable styling, responsive layouts, and swappable CSS engines.',
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
