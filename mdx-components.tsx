import defaultComponents from 'fumadocs-ui/mdx'
import { TypeTableAuto } from '@/components/type-table'
import { LiveCode } from '@/components/live-code'
import type { MDXComponents } from 'mdx/types'

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    AutoTypeTable: TypeTableAuto,
    LiveCode,
    ...components,
  }
}
