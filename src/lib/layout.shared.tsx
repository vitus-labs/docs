import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared'
import { Lockup } from '@/components/landing/Mark'

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: <Lockup size={32} />,
    },
    links: [
      {
        text: 'Documentation',
        url: '/docs',
        active: 'nested-url',
      },
      {
        text: 'GitHub',
        url: 'https://github.com/vitus-labs/ui-system',
        external: true,
      },
    ],
  }
}
