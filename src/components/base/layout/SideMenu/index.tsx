import { VFC } from 'react'
import { ExtractProps } from '~/types'
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
    background: t.layout.sideMenu.background,
    overflowY: 'auto',
    overflowX: 'hidden',
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
    backgroundColor: t.layout.sideMenu.background,
  }))

type Props = ExtractProps<typeof Inner>

const component: VFC<Props> = (props) => (
  <Wrapper>
    <InnerWrapper>
      <Inner {...props} />
    </InnerWrapper>
  </Wrapper>
)

export default component
