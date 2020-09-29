import React from 'react'
import Menu, { Item } from '~/components/base/menu/SideMenu'

const component = () => (
  <Menu>
    <Item active label="Basics" href="/docs/elements" />
    <Item label="Element" href="/docs/elements/element" />
    <Item label="List" href="/docs/elements/list" />
  </Menu>
)

export default component
