import { FC } from 'react'
import { SideMenu, Content } from '~/components/base/layout'
import { Container } from '~/components/base/grid'
import Base from '~/components/base/Base'

const component: FC = ({ children, sidePanel }) => (
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
      beforeContentAlignY="top"
      beforeContent={<SideMenu>{sidePanel}</SideMenu>}
    >
      <Content light>{children}</Content>
    </Base>
  </Container>
)

export default component
