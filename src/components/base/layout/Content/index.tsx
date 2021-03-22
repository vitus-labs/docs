import { element } from '~/components/core'

export default element
  .config({ name: 'base/layout/Content' })
  .attrs({
    block: true,
    contentDirection: 'rows',
    contentAlignY: 'top',
    contentAlignX: 'block',
  })
  .theme({
    paddingX: 40,
    paddingY: 48,
    zIndex: 2,
    width: '100%',
  })
  .states((t) => ({
    light: {
      background: t.layout.content.background,
    },
  }))
  .variants((t) => ({
    noGap: {
      padding: t.spacing.reset,
    },
  }))
