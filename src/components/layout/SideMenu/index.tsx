import { FC } from 'react'
import { ExtractProps } from '~/types'
import { element } from '~/components/core'

const base = element
  .attrs({
    block: true,
    contentDirection: 'rows',
    contentAlignY: 'top',
    contentAlignX: 'block',
  })
  .theme({
    overflow: 'hidden',
  })

const Wrapper = base
  .config({
    name: 'base/layout/SideMenu/Wrapper',
  })
  .theme((t) => ({
    width: t.layout.sideMenu.width,
  }))

const InnerWrapper = base
  .config({
    name: 'base/layout/SideMenu/Inner',
  })
  .theme((t) => ({
    position: 'fixed',
    minHeight: '100%',
    top: t.layout.topMenu.height,
    width: t.layout.sideMenu.width,
    // height: t.layout.sideMenu.height,
    zIndex: t.layout.sideMenu.zIndex,
    background: t.layout.sideMenu.background,
  }))

const Inner = base
  .config({
    name: 'base/layout/SideMenu/Inner/Nav',
  })
  .attrs({
    tag: 'nav',
  })
  .theme((t) => ({
    // width: t.size.hideScrollBar,
    backgroundColor: t.layout.sideMenu.background,
    overflowY: 'auto',
    paddingY: 60,
  }))

type Props = ExtractProps<typeof Inner>

const component: FC<Props> = (props) => (
  <Wrapper>
    <InnerWrapper>
      <Inner {...props} />
    </InnerWrapper>
  </Wrapper>
)

export default component
