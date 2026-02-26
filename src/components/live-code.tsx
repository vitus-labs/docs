'use client'

import { LiveProvider, LiveEditor, LivePreview, LiveError } from 'react-live'
import type { ReactNode } from 'react'

const scope = {}

interface LiveCodeProps {
  code: string
  scope?: Record<string, unknown>
  noInline?: boolean
}

export function LiveCode({ code, scope: extraScope, noInline }: LiveCodeProps) {
  return (
    <LiveProvider
      code={code.trim()}
      scope={{ ...scope, ...extraScope }}
      noInline={noInline}
    >
      <div className="not-prose my-6 overflow-hidden rounded-xl border border-fd-border">
        <div className="border-b border-fd-border bg-fd-card p-4">
          <LivePreview />
        </div>
        <div className="relative">
          <div className="max-h-[300px] overflow-auto bg-fd-secondary/50 text-sm [&_textarea]:outline-none [&_pre]:!bg-transparent [&_pre]:!p-4 [&_.token-line]:leading-6">
            <LiveEditor />
          </div>
        </div>
        <LiveError className="border-t border-red-300 bg-red-50 p-3 text-sm text-red-600 dark:border-red-800 dark:bg-red-950/30 dark:text-red-400" />
      </div>
    </LiveProvider>
  )
}
