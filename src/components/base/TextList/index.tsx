import { list } from '~/components/core'
import Item from './Item'

export { Item }

export default list
  .config({ name: 'base/List' })
  .attrs({ tag: 'ul', component: Item })
  .theme({ listStyleType: 'initial' })
