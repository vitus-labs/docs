import { TopMenu, Logo } from '~/components/layout'
import { Container } from '~/components/grid'
import base from '~/components/base/Base'
import IconList from '~/components/base/IconList'

import Menu from './Menu'

const Wrapper = base
  .attrs((_, t) => ({
    gap: t.spacing.large,
  }))
  .theme((t) => ({
    paddingX: { xs: t.spacing.large, md: t.spacing.reset },
  }))

const component = ({ transparent = false }) => (
  <TopMenu transparent={transparent}>
    <Container>
      <Wrapper
        beforeContent={Logo}
        content={Menu}
        afterContent={
          <IconList
            gap="xl"
            data={[
              { name: 'github', href: 'https://github.com/vitus-labs' },
              { name: 'twitter', href: 'https://twitter.com/VitusLabs' },
            ]}
          />
        }
        contentAlignX="right"
      />
    </Container>
  </TopMenu>
)

export default component
