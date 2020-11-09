import { element } from '~/components/core'

export default element
  .attrs({
    block: true,
    vertical: true,
    contentDirection: 'rows',
    contentAlignY: 'top',
    contentAlignX: 'block',
  })
  .theme((t) => ({
    height: t.layout.root.height,
    backgroundColor: t.layout.root.bg,
  }))
