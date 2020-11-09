import { element } from '~/components/core'

export default element
  .attrs({
    block: true,
    contentDirection: 'rows',
    contentAlignY: 'top',
  })
  .theme((t) => ({
    // position: 'fixed',
    // left: 0,
    // top: 80,
    width: t.layout.sideMenu.width,
    height: t.layout.sideMenu.height,
    backgroundColor: t.layout.sideMenu.bg,
  }))
