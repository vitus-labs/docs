import Menu from '~/components/base/menu/SideMenu'
import Item from './Item'

const data = [
  {
    label: 'Basics',
    href: (r) => r.uiSystem.elements.base,
  },
  {
    label: 'Element',
    href: (r) => r.uiSystem.elements.element,
  },
  {
    label: 'List',
    href: (r) => r.uiSystem.elements.list,
  },
  {
    label: 'Text',
    href: (r) => r.uiSystem.elements.text,
  },
  {
    label: 'Overlay',
    href: (r) => r.uiSystem.elements.overlay,
  },
  {
    label: 'Portal',
    href: (r) => r.uiSystem.elements.portal,
  },
]

export default Menu.attrs({ component: Item, data })
