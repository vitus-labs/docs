import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared'

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'Vitus Labs',
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
