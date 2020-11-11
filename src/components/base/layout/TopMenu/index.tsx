import React from 'react'
import { element } from '~/components/core'

const Wrapper = element
  .config({
    name: 'base/layout/TopMenu/Wrapper',
  })
  .attrs({
    block: true,
  })
  .theme((t) => ({
    width: '100%',
    height: t.layout.topMenu.height,
  }))

const Inner = element
  .config({
    name: 'base/layout/TopMenu/Inner',
  })
  .attrs({
    tag: 'header',
  })
  .theme((t) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: t.layout.topMenu.height,
    paddingX: t.spacing.xxxl,
    backgroundColor: t.layout.topMenu.bg,
    zIndex: t.layout.topMenu.zIndex,
    borderWidthBottom: 1,
    borderStyleBottom: 'solid',
    borderColorBottom: t.layout.topMenu.borderColor,
  }))
  .variants((t) => ({
    transparent: {
      backgroundColor: 'transparent',
      borderBottom: 'none',
    },
  }))

const component = (props) => (
  <Wrapper>
    <Inner {...props} />
  </Wrapper>
)

export default component
