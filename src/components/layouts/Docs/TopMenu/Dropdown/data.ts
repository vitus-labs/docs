export default [
  {
    title: 'UI System',
    data: [
      { label: 'Elements', icon: 'elements', href: '/docs/ui-system/elements' },
      {
        label: 'Rocketstyle',
        icon: 'rocketstyle',
        href: '/docs/ui-system/rocketstyle',
      },
      { label: 'Unistyle', icon: 'unistyle', href: '/docs/ui-system/unistyle' },
      { label: 'Coolgrid', icon: 'coolgrid', href: '/docs/ui-system/coolgrid' },
    ],
  },
  {
    title: 'Tools',
    data: [
      { label: 'Rollup', icon: 'rollup', href: '/docs/tools/rollup' },
      {
        label: 'Babel',
        icon: 'babel',
        href: '/docs/tools/babel',
      },
      { label: 'Lint', icon: 'eslint', href: '/docs/tools/lint' },
      {
        label: 'Storybook',
        icon: 'storybook',
        href: '/docs/tools/storybook',
      },
    ],
  },
] as const
