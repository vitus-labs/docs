import React from 'react'
import Content from '~/components/base/layout/Content'
import TopMenu from '../TopMenu'

const component = ({ children }) => (
  <>
    <TopMenu />
    <Content>{children}</Content>
  </>
)

export default component
