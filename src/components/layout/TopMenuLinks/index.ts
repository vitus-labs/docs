import { list } from '~/components/core'
import Item from './Item'

export { Item }

export default list
  .attrs({
    contentDirection: 'inline',
  })
  .theme({ height: 'inherit' })
