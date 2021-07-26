import { element } from '~/components/core'

export default element
  .config({ name: 'base/Box' })
  .attrs({
    tag: 'article',
    block: true,
    contentDirection: 'rows',
    contentAlignX: 'center',
  })
  .theme((t) => ({
    width: '100%',
    paddingX: t.spacing.xxLarge,
    paddingY: t.spacing.xxLarge * t.ratio.medium,
    borderRadius: t.borderRadius.base,
    transition: t.transition.base,
  }))
  .states((t) => ({
    light: {
      backgroundColor: t.color.light[100],

      hover: {
        backgroundColor: t.color.light[200],
      },
    },
    dark: {
      backgroundColor: t.color.dark[200],

      hover: {
        backgroundColor: t.color.dark[300],
      },
    },
  }))
