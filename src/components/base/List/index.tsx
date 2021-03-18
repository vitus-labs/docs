import { list } from '~/components/core'
import Item from './Item'

export { Item }

export default list
  .config({ name: 'base/List' })
  .attrs({ rootElement: true, component: Item })
