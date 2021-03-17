import { TopMenu } from '~/components/base/layout'
import { Container } from '~/components/base/grid'
import Base from '~/components/base/Base'
import Icon from '~/components/base/Icon'
import Logo from './Logo'
import Menu from './Menu'

const component = ({ transparent = false }) => (
  <TopMenu transparent={transparent}>
    <Container>
      <Base
        gap={16}
        beforeContent={Logo}
        content={Menu}
        afterContent={
          <Icon name="github" href="https://github.com/vitus-labs" />
        }
        contentAlignX="right"
      />
    </Container>
  </TopMenu>
)

export default component
