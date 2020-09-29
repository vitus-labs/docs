import React from 'react'
import { TopMenu } from '~/components/base/layout'
import Menu from './Menu'

const component = () => (
  <TopMenu
    gap={16}
    beforeContent="logo"
    content={Menu}
    afterContent="github"
    contentAlignX="right"
  />
)

export default component
