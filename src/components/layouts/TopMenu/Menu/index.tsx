import React from 'react'
import TopMenu, { Item } from '~/components/base/menu/TopMenu'

const component = () => (
  <TopMenu>
    <Item href="/docs/elements">Elements</Item>
    <Item href="/docs/rocketstyle">Rocketstyle</Item>
    <Item href="/docs/unistyle">Unistyle</Item>
    <Item href="/docs/coolgrid">Coolgrid</Item>
    <Item href="/docs/bootstrap-ui">Bootstrap UI</Item>
  </TopMenu>
)

export default component
