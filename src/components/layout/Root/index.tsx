import { element } from '~/components/core'

export default element
  .config({ name: 'base/layout/Root' })
  .attrs({
    tag: 'main',
    block: true,
    direction: 'rows',
    contentDirection: 'rows',
    contentAlignY: 'top',
    contentAlignX: 'block',
  })
  .theme((t) => ({
    minHeight: t.layout.root.height,
    backgroundColor: t.layout.root.background,
    overflowX: 'hidden',
  }))
