import { FC, ReactNode } from 'react'
import { SideMenu, Content } from '~/components/base/layout'
import { Container } from '~/components/grid'
import Base from '~/components/base/Base'

type Props = {
  sidePanel: ReactNode
}

const component: FC<Props> = ({ children, sidePanel }) => (
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
    <Base
      contentDirection="inline"
      afterContentAlignY="top"
      afterContent={<SideMenu>{sidePanel}</SideMenu>}
    >
      <Content light>{children}</Content>
    </Base>
  </Container>
)

component.displayName = 'base/layout/RightSidePanel'

export default component
