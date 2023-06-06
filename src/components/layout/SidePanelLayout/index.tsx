import { FC, ReactNode, useMemo } from 'react'
import { Container } from '~/components/grid'
import { Element } from '~/components/core'
import { useIsLargeViewport } from '~/hooks/useViewport'
import SideMenu from '../SideMenu'
import content from '../Content'

const Background = content.attrs({
  light: true,
})

const Content = content
  .attrs({
    light: true,
  })
  .theme({
    maxWidth: 1024,
    paddingX: 0,
    paddingY: 0,
  })

type Props = {
  children: ReactNode
  sidePanel: ReactNode
  side?: 'left' | 'right'
}

const Component: FC<Props> = ({ children, side = 'left', sidePanel }) => {
  const isLargeViewPort = useIsLargeViewport()

  const layoutProps = useMemo(
    () =>
      side === 'left'
        ? {
            beforeContentAlignY: 'top' as const,
            beforeContent: <SideMenu>{sidePanel}</SideMenu>,
          }
        : {
            afterContentAlignY: 'top' as const,
            afterContent: <SideMenu>{sidePanel}</SideMenu>,
          },
    [side, sidePanel]
  )

  return (
    <Container
      width={({ xxxl }) => ({
        xs: '100%',
        sm: '100%',
        md: '100%',
        lg: '100%',
        xxl: '100%',
        xxxl,
      })}
    >
      <Element
        contentDirection="inline"
        {...(isLargeViewPort ? layoutProps : {})}
      >
        <Background>
          <Content>{children}</Content>
        </Background>
      </Element>
    </Container>
  )
}

Component.displayName = 'base/layout/SidePanelLayout'

export default Component
