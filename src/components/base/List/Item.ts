import { element } from '~/components/core'

export default element
  .config({ name: 'base/List/Item' })
  .attrs({
    tag: 'li',
    block: true,
    contentDirection: 'rows',
    contentAlignX: 'block',
  })
