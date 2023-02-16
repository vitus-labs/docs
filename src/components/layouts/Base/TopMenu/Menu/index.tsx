import React from 'react'
import TopMenuLinks, { Item } from '~/components/layout/TopMenuLinks'

const component = () => (
  <TopMenuLinks block={false}>
    <Item href="/#ui-systems">UI Systems</Item>
    <Item href="/#tooling">Tooling</Item>
  </TopMenuLinks>
)

export default component
