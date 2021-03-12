export default {
  home: '/',
  uiSystem: {
    elements: {
      base: '/docs/ui-system/elements',
      element: '/docs/ui-system/elements/element',
      list: '/docs/ui-system/elements/list',
      text: '/docs/ui-system/elements/text',
      overlay: '/docs/ui-system/elements/overlay',
      portal: '/docs/ui-system/elements/portal',
    },
    rocketstyle: {
      base: '/docs/ui-system/rocketstyle',
    },
    unistyle: {
      base: '/docs/ui-system/unistyle',
    },
    coolgrid: { base: '/docs/ui-system/coolgrid' },
  },
  tooling: {
    babel: { base: '/docs/tooling/babel' },
    rollup: { base: '/docs/tooling/rollup' },
    storybook: { base: '/docs/tooling/storybook' },
    eslint: { base: '/docs/tooling/eslint' },
  },
} as const
