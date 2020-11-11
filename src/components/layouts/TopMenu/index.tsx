import React from 'react'
import { TopMenu } from '~/components/base/layout'
import Logo from './Logo'
import Menu from './Menu'

const component = ({ transparent = false }) => (
  <TopMenu
    gap={16}
    beforeContent={Logo}
    content={Menu}
    afterContent="github"
    contentAlignX="right"
    transparent={transparent}
  />
)

export default component
