import { element } from '~/components/core'

export default element
  .config({ name: 'base/layout/Content' })
  .attrs({
    block: true,
    contentDirection: 'rows',
    contentAlignY: 'top',
    contentAlignX: 'block',
  })
  .theme((t) => ({
    padding: 40,
  }))
  .states((t) => ({
    light: {
      background: t.layout.root.background,
    },
  }))
  .variants((t) => ({
    noGap: {
      padding: t.spacing.reset,
    },
  }))
