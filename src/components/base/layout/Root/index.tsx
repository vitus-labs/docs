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
    height: '100vh',
    backgroundColor: t.layoutColor.bg,
  }))
