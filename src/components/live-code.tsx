'use client'

import { useTheme } from 'next-themes'
import { themes } from 'prism-react-renderer'
import { useEffect, useState } from 'react'
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live'

const scope = {}

interface LiveCodeProps {
  code: string
  scope?: Record<string, unknown>
  noInline?: boolean
}

export function LiveCode({ code, scope: extraScope, noInline }: LiveCodeProps) {
  const { resolvedTheme } = useTheme()
  // Avoid SSR/CSR theme flash — render with a deterministic fallback until
  // next-themes resolves the theme on the client.
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const editorTheme =
    mounted && resolvedTheme === 'dark' ? themes.vsDark : themes.oneLight

  return (
    <LiveProvider
      code={code.trim()}
      scope={{ ...scope, ...extraScope }}
      noInline={noInline}
      theme={editorTheme}
    >
      <div className="not-prose my-6 overflow-hidden rounded-xl border border-fd-border">
        <div className="border-b border-fd-border bg-fd-card p-4">
          <LivePreview />
        </div>
        <div className="relative">
          {/*
           * Drop the wrapper background so prism-react-renderer's own theme
           * background shows through. The editor adapts to light/dark via
           * `editorTheme` above. `oneLight` and `vsDark` give readable
           * contrast in both modes; the previous `bg-fd-secondary/50`
           * wrapper bled gray over the syntax tokens in light theme.
           */}
          <div className="max-h-[300px] overflow-auto text-sm [&_textarea]:outline-none [&_pre]:!p-4 [&_.token-line]:leading-6">
            <LiveEditor />
          </div>
        </div>
        <LiveError className="border-t border-red-300 bg-red-50 p-3 text-sm text-red-600 dark:border-red-800 dark:bg-red-950/30 dark:text-red-400" />
      </div>
    </LiveProvider>
  )
}
