import React from 'react'
import Menu, { Item } from '~/components/base/menu/SideMenu'
import SubMenu from '../SideSubMenu'

const component = () => (
  <Menu>
    <Item active label="Basics" href={(r) => r.uiSystem.elements.base} />
    <SubMenu />
    <Item label="Element" href={(r) => r.uiSystem.elements.element} />
    <Item label="List" href={(r) => r.uiSystem.elements.list} />
    <Item label="Text" href={(r) => r.uiSystem.elements.text} />
    <Item label="Overlay" href={(r) => r.uiSystem.elements.overlay} />
  </Menu>
)

export default component
