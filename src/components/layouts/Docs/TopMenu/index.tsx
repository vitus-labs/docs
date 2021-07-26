import { VFC } from 'react'
import { TopMenu } from '~/components/layout'
import { Container } from '~/components/grid'
import { Logo, IconList, Line } from '~/components/base'
import { element } from '~/components/core'
import Dropdown from './Dropdown'

const Root = element
  .attrs((_, t) => ({
    gap: t.spacing.large,
  }))
  .theme((t) => ({
    paddingX: { xs: t.spacing.large, xxxl: t.spacing.reset },
  }))

const component: VFC = () => (
  <TopMenu>
    <Container
      width={{
        xs: '100%',
        sm: '100%',
        md: '100%',
        lg: '100%',
        xxl: '100%',
        xxxl: 1560,
      }}
    >
      <Root
        beforeContent={
          <>
            <Logo />
            <Line vertical />
            <Dropdown />
          </>
        }
        afterContent={
          <IconList
            gap="xl"
            data={[
              { name: 'github', href: 'https://github.com/vitus-labs' },
              { name: 'twitter', href: 'https://twitter.com/VitusLabs' },
            ]}
          />
        }
      />
    </Container>
  </TopMenu>
)

component.displayName = 'layouts/Docs/TopMenu'

export default component
