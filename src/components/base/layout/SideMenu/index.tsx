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

const InnerWrapper = element
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
    zIndex: t.layout.sideMenu.zIndex,
    backgroundColor: t.layout.sideMenu.bg,
    overflowY: 'scroll',
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
    width: 'inherit',
    backgroundColor: t.layout.sideMenu.bg,
  }))

const component = (props) => (
  <Wrapper>
    <InnerWrapper>
      <Inner {...props} />
    </InnerWrapper>
  </Wrapper>
)

export default component
