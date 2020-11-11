import React from 'react'
import Menu, { Item } from '~/components/base/menu/SideSubMenu'

const component = () => (
  <Menu>
    <Item active label="Motivation" href="#motivation" />
    <Item label="Installation" href="#installation" />
    <Item label="Getting started" href="#getting-started" />
    <Item label="Components" href="#components" />
  </Menu>
)

export default component
