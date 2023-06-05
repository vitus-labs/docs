import { FC, ReactNode, useMemo } from 'react'
import { Container } from '~/components/grid'
import { Element } from '~/components/core'
import SideMenu from '../SideMenu'
import Content from '../Content'

type Props = {
  children: ReactNode
  sidePanel: ReactNode
  side?: 'left' | 'right'
}

const Component: FC<Props> = ({ children, side = 'left', sidePanel }) => {
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
      <Element contentDirection="inline" {...layoutProps}>
        <Content light>{children}</Content>
      </Element>
    </Container>
  )
}

Component.displayName = 'base/layout/SidePanelLayout'

export default Component
