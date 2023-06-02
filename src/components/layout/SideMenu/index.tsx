import { FC } from 'react'
import { ExtractProps } from '~/types'
import { element } from '~/components/core'

const base = element.attrs({
  block: true,
  contentDirection: 'rows',
  contentAlignY: 'top',
  contentAlignX: 'block',
})

const Wrapper = base
  .config({
    name: 'base/layout/SideMenu/Wrapper',
  })
  .theme((t) => ({
    width: t.layout.sideMenu.width,
    height: '100%',
    background: t.layout.sideMenu.background,
    zIndex: t.layout.sideMenu.zIndex,
  }))

const Inner = base
  .config({
    name: 'base/layout/SideMenu/Inner',
  })
  .theme((t) => ({
    position: 'fixed',
    overflowY: 'scroll',
    width: 'inherit',
    height: 'inherit',
    paddingY: t.spacing.xxLarge * 2,
  }))

const Navigation = base
  .config({
    name: 'base/layout/SideMenu/Inner/Nav',
  })
  .attrs({
    tag: 'nav',
  })

type Props = ExtractProps<typeof Navigation>

const Component: FC<Props> = (props) => (
  <Wrapper>
    <Inner>
      <Navigation {...props} />
    </Inner>
  </Wrapper>
)

export default Component
