import { list } from '~/components/core'
import Item from './Item'

export { Item }
export default list
  .attrs({ rootElement: true, block: true })
  .theme({ width: '100%' })
