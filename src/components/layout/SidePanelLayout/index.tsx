import { FC, ReactNode } from 'react'
import { SideMenu, Content } from '~/components/layout'
import { Container } from '~/components/grid'
import Base from '~/components/base/Base'

type Props = {
  sidePanel: ReactNode
  side?: 'left' | 'right'
}

const component: FC<Props> = ({ children, side = 'left', sidePanel }) => {
  const layoutProps = () =>
    side === 'left'
      ? {
          beforeContentAlignY: 'top' as const,
          beforeContent: <SideMenu>{sidePanel}</SideMenu>,
        }
      : {
          afterContentAlignY: 'top' as const,
          afterContent: <SideMenu>{sidePanel}</SideMenu>,
        }

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
      <Base contentDirection="inline" {...layoutProps()}>
        <Content light>{children}</Content>
      </Base>
    </Container>
  )
}

component.displayName = 'base/layout/SidePanelLayout'

export default component
