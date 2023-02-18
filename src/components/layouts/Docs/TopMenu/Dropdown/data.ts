import routes from '~/core/routes'

export default [
  {
    title: 'UI System',
    data: [
      {
        label: 'Elements',
        icon: 'elements',
        href: routes.uiSystem.elements.base,
      },
      {
        label: 'Rocketstyle',
        icon: 'rocketstyle',
        href: routes.uiSystem.rocketstyle.base,
      },
      {
        label: 'Unistyle',
        icon: 'unistyle',
        href: routes.uiSystem.unistyle.base,
      },
      {
        label: 'Coolgrid',
        icon: 'coolgrid',
        href: routes.uiSystem.coolgrid.base,
      },
      {
        label: 'Hooks',
        icon: 'coolgrid',
        href: routes.uiSystem.hooks.base,
      },
    ],
  },
  {
    title: 'Tools',
    data: [
      { label: 'Rollup', icon: 'rollup', href: routes.tooling.rollup.base },
      {
        label: 'Babel',
        icon: 'babel',
        href: routes.tooling.babel.base,
      },
      { label: 'Lint', icon: 'lint', href: routes.tooling.lint.base },
      {
        label: 'Storybook',
        icon: 'storybook',
        href: routes.tooling.storybook.base,
      },
    ],
  },
] as const
