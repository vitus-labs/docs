import React from 'react'
import { element } from '~/components/core'

const Wrapper = element
  .config({
    name: 'base/layout/SideMenu/Wrapper',
  })
  .attrs({
    block: true,
    contentDirection: 'rows',
    contentAlignY: 'top',
  })
  .theme((t) => ({
    // position: 'fixed',
    width: t.layout.sideMenu.width,
  }))

const Inner = element
  .config({
    name: 'base/layout/SideMenu/Inner',
  })
  .attrs({
    block: true,
    contentDirection: 'rows',
    contentAlignY: 'top',
  })
  .theme((t) => ({
    position: 'fixed',
    left: 0,
    top: t.layout.topMenu.height,
    width: t.layout.sideMenu.width,
    height: t.layout.sideMenu.height,
    backgroundColor: t.layout.sideMenu.bg,
    zIndex: t.layout.sideMenu.zIndex,
  }))

const component = (props) => (
  <Wrapper>
    <Inner {...props} />
  </Wrapper>
)

export default component
