import { element } from '~/components/core'

export default element
  .config({ name: 'base/layout/Root' })
  .attrs({
    tag: 'main',
    block: true,
    vertical: true,
    contentDirection: 'rows',
    contentAlignY: 'top',
    contentAlignX: 'block',
  })
  .theme((t) => ({
    height: t.layout.root.height,
    backgroundColor: t.layout.root.background,
  }))
