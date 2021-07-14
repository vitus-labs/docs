import { VFC } from 'react'
import { TopMenu } from '~/components/base/layout'
import { Container } from '~/components/grid'
import base from '~/components/base/Base'
import Logo from '~/components/base/Logo'
import Icon from '~/components/base/Icon'
import Line from '~/components/base/Line'
import Dropdown from './Dropdown'

const Root = base
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
          <>
            <Icon name="github" href="https://github.com/vitus-labs" />
            <Icon name="twitter" href="https://github.com/vitus-labs" />
          </>
        }
      />
    </Container>
  </TopMenu>
)

component.displayName = 'layouts/Docs/TopMenu'

export default component
