import React from 'react'
import TopMenuLinks, { Item } from '~/components/layout/TopMenuLinks'

const Component = ({ ...props }) => (
  <TopMenuLinks block={false} {...props}>
    <Item href="/#ui-systems">UI Systems</Item>
    <Item href="/#tooling">Tooling</Item>
  </TopMenuLinks>
)

export default Component
