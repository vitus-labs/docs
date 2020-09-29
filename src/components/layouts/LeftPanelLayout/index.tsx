import React from 'react'
import { Element } from '~/components/core'
import SideMenu from '~/components/base/layout/SideMenu'
import Content from '~/components/base/layout/Content'

const component = ({ sidePanel, children }) => (
  <Element
    contentDirection="inline"
    beforeContentAlignY="top"
    beforeContent={<SideMenu content={sidePanel} />}
  >
    <Content light>{children}</Content>
  </Element>
)

export default component
