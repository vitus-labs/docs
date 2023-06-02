import { TopMenu } from '~/components/layout'
import { Container } from '~/components/grid'
import { IconList, Logo } from '~/components/base'
import { element } from '~/components/core'

import Menu from './Menu'

const Wrapper = element
  .attrs((_, t) => ({
    gap: t.spacing.large,
  }))
  .theme((t) => ({
    paddingX: { xs: t.spacing.large, md: t.spacing.reset },
  }))

const Component = ({ transparent = false }) => (
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

export default Component
