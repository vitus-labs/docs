import { element } from '~/components/core'

export default element
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
      backgroundColor: t.layoutColor.bg,
    },
  }))
  .variants((t) => ({
    noGap: {
      padding: t.spacing.reset,
    },
  }))
