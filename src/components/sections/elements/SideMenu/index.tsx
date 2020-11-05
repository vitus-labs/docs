import React from 'react'
import Menu, { Item } from '~/components/base/menu/SideMenu'
import SubMenu from '../SideSubMenu'

const component = () => (
  <Menu>
    <Item active label="Basics" href="/docs/elements" />
    <SubMenu />
    <Item label="Element" href="/docs/elements/element" />
    <Item label="List" href="/docs/elements/list" />
  </Menu>
)

export default component
