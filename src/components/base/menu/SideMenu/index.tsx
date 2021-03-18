import List, { Item as wrapComponent } from '../../List'
import Item from './Item'

export { Item }

export default List.attrs({
  rootElement: true,
  block: true,
  tag: 'ul',
  wrapComponent,
  component: Item,
})
