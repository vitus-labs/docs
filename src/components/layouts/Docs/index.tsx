import React from 'react'
import Base from '../Base'
import LeftPanelLayout from '../LeftPanelLayout'
import TopMenu from '../TopMenu'

const component = ({ sidePanel, children }) => (
  <Base>
    <TopMenu />
    <LeftPanelLayout sidePanel={sidePanel}>{children}</LeftPanelLayout>
  </Base>
)

export default component
