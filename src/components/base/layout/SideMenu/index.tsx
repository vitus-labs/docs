import { element } from '~/components/core'

export default element
  .attrs({
    block: true,
    contentDirection: 'rows',
  })
  .theme((t) => ({
    width: 320,
    backgroundColor: t.layoutColor.sideMenu,
  }))
