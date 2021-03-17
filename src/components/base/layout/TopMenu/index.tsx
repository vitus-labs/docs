import { element } from '~/components/core'
import { Container } from '../../grid'

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
    backgroundColor: t.layout.topMenu.background,
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
    <Wrapper />
    <Inner {...props} />
  </Wrapper>
)

export default component
