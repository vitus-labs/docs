import { element } from '~/components/core'

export default element
  .config({ name: 'base/Box' })
  .attrs({
    tag: 'article',
    contentDirection: 'rows',
    contentAlignX: 'center',
  })
  .theme((t) => ({
    width: '100%',
    paddingX: t.spacing.xxLarge,
    paddingY: t.spacing.xxLarge * t.ratio.large,
    borderRadius: t.borderRadius.base,
    transition: t.transition.base,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',

    hover: {
      backgroundColor: 'rgba(255, 255, 255, 0.16)',
    },
  }))
