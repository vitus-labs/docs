import React from 'react'
import LeftPanelLayout from '../LeftPanelLayout'
import TopMenu from '../TopMenu'

const component = ({ sidePanel, children }) => (
  <>
    <TopMenu />
    <LeftPanelLayout sidePanel={sidePanel}>{children}</LeftPanelLayout>
  </>
)

export default component
