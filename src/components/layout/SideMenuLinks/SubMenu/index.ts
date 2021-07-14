import List, { Item as wrapComponent } from '~/components/base/List'
import Item from './Item'

export { Item }

export default List.attrs({
  component: Item,
  rootElement: true,
  block: true,
  tag: 'ul',
  wrapComponent,
}).theme({ width: '100%' })
