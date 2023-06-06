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
    paddingX: { xs: 16, sm: 40 },
    paddingY: { xs: 32, sm: 48 },
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
