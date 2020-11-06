import React from 'react'
import Content from '~/components/base/layout/Content'
import TopMenu from '../TopMenu'

const component = ({ children }) => (
  <>
    <TopMenu />
    <Content noGap>{children}</Content>
  </>
)

export default component
